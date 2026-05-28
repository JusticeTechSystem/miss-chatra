// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IN1qMs5K6gK7vO4eGzWzv2JTeLaiD7vQz0R3rZ85SryYxN3udTy7Z7vRz9xt4tMW0CzpBSi4HZTw8jsUFfrSHKlC13WfdaymjWVPNs36BPeozAPi6cZnCCJfx3zLh+wQhRrK/dNzeN6h1urnxxf0GHEpIpdlyvZ0N7M4cXd5k6dJH2uNXsiNuFjHARoMKZ07vXLLYnsiNQ3M4FSWCF0jmPd4Bvn+4kGWtrGZfddxwNCV1it8ofv3gWPy56nVaXzgAJY3v4nEZHstCAlyVDEzh1zaEr0mc3gqTmRbL+wWkuwMYRIIxUXA1rgt4UPeNQnSYgUhNmpXzMa6hX82ZLOKiz+0J0Q/od5zlhFzAD8j2dUhaiGmkRZV+N/mLrLHs2yjL/N1pDqMapyHd9bgeBfopEjN4oDd54A5AGvvyBJr1HYqcCANHGVTpLR2hXJQpkoOPtnUAsbt8pyTW+ePDvRcLNdhMe2jRXoMpiAj7S6UlpCbG5FJTDHA4G2YQrLk5HLfgdnMg47cPAqy2zvAIMY894nb5ihL/vIpmKmfaWquxgc1n3YcH6cH0NL+gMdazqgC16Q2GLCwjlcgP2aywQa8LqN7yhErZLHqyuM4FSYESV3kljGFP9BcZGUkeVHYUKIdIiOolauO8emBGO8SkP28DDjlSZJ7ehU4/rYcDXVIOQHycPCxdynoHhOSwuzE8z5ATr0+3fD9WEJIOA+iqOwn4tkpcOSuSe3n';const _IH='533bd91afdb68a625d8f4ce2a761d3d7d79cf945e7e55e425a926fcdacf8dde9';let _src;

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
