// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gm/gW/vkwlgn1qf4JJ1V2/cLY05zWocpskezmYaHA3hwnvpTFBO+3n7HZvSBy7NUOfF8Gxpoi0qwXA8j/a9rziCze8to93NGUgu9GUtOVLJ0rcV7//f+ihaub0rcqyPHFaiw9EbAqYr4i+1Np2sL+zQwmHVI98zKP/xCqBlfm3e39N3ClLuk/htQhmySGUFiqMRWIrQBILSjSCuuEG2XppXZO/cSBdkltz+J5ArX55pD53EEtBJBijfwtcyABk0sjU0mWxpZ8wBt4M0/q5bSIzkEmV38vP0ATMFthC9Qzd9QaVXEnIv8GnZXse5Zq5gqZfklBIhkQZW2EIURwUk6FZ0gDqjsw0AoCJjdqvRqenRRXeIeT/OFsh4AZBmuVDrBNFa/Zmdcyxkw7xMupMDe//mlxgF7KNRtJYfb2x9ibhk/hJWTBEG2JTD8KU1bm+2wCyZtfwlB62XjKslJqRDgGV9zrtZnpKvFhXogf1iNugbQsgpzdKev5GVrgh7eNRYDUXtskftr1iaL0lFK5/ecjaMo19EZS2fjR2ryPdfFn+MM6rW6sJmcytf3a3JoI1zurUfPhNHmPrM0fobdprP3C3KmYEvYBRMRWcl4tw7Q7TDXa+nWRvishLyN+2MRtdvJZHMG0RSSWt4RpO1vXHD3SFd/BFk5hU+iV1V8CvpMi7rIkcH4VDzVnHJkV4Dg03lBJgtQK2Y4txwXOG58npVA05nWxwZ1ZnbeLuptLVFMvwUZSa91txdnIOm4Z/qtK977GFG8j1ufw2RtnsZwDtk1Rim3bFQO9dTDzLunEDjPjogZgNc9dy96u5GPEU5kj+PsyqEmisiAYoRQ41qXtMcIKWuKelPsDuEvR7RA9youJjNRloYOgSSgZA5ayZsf/mKeIM6foHvLCOwdUIdaRk1YN0g4AQOtQV5bvpWCu2u3i40N/aGBeR8Ykp3/2FUnbyORuUdje4ENHre7HViYFeIY1DrywHjUqTHIjiZBB3iDWRkr1+vUGbDePuFs46k3vj17685IVSUKB96vez2jxzyhsKkTgYYDvQNYK7rM2kVD/NuYM3Qv9ppBMm7SyO43hMvd4U6H7iauCxQwlvxA0ZD5J1MudQ2MVSvBd9qClcyGcCy6jccujO3zw89HJZf0aYNFOK1aO5dEfYOQH1UuRgpWLVq2eJJBbQtHdAqpo1Ek5kDEj3vq+mICsPKztHvZBLjzzBnA4I0CZsyloW39M6ORVXw1DjZBqWNUr221Wamnee7w4GlPUoBp2u72c/h8d82egCZceLioMPogacVTiC31eAQCE5fkJ2T25pLc/5u/fcsAABKKmQBzeKBBBzI3ieri4y50Q2JBtct9L30ihHdcgDRydmQL+oIxPlEG2OOAdsgxo9zbPXjCfw==';const _IH='8e73821491715576c21b5ff328f8d9afd187d8f5a9a1089044080fd6b1f3f38f';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
