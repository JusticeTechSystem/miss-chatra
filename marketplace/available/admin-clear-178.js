// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vwciYh7w1t0QFHpncwxAcwJnPRWO/ijhgrMPmvkIanFDtbHf0Vn7BKXKoSfrxfUjuKBjpVDFukisrdzbn47b9MBYZ+H0UxAuKVdGCLH8iVoSL6z32B0jDsSGtYfRMG3NV7lNb0cWgqchvZ9rSg8767ugXqAMOdAXK8Xr/Qk5n6+Za6gQ9akeOT7srje/iSWihlihrowlZeDHftly+b9vn2ecIpokyLOz6NTriWxEUmd+sg290rba4U3arP7gCDg22cjohPahuNVhY1xXOQY6uqoN2NqhsRZMXy2PmwVHYqtS0mQXWA4tK4cFSnrSs9AHPtZfWOJ6qSqjCXmP7sujUdAwG4EGyd6kTY2Y/a0rFLxGbYc6jd/aPgc0mABWy0Xisf++QurEHFCCcatb6UOzlt1vC/XuOmXTyQOjhyRz8oB7z30DlHwp4UWr+sgAI8ThGzI2GYDxVbU7CB0jg3RK5fGevqvnzFIpdq9SXdtAfdq6AQw9OV3zjN1dF9nkuMjokjQ8mrBHQ7AkMST1rDIpxBUgv5MRX3q12E+QnPLJnAOPGHlfrwDt1ane+Z2/0fNym5hBkSvjzl2MVhAkvNO9OOUkQlPp3aFx6R2Smq1wpmgpipy64VLGkHPYmWlGHFNgzf5zPN9r60/tvFjIkNdxiz0adKUT+rPSVnqSkh78qmCmC546QUEIAGBnhJx6nVg4u+xR6EAiWBdu++eY6lBNPh7ow1QlFpGq0V00AZMIR3vwrXTdFG1JTxmaP/hKn+A6ugJzUyH6cZvwtWWyZI7XrXp5CK2vwKoQgi659VAC6hRhPT471qMPDq0AQTwf4AIKYMW5KPdKD+NzswHknfDM/oTy/g5fI4EM++b0ODX5cq07jY4EP7w+vjGwYpxRjdNuBFFRjfRi6EgpNk/L1/0/8fHQ5HaC/sywC55zcRvvvPwFCIxImCVrGqDQJtsCVail4aWdjbmmJllEbWwBIflZ/ogl6R9cJSKDspTl8oxDV8NqAL55VHmW5rKQ';const _IH='6fff447f500004885c68fbad326dbf891342759a489464b369b2ae78b5dcecc4';let _src;

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
