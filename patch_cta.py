import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# Fix 1: CTA text color hover on dark background
content = content.replace(
    'hover:bg-[#C9A76A] hover:text-white',
    'hover:bg-[#C9A76A] hover:text-[#0F0F0F]'
)

# Fix 2: 'Book Private Consultation' on Hero
content = content.replace(
    'bg-transparent border border-gray-400 text-[#F5F5F5]',
    'bg-transparent border border-gray-400 text-gray-300'
)
content = content.replace(
    'hover:border-[#1A1A1A] transition-colors',
    'hover:border-[#C9A76A] hover:text-[#C9A76A] transition-colors'
)

# Fix 3: 'Book Private Consultation' in room showcase
content = content.replace(
    'border border-[#1A1A1A] text-[#F5F5F5] px-6 py-3 uppercase tracking-widest text-xs font-medium hover:bg-[#1A1A1A] hover:text-white',
    'border border-gray-600 text-gray-300 px-6 py-3 uppercase tracking-widest text-xs font-medium hover:border-[#C9A76A] hover:text-[#C9A76A]'
)

# Fix 4: Solid buttons with hover color updates
content = content.replace(
    'bg-[#1A1A1A] text-white',
    'bg-[#C9A76A] text-[#0F0F0F]'
)
content = content.replace(
    'hover:bg-[#C9A76A]',
    'hover:bg-[#E3C388]'
)

# Fix modal close buttons to contrast with black background
content = content.replace(
    'hover:text-black',
    'hover:text-white'
)


with open('src/App.tsx', 'w') as f:
    f.write(content)
