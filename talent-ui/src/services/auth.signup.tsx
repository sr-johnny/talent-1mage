export function AuthSignUp(){
  return new Promise((resolve) => {
      resolve({
        token: 'ue389e6wqde3eu2eabc120w9u2',
        user: {
          name: 'Johnny',
          last_name: 'Marques',
          email: 'johnny12mf@gmail.com',
        },
      });
  });
}