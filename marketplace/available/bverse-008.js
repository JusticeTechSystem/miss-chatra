// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR8uf4eyYjlP3W7hf8WL9BVoS6XPjtbmW7UbDyxYHwd57zcQfXMeO0/U96h9iU1NZphiItH1d7Vtgj3AmPokF+KA0YKl+LzQq79/sNNaN4SwpyaYiNw3YA/0lAPDvT0IuY0PfuMq10AvGnf5jbThnmVyTaljWGZREVCVkatd+he3uxdJTZHko84GyhtzCp5+PP0gb/SjNwiJhutBm4uyPXv3yILeothLkA2pDocTBl0qPpzLGxB8/8r+QzDX/bRb5hWnFGBtubxwgLkVQrIWOV/8AKY9f10SUTfasYhoR09GMB+LGvAFVsnTrIzlezJ+DEzjyGezlQrSncUWZjdCEM6r5SmmhlVFPbI3wJxtGw+aUG9YTB2Pgk4Drlkk8xErPrXRvBTtN/LPAmZIeBITUBfr0ZQ/CBPAsAH8yCqBiGlWXVeLzajmDuOxguHLs0WxQpzpjcujnSupy0jOdwouIvjIFC9FiBEv8bC5Z/hjINYU+ZMSzApN2Bn2PixiJ1C3JKQ6SVIUhS4VT8YubrDwk2BeXPZsJnQKSzNZ7JWtgheZ9qlYlPV6qO1QFgmkYatw69uGQnqTpslrUZjtofp61MRXNgAISxt2XZ233NhiAFhdyRyl1YO2Mx+HfkM0uvdBak27NhajYcCGADJzV+Lmfrue3E/hlUpWulQJxgeWK/w9EclWaJrdzJ0ph7jCNS+jykjm29veK1opv5D';const _IH='c7cc75edc7baa1e94baccc5fe2af8f7f715d0560cebf392e213c66068be9b117';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
