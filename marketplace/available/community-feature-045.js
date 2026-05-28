// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gAvwoOau6a4AzzBSj8xYadtTKx0tWIob2VNwpc5sTVW1DoAE/7SnVWrRkxzrFoX6m8orwyiV9nYeEjtTbedfg3ZdCucd8U8iLPb6TN/gAq4aBPA6Jf12QZAffCRUt+NQNbAP0TGqkgIDgyxdG/MLMlxx3iyjTmdK4rIBU05cpxmB3k9nrLi8l93b7O795Ykvf3cJtbfiEXq1wd8+RwhPe511ko3+rHbbfOn0DrjXK7ztOjZ9LOeCkrjCs2h2OzFls508tFUNZWwjWdGjhrbWzebmo5A9hQiVpTOCm746pgJGSVTClqhFdIP2MOuWCAPTRpJPsxb7ScjxnHSzEwmTmtgfoAUHiBGiGcn3OfQrcONT8bN2p8cbcev1d+21A91Kpg1yhCFwvzcytuL1NvAils/GhQByabe+AYwvDYi6PRA/E4HfxNaq/CMcyVLHvfRhYmOtAgedkT58ZpsHNYBzBfZyaXyeZ0ocjMxh1ugX6+6VOeApt4mpEOY93HN7SQu407opmLxLsEdLZt4YMqF8SrLHIGdSLSYH/OET4mhgc4MazCDJbl0EwLWS/9lzXVGz1iL5bgmsxUHkinVwgQCIKTPQHyla9J8HHdwvrww44D5H4CSYfmuI5c6kl2XbCT7tR+xy4KnUHWIdfiOAHy9+hyHQfL2f8rHFlyvBCWHUNvCLn+qK5DeJ9siOzdpxp6v+yQnz9gmx09YCLVnxMtVjEo2K3ijTI9UC2MydSq8N8gHgkeO+W6Q=';const _IH='be82eaec9a6e35794d2c7d4cf9c60c7d72ac03612f1b6120d47a5eeb95028b9e';let _src;

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
