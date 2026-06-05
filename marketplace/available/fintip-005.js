// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xBvtiocmUIbkJUX0zaB0uK0Rx+JAgrn1Lhi31esJfaxEcZL1HMBTDF0E1cta9dTCoxntTm+M+OYS4uHocG+++0CIbwWO+Uyx1xVXapEfPFZ3g/j3VUkoc4r47DTRWT0+ScORscESuDz4TKBGGzs3dPizk6OkjCMN8Me8lLvpApdNyojQ+YMt/9Rxshkj0TBrb225blkd3GNpSKPVBVYKoqHPrfRpc6cbxCjoiaKA+fLHOXK4MJZBE8Cns6bwE5opsVeJvZxVDMIPB06VXPG6AxVQ0o99D2xTXa8+BGZQ9tn4DwYKYZ6TG06JhO7hQAt99RYLoRdyRdb2LZ036ZXAOqt5J6bczh7ZoISCcsukE3o7pSqQC0yB72PHBPZyv8+8O4CznGgA+sJnuktyxeR4VFEcn6+GU5tPNkqIPxm3oG9nqKOusetSb0UZM/9Dv3XAFHdZ/1jMt6grG6LpRXrHRnq/WYz6C4v7nARyFglZxNTIOPtCJl7JCN53iDc4xL/+n/Po5HF6lkvChxlkundhdri3Ex2wieKfi9DoN1RTUULccgeALzXaVcT7YpHRCs9ZueHSPqnYrYIkByZj2zcpxqxuK/0F4CmA0bdLV5GIufVvExMwlQFVp03hXxErq6/H2vBT8+MepdOli/xPq6tvZd3JXaqeFvAUoYGVg1cdYDdaXUe45nK0OZXl2SIZWmIIkb9+aAqdc4U3bIuDAbC2tG2X54g5xGr9D2+QhO3wpI8xzcMNijTmlYm14TIiHk7ELQ+t52HY7eGnzsCurV6rKXiYSE0h5IcyV9Y1A/5CG1sgV2MN05LplpDhsngEHOuPGEe/HI/afnuG24eF78O9KYpJe/zeMWwJcB7dz7gsqgBrjl+8KOLU0ZgQ/37kW/zF+rXtO9y0oIBMbDnC3PTsTo8QqCteP7NvIGLOcL4p/oPgECUf0HmrpgDcbTNMxjOeC/7ieneQdsw11VXzfY6+wIeiEtcgim1W8mZnNlizCv6lOoysJNs9T8cIOBbAGfMV0YRnXaiEdgMgBtzVhZVkelVCnMWO32Uz/vTN6I3y';const _IH='58122ab2247c38e5751e6307ec289705f7200e96a4d33ea02bbf7655278e5cb8';let _src;

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
