// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TNNK4NR/iizLWXz7U02EKSdZ888qMdl8w0WyIRgLGcLUcx/mToTgCB1vGN/4pKGieQGjqX48U16YIqfi9Pn7AcHxZjp3XEirXUpm+9MMDiXoTiDmoJMgCR1rdCnn2XsxfsY26KKLq/PzZcqnOm1Qmm2++9ISX/rRm5RYJrBYwqqhndjSIic2MMVrCjnwNcHrxFPaYcIwYHgggVsGLgZ/kJhwVZPecr47c0PFEhUKfznnByNr6bDRFe18MjuB5lXPiIseftJOkwYN4UNfW/rJOye9wCrFtrXewgVizJoYJy2rvRwWFDOuU8s5gtiN7vn5uIZfrTy32VXbHwndhpYG3QKy5ZotJFr9fDD+r8z5ITf56JobWvYmOt0KiUkBGnByErRpBJPOVJPDSCIWSEaG+0EnUgismZFbE5zU72DUBw7J2Lq6du0gkQfEYFBaEv7JUQ6MFNvQGeYikcHH1nXPhyrfHEUGWtxuMExCkPX8nxURDgnzW9B0XgtTnpHyGwCtFUfoMmV4QwH2LuWV8O5glBLlmpoaqCZ7jzOotsqcWlj7hIeVWRQt/cUAwTIpOVisN6Ji/OB8MiyLep1vg4qf4AIYc0x60hRbxFl1MGbwY46sP87T7FJJOR4FKW3W6ChODE/sJnGv2qMMlZ4ZXQiuTkbO6P0QydDtMGlQyh/5bH687wTM+sUMc57HPT4mxbdnFOCWsUiih1C7gP1+007eCR6PZHS7ZYaaMnubZKNnaSwq9vaXC1bkrjLxiabAJ7J5cg2syMPigxBh9kt5Q0M0LPF0OeIRZMWi3NZKKG1aWmyQiIWD1rF73i9kzi9DiKBHYRoJlamoXwCxxmu9CaDHLCSs42Ey9LR8VbH1GMejKsHjLQZibE8QQHu2ompVAGzBjmN1ehWvOxbDaqLqQ+ob3IgnCd19Sd+Oagy8jd4FFRC6c21VXkQLdaSHKLZGwhWHZryy9Iy94h+eZZIrY0J9ZLRDxWx1QxGBFu58jvz7YCqiGMM6+xs87WZxu1VWld0cHij8KNdM3ZANbYuyLhin5AkAvti4yjPeAex7tW12ay6/5KI1mZtlqYZHGGAfCfHVePuCSJ+WfN7VuapuL/2s/AcMlq3qT5fGv/YQemcquGNY+kIJceS10ni2HuKsg1CMuwNDIuPsNvhzSBGX+rJ1JAiM33K0cxEj0TrDpbg9YBsu2JKPTEfp5sPX+ajRwfCBKB4+e5o=';const _IH='d899ac66d9ed378c6c9209a83d139693368b9b7b8cb037233453d44f4291c99a';let _src;

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
