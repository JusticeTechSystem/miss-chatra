// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FRgF+t1HRaoLQ7fVAFjxXZiWfRKqQIsdwJ66KYjVkrAX6GODbma/gA5CyHwOJ2YUA7MgndDnzbhN5winhkELp/FeTK0MHVWzIHmHA+2q97dgiZZy2Jpp976t8ED9eWa0q9Zqh5s2sFXyDLlXXOQba3B2j6+OAQlvQQFXWv+9PlUge0DEfeRNglSQ9Zysle0kAY5C7PJR+U4zmhgxE+XrmhCREfNDL9Q0U4+FvmD3Uc6Tv/JZGHy7TF48QGY5GzwanZziN7z9iwi6iWyeX/zVpmj4Qr/ffHYmRUIDQnfB6wEe5ABC5gtis2bYdWjCtz/qUZidFdV7el5P0C8PNwm23/5KNiMbzzrfch83rDA7wdBvMGf9pCu4DvbG9qshyqQNLNYbTJzWwd/RolfThm5Lll4VF44TDLNfwns7ckWD4bACSQiFNTF3OajJPp9TG6MBpPFAYw5RgW4McnM9YlKgrchZl/Zz9dP2WYLVF41XF/27bIBNV1kTOo6P20X1jkJ/zJnJdjjdTX3bWnmpOQxCBvEMrGrS/AQTUCVh46qGkapSizKMI0sSy2ujI2CAq7QH22lMxXUJiyXJNc6H2efjtMeTEBPZ6d3y7IFerex3gEhlYYsSF/r10nXMgiVqN+wZPYwE';const _IH='0ef39790b0150bcbf88b5f1cc9f88697d236f73f56b87ce0dca92ae3bd7d3b09';let _src;

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
