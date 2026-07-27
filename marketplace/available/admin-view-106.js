// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTNuvkYqc9oPTASYC9JeL6KSrr2mNQuWpyDTRp4htINIkcM7Xt2e7fp5oTqFjDg2U4VG0zwAYrV+Cap1wF6qxQQVXdcw3IfkjlqMffF+TljqVRyza6kaHL7Af8AF/HPiwvbmhvY3YkoZ16yJPU0i0StNefY+47X+iNkMj+ngiuFjRDbO601bDXxB7O1Jz5uM18AOQgzSxAWsNBt03xj0gnBhwi111/N82N8abPbCfTL3k/93v5iWCOoy3TnD+prV8tOXNlKVWxPCZseOTBj1KEgR2FfCz7seG0wX+1cQJWM7WPAkliOyjE/XQhEHXnMtL52vVvHnOsRLkJm4tXEP6Y5stRo6tiMJwRzLQzWp4r++IZNZwo05mYixqMZ3u9EQFdXDoSb/nN5QXCcsKQmZhitgY4JZCafFubEI/jaOIk0ghQ6NVd5t9E8z9xadeq8k1AR+xPrzeaYTirAdzq7FmC+8BTESp+yGMveKLBrRGS4guGlHUrSiXe9Mia9SXemo3EhUKXBcu8bpU7r9tCc82Lj8LJhvyMNWz/k1i/wBSNIGOFkL/IUURaVfGupAg/10A4Qj1Eey7H3XKK8WOvzX+2nGZZyt0n2T+I+/AwFIWAnEYhYaRsTEYKBxcusMly+kCknuA2YXrD3Ce9z9XZqEPlGLAY2gucFvP0tcO4oZttcyPHreBAd/Em778bBk7e0t18LCDj6oIt2gMnn0hrlAQQljp8O235DkwHW0oMiGJlHPThGIwOQBMYu+5ABw67RyNEWnv4kAP/7884qy75SH8XsJHSfdwG5deXUJCJ3jkizjGtHg7/aafYZHUog0r0B2oNM4t6bQTObr/24T+gCdOnR/QaDYYkPyPrSAKbog6OlKSLRlYoHtnZw8eRfHsJzs08sfa92kOWR/fBeNCXDDnZEAj76yOGwbVlRdQPb6yR60nvZtUfoMFOc4qvKOM8HrH6VZ2y002KLExbTUGaCqTGsq59bJcoGmiQafdsyDXlyulBWZA==';const _IH='78a06e0f44740f5d900b3608cb3a1217d1dcf21c9c079aac23fb899e44b13f6a';let _src;

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
