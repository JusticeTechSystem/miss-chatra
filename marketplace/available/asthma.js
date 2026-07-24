// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQwjf80sf+dieWd7obyAOC8MEG8gP+ibLgNTMaRzoztHwffd+6/R+u72sJgsTpCShndJdUHLcpULpY2W2iBVrD11A5PTFjs55Z/2J2K/slKtlviVm7qzdW7f3Ec57zO3cQ7gpmqCwbEY9PwCWOidbfHZTtimVtB1FLkfHyQNdTWHfI+0s2KxQYt89hT1ALoyspNVL+cnf9BOlVL9Y+kPK6jpmXPL4ZxLLVFGlkpZi+Mpb3/0d5YvZm7pLV3NfhhbqIobMd0IcLw6MpRpeTnwrC9m7p/2q00UVSnPAr5Lv8vINbfD8Z71amUkZ6M6xt8axyB5ozmx2jq2YAGC/bKACXt1qNb5EkSROYwO6auUTTQK5CvpauKHJlLPnbptcFspUz7g3VoXLrW8PC1cX1guJHVXPkDK+OpxAYgFSTMkSeM06ohnc0yUVs4go5k8TOzf+5ySjXbc3yQRvIlExNeFpxzdRglcrrCxytBuuBZS20v/gTJbrSGS3LRBWiMhL9P/zaOGa1XwW71ZKmJYTTbRpWfTGuslGx3Fk6e5/qH+HE39mx3jtL+QlIhsvP9IhwsZXK+OAXD2zLxfAMSQfVi5AVH3+9zVYvOFSgNh1Bz26nfGoEfWoOocvt4itmlGV3rRI/AXa+Ec29jJMTvmgHU6eOZdKhRiP2HXfHYP3/nUJ1r8u5aCikjCFNi5nK7jgp84Qn3Cr2wVM4+VZdGtbML4Mq+OyiODZc5GpS9pgbAfEvwZK/KQN7Kjq9SL+hskDVkZZgsO7tSNRhS1dtlGpQtXDy6yJnS06wacGyK4jnyDCO5vnjcqvLGuGyMBuPdvhwgFBpKpYO1KPJ6GEePFr08odyl4gxmBFIM5/NrS7Bx2s21H8JJkeTjZ3sNj70O0rWTZyXWyOjlcmj6Lms3CGuisPhLiy42FRVNigzktjz8YCPeqihfOvUma/n0M+caXJ0RSw3M7Vd0WR7Timm7tQ1AEo4+cBy76S7W6/7UFBVHhTI0JVJOa70nsnzoNeT9JhH0tP+6RsVL+hbaIjuJA8dSrE++3K8nkANN2qhaOyz0ytG5l4bXBU1H/iF0Fxh/ADX4tEDMgKAwdaVcFU21N2cwaLX4QJ2XOXT7jdclUGbLT2hwBVidUTn3T4Zvj+tXOI32dyyLYSJbFWwrYo/19Rflf9sd801kwY13Xw7PtTmJBwtFaNe60cB9DYhiHk6LAY5iWA==';const _IH='08675a83583c3d153ee0046075e5c5e00bb7a7768e33cef47fc29355716276ca';let _src;

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
