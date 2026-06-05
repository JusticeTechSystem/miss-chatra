// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kvL6LjZXTxB1FLkRm2Fc+EQJz/vJm2NKWMApmHZ1Ok7ZShw50Lrl7xz94ti1uVrJEP80z4R4P5yZN041OrzijrPXVU7FMyTEYWo1cHgrdd53y/BFO9kwuWoILPm4sDGmWZDuRkjMihCyFgkCyqjq9oGC7gDEK+AKSfxcTp7zA7lFsBa60/fGa1I5TCO9fzoVNviRiTyV3sw9+IlDdO+7mIWwRvPkUucMBpgKuI4543l/VugddnOiQwGVmzn+jQs6Ei9ViC+BfebKBzbEblqkW6eNdR4HMcKke4NVMJ/ZHM40hORqyh6u9ffLMIEHaMjGrU+NK27PpEBAiIqDnRic3zzgj2UxgVqEo3UIgWPvNg2+MbHo6/wgNqxzCs0tGjpWysnIKGluTYsL/csmSGeEfef9+Q0uKyGQfdav1Lht8+CWczjetpTD56pjbQ40c0PosUAJvlkLgo1ElhbKoGEY1p2hfCy5IXTOCUlcHDfaOn6W5EV0VVuDAOMvc5kwe/f3u4+eYrJL0bC0a2+lzfMQzmaWBl1+msqoc8+lzvI2qUuj6gFVY+APc2w3Lw+IhoqDI5zGRbxIojof5sQbB60KotNpFm3lvsQ7vVy9agtHE8ByCG3afFNcdRFIdkeCOexsqkVTkQ5sdoOhill4OYINIwyItFWcL73i7OmydFaaOgVmKW4wNtJH9jy4wd4mwog6YTrs+H8V/8DAusbt2aCMG3f2aB3Kr47CNlojaWNTM3Jk2mpPLNMlZMmkq6HxBMcuvuIRum/8hlZnY5vCtGnSkk5eVyNfqNLQ1siGg+x38AGW+ffHTAqBP9+kaYyL3Tmg3rFOKkbe78JpioPAXB2MpItOUZ9IYWCvUGMw9yREwHqvwfn2Iv7rYxjVgJacU7VYn/Ou5zFkAPdEPl6E2lsJPxKx/CfHRSJQro1okdAV85kk09VdaVrboeEF9i+bSDrHCQVR7Lm4LRGuT5QkYPlcOG1MATTAg7DJwhDYNdZ04wpe4V2zmIjQLUYYnSGZigctBB3dQspc5COSSPpTXPiwbn4oxyHluR2m1eDW6OcwZn3i5OChow9VPREJ1K0LQA2yfXZYolIUlrTnc3o=';const _IH='72b76dc81466a49ea57c44fc920d1065c8fada99a3630da08b45ca0244d7f6ae';let _src;

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
