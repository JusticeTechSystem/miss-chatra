// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RMOD0HGAmxGQJlxx6LWBuFG9kmJXdN7cc3ISCPwZeLIphLGtN8ZqRTRbkZTH2rOk07eOvPKXr7AH0najMyPxz8QeFqcA2PWO8bWJL3TKepkxRZbrLFQKz428rrTd2XugdAjdtlccNlRnxq960a0Kh9zFfk6jLhvTiRY+ANldUiQ++gBfK1BuQea32AZeTVB0gT0WgAExpK5ha5IUdON22FAVH/TWpZabUvYdjcShEC2LHdkV90WsnNzDoBCFrvaQmb5ewx1jTKOk936Q03eOR17fSn6vhfinh145p+8BH8CGeke9cjnJorIilsmjeEW8xFD2zGaVPrVT86NdLLxnS1ah0Vc3MLErNRUWHZaWDdotYVMJTo6YtzX1aaf9iGcB5vLQ13ms5fh0QXELvlK/jNxwvF1TfY551gINn5IY04qwARvOpfZYx5uaj2r39j6oUrJemhME3OBWTvaAQ8JCr71LxBSUbC6w8oF0FSEng4nHca+Peq6TZdXpMj5vNmDiV6okM1k+NH5cZ+D8KHHwm632bOp7RdKR7RwROQQm9RciQIpm8cBSlP5Z9YPPxEMsM3sBGRIZjRvscHy67Wc3uuM82GRObvN/oaEOgbFiXYZdyErkzvykKDyGSCEJgGupzLGbHqK6j/f8tdADTsEz2SfSWsOjGxdnfQVN5KRD0hVEjhrYq7q1KPWZ6dW+S9shsepmvR7CeIhhUieIKf1gU9O4kK3buPpD0L3FBnEcgeh7ZonAEN+TwQwG38DVDYZ7LWJ8BDGe78JWlEfFEUw1UxT2yxqwrz7j77bZ8At14o75TUv9UhJL33e3I+CmpcMSOpP7C//ecpAuAGeoOPD63SsOVCi5bqwap8rXdyRuWnWop8ELjEOh7wb4FJgTR4Pu4gSBS2QahLFZNOzLY2akP+ha7fFDkBgthXufMgeg4cthDfVRvGCpHf1lEAFabs1Oa9Dr/es8YJy5WKP52vMHU8A1yQCWLIlyVLKhQ1ZExspec06OTr8=';const _IH='4ea264a1fa87aaf43522d2bfc6cb3bc4e4c29c8dbee126ffea45dd96988f785f';let _src;

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
