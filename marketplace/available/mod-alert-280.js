// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lxHgIH4EkVfNG5A4X1Br9hb0n9ucyLb2w9EMX4PSPCxQzJARiVz00Me0J/TcFXE8P3C6Y+8eRWo7t7en5U4qvys0pyyjsSC/LEwEAJe64BFW9jVyd/7k7rkbv6tvtWHO7EpQutDbYJwOZ9b+UNQVqtm+gtxmbQQuusVkO04nbQCQ2ogri8Z7X/x01CPONzIr9tKyjvIZCbEeVjTQOD8AHiuBUrBUpGRoG+hRxnC/ZFIeFPWLy3e+tfAWyp0BvXrHuAjRq2e5vtGI9hWllIoUq2bfdFsLSrv11qiERcwyDRggrJwjGyzrt1U3BeCJfuzQRarvr2OtZspqrrhkQF8BlCQ4Dd/W6CE+goWhrjlvN1MFa792cCqa5KmoRfqW97MvWi/JV20jxYMr9d7aKVDHNGty0J4dIVuMBy2jRowNA7g3WjBv3EboxYepdkRtn6c9GpqM6cZ9sOrE44w1xImgL0QNa848ZkG2yqu6YjeRBCKWCmvCmBRZ2f8Rxz7JXnHexypDK+itjeffxl/Pf0dJlxXs0aRaDUfOn8oAmYkVjO3jVkRyHVj11AK+IJrOZ4mTimALkVntTiG5zLOMPCaziusSO4pL+sXntujDZ32IPu9ShpdI2WBd35fb2zRxUejwi6f5AAHcQXK4302cB7MYFVucReIwa5ObTEBNLt4jsJM82Ppf++rtwML1naawfzNgd/dwKZoubpN+BDZWKOOpUzcovMatj3NdfUEFTqrR3itZz2n4G/ly9wvUByPTkaNYC+/rewiVpq2sqjFrlCGVEMCvzPEIo3MGR5GVFKiy6WNKUpKcD47skVqHmpJHjGNtLCQ+Ddflw4+KQD2foNZZ0mDocWc3TmgemV8u+lhtVzV60cEMug6uC1Yd1PEqcsHCbrbE0jbguk6Em/ORTJts2KgcezfHRzUnBTHUntXg8quyQM92/qiXFlhRxnTBiyl5By1tXHvBRUvHaMl4/fscFe2LiVALuYKloyorM9rjYASA040gMNWrKGhYE3zfJQ5l61v6Z4GdHdd+aSavacFrUfX9wCLJv2KMmkwdTCrdyI/5+BUH6KxPrlMH/Dfg6bM4q3kaRCi2k/NpQV2/giQobg9cSsfYfB2NRPy9iOQirq/l6BDOOaFTZqz/OC9Tte0azOALDUPPl2lde/At7js/wD0RfD/LM/z/jAN9589s2CALMFxKInVJhiKVQAFaZsNLsNlGt9guwHECYFHyNSdvkGCbg5ecjBevrHAopIUEXsBjd1qBJiara9IC7BIfzralKlG/V6QqPNRnmIUr9GSkP/WQiQBnDLiU3ZRQgLdFVye01v8jeL4DR/b2zitlmBgKjOlH6YWpsE+W28LCKEjhN9x7T+PYrz+ZsII9CK9B';const _IH='4c75130041a0d6f56976f299c07e9523cd242c7ab47a501be5130779ea689f68';let _src;

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
