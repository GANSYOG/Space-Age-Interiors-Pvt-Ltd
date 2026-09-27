import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

content = content.replace("const updateItem = (id, field, value) => {", "const updateItem = (id: number, field: string, value: any) => {")
content = content.replace("const removeItem = (id) => {", "const removeItem = (id: number) => {")

with open('src/App.tsx', 'w') as f:
    f.write(content)
