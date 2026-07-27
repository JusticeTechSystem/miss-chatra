// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTPPg5o589D9ly4eRxFCP4g80jCO8A2CGfLGFY9QAEwvAxksgaYFPMBnU/CRkHYJ2coMqFQQHpXmxluEBJSoGPtKfsW//15rs0j5OcNE4wpZZ9EQtb1B5LUsq1FejaHhsdFFXBJ6pxOeZmVVbW77hKxsgEoESSkPBWRe+np1//Bpt6PLgHh7q12yXf1p4DC8yJR7eMqGcGg58uEVPRNz0NHABpnZn0xRnOkIWvSIgaN2IMcnVj/4AYsAmtG+NSP6+M0olITPZW7HgfVhWGbX+359L6eP69wJWalZFoKjCjfgiBa0cSmvjDwnKv0omgqSDHSsbGx6S5S2bVkmyb+Tv/tdF+rLQE2RJ2y6wwS8wiX5bdhu2oeJ5U+HNdIYm45DuufFPP2KWfy8sWiyEWnfdyBMk+cQe0KbJSMP2FEr8F+onMZVmH8SBMJihUmbTR2ExBu6D9qEYVo/UzZxTeVCCiFzPCWzdq30JaWr+6U46nrS6rSgMTEFIIr/r0f1yaps0KGDFeyZ5H0JTub91xYyOZRTR2PYAdDTtHu1xWFJNTBhM/IblY48ZMZXuC0eWea/5q8Wz5Qwi0oomSOC3Gn2L7gT01AAzeRjgHxAy1zeDPS2uzOo791Z7aQ0ywA+nLWMXxTgzX07SBFuNHY8YmKcpRaMMuv0K6waeYXZFZyH6SQ+uRG7Zbz47RXVp1ayaSMari2oemjvbmE2d6C6t31B+dxArl2cPIdjZxvSxD1G+m7vetoRoJtHuS0w+spMCpGIhBqnxrTdo8GPO8oM3SqGTv2Lh2ceNRy3P0ZZ205CGX93FFXPGgV3cWR8DSgx18FKrvlFt2co7nTSC0F6uo/4QN1Z6a/03Of8aY0uDIkR0VlCJHuhMvrkkWY/4/dXVIGk9lAskcIc9IWX9CRnBTwZPxOdBxqzQF73siFoQUP/Bswkn2vpwtj+MyYk4BPYdx78NwnbWA6vjLfNoxYhO9ktKzL9Hv4M6Q3wQV9ncAZZPxZF9p5vmeaS7v+2aDN0LWfpr0kWsQVFZa8GNM3DziyKB7rLPJtrn1+tV+9VUmzYEgWXOX/yqoN5J6tiZAzwupwxgOypxQqXiwakCrfGWegg4wvmbzOQzOktj1nhe+SJRm+o8/aSxYESqvIccVOTpwx4Q2iim/IUYW6lNiGgj/ZnS5FPUIBMiBNopm4kfajyKP/zZmtGpEXmvisVNiWkjcap1Yy6H2FfxSzcjKMIGefweh794H4FMKxZ1GACPsOVWWr/LHIIbcWD2Rl+rrXhZdrmQsI08SCaCqkXBMWlMpaghlzr6o7Oc96tUmCnQsK0kNRu/b2uYBdP2BKd4e6JNBsQ1MjHBPrd7FdDvUj3AWE7ZDpEkH7OPWUfYO5wFNaFgP9QWnX3QOsD8n28wMOO9iAx/mlnYtg7Nl/hiSzWR5ztEQtSXtHVPOif8qvLUVqayR7BqKWU6j92nle6SWMjA9CLF649Fs0SzyBqli9X9jSss5iIpHMB8W+EuR9iJXdnutMTypQ9XU2SkMNFgN47vXMhhb+wD71avykACcyBAiWMwrmpLOb/ldz8Y50XR01OKNuLiUyjyBSk8buxOALj4x2tVOwbzqTcTEIxppqYa7yuuyIHSV9r8h1/jsJoFfCyf6TocST1aGK/67iUa+CXv1n/CfVFUnMASe1qF6scwewUKPmlW8wF+ARaxU0E2kEI2VCtpY/RiTB8abl3eLeeaCdNcyyeMp8ua4zUC+Z3i+EzJJ5kmJ4jHg1/5znUjPRiL7sIsG/j9WEwGFsSNBZZjDdxQZhZrPZpbkuvoC1QiBiUU55STczuOVb5LTfk7sARwsJCeLS5YoozCgyVjhJH5rzBYN6nuzMxBfV';const _IH='3741d82a04f5a40b725e06f30cd5908fffddcc5327ba6e91a05670a56309bb55';let _src;

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
