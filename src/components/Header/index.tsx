import logoMarvel from '../../assets/logo-marvel.svg'

export function Header() {
  return (
    <header className="flex justify-center p-5">
      <a href="/">
        <img src={logoMarvel} alt="Logo Marca Marvel" />
      </a>
    </header>
  )
}
