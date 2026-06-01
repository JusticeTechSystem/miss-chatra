// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7m8xa3jiy1SWcl7jnQVds6DkwQqdJSJXOXiZrBdcc3tSAbZS+51QexvP+OqZwlCAWjZiNrukPuiEoPdFSqwBp8OzfQkF7ihyOBuJPiwPjhSmGUZ7ldN4fQFwD6pJv6rAwsQ1LxxsqYOUw6ur8QjrRa0XUewDLoYni6CAXJlQq1kQXvSgKmRwyt+xJrzs1GiHaZG/zP5Xf6iuxbAblXjKJxlN4uOxqcgiwNr0gb6SYEFBxgX3Lr2dZcjJ561AhGPdHxQqKVsPofMub2q0Y2oVDmCza978LPES2YNap1Cty30du+kuKYzkvUF9NncpQ5DO8KlPUFjF+KNX0kAe/WkHD6DC5HQU2hYPSjfawXro8arVoxXoVMLDK/+IvmUcAsLd1Vm4mUgdkfUHu9rVqgEsPA4ihubX4DO9ECSgmIvb7vgqEjsWCPobipgj/yY8RQ3krNoW6C95tLlWt7LApB9kdfwEnLdwjxLetbQyqezHbMqw44ih0D2OUCvbFiVCcGu6xQ3BXr0+W+0iD2yNPS3Gq1Ok5bPhIFMqmWKDEcWkQZ7rskls5qyo0/0DcGIlDhWUdm9viLqd80zFgfCLbWp7S1TXu50GyicnpVUjR4S33MhKrrNEi6enK41m9CEaHaiFaFGJyRDCUjDBdGBYZsgUOYPVabYmhPgHfooIpM/3cAhkRVAOQDm/Fq2GS9crO4Qi3uK8ZheyMM+7Ba2b22qRiKmu/yehFi0Ium2xnqg1Z9AcK7HpXMsz8L5ulxTH5e0LY4eu5T5W2YYuSrdg3Vn2HSLm1VdRd26G4ONBwsWXs9+7DATWGWqqP+hlUXR8wEnwjFBW7vqqHcPfcE+zyP3C0gIlbJfJeSpLLy6mIJ72ZapUqU2m0NjEb4BoTqlw8iSEzmGEglcv92tFlCt8pNlUwZRLPnFc+ex60/S4wuuXlkjHtASyIwVFB9QMOPIgDZpgvy1e92eqEsw5UlP5oHkJojRbEpabcTChjVVZqbd5FLdCxdmVMtE/E47iOHjwHAsZ3zmQRocmatSgKMyIwfiba7Kjvh69xeoueoRMhxQSa9l2RIULavjOhGu5vvSYiX8JzKtvxZP7w1/2cy/M60WQewEaokqfXBAnPkmfhTFrwVhVaeuG4DMxxskCLedhT2YsXXGvK4KBBUVPNFZpjMmzt81fokQDK1pjakLgFlgDzi8Uep3FrHYSI0t4Vf4T0B9sBo5GAjknVQO0pKKeLT0CER2qWrXSYp5tghWMOdfainpZn1fNWDaz84kHwdShJUS9eZv5JlALQcjNhW9ENBxajeWpQcYVfIkcT7xJvZisqIccuFcJMI/u44y+F6E5nyIV9VyXFicBcyD/ZGZ0akDaWzHIcshbKVngCvlZiwKRIJxawHonUFwwraaDpdwV1TbjC/U';const _IH='a767317a10632c4c1a08146f59144679e3b1b3523527e8e463341aceb4b17609';let _src;

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
