// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7Em79oiaKJJQEMxqjv/XufVTh7+j6nfjVsJOJhap6+hiLgKCo/rpHhLjY/eIehXqD7sdxCy36BQf2/iOECWSf18deDkdVEiLkHgZ5OVoEwEAmMXT4N33Oh9RiX+m4uJVzY2w7iOPIEfslENEhAMBRrIwFPTrx1gmeqrCnyCjehHvNuuPTuhc7h7LzVxYqZXY5mw4qOWJ0RFd1bpz66l4IDY15quCS0RdyGNwwzVhOn4Fr/KrCbeG6aDYXuWrPkb44qtkGrssq8kmINffKZeDRRMUImUCkal1VeLNTgM/VpQwVqozy45pcfyvOr5NaH+VsorQUMEEsKYLxJ89ZNQ84OUZbHbBqmEaxjIbkMiDOGqXiR/KJLwvEazb9bI4tSfI7MZkdQHhhVlbeh+PuTLR7MIBS2hymhkjMjd/0xzE/LYNNO5TZjtGZjJ7tT4xOYJg1jbNLEZvH/BgbM6Pa/RRrMGd2yPvDKuNGxZy5Gfqvy4p8LGkcBrKbVN2RSogJHiiICJE8/ga4TFox5aIWwd6gbDvtWBSQsqLkwHMwStETHE3Cm/aZLYUhE6Mul/l21F4k1YP+n7EOvWhzbG2fdzu0EOPVQMdLit6rV76fIvLKS1Mr5qPlB9ei4UFtcsbTepSfiSGNaRAbtvPR45Od14I';const _IH='f83683789f90e5525b26f60682a74fd00a29d63a17aa93c09b108ce20b32f668';let _src;

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
