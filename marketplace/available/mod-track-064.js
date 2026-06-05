// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HQ0NQYR8DypCAsZ1e7kkLnv/G2iTHr1dt/luVgOo2tAr+9m3YeAoHWKYUJHAWVANmJqx6KIOEDWBW+jH8jvDFYt5xDRiFHickatFJUbf1sqqLXJVxFqLwCXQcSRsBfUtLfaDX+OrA5d1OjX1dl+lGhyIJlk2WDGnZBVA6FmjqEjYGH6OF51034c3E+OdAbIoXWNlsDGzkZvWl+WyIwnTpYxIXrcdlrH8xAKBfOxkACwfvoqhObZEiIwcUnhOFsrfQPCS+my3pjFEqSGDVGQU+Kwf0iz7KdFlbpqwrWUNDigrllMmlWfZNSe/A2ntm+vbfZDZPkg1ZDiLe+tl9qWT/1sh3w52HkuQW/Xv1ANBWVPRZF0OC/MlqCBdHW/vQcJJe6GT0NvFvGdbUPNcT/R/7nXG4r+q1vu8I7tfht5vPpKt0iknNw6/Magd/QJZ3J8z5YqJFC5dgzQQn0IbKes4mW+pDbaBeN/lkFOlskQxPz9RTP9iPogg3fmCMqzkVlAxOIOParPVt9q1BM5/ABs65l5T55O2rPOYWjhpEkJ5Tk/ZXEN93288c6PrIRDO9GziCWu4NbIy9T/4uosWxN9d9w/gqI7QwQ66cSCFhtM0N2DKbOouieG/Hwy+tCAwNIxA5paQg+ypykEEwqaZcuhgd/mlsTbDrm7ExYJdSq6pb5cyFjGav4pa850kVmVmTCqd83WhNNi7lxPglg+PtH2oHaTrUo7Kw5JmEqYQ79wYGJzkSsR/iq8hxuL1OhbASopHQUzrtCoccAWsHjd7kMeDHY0jMxdntRcvO6gy1L2JgEcb6neqYHzujx03h5tu3zWkdsZfZ86dm97ORAvOKNcYpyVHFtwPCe1hLAaYHLv8t3o45/XZKpllIgwhNEdo6ML5bC67mEi+A4i2LTILzFfb47fRzXQ0NCAKTrPLjm+BhVDhb4tuyVs58aO3VPzXRxFm2typVExmrytSWTFHOxDx5r0YoDvVmvOcLITBzgarkAIIryByo1R+vOSDIRIaeyXQY49NFSEmiI1F8N4vTyiIQmioqXqCtx8Zy/RV/iXssOB629300gqOv9IziHjgbWh9MVVS0UZYLrMePcXVbjk7Z3h39amijNoldZ2u2m3U5TVlvpNwKjOsKU6JhgZaKOrIUsCXrpRNUH0ZsBTv/iNwoNm4E0PgcIEOe8sNvEGpXxcIYk9M9IgcyV4HEiayKe/M/SQcxXh8+kcztdeMHhPpbIHULWF4kZQCiFeGlQ3VyNCd/XPZAnr0HVE05CjwACrCmXtDspOcXTvcKN2Cidlwlsc30272agb5LkudRp7PDclK55q8qkwsE3D0CnIeVeYxhowoWzQtGav7I0u2/UBDqkoX7au3l4WbHQ==';const _IH='1d5c6ad887469586b8758bddd20fd3cacf3afe45252ae4dedbef2f11baf7b998';let _src;

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
