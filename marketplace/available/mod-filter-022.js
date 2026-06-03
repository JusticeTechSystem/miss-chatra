// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SZPY9zpnmvyJkmv0rzUk2xxBEeZErH0v97Ru16aFHQNorw/G3UlqgvdxPBPbScZsIhxMHynzqVezmGauLlvqj0GZaroZv6LqpHG242A7Ffaaas9R8P4SdeCmZO2y1Mtg4atJUccNkp+KZ8Q1MCuuJU484jVKFhoNl7CPDLqiElJF9YZCrCr7jY4Nldbl0HjezG0/ohw6PIrOHvDWPKT1F3lvm1VThKgCbU0A8ckvnqZLo+54CDiv0ZAQ9Y44sI2lscqEkuWobzkw+GhyrhMa8GR+U77GlLl6sbsPHHqhYlDL2LfQrfisexnuxE13zFAcT5VtuWHAqTYPF1wvCyBrr8pTw1GYPm8iO5fXIkCcGHZ2/wrBuDd2XKtr8r0DL5yQSKYcRLEo4yIbMdI9Ya60PQULPmDwYjKXoFmYqWOlPFN0p2wAKYh8QbWO/VfdAEkOGXuCgUukLP9cRwuTjZexgyMvk1YYUTlbsaU7YbYBZebt2qK4DBC7dOA63x7jP0oNWrMo97GyDRXd/LQTmE8W6k8d1BisRKuZqN+C0Wb6FdxmVUIwdKvpUvBNmDFKV/oZAIk/N8TO+iXjzJjI779yf6BAFhluYf49oKOtHlkcGfhtUjvdkrn48Y8TNUbEkRK12YnMNL2A03CHVAe/bBjN8GW45Dw0I9H/xN8uCisnIEz5/726YT3QlF5qGFA6HqwFMZxUJ5FTjCBmxoQ3U8txVx4S9sB155XjyawIJ/ORpPm1cVoGPz5gaAZDI2xx6ssmpkN1I87Y5pgxCs9EEiprAAYBa4EWRS7HbIZQts8AxKMEpbGYqdRfO9qlbKtUoVs4EIyo8mO1M9dH71g/ALaHRaoOlX1O2A4gLGPbplx/t7eIN6QgvNwPK07/plxF7iKrptZipVik3O5YJPJuIwRc0I6wFWa88JYr9qNipo5wiUplxc27x0W9G/mnbeb6XR5RFZEpPACr1HHjcbHvbENj4x5zNJG6A0nwk+oJ4BIuL7/j/imOqQ0RrvYwfOu2STLbGJDml4mWSfYOq87vh93v7Zc4Z3D6wastyoi3JYLkBsbdwo6IBACCE5gct8pT5WAkjZ4tBSzapd+7NYUswNJEhaQdFKaW1PU499gPY8yoF1DIixn2LPQ2VggDmNiXU66tiycIlfc3ihXyS3CJ75OnnYF7FmRsOslyo4CY5N/iqGFBN8ei88FQfstidrEvsAY+SOha3Z6GAYv1KyoGWJSsUH6CEQ6rksEp1erZX2sN44i0T4xN/8f0+CKT2AH+7ws3v7PYV0gacsediNMT5vG5hOMTvMdVE8M7oMgdZ2zFunDGJaBy3y+TnX0NDYLQ/e7oY7cLdE7r24lIpgqlqk6wBcf2n2MyMaYyfbKX9Wtum34TgQ0=';const _IH='43a243624254e01e03732b838191f4cd94c6ad85c88125e5e3e23992aa608f61';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
