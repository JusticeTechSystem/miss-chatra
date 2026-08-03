// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQxFGcXBe+IoFgL1H8V3U6QCEZXos7hDHHOOsVRe+m2lCY/5GjM4SSxhu4b/iFChMQgzx8kdecseXoVQWt6/Md3au0nh7lAQAX4DG0CZrVOQyusLVCL99Ikp9uUZSuKN5S1Y2YTZD/w2xC+uRpC64tGGrKp61JC7cW6FvlXjIGNrDjPm9U4eRQpfX2k0EP3zWeULIMvtMTq6rzbbhHPVXb646hQCak/EhcGQBt7v4iBq9z9oJwEzc7ji6PvKXfF6wNV8se+hCHFPRp69HQKu8fEy7rls1q5DIyHUsn4Yvra0b2fl0XWn+z8DxDipRK3ZXotd4Eh8YNLUMJrQfw2MlxazsJ6/+EdegvmTsOOb8Ua1XvuXUgAQu9SkraUPfafDUvtjlaDIi6QyC/HJP7JKMxTI3R+xZOnNNckA+JlqCpS2Xv4eZVeMfEdxIkAcUEyC1XTlWrN213t92e699MRqCTvYHLgKtnXp6S8O+vVt26bj7GXlKa5RG9yjZ0Y253qMwC4mi2SMj1sB154xhpKn2cMy3khGvs5SU3EUTd8lSNdwQPJkzY6zBeLPOSwcKb/7RtpPTLtZV1tQeF84615Ye4SM9VySyo2is6r0+m6JXoXG89OStuVxjrk1c2MgVqTTe6uxpXJG0TmiBqLXExZgc2IAIW6I9SJtDeC14amGKRU8IWb+OuK3M4MckXcG4t9+U8O3R0vseatq/QVsEKI4UIrb+D+K7DyHCQqcaz2s/n6BcfHiuMvisBQILw3ZZQTTy3q9o0jngcYtEmW0DS/+hyS4TlIcVNv1WD8hZNts61MqDj8wGDgQAZRfA/MJIvaCjh3CAZv2jen7y5vmOBjRBi/7M2d/tfUOrOHjLSFLZX2nNgbL8lRfz8TtRHnFDFOoq1xyrIezXL/e8EBlnx+RCzpbBPkjlG4Fmo+Pa8s6T3sUTO2waPPU0RrjBpQtMRK2UZg';const _IH='5984838c55f5c66067a411602f6bfdfc7705b4435c06692e41eaaef6df7f97bb';let _src;

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
