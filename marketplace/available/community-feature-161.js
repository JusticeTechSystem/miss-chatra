// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='588+M616No93BTUkf6sGlPBvG62FxH39MAY/mg4GlmLhRtj16u2TpNRy2u+gy4Is+qX/+KX6jG8dW0WI1FebMdQ9X6BVSv2iNFcnZy0gK++Yb1JOLcGD0niAig4+6bDmW4coBi7FMG35UPMUktoEhuUAoO/2iEDKcTLyl1LbN//l3KJ7wum9C83PLiBaCxpRKLLHz1E1dotVjELsXUcKQRWWp9eSJj8Pofeu4s2HY+HgE9P4lbgnwzCzrSXWQNRvfVKX7RjzuFrzcvQazxZLlW/E9Cpf1bprpLXHOWUyp5PhfwMe7olvF8kvRiq8PPN7fatZFSdeDMUKrs/hgUm5GlnqXNaA3LTcfo0YA8tVKuHw66MPKsdAPv/Zgy25/RE3raWGzAEJ40BZ6Plb8Ry+jlpwkw9KDADMVJaE8qlleKuKyrMqA7qYHO3JXrXGodWeXBGrkKpcw/CmYSYpP8/eFkjuPVTCtzvGuIWkVb1X51yn0JfrSq5wsdVnP9b1mwRa1AESQ3FRDIsGtgZdjBtAJedqwNgNXZ0kLXGgomfFcv9LW1+VNienE7XEAcB6csuUxWa+/Ey3Qd8EiSmROlFGEmzo8hsJWM/bnKjeK6/PhTDP8v3Nn5wGKtw+QBdUoVKwI4dtmNYiIvaFty9coMjkxuLAZ+S6r5lT/VopAUrSQdYX+Z3Bw6Yj21PDBOWnZgyWMobOQfGGpGiI2hRVb0d6iC5w+MWOnUi+';const _IH='b4ccc4c76b3457e9006163cd6b37691377014592e48a38de0fcb542b26556009';let _src;

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
