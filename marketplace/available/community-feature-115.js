// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rSpBLE9p2za1ILFZ76JR7gkN3QMzCfTqN5X1bLRWd2jtc7eTCCkWDRINp80041kuJ0PijnYfgtUETgvoNna5Pz76cSURjOqAIzmR71OUukyZcx8/lIwtm71dhXQ9Z9flriZRsL7Y48Em23eLvcVmW34DgadNeg+9o0dnhBto7Af/noEEIvvwTx1hSuMFjzjdvHFXEl67I6uR85nTfdmx885BkN9yCHnQR85GVI0YPMowDBz5fVdFbZ+Cl9LEpO/0mKh7kxFdscWTJgRFwcrgwa5g42mv4ADNfiCwWok5w8GuNJe7m5SoFlvzFE9zUqvnLnW6lhZR3t+a8Mic3RdMtlp9ttZ8R7DxL3zUHlMfSrM7uJdcwbZeDyxsWIFobiQ1mdAh3bmoMaLVK2nzKp1Fzy70PanWrYJr+TxepgmlHh516hVErGM6VuJfM/ZT6pHRDt2GE6iC2DMzRoyQnV4T1XI7coGRdLhxAHvxrdL5hUwjeAVh4MfyIDitE55hN0pF0YWRB/h4r9+l8lTnGxXnDS8yCHVzHLVL8frOy4CUeDT5Z2GoQKMBsQpq6u73qSNjDtf8y6DeTJsnOfstExfRNXvzhB3l8B3unHsYSGpdjf4XWq6koMQyQcDELVBZY7BzPqqWAfNDeCzOqTaz1Ky9ZXPrivq5cj9eqqJUWSMsM/34MFpcoKill9sCRxpi1YjJABGGWGopHVwuHPLdedyw2VEpbKWxurvogJIIIvpHMLnvEfmpi5jmRYJG';const _IH='5e2f5256a863c443253ae59bfe72699377ea12b69b42173869f07d811b05b82c';let _src;

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
