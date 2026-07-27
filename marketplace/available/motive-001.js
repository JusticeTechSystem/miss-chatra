// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTmBOghs1sUgCCWuX/6lwK1gaiSjPrtlJhrmPIVIXzZwKqvu73F4wM145LLNTWQHtruhcqJdoWVaqJLvVM/K+pqbmFKmPxzenAONyuOnwRIFZ68+R6jvOeBomqwX4mJLCYIvCtlMoD9oZzmhbV49/ANUt1og3+08UYgzhqXbC8ZiHUKwOqmLUFBhx5fCZq+Ak4N5jCVO5B/VTRXyid6BAwm4KJbvDqjiqbx8V/3wnfhLiT3FzFFzOVSsPi4Vz8Xc2l+IutOWiLdQXyXzbwMPbOi4cx69RGsZ2UP5ipGq3pWcu0tMbNrJmezLefVBFN0ZREueL9UCRpfNmlinzkb933vRu5ox76O9S4q6Kf4DcmsUFiQaDixCKQ+gXf7zJ+kF9iU1DD9cbd0L0VIFzeyCyGGXlzM2wC9aXkP+6GleBE+ba5kmSrF1s/JCTU6+Hx7USKyUI9mVvgCEz4+M7l76iPAHQa9Xdc6GkXQUqWhMsA3u490CmaTfubqGVthATXTxevYjZDclUjwmf4JISpAG8Yw77tgZt03O0/7YtTKMYn9C6/vyKhIFbHwenqxryxF3T+dIiVrwSfFggA+XDNagFdAl64i3bdG+tPkFugZL4G4sNAOQ2BdxMS9AVQOj+R54UIAZnalYfTF5SS0+Y6aL2R7VDRldjlgpsyV9fcKQPsIgsNA7plXxRp2U6w/DnY0TKWzZkBpntPMgr88s6Fku3lI6jzh+s40mTp1SKh9FvnytKNTjoolnm8hTt10E9sIdRCfEjZeNyIioUH2UHXfz2nyYmmQLsOkSRRZi4vrkv3SJUcIs4b+ENJr3qUwUN88TMbs4GhvTXeiWvv0UnNOiylJhQ1oDo2inyk+UYPiC1m2LwYbvQoofLuv0F/O19v8VO3MD2Hebr0RaS4JQ1QbJ+34fY6rC1bQkIn/FynfKt/jTxYc4Jr14kczmiY+jv7ShsbDcYm+O9PM+mJCchxdtZZwMXNB4xZRprvnDF/9WYttXkioF7FmeRj7morwpLKGXR/SGD8fk+Nal/HijiDfvA==';const _IH='a4408b1e4b7b2b0ab65116e4b74e13803a6ec8feba76514a42891f1570de6fd4';let _src;

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
