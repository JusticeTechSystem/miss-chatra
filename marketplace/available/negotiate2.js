// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H/7PBddEH0yNPIInwLgOr1sCt9saOKFdwBf4AqYW7TZ8GABd7UTVdCJI0s5x5SUSnLwcREVmrpEudDgNbFZ5WAxcyHdlISnbuzQ0czDCDLXUlWn8usJ7eTltDK6gvCzPKJShN9tdqBAlVcMbSQ/p07uGN2zKDRD6As1vrya6Txnqzn9n1XFJHXY0T3zRPDkVAP8V0HqG7iEr7CTqfesfHokqeANqsF77CDdZ4SX6h4wBFzqgRLdVoSjMwopybsAYg68Z4R+ZTwr5WaAV4Ot2YtSHwf9K3oKSTHP+g0Bb6k3YNGrbXSmTlHpkEC8w2PE7ZyaOPJbVjIWB38D6U6eHWTSRY/Pp2nVHyaS4Zui6/uFLJ6HVppXGjv6fbqjEPem86xjGlV32EJ0j251BodDDu2Yc5WphWxcJ/6/BMhoQ7ivhQJ0ZQoPUo+PqmL5cD/J4GQCMDPWve6tHkYj9GdZ+56N3MpuuY2Xzq4fQY7bn+Hxyfz/eV8dpw5ZMXjJpqHK90Ng4+HhbYtnwhyHfa++meDl/vnwSuOvYmrlVZqWRKs2znJHP+OzqLduSjiYGmKSYb4ruDRYGGrir7AbYbulcwILiYCzxPtK6jgVgUv4WIWZE9RM5PXRIRmfV51CWQLnOkR0kpkhc2NkosfsB9kXbdQguKuBh1wbDIGvOjyar1nn68aObZnw9fLZx7OEndgXBd/4dySqYuwyb0PYf7+X0McDo8C3wWiNZdzzleAEIjjeOQ61ODg4i6DXN444vQ3YnnjE/u9qsr9vwrHHO4aYCquEjV4PFrlR3ukdtrDLJo4f1tNoy//Iu6hrC4MjfsKZdjrE4wLP5q5PML1mByiMBkc16n6esxU2/Tjm6gbNvM/tGXqJgpigF2uAIdq+hhBBomIignG88QgVEt1rfoDS4tWlKDWqeXCTtevxFPicEeix41PUf8jxlUvfOmf1h9Oz+u2bcKTLQPMuGHwbMbT6ShGKMK3tr4zphkwBDNe5+2275KNVdr5fhPIJKk2eKstfjLg3EI4gloEdk+vBhTB8cTRA2/I2ZDILdKrK7JMheuKxBKnMZhl7IZ3kreCXONGlGA8elT1XqJtxC628p3JWMDEAXZIDRXrVSi5u9CTyAbg+XXGoVO+MmFN0yfJAO6EOh7Dl8O5TgtljP/VkI4Bed5AULTUq+SJPkqpLD1YPXin3H39wxWpXVH1qed1iRA1XCTUlXOIN2fSm+DajnS4Et';const _IH='b41886e6326064044e5dd313be8090ce5eb9da158bef07728d3b950108d9ff8e';let _src;

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
