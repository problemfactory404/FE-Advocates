export const isTokenExpired = (token: string) => {
    try {
        const [, payload] = token.split('.'); // Split the token into its three parts and take the payload part
        const decodedPayload = JSON.parse(atob(payload)); // Decode the base64 payload
        const expirationTime = decodedPayload.exp; // Access the 'exp' claim



        // Get the current time as a UNIX timestamp
        const currentTime = Math.floor(Date.now() / 1000);
        console.log('EXP TIME', currentTime / (60 * 60 * 24))

        // Compare the current time with the expiration time
        return currentTime >= expirationTime;
    } catch (error) {
        return true; // If there's an error, consider the token as expired
    }
};