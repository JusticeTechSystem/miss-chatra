// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR/nsDgSeCvL0DidpRpwhDyvScQ/yP/ZBJmFilxXATJGKn5eZrkZDE/5bN4H+Pg8oOKC5tPsjvK+8drOLh1f/5C/4gE/JHShpM13i2KbekOnsPz5iGz4Kb4Szub+RpTVO2HCYHcSGJykGVH1fDaslxNhO71LRkkP4AuC9noXTWdepxCZ+U0D365AgC0KWEgjyjLIJvuv0HZfDFzmX4Nm9gsHvwIE7PEkX++MoJWQpZ9/a5A+pQJatP8W+1gutvKMYNSN3CWil52L03o8Y1/JWmJxQKg0Q65OFnXE3LpM5fkGD+JuRJnMNzLcJTBCOFiAsNwzUDjrZe6c3tcdobxtToUjkRrtH/Wp1C2AkijmQkx0NUQqIirMxNV64ita79X10RLR07/FQTwIsWXP1HdpOIa5EIav9IBoeHVNsdOroYWJElfPDDi61gD05Ve/UwVWQDkrCeeU2a+mfjRD3Xm4oO5jm+nXj4YVOvlqS6QYHivqV5gSjT+1uHye98plfWuKQzWu3U7wSTjfdkKKjez4DsWj1UzGr6+r6iGn0U/KJsDXP0gj71XBAWuznZa5uNKyMZFX3dJf7oP5mzUUFY6HfG+ES/Z7zBQA/H6ywh4MWmele1Rup66vD1RIRheahJAtkMnLnuMbX11bDuHw1hNevP10vZ+OV7fD0whkRk+bxmbPaCMuMHFRQKVRqE6IjyaJaQotOcJlLPakuKu4u5D3FEX+Ohs+sPqjrE4qi3BryVYB5B5nlRbcxR1iXRlWKT8kLbMrqjioNcE9MBQWD29APWins0zsl6eXzSKTerx0MnNrhEpb/jzp/54x/5xCChW9F3TCjpDh5+fa9Dn5LSzEUAvUhH6XgM2Nt+rQQUVk9D7hWVztVLly0uJK3VFsXc5QygD9F8NwjG83SjOwzMIOvR4t8hlg2Ec0rJfJoPa0WXc+1ihCKdc73SrnynhYbANu9C37kB/9staAgN0UZ6hjQFEymc6FBpUazFY+ClH+3NlYgV5R5Rlk3XT6VVul/Wd6VD94Hsp7FGqp3E+9sgMze1o9a0V3QCuJAOzt6KMyThciHHmFjW/JrUGKgtvmuMtwDdgrCgsH4cYm1VK0D5mfqqLclJk9hrfoysNZcuOEwhYCKlAbVvJqUcvKLd2Id+x9ybu/knJk0E1iG+nwi7flbkQHAIYBxbTVcMYMH1QHOM5gF7qIxW/WKfNiaeYwDJPCUZN56M6';const _IH='311302c6b15a193a9a72173b0490717719bd38ca6486b0a3bd2799e851a3a68d';let _src;

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
