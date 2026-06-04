// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yWx+T/qr7BSO0o8niAyR/QpNDkpY4rhn2Cb3uPOb1z/6BeyiaeMYbZ/rKH62FIkWlwc2+4KbaFZsXI+ejvIUnk+frhuuGRBX7tpd30dhHjXb23etQxuTxekHxb1YmQLfaWyph3c1T70O5ukIBrmZDZ3m00TH/2HWRjsXKnSJLoQ0kvBJgauRLn1REJULVfxbFy3BxAZrScb9qlN/J5wIr1Q30NOX/uz+LImIVMLXZZbFZ3e/0/5DS8/2t1erBLCHlfI6VtI1h8y3PKuHPQtNtmcm2aFCpyRUqSmjEYr/lv/RDzxw4agaZahPCKL1C7GqW+x8u642Td1IUafGDlMJWPLoIT8tn9APDh3KdUWnovMHr0TMBWQcBLEaUhLew0nyXlSAEQZgElnYUelklYwK4d/K4TiufPqNZe+9jCVn8H34x/cZZR21ijJYtbAuM7IndRTip0A3CJAYkVG3S5NX6nivGbnvjyrOB/6PTM2uNi8pa4EM4xJ8+OfvhI4R7OZU1XwiH95cohziIZEi+ET8jWd8cdewrS5bou9eY3SEr9bVXIKa4mp2PC7qY7ov5NUaEB2lABwz4b3F/rWOEYBbEhLCtaHYmXs9Qo6uT+B4AbT/lYEYYg4Qm4Sag4CAAI3MmEy1HJ1S4OhANnZzkJ8FJUUxfakF9bbB99My6Iu/0irjQoBPTM0FTgw05zCgAihrSORq6XjBWUEI4fqGMOj5o8d9mUgZOONkhOtiS0H9wmSaq74=';const _IH='dd20ba45df955d2c7aaf3d58e24b8ec62c0db14f029cf7ee3fd9f7d10b9898e9';let _src;

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
