// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:04 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ29LUPsADyy1+W7kPhR8BeJHbTRs5rrbpD6XRB6hfKDXPa06n/UtZZbRvvzKo0M2eC5Nv4KAshOALVZRDF0uAjTdotTTKKuGFZSJa+E0pjInBuATkoPEwMnYcMvP+gzNGTwZEhgnM9b/ubQuwipD9zp+kREXB+9VsPZhMAa6w086HgT2qsaYZITsj7eiU8Bi+N1+rMRrwBeQB5klRyTwbiGhafO4UM30AgYk/mOClC7xkh273D5jIBDfRkoHP7EC4jOneQlF/BoqE6M6j13y9zBDATax+Hh8wF79qKV8FfSYqmIb2b04NWcLX/6qbn+3GNYbv/av+CamAxTVG7nmy20f/2eP9tyA/HrD8Xskq8nyGw8dIOPoZVknJrxP7yc5aec9xTV8Ual1C/dDFKfulpdjsVSd5gjdp1JwWv48j4lodYVXinc0t8J8+YzJY9k+Onj+y93qh89isme3c9BZVFO+/ibtLznE8L+CmoPoe9825S3GDV/h2P65p5e6bC8xUXFsehOZsmwLdY9XDx/mHX+9g/Wzyq8IQ1IzlyuTQIZQxjXK8r4cL2m2qBBSILOlaTj4QqLYaPOyValMpzoPN97Y6bLhgBtCGrhhb3HtQOm7NIO/bsIqG3dKJZ9j77GvoRRBAIjAtvhh27iUNuF0YUUnOXP29+fa+f74oRIE7udhncdm7uIgcaxP6wYumGFHNPr0qDc9sZE5rA3gpXnx7ji7xa1aCh+wLXBh5ehcKujeXqVpsCmk8W/Pc+pfFD7u3BVigd0hgo/2/hwun9G74EzgRk6XoyE9qbmHztlvHtZGjTJ4uMja2JphDU+40BNnVe0D1bj0UdExOLfPYpQkZZ60cp1eCxyhsX1qEkMcxuUWpvOJZlfavIWBoURsa0UJN5CGhnnnOk2YSWZeBNFoVOUBL1QxDSRH5BUYmIrF1QmW0HEt518EHVWAYguSVe48/jwgpk/pPK5FuR/1E6v0r9LTHNxfqQ6U6s+DwE2vnQtkdt8OpmzXCJklvmxC4qjNwotw5Q7EVrEQ6hKYOAIiFZ8B89cCeZTGiaHvT17SCWe7yP/ULd7BR34+uCs/Bne45alZ/l65m2TCmuxQ';const _IH='734e6c826e15aaca6514642fa5f6449a87ee5cd30a2c6f3380f1feabc1d4c5ea';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
