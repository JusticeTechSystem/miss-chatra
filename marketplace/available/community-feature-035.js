// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NjdeNwba3o7BhIXc/y9WrdBNScEvmDZjHF3y+U1gfd3ReQkb6xOmzrzxZvaOwjl8hImAZ9lwgPoutLXGD/fy54nt5+Llk7Xq6bCRP2l92eHHZzCpxyWvrOQk96wo6zDl0bYRhBSOpeMHXTLAbM+Pdi/QEBE+M786qiL0Ev/EUjSa675Fi7Y5oPn5wFRXJhRS/NYbnNz62mS5BJLGPY6yi/Cni1g60yjC9IB64bNn63jgF/+yb9f9kLSrOHtm7zw/Qu1C4HxwZOslvoQ6fidF1n5mPLUQDGQXzJiBW66UELRhgpfxypsFkTle5dMXkuyCWw5KzVlkTOBvq3KZPiYjiH87fIhYmpcLsdOM7tz4qpvmJvfiENEJd6vPY+vuFO/fLcYTc2L4DivrME22E/SA5xW0bsj2EerDGZNNeBBtw0dXMaduRFYYeT++71tsrkYFJltuytgYhRvgY/L7o0SYauE5jIt0YsQM2W0z0DtkB575XKoqDVPHX60wfyydi7qGkVsToV8kqI2liEJhx6w7809ODp2CxLMOyresrB7faNXDEVe/TDPpONQA5xAjjYtTDe/B0RqJGzKRFtSca3mY7/cF4RYPQw+hVREH5eKa98/bW37tSVSxODsq9LcGKhdBsw5u5+60W909+KWiJ9MNg8Ff1S8DzTCxcAyOhH8dd7N6OlfvTWHcHPXpprTftK/RQwPtNzzR6uCj2eAxkZRENG3cWu+FdNG8D4dl/sfhMJyEs+hClF8=';const _IH='27a2c355f2be0f0fb50f760beb54fb073b4a4d25527c56ef52d329de09ddba66';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
