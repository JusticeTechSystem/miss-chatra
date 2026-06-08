// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dfzI9lSJVXA+Ih+dY4pDNd4i2o9hY00NSJNSjlAL3NLxGbLKLbrPB0aKZQiDclSX9RZSOvFEANT+qN6WZoToo9AFYayo/d37LHEHIeu35E+GQnGzPZCfH9kSgP33l8Gp9qob8uC2TCErXxYvP2Bhu9fHcvet7ztiJY8k6W75LZvY5xLfaJT/wl0wKPJhbrcfgxUgRBb8sVxx2v/cVU92DeW0R1a1drAm2lzDX3S+Rx8mCEYM+kmzYg7aRljHUO09J6nIpwli2t05wttpH8RLBE+HSlxeoTUkS/pJ6YkLZ1W5ekZhfRwffPlyq+URZ38fydV+UuD+E9+8thw5C0kPCYZ3T53D71KdvqbQN1pVfVUbUBqbPYZyc1YCkf7xupMbQWEPoOqk0urnhRx32A9AVPPS/p0UFiGzQJg4djK3UlsYZbarlIxyJJmHdJzUpXpeHSZDdqU3wCE5nkzA55Tbm2uQ6GHuBU9O6eEmNt2cha5/vNVXM+GcgrhzftrVPr5bOh24xAfwwsSRLOGQ6zeUGnjxI9mmeZ2djeF6+7u6PX0esISjmb2gdLcGJORbjTX5VXNHr94heQG0GWo0sGlwpx8ZmoFbeHrQOFKvTlvj9TTRODo5zi1ph2KhQm1ZMcLq4KRR+CbRvn2J+VuxY0MLOQmg49yxXXYyMh96/A357Z9j1kug2oWrA4c4AA9IMRWy+j9EqliCqSsDtKZ6KK7UQICgdZ+fGu8by2SnB4SKW7POauP5IUfbKAyxI870GNPp4QIdbHAvhKzjgWzPRpeYlobHb5oui6n+4sQdjh0K+nC4HzllEOGAU0XL9iT7utB11iRSBU6IoEgBxJrgVw0TMiycnC22HPu7IdMH1nsJHcJLuQkZpY7wWTD2STnlfs+GW+hk3dm4IlX603qgyvhbJixtjcrWV3HHEN4cAZSvQGMxEFzyCMvsxBs/Wh+gR69BrxxW6R5ts1MW+ND9juHcL0i2H331NHleXin7X8vrN3G2cjdz/3jTUdxdv0x5t0iwis70wemh+3A=';const _IH='2f1e00ac33aaed9a1d0ec7bc63c39ed098ff3efce2b6cd0c4695e1d49e2e7328';let _src;

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
