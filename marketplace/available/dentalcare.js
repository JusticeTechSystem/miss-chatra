// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5J3XjYYzXIzbiv31QvalXrEQX2/E1vQ00PcjSIn6lBjsAqPwJYOQnrDFQ5mnaODbET+X1fSyZXzyx8l1A2wpnPfP51y+a01DzZb4wOvifHHnwTmHcaAWpxm8SUL9mbTYIfgaL0JYUjAJuARSIAZqUEZ7+if+PFy6NgsP0XLSfLa9OCxwZKrPpqu425yxCk0lvIzPKBPHxWopH7a7mXm7R/AuY0zUgkNUhvhpS4Y7851NdHAF/cCuhyUNosz1/23pBohckm88BQe1rO0IVzlIctttw8Tll2IUxyHLRQoaPR4iXtehLezCZLp3Yi5XhYKIGzOSp0zFr2EoQb1mo4qZcUfnwSjBM9En8Blxb5zj+QEXTmLrEdUc+Amjo7soFhYdyWaK8Go2QLEY9ri36V7dWdYIrNV0WvCqdiWa/9E3DlJ6x8tewUsoZdfkBnENZIzNVrTb9/RV3XiuCA0ndwxEST9wOI3vIg8NfQKQgkLrP5UIHF/6lmtiy6yJ0/d4Qe/6l7fPKHm3OCqq6JR+hstbXESxAGoO/kmQ1/EK8QyaOFj8OU37Am1qw9n9uCAW8R8wt3HSesYNkgBQtvbVfWBOqU1BQGDcI6uHs/ewdb+jYGb3BEcG65cnVVmJsYx3g5jyZNRARGtTXVQRCQYxx5eD/RwQN0bntD+yXmzFXUbX+zy2kTrLYDBRZrN51OaKK/HmMxi8w5O1xNOgomIZ/YIlMOjxQQbwUsxRREDaHczgpgQjfgK1VksPuR51n/rBlmKFAJnT/9NYQBPUi3wOsFNGI+Dx4t7X9RxcDPuBoFwY/FMrQYmZGEHYi/IOjd4W1MvijyO0lIqWBBaflEJZWyCOeTKy5dcLqeUtWLrTgzWtwu0/RNf5pllDQ2K8ClqcTQYUWeAIDipFPB8p29UqDtUdDrlRMUeyLJlNpfwUyxfqwxMJ3wIwm89i8PJncPCzux+oiNNCt9AvloKrQ2i34x+qBy5yOxCfRW77eyFYdtTbD1E3b8qbSlgjMPeBCTWHeR9ykhbF7JlsOqNEDJjqDwifb1QM/+2TQ5yHcg4vlywtXmZVKS/bJ8899IdlNX7etV0qtKoOzBlXkxkd15mwKFDMZJtcFXw09H1AZsEf8w2VvGkFcYwBVyPqmQgbY+XN6iqrAooulAh7y36Rhitv0aEBTNKnQIlpIvNYosKBcJfdaJTdXj0yTLE34KCXL13fxDb7DkTQ';const _IH='685aec24cfd149b68d580916b65e4ad6fe319493af7c73efe6637bfc6d11f0a7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
