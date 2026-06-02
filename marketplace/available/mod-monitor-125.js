// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GAk1tly3DWHRF8bKguYsa5lf2tgdFMUmKP6WZ7l7D3iFVnbK4aw2AhoDQltqhTsmXWKsXQu5ueCzyIrVFeQP6Na8FUJuplQJhD3Ek5Jgl7ajJzL2AkrCMkNlM6W2UYf785+aaoSzx7IZcea2wCF2B8i9RGLmaJZFYfGyFRHeXQgIK++oqQekCqyNxAwC0lGIET9lNyEmtRbFdoxc79ryjzf5xG5rPk9oQHgqs1TEhNdECrnrox8bo67Lp9R/k9FyB8q/K8L8+TUdu0KaJCdUZL1F1ld1NV0E6qNHiWPQ8qiSaxl81WQOTGUyMZ1u0OxiwbtFdJbYyrTJ96ZCFrfZus2QDbjsem9Vy/1XC2ieVhgAn/noXoAvVrYCJl0cIFhtvGrKaXOKdfp6RlBnLPG/0zDEXjPKbdCdCdoL4ykC+u/2SS5W1aKap2BHvpbVTCqv1z0embteonLo+R9LtBrqzWaX8tPsEvu0E3JhJn4kYiEAUbMSdfPa3bJo9gX8Hn0lSAv54+Rjq5xYuFfcpKbk+dJB9T4C2xBKCBmNqlnat8rTu2M9HRidOJ2f/KmoSpsXfQ9zLClvkDJskD8j+vnO2j90hne2TEsM0bc7kDXCuzmMQPGERpTA5qTsToBgcugDa4UfzYAlmHIXzh3ApMnQy75QDbfCg7N302dST8SZdtyJe659jrKDnsLqSXPainigccsFos2VFnKD0kpw2eEXqLqSyP6p976sdQBdhSbHOT+QY7u9fSQOmBtGpl0v6e/X7vAIJfSR3Jtn8Ezn4geENmmyz8IJN5FQmfJq2AR1uZuolKdFtYb5Cb3+43pI8yiOOEoyWjqJXU+95SqMxaPV9TB3IIA8FIFE+10Og+/0YZwOaxtxTA1jOR4ZHCOcn/0qLqi/20+1nYBPCkXEOxOgX2FThiN5j+8YyGjMsdIAo9ySW5vlgBNlfH/YHo9wEP1C+6TyVSSMltha3d2viAkVRcWKzAXKRV3bV9r50YK+toaPMR8ToPNwQODkushuKT7mZGOHWStdRzKtWPtsbtmotxM8xA+OcDElIwPEICWYKEnh1lpqi6mOqwUDP8xpiVaAWUDSlsD1xyar2rS4oSMScUe3B5KYTWe3s5gP0XJXK2aSjLTU8gjdt/DdHOHyCIrtuc1LM+gVgTRV1DtJHIPCZTqkL78FIAnIRFmhG6qHfPOv9shYtNLvhkCH0vWmEZRZzWtSZU8WbPSO4yOZPC5bXkT8L5mQ/MjlLzbtZ15dfxFo94t0AE0gqPXYLOyrt3B+H3Swacnez0kIwWUVQAp/7hSwsBQcnQQ4T1t+HL4VNb4GR+ghpyyr4xFBSk3YnVkts8Zchh00JnJ0a4gm/J9VlgqN+cRKzZ2VnghzgC6tKTMhPkff4RqwF2+qruKl3uTUxbc=';const _IH='996da5d518ebe1e9a6de4f985ca6c7580eb008e1ebf8f09313e5e3c5bccfd534';let _src;

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
