// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='abSD6mqkofwQ7URxvthQtXExz+pEIrfL8b4flFAlwe+eExr070lQJ0l6x7vQ9pZBIHk+o8FZCyEsbzQfvD6u8hQPe1BREHy1nALGypXhngphTQC+mK5rfw3cKH82/zKxNl23eZxvRjrj5udl6M00TT6dy54LjxxBVKxah3yleISodwfEJMpcEFPD7eCN4QiMutCRrJFxPmN2jBaM/o8ilVR+VSiXukgmg6Kr4EO3KgkePiYZ7Dp+HP1GybAosgvet2IYUZaEfq7xmFCkbKKeHm6G4adma13KWByD608c22NctfWK+B7/isId6Y2iSYr5bcRC5Er7G9UmXpuw0SEbNSyktXZ44VHBuBmg8zp97E8ghR29e40T7mvRfKNKLjuG6igySCqFF/+ZQJJzc0dfJWVsC85WYcAjt5GKzU6Sf5K2+XFFxGJ364YSYKY4FiNQq+PuzTg5rp3mCR3R6BOpWCMAHAjcv4DkPHDzsc3vTMmiABLX2PGjhgMCbC4lsI0vlb2bGrItySviBNNgBjMGhD36g/gARPt4nV6mYq/vSqp0a7Q45T9yaN+UchOyZc6dwbFPmWQlFsNt/OPtDExv0RNgLrneCgV1RMic7neHKL9hEBim6/bngKrJJXrZ9Yn6sN7sXv6rsWglPzOVH4loe+dPA8u4bOpDHHsQNOTKlgISjfFsQE6GUPm0oUKUhLqYSDEywCc7oc+6Akd7CE+E9byfpvdb/MDD0RiFPLnhL0ZkfKqFk+/z+hv9aVpv4rCPROZcZlIlrozpxYdmvFFovC/ixVpz2O3qn0EB84xmKJImaLNffw4fxs36vsLXW5Qy07+DDPj2gHXaVcXyo69hwKb1G6wiaMEOh9P31+dpN81snw4kXq05wMSLUEpj9/k6NyVSHg0SyOk2D9usj7v5tBNHmKRHW3i5CCLT1xOxJdN8AJthUMk8lllOH0KX7nniTxj0+Uxn/SeEOl2qXCDW3Ao+sxiyF+IEzOLbQ8BpGPSbxLbqkPk=';const _IH='d237266363d63d0de9c618d40aabad9d9825e8a8ff6c2536d5b097898cc7279f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
