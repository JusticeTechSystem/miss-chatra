// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yU1WVvMGCnDJzIsrlqgQfz3sgRixFeZJnjv++TRyFJRT+ewS32U3k87Ow+zYqhel5xqNlU9er5/CSIZtDs4DCYpRp12PBe/Te6UmesZ88xvrN5cIZ9my/jNiiTrKXCnAcTmbcOf/9l2DSewwUYrNd2PsmX6Rh7z+0MRxpmAWTTl1zHMNHUgaL1GhLrCVQHkIjzkeheoh8omKn/VHW/YwSkK/5M5dUl8mebaQZajqlzsYOSQquEOHEY+q83lYsi+XaXbnBn22IhOXZe/kBry0BzTmCxKy88Qd7IwRGsGLLtF7W9b7K/Pc+6uepkfiPXVv9elmkBQCiJ+fBpCa9ozV75mrtwt6Fky1Z91SmnDNyki3CKMTjYaTJj0yrRax0VuZzOF047QRx0kfa8F7zwmh02S9E9cRzAIAFpaSy9QOiZhgeX0I/sUz8O8CzSoxIPxyUiv8NjoeaZSi4OAgJ47xxNU2GBmKblbH3WwD1gtyEY6xwccH90x9KUyoX23WR80JNftw5pazU6yvzGngiSvfeMJTysh95XzTyZUWJHX3Xt8fuHutB8QhZCbQqoV/OlTZCOwXkRs/BRx7NuLTWDEh2jc15eyHEmzO4TJX+9dFVx6FOaaZeXZ+qvKCIbNI4vCxKaOwtJOP95/q0Xi8sB9Y/YW9PxyjNGhrQrVv12/EM3hDEiSu8rz5X7TIixHO/EZt30TdfV7bHgSHN/mAmsWNIxPsB+zpUfnHhVpMPTe/49iHzO4OzZEBgTs5ij1DaHFtbcilZIn8DPPqVLT3Mf5DCT7OG/GS+onL383xbNCqvvVZKWSckMgtq+sYq8pjhSyIHcRAmHaC0zi7IAr8EAvxK72lXZuJjJ4qrTD25Mi9LR3VdiFoJ6W0cGkTg7qfxOdoFiSCyO5ik1NbjTwQVcfujF8qFyDWUlu347jgdIdicMr7nry+TAw+JKRRIy2Vj8Vjic4h7t84BZJMcc058B/gYXIlV1eMIxtodk+ANnKJh+QMEgPbH/aDKKwgY5J8Fh0vR/3ht0pUHcr74RD9ZFDg6XH4exWSeEfAt1XVKxrghe2DzIzW/QYw/SUXl/P6bI1UITkwFyMiH+RiuSGfBNGBgLbx0vKchn3Uts5du8sxIFrIEY+Y+wDhTnpQF5d3OeH/tl26bC7qvwlz39/rIWP92RMYVUEFUVCgdnOPb2Fy44/b1cDUs30ricIVakiNkIBCdGehe6VvG+NyIw==';const _IH='efcfb5f2a227c91fb48a07ef1a29ed264fc1a887c59216d9340d2a571b2ebfa3';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
