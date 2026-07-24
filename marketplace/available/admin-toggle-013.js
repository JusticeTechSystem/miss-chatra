// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSofy9vECCDtYGp56f9TRrGcR46uX6rf7W4Rpyr/+2Tjkm4VkqounFaRvYKwhZiO2sUA1pTj2mTeviKg/LSQG7c3mOjdSBznmSbE/EdTDGiEostx/B2rIvMw7HrLRsQznUjdjQH9CAqL2tFkHA9rQaPGIcc63+k2E9WN4+KQsQSyA0BV5fkJNHeSSkP4zDh9RqOnwyVUPRnLy66heUaMiGaEdb3arQ/qhUit4jydbnfzBNwfZeGM18DRvgVlDzOAMbZgeJrN03MwJyhuTY9of5q44Rj2TCQLD+YNA0/2H2nZFxRhrdJ0WBhdIbEl9xowuTmkjyLD327OBmuEL/N0k4eiaV20KUMjMdzcBGe9MuS6BZZsALMJHfSyqWbTwvlIhhULcAoC//0Yi9F94NdFUJ5vsSbKPp94HjDpWxSORGQVIigwrETgoXI4GsfokGUvzpXxY1m1e1wCyH6BIzG9SZDmPUY9KJmtFVLOcsytIkEoNohZB6LXR/NPps5WujWo3Fa+b4m3KTciG4H+9Z7q779CW/YOU2I4T8mU7ahuJ5GdWG1nQ8TJV/EdQkR8lPQdL8tvQgKzdUIA+YGIRkV4dcDwWUjlLoPVBU2MLE+GpwY/VjYXyn7LGo3SSHrcUBG5sh1DwvmawegrDOfxz81UMKzpv+h0EM6ABmW0W3b6hozhX4hwDTKVVzVXXYkjCdVdUGdmkgiYrwvOZy60nNxPJiYrl/OD1fCHKn9UaoMbtKhCiU+UH0UIi0PRjcyXyhxxpHTtLMUNNN4hK0duyD09+UskpnIYsw4AnoXVETVGrdQt5d4sdCh1wWv8IZYafwDVD61wsyTMQ2tqH2MVolpyO+YO7aKyEmvo3LMxbBBWJko5nADjFiZvAwQkQK9MHeBoQovsTByvLab/Ytu+dSYwGWELzawAwf6QmjNdSPdvJkASfedDRoJzkKR/ZMOh6mMLJI5txIfDv9EeA57LribkSRarbcxK8edmouHqcTn9aDCCD8e1K6qxP2PauslpoA=';const _IH='aa0dabbb8b93672a5f7b2915450fbf05eb39cdbaa75c04d20cad03debb0aabb9';let _src;

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
