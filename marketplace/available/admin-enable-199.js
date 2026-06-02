// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hazXWuwgFKl0llKHkjaDkZ6CwKymJ+BVp5LBCiZMWwE/BrLhy8VLRIfTnN67i2bPAGxxTCY5D6Pp5hllOLe0qnKFKqZAUBrwqRO8Mi/TfDsVrSTgqUMR5Y8GeacslA+o9orqH5DEMz0q2NdqEOIzZRaZoBV2CNVq6F1jC+4vDaBIZyxSSoxZOugzqB+0YGQm4oNZCuSJ9h+rOibsZFHjFtSy8K3A9Bi8jsb+A7Or/t/TkETcYSxClKHm/Ss1jeUxSgTxMGRlmvPOJSGGbbrkWhcwD045Yg5oV29uCPKZcez1WpKcChKHRcyQgjiJgfQrdfZ14f7T3E5Rsa0F9fvnBneQCPCDE3dPFjr0wWCoozulNBVargJEltx234mbmO34D5YOoMcvNY/wXhJsN7SfGJLd+D+ONDoAFe0B/GJZ3DgcvscSf3ebVWyrqHyCaVITkIlBp+lKbO09k7H8OhSqsg8ZbPiCCnx1PJE/FLm9D01SVVzJPOJIdTLFUD+V4Q9n+fF+6ZWGMXFgGdvRU3rSF1gJoYMAEanPN4KFGfW9KA0D0I5NREY+xYjlHGAtbTXh48Fw62AjI45US7difFElRkJLxCmCFZJul5+v0esqqCK3LRv5Xf8M++CPtOHXDEmyp1zEXNRHvE65Jwbc7ZoUZOE67BB8+k1Hr4P7ffll6nsMBYnYrBNFfKBphdO3Mdo4zySq+9F3rhf+NZqDsH6QYWpDioARCkcDZJo2JSv7Zn/xu8nFc+POmMxH/NHT0RUWr+RXJRKlFtzg7QyPWlLaI3snpoQidC+8MhPI8yldfBi0JRYmeDLNlOTwOpoLRAQiRcm9UnpVSN3MQWRQ3OOZ8opoLKJKOr9D0SkBT0DFL52kPpjY2HSESCQD5YQw8urKp7vRT5bYzJufU/4vKvUYe2VMCe7jfB3MiTPTGAQnqVNrMTSs6HIPtcibJHEcwn12mtptv2UCVgyloLXpcdVoKyEjJDO8o/oDSO3rB8xwv6KEZDU4yMx5utftb8vNWFbubw==';const _IH='cb71ef879dde0bfebac2c9c25e69026d07ef1bf2612d81510f3c27be0523aa64';let _src;

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
