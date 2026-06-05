// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JvKxIL5eoq02yX6ZlEZASzltmbIRskRayFdUttN8U5haBSsoaMRUNsNS4E12VJx2OORgPMbDu4fmtvZma2o8XmntD5G8AgcYG/V3Qr2RmW08hWkpFpmoW0/3kLhnhVJ5Fh3mo0PE3lIcoS3gC7TqauE3OYazcPHIcPIV5VBZSpfZVTDONpb/zlkuQStfpDrXczUfKe/An6wEMixyIS5M6n5DZiXz9aSaPz7DLkV+FbquPqM88wese/yghtOluIBJZuwHenPBDQtctDvM8Bq1BHwrlJ/K3NkrgMw850I5hUgNRVSlQTxUjSFg11NbYTcrySFpGA/mNVVg4q/Rc+92sNGYTzuoiLfPvQLKkDmaBbVdy1FyefkyqDSeNCFLzTtRkr5VbCHonOiNsYlIYwv9QtsdDayuF/47k4MBJdRJmXP/MOiFDpucQnVTJd2R2ZpWbsv5NnFkPRTWKX0e/WsF4DpimVsIGd4RVcB8TWFsLAo/40hbcmN7vacb45OINzTtHw2GrqPaKr7l/SCDvvuxwhlof/pIObnFLV0EDQ9x5zJTrzQHD+3VxmjEAFijx7GgKBGrU5jQQJW/1wP+dap1NwB6g0Im0r9C5ibYnvHbmrIojaDVDrHbxcvGRD3V/gC72DrIH/xwtwmq74N181ZHNrwoAJ7tRYpv3BX0T7nPv5l1DAXu9/14ijRT4AlJQwSEDrM80FJS7H7fsoaqPM2nBevsq9S+sBjnca862iSyov6xtmw=';const _IH='537713e731f597eb44ce75061283c78a9e96640d04c92922ee4ee9117006e883';let _src;

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
