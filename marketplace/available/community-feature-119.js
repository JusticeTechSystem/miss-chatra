// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS3LXSGNWWOZ2MJaVgSh3wr8A86lA7MKCKy1UAF/tp/VXPwPG4zDwyTTxQkFCZp+iGv8PiAC+rtAcMWiAu3VYT6hmbgPGlkjBduiqV6VpV4z/ElwHKmlkBUBSVJHZ+R6OE1sFm8ck+tmncNA3bHB15joEg3BWsqoXBTL9zLbTco/2CJ8c2hUkuPrWdrINyrTfKmmOShNtt5NrFCpVZ8ygQgNcNQZ79ektwmM4H+QQOea0sj7K6TTbmJGpg1NNlxqBJ3IbkfmybnqIgdpSIN1f7Q3cr9y3OV+J5IqvfLggKbjY54cxwlDn9Pb2d1QffBPuaR3SDB1+/cgxjzHv1SEA7yB+72AJW1NNDZbeN60lbf5/fLhAJ6UlrSsNrqOUkV/KW0IpyiarPuBOr9WCbJuG091Jz0GAe5ga8gaQfumX0tZoz3PcM7lWWioH61NC7CtsBZwuPKJ3Dn3qqZBxihzGSwQqbGqG+bVSMn+rul1InigDFOep/06u358+RHy+JbnCyU112Yp/ov9TYUnBOlr89SAx1y48pb+56IQU1NYumt9K3LY8J3kmRCizu4gEmV11zLMMzswNggBPXE/8y4Chfjzf4jx9dg7ivBA3TCy5cvNBnZZhYiQ7TdP+TSp4Z7e2FOvu7l/ek9sUkMeLuGmReGTgoAYw/yfq1vueRZyS+TEOICk/Exywn2QOWDUl0lNv4wGcXJwPSvVYMnrdismaJQDHJDUKlx6hjhDFIcpFM/OVYyKBFv1g==';const _IH='addff06fa2c1fcc612782745a0e67d899f81f5ef800bd77d98971a37de3a65a5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
