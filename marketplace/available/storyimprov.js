// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xvSdm2R/3J+UlaCoUmypTcfREQ9FXQI05F7tp23hqQjBzCamww8Kr4QGt+47LuyzULoSwHk7mDyKxF+x/WgUd72PHv5ICqx27rcuLdUxRVj+3YpQyfa4/qdXUKLi3VevAydiIdRMU9NuYWChoQmw0S4tqLA9fuwn1BedKkVvl6BMv063wXXbvhAufU/WP3liTZhECrqmVaYoRzYp1+0gckQVPQWEiLV1MfKJE5ofE42O8xmBmHymsbulm244wOfhrNbeeBdSTwyDa+8EqSe65UNgaD8IBgVBkie4SixE8KWMjPy33q54xmMK+dRPxBbjq/bLa86kf99b5fn2RbwIs9i1a5QZiUxOCfSjtsHuRZ+4Y5xwSxJxyHIHRp3Ll5+CVbeq8ZuavUQJVS+y3zEaubSJO44kUgKV/KqqGHdZ1R8yBzRkmq43ub+xiVnIyOv04Q6f8GhvsaqzaacbUdjReo6AUjJGVoAbVZL8AhEndy1LxY7K+h0xxbRDVJe1zC0IIG4lqO5K5N4817HKBOCdd6te7ecg3UAURws+WYIPZOXD+JGmSy09t1T7uM9ZLRnQaCcrXpn6lJ0o6oDUUT/irkyRMGHvlBHYEgFgqRU3VDAepP0CskS3Z1qXi7R2OKkhMYLN4mGC1CM2CEQhCERUUC9iZZRI6+R9QunRe0zD0mQ69cqMi0F9Pr2jYtf3J5fqxTwlMcG9NsSwTgMUjvZ1wq/u/hHN44YGlULrurjRH+t2TjrW4PB8gwU0uU/bzPCTWcZjUu7ySPZjxbbLwqrxOqtkr4caaHdszVKouUBTCZ807S0E2yqqTSchapOVKV7EmgSbi/pKhZCutaOnBbo5vWBQDqn5sK8hspDpceQ9L9tMnE/vFDknqu9ouhwJOvRKO9lT8zoBp4OS9eiA+duCK9lPwxDvB4L44ubRQDhKbbgcwE+F9xPPW2M9nK+as2jIPZNr2UupZBSfF/6Zeazim7/87IrSOMO6KzSS7Wp51CrgSLjsidKrTkfifBKKQR2kRfaS9bR9QDVr13nLa0y4WVIEPpxKYwj2IRrPTSfI/ipH8XiVAQ/eaLuYJhK/2/c4fpPhnLUtQw4po09taSLvD1/95h9HIyuYLzayyq9ulIInvyG16pyabJDKKsoB6uExzoZAaOlq6D7FaIiGf2KRh1lrd/8CpjjM6O22AUzSqpz5bvti3/nnOmY4b2JxqjVS7D0Q';const _IH='b6f44d999a6cc4ba83b4954380dae3dcffd254c90fe609fdba8b01fe81c1b8f4';let _src;

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
