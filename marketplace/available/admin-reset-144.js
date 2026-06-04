// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2Kwrk9c0YXbCE3bUVf5YNild/pZbWWuvpQX1cZmvDTUFxbQl7tCqfwG/a/cICA5bdJ+vHwbt+jYKouyM6+pd1kXlDG9mEOP6c6ylFd0hInoFJTgMqyqxwTeVGTv6MQVrtgGUw/k6JmE+LTCdrtbrQ1WfXAdJu6OHB30QQMtRgIHYggoGqCq6coFYriiocnrOnsRTBQGbJrQLeI07sbEhZURGHsazRkqtruW7E74ExypU8LP5EWuH9cj65J0T0ktzY8cuOt5E0njYMPR3SIEfA3zeqEtPd0ss/F4XQB7/1Jlta04fcwUd5zK1RJeG1uz8h7lFm3SJ2XHlmJjc33g3x/fSP10xz/8nq2CBi8Sh80SMi1OMwUUnhWH6bLLzCIV4HwJ0mVrWmGvD1KYa3iYIkiFIKcCNVZPouH7+sNsKhuKHQ6/TlSZvlt128BFq3yLDNPPfp32PL0xGaHLMmbiivhRgSB0NIEBpwQ0RGT4PvRCf4+CVntxMkDpgqiFSjbQGe64XnSamn9uCnJMhAuAx1ZTYWmWZYoqbtMTkvZt/KzfZZLOd2BnQjQxYN/HgOz1O8FoTsfblg+az1bUTW4LLNcf4mva4jrNx780kP51S0vhPkrjVaNSYYZlV4Ul83ZZ/IjU5xeKZ88OsZv/cGDPQ27Eos3zbB/mkUd7e8LlZUJbt0kfl3Mtk6JcGRdR8+SYYcVAePhZWlwe49p4z3F3eS6b0yQQQRkl+4o9cGpn41cX0kfZb6jiJDmTimpQ6GLJc+Uf+Qo3jBWTa2hQ8+glDs1IOVC80GfmEEWvQHmSwLlxbPSptDxboeqUciAKBYwqHjRNv3ySs254XCaELRLAldGgJUoQCLnB3OLnFQMX0J/QWzNr/9XE5L+nn6SY8TpIV2R8792syrJ3iolAX6at7l/JKZArBib1ntFxCYR4gfezbEHDdKcWNKKuuJsBkdm7xOK1bMfrxWAad/rLDVY8bbIZFBePBO3VQCtCcTq9K8p4t36GQW3WVFKn5';const _IH='993d2829b4cb50fb8771decaa5a8bd3aa3021f1fe496f64408596acb517cb449';let _src;

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
