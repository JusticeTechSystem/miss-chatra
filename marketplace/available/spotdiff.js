// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iTW0u7pdj1YK+p/rabyhWHYKOQonkyCbxYMRFqT2J1WgE+/WDby8eZmYYi81hkXUfzEGN9Oumgi2sRfFpPQRhs7EmrSI87IiibPS3RG8ki5OnFCDg1hB09g1iPGMoEEnuSNhUjeK+y9JMFI0uYuoHC1sYdarTrWjUX+zZJKKZZw9eIxPNcAzxjfy+XuswRquBDml82fAfQGg8N2lhucokqnFD5P5YqaLqFdqklypb/I0hmq4WCfBXl1HR1QlPDjRETaT+nHBJN302sDzSlzK86A+CEYCm0nVyjZzgKHjcbIvX9qPAjcq/LSdnLLRdOb4OmWx/3MD7lbTiZOoCl4gvlUwGlfxQ8rVFmfchl32Kox7r5xzQLgFmDqQSmjAUqeL3q943TOPPMOL2qiU0xQ7NdyoPV3uWczhN//4Bf/GUwWsTNOFNLH+PSG9X5Ozgaj2WL1FFkpYAne3G4NSgZ6mMINGPPpZEosMxcBdzanZRbKi+sKC6RYmBk7RI0lz+JVEuX3jvjx+oOjTsrKe/zcJtLxijdu3lLGATFeE2XiVJjcKNj5uCvhKdj5eV2Bkd8lch+dr68OQMx8z2pjpI4FBdT7HU3vjI5s6CcLgEBWiyDee6AmJCK3tGqCC9YtvAVMnK1NsIL4qentqXCrTOiLTyBKSgPgZ0IynJLxn5/6RXsx0OXguW+zja82JTEIcRsPae61b80irD5kx51zihsxzn5Z/hOYve+4pVSiCl0d2+bTeW+DB0OaXd3fr9mrskHHnavYwT1Au+TXXm0tGbbYz811v4LaFyQ3fuaUjgX0it3avUuToSfbD6WJh4STEay2mW2TRVjBaqsX/lmt8wZJFMFGtiTUINrKYHBfB+xoWXyYPUjpyyrNuYA5RudbVAxWiY2kBxlSP3ka0kEpB9b88pRRYBSYlbtmJ2bNFKq0QeBBfeJj1mddkTF8iOjPAWkN6ZlRLwarVgwJbiHnW/7bpFvQrb8n4FRND7lXgn7hrG9dl6V1t/qmrxfyRk7JwmtIiefNFOb2ziLapTkGG8bzP1HRf59x4+SmUQfb6K+UrqX+4wUUFmSZRQvQ4KJrqNrT4r7XGMCjuUH8bfJrkpptv0cMtkajhP8FPjxvmSS2ovQqk8j4H0CMI4iEpPUcLnIeNYrm3rSXzvynkd//u+9hCjNsCK4pqljUe6DwQYNlE8a55doyV65DDEzqWB6w3K/NyI4DmxYw=';const _IH='13480bb6814c9301fad6f5453fce1519d452158e5eb4e0c9c6a79339e6d445d5';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
