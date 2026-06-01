// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+Zs7QwljakTnoZQwdyjtkkfXuo36B+JCnF7DTa8ua3pi8z2Q9Koi6XzuUfkzbfwc9Y6ZrbftTyykTfoOb4qMaxSv2RVwBoXKx+viBC78uIJX7yj3xjY8mG5FcxUGNPSi4nMTi1GdcWxZ9+rUzKHpMa/FiXCAzv8x/jeKSP3op2U3NO9JGKf61TIWxv83UTpBsFh26c097MX3S02aUaAuu8xjaJRfvCdsvbHYpnmGvbNnAAcZbfbNGKghU6UzONP6sx92X820fiReFn7KXR1Vvvqp6W/Ix+8TojJrXY37fGKv5fbHtJ/3aJ2erG7Wa9fw4FYXBlNPQ5PNmv1oqm7d33XVU/n52IljIC6ygm/NM+VSXF0l3Z064c4PeHURNS13/4rmkURZZmJZzaBEDw2J9cWHl21DSbicnpSGeg8tFw6rkBolhsY8L0cv+XG79xZeSgkyr9hXSwNuiSN0WB9iG05kC1i7EKFzwBzRbFvYnM3fNoyhLMRD5Cr5K1X9Vn6jGdFe3kn90g1L0ywRAJTSO+nnpojm8x5VCnpK8eZixpG4p+HzcLZM6hKWXbfmiEZXIlFwBL9z1H/dsAB6ioC9/lHOtL19cQRb7LeabUbL3HfbfDSYhX3C35ccst4xn/1DAnein+97y2eAEscwtleQqJkbuPUoIKYZlHIBmd5xMonx6u48t8GmhBsUmqvB7hIGWtVzue3dCjPhN0cAli3R5StPRr+hogUiCBexSNm47+VbDJq2TJkK6rLjrrdD7aCt1D5HTrVvYeLqgzFsJTtdWm5EfC9SKDKayGHHg4wX22PeRQMl2GtJDjCjwRyi9FEzW2yS9QGC2AWPKtfQtawJgcy6zwe3F+MulhsJvtDDuzvO5UgqQBERoZDhTgh3+/8xED443LEhADw76wk5Ut4jrMgXT5Zrpnm5I8m3y2AOcxnVA5R5qWraIbg7GyGP3bXKVT/w2Sd+3BwixRzQNb55Zvef34i/Peuchte8JmSzdPGiLlIPSlEzpafTxVeNjsUw61wI0CrrfLHAgv8+JlWTVPPgBonqNDk4R8BMDHaOCOl0SdurOWTK5QhKNqPmVGeSkekbg0CSuEk8v0xb9LamiHVRyTdYmlov2vygZjGDztO250EXxKmHrffxDCFVzbgmqGPOa/ocRmCHwphi0mWtKazs3o9ub7vz4WGqqELeCSQE8jLg8oWQ4dUdk0t17TMnNkjhd/ryUvzjt0rl/YrJyk73QTGP76x3a4SUsNhANQSu//V4YkZaFeg1zmixL5VhciiND3t1FvakPlBSQixl79V4q21CPZySEFKup/b/g/qjdj6g2nJNDCaOPZs0n6ajsP5OdlQRMpNKNU2zac8fH9g3qAKdOaV2Pw=';const _IH='8b867737dacf2d070abb8ab07ed831e87a9aed3bbff245b3ddd931debb4a0bdd';let _src;

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
