try {
  list.push("hello");
} catch (err) {
  console.log("this error contains: \n", err, "\nEnd of Error");
} finally {
    console.log("finally")
}

console.log("goodbye");
