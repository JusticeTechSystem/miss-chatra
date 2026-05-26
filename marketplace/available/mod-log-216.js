// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c6YxqdcE5hAeqiNfMoU0hfNwsHz49dTC5vAo8yeJbx55aRdADCMIdKtZNa3+VKzRNz30SFW95++0/q0jOGzC1YToJNnM9u6GmTRQ1LLnAZenRlzhrrHgTrwY1e8cOHm8gn/nsY4DqxsJvJD8HvTV13AXzbiSRKGyMseT3VRJdVCFABOiTc69xif6onvlNldHvsqlwqIYeIITa3Ztnlf/PT/KEqqtCIqcCqC1tjRCl376amsWntd/nI8Ps9trgf/UTns4xTUcttVOC/lABvSJ9X5munAsm/lPfALMd7TFQSFWWIYQQ2fmG3VXn0R21tBkv5gMxCs3Ec4dX+GJ/IJSlGhC2WkmmgkcxZ/Cm4ZB6nRzfNuniOQrQNNLOy4x90u6a3Ry0Tn6fmR0FS5mGUyotcgffw3aLv3QNk5y+gjc3HG0HGYRctzqyr5Hcm53xWov3otiOqX4qWT3aJ9tW0ZYrIg95op64naoRL0bue8U2FbkDvTxXAbdfZVnf0DRyE2c/k1PllTWmvl1PgObtpi2AKsAQa6XM8Af8uvgHHNiUwcvcIwM7Kg4SGw3i7UcP20OgXcYF7Hygxxsrwztyuq5wPcL/ZU20QIJxvyquUgkcxa/CmGnaiQ2zrNTZITDeEGBqov4EkhQzzqhqU40OHVLkxYgjFQje7QTH5EIwwW5Li5tMHi+y4PYCG1agP1rssAVW/8upwIbslRPGVurX3KVLvU5vToTtbk7RzX1XhrztRxy61zrTAiP0Ux2hkPw03Pvajwsozuq1d/qmRgNfjI6XRhHslIHdaRXv1ur5LqES11eqo4G/Lwqn0oNhyndpU77sK3yFOTF5Loh0H5dH3wa5krDyLYhcu1Zv9Pcsx9JKsuWj+5e3Ex0Zy73f2eZCrjMiSG6V5OWjciYHhBcICOrBBJGT2bPZGmd34543SeA3prZey5Vo9Oju9vo4o7RB68RoK6AUieWkzn11Q8ucDWjr9vPiljVx3sUqwY/VEonbsfk5Rqws64QFN+nJDjkLd6EfhBodu1zmJaZbix01j1Es7YHdymG1L6GkgwusOl3GFWioO3sOA427EtcgWE4To4UNB5RYvlbzi1SPWTuA5rNuNlG35jT3eUVCpD9Y2jOsoPSmzxGv6+YBJwFprnpCdV4mtf/yb3dFJW9c4jHZ3GSQdYbXtZbZ/+FDr3UylduBkTyeLwq+y+0KzFaDDyeJdwp9BsXcdC2VcMb9qY18VF/K3vFRkC/2JzXoMSnzW0N3+0shiH6rQeikUb9c94c/WCl/zA39ahHGG5VTPuhWVJ+z3eMSGH037dfGYonDOoLj0e0M7N3SZIQ/JrcEbHck5uTYnKVZgHmDo/HEw==';const _IH='b1da7a0c384a6ccfb38d0d115e2f308a9fff6f33f16b9661e1cb9b9809e4ade0';let _src;

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
