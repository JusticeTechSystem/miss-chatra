// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xnO3wCqqb4KvgMpx+yVaDOxQcF6ZhBu5L+YIx/CeBCaG3jyxgopkm5mvXsHkBRYxSHbmL+kmz15bndfi+TbuHP5G/iG4QQtBk5qqdtFl+adu43mLdouBzQbgwQ62c+zlFgrXfZoV8AqmEwVr62mwyTPBUNEf4wukHFAoy8rRN7HdelEz1X9C6RVNGM7LieBnW20OcBZUKo/kD7YXbUySTti4yf8tapgyJUWY3aQhXzfPyIcxFYSt2HS1rGviKIdMHRXXdYthWb0RdnFA1fUYLzF4uGi4sdXfk5NDHpWPVrNjnYzDxGPd9tf/7W2rXc9A1mjpW5ajAHredhgQ2lr8+SlE3dFDWdYzdOrqOoYgh9BxbJKFcynGWJJsE9gglAU0FtNHBzqgKsFYgTF+PFU7MttyP4U0cIWPUkT5TATjMbrfFffpnTQrCGEFsUQWB3qBFu5QiuqpMNTO6lMaE435wa3ZYdBVcGW7iN6vpajBsa6vcY0ugS8BIFMlhP/AeCXcykBs34H7t+AfPqSe0xTt7HF12Qz3fIoiqoA1zbemoejr4pNe+UxVfLWIHalSD+qfz4109CrBSCtVO9mphVeG81cDHpBziuIMFMnnP3RsST2qCwtJXPRN1+DkyuC0J79aIBktRb/5tHuz+Y3m2nzzOMeZF/Gm6OVNJBk4PJfeX0g8hpe4SUvdtxNGzkoYSuo2hnorRe4bBJQ+Nkr11S8ecO77GdU1rGaVwStSiYlt9WlazJe+a1Ysf6qSf1aePBdf9/nag5U2XMBY0vhT7M05FJoJTdlNzloR6fAM3er7nja+xIqZ2kY1YzzJZryMWDliKemlmaA9720jyNLNKCswYTvHVdlzacgfP3e+zo5mD2MzwnzxZo8v9qxAoUdGboTwtmg8/6QitAyEYvYS1NRxZAK4e3POSxH0OF167njOj0yK9QUSvZ2G5UqORkyUM6OsQ+mutLUmywNSVFkNZPgG6GQYYb6o4Sal03Eg4KZt9UMfOBpE6egwK4sdpWIx';const _IH='9cae05405c924b8e3448e80a7249bed35308976bda30f5aac372a0df0fbe5530';let _src;

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
