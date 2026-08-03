// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSD2yZ9R/Ajz7wMlQV2jKOxhRJwsphleA5ddwqB1WwoSwBQFHeRYyqpD8JcsD7oIJR5AYD9oQDAxlnYugbmzXIuIysj8u6cdl5z5SLYk4xz8H25h8ttfVbOc4q1FbSy0RVkvJ2geYVaGCytdkrxjr2zXcBXXmZGXygCOTaRtQ2w9TYJE36eMSJ3GVq4hPfsJGP735nWc5rkyQnW+bWlmAtL8y+bf/lk26Yckyvz7ROSPwm4tvQCdFMjzOw5VH1/rnFzzpXTpeex9EMavLgS/8+qBhZv2oN5hLqW0BqIoTEnq/5b4U6jL8CXmdO/7dXv/g0YHq4TGDEVyRcX9I5kJK0nDj43gJ/2jEDpwRB4+tgiwiHfdp7t40uFkcT7JVAfjzXKHc7Yeu2Jy6jbitAtR3xawhPVHDWadEZ+ApwoxSylBZLTc+VCjUaoEtR55HfFLNy/099NuC/AojirIDe7unzWctBuTLMrtncMmiAEsru0ZbeR4Dme88skKZASsS4CoEFdvs+rHq4LVJZ7QnbQrONtQRa8RG0I//T40htEomuzAEZELECDtQsnlWCHHtKT6vfc57l/A+UCoUuOIR3mMCBc0yz8zdl+X8wApwXlMb5WMEuPguCcH53nUHeIfgI00sNGoUpaHf8N4MYDnhJuFZ2VFvecb3Ckcb5QLNEMYp848kpZ6qAwGatn6L3ZIMv8in4ktb8vjo/lizIzrA5/WI9ZSoQAT54=';const _IH='a98836e8506e38b4e12a2b8e967d34fa0368d49c7c2ee9349bca70624d962670';let _src;

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
