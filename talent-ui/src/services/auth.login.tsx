interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function authLogin(): Promise<Response> {
  return new Promise((resolve) => {
      resolve({
        token: 'ue389e6wqde3eu2eabc120w9u2',
        user: {
          name: 'Johnny',
          email: 'johnny12mf@gmail.com',
        },
      });
  });
}