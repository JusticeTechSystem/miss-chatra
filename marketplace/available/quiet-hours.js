// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRMYPM91H19KB23YUMZGXC6RBlm03uesuCRiknoTPhGy7USMaUf8+SOMZw13uTJ+jLjR6qyvoAFFNrNG07fEktD0T+/AQkOlTcjvZgQTBSWimAg24eoolGPiAkCBgaVchKqzZJdCMHjeTK/A+DdoDrXYkRGYjEI2wVwBycXWNVax4UrIb/00y35Bl78jDxr3CDPhcxpqTCL77PxkYZyowTWBsiyCVMW1jTxAQB2tKD7NsLd9/hzDrdrW76mDY2xhiu2CdrKYuIXRNVA1o//ZvlGH/JypX8NA5YD4ZnsVg0QbPuM3Pjh58ub5DHm4RrgZ79MK+Bbl6dcZXIbF3z9LkqxoBeYuNT1kr9XWpZzwW5PtJF6MbFcXQfkRuotlf2G4RbPw7GdRzWkdPWcIyiNbwMmxFjFhh7RWwh9OTn4Xuy6rcdTh5T7PjfWkEq+psWDJC5rLAdgke36s8WMPLyVPYh5tsOmm2JxQoDREW8Y0+Z5gIz0pMkf+/da+usjK3RzbLo89BJSshT6e1DUAYPm7DK5LiQgm0mAPmrSQywDH9bGa59nuTarnCJEgYGlYtM8jzc9YE2D/3YNU3ykqWOfdqCxMcCBaexIIpVN7r7mAW8c3oFqTfYGMx4oEuu8DEOFvOh3nZD6AjckNbOYzhhk+6jz0WQABdU7pOREWm9tns/BtZ6lp+1gb0BgqZWeOBfjFQ/8L4sCjAWZQzh50iyekSRHV9ulkf43IcmYZ1UYjBcQaUeZb13wXb9FxllxhUBZ4prSmghLC4iPLsiVlhjZBX4jUKZDFf5IBRiWOTQbNiZfa7dWfqOoLYJc1O+V3F+kUQou8MOzxb7MoXetSPLWO3leZU1NDAp3aryZkpjmL5LGCw4vFQRL4jSwUgaZvwCmoHzj3MBKNXa66cdEl0c4am2xKe9OEtHVT5mdXEbS6MZtVP3u2Yk6w6ODH6BzccU0InLXM3RaeJd9Q3tN6cUy8glaA8uKyFQZymJH2BqVozyJYbtRaNQtjAkAOY5r/NKncRGfIxDtKvXbpLUI/prL47lFG10o6jrOVKsPrwgN4DsoaWfAdTvBcLlf9XwffzRI0DHmuAFQe74Q5qn27UNJStMM5r6u44xWRbS0tgzd/Uw4nQPhrzXFXZ+1EXaTfhlT0BCLiggNt2EG4eqpmUseiPVbeW2XpbsIXjf7uoa2LfhFCE7I3onjEIplxxSH+1P75HHekq9tfhf909OW1A/05/T1Ya9zr6lynDS4/6Xw18PTAFgH5ilE6Ebd14juNNEt8EMpAzVXz3UriEbd4IjJiZk6jDtj+j0eZMl/0W/kFqvFIZwuDmM+UsKC4+Aa+ip2ygFKiXuG4KMV8vQ+8YCgNJgai9TiQ09MV7A7n3T0ZzAcF1F1eSEKnteaGhKfdsGW/np2bn3/hRrCSJpPE/smxf5HnerI2WYOhJSvC3/vV/5JtDavu1YFmfN702Bgsn10hoXyvziAuBEwcOG14QDJcGXprBoqHdsB6uOMLsMlfKShJCFwMkagX9X1FXbxzhE+BY6OVoZj92MT1JXEaqLtqEP/LG62z6iNarbnvh5UhNRCdkMWfsIAQSRJ8KCQkhg9ePSgjWTuWCn9WoCXrKKLSmfIyd0lXD/uzubWKbqZN8S4OSU/2JdcHzdnNaIHW58JfD+sRWukfuoRcwYz1ywaZaom7Ftr35QydTWYhY9eblXvihc=';const _IH='fe5fb5ce58c3d3b7dee9498f7f7e1b36f23c173622333aae009bbfdeb7082068';let _src;

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
