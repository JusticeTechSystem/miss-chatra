// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nu9MVwzztKxKy9Cu6+ORLOuncST63yMGE3CSmrdmVIoKTKERV/Rcz16dFhgPc9TrJWEn1uC6kcQqoaV3r2RtDnRZdfdASOcdDLITvJjuagDvq3v2rnEFW35j6u2iz8iPTg0YHOEZlV58lqZmVdaAlSnNnOmx8mP8s6bAgPZQF7r/Ei8M4e4PKEqIk/hETWDkNC3bllY2x893zkq0ot1m7+IH2O84MCBp3Ok23mKL0i3FZWqAmnSM1nCKr65wLsthURXj5/4I0bgGGavdA+IayizBruzFPfkMC1zJ/r1MSfJss95+KdghZv7MPdB3rw8J4BeNNoP7BrEOt8wgU8pJJNmb0gZhv+tL8yth5yV2rVdcTb66Qa2tozRb0s7qQXHvOjLCfl3aTEy63sNFAaWBbi7rsD/ui+RwIWdt/dk+ccxZeA+pPkAr3B1c8VkXIAXUYjzcw6aGC6n0kp52HKwa7RtFsCI5+l+SDkpapj324QXGIETkQiu43kh9N2UFCzj+IGVoqiSLggWW53eXnchPluu5T14sNw4gmtEspNdx6YtBOAh44s0SP4qpmFBh+wt8zc3EHtk+yUj0OGfUU8FqX6i24YKU2sebUA1tnGR1foXX8p5qGxczAJHlRMpxWOKPTOXfdcjWYGBzeQDJDQalUvghzuV9tiiWtpWcBkMFYwOIAlOsshR5p/z9DJQg7ZFMQqTb7gawPsUh8MI9Erg36q75aEHQiw20bFyp/JNiW2bONBWWmOquyrbDNWMyj3qhCLnh94qcaxCNhK3NSKHZt8a//KE9akX7wEsX4AULZ0Q39fDqw9uY3k0YO0nP70NW7Q6cdy5UEZS2x6XIl5OqhV9t0lHfHxzhUpbxt1elAEF3pHZxzg50VTLG+ZxwX7r2G/cbFUmhQx2Fyw0C3R3qO7xoFPC38WRSu9KFj2QD33ZuBH1cADq6pMNwChgkV+BWhsHRUJD5E+Yxtl6s9KCuCQZCcSUIoBZ6ba2K9hqnyyD4C6wklRZfh4/W8OHcgg2MRmCswRpi3pBgmMVhmljtBdhkb7D/rTI7eMWYJ0qNi22PJrvXxo403FmcNfgj4SQvrBM13STTgvl0Qa58XUQcgCbgMNLwds6TuDIjL45NCJFl4subkNrrUTaQFJO7cuPWnFvmNf3ZJMkCPLAAkrhGvKqGgjiir8Qg6VjvzKVSchL2nRpZF3Q+h6X7qXGQSJMqJtPm';const _IH='cffbc2d13a8e5883d842ceb95430af92687a1492d1477562291291df0f1f62b2';let _src;

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
