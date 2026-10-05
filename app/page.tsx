const categories = [
  { name: 'Audio', icon: '🎧', description: 'Immersive sound for every room.' },
  { name: 'Wearables', icon: '⌚', description: 'Elegant tech for everyday life.' },
  { name: 'Home', icon: '🏠', description: 'Modern pieces for refined living.' },
  { name: 'Travel', icon: '🧳', description: 'Smart essentials for every trip.' }
];

const featuredProducts = [
  { name: 'Aero Speaker', price: '$249', tag: 'New', accent: 'from-violet-500 to-purple-600' },
  { name: 'Orbit Watch', price: '$399', tag: 'Best Seller', accent: 'from-sky-500 to-cyan-600' },
  { name: 'Luma Lamp', price: '$189', tag: 'Limited', accent: 'from-amber-400 to-orange-500' },
  { name: 'Drift Case', price: '$79', tag: 'Popular', accent: 'from-rose-500 to-pink-600' }
];

const stats = [
  { label: 'Happy Customers', value: '24k+' },
  { label: 'Product Reviews', value: '4.9/5' },
  { label: 'Fast Delivery', value: '2 days' },
  { label: 'Support', value: '24/7' }
];

const testimonials = [
  { quote: 'The quality feels premium and the design is incredible.', author: 'Sarah H.' },
  { quote: 'Everything arrives quickly and looks even better in person.', author: 'Omar T.' },
  { quote: 'I love the minimal aesthetic and the user experience.', author: 'Leah M.' }
];

export default function Home() {
  return (
    <main className="bg-[#f8f5f1] text-slate-900">
      <header className="mx-auto max-w-7xl px-5 pt-6">
        <nav className="flex items-center justify-between rounded-full border border-slate-200/80 bg-white/70 px-5 py-3 shadow-sm backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">N</div>
            <div>
              <p className="text-lg font-semibold tracking-tight">Nexa</p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#shop" className="transition hover:text-slate-900">Shop</a>
            <a href="#categories" className="transition hover:text-slate-900">Collections</a>
            <a href="#reviews" className="transition hover:text-slate-900">Reviews</a>
            <a href="#contact" className="transition hover:text-slate-900">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 md:inline-flex">Sign in</button>
            <button className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:bg-slate-800">Shop now</button>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 md:grid-cols-2 md:items-center md:pt-20">
        <div>
          <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
            New season launch
          </span>
          <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
            Curated essentials for an elevated life.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Discover premium technology, home pieces, and everyday favorites designed to simplify your routine with style.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:bg-slate-800">Explore collection</button>
            <button className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400">See lookbook</button>
          </div>

          <div className="mt-10 flex flex-wrap gap-8">
            {stats.map((item) => (
              <div key={item.label}>
                <div className="text-2xl font-black text-slate-900">{item.value}</div>
                <div className="text-sm text-slate-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-violet-200 blur-3xl" />
          <div className="absolute -right-2 bottom-5 h-44 w-44 rounded-full bg-amber-200 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-violet-700 p-6 text-white">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-[0.2em] text-white/80">NEW DROP</span>
                <span className="text-xl font-semibold">Nexa</span>
              </div>

              <div className="mt-10 flex min-h-[280px] items-end justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/70">Signature</p>
                  <h2 className="mt-3 text-4xl font-black">Aero Speaker</h2>
                  <p className="mt-3 text-white/80">360° immersive sound</p>
                </div>
                <div className="mb-4 flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/5 text-5xl shadow-inner shadow-white/10">
                  🔊
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">Shop by category</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Designed for your everyday rhythm</h2>
          </div>
          <a href="#shop" className="hidden text-sm font-semibold text-slate-700 md:inline-flex">View all</a>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {categories.map((category) => (
            <div key={category.name} className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-3xl">{category.icon}</div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">{category.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="shop" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Featured products</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">Built for modern living</h2>
            </div>
            <button className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10">Browse all</button>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {featuredProducts.map((product) => (
              <div key={product.name} className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5">
                <div className={`flex h-56 items-center justify-center bg-gradient-to-br ${product.accent} text-6xl`}>
                  {product.name.includes('Watch') ? '⌚' : product.name.includes('Lamp') ? '💡' : product.name.includes('Case') ? '👜' : '🎵'}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-200">{product.tag}</span>
                    <span className="text-xl font-bold">{product.price}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{product.name}</h3>
                  <button className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">Customer love</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">What people are saying</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimony) => (
            <div key={testimony.author} className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex text-yellow-400">★★★★★</div>
              <p className="text-base leading-7 text-slate-700">"{testimony.quote}"</p>
              <div className="mt-6 border-t border-slate-100 pt-4 text-sm font-semibold text-slate-900">{testimony.author}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 pb-24">
        <div className="rounded-[2rem] bg-gradient-to-r from-slate-900 via-slate-800 to-violet-800 px-6 py-10 text-white shadow-soft md:px-12">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">Stay in the loop</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Sign up for exclusive drops and offers.</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-full border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none ring-0 focus:border-white/40 sm:min-w-[220px]"
              />
              <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>© 2025 Nexa Studio</p>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
