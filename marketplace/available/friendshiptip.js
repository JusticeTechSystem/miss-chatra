// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQek8Ogo58p4/wQnd5paTvgxasqWJ+chgIyxK2K4XRDWlfxY0TRIP/0bjT+76guoPQQ+vYn8+E3Y57sJkE127NOCmRYvIvxwv3CEN3REApBo4t+RiJC+INsKbE2CAMuBp4kBl0zBAAwNeKqassLTFEm17UgXaMzgegrJrN33jCIxPkkwEQcyQ6PICBE63XZcx1QxhSlZuzwc5qrYXJEqGe4qLHzudifhJsM8oiGmqmoTabUYRsjTfFvsos0fk81VclfDQErQCikyJ+VnKGRVEa6nyegzp6/eTqJe7MGvO9yCH78/XWOhnu6EEP8VhxAViICd1LesZTCPMskpDG0wQuP1mTrGe49/Rv56wrbSLHVuEK3PnQWp+cJs1NNsNYkzUgDKRnvUFAJRYCiqwZHoFH+2y4Q0vLJVDVSRQEQPdpEneetB67cF9hLDiZsRyM5k34XEl7Al6saikqOFk8cSlzRixnYWUDEJBTOk9en384AXAJIvKOPoS0j48A/UddHIsD8PbnvXSSnxXh/ttZrwG3sNqNN7RYu6i/1WzIBrxNz6Ewrfjb4ODv/PmrLYc5zqNPgshdvt968t8nlklmfrnBx9oSZSpZWU0jvOFaRaHnXCbt5VUNy2cIBnVnAMuAWyosgaNXJ93sV/K+c8d88TMHYvWU5UKPPLGRhUpaT58/pUS4nBLltCgPeGPhtn1A11kzhmL7iRNbSfBiOMSlYm8t95K/FfPS7RF8wHU6F2elScqE7li3wXa27+CEGFgdoUW880nr/HiaxvWam3urJ4r7YtaXYufoBngTWq0gTvJlvYgyaW2tuarxJxvmmXEoC0IsP7ejl9aLQuPt1xrnAYRn7UI7eE75EFi72p4dUm7VD3+JIgrsNrC5oMb0QrTdogvDOYfxqHzZKMHfTz95/4K3HjgfCBSfXVFviMPNAxoIxKHpg8tCy2VKSRpU0Ti4X0X04sC6A98fZcXL7uVqT0WVQZa8LJYrejACU0wN0l4u8Cg633+vkxnSJaXcfZfP3JRN+HwZzQ9wHiEZwRUgjQCWhzqaA37jSRvjBXreqlFHQxNIWKMDkoyu8C1m77JykgAb1PDr4qIg6tE+ZCjOgBceXgAY0Ay9RfkWTqgM5KIGqoi2hoOykj4gagFZmAHFLHVv5wfP/8H+i3fk1MnjImCh2WZO+lGXEW7FyCpQdexfMfFpZoNtOZGLy/t+Z8BXCUdt10HAWyymVEIRRAW/qkA6Lx14Tbw==';const _IH='7af972df76a980653cbb158453abf4cb28a03c736366ccc04cdee5c8cc332d8c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
