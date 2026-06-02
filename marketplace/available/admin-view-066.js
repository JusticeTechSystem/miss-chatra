// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vntx2C77GssmNuQ6Izh94y+sQab9kZL0100Hgve2jep3KePqpuxOV5WgS12CiwRiyeHIhShYTd72x2R9Ra+CT0+vOtLXqwvoOI3T8dtNhAv7f69OH0pwCV/CuuKLmUFnq9ghFTtOiHzl/PZV1n/Xz8KYpBvDVhwb+qYfVaGl1Iy5pIlZ9fdlCtieuZYofsz41dYCnNpvKEXeDl5XTrNhXru+6yhIsA8k7X8zl5jQtlKfj8hEwQAivx4eecUBNZwa3PxflWyDleUgEF8YYPopKSvLeo0HWI07jCF0Tg7JtLqjeddQsush+zNq5xI7fv1IA2kZJer6n3JLdS8aaTijwn1pVJOiwLf4LGD1ZRS74dSY1lqdao2r2Yc+GGK1aMLRABsCMOjXcG8IkHojNMcADtqKCq9EAzonkBbRzg8+2el2ufx/rOLf9ftqITX8Wh0YUtJn61k3STPm1nkO+l3F91fcfFYAq6VEGCi1rA/6e2u/TvzHl3gpym3WlGW0Gqzo3r1hcKn+EyEarCWTX9fgnjhS4ALQ8dA21OC48F+fapsuLe8RioCtF5nnRmEOZZejcA6NrWNYgFtCe7ly7Xowcpf0ogZmHEkQmrCpz7jihtnmFfw+l7KXt5+4A+m2LB5nJAhRmsKl6zTecFxbpPC7HizFcharmFJ3U5pW0/GRmLMETa7u8pNEq4fC74q3gwcWrVpnWJMfp8KOysrgP2kNrt1J+J4YnUP/pbBWSeMoXOOMUydgWi6uup1VxORz5GyZi3mwqauyXoi4w8G+CoyqLA6a9CxG+OtjyiigZkPFu16UluLz6fs4HBtf88ehuj01WSHwJXvMZlcgMbbG0KH7tvSfiVCjJ4MYCy5G83LiuV7c1u6mzbjTOOpt34YCxJMX21asZ0TDzjIKtdmsnE2h8G6TMbVG4sOB3WsV9CU6DBRNofQDYl5TVSDr8DxD2PGVpXsf1slxNTm0RqPRahLy/cYu+2wSQOG4iMlb4PyFoQ==';const _IH='6226d993f46d1141d8bd3d296974a201fbd17b878b0de39f4e5130eb665bad91';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
