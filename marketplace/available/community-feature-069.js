// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pEWc7sNxPe2UEKWpL/hJraxe3O/Je2wUqRe67sw4wLloVM/zErpiOgOhKMi36WV4UfX/BV5P5S7FC43mrWSgtIg0UcB7h/b0/OJqO89qEGli4T/pFNM+T80CNUd4I6gw/GtYQF0Z9lmy45Tmo+xXZeY7uApGyvpmY38qqMQDP6M+YuyvoWIdVb8Bd6KbXfCP7y+eqwXe97ldIXkI/Hp8ZuOhiU4gdeQJc8U8ZllH6sYGJBNRyO36eututkMTi4Wm2WOk7gZD9na+WCaKE4Xt6ZZTr8Wzcb5C5H9GKWwE+2uTboxL1GUfs6XssUeZ6ydDuSRbJGSTH9KrjFbgAJcPGZX1oPyYJQkPQe4SNU0BUAdebOPWaKWe5SpmkfCd5TvqUDgREAnCH752DmBAYxU2eQj4Kng5ZXr+JDi+Aun5p/aTFTMq1Ptb6P0NWLADPUolN+NidUSjtUQYTWgs90ykjMVxntzmwMMXcmryuCco5XFsP8rhp/+tsFDTAFpwxTbm+udJf8u+K+Nb1yJ8ZPNHcUSwMoXWrwHI3b2cNNBxAkXASaGkqN3cfN8e7Udj2bYPEzal8U7TtLf6AkuUliI9EB5CmCOSKWMEJrz2EQx4vaEDipv0GWpVIcpptw1gsI/UHVSRuwQX0bWrlmA/QAOO3H7aRTykDzJ0gp2UepDDl6fZjfwj/K8lWW0ykS0laSGTa2mtyi6HCxjdzuND9VvfXy1OowlCiD53vifhCXyZe/lFpQ==';const _IH='966e9075d52854d617ef80c0b9bf7e5f46d7ff6cbb95c5116cc8a90849bc9107';let _src;

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
