// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BInYhqnZE+MRF/xg81mCQQTS4Ajv0CR/XFMlQgAZfUfgRnwWvMq1LG+Qz1UxbwXyS5odFbKCGKvKlC+59cwodRUw+017ESdkEhhcCQRZcdE3uUVgvu755A6OUOs3f+5Ff4NHOrY8+B3Dc2ipZ9K1GqHmOZp3uowh57eJulsbD2mzT3frzuE8lA1htec9cht4MUHwjGm19MXoSmzUllUFZ7s23UT3AaGHr2RHmptw8dsxCcBzqK0/Dbu2RGFi/Jm1ZKXwnIvFWUe3wtj1xpNMSiINUNv0M1iAmW91Wio0lUnL11xwwzs/x+fdpRABdte73WNOin1HWkP6WF8Dg8e42J/au9lgbnw36mJUcHd1+FfO6n/VMhHW3jXvCUSRj42UmvfKAmrY5JZHqmc+OL9DRDr4RSkfNd0HkoGoHBTo8qERyWgvPhXoeYORxEoBIwurYI/e/mtPFIwSgYgkddlaJzQUkGb2ha0i9DxmGzEbiC88D3BE4OaBiSBz4yT3BZGz51fhRD1gL7NMaPgzHxKbzQBvXb0NgW9hMF2ngjh9TkF+RnyeaHUsmAZTu7HJRbHMMgxG4RoVDRYPrT0u2m21NUnQqVuHGaq3JxwxnWD9ZRWEiaG97gzjxf1aGJkKl39c81QseSve4fQR0PuqH4Dr+R/eOBKiC0EO8+TN3fLQUoZQ/ciUJcq5ltWXB4PKxHWdfqUZPp7CsJpEMJ7Nb5jdm8GM5KZg4AxLe45jXVnNR/dzdPhuJSLoXB3mAmTkhy3FWR8Wg36EivQZASYmu2rlCBpbz/GQc9IkrGXC5YnzkZPlRviuEPLzQaqE7y6sfYw+CZvU/WhZeHwyXRLdz4q1sFcwNm28Yup0cQjZdtSRD9L7klisl7BN7VJw3Daggr+uqXrPdkeflfzVEyb6WfZM+xXZ6o8+wV1XnejKr37NV9GCNT8E2K4HFkgFGd0=';const _IH='b3d80927e3bb149c53a9291ea370d30c22c4033dc256b4a671b8ca0bde2cfd09';let _src;

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
