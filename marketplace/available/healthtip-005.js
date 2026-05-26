// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mabu/kF3qpQR0I8tLhW2RSrttZMJ6xIt30PmA62Kb80t99pZYvvbgjfHYNSvJivTdByvlGuFtK6LtYFwOtc7YGBa8bahrVqw294Pddq5NwQdFio2p7gdPNi7477nUkG3IenG+ACxxuXEoR8OXKH1P38OfIHzJz5zlq8cobxkVbr/3v1Yl/YRPHLYcj/KO65nQDztJVm71FD492vEWPp0eos8hVJkcNPV+9Kpghbavf7JtVKBfay+BJ8Hkyqig+bDoVeCI2+ggIBW8fMrbIolncp91b5uLn/QmmJQDAnw58+AQ6yRji1T03ZgFAFVpSxVv6t+ZZt9eOxWdyRQ7UNmvm237I8xzmD0FAlwBEAvZ5wWbTT2qgHpBigKVCAHeFF6DKx+Vc6KkiJ1hXhZYs6Y65q1D1YHxGwUxsB5F2ANxxA1xMHalXGR7unexcQKU105Ol5yAMfEJspHX9Uh2xJ/MT+Bj6e8r8wf20DCk1IAwNWTGtci5ws2IkVrwha5rrq8HRhjr14DlFlAX2oAvMqRy6oMLuzTQhPORTZS4KNtrb5MMK6c8jV7G+Ug8UruEqs+zKwL8SLe2C+JPXM6S1b0lyQ+hlNhbw84i6kWMabbjDzRuvhim+olFLLUSNF7xNparoQzB4Qkff3QIJEivaShrzSXFM7cs9Wt5h4wJ/ciJLKDHAnx4s+2dLOW4Ifq1tAJOQ354HzQSi4IOs+a19NFHBK+DKpxlQ+3lBfHrQL5kjA6CXiBN/2k57T5RTuYhDjoO3uWdYaRQ0AcVagHzAbIvNXt5/oPOm4GXocPKlaYgSKwJC5UdIn9GXfiTGJ/gCIH8no0a7uRHcJBBRt4sUCyNJcH8InW3hSyQgvvJIdxWOmUyioOXSCCodwAJFytwVTc0KT7bLAH3oTmsS2vhxojH/ph31UmhfOQC12taJ87156HnvktdGleTg==';const _IH='43f324d20e5f5bc32663900fed84a022189bf58fff5b71caa84373be0d247aa2';let _src;

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
