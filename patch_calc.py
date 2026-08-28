import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# Update calculator limits
content = content.replace('max="99999"', 'max="100000"')
content = content.replace('₹99,999', '₹1,00,000')

# Update toLocaleString to use en-IN for Indian number format
content = content.replace('.toLocaleString()', ".toLocaleString('en-IN')")

with open('src/App.tsx', 'w') as f:
    f.write(content)
