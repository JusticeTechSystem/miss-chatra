// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dqUyKI4TgskJuhpbgW1ZEy2dZCqraCEQbOVbglC6AKNTM05c/t59acNPzrgR4r9cWp+JwzyfH0K57hgATELZUkd+Yq/TT5pGigcLVr3XWpCJP3TLvncM4ZWPzaRujFW9WwUu9waE5njiSvK8ZzgN+YP/kUI3hbCBlldUOQfsSoCAM/9dt25FcgN7eqQyInH/g6bwv+nmgbo4HXPzttwNLSfjrk3I9eya7r/Taof5NM2aQSJ+9PiSzaStUXJZE4xmH8kTkBKP0M5Qc3RsjXDRyhn3qNmlD1EsXifT1iLJT0RxYON22sZrZ6kEtBcEZmTSMUeIkAnqVc0hbO1r8qGMsyzKD8BEWrT+zH1HAhJ0HgK0tL9lHqeA3mo4iHvyqt2o0dVqNq8zKvz/SuM5H5lawPUehaD7HeZrAMpzsEZkZKZp5pCpCK5Cx7lr028DxD0fRF7L5LArEMB1MKHkli7/R/A8za3rD3qorVcN83SV3xHikw86vsFkkKa/BLBuLXHmnzcuZrhWdSf39THuKUZdC0hQ/NC8mVBbpbys67kAuuQLTiPoTFesOEpZS3P25t21vJbkQ5gCyxrf3JAx56xMVt2YwLJAJ0Z8PwybVZe8XpQYjhCK9HV0tnGIltt+95opGjYJvcndPxGuzStJkInJZFnG6NDfx0IhKuntWosmmNf3JWDJq1IGs/QE+jXPN5fw95JwxZdcbdPHfDAbZ6jb6h/us20BW2H4YgCzNCUFHwGpIhkk52ITjJvxDDLkWMJqi8kJr0YmqQpy0dSF56TJpPXsCtWUqAccRhzCjQukLuqAIhV6HPUhBSheQSCLL71OtAQU/U8Ru8zNf2wdXGvgurz0pRi6xiSJd6vcqBYFNrC1fJ4ABTEvl8cEj8j15Zn31F/tYhUD4e5CVempYtRrdIwzm8J+q9C5xL/VHiKBAtu2wycwMkiY+mXW4PfqneCRRi7kUv9UvkoddLzmxurvmsqUH4rTKlwZ4sZFVcWyHiREF1Jb8m+yEm8RzYk6KT00dQ==';const _IH='423e78c8553e8312a17e28ee3cc849f4660dbef17f2e1e0546c2290cebb57bec';let _src;

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
