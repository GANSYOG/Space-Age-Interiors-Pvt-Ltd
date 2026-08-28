import re
with open('src/App.tsx', 'r') as f:
    content = f.read()

# Replace the static class for nav items that might not be visible on hero image
content = content.replace(
    'text-gray-300 font-medium',
    'text-gray-300 font-bold bg-black/40 px-4 py-2 rounded-lg'
)

# Replace the logo text class to ensure it's visible on hero
content = content.replace(
    'font-serif text-xl tracking-[0.2em] uppercase font-bold text-[#F5F5F5]',
    'font-serif text-xl tracking-[0.2em] uppercase font-bold text-[#F5F5F5] drop-shadow-md'
)

with open('src/App.tsx', 'w') as f:
    f.write(content)
