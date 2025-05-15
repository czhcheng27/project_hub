export default function Home() {
  return (
    <main>
      <h1>Welcome to Project Hub</h1>
      <p>Current environment: {process.env.NEXT_PUBLIC_ENV}</p>
      <p>API base URL: {process.env.NEXT_PUBLIC_API_BASE_URL}</p>
    </main>
  );
}
