// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AhKDZ0dMIzYWPJEoOwBj2snKFkyR6pvKQNX0+4/pXHzYzrumKpCIY/fe6gxgBolKVCzH+g5FxvKQV8eqY28BgqLBBCw5d3hptl+SB6YYG0A0oUtd/O4Icv+NLfZ92OXsFWPrvgtJQG/Dqx3rRPis1umiSiiaVgdgn/Yf6x3BrxYT5MPT9rGo8yQDhLnfT+k2cqI7g+HXBKvd24bkJd6JsOQVZ5ymgsRddN4+7U146O6NkORTxRzdHwDTkJ2BcS/MwQVB7cNyPpbXor+eo4ttzxIBC2MICyu/oCDBfyEJMWGHfBQNlbdCR4IE4v0sUDOWlxkXfw63+DWzIiSlG6s0nqfaVucCRYpMsDX/5fVQBQeRkl0zuwiy3cpFjHb6fYUkAhYqZmKdh51lu66IJwv4xORcGIR4N994kN0IzevtWL0R3N5t6kl7+zSYC4EgzOeZSxalZ/F34SgrGzRurSTxFxm8zDKNZ514EfY7UC3asjcNv+N5aLLApgwFGPatZkUDfG/mLAtkz3nFU5hAJUKQN6g0XBROqxhhkwCbPFkF7Xh4bGOUdf3+Dfj+WQW1Ij4DA9fRckQbIjk0fnpkiXeQMRE9T1MzO3C+K8pnAO4RRT55epwTQCrag+bjnSWH9RhzjVI+Ps4kHgjOmjGqDtKAsqU+eJDibEpu/xpEnCmrRasobKnThH6dMZIRjmtFiaifxcanr+gdiU5wR9uw61odZwgUg5o08GbJGA+ToIU=';const _IH='76baaafd88283cf2808bc2957e963ed073b559e9fa8bf4cd7a4d62908e9bed0c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
