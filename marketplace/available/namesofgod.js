// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E1LXBl7ZS4+9RrBvsLcv4Ppj9Yn+vtgCTQ3jdZ4r111pvxGUhFMDt9e5nXlgp8OhH57QMx2pMmNoUi6yX64oPWKfa9W5KGugKQJ1FU7P4GH0w87GfzyebqhIVhbroisjuVNn99xL5Z1ZgkCwkb27zYKkNDuB4WOP8WCDR8XTZs8YI13pROTH1lud8uYei4SN+J+CyvtX4jNC7WPACBrj9a6YBUvnm+fCoQGnKssvSaTCuTulH/ueXjIzY4OAIVCDqN+6+uAyMG+JH5Cll1Irq5Rwo/fa8DZP++HJ34gDm+a6lqnAP7jr32noq7EtjM294NBiHQ83SdNnG1TDxSeKw58/3qc4CvvmZn3mA+TsVdDX3lAi7IgF1RTaztySFF23VWzwBjWhk0R66cb6wEFPo7uQcUUCpu0s4vhOACuRgz8Ce2a2EQEz9AA4pOiYk6fiG5lyADlUwF7dzpqwWxzazWj59mgmRqJJqdFCqMOT1tVDtXG1/kT/yOuP0Te2c1WmF5NwO0dBcmbqxz0LTAfikpzY+ioSrxBNBUJSSh1QR0cthRHl33eOHPjUeoVbQv2gNSZKXOTtePXASt5V4y2nkR8x7/Zb42qLJ0KswuJuvYiaOYcR0SOyD7dRMfFmXQyLSAS8oT3kIRszZYai7pqZEPdVqnWxltnu0SKDmYhkpg/8s2zXo/ahp2ixtl6XGhJqs0/qSTYhFHInozmZy8QhdHx/jMR6eTSWg153KIruo0p9wet6S9hIZB8biKvtF1ha7bm74ZMz12Kh7ukdrPqPkaIDyaKTSJbonQ00aMr3ERjGMggIKRbzfg5wHgASoHuD44l7RgQM83TVLv8R1okFP64YuYfAszB21/Nn5JRSzHFXPEh6uoKwppim2GQx/LC/YEn+AGSlyFA+YH0T6hL+JDjIJS44r4oz6fJ6jKW5Zj4Q/BFdMq3pceIPiBDToAGW/aDMpSVUDo3ySeF7oTA/GTxuRzDmOOfhctt6OYn+2t/5Jd3Fh6uZ3jbwjGHtQ6P4juc80e7V6fDvYbOC+5qWlHyPlFEMKYkEGpAoMTqdeBBI/z9T2LOwkyPByjzaObRG5M2eomSN8EhO/p64UIQTZNJtuuvdVpkWuS+9yLEOzmiMU4WcqdWONNYvY2xxdGSmGMBWY+rUYWDxwPCQyYZVytSPHrbyMjL4XLFaASnkvr3NLiwd7CmmYQG/o0Kw0OinJhK7';const _IH='725df9ac131cf263ca7458aa069980f871306cfee1c98020d9ceb849554c578b';let _src;

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
