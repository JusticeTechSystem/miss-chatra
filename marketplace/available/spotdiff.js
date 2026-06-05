// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jk77yHc/pyRmBXMmkD1wrL0S/6YNNJfinMksy5yU7fCkhrnTQYbiRTxaovS6YTLATD0+8JNioD3gc1GaWpOFLJIpTxLjSdp3PvrPwQpbrCDxqLtooRZEvgOWlYRrWX8jo87YskhnhDWh3gqQY1Czx4PZSzWsIEHfZMgB5Ri0rOl78iqmJXui5cKNTlW92hbFyfPQYi6NgAM3kHez6ZvqQZP9ZHlnor84XTWWA3BBrxWnnujLlA8RlmurSIV4QiPeHmBJBIUMLsOpqsQvobgP7XRpXXrYcmwj1GYP9lF5F87EeG3T4GF3csOQnYQfzZjVcEOe932tQrHLZK2GxSHrPzoralkVbTIMoGps3Fa4MQdASpasiD5Ai/Q0qdHciXASyi35injtX9mTosXvkzKdrL5rJHVzxuaG7Z0ak9W0jTTMYnNH87r7OuVkf0W9To7Ad3TAJsQP1J+zs2yO/q5/TSr6pMFSIBI35WjuLo4ks3Llkc5bpakypRcT+jPeSOQ954yvI03ip33Lcs0bXSpz+2aWqbjThx82Yr1FRsgrmU8j19t8dQ72A/Gn6jlJp5RhFmATfM8GURemFGTw+Mzm93nXs8Uy1HK/Mz4YLRp08pcO9htaWLm/KZ1mAE82DzuQIwUlToyexCX4hPUwxGE3fGxD7v6ZGLg4KIRL8pJqE6NG5Oa7NU6D5x5NFmPVwOeU/bX6WVViVDFHAdlKn7C9h3SXZoyLi3ljOf4aUlO2rwlDglV4QSnu+VSkOVwc8YpSURiFCzy+kEoK2Y29P5kHFTmlINoTGwjLooxnYPjOUKFJEXCzg9zXluEcWYn+TXdXzn9+ocKS8qi8MuJJ2HWvYgw2fBIBUYgjgrPHjLQ1YbAbDYfoRaRUlNDtDxWDvQ1+3utiGMakg1/uonsNxtwdNaXnoVPfFe/XlA268pNl/WkUJ/fGnOyUZW/gATPJJ12FtJvCLxLp2X5WU/P3dD83YhkKSaTTsyf1hSy/MOhvMZCQ04ZspqcQn3xa3K+BxFqrpED6fQ1Dy8XKTHFQTgA8dgsv0qHWxSm83Nlv4AU2NYOB9wLTrCFZrrVBN3fjKGYuj81ctcPXVsalgrWKs779AwZqsD2kIiw3mkFWeciVczC8BsPfNdH9gnau0rG5sa38xkfRLjSUFZBndck0HgwrxTKIjgkHWJyanKkYno3X0eU39d+gGIUflMCln2MvoGg5uN32wVs=';const _IH='32938d953590e47f5db419fbfaa3e61d7bebc409ebf41dc335bc67714fd47561';let _src;

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
