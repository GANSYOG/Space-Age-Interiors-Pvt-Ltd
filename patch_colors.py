import re
with open('src/App.tsx', 'r') as f: content = f.read()

# Fix glass nav background
content = content.replace('rgba(253, 251, 247, 0.95)', 'rgba(15, 15, 15, 0.95)')

# Fix mobile menu overlay
content = content.replace('bg-[#FDFBF7]', 'bg-[#0F0F0F]')

with open('src/App.tsx', 'w') as f: f.write(content)
