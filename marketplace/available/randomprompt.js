// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hIiPNSFIJ0KHzNUyKmtFzfvM+yz1xIB90QsiIKVtBj65z4GAKpiungVCLTcrpaNkDYvEreAr7JTEZkwFNM8hWsQUZbsfcEssn/sk7i3Ualt7Njsy2ImawRb/jkU/uBd/aCRPVwgAtOzd/2FSJ5EMGBz6LdekvzjBjB4j71ViHVEAh8mPs71eRhMDRifRGm//WjoZxPv0mStXeDDt+mAM/DR+vtXojwqfGqB37cV/lnmZrJPZeqvVqYsPqo97+5ts1nXMuam4X1q8Iw13pJie0nsNZyVEEuHnSavk9bQosItyTaMLkg7L64Hn3fGhXaTVBZ5R7+ea7cqOiuuI2QFKtP6C3fPDrP+DHWvQihu9RnfMvMNR7z3WwLY/RXAKJUXhNyvPLqjsY7kpy53b0eFdUA7dvMbPQnDLHxAKVjwKN7ei6PzfVIxyRrVca48UUnGG2labmpPoXibe+nYcjAowYLauTX40ebIS70MeupLVY29ZCQ4UWvy2YcNaZyK1f4X9eovdYzEV/KvtN2yj+QeJlFJ0Mp8Kw02DE3ATutv2WPQd/czsySept62gKO0MTChBlUUIwrqtvdH1w+4QTdjZRJ3XuhgyfHRKWicKJ5cd+cfwIm4EwUiwh18iKxA60gMNcLzZG/ZDh+pg2jdefM29+pTakHBqjhV1TK2DGF4+yJXIp5BdQj8y+l8C6NMBRpaCal/QgNe2bNf47o9MjeVYxuOOHtxwj04l11YUfktap7pVgkDMKh7FFaIrlm9WFR5p2EYofJQa0mdQ6inXlQx1z2ZSNE5WfcIh6ADbXKAfWzd8nJsL0bnpS/+0LRIcI/4NQsHtHUV6pmLMTwomqX3t5xXlF24C2J8o2uUXDF2tCTwm/KyKAqL5rcS0tDOX5bW09UggDOQhbsyHfVwvdO8Zy4pd8Ztw9Fr9a4tmFRkI80z8cpuNvHDY1ltL4l53M9wpGbQWQTcaeMF6L7GVTM0zYMJNKfQb1OdM308mIdRO1pLXqqIbXVR2CeEHoUF/m8XbURrWa+k0nqy91nAvRejUjn2Q6jq6M85HUynZcl9qC0dz2KqWYQHHFIzIzWBPMzDllXtyajrqUWBJq7CLzv5L8cqdKJm5NBGAKB3xcwHNiVNPvbneXtKrmGc077+1ecbgdTOiRu6TXoNXaVwqPM0tviWLX6HzxHKyAfGOOoEfuDuYE3Z/aAZQ4jOOruxwyL0FJx/ZH7U/oLy0BQ==';const _IH='d99061ef979714767b9d572076e9df31ea8c88d9a6954cbfe87cd67c18601cf1';let _src;

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
