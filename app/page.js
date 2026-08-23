"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Reveal from "./components/Reveal";

const whatsappNumber = "923152964917";
const phoneNumber = "+923152964917";
const heroImages = ["/hero-bridal-3.jpg", "/hero-red-maxi.jpg"];

const products = [
  { id: "fa-01", tag: "BARAAT EDIT", title: "Rani Gul Bridal Lehenga", price: 185000, fabric: "Raw silk · Velvet · Net", work: "Zardozi · Dabka · Sequin", image: "https://images.pexels.com/photos/5622603/pexels-photo-5622603.jpeg?auto=compress&cs=tinysrgb&w=1200", description: "A regal deep crimson lehenga with a hand-worked velvet blouse and four-sided dupatta border.", tone: "Crimson / Gold" },
  { id: "fa-02", tag: "WALIMA EDIT", title: "Noor Champagne Gown", price: 125000, fabric: "Organza · Silk · Net", work: "Pearl spray · Gota", image: "https://images.pexels.com/photos/31750723/pexels-photo-31750723.jpeg?auto=compress&cs=tinysrgb&w=1200", description: "An easy, luminous silhouette in champagne gold, finished with a soft pearl shimmer for the Walima.", tone: "Champagne / Pearl" },
  { id: "fa-03", tag: "MEHNDI EDIT", title: "Sunehri Gota Sharara", price: 98000, fabric: "Cotton silk · Organza", work: "Gota · Mirror work", image: "https://images.pexels.com/photos/9596225/pexels-photo-9596225.jpeg?auto=compress&cs=tinysrgb&w=1200", description: "A joyful mustard sharara set with playful gota borders and a light, dance-ready dupatta.", tone: "Marigold / Antique gold" },
  { id: "fa-04", tag: "NIKKAH EDIT", title: "Gulabo Rose Peshwas", price: 110000, fabric: "Pure silk · Tissue", work: "Resham · Mukaish", image: "https://images.pexels.com/photos/33023960/pexels-photo-33023960.jpeg?auto=compress&cs=tinysrgb&w=1200", description: "A romantic rose-pink peshwas with delicate resham florals and a whisper-light tissue dupatta.", tone: "Rose / Blush" },
  { id: "fa-05", tag: "GROOM EDIT", title: "Sultan Ivory Sherwani", price: 85000, fabric: "Jamawar · Raw silk", work: "Antique zari · Buttons", image: "https://images.pexels.com/photos/30167011/pexels-photo-30167011.jpeg?auto=compress&cs=tinysrgb&w=1200", description: "A tailored ivory sherwani with antique zari detailing, designed to complement the bridal edit.", tone: "Ivory / Antique gold" },
  { id: "fa-06", tag: "COTTON GARARA", title: "Kasturi Cotton Garara", price: 76000, fabric: "Premium cotton · Organza", work: "Gota · Threadwork · Lace", image: "/kasturi-cotton-garara.jpg", description: "A breezy Kasturi cotton garara designed for joyful celebrations, with fresh colour and artisanal finishing.", tone: "Coral / Gold" },
  { id: "fa-07", tag: "BARAAT EDIT", title: "Mehrunisa Velvet Gharara", price: 165000, fabric: "Velvet · Tissue · Net", work: "Dabka · Zari · Sitara", image: "/velvet-gharara.jpg", description: "A jewel-toned velvet gharara with a richly framed kameez and heirloom-worthy handwork.", tone: "Plum / Antique gold" },
  { id: "fa-08", tag: "WALIMA EDIT", title: "Aab-e-Rawan Silk Saree", price: 118000, fabric: "Pure silk · Chiffon", work: "Mukaish · Crystal border", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85", description: "A fluid silk saree for the Walima, finished with a delicate crystal border that catches every room light.", tone: "Blush / Silver" },
  { id: "fa-09", tag: "BRIDAL MAXI", title: "Ikhna Bridal Maxi", price: 128000, fabric: "Chiffon · Raw silk · Net", work: "Pearl work · Resham · Gota", image: "/ikhna-bridal-maxi.jpg", description: "An elegant bridal maxi with a graceful fall, delicate detailing and a polished silhouette for your special day.", tone: "Ivory / Rose gold" },
];

const formatPrice = (price) => `PKR ${price.toLocaleString("en-PK")}`;

export default function Home() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [heroSlide, setHeroSlide] = useState(0);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    const slideshow = window.setInterval(() => {
      setHeroSlide((currentSlide) => (currentSlide + 1) % heroImages.length);
    }, 5000);
    return () => window.clearInterval(slideshow);
  }, []);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === product.id);
      if (existing) return currentCart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...currentCart, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const changeQuantity = (id, amount) => {
    setCart((currentCart) => currentCart.map((item) => item.id === id ? { ...item, quantity: item.quantity + amount } : item).filter((item) => item.quantity > 0));
  };

  const orderOnWhatsApp = () => {
    const orderLines = cart.map((item) => `${item.title} x${item.quantity} — ${formatPrice(item.price * item.quantity)}`);
    const message = `Assalam o Alaikum! I would like to order from Fatima Amreen Bridal:\n\n${orderLines.join("\n")}\n\nEstimated total: ${formatPrice(cartTotal)}\nPlease share availability and fitting details.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="topbar"><span>Karachi&apos;s House of Heirloom Bridalwear</span><a href={`tel:${phoneNumber}`}>0315 2964917</a><span className="topbar-rating">★★★★★ <b>5.0</b></span></div>
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <main>
        <section className="hero" id="top">
          <div className="hero-gallery" aria-hidden="true">{heroImages.map((image, index) => <img key={image} className={heroSlide === index ? "is-active" : ""} src={image} alt="" onError={() => setHeroSlide((currentSlide) => (currentSlide + 1) % heroImages.length)} />)}</div><div className="hero-wash" />
          <div className="hero-content"><span className="eyebrow">Fatima Amreen Bridal · PECHS Karachi</span><h1>For the moments<br /><em>you&apos;ll wear forever.</em></h1><p className="lede">Hand-finished bridal couture, made around your story. Discover signature pieces for Mehndi, Nikkah, Baraat and Walima.</p><div className="hero-actions"><a href="#shop" className="btn btn-gold">Shop the collection <span>↗</span></a><a href={`https://wa.me/${whatsappNumber}`} className="btn btn-ghost">Chat with us</a></div><div className="hero-proof"><span>✦</span> Custom stitching included <i /> <span>✦</span> Karachi delivery available</div><div className="hero-dots" aria-label="Hero gallery">{heroImages.map((image, index) => <button key={image} className={heroSlide === index ? "is-active" : ""} onClick={() => setHeroSlide(index)} aria-label={`Show hero image ${index + 1}`} />)}</div></div><div className="hero-side-note">01 <span /> EST. 2026</div>
        </section>

        <section className="shop" id="shop"><div className="wrap"><Reveal className="section-head section-head-row"><div><span className="eyebrow">The 2026 collection</span><h2>Pieces for your <em>yes.</em></h2></div><p>Signature bridalwear, ready to reserve.<br />Prices shown in PKR.</p></Reveal><div className="product-grid">{products.map((product, index) => <Reveal key={product.id} className={`product-card product-card-${index + 1}`}><div className="product-image-wrap"><img src={product.image} alt={product.title} className="product-image" /><span className="product-tag">{product.tag}</span><button className="quick-view" onClick={() => setSelectedProduct(product)} aria-label={`View details for ${product.title}`}>+</button></div><div className="product-info"><div className="product-title-row"><h3>{product.title}</h3><span>{formatPrice(product.price)}</span></div><p>{product.description}</p><div className="product-meta"><span>{product.fabric}</span><button onClick={() => addToCart(product)}>Add to cart <b>+</b></button></div></div></Reveal>)}</div><div className="shop-note"><span>✦</span> Prices are starting rates. Final quote may vary by fabric, handwork and sizing. Custom orders are welcome.</div></div></section>

        <section className="lookbook" id="lookbook"><div className="wrap lookbook-grid"><Reveal className="lookbook-copy"><span className="eyebrow">A glimpse of our craft</span><h2>The details make<br /><em>the moment.</em></h2><p>Rich colour, luminous handwork and silhouettes made to move with you. Every look is styled for the full celebration, from the first family portrait to the final dance.</p><div className="lookbook-notes"><div><strong>01</strong><span>Statement colour stories</span></div><div><strong>02</strong><span>Hand-placed bridal work</span></div><div><strong>03</strong><span>Styled from dupatta to jewels</span></div></div><a href="#visit" className="text-link">Visit the atelier <span>↗</span></a></Reveal><Reveal className="lookbook-images"><div className="lookbook-main"><img src="/lookbook-1.jpg" alt="Bridal fashion detail" /></div><div className="lookbook-small"><img src="/lookbook-2.jpg" alt="Bridal outfit detail" /></div><span className="lookbook-number">02 / 04</span></Reveal></div></section>

        <section className="intro-band" id="atelier"><div className="wrap story-grid"><Reveal className="story-image"><span className="eyebrow">The Fatima Amreen promise</span><img src="/our-story-bridal.jpg" alt="Bridal couture with traditional handwork" /><span>Hand-finished in Karachi</span></Reveal><div className="story-copy"><Reveal><span className="eyebrow">The Fatima Amreen edit</span></Reveal><Reveal><h2>Where craft becomes <em>ceremony.</em></h2></Reveal><Reveal><p>Our work begins with listening: the colours you love, the way you want to move, the family details you want to carry forward. We turn those small, personal references into bridalwear that feels unmistakably yours.</p><p>From the first sketch to the final fitting, every piece is shaped by hand in our Karachi atelier. Our karigars build depth layer by layer with zardozi, dabka, resham, gota and delicate sequin work.</p><div className="story-facts"><div><strong>15+</strong><span>craft techniques</span></div><div><strong>1:1</strong><span>private fittings</span></div><div><strong>100%</strong><span>made with care</span></div></div><div className="story-detail-line"><span>Private appointments</span><span>Custom stitching</span><span>Karachi delivery</span></div></Reveal></div></div></section>

        <section className="service-section" aria-hidden="true"><div className="wrap service-grid"><div className="service-heading" /><div className="service-list" /></div></section>

        <section className="visit" id="visit"><div className="wrap visit-grid"><Reveal><span className="eyebrow">Come say hello</span><h2>Your bridal story<br /><em>starts here.</em></h2><p>Visit Fatima Amreen Bridal in PECHS, Karachi for a private styling appointment.</p><div className="visit-details"><span>V3G6+2J PECHS, Karachi, Pakistan</span><a href={`tel:${phoneNumber}`}>0315 2964917</a><span>Mon – Sat · 11:00 AM – 9:00 PM</span></div><a href={`https://wa.me/${whatsappNumber}`} className="btn btn-gold">Book on WhatsApp <span>↗</span></a></Reveal><Reveal className="map-frame"><iframe src="https://www.google.com/maps?q=V3G6%2B2J%20PECHS%2C%20Karachi%2C%20Pakistan&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Fatima Amreen Bridal location map" /></Reveal></div></section>
      </main>

      <footer><div className="wrap footer-top"><div><div className="foot-logo">FATIMA AMREEN <span>·</span> BRIDAL</div><p>Handcrafted bridalwear for the moments you&apos;ll wear forever.</p></div><div className="foot-col"><h4>Explore</h4><a href="#shop">Collection</a><a href="#lookbook">Lookbook</a><a href="#atelier">Our Story</a></div><div className="foot-col"><h4>Contact</h4><a href={`tel:${phoneNumber}`}>0315 2964917</a><a href={`https://wa.me/${whatsappNumber}`}>WhatsApp us</a><a href="#visit">PECHS, Karachi</a></div></div><div className="wrap foot-bottom"><span>© 2026 Fatima Amreen Bridal. All rights reserved.</span><span>★★★★★ 5.0 · Loved by brides</span></div></footer>

      {selectedProduct && <div className="product-modal" role="dialog" aria-modal="true" aria-labelledby="product-modal-title"><button className="modal-backdrop" onClick={() => setSelectedProduct(null)} aria-label="Close product details" /><div className="product-modal-panel"><button className="modal-close" onClick={() => setSelectedProduct(null)} aria-label="Close">×</button><img src={selectedProduct.image} alt={selectedProduct.title} /><div><span className="eyebrow">{selectedProduct.tag}</span><h2 id="product-modal-title">{selectedProduct.title}</h2><p>{selectedProduct.description}</p><dl><div><dt>Fabric</dt><dd>{selectedProduct.fabric}</dd></div><div><dt>Handwork</dt><dd>{selectedProduct.work}</dd></div><div><dt>Colour story</dt><dd>{selectedProduct.tone}</dd></div></dl><strong className="modal-price">{formatPrice(selectedProduct.price)}</strong><button className="btn btn-maroon" onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }}>Add to cart <span>+</span></button></div></div></div>}

      {cartOpen && <div className="cart-layer"><button className="cart-backdrop" onClick={() => setCartOpen(false)} aria-label="Close cart" /><aside className="cart-drawer" aria-label="Shopping cart"><div className="cart-header"><div><span className="eyebrow">Your edit</span><h2>Shopping bag <small>({cartCount})</small></h2></div><button className="drawer-close" onClick={() => setCartOpen(false)} aria-label="Close shopping bag">×</button></div>{cart.length === 0 ? <div className="cart-empty"><span>✦</span><p>Your bag is waiting for something beautiful.</p><a href="#shop" onClick={() => setCartOpen(false)} className="btn btn-maroon">Explore collection</a></div> : <><div className="cart-items">{cart.map((item) => <div className="cart-item" key={item.id}><img src={item.image} alt="" /><div><h3>{item.title}</h3><span>{formatPrice(item.price)}</span><div className="quantity"><button onClick={() => changeQuantity(item.id, -1)} aria-label={`Decrease ${item.title} quantity`}>−</button><b>{item.quantity}</b><button onClick={() => changeQuantity(item.id, 1)} aria-label={`Increase ${item.title} quantity`}>+</button></div></div></div>)}</div><div className="cart-footer"><div><span>Estimated total</span><strong>{formatPrice(cartTotal)}</strong></div><button className="btn btn-whatsapp" onClick={orderOnWhatsApp}>Order on WhatsApp <span>↗</span></button><small>We&apos;ll confirm availability, sizing and delivery with you.</small></div></>}</aside></div>}
    </>
  );
}