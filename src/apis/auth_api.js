export default async function handleLogin(username, password) {
    try {
      const response = await fetch('http://192.168.1.12:8083/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      if (!response.ok) {
        throw new Error('Login failed  11');
      }
      else{
        const token = response.headers.get('Authorization');
        
        return {succes: true,token};



      }
  
      
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }
  