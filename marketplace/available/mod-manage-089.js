// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hjvz3NVKyg32nd1MRs0yE78QpbwZwDGe9zni9QqajF/Bo/o6CrtnJRn5bH0hwDE99ChA2OYZpCPk/NnJbcU+qf4RRWoemXESqxFaq6nEgtvyYQQ/Ui6JveNXxsuVuvjVtKreCCgaK8UV362OWVTO43AFYtKhAmOfH826ps7/FUc4oR24KZQEDv8+/hdeitgu8Val+lVibAUE9gg31p/Ir3yUBilDx6AOEnA3cCqroaFSnmQcJjxix/EFcRkDcXLhue49EjuldeapnzoBgKJ2PmB21xivyzRqXC7Z+VJdFEMm8AusIwrrphAMoU6JOMr9wK2DkDQOZUYX3U8Z3vaxKzFFJcqK74c4ipWcOWc0IhqP7siPVD7nHZ18qdZiNaJcYTcOIDFDZnf0+/lYHmKw1mMU8u3auk6UvruzB8oKjq+GtEi6PRS2pgAfTaujLxUhNY4oTR1xUEFlVkybHiAucQD9pWEaxYG3et2DvCtrjjQ5MIiHCerH89fnDIONMJMH2ko74KmOTV76vl8h+9a7tcYZ1mI6ow834rqKmiIK7YQnOowtGeWB5Ljt2ouAsifA1yKT7G/4fE7tCCq5FCGcbZNZblE0240edgckhwD90sVze5J0JnM5WMS/28I9JDd0b/IPNzcKAbSa/sAoCOTH4A+rTXs4kFJQvobh3XWS9Dw+GH+I/ph/TC5SDxFor7PRqHeskAeACkEcyI8MK4+58zWZhpMMYuATkRziXA16FZ73bY0EGkfqdq8a5vNqItDD5P88/eMPdU0NOd7sAaJLjT9hvs1dSLgGeqpeTodhR8vRNcUejhxbxovgnUHnJHLHPjndEFYtJzmbxcwTc1orFbSoFLTnV4q+oQw2e+KJCcaZ2wfnhmBCtA4smqTSBEPDY0e0vtRiV1Fet/91SB81wBZVUT9o5XnBq671xpZJQcIK+hQUV73DC1sZR80Y255jtrHlnojPbZ3Y/W6q1tW0qkhAxuWYfeVlW3LATnXCZboWxDvDIoNSaYgzOLnnpOl/nbafgt+o0jK5AW9ODZBlO1JqFKcJRM4ItMpoWXvxC0v/Oqbth5HWhIAht0hcbhAanrGMjh/RWk+j71cfWjOpAH8t0mBxZutuUgzud8eDKPZyrhhZYVZnBmN0usc4ib1umqFDIhLzTXwMa/0IZGo6IZymxoIH8X5sre80gxlRrk6r9UftDickHcr1anOi6khEyTt5eIC+9a+k3JcDDGHbBNevF9Y5mp3qv1Nw8gIt93LVRD6+voBdR8gVqhSAEUGeJ+Ub2SuDu1F2SQxF4TEQMSdipepuYXy2bk0WaTOUgKDtzjhJnE9rioQ8rPwd9C/wQLpijvdRWKTeXRmabLJvce2zbM4R28uRyDJYvLWjA/kw5EU=';const _IH='a8eb16c235fd5a5d204625bd372c5e8eb54cf595defd0239c327de155b12a30f';let _src;

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
