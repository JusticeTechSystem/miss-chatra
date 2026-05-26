// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p1DThwoPHPiG6mbCQsRaL7ZRXJYN2onw6YsrtsEggJc9XyOv1uWR9UxC01xDw/WjXO1ifGHF40ATmcIlMQApdiUj6b713w4ROHwahMf/8tYijdpcqOeC81WteCyhojPW0u3YT6bI6g1E266cr4rODS+Fmlx1MtP7mRf7iBfORbC5YuPkvsNo52VBB8w02+KdMa2Fby3wh9SPpZeSrdx6z/5UeB72/unvw6GSEkN5vzKTSW5PtBi7n29brfyUPGVH6pYETpHaVNBPgblCGySMsIYwrJhyQjAva/fV7SYpVXxY5T0KgL49rt9EbnaiRJxWaclWqyOXNut0BPQ+0Tc5vaNeeYeDsrT+ETfo09UwAvqEHULJri8E3o3zKN0pf0iL9km7e5gD+8mv6LnxNIl+J5AX0SEoUS6FFCgvMi0mGXutTzC9go2U9qBHa9w+aA3mc3TVkk8cpuZEFcCnALatBsc6p6+F7G0YMqX57R5T2+u0R5MNlIg8CUVDeYPQ5B3ObFN/geP1HOliAts+mwCSnn0Ea+AsUbebcFl8qNctnf3JGZBV0HyQDa/QLYEJOUiMOuWSBw/YHXX8sFRbK6cJ3Hux5SSUIsILZiAcCqXcMkDqZ8Rc4RnEI1Vc27hUdeidXcT6QNMv8BwaaWZ6mkGJpWrum2pRA5yxiUWtXJrU6dscNyZRo79eC2pcdmmtjCQFNZ9s3QwcSoMpG6ny8DwlOCr0uehV46UPWtjr5yHxlRi1EQ==';const _IH='8efe0fde17f91bf117fa6ddc2749eb2edb7748aea2e433fd2873dd77f17cf947';let _src;

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
