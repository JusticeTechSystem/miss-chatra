// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I+hgzDYxvSDmnQit2tXqx08x+ge1s0moQcrMG1wSI9iKhvanO3spwgXKDz7OiO50J3dfoKm9AOeuUn1hBNJm1TySoi/gzNSDYzbv25n9iopF4BQDPnVEdDVOmBaxDdGn41aXBh1hhwHD3+iho7lZXcMjsBD50L+YOX1T+CGakYCwAvTX9iffuKqwKc7q9637KS93faZFhDWXXWk5tVLcFVJbX1lTDfMY1orwcifnt3dhUwHU5PTySbMe7mekEMkTZaVao7zxCBi5aI+aiY7ro6hYqXOw7BCh5eT5MP6GW0p/fpX1aSn25fF8PcXw9V9dWVAL63CN06O9cgrxF4DBl/TZeUagPdfnHDeuwnEcGmDBCHwmBzEvo9sdN9Z1VLyU9FTF7L6pwsCgWlPqrM6lYHGMpmk1DG2yrlPxh1MFU0RCKlavWFhtLYvDuZXPsIZALd7hgm1zawQqyuYGibi9gA1r81DyaTlU0ozfhNOU8Ht3T5XWlVjMxR3LcNRn0Z3+yjFyCvxQeCg3Nc19tBSEtMl0ayQfwoYJiZLV+Pwq5UjWlWPmDIEmLjt2/+a9tIWgjB/JrfSLlU1ZTtjhaMB5XZWkdIYX/Komq+m3yrTiuZKLq147amOapMAvviEusm3J+Sd7bOU3Yz5r+bHBq0rOz20cK8H29rnAFZ0JJ0rYqtT8RmjsOcRSLPC3GaaDhO7+MdOHsqkVLFqUGmzLm/yA1TlFTHfAOjWD0bji1/1j7mJNM4KQaTvRFghsDSSYllED4AnJFymSedkQjHkUq9H2vHHEqKE/YIC77xiro7nKe03IF7WgA0tU4y2UMXaqgLr5if0E2pKwgfWYJm0q3xhM5fonapYSPMtiLrfTwmkfLg9PwbDEUkGsynNkYrV7kXCLPd9Y3E7HL+3zTSilJIIcwDgx+6/VK4jIANy5GrSY2oK9pSEUeLYvCHM7lpfmbk7S62QsJEfQTzSLHTAGWb4KeOanzsYOHzyi/R5r/Mvmdam/pRmnFu6OEqc9sl5YlevOrg==';const _IH='39be906e91a7521fa6516d2ebf286e612331671d3c94333404f95c5d93766858';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
