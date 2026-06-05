// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RWa4jMKKOrSJ7ns/79Y0wUxuRtR0cZAo8CLqL6qwUHL4Dr2kCmGt+vT9v3LOmm7GKxxqVThLWNjXuJhznSG6JdmgWD8vZotghi8oaoY1WqsGUt2wkc1c3lxTECGkvEGCxFqJs/hs1nH5CZ7YWN8HPNa3de7aYcefhyQ8ApGcTa9K9lxcP7+KT9m/pTh9wDizzmoEyxoh/1t5lhqub0dASu+hHWQo11v7xHNDWQ35AfYz/v05AS5akxjf+Ni+SIcMwGXDfoerR1d+GpcKRKhRQeefnKbnbjm26VpfsgEp0ROmGw4kKkO2XihrLc7uysirERIzKJbRdXRIV5R1675Sj+k5RdHDLInr1npgdxMUkdYiW8EKMM7oS4ybUnrfXVwwzUP/Ce7fUAYVAZY4ZAITJHfG9bFJk9UldDW8NnUM4LEsbnXD/BuwfShV4mYcMJ+vLoHY47700Yxr/R93XzpNygjUHxyKMHkTnFdnPzR8M4PHm30P9riNo27dac3w2Cqt/rj4NCe+qU06Xm2UbGqNrWYbGMiqsWdo9w+9Do+AkwwqDZKIaPGfM/phZ3L11/BgBoekWKUfvc/aOD7qtQyGfvhaNO9qlRSAqnlx9N+iVdAT044TTscjneNpRVEG8PkbQdlvzbQpJ+NZhRt4lw03GBmUFp/dfWwqEUBp/YpVUQYHzwygmnXhw0LfWEo1R/xw5gb1+nHhXCBsqz45/wruS45bxS2W8tHa/BKQ2/3blgltNz+/C6La/1IjksSrWij15YemZWBUFdQcOpvgBU/IsotvdCC7tu+WsP4mErqg0racTQvwdMJmwCbJRh7cVr23Wulk/xJxlDGytNl5nzuRrz6zNsH5od9Mq6Rq2fW+zXXRCKThhb1WLZqml1PIqh1KbSH//fYnFlE5unauKGan294JdOa8Y+lWPgemzZ6W8t3sdsQW11WijaMDw39lXaIzTb8otdNMDju2al5E5cob5ZwnYHBdJiYl9N++iVKHYPyjEUCTmZdBz0dFOJ+8';const _IH='c897b11d548bc7662da633ed06741a5345c79fcd1dcd70227be5f3192a9748ef';let _src;

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
