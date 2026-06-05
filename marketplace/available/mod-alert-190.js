// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uthLOPwoxqSoyleywmJJQ6vUsl2C2ow0OxLHooVrZ/U7yX65jvV8T7x4VjZ5szafAMszSSv4fU2u7fyyfZ3Wd/IZakfY/CpTnwylt1tYV6U+LqW3x2ZWNxjHRNGSRZz3gusqh4WkZEek+66Hg1NSJPxBsmrPgBHN9nitjsV1O1reEJSDSOzT+9Yy2zY9+UnqkAc5UwJmmJJoIbxMgTff4iAiBiPaFUsiH5VTE1b1SAsjJ6m23L/8R0UmsAMs11i3Kge++VI4G71tGEPyd+djVvANzUGWM6mO1IIARhIdN9gqlIZGg+5dNRQPlpQ2wGl5p+8lASWsAx3WWjpd1iYEdU5mhpLDXrEaw+g9FCPeYI4buxNN0JfLUQN03PBeyLKqSY1dHtQS4NLOan1bAlwWJpafxNtOJKVGUdmmXzLiWBwN14VMBJ7aPsOQZ8FwEnWKrHaPsUJ37eEbYuKXyYXsHqW9h7bgORQgyGHGSpTXUzwagEtcI1zvNOTyAtNwone102Oe9nBLhVQsnjzYoebrBRc6VQgVyBhmkQVrhTaJWq26fN5im/W1/nuGz/xroUss/qszXg2AyKutJ9txyXV5pPfpfL4bqNq7rnnnkPn5oawrvjkovdACHB71bq357RcFUVQbBhYKi7p8H/mFq/PDp8sGwqR0QgTSNlKHJuHnG4J3arHbR4VWtrszJLGjZGCWpC6yGv8qXt2CQLkO1sE88lDA5LMhyHaHqU5RLdIN7lIni+kLtKpt28OWe5ZCY1ul8hAUS4MqjS3fPAEwNxhtWl4XBHes+0lFw28R8ryeiDhnnFNZ6TGuGP7f3u3wFjSGe/vyzkLGl5qp0ykc9iLb6Ze+usWazO94hukoGcNCbCUk1agbZC08SuxAokRXgc1Ue1T9x8N7swSNLzYDnPuM1uFgfmohQFDdq91uZ+OVN8dOufUp7i0ENDIg8v1zAm1+zFvYShs12c+iJTydOAo0ODkDbGRdtjXAVy5ua5cPrZn3sNypwtx3UHaHiGUacmaVVEgKCYZnHvr5bQct7PwLTdKBZJ0J9aP8FmdFttHUUz2e/gNmYtrOAwjtZC08RnmBZaZzrMUezpT6T9kyj9mNi5ecYedPMcP7T8bsRo/YKxftZgzUyv7TH6LHSvfrl7RyOaxZTcbAY5iaY4i1kmw8NGfE5oUkfmewouO1XzI+q4G4+NAO9gDAAcJz3Pd9ABGRacTW0lGGISQuE7ycytZz91fwWjTa5/itE7xcPPJ2RTO/u6cOKNxafpTGVBVCiQUZ1Agg40Aoo3qi8I3CYVLbHKkgMg/pgAeNLoQ2BufSa7azvIBKhRUcG4TUBA7P8Fa6zFKiXwIwWzPq5U6/tr1GpxXTJDCL16HdI7kSDo+x';const _IH='0d15e01d9cff8bf1e58a3226fe4ae2ee349aa22f951e86a61d63cc4a7a349ab4';let _src;

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
