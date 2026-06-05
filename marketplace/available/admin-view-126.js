// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F4Lp0tBIJMzfsVwzjZqNWTABTSo3z0Ad/DW0A2YBMP4KaVyOOQU0yQbNsXOkIkBlBSGBk/ug4PEdAWPAMqOVQ0ljX1VE1CU+JGr1UOUYNXgwXMDYcmcm8hN3J8nFtIHtIEtRFY3HebZwFmyBKU1VdzxeuPyn9Z/J1XsqAwFIflW/nAusL5pBEHsMFnjgRMx/3ulLCFtnSYH6fbECwS1SAo6Z7mE9vGVA6XuywAoqPwLccISMw+754VXeseNewKG4Pky6Sz0iEZfV0b+x+RN3m7jFAuu/t5THJ4484xFohZ+o8GCXZZUaCvdnAXccbd6inOHkwx27wyqjVmRcZ4jdOI9+FUPRGzUmmjYXGipI/DRgmcInRfKS9knBWNPR29sb0PbSJYoA8x8hIEF00R6SBnWbIQV/jC1rpCIIYm2bpEFRW2poBUPDNUv41TfZhZ0h2gPbjbRHAsjbQkMcWHRD5HAnnn5KVep/kbNpBFzgLP73SsZ4/XEJ+5x/+8skAq7zk8S2MPDFk9a+NeFsS/0gCHXe1I50clDIlQ0UcvT/bwY7doeZ83viJUsT+7gN2TdeSJKes0MJxCPswHnvEOUZyTdOf2Ev/X/iHKamEvF5UuhiLi4TlcIsmjP2xFbSwAVOLj0P+z0bGpzF5BHgS67igTJqkoMvxvfWeDvZsFYzpqXfgxgNY06i56Knm9dtVD6r3dQ1uYkUIF9j40vh76v2hlbWqBl0eEIjE/9TFBnEBqIW41axKs1nh9YmmIMCqOITra0LqCL/Np3dq3a3TQdZ5IrFW+DWxnRDqaZEerfiAF8/CvWl1AMOFWkYHNad0fagVSX3uTliYeORm7cbROaWQ4CGybTYbEQssbOuPiwPqjGI7QGKi3T17KllhgmSdeqJXwPYw8rcqtuJXNyatF2j8KRrOCvCUmPNkVMI+vFyqPRzPwsZgj6SqurFxDCjgtrONs82C/i8oXu2Y863+aHFhVQ5TmxSfxrVdVUWQpWZBAVzBH4=';const _IH='4257f0951a6aba0b91998630ca194ad21edf18e2dea02d2fa49a16f9dbaad307';let _src;

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
