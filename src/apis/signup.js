export default async function handleSignUp(username, password, email) {
    try {
        const response = await fetch('http://192.168.1.12:8083/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password, email })
        });

        if (!response.ok) {
            throw new Error('Sign up failed');
        } else {
            // Optionally, you can handle the response here
            // For example, you might want to parse the response JSON to extract some data
            const responseData = await response.json();
            console.log('Sign up successful:', responseData);
            return { success: true };
        }
    } catch (error) {
        console.error('Sign up error:', error);
        throw error;
    }
}
