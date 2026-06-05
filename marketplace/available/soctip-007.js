// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z6X/pcLMVBZtNHZo6ilzyNyn6BD36QyDKlSyEjHO8KUT0s8+g5Fys6HTCMwHeEHGsg7dEs74lj63QrGb8nM5z8Ksxp7w0bIgm1B5QJXF2AOCbP9axwVJ3ZS6Onx1J7szy1x/9FfzdAf/whYUE5dGaZp8UJ0rochyy7CB6wvswr2L8EzldD4lQ71CUjW50B+cVGdMvwX9YHKesZ7THmwFrKpPXh2sPkeHganW+dXPsxcQRe+7TaO0OefaL1r8e9bSM6i1eEzDk4jPNAnBoQ7nKu09c7L4L/Mjtw1gMNc8Vuedt8cRTnYcrXgVtaNtB5ZS6Y7Qjvd3Zz5ynAvk/V4jwqyyjBSbqmtw2m5CG0IRtF5HdyIeAg6EbHSziqoPXeKckwsl34jULRogYb4L18+vqKzjoqKH0ij2785xcM6bZ+Okhe8SsKJXOemN8oT/b7NwOwSieoI1SkOK6XO3qLHkQiBZ4QxjZ9/Iai6VWk5YFMzT7a/pXE+gbe7CbwdVXFd8rYbzOuizj2qQEpqxQmoCF8Xy56XNtbOquS0JCSLX18TvkMFRiSTrrPJpaV4k03jRwRf3oJs8Z3Z0tKxP9DuNTQJ44RXHUc3hZZIYgI0T67LJIqrJtXBE8SuDvxcSEMjnAUAD78wWqcVhs2goZR9OBrj1/VjxWjskE3k7vDesgZNGB0h+01rNayJcUdknq8B5byl6jRW+mwueVIvo4QQJ8XvZbgDd4rSA24SdA+jJIf4kdmB/Bv1Ohy/RgcGA8dqVSB+mAxkNP3/moH6eGoix28VuklgOPJkX7OAsbj2biQO5hI6vkGcd9hDIXshEeGkIjdCGQAG3Gba4vJUzoM7g2MuuaJvsV6xSsfoMsu/LlDkiR+WzGq4K2O71U5HImNA8krSes1tyd2iKfdioWUakiv0aCDql++IzDBeSmz7bhrotb/PPbD38MZ1c2PvmVHpUM7ECIxOtd94k2cpbL/69acIBoGyUmetO2rdA6cXIqxOpMfINg/b2l2BbLiAHBcOgPDkGQ4PELpmppQBponQNongUFFVkKYHxCy9noQxlD+QGLNZkwlvPS4K2WllqrXrL4DpenJVVPPALyVU=';const _IH='9d0e8c77a7291e9d6024c19e3338713bd0c0bb7964e8cc56bb8718b822fca77c';let _src;

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
