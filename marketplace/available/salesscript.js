// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zb4j77SD3BiPaVblTU/Vmt2Ibva9nv8PLVn8L6gV/G5ynl46g4gL5htZKsxYLNSRphsmOXw2RofherDGrmm6LoKG+W8jQ0+IXrj83z+qAlkYQswe3Z2i/fYFxkqHoWFpbPUiMqiwgbn+zP3iz2MNSr5Bb0sbSxhy+ueWT9kKF3vJl/cyzTsRDyg0fgXFPgJqhswq7Vq+LsIQAwED3nasJKHRFHnLUIammcFtr4VeqzPsaA0cOFQ8frZSXUUv/TGDy8C4X2KZH3ZxqLpHziOmL4s9sOyT7Tqch622ETTkZTKM1SV1DMZHPI8VwxAuQPx74y2IjvYia8kRAaNETIxhY+pYxuHpcjnYt9Wcxsn/fWHSJi7S6q3QFG6s0q68TZpEh/fE9cB/RU32kSSqwrhZGOmADR5VM86z1bfo/7lNuXjLrXchB9taNiaKk3mdTrcXYlCO/TCaaSMJewrxAcQAcPN8T1WsUVWGb67BOKCT0HlMJM/PLc/pUIHgdYLMpqTLMVo6wMRQzepXU5Sr1WV8Ji5PxX1koXeTt2xEb837UqbE42bk9ktcntZnOZYu53Zs9efQXGRje3tmv7ZvMwC/PsoJdkAw4a0evoSoLiPw43hOylgs0ABDBUakj+E/SoQIMzWskM9zAesVSAHNyuZiIHPP97LgiAjdvtJfa2AqK59UFA2M331Z+D3cZa2rT/CiOqjypwAVcyj6adv8OteH6rhYEiq45IBsM5ZYiptY6yj5e/IdgKo9JeGU9wpUGOjzyQdjYUL+pH85b4XlBM7rdzrcXhRGQEjXojByHFwsWn71PjY2g8wN2jJvS3P+u9G1FUph7YWgLfuUT4AmdNj2o/5AyNPz4JBqNCWrtt6rdfdTp/WQRv1J9EzTuXpK6YKPcdA5h70W6+ACKXG+oZNxM8bVmtb9lx4hMbMNLJAPE+nWfl7BAy+sw5wLYMjwiktxE76wWjts4WUHDtGHLM5XhJkIdDxl/vs/zPYUyzClKu7sDMysmtNS9GYgavyfsSvVML6lTreYVXAvFtX8CPpPEQjFb0b/PXdxsfKBRMu3I1YS65FqLl/8Wi2F3JEGWYGjp2+QtwBMaJh/YV97vmc486ExrcLbsxMPGMD/QEX1kFeOHx+nX6ypJuB1aEdJbIGDn40qxI5waXVHcTWW+N2NAGkiJrVUeqH7ZIsFKHKDjI2XUWUzEb/K66O88O7HovEN/QWQ';const _IH='83c226a59452597a99f3f5dbd7a3e2ad6dd1a5c7e5cdcb88f5b0ffaf841d9e09';let _src;

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
