// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XxUyct/MakwhFwPOfEtoqVbUG4R5sppsM3BCBMx5yHmh9eHFFZMUFZ8bVwmNmleofni3rNxR8lwyOc6bMuy+ZnZ+R/mRxnoV1/tHnnico2LEl7RdHI35knFaUVaOYrTTkIrRc/5gC92M6PTMSXLPDpafkhNIUjSnnSZrijSFmbobwIIKjqgqfRGbe63eed6ZUd9siRBHeG5rCdnE5LXcgu23UxRwh7mdCng+jKWSVrIbYTAPXCxGM9bkJPTJEbLp4cubF8vlwQzJrtErIeeyxlD9qddO+616Mqws7BWucYmQT5ghYwgIH08Ap5igLadXJoleYsTBLyC020r8wdU+b9Sd7NGHkrFzFLItshq4rhxVkOn8yc80SNU2a28QnPRGSdveiGS6bl4vaEMlWdkI8HDPKcBdLVrYx268mSnLshNqBViywTWUvChN5+kpLb6I1zzAbjX91sseGyBnILhjllI2bOxHiBEtTieiqkqvFbPJnVu7waSrg1W+hRBdNHRQD2E49xsxYYG/rMpaS63mw00qdRETBACONvCppbaD/WSaKHvw+g9EmeueTL0REvNZVApum1w+gQfjNALcVxRHl2HfJgMubzM0MlT5wg7OOafHOPi175xFGRPoYY46wGcQHMBA4li+Vnp7KZvbKcTqAE3Xc08tAZbKoys5Nt7FBFbg8n/JIuQ0DyOEkTI83HULhPKxGbsp25bk7wXUwSTIGPmgCtHVdBShJgy00arVgonxFRrvgyhbQNzO';const _IH='f2d69ad93d8748dee1e935b9631c89eb9f9c5963a285fb64b2c56f2424f35178';let _src;

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
