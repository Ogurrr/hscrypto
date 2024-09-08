async function calculateSHA1(text) {
    // Convert the text to a Uint8Array
    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    // Compute the hash
    const hashBuffer = await crypto.subtle.digest('SHA-1', data);

    // Convert the hash to a hexadecimal string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

    return hashHex;
}
console.log(calculateSHA("test"));