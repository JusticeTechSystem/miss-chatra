// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IlyTigrjc+B4GaCC892AfU1Jb3EYym1uLbC1+TAfo/ttn5wsgLxwFGGay+loTfioOy2aB9/P8aHJvfGQ9NPQ15rIX6fVqVIxXVqka5wTs9HWpQ4gC5/6usnusMwsjF4JJAs7Xz7RRhXJcdtoFzW7fIsXwwi147K+ToeQI7A9DFF7AliBFGvW2sYVxgUNGt1QuYTMQLTVASofrksuvJBitBWCGAXlxnHc2d2KpwOlZwqTtKWakahPUvqMfSabPaPg09XLHeYcABvb9wooIMWUZNUvokhPy8A1Q92VSnYBPXLpOfwdDy0Ph6Ay74dIEWN80scCSN0y5EGUKv3g5eA72iQ7D26dax/9rygrqn4rACpqN/zIgArR/4GygbsqRC9kd8bWn0O/JokhYvRFi1FTmSYGjMkZauXeGzQ9cSP6MiVfHIMvbh0vmQeRXUENyW72mLtqu7yesjpOScbkjloD2YxE+uEbpj2dPPoLNZkUkEO0DzzrLyxAU15Ua3RAC1lZ+bRzr+HmZRP06REbplbkqVjQ3YzEKPwYdbN7aOTLlc7FRvqqEdt0xEIXrWNolHPqegg7WIr2X3hNXiVK/bp0Zp9+nefHTOpOcbVJ52se24pK4ga89HsoD69BXs2OmSIWSinYr+CAA/RcCYDoi8G6BRP4de8xN7Qjyfd0hmUTwaRodCdttPHkJZ7ueYfAi+9IBervlxSSW7MzDcCAs8wajYWLBmxQA/J91w==';const _IH='a339c4c2d622cd7374aa3c5725727aac76f5e10980e5a0f752b6a4280fb14f36';let _src;

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
