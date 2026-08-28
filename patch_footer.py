import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# Fix footer colors. Replace text-white and text-gray-400 inside the footer section ONLY.
footer_start = content.find('<footer')
footer_end = content.find('</footer>')

if footer_start != -1 and footer_end != -1:
    footer_html = content[footer_start:footer_end]
    # In golden footer, we want dark text
    footer_html = footer_html.replace('text-gray-400', 'text-gray-800')
    footer_html = footer_html.replace('text-white', 'text-black')
    footer_html = footer_html.replace('text-gray-500', 'text-gray-700')

    # Put it back
    content = content[:footer_start] + footer_html + content[footer_end:]

with open('src/App.tsx', 'w') as f:
    f.write(content)
