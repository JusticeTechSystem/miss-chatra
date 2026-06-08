// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AwCxDHTeVAy2OhvO8ayYJXTzN2LWY41VtLgkvkQ25BLbhbEcuM8ZlRpOR5y1ynOOg10DtSVAdGgofevyI4LLJO83QIKyGUKEJJw3gQ4AwosPWUSbfTxuUM6ZeA005V4AcFVugG23RsThEZuje3gx0l+96uLefzn9FBEa1YoYsKW/Yp396Ju6pSV8tx8xVYDESd5dm2O6KtyxLNLH8vs0qsYbtG1YFITPjGi0jkcY0baZ645xaKUP+zwNCABZlGxM302kYTEnqShzjFxBVVwNY/G9AyUcBNpJ21uwSAHH5I0BOkx4RteE8HhM20LY7RQ3fAaHdFhI8Zr1+W1Yw7bna/igCav1Vzp3lT6M8/4a1j+plFG7niJMLnMwy/CH9vj+extjxAqW/VP4+4shMd3MboHpoYi8l7wyxaNlQ19dvgZnW36PxhGMXYl9QwPvsnuCyf5YGpYTMWHJVTje3C8D6ANqX+b/s7/jsIez956Qc8LZLc6JnjwoY8XrgOCrYSE7ES+6T1AsL2EXDHxFPnDtnBttiCRmDFU9+xHR0I0KA+s3HLkEZh7sCkAM6r7yEupXXw7JPD42J/pgqPZItl527xmbLOX5SqK6jgwoh6cufv+Q0Xq3wLfZvnk2QMu/z1Kq8Nk9vLUmBdrWvbFh/XPHIfPze0xoAeQXnFCB91DZSceGLcCFqaT4L1OdPU/ApgUd8FbiX5kGB0UPu6T9U3NnYkbciZJ7UFp1DPFIz7U+alFJW5xS6EVC3yzsnK6eMiiy0HuOA7cxT19XK9Pq+obx8AxYovzcb3nVh1eXIMlwosw9aKRkU95vTSB9D/PoIgqShR62mi25s8m8MLtSviQg8y6zndl9vyKSEKxa0A7QECQEvYy4O5VHzBs5SXzIwNQKtY0X5x4SehM0vw04M+waRCzpTSmgEIb0ppEKwZ2rgldIo/NGZKV1jOuMT/bJS9rKALRw8y+JSuKwj6YLLeXc++P734gEnkJBZmhHFoMV5wYU5l4uuYYQ0hJPvSpC8tLF0TmOXtAFeCY=';const _IH='300c62e8e7ffd64c2ea0e5d01d6f404ec10ef17cfdc7e704ad91994a43ef241d';let _src;

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
