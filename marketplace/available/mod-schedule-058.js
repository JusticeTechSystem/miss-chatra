// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EDtWkfCiZ8XVu60SSobMZQggXQVK9pTENpuikH3g8yBF5QnR0vkH8PMO4MV8bupYlJ5BBh+2ZDbkwcDydt/w8tahHTkvDhhesDT5Q2z805ZKA+8VsfmUKQf6zWZ/5eHAcRu4YxDerJzL9vfE1I0ctlmr8YlNOEFwPrgPCrf9hm9dmpdFjkTNGqZZc5Go43751fXjSpWTDIxm5QE3eJKhOJQjH6eJzYfCtOGuZXopFyCNOOwmNLxpSqw3axLbAwHWcSocIf25e1i0NeOgDQ5COVLFNAc8SPG4HmVh3SaCEuokfrXoAPX9IDPvQF0SWZhy5Q5xvtHyyqVWvqfIlN0KA4P6ljh+SU2QnKjoBEw1kI/TzNugVAdCPhzN+IrSTPEsRn8jEhmAMprJJF9pB03loiAttrAM1Ll7Up+UQDujlYJ3tHQKxNE+XxW467ywGeT3tYwld86c/LzH1xgLPmHPWngjEAKkXLXiT2kQUtVuhN5wZ/Cb0oizh2ONaGhsJnSBEdL9cIWtaREYLJUfLdx8PLNKjM+ylE0dLF/eLPO3zOO4kIjyLRbXaeG9ccqAIM6CZovG4p0I3TYwb/gSUsejHMZstlNJuuDzU2U3CvNnCqHeFPr8rYiiJ2jvByVULF4JS0lh+3KJfSGdxnENINZfJFHNNKRx84YMdrt4eNjohRGIWMzB0Hi3VJtm50vdoGRfDhIy1hBiJ4Y8gQYb4AwombK5PHmW9+OCrv4ojX3k0nSmz53Ko5dOVUrv5ojuC6O6dQVJ8sjxFJ1Jf+q2vRPWR38HP9wUVUIQrC1Gz9IyAMhzbRk7MsIjcCXoL9Ge1hXHLYMvFCZT3qcvGNT4mVC3dVdzTMHdGoG9WgY1aOR9ZTJf/BATDQ+NaZuJcKthjM3D8Ug5xghnAzAaScyReCj1kWKxcvIj0OWDqy7RVwyv+F1eyP+zA4JqSlLet/OYRk3qA6kyovhAkL22c2iVxItEkIE2bJCPMx5kJX55xk/6/lBCcDuDqzLZAKsYD4Ob4Di41eW8Tk1z9JnxuIXoUvXeLJyVVzPKFODiXfEaaAcdw05F71iaRJO38vg7sfvs6QgaGTxWmvm2dbdINBJrI55Hsdsn74Mjs4oiwNOIatYEOb3QazEcmE5d3R9Rt5C8YhGwwTPhSXZcjaTaa4F+pRPV06jmsihJeVlfZmHNRRz9Bb3jljEchy+YXsAZ4KZw4ag/sOPWVqIxpmoht4F6CJkSr1+LcwKUvdfcpzD2v9mDo8X0dqIkKtEUFGmrlE/qwiFtqftWHbXrGAkgy5FM81d+3GXpEf6s762pJFw1xSpBpGc7Qk3nbTS+XelxCPj/W70atteZNmlWQwrjDtisjTX2gwKc4xUbLLwVcf4iWqWnziDoZ89S3UGDP7ye1/Z6rgWJ5m4hM+Rdfg==';const _IH='a54274cbd3108f1172117dc0576411c25807dba2cbae43b2d4b6e9cefb488bd8';let _src;

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
