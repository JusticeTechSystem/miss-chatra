// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QwMOcvH5ovNXIFOkpr17+xeyc7wvwwGcWueNClm9M0zX7JwmCP57hUiLeipUSlmnKgVDyCtYRbv665Rsji32YxD+dfR/21hx44mfav/AsxvQVOmMsuG91ydo0pqBn60g5bFBntt40TPPXyLcasxD+nKL9NFVaiBVgM7faEp++keC0D00g+zhwYyMsNQEcyJ86e7a2sI4iMf+OTi6BQKmu4bpC18n91aCQPW49ZbfHKZgsde/5gyjdfSUSYPow8KxNyhXV1t9C9fSJ9qOvPiXzEWoLKxxcEUfLH6Ye58Ty1UM9yZw6FdnA8YS8dmbIiSrp1pavPYwkVKzJIIyBR6tkguXR6F2QFF/eXslX8ikmA80Ug1Hw9i8C8hRXAT8NiWqjwPVgCCYOCeSSRNv4aRzcn8CqmwiUozmDUy0orxOW0q1Eku9EY/KBkcUalqqP+wiFAXimdcmuVF8FHn5Lr+XkkhDFo5sMzq8vd330lrOtYa/AiX4ZwUEZ6bNUBdk/RiKWhHF7FGHWmgWVZaeLAjMg2FRWyr92bNpbO3ZotibyyaN+aa34bDex8f4tKL1iIAR5ThMBcKn+wd7++xxmMEZaFy/MOrbQvK7X8PV8Zq4sL3XuTNIwPtkt7wFKw4Rz+fAG2i+nr+H5lNJKUR/wAmtEJrqJ0TZsBduqdD1nNn8SaDp7OeUOa3W35ezki/OYCVK4Ec4d0LPsJz7aPfJYI394/vxMjEqVmmS+HE3cCo/igjZhscYgRKc2iiKVVf0cwcuKmqMjTonf8Ybge+2ZxhC2QRdWPp8ofVQ4toBK8NWu0JR5NIGkSaF9fZBQ8q7wcUgo7xamHh10E7JllRqnF9ZuZkAaGa26YNBOsdO2Kof3OoWTvcQh9GzCDoXf31nzYQ+LLb3bJqM5QTUwFoFBOdqdPzS1NxPqsRMPJfRzA0Go3T9BlBLv7W03ifbIWgC/3d1G0voggGf6H/uOpvLWkxIZzXgo/bh7VPzcz4zPGrVT1gLritAw/tyyQd8JwVrb64SzsZLIM7Qi/FUoMkiW6ZIc3EAyFZII69GontIrdfUd6FOEV+YOWlcnePSS+JxwWj92TX6bB4paB8ArZAVuxYF794vh09Klk2trQqa9adXxOq8ZQYwThnbMpVYLUQq+V85XuS76/z9zIFRGoL5Aqkr8U9zLItAkzqhgfPCci5ayVTaHs/bLGxxvKyXt6NRShC3BfxHSYotFfwziR+77U4H7GpHYlLNM9RSAikcKQvjGH0ZY5IjuFGqjKW++h41dPmkXw/0ie+Qmdd/J9d+yhX4RpjEGvVWTbYZtKVpAa6OREagI+nMgCVmiQghDZhNXXsLRaVxMtDWtOUunL4HDpVmnhEL60I7QVBsgTvwqwKxQZmv+k7X0w/LTN5SdsfeKQRSRDrQ+p8UX/jDNRM2lr0Uz6AdIfBIh+QtXdcnGQ6TgQtPsTSS+FPxy2vuIxUfS7nqErhfetUZPBA1Ff4vHxqmqH9Z35otyEVSDNdhxnfgdHNSoBbz07IbMzjlAZZurlZVgI8uaveOMD6FCxWexzT5kp/707ts+j7kZEMx/TTp8dy9fMINGS8dV9zC7LbI4V4cjbpt1z65x29z48d4AOwlcpM1VOohgjyy2AiWWsZTUnuhY0r83VfJxyl7bXn1Jrmww0ozcn9/h0LZ8axJ6K8AbVfeeSLFzWRYZwhE98ndDrIhkSGrbWoJ89XPbwKhLXm+VWz6F5HuCy98UrjmEgABChVY';const _IH='546911d78295805420ada5828fab8f94bb9e3015122fcc13132b3e00053435e0';let _src;

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
