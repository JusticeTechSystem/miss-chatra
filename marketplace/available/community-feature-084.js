// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EUtPj2pYQN55G9CY9zvQstjpL/I1PMjru2bIo8fOqHwRcFFUzKRhHpb4mSfDC70rlvXL8jn/1yC/x3B4EfN1EUJPkFJwRNVSg1P26Ii71m9gxRLn2xBUbijMH+ZznZdrvvAA3sFLYw/zZV7yMRDdlzxRR59NH3m7p5oAJbRUrZykfkDe6jLRU25zvi8iJQlssnDk8Bk14d6ytDrQUyV7J7z1C1+jrKeB8KQ+tN6uyemeXf0gs0R7eP/jL/9bCb6ccYfA+xokFpsBhS8Hyl+1PNn+hnZgQubUE96RWVv1TtwAXSd2DuKkRhboMkCqQ8Z5h5ad2Fxf+ia40s6xnOmt5reHdXmwn1Uc9v4BcSHwIubxrXndzmaMRFaBFEKaoccThoG9KNHzDLYBggG5tI6Us7VdkDKT+EjLRFBqJeUW3n3qgB5IZnKJfNYCAxoKbgvpoE1ktbbST13nOaQBb0WD6e80wgUbIXg1+fIlOQLnPSY5s+cpsMkuQl0m9jkRC12Kn3DgKIqq1X/Mrv4WwzGbdkdHCpbPBXI2/Ka1NjID7uIjhakb5YstJ64qxZG4N4IVqOSzbBO7XhQE0B4tETSR/3hs7gtkJv6yRIavE1WEqFjt85p5rBXBrndvNE7kFVIsZcW6f/OrIrTDWRKO28tI5EJlsSxsNh+XYmGNM2FwYkvaBM+mS7wnEzfj7LOIJQ9eR6dxqCQcsLgdXedbk88lIIhJKdrep3FFWk9BpTShOwPcBQ==';const _IH='9ab2272b5baca6f516ec6ac567e996bbbf460fef0afe0116c279dd8bc830e85b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
