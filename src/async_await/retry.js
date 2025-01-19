/**
 * Retries specified apiCall function until success or reaches max number of retries
 * @param {function():Promise} apiCall async function
 * @param {number} [maxRetries] Max number of retries
 * @param {number} [delay] Wait time in between retries in milliseconds
 * @returns {Promise} Result promise from apiCall
 * @example
 * async function myApiCall() {
 *  const succcess = Math.random() < 0.5; // Simulate 50% success rate
 *  if (success) {
 *    return { data: "Success!" };
 *  } else {
 *    throw new Error("API call failed")
 *  }
 * }
 * const result await retryApiCall(myApiCall, 5, 2000);
 *
 * const response = await retryApiCall(() => fetch("http://some/url"));
 */
async function retryApiCall(apiCall, maxRetries = 3, delay = 1000) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await apiCall();
      return response; // Success!
    } catch (error) {
      console.error(
        `Attempt ${i + 1} failed. Retrying in ${delay}ms...`,
        error,
      );
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  throw new Error(`Failed after ${maxRetries} retries.`);
}

// Example usage:
async function myApiCall() {
  // Replace with your actual API call logic
  const success = Math.random() < 0.5; // Simulate 50% success rate
  if (success) {
    return { data: "Success!" };
  } else {
    throw new Error("API call failed");
  }
}

async function main() {
  try {
    const result = await retryApiCall(myApiCall, 5, 2000);
    console.log("API call result:", result);
  } catch (error) {
    console.error("Final error:", error);
  }
}

main();
