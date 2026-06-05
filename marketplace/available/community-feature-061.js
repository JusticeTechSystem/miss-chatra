// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+k8/Y11DYT/38O0zX78oZCk1mf1P+OYAmcydVrhmTJ8fbTHMn6PZxPH8UGV083+x4dtzzBvgek+b5RrJKda0uToU33i4+7nXnQ+acoYINMPnmsR81MnTXYKhiDDujWU0Yi5S/BeLaNoZjd6GjvW5QAmaYIeq0ifWf02URnGuWUxdq6Vp3UPCy0ODD/hbTgQXKCYRsIsb+QdZRqphhuHjU11pT9oe07qnoT/pMvI3MJ151EUVN2mLO87cC7hm3P8pp4Pw1K68Lmo08bL6ZMqY8rkuQRddCT+wNtcxAuFAsBroLZkQf/uB+CLkK/iocCZ12TP0taNjhvzU1CGvo9ZGisz1L6Z763brRdsdwrvTfB3NotyQ/n4PAiQzPSZipYjXxrIuouJOj9DQdiTYKUwC8YKYRbgB8/sMiJiPb1wvbCD22oexxDZtppGZ1ejdHAG/lMHKgxjUo0cKQSHBiUDKnCbsVE+nd2dcmHml3brkFFOag3LjnHPxpuVpwxupMyGdd1Gsrxy5ImjHb0MbYdkWLffXailfBLBvlZV8v6JCgXwIpyiPLxWMOlkbTio2quXtU+0uV0PhOJXRF4nwc1w5GRmuxGdNFCJbV3cH5jna4UfDeGNb7lGGbrX8AGut86LD5HlMyKdtm3Z3QoPTpLm6zwOkkt0umYvqfKoplH+vHJOviBxNnhm0+jvY6g8asmhbyra1SvVTt0d7PFV/eC8Eyxhf1tU=';const _IH='ebdc907f3ec57e83f0474c07556db0faf97c2d0bf663d79b31961409005a6d4f';let _src;

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
