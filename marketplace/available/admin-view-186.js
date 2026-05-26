// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Lj6n8+SwpBGCi/2dJaRH1OtrW5cjCRz7W+9x3ge/gPzT0LijRNWVzIHOH9QIVp7BCM2SBOCydpHmai1TI0fW7lAWLJ0jUtpe1Lkgu02zZFa3M0JN5OzR/RsLtewHjekCcQBrUOkjP19UOjlv1PWeQWnxK8ANDgN8rMAd8eCWWb2huIVjoCzRJbl++YqgWCj7lGvj7Ie4WJIY+qJNlKAn71ZtgEXYWr7uwbxbNISiHvavdkM2eIe0znmm7+uYdEMn97BLA9wPZhe3Bslt+Jc1gdIJaY0yty3dNyPSEkTaHQkkn3mhMAB/ltGGlSl3Y3Xc2Oe+DuaSbuxAW9jhpzyJzueGU0QDNOSRxfjFeq4B5rrzY++cCAdr3wEZT/abkTPhaZ/gjEHuPQPC5j1gkScra0eIykyUqHEC4XiX88T727HRq2rnL6cRp7AAcZMvyaRgFedBdyCcxyK+9uFIoltvqMobb4JIZ9pa6n+uvQMxFLMvIvkDx72wkmM64xF8oVQLmLWYLQ60cUnWN4bxcT6cT1TVV8CDf1N1p7bkA5CFONpj+Gbg5Fh3mLmm1Tbvg36QPGDyI5f+e2cY9zxNZGIj5fLx5V9lQAtJiY3mNtgCWY4nmgNhiRyYZSYVm22Mq8mvEJusX2Q/8WKokaShrm89LocfO9QXrTDuVnm1eH9I4I78goTUSl3cHkfzpwGr8+hOsR44p6cTEPxgzQZ1kdnDHQ/2R5NLXhLp0hvHiOlwr6XcICUPolap5innWXm+pm902L9KUzI+J0tEaloBpeOeqpPQARZ6UiVobiXbt03CYdz6oymZuyR6BXxVqP+uO3WlQHxEJWnt7Wp3gSLfvs622Ig7iztk7ua5sS16XmEIaWumZEsX78zc1zDBTU3xaprO0E74HCytZV2l7JB431iwMcxdgGHyvOUeaYAJeB3iUR8LKI9IHciUnOai4k/X3S4mhcMc5AvRinMydWtf6XOeOMTrcu2qlMTmjUFIIelFjRYaJyE=';const _IH='37bf65569a12d7758c19b2af851d71619218c49d4c34fbe11d15ca101c98ad5e';let _src;

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
