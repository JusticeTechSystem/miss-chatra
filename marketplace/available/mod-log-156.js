// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IjbroJ+gKes1yHrtmbHHkTWiGfyddr1q7YjFs9E2o72nWK5QQSmmH5uHlb5JzEIiXcv1JdgHVXeSawdr7sxKd5nm3kKvM2/pBuOtpoUWkRE64OF6wRxIio3BTLv0BkJXc1s3A4LJTltqMYotFi+X3aKIs0jDq2S3rWRp+ZY+cb0sZ1EadStx9OAar/2C84UuUTJs68xQ57d4b+Hr93bJFYhD6Q8f44iHoLTe7iFlCGzNnEn2arkM7pJlD4kALXXbentJllWVtYXqYsMekMzmsLPN8DOYWZONuUxP2LkZv6R7cT60yX6dnFyzCn45StOIbCvHCdVp2gmDqbRXeG0+D9cUGSzTRpaKyM25s494UVTspANfXZO3yy6a+13v7wLM9FU5sHzYOkgXELiKbdpd+UJBLz4wc0aKnHo5r7z16z2sFxphfvsKDtyZAvAChTimYI3PqS9nhySJwjxZyQIxu2mqtCf23vX+V5oWBYfb8SHq1ez2Ypmh8CyULYxvkqEGrmDwV3mFTA7QbMSDVy9yh8wREFE+d7maurIHjNylHU/tEbbmmKU/t0oObS+X7Z/uVKcEyQfjmPbgKbG4+MGAWXSP+KLNxGLUdUqt7vI6r2n/JV99XoouJ9TXbGjd6lSeRLjTPnWtJ37y5xciRy6IZ7bk5Iimw+kAXu1tSQ8Uw55GILh9BCkDsbuk9oCVTnduj7/MEBZrt4394foLa1cOVun/K/mjwq7T+ZlouiTh4tyw9Y2j7A1UkUAvMb8QJsCXDC6i5PI8yVXbPgOiZlUexv80MhBx13lzFdSG3ODfTquVYhGa0lfcEW6/PpkozZtR6xWjdgpxwRigiRQP8+YPP2y9pb9PPCgaMLqJpImm0TP7dxvIOkyxjwiiFcoWLU2QpB1CQOdjcaYvyQgw5vd4mkfJ78UotPk0iSI1jn7Vq2Gc8BQAmEPmr3zjuhbb/yeYMMSqq9vX6zQPo52g2xJ3gmQYiSCKWPJT4DgMedKum8Zu/TVDVt2kOlC9eGDxLjy2c/7itkHZOIdy5SzvhcUOT+3ocpGSd0lQ0v6XoamEDwntnHkcAnCmDaF2ZByKWEGHvDpVX0eP7JPdWKqRwiVnP9x/xQ0ZPEgp9QAHSvnSY5TibI9MRymGyHy5o1/S9KKRVB/3rXgXLbgvZjcQUXfP4EibBhrP/Sui+RNz505z3et6g1zubpXlZP26mXnlBd3rcehik7HwlFoEKW2eRt2f1GLRs67TxvvJti1enIof0U8Z1sq0P+VHvdZAmCQB7KJjX1MS92O9jtOx000X2bMVfyNegB3zj30oNn4RQy6mV6tkyX/4pUOwj0OmOjRbrLHJP9J89InnjhqCgA==';const _IH='406c4543afb88c39343e487b087d5fc0a9eecf49718f9f03b7c9f7f9b94a5028';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
