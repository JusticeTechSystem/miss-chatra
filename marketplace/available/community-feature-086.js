// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+SmWUZ67n5ESFG85CDpchTUYXrBqjcN9z4bQMiaD3GFDu9PW438/aJr8Z76yMpP/KSYDQnEY9XPbbDfwWOvK506rAQ4pextFEGti1/LC0w7VcK5IaiBSIvxzSYawoxlICDzu9KT5uUHKMatSTcBelAienR8zJLRrrPLDhVf66Wgm2cFofkMCzOQ5V2fHhTc1RIgi0dzJBL090XON63G++Jk3LiRxQ+QLCWTn2lptm0ePfujejDCJPANscgH5ohd4l8EKP5ADGLHJTd1glJos6OAyLZGOdeTqkKU6xvkUhGdzjzuHwqd0KazVftElLwzFbTG3CPluAUNZSxxHkfPWF6PmWsLSsyXSno2tjdl63GdYkjPZ3/eqBhTD1cgLV7Som1w/1PJnpILU0057XtX7B8UhrOVh8eocGVqc1QIk5xgpGdZPMnh9tWF3tcDjrrxW824VZqJWWOeDR5iedTwNJdyD61iyXggqOVlFzH5PgCMeO6iO0cEvAlW77hgCIAhLtTBe1D+jmFzkniw+oaUBy7VtyAEfZv2AafdZhdIGC/TIuBcpuHDWyXQ7GJjoS9BrL4FccQ2udXi+Xd5dHJFz0a3gTCZ7fE/QXpL7/UBSLg8eEn/Um2XHnIqaKMAgnmft22+E46jx0HPQPj3/JF9BeAj5wBtWRTZEcmbp2oBOUIEOsbZqxQaUh9CvsSenCUmeyZYHIflJDyD33kyudM6rtJO9NNA=';const _IH='9b0948c75ba768d09594a07501d0b8e7044fd702edb2a982b1e4cc98729bf29d';let _src;

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
