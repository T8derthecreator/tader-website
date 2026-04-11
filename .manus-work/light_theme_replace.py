from pathlib import Path

path = Path('/home/ubuntu/tader-website/client/src/pages/SitePages.tsx')
text = path.read_text()

replacements = [
    ('<section className="border-b border-white/10">', '<section className="border-b border-black/8">'),
    ('<h1 className="max-w-4xl font-display text-5xl leading-[0.92] text-white sm:text-6xl xl:text-7xl">', '<h1 className="max-w-4xl font-display text-5xl leading-[0.92] text-graphite sm:text-6xl xl:text-7xl">'),
    ('<Button className="rounded-none border border-copper/40 bg-copper px-6 py-6 font-mono text-[11px] uppercase tracking-[0.24em] text-graphite hover:bg-copper-soft">', '<Button className="rounded-none border border-copper/50 bg-copper px-6 py-6 font-mono text-[11px] uppercase tracking-[0.24em] text-white shadow-[0_18px_36px_rgba(194,121,74,0.14)] hover:bg-copper-soft">'),
    ('<Button variant="outline" className="rounded-none border-white/20 px-6 py-6 font-mono text-[11px] uppercase tracking-[0.24em] text-white hover:bg-white/6">', '<Button variant="outline" className="rounded-none border-black/12 bg-white/72 px-6 py-6 font-mono text-[11px] uppercase tracking-[0.24em] text-graphite hover:bg-[#f3efe8]">'),
    ('<Button variant="outline" className="rounded-none border-white/20 px-6 py-6 font-mono text-[11px] uppercase tracking-[0.24em] text-white hover:bg-white/5">', '<Button variant="outline" className="rounded-none border-black/12 bg-white/72 px-6 py-6 font-mono text-[11px] uppercase tracking-[0.24em] text-graphite hover:bg-[#f3efe8]">'),
    ('<div className="relative overflow-hidden border border-white/10 bg-graphite-elevated">', '<div className="relative overflow-hidden border border-black/8 bg-white/88 shadow-[0_28px_60px_rgba(15,23,42,0.08)]">'),
    ('? "border-copper bg-copper/16 text-white"\n          : "border-white/12 bg-white/[0.03] text-steel-300 hover:border-white/30 hover:text-white"', '? "border-copper bg-copper text-white"\n          : "border-black/10 bg-white/84 text-steel-500 hover:border-copper/40 hover:text-graphite"'),
    ('<aside className="space-y-8 border border-white/10 bg-white/[0.03] p-6">', '<aside className="space-y-8 border border-black/8 bg-white/82 p-6 shadow-[0_20px_44px_rgba(15,23,42,0.06)]">'),
    ('<div className="flex items-center justify-between border-b border-white/10 pb-4">', '<div className="flex items-center justify-between border-b border-black/8 pb-4">'),
    ('<p className="mt-2 text-sm text-steel-300">By flute count, construction, sub-type, or series.</p>', '<p className="mt-2 text-sm text-steel-500">By flute count, construction, sub-type, or series.</p>'),
    ('<Filter className="size-4 text-white/60" />', '<Filter className="size-4 text-steel-400" />'),
    ('className="rounded-none border-white/10 bg-black/20 text-white placeholder:text-steel-500"', 'className="rounded-none border-black/10 bg-[#f8f5ef] text-graphite placeholder:text-steel-400"'),
    ('<div className="overflow-hidden border border-white/10 bg-white/[0.03]">', '<div className="overflow-hidden border border-black/8 bg-white/82 shadow-[0_20px_44px_rgba(15,23,42,0.06)]">'),
    ('<table className="min-w-full border-collapse text-left text-sm text-steel-200">', '<table className="min-w-full border-collapse text-left text-sm text-steel-500">'),
    ('<thead className="bg-white/[0.04] font-mono text-[11px] uppercase tracking-[0.18em] text-steel-400">', '<thead className="bg-[#f3efe8] font-mono text-[11px] uppercase tracking-[0.18em] text-steel-400">'),
    ('<tr key={sku.slug} className="border-t border-white/8 transition-colors duration-200 hover:bg-white/[0.03]">', '<tr key={sku.slug} className="border-t border-black/8 transition-colors duration-200 hover:bg-[#f8f4ee]">'),
    ('<td className="px-4 py-4 font-medium text-white">{sku.series}</td>', '<td className="px-4 py-4 font-medium text-graphite">{sku.series}</td>'),
    ('className="rounded-none border border-copper/30 bg-copper/10 px-2 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-copper-soft"', 'className="rounded-none border border-copper/30 bg-copper/10 px-2 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-copper"'),
    ('className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:text-copper-soft"', 'className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-graphite transition-colors duration-200 hover:text-copper"'),
    ('<div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">', '<div className="grid gap-px border border-black/8 bg-black/8 sm:grid-cols-3">'),
    ('<div className="bg-graphite-elevated p-6">', '<div className="bg-white/88 p-6">'),
    ('<p className="mt-3 font-display text-4xl text-white">{filtered.length}</p>', '<p className="mt-3 font-display text-4xl text-graphite">{filtered.length}</p>'),
    ('<p className="mt-3 font-display text-4xl text-white">{baseSkus.length}</p>', '<p className="mt-3 font-display text-4xl text-graphite">{baseSkus.length}</p>'),
    ('<p className="mt-3 font-display text-4xl text-white">{category ? getFamiliesByCategory(category.slug).length : taderData.categoryPages.length}</p>', '<p className="mt-3 font-display text-4xl text-graphite">{category ? getFamiliesByCategory(category.slug).length : taderData.categoryPages.length}</p>'),
    ('<section className="container space-y-10 border-t border-white/10 py-14 lg:py-20">', '<section className="container space-y-10 border-t border-black/8 py-14 lg:py-20">'),
    ('<section className="container space-y-10 border-t border-white/10 py-14 lg:py-24">', '<section className="container space-y-10 border-t border-black/8 py-14 lg:py-24">'),
    ('className="group relative overflow-hidden border border-white/10 bg-graphite-elevated"', 'className="group relative overflow-hidden border border-black/8 bg-white/88 shadow-[0_20px_44px_rgba(15,23,42,0.08)]"'),
    ('<h2 className="font-display text-4xl leading-tight text-white lg:text-5xl">', '<h2 className="font-display text-4xl leading-tight text-graphite lg:text-5xl">'),
    ('<p className="max-w-xl text-base leading-8 text-steel-300">', '<p className="max-w-xl text-base leading-8 text-steel-500">'),
    ('<div className="overflow-hidden border border-white/10">', '<div className="overflow-hidden border border-black/8 shadow-[0_20px_44px_rgba(15,23,42,0.08)]">'),
    ('<h1 className="font-display text-4xl text-white">Product not found</h1>', '<h1 className="font-display text-4xl text-graphite">Product not found</h1>'),
    ('<div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1fr_360px]">', '<div className="grid gap-8 border-b border-black/8 pb-10 lg:grid-cols-[1fr_360px]">'),
    ('<h1 className="font-display text-5xl leading-[0.94] text-white lg:text-6xl">', '<h1 className="font-display text-5xl leading-[0.94] text-graphite lg:text-6xl">'),
    ('<Badge className="rounded-none border border-copper/30 bg-copper/10 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-copper-soft">', '<Badge className="rounded-none border border-copper/30 bg-copper/10 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-copper">'),
    ('<Badge className="rounded-none border border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-steel-200">', '<Badge className="rounded-none border border-black/8 bg-[#f5f1ea] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-steel-500">'),
    ('<Badge key={option} className="rounded-none border border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white">', '<Badge key={option} className="rounded-none border border-black/8 bg-[#f5f1ea] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-graphite">'),
    ('<div className="space-y-4 border border-white/10 bg-white/[0.03] p-6">', '<div className="space-y-4 border border-black/8 bg-white/82 p-6 shadow-[0_20px_44px_rgba(15,23,42,0.06)]">'),
    ('<p className="text-sm leading-7 text-steel-300">', '<p className="text-sm leading-7 text-steel-500">'),
    ('<Button className="w-full rounded-none border border-copper/40 bg-copper px-6 py-6 font-mono text-[11px] uppercase tracking-[0.24em] text-graphite hover:bg-copper-soft">', '<Button className="w-full rounded-none border border-copper/50 bg-copper px-6 py-6 font-mono text-[11px] uppercase tracking-[0.24em] text-white hover:bg-copper-soft">'),
    ('<div className="space-y-6 border border-white/10 bg-white/[0.03] p-6">', '<div className="space-y-6 border border-black/8 bg-white/82 p-6 shadow-[0_20px_44px_rgba(15,23,42,0.06)]">'),
    ('<h2 className="font-display text-3xl text-white">Specification Table</h2>', '<h2 className="font-display text-3xl text-graphite">Specification Table</h2>'),
    ('<div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-3">', '<div className="grid gap-px border border-black/8 bg-black/8 sm:grid-cols-2 xl:grid-cols-3">'),
    ('<div className="border border-white/10 bg-white/[0.03] p-6">', '<div className="border border-black/8 bg-white/82 p-6 shadow-[0_20px_44px_rgba(15,23,42,0.06)]">'),
    ('<h2 className="font-display text-2xl text-white">Construction Notes</h2>', '<h2 className="font-display text-2xl text-graphite">Construction Notes</h2>'),
    ('<section className="space-y-8 border-t border-white/10 pt-10">', '<section className="space-y-8 border-t border-black/8 pt-10">'),
    ('<div className="space-y-6 border border-white/10 bg-white/[0.03] p-8">', '<div className="space-y-6 border border-black/8 bg-white/82 p-8 shadow-[0_20px_44px_rgba(15,23,42,0.06)]">'),
    ('<h2 className="font-display text-4xl text-white">Process fit for high-consequence components.</h2>', '<h2 className="font-display text-4xl text-graphite">Process fit for high-consequence components.</h2>'),
    ('<div key={point} className="border border-white/10 bg-white/[0.03] p-6">', '<div key={point} className="border border-black/8 bg-white p-6">'),
    ('<p className="mt-4 text-lg text-white">{point}</p>', '<p className="mt-4 text-lg text-graphite">{point}</p>'),
    ('<div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">', '<div className="grid gap-px border border-black/8 bg-black/8 md:grid-cols-3">'),
    ('<h2 className="font-display text-4xl text-white">Information to include</h2>', '<h2 className="font-display text-4xl text-graphite">Information to include</h2>'),
    ('<div className="border border-copper/25 bg-copper/8 p-5 text-sm leading-7 text-steel-200">', '<div className="border border-copper/25 bg-copper/8 p-5 text-sm leading-7 text-steel-500">'),
    ('className="border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.3)]"', 'className="border border-black/8 bg-white/88 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)]"'),
    ('className="h-12 rounded-none border-white/12 bg-[#0f1419] text-white placeholder:text-steel-500"', 'className="h-12 rounded-none border-black/10 bg-[#f8f5ef] text-graphite placeholder:text-steel-400"'),
    ('className="min-h-[220px] rounded-none border border-white/12 bg-[#0f1419] px-3 py-3 text-white outline-none transition-colors placeholder:text-steel-500 focus:border-copper/60"', 'className="min-h-[220px] rounded-none border border-black/10 bg-[#f8f5ef] px-3 py-3 text-graphite outline-none transition-colors placeholder:text-steel-400 focus:border-copper/60"'),
    ('<div className="flex flex-col gap-4 border-t border-white/10 pt-5 md:flex-row md:items-center md:justify-between">', '<div className="flex flex-col gap-4 border-t border-black/8 pt-5 md:flex-row md:items-center md:justify-between">'),
    ('<p>This form submits through Formspree using the existing intake ID <span className="font-mono text-white">{taderData.siteMeta.formspreeId}</span>.</p>', '<p>This form submits through Formspree using the existing intake ID <span className="font-mono text-graphite">{taderData.siteMeta.formspreeId}</span>.</p>'),
    ('className="rounded-none border border-copper/40 bg-copper px-6 py-6 font-mono text-[11px] uppercase tracking-[0.25em] text-graphite hover:bg-copper-soft disabled:opacity-70"', 'className="rounded-none border border-copper/50 bg-copper px-6 py-6 font-mono text-[11px] uppercase tracking-[0.25em] text-white hover:bg-copper-soft disabled:opacity-70"'),
    ('<h1 className="font-display text-5xl text-white lg:text-7xl">The requested page is outside the current tooling map.</h1>', '<h1 className="font-display text-5xl text-graphite lg:text-7xl">The requested page is outside the current tooling map.</h1>'),
    ('<p className="max-w-2xl text-base leading-8 text-steel-300">The route <span className="font-mono text-white">{location}</span> is not available in the current TADER site structure.</p>', '<p className="max-w-2xl text-base leading-8 text-steel-500">The route <span className="font-mono text-graphite">{location}</span> is not available in the current TADER site structure.</p>'),
    ('<Link href="/"><Button className="rounded-none border border-copper/40 bg-copper px-6 py-6 font-mono text-[11px] uppercase tracking-[0.24em] text-graphite">Return Home</Button></Link>', '<Link href="/"><Button className="rounded-none border border-copper/50 bg-copper px-6 py-6 font-mono text-[11px] uppercase tracking-[0.24em] text-white">Return Home</Button></Link>'),
    ('<Link href="/products"><Button variant="outline" className="rounded-none border-white/20 px-6 py-6 font-mono text-[11px] uppercase tracking-[0.24em] text-white">Open Products</Button></Link>', '<Link href="/products"><Button variant="outline" className="rounded-none border-black/12 bg-white/72 px-6 py-6 font-mono text-[11px] uppercase tracking-[0.24em] text-graphite">Open Products</Button></Link>'),
]

count = 0
for old, new in replacements:
    if old in text:
        occurrences = text.count(old)
        text = text.replace(old, new)
        count += occurrences

# broad structural replacements after exact ones
text = text.replace('border-t border-white/10', 'border-t border-black/8')
text = text.replace('border border-white/10', 'border border-black/8')
text = text.replace('border-white/12', 'border-black/10')
text = text.replace('border-white/20', 'border-black/12')
text = text.replace('bg-white/[0.03]', 'bg-white/82')
text = text.replace('bg-white/[0.04]', 'bg-[#f5f1ea]')
text = text.replace('bg-white/10', 'bg-black/8')
text = text.replace('bg-graphite-elevated', 'bg-white/88')
text = text.replace('text-white lg:text-7xl', 'text-graphite lg:text-7xl')
text = text.replace('text-white lg:text-6xl', 'text-graphite lg:text-6xl')
text = text.replace('text-white lg:text-5xl', 'text-graphite lg:text-5xl')

path.write_text(text)
print(f'Applied broad light-theme replacements to SitePages.tsx')
