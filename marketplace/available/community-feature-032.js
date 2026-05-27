// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V5+y0vCFQeceJ7yqxVfoBe7Vq1lN43kIz1dEbPssZ5A9ho1BSwPy+N/EtQUXS4Fa0Pd0E8hKPU0smLSaAIgflS8eE7enoq8BykTgSiY7jNWb5odbi27wDnZfgq27OK2p2K7yCFa4NspbF8uPP7kJ6uqZSuSfuYt8Tfa+VV0JE7QbjEeXpjjvuqGA+KX1hieQK9cORfNOLNXrsSjmBVQTWIFfV0Gf6ahB2ZTF2Y5+UwQpKQ700sHw58AMOjZOEXmp04ED5aCqOdkT8sxPhtVQdpFJAI8++EA6sBCcq65uxFzYO6zW9jGcv9QSRgNQjthTcxgmIpwFb4d9iM4JY/YvIkTweAee5rzRt6CKWT4xQfCaQ9dFz4/P5tC5nGmuP4CCdq/wiKykhVMV3dp2QynY0RZ/YUc+ma/cpkYdd0K41h3zqvtPuZ/ZPj5aAeJQe2J+ZEsXbu1P0LDUnh4sDvAVeOXh/MxYq59AcHISsv8I4IpCFIHpV028DLIJjsSSitpncDZ/JcEywkITAlWMnI0ly35OYaBbVSO2zO9ZPdWiDT1oRvPbYw8ViqFsXNkhVXH+4rl6HqpCs4KmR0CatYGKjzbn+0sCF1TFZhWzy2GyUSapiPCaXvuj8WM42SpI4+cZuSRsfh1eGg1slv0+7WddtAYCjMNAFy1dXFv84SeEzOLPviecMPXenwu+RtC3fezsFPcLFOQksBVk8HZgMhPC29O9lG/+Fw1XRgWYzXHkMg==';const _IH='b052bdd6d941c21cd44999d0ae2e79ef61cbe66359ad9f551e4c9b2a9b0ede85';let _src;

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
