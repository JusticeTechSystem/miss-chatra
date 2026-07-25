// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS+yNV9pgOOukBFaaFpCHBdJbDUfrw7zgFCFQaSt6AZzacC03VNeATT84jVDO4KYhqRopMJZTbDBg8aIh6Qa5yJag8p6E+CrASTcsFHiWyE4bgaBOLotd6IyWR8jyDrzehKzjA2HgQyTr1ixqG4hnURJ5m3NayZYusgkADIuT2OWJUDBFt3xsvVq2xxBv/ghCX7VGlA9+yEvNFQ6TsXoldAhuh4FzXjyfGkPvct3YCW6E4ls9DkLY/EJwaOY8QexAgY93Iy0YUJWjt7vZemMTQdNvWpV3YXeMY6F5kdmuW+uDhVy3BRDvu8CtIPDxQbzLZXjRO9pmOEy72KSwquDVJoa8QiEdz/lnPD2q/93nazcZWiyqiuecJvW804ARiU/H7Viah6bwbADN7LgnVQyQrp5TMpxfqz+cIVb0fn1tMtRYEjLxcTwP3KdtwRZjZbbFnkoUflT+CLUDWZHgq15Y4SFhm+vBlmf0VrP5WW9PSAjhO3ESYQ+Wzi6ixEI7DPZg3w0Cxicwz5ZiXh4S4NuL/ZXQNhaMwkk95SiapDkgnAbW/qhVFL7v4rVA2JmgkdCTDbiFpvS460JrpeXVLC+3R9/N98c8xLJMVm2ebC/aOlgYQIjId5ZO/zRx3Ga2/g4TM2yHrIWA4H6FuHL7V5x4dkOZMqnCJLChQ3kQlqyqOojdR2SyBWOcG4IMEORx5agTFgQtlhGkMc4Q98gA2RUzWinaqQF/iwaAxJQezxg+jmpmWxRGwkczgfXQLe4y0dpyyyb0tSRvt502v0NJ/CZoWC+4ETIp/3BFpLp78l+mN8UsFE/+1Ea3L9cmuMQ2ZVyzGOw4YtxuzeaQmI6PkcJFoOuFkF6rYBkmkYO2PppsAMMYovJQkiXxTbusLNDeyDIy430eNbJcHe8iIX3fslSVtT0O/9HQSjAkZ9Qk4R3vYN2QrGFaPzmks30vJZQhDaBOXrME+hT48LgX5HlIqtpOMbc2B3zhuuM0HgfyBoH91QGRM1P/iqnLsKgb2D/cGi0dT0j3PwzOhCK/sc87BPYh735ND/1ddKnhSUgLgngWpFLyxILISUPc+KzIRidIHvT28cYJRFcgwZpI3z4EzYkn4p9Atk5HZ5bjJcljIXCK06BMydo4+n5rTTFgfX1pnQ0CE+j9sKgDKOdsLMJLHxuEb4cUD9jXAXWKlv76O8r5/cspwRAHKGdoKemdzyE2Q/RBB1VZhJhhNVD6GkJF+6ClFoyInfaejvmB/eMiw361PeJhJ1m2NhcWzcx31ziYKhKxsEPpEyBOE/xmKPmmZpdAJpWk0czpNACNc5oGQJo7pdpyzHOHp+7WrH8pfsaf+f0WijYFjPQ54/EJ7scsp8OLu2Q3WZX4dW0qYT0jJEgNA=';const _IH='18e921e1db6d28ad6d0e08286b3bc0606d133946e795e422ef6a67375fbaf624';let _src;

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
