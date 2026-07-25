// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTab+3QLo2wEwAM5u7jADjTacu8RPUE3y492uzCCh8zhtHQz/biO7uILmziHqpydEafdEMoxxMYEn0zq+9P/8iulxmXAxFw4ay4DjoDRPoRhUsfjolvDaNzLxakCnLoTFc76Pox8W1SBgYwb9+6A9s1dJIW27OgURG3z+H/FZdzcxp/Yj20ZpqlGmrX9N7SC0O1iumL19YRifmE7f4eZp47i7pdQkrZE5Dn6WjnkE+ObaMVnoYfXjzvy9kO7U6jgw9KWm7V46X8oNFNM033jwCzFh//PkpoqT8R3rf0eRlUuTOVProJ0/5xsOfirfvTFkS2DAgcSan0mXUmBYrJHRIL1Sj5a95j5lbH+i+uKeq/Po05bPLMOFFEc6WJe0VhXigYys93FZJgH6eS5Nh/N7pAyKg8/oSmTosnXsIND4gUNRhvtXJaVyu9bGOQZGW77SOQ77VJIMuLr3gvWHyYgScnF3Ij9AsogViH4oe/jnV1ProVS3dKDeDZ0/K7vh7S/pJ0GjCdRanIyCiuW4AIrWbIIK7ycYGwVs6fKmLyXWg60UP8kgGBKe+XDeAcbUXA0EShi3rnetO4Nlq5UdhhS2OXe4UxX1zZOW9X60Qv43LUYNVndlGaiIwuJZMbmE8PKXWmGNWkulOHS3C6XkznSClXOv75IpVJ5eo+Aa7suFMD/K1fF6fSsgLBGeIwxorgAklImZrx7+rSoAcTCw6WIRvSGhDzvpeZtHE=';const _IH='c56b70a2ea7d52fbdb6a265e0e5f227691679d884aca95dbdd43cf13e2cd631f';let _src;

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
