export function Header() {
  return (
    <header className="header">
      <a className="brand" href="#" aria-label="Aiper domov">AIPER</a>
      <nav className="nav" aria-label="Hlavná navigácia">
        <a href="#produkty">Produkty</a>
        <a href="#bazeny">Podľa bazéna</a>
        <a href="#preco">Prečo Aiper</a>
        <a href="#porovnanie">Porovnanie</a>
        <a href="#kontakt">Podpora</a>
      </nav>
      <div className="headerActions">
        <button aria-label="Vyhľadať">⌕</button>
        <button aria-label="Účet">♙</button>
        <button className="cartButton" aria-label="Košík">🛒<span>0</span></button>
      </div>
    </header>
  );
}
