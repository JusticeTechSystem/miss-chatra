// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J7s34lOPypirkQO8+UahB0ItWRIYB7OK0ivIOAKWsv7b52GDoEsVs1By6Gcp1/TQy8EKujHWHEkKqLCXT/kda7kdwvOIxd4mLifGtCIPinduVaUzpBPN/gD2ePAKkdVeiyEXvcMuBbvrUeJxQbKDawQq+PgKIM/iJTx2jXkrR5EBX7UOWuYxaCfBLKcNSRtKCuXbIFAO4CWz2D+OgIyU++LdaCeRF742jrbP5yldKgKCDuNItNL742E/Z0gufGqEa7pWvHNQxhAyh0diXhTV0eTkJzFTdwELeKr6hgAjWxbaazLkUchKo5ubXMP066qP6hMTDb/hxe/AwrOS4frCqd41aPoQqI4c5mttLyoHUQFEZZJy0hl8j3IAehg9upXofMfuDUFcfBgykoYV/8rY/7uenbAPRlavoBP8K5bFX9llhiN0LmCkE6d4jjSvQAs3nZwRdiHa9OeGdEzsFDfukhkbE8yV9Dl2FHqhNsrzYB6uLUDUpDiARzVRKBl7mJE1TG8pxBZMJGmAErnK/DLGnx+qxFpLZ3NouS61ZvL3C1X1DQ7SB7f11zP667XgrO5C7Myb6a1B4VEYXtJ9GdaAGb9+wXkDvp7PwYhEGIEVmM1Op9T04NU09DbC03uS6+vYpbEn52fQabzrxeDTocExdSRA7RoxJr2Lb7QMhyKSuFS68YlpQt8CA4y8lkmky00h877bAcF2wc17D1oj59k5AqFZTDLRW4wio8XTy1pkomuaMKcNPGGYOKe7t8q+uZzp3VElDa5kXDq0FmBSsXGtqALjEzKaOfkU1YFtpin6FzdFiiSid9ETxapbiDYVv82+0kjcdyNHjN6qKdgFUgRtUM2c2eH6g/FzRBh7arikLpvGKdipZKadNAPaZRVHfn2/nmW2OsQ+skt61OWoMcvJPMoo6xb5pzG7JuGllZ/aCs2WcGpnSUPtEE6D68WMDHcygD0N82rkEs7Xi/lw8qUJ+G+R22aiqr/aMOMO+QqM89VfuY6c1dVC3dFhpx153JHUXbeGNHFCX482BPIT7js9qnsKOmhnA4sv+h5IjpiG3HtX5XCLSbjoLNEynYef94yRKaepqAL75fkkTZIA/WxCXsolg3e/Vz7Hcn1wXZxqazN4oqbTw+JzvTdAb6CEYNc4BqBc3ysjISFvPBZiX1RYoGqSwUI8pT30im9O4Q2QHlJfKJtPNBrScjRD4SqpLVi2Q4YhlCC2Pg4yXn4=';const _IH='46375e6c2ab6a6deee47b792a199f0ef6997ae4ec801323fd66e76907fd6b9c6';let _src;

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
