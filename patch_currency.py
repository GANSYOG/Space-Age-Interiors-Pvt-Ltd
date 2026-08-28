import re
with open('src/App.tsx', 'r') as f: content = f.read()

content = content.replace('${(sqFt * ratePerSqFt)', '₹{(sqFt * ratePerSqFt)')

with open('src/App.tsx', 'w') as f: f.write(content)
