// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ha44mWGBrAjN727AexGOacnpU62bX1TAXFjUx8LNNxsCzdtkggU27qlrf5W296Ly4u8pVK7N7kA1Q88jktCfhd+2Vyyj229ckEPsuUS8JA45mbnytSg4wGqwroY9bh8pkN0mqmRgmnQXwCv3oF8lR3SjC2kqtd4z/cODiZWRGyOjqhlPqbsyvfF5lY29CzpApyhCtQV4lQzmCSeAvcVHaxf+wuJPGlxyyJdY+mLxXQ5F1CFpHh+F3Pa/9uvr2UPt2csySmgK0yiTyuCGHKD4QTNLCqnoJPPavb+xF+fSNyWTL3najmKnVGSJgsNfjkWgXQ4zaAfFWqWSWKGHDNIMSSUbC/bQo3CwSl2TMr3XKH5CvryeWbU2Hdi8DTpZXQuaPhkS+dIcYuY8/xzXNveSAlRofeIGHkkt7irQQkwFQeuFlfW5Rk6CA/ucmczdDuetjcj7ZRHJEj+yfvF3InUcMqJ+k3oH6jWHgiUoMOejrYJQNO5FfDf2EHCUmu4TYTmuYZJyuEmiHgSDaiMVjutNhQj3Xl7LSju99LrrA1taZxdI4dMqWCaXjlbbd9KAkOgDqOAZy6tyM5JNjjGSsS6dunuvdT6Dm8NAmXU4NSJTXq0vuio3NEqsJEZYsocgffdrwptVKD3drpH9TXkxzrOKPMG4d8LKN4I8JImAfDbG9nAkIq7BxGVW7TWrO4z/ajFxTxzw3UvcZf2Ywy+OdgW3ylGvmjRjn+Y6gfDP8eRP209FsjkzEH3TrAV0/zr/2WLO1wSjYvfNGoaoi57nO/itkzdY+wmnwATIfrKJbl2HrmHSVeAZEf7M6RzgJ4gXch5W++ywENQBUQ5IvHzJQ60=';const _IH='cd599859b743b5ce831cfcabb60ea2a62327d6a86717a364d0723a980b7629c4';let _src;

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
