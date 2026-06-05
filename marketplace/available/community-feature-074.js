// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ejNgJdxzNcDNgKek4WajNg0FvEI+5oG/NgFnZw3Ljpg4DfWaJxRNAdVdwr6vEzL2mgJ9mPY5uyE1wLeaWJpZtAl9OieoIO0EHsvSrNrltBP38k6sA2dYSI3fTHv0jEghWCgpZmXzIp8/edBKTxJt3dMurFb+3IEqgHYdQ8QOAzlmOeUq3W6YTfFjButzBay2wAnP6IHdIqzR3jOEStkwGI6x0/gXIIMNvygYA8XmPn1Ewiy07WG4NOKwkX6UGFqN1OowEzXDb+jImPdOgYs886qiPAAHhCPJ2SBRPo+JQK6lJyb9Bn/WtwhBnVx1kgHPBXSEhqFamk/zFC76nIHQp/Jpy3S54+dxkp3fMkRbRrDL2jqVWm7t6R/J74f9hFn1BxTjyvqO5JxdrXZxs+xI1G1wAQC4qnjxSuG+5dh1STKLErvk585ZUSTI9NJohwlnTKR3iBQRDInj2XceIaAkTjadzDbgQHDfs9WgGcJQo+8NE9MBSlfHreG10pW47j7vP6+9lF5H1V3BlCor/Yhwl4KKfL1SKNNYeF6fIFbJn5LLATlL9OWt2BTCXZtWEJ1o+kT9wAnZVqgIztFG272VGzc8bQL6MmYcN2bvAaQQY4RcgEH6CS3UP/SgaJGLJs0FmfD5GGc/0D/YTqBYvTYJo5y+RsHJj+D1FGJ8LvJ839AkcgaPXK1piFHD+EkdlqxApJjN2GVuYDB7raJt1CKSKSm6p9ZWkTbjM2HI/AJhJAxTIg==';const _IH='b3de935222288194ce5df16347a24884ee6bb310e59d37d35e45b27261ec029b';let _src;

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
