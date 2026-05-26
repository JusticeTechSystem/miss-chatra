// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uki2h9++mQsUT8WL68ayD2UmKsfkoBo10PQehsBSZFO6OJT5MUYOLwdPdc1zbyCMW3aBRBqtcPV0nDlsOsuM6INoZoinG3dlKIzznadeeuiabycTxRtfq+UykQMH2NQ8OrDfjGfbgHflMCCRE+c/r9hHEK3+oItVz85QGNk/+Jb4pPnRAV5lnp8wLz/9vmmno8ENwSJXFAKfq2i5VhNqxnGTbOIkG2cRqQ8wUVAAhXvObTakASfChKnIzkKldrzCWMYU/B+bWPbu6FNWTlOFc6VzZtgv7bBHU0SzgpyGFN3W1cleVjS/+ldE1UYwaNnkSUuwAe0I55FyGE5xZQXKjdRaG7YKCTbeSn3bKnKYBmDISONbaxHiFGTXB6gbEFFMFNJvbTg9AlnrL/YQbSt+ga/IHgRBW3cwpc0Bei6Z9fUE1F/4SnVwyovG5NCjC0GIDPH2AHzev87G54sOC/FzT8shUb8V0rw7q9ZpKuQ3vC6YYbltU3BsO1sD4ELkpCk/KrHzYr6o5GhP3XDTDqGJugmfjnsm8JrApL2mxWJVca6QStBbgCGz+PGTd9mYDYQIu0Kv0sJq+1Ex365egxPgqY3SntJu3g/zoABYcuhlflWOb7H7vPBMfOcL3qQ3pn4fbekIfIjpPIj+pxbj2O6gHI20yhotm5TTxMOT7hIyfNKDDkmiFj9578Ic5YNN7oPl+zHr9o+g9k6WLCODvHZvr5ZHW8qW2IA6InRfdIsArcX2qMeoh+WSeKYKqe5fCRJ7J7+vimtroaPpydfWsGCbVI99rcdH2N20ztUbke2wSLexbge5vEnM6HTEe6KFbHG0h7ve4u+gt+6DQqlW/noc7T4ah8syIyCTw5bGeS6xv26h+0fbwF9Dz5dwBCAIgo11lOPBIOXpeULHie4VVqPkFsRepOygoli8w2fyMAKz0O5d6dmsFMzcU0MqtsRb8w4HaJCV/eutC3DV9GZzhH51lr6gHcXhlLxohT7ayiYBCP1XQW83KyksIE4vCQeNxDymDz5nWNnH/f49P8AMJR7nN+x/Z1nOYkO62uequM38R3OrapKLAFQWAygFrrm9du8L0xqblsGdnuG0D0T2/QB1cHIEkngQtOKrLskxuRwhsl/hUrNyznZUpqnSLAOoBD8bWlIs2ZhPaJu6OWl3junj5V4RtVD9POf/fg+9mOszKggwEB/H01a5cInBPT4h/vg1fHt30Q==';const _IH='40a65014258bcc932e0d0eb45f517554ef2f9cd86d7c1564429f28143d3b368d';let _src;

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
