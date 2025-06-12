export async function getStaticProps() {
  const fs = await import("fs")
  const data = fs.Dir
  console.log(data)
}
