export default {
  async fetch(request) {
    const url = new URL(request.url);
    url.hostname = 'api.gngn.my';
    
    const newRequest = new Request(url.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: 'follow'
    });

    return await fetch(newRequest);
  }
};
