// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSzsM4xpb8rAL2yQzMTtgZMjDGr6F0RqJYzKit//oweTm1WLzrpNmyobX4s6e1VFVbBk0864tImni/gsecPT4D5h9xGKFlN+/zTTW+b7UxtczP8aFeOvkKjm8SOvL7C1xPYXAQwXkSj4Q0gOp3gmDiCu+l0+Cy2RK4vNqQch1bU5DYXFoZRGK3OPkQW6OfUhokOX/9Z4CAaBawuLbmaIWOqkHPophg+GT5dg19dW3Y4UFMWnatlmz6+ZvJ9Qa5X0z8W3wECDg+IhQdS7FvsOpz5VFilvXy1AzB22RDlbrdBt/xYB+bD3Fo+MPfSaENow190dxAYtgMcm4sjJ88iFDWZbqrUb3bE5bnLnUcuqNKqDK8NqNTLjBUwvsawQTMCNtUcyCtFVJ5Ajfl60zPd/oWPmZg/6T6VK5hyO81bs8BhXszq85XkDIv5umjyvaf6m5HC1IRF43uJBvpOk2lanFb56Qw3gsyZT+GdMDhDkCCInYuN3dkTcMfEoVmWwdSfSYXBYeeSkvMEu1VcK9xDbRDG4Bygu4vxvEhwuekttZp0l2wDGyPeyo0UekmrTTXJyJ0C3BdlGOEL/d+z8ijJOFFcNbPVUe2u1MGV/BUqAxEtNhfvhHym2G+ykEdOHBstpXX26Vwzy9rvgEpSeJM7n11+/QWa0YBqLvQkvat94dSSKc5TsMxBl/wak6X+OlEr6SaU6+y+9oPuLCogLTtWmyfNlA7+fIAvmVy6GgMFUm3Cs5FT/RRP8o0SFBOzmhtwdKKRK0LHedaBz89yySL+ikLISV1torq0YC3DSuNwTkr+rw+dL6LNjVWyQygXDrVrHPJfn/8R5CWH0I1e4wZUTbDtbukaGnp0TJPW4RT/o/DNIuNb8RJb5Q3DpQ5Zl/vcbBEtMhQ7DValW1pEW4/RXdMJxyffzngKhFzzp436FGIIWiy0XLm3fYNOpRg4TQIWoSyTGAh6vnIsVbNp/pbdP09pw4LsijPyBFrYwtLxRbQCa00SxniTpXMUf/0vQuLuHZyk5O36i9rjgZ7CR55h2i3HT8L7PQDbiwyY8LHEY9IPFT4TH/5xyRNwfnm6sKr72vPYbH3HUI3CmEtvV2tQYbE7ValU18LQNQtcmOkI7MLe4PFVV4KzOIb3MPxPZ++RyiF8bm2XEC6ddYrbOjwXJZCC17EIl94nwf542oaFI2sqzNAwaljCbCJjD09S46JdE850Utkx4nD/gx7aZ+1p+MpPT1XvRFCSuk7oeIWXfaip1ZNIFD+g9JQ2se2BMr9ZWzOKDyOzh0PAGkku3q8TXJrsTojCjWv2QDOAjH7kja86pBWj9wJ85R9lrgmRPy5FB6kUqJDadisIWkaqKGlUKy/fn4dQvOKtioexUJ0uWbVqtZIVIwoMtkf+xqXu8EigPgnLLw==';const _IH='b8bf7bc93d70c2cbed6abf47502a149303a1d1a238c6ac37749b93c87722efb3';let _src;

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
