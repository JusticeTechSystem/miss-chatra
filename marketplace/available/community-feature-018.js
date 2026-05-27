// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aFGEGU3dOirrdWj9n1oOfzgAeR/dInp+SjRgXpbLnxE0v+ZojDrBBwaLGfPKvgePOh/I/AVOURZ5I1M9Jn8EIogV2ykgUlC+9YrPHaxYNPy5Kg2sXucw9byUMa1mj5vQ15SvdRXzc44pEqPll/D2EUTkGM5pawzWIN8WUy374FYWNUFCKNzRVlM2gpe1Gps032tXQ9WIwlJK15kL+cED8bHiqgCADtrwgRUi9DcoNWLeyY1svv9M1BJ9jYuoujzTueE1JH862WSFwFDBgY7IVY2Qn/Yyeukd3wszBxC2NNT7Yfn08FwK0LHFn0FRYPI0IEfgxzrZTh8JPsOA7FOUu7AiAEudN4gObHpFQ3/Sjnq33n22hXDZf4PPrdRO9VgkzodTJ6m8VTxx/BMFl7s7jHt9+hVaf7EyXOE4HYxLhANS0PwCmDm/vsQngO7KJFvFpqv7vGdLdeH4nVAvXlT7XRpZnGIxbldk8zAxjfqf0240Vg3Igs7Zk+cxN9PmQqEaeweMifD7575+UjmF2gN1egyA0+/db0cHN7ksr+v42uflURKL0Q4OutN2b60jP3wmZo6jc0mwxH+oyA1jdOD5aPhRcf81OjAOMuZu1xkpoVUd/lbhqyN3cv7reLVn1maJUJZtsW6H1fF7NhTQ1l7vwseKLDNicO29TAFfnGVudHhcx0Jao1g5cJxezc+EJUYKzuPZzM4QEdnJDFwVfWuGQL06avyPrWOGcA==';const _IH='7ad7e8fe775e116bd766524234951d8a0b04faa4e8958852612dd1c93359225a';let _src;

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
