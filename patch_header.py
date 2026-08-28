import re
with open('src/App.tsx', 'r') as f: content = f.read()

# 1. Make nav solid black always
content = re.sub(
    r'<nav className={`fixed w-full z-50 transition-all duration-500 \$\{isScrolled \? \'glass-nav py-5 shadow-sm\' : \'bg-transparent py-7\'}`\}>',
    r'<nav className="fixed w-full z-50 py-5 bg-[#000000] border-b border-gray-800 shadow-sm">',
    content
)

# 2. Remove bg-black/40 pills from the left and right menu wrappers
content = content.replace(
    'hidden md:flex items-center space-x-10 text-xs tracking-[0.2em] uppercase text-gray-300 font-bold bg-black/40 px-4 py-2 rounded-lg',
    'hidden md:flex items-center space-x-10 text-xs tracking-[0.2em] uppercase text-gray-300 font-medium'
)
content = content.replace(
    'hidden md:flex items-center justify-end space-x-8 text-xs tracking-[0.2em] uppercase text-gray-300 font-bold bg-black/40 px-4 py-2 rounded-lg',
    'hidden md:flex items-center justify-end space-x-8 text-xs tracking-[0.2em] uppercase text-gray-300 font-medium'
)

with open('src/App.tsx', 'w') as f: f.write(content)
