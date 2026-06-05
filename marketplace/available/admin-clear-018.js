// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eiZtm4On2HIqGyvSLNQyyjndGK+odzdfmNbH8XBXeFuLxccNp+CI4B7c5f8/y79euG8874m7tSuvjJfy9jETRY7hP7Uv21G3W4CL2v8H+Kab7un13cSOzg+e/gGLcTZd2xMx39Odof6XszOqf0PKNAGpnROIjyI/796mkoa3vGMnOVoFCZ1zN5qqAJ6FIE4M3VP8A51Zamkxw5clP4aAeABLSh4Baq54E8EBO4PC51R1OVqz1I5hCaS8AeX/f9XvLCE5Lblb+3XaJ2MSIgHAny2+OeKzY2mJidIBliW3r4PL6SUvwOwPgsoj89b1Xz40YIluFvUMwILYDxGp/sjke/prG2u1mdiLomnEJlVDnG2iBauSPpv7x6I1Jz6ckpoi4kez3D3koOClxp1e19WSs4ZOptbOAKUHeiQMr2r+3+FLwoNKAG6CqNgcqGpyDtoDi/bSJarO/XZXzjtAU82HPmCfJ1xR4q/Cey1b5G+kMBo3TtzMOFr5vtol2UpR0lfDd08ho7HOjgw5w4xI2wWDQxcmkQJwdO5pvDIYHrP3eAfb/xsWWsM7zS/nol0QU5ZqDTwMb6UUHr3r3lhu2pwKsbOPInsAl4jBkdGCBZ8EU/qPPBvUlKhlnRw45D6CH6q7RzmuBM9iUUGko7EiLQ0SkwtvBK+yKFMz1Zavnu61p9NlZkDT48Dc6T3gV7K+fDVJbLZzDRMKSiuLLNy7A94PGjVT2tZ5YXVyDFrSFH2aYa/nAOymCIbrJ8iM1lTNquYGBdE4UoEZW7wEy/1xTVfoO2nofotX5x+suBKaGJ8ZT+ZCHPhKyrV+Y38zAr3RjHBVOfS1ZKkZYiw4fowXVlDFMZdttKZP21hXUfh+mf3nKD5I//FNIgHa8x0LGB26yip2uK22gBn/Rs0dJ/dgQMuGPI0Kvc4MKlx4mflWVD5jqYrE6bU7syTv1CxHdb2IZdxzvD6hBUabry1i7otOlPtlXRN1HWyDv9bhMA9H/EARnPn9kSvzXG8=';const _IH='a95298ad424b2077b14dfab4e0902c5c635d6397c102a789bbd9bde9aceff9ca';let _src;

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
