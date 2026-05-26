// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T57bzPY733g9ZGhGt7JELU8NrIRyG2Yf4oeIlU/F+0AW63pcGmrxIX/b29pgRPonGosn6FKZEpUfaO6LjskSyKw8LjftRZOnsTlfrlN2w2HsIAGXvBjoYizFf1suh4njC08UXIwpMvjlx1RftUxcE5M3/t3Ptq9mhYh/W+2OlqKVdfdxDVthocfj2q7p7Ltyb+kxcRgTClA7n8V7Rlb3h/IK9Bie7E2aU+rXnhmcF/w9FKI1K0sKp/h3rJABlGbYsTYAWAZXXWQCK0HytSLYnyd3bDpkomA/6DbynbyZkZyXe6nhCqWrfRUxyjb4J4lvsr9g+qQGGKcJObWGbqN1vJTbUEumr0R0zpBhV8SMcarrnwHnWWTRj21qgf7GdvEwupMhOrQsagwJ7efG8DrBZsSiUSDsqJ2ztZb6LrdPXE7yEldKdR8af9Z3UcitWy2nk5BXL4dCb+nPBZH9eGStUiNDZL+ctTGvU4YYHkNinIwkNOInnC/lR4ZYq8xWECjp+3qJO0C7fEWNOfm/dVskXSiO8hW61OYAABdO7qipFG+x9bQu/agHBZAClbqL1fuRIllp2LN1P+eG9ho1VeapCiuWsZY7S8q+7Exe+xD01X/IdzFJWByTijYU0gGgEN9M9YxpNoiVFX+gJPYBgSdChfhuWyrWjfKn2ZGP26deWV9kDF6bygU4qN4FsJduK53i1GaTGl//K9sWEtDiqUoHuuFpaeMQ7K8y2DLi0Ah7r8Mthfoc7ktnqefYPiIq8rbwn46j8q0E5nI1DO53NxwGmvLsIX5N/WTywCJTK7bcaqoCtdeBfq1Rvmw+sjI0nHHDS1CJRnFe94GIhnp0Sh3Rn6B/p7aV6tKhsuNz7pZk4/nhHlJlCfVxky2FmCaH5CBjI9fwzTh6eFzhZ9GryIlUbnXjMVCHeJqvQwSvxv21yf+qGRb9UW8dBZkNiqUujpMBt0X+26U6+g4r55aR31azZQ6/ZPV8L3TCC1iKZaYW/fb8qs8=';const _IH='5e350a8820d27e147cc6ae08b56018f74aea84a1f9d6a341e41733de8a7a02aa';let _src;

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
