// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4Lf56ouYphfhWX6iFQZzDbwB4VzNYa+ucElEwjnttSsgzQ3PrEp9kxzJfEOX301b4DSL7sdveflZXvyjUp6TviscvdMbZjh72CCqtAN3BaZwZjhv9/OGR4wOrtUHclhMZAX+nhZXUem8iXyLaiqns4g51ve/CZwOI9Mp8te55Bdc9S97r1n09qoYmyiT18FDlZ50gZpLVh5ER3XMWX7l1WaoeF0Eb9K9gkD2bcLQd+FjZlfnYenRAO30QhU6xlVi7uLxLQ7uLAzPRenxkn9zCC1aeKgh9e0EcaqIHju/nctSZILBm0VVGUsfqxVsOnaKzso3DWgilNyWS9M8mZqYAFV3jUP1GrjpZo5VGd7x4+ywIZ5MxHYYpArmM7p7QgEkU1lC7UHhvLTDc0XV3/tNCEikBxKpHJJU91xSMsP0Oxy1Ck9WtKrKsJxOHDE3pAdCRlwlq4g6cCc3b48hTTBqNyIWKxn/0D54dztyrBJYyjm1896E7XjiRdnMM1aHMq7919Cqay+g7Nt4rO9V1/+0uTG3Ry9saFEkfNVY1mn3jPBkAUgsE7tkceAV+oyFIsowkXRNfJyE3ro/lrVMNgJVrkXYzVR2mcPo0MY7+VS9051GFkqTDFmonr2DZflBEArGGmsIXTKTCwa9MSwKe3ethbLpGzrDLmR0U1wTHIMZenKR9GF4BZp70m2g0s7y9wjUoJBQKqH4OLyoF2bX4qJiOz/G553ODPRSibPuJka+IDJs0aY7FxMJ6HENoBBjh4uDfNelgdrRKPwJ9tDLgD3CWtUL8dPsjlqxblim8kuveqsyUwN+fI3BNd3At/sIg1qU93FFdSM/Qtw8wor3Jho2wJeX6MTbvRXbHLkKsOq+7o+5cxaU3yL4LsvL56es0dG5xk9jFjZwdumTIzEmtq0LHSOX12s6xNS4AsysNikJZxTH3WLdxyEZSsCiQ/R6BsifxpyGfxjCqNmUELE6Fi2pH/M93Bbo1HRxAqFOid4qu3KJuWfh5KZdb6fybd4olKWFK/msNHT+hkSmVVvu5/2ge1ZbkDGKX21QaZgJ6rI6tj7ncWWt6JGl2m7cIZNujh+jyew3Z/+WVc3bSjOh7WFw9TWZyjJm32nAPj5GobfpOVTaAujpOgcJOuYWeH3O8kmUg6XdwDgVoTBy7N11SMdVKLOY4w5NS3Mh2nR0QeOzLpGmK2bgq0JRLXuHOF6Ok9E4aJZ6HbLRZX8X9/9xlivyXchIZQ86cbMd2NYduEMLNzhQXUnqeD2A4vJhkvYxo6e56ueYtzb9iFmcj5KyVLg5OuSnyayPWOMt8Dagfq/TGj0lLUl7uMZyqVhieD/2Pt/q5MKf9McSM8VgQExgNgEF2C6K3XIj+sICzk=';const _IH='6927b525e3cd352763a6aa432498e6d1cd046ccdb828619545e479f58f52a8db';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
