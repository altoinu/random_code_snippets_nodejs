async function main() {
  const controller = new AbortController();
  const signal = controller.signal;
  controller.abort();

  try {
    // eslint-disable-next-line no-unused-vars
    const response = await fetch("http://localhost/api", { signal });
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      console.log("DOMException Fetch request aborted.");
    } else {
      console.error("Fetch error:", error);
    }
  }
}

main();
