// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzcq+Af+GnMZptdGBAaAhy5Mjn397ldRBKBHNcHFV0GZn7qXxoj1sxAyvAFEM1I1deOnTVVhCEjc0twPwLXcxJ7KnJq9hKy//m4BIvFNjnZGA/R/gXxqkkA//QbuwFXmYHas40xPCIoWzRGds1Xh5/IcwOwWpwikBQVwUKMa4FrVVcg/OAQI0c0+9mG4fMAsDyLpQH51YRv0yGY8SvaKfWxt4WKrgCznCTdMOOO2jJ5SnfO0eRYKGi+Lz8bvk+DuwU3GWMcPpGSN1L6sqmjbwPJcEt7vbQNAqOlGj84/VQLqBuH6RfBBgb/nxye3ChdnfLYKcdiGhJY/yDfvos1Xviuz7wsfQsvC6iHKITKwG60nklWSLZheXg0Z3GYCzufnRsnEwpKsAid9QDji0zVm6ymYd22EKZgyxiLS6xBz3DL6o3F/lCufu8gI+Imfshm772P3cnghzqJ1iHFyzhwW9qNNOtDdIbzB2rW5nyHEw++xv7oeVM+bRrjhThyaAE4CM06ynp0IkcNoeNfIB3iJTJgIusjd3MlRY8FdwdqJteQLS1IGKeWOUJJa41B4BUH9KJw+wSKf3kbDzL0PdPdPV+Kxp/MJKIflHUyAeSnxehF07iBCTM8f+k5LCy4vMLcxvyLZw7vhfo9Bi4I3LigfQ53ACebVciWzJvyqtsS618UH8zv4po5PSn9uMP6ZsvIA2yeLo/Ge871TgBQb7mW6qV02qDaBN0O46IPWdjn7guQNK+/D69oA3MXvFdlrN7lIVjZaof6FyuI9nOAXMFRa3NdUS+PAo1fpIzpF/RpIlg0XoXS9/rWryBHgs6WD7o9hrP7GJwN+0SQ3mh5xYWm4PxKnP9Zx/YS3WKt/N3NPGXkIK+Al+wZA9yHUCdBOTdebNROGr5GWQXHAyltLbuiwJwQoKzB0zF6RgFWA9vCCrF7BUqwly32Bnpb1EbVodo0DOSiEBoYEZ84XFClZoRSoJ10j5eb8PrJMPnWA/O22RCwbv3eEpBqD/+FNGvl3QJbKhwefbBHWHCoeB/uNjhUaIZRNFg==';const _IH='8ca6df88a68080de764d70186548491e88f8a5024c835694bc0d9811ee65b32e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
