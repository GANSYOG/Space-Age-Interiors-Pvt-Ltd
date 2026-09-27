import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# Replace range slider displays with input fields so they are directly editable
# Fix Area
content = content.replace(
    '<span className="text-[#fb923c] text-2xl font-black">{sqFt.toLocaleString(\'en-IN\')} sq.ft</span>',
    '<div className="flex items-center text-[#fb923c] text-2xl font-black"><input type="number" min="500" max="100000" value={sqFt} onChange={(e) => setSqFt(Number(e.target.value))} className="bg-transparent w-28 text-right outline-none border-b border-dashed border-[#fb923c]/50 focus:border-[#fb923c] mr-2" /> sq.ft</div>'
)

# Fix Rate
content = content.replace(
    '<span className="text-[#fb923c] text-2xl font-black">₹{ratePerSqFt.toLocaleString(\'en-IN\')}</span>',
    '<div className="flex items-center text-[#fb923c] text-2xl font-black"><span className="mr-1">₹</span><input type="number" min="999" max="100000" value={ratePerSqFt} onChange={(e) => setRatePerSqFt(Number(e.target.value))} className="bg-transparent w-32 outline-none border-b border-dashed border-[#fb923c]/50 focus:border-[#fb923c]" /></div>'
)

with open('src/App.tsx', 'w') as f:
    f.write(content)
