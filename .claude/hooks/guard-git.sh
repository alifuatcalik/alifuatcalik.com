#!/usr/bin/env bash
# PreToolUse (Bash) — main branch'ine commit/push'u engeller.
# Kural kaynağı: .claude/rules/git.md

input=$(cat)
cmd=$(echo "$input" | jq -r '.tool_input.command // ""')
branch=$(git -C "${CLAUDE_PROJECT_DIR:-.}" branch --show-current 2>/dev/null)

deny() {
  jq -n --arg reason "$1" '{
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: $reason
    }
  }'
  exit 0
}

# Sadece satır/komut başındaki gerçek git çağrısını eşle — commit mesajı, heredoc
# veya string içindeki "git push ... main" metni tetiklememeli.
# `git -C <path> <sub>` biçimi de desteklenir.
GIT='(^|[;&|(]|&&|\|\|)[[:space:]]*git([[:space:]]+-C[[:space:]]+[^[:space:]]+)?[[:space:]]+'

# Heredoc gövdelerini at: "<<'EOF'" / "<<EOF" sonrası satırlar incelenmez.
scan=$(echo "$cmd" | awk '/<</ { print; exit } { print }')

if echo "$scan" | grep -qE "${GIT}commit\b" && [ "$branch" = "main" ]; then
  deny "⛔ BRANCH RULE: main üzerinde commit yasak. Önce branch aç: git checkout -b <type>/<name>"
fi

push_seg=$(echo "$scan" | grep -oE "${GIT}push[^;&|]*" | head -1)
if [ -n "$push_seg" ] && { [ "$branch" = "main" ] || echo "$push_seg" | grep -qE '[[:space:]:]main\b'; }; then
  deny "⛔ BRANCH RULE: main'e doğrudan push yasak. Değişiklik PR + squash merge ile girer."
fi

exit 0
