// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GuXyRAAIKd6Rjr+knAhnkx65a0n/NWQS5duqyYmN6IR3Emx26mhLabeF47BvszWkCKWjb2np/mSrko1hnFYYWwe/zCloJGltyWPgMapmOwuJGVjNu0RouxC3c//bIpZa9Y646hSRl6EFl04ie12H9gnfn2hG2c70bjg0xYTDSllxQzUVdzEH9Fdm155G0A3KU12301tV1xgwpxb+yuwdtk4U26AqZyitBgoZhhwo8dRrPsX/wBgZO71CP6sxv6XBHZc55DDrMmTM+yKayPpQ0ucoDrADKGdlGiZo8ix7nBwNX4QptKz3hD09L6SUwgIlRczFkGgYzcVWt+OP6aoNii8YdoZxBI9LeXJ8SOY14cTagWu1ra3ZmcXrRXv5UHH0R/ocny0eA08Xg57nZWUa8RUqwVcAI/is8vUNCYWtTESJmTX7oxEkdr/kY8W0YakbWh3zKuBTqhUTDQpmS8af1/JduyClSd5tneoQivBC5SSYmiKVB8TXm8uaeQn/bkQ8l4cWN/npWWDfNyjO/1xYeUN2BF0nlXLzqcc6ECBoCUbOfpl/qxIKM7Wm+EPoEo8JBh8I9st3ApXzV8MsHU01RW90KosiirZXV0r0EkNyKT5t3K0YAvgMKDMenxn1viqq89fL6iAlaIe7pfspX0fdcf+IF4DuNPwZSLuxHtjIUPANHuhPF6oN6ATOpyBjXY3Z79i1zG5Sj1GUU3/uz+yHURIfLqVvu5ckRBBS3Twg3QF/tc9EFEaf0SDoqTo2qNoJi5q8xoOJkGYzYNN5ZPXu4OF70sYZs/HgNI3mFBg5mhxvXzexwsWMHoVI5PSrsrwPkSGrAxHZGhmsuJbLbDvb4pqDhqIl9ufAnHXs4L9kGCQ5OjyPU7/pm8t6YlSeuWAw8pGXO1gfcYcggrbSsjzNnp/eiITEMZlmN/QDEki1ZW2RKW3xTp6wPYp8d2f3hHpxOAY3F6ELFpx9ti1kANa0CowgLT/o4L4AoYNA4rS1TMzH2/X/8IpOJHhqrW0NXf0fpjbrSGT/eu7flqwIva2RarcdwOhjg8gN89tDyGvDAyXNTcJrFw0KkV5Q1jgVunIzs8LwOSJqizkDhk8jojZV65cTAGv0mLNpk9U0+pt/lUyqWhP2osQmmqgOaR63Z0RDfN1rlRviHVPH3m+dzQPSPwSX7vOTpRRjzihvdK4aFaJ+p4B4OGlqUbzXLnQaMB33fG6e/3FA/CgN659J7x9And4duMUAIhVC3VoRGqkh1pib3kkiug2/t0s8ym+m/v30R9jN7fNjVdv7NgKxZLeCuYXpl/bmTIJAp9qB4in/CezWnRU2AiDBO8cLIBA2YjYFH1hbAQj/6rcisA==';const _IH='f6e654fc24a16c94c902cc96a6d5c2de5b23c962fbbd6df74d94eb35a70d020a';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
