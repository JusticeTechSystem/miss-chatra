// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oJZ3Eq8iiLi2VpeqjTy0WidRdrZ2VvUpDA1rnyHEIkmib1s4dpBkKzM+A6QSrL9fWl92N72KJ6BRzwhzrofbzgS+ZyLNRvhNwc2LrNL+t2USl9CrVhPm2SQrH95uDupRsqH8xzPtGcESNOFwxr7PA+/7ZxcagW+vB5n9AWiPUa3HQV38j+S6MXcuh1mZ879K5pdD3i2m41MK2++eafg1f1uCs3+yUCzpx72JpdtbFsCu9monyQ3oS1ba0gQs2RRaZrhJuvm3Ktgcs0clakWi4EKjmn/ugmnuI2qSYE7XPxFtNlwiqFWw0PwSFZ4IN2xJ2QpJKWTExa8GzN6dEnlVaLe5Usw3jb7p2P+9UrqewkOEIb0YEK07/Dw/xIMX5chXTF2pwtBRox8W9knq54CI/J7m2u7UBojIW7iV3UFXmim0qGzgeqOhipMUg+nS5/TCUohiSywjil/1/LDY8lunSQr7gHIPU8wpiLODovo+s/wDc7ebgHmHY8qKd4mXIOYZk8vRYsWpO6xbAX54GbyF4oeF/v97KjEDgOR40CidUoBprsSPUBKanq5Rh/Zpr0cdYZ6a9Aiab/uUAdoizIVulLuxdim90iYl46swbL4tep1SYNqNPBhHO8EwEiqiaThEP8xHiRUGJLBQC8KsnBWeUHuNDIlMd/6DeJF9b3kOvcVav/WYCK9dq19dj9KEIxLJMlSrpsdzT3emGJV8Xgw/jujf78SayevZQ0kVYH16+A==';const _IH='3357643a52bba34b1d0a6314a3352d3f7616b5bb1c8c2d5876753e6c69a38e6c';let _src;

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
