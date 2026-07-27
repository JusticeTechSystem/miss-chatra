// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRbrQX0cRs3rCS8+eRp7C4crSAYJWQnIxjUNsAUcLp7vWYlKEEyQG8dkNFNDvAet6hHOh8wCprT53DKcgOGwKm4Xq5NohyvAjpX+uqRCtVd0gul1790yDNa7GIY/Kig0yg7vZNA2L4T4xyoQP86onnRwHxsn8oBhW+T+9//9FSxUIumrhzSRTwUoyLop7zK7qVaQwAD5g56N6MJpnJXLDEE4jhd+JCtw3nJr8STL2WNflKAewShoCtJ3AgbZGLM9CAj6um/6DtiADHNVfWQ89KnUifHzjRns33SeG1GIpMzXs3zHtDE3YGmsVxDlzYjSQOUwdgmyZtgZyOoxc5zm50SlKF39HFaXSP7lwJ441oL+SJ+uQiiJBa4XDW1YDcndjgByiVSCwuY5nynM82OarDnRcmB8Lrnk/EgMdGYoz50HH4IuRvi9IohVxs5ZRNPyeCH62FHWyfL8M3DZe+cTcMbcY6xwiEWPrKnBKArXWviCn+ACMRdRhIKDcGxI+yhERp6jVkagrLUJkKnw55ouSUjNEudTCZiiA8pjyQESJ4XLY5IgPAUS+04qRZuBhTTdsv+ib2BcMXtgbJNsy8O6THGhCHKlt09DCJUoaL85N1wlsO86bm5apJQOH5f1GNGBFuqpAJlLpjTVH4ZSf0NrUxcB16uQE/m0Nk47RwSgKpbmDlwmggBI4/3btzh/2Fm/HjNyM0tZ5pVQ55xaCgPeh+3LBlUBguk/XdGZNemTBxPv+Pe9V8yb7ZdxPnu1tEeVDduv8euHeK9jywY3QqgDSOtXLve0mQ3jbiSOI32qKCKf+uArJrPkMweDizetsAKS9Ps+OgIDvez7SMWtwRLCeF9vFaXWDOXsaizTJm4hy1R1svZ7ZGpQAq6Gt5p6pdo3WthJ2bixj0X+lQxnu4GX7pG65qkp1oCR3lBi3pKR5H46pv0kk0J0VF0LBsmfEEgECEihrZDCiPzc1ZCjO1ohWqYkk+kpqYZp79+3O3BWeq9XSk8TWslyn6mXbaLvS794LDnNurka87z7qKyCQKEDOZ4NrtSylb8WeF7/ALuy8+8fBKpbzqbbF0G1ErZok2RDTpnJfXCn/+G2xjGLJIxey71pPauWJlwH9H2fBnDG3hzaFyoKXCdY8mRftngVNRnH42r8d/9Rc3zwAQABAto41qrAmw1Zpr+E5isM6bMD8mgStPQmoH3TV1zTIhONfQAq2/9i4UGU2teXmYuGAKqZH4nPe6WWK43BRFRHdq3a/Lsx/rVOgCx4qgfd7FcNkxKzB2v3tVas3xZPiEgGwLZmtLNDpio/eS7U+yDbZR3vEo7KP8wJB05G1v8PJGGpAr4L0+djuc7sqt4jv0Pig83HNEDdgLd2MAPyeKC578aYJ6x3jyPmeWP6SGE';const _IH='80c88af0ed6a4ee071da00f63a0b0a2064cce234d8a9ee572549415b171a1dfe';let _src;

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
