import Link from "next/link";

export default function NotFound() {
  return (
    <section className="notfound">
      <p className="label">404</p>
      <h1 className="section__title">Такой страницы нет</h1>
      <Link href="/catalog" className="btn btn--ghost">
        Перейти в каталог
      </Link>
    </section>
  );
}
