// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8x+tX2ocpnCCRBrZfvK0IkWTk8Sgr5V6EgrQXu4ipnxmNyyv16TO3qdu7imppL4ycYa1CkifDzDkjV5y2aBlnoJLGVuObHqSTjVaOk+AFy8BEyP/kxdzTFUXBh8R5G7JenObshyrbZKNmh/UmXxeNjQQj7FNlmtRVgGOsVajtJpdzdkKUn/Y1CUJ6T06SVcfb3joGYA9Mdt6l/XGlJvNJNsexPOWbYnf7ziNpe1i59y/VqMirn8ubaqhi7xhAf9kK0ZZzUeCZQr+rvBH9XrmC5N5p6VqBKa+nPSbskamKHRNJtj3ptjRhwlt2ur6gQ3GZNgv/3HjLB32RO5P2cbiAuPr6HPVuLl+S7/LXr3ntxQzW2TiMFEhVuMyh47FW3Gcs/DEy+ZtzEz3GgTyPX5TycVGOFjhVvaBwjIl02ZlcrocHUv5LRNQYfn5IDRy60aaimvPOB7t0c/9U3/OvmOKBAbYKeH6QjASqnWEP08Yy6qdn3FwGFe8Me5OOJzpSCOTY+aZLKIlOOOyklUj30naisGtjQ2tMfdL+XeqP+TqLfkH3PqL0bIVGhEYXHsXNJ88jOHM5x/yvMEhsxMKULVBM45muoyDY8PXxmZVO/l4mRcjaiNHhKu1Ja2wh1ytnb62gtTuG5/aWPeIj9t2rmFTrQu+8LVEw3wH5gVW4XzHn4pXejgonppz3K99n5BrMx6Cil7B2AU2KALuF72/HWQwWg/hRkp/rxVUQ0vS8QUMlRiSC1QjUo8FlKawXtBh8cKrPSPBj1S17dS8ig6ojJQW/z44KsNZSiecep7oQtCqzMx2lIcZCRlb65+EGHUgpw9v7zk0f6of664EnbkMa3E4vlB8yrm1k9bONaLNiOhhJqpQC3Lz29Mzxm/lG6LEOMjCu427aQ3BK2u0bRmsIienuy7KOeOXyGdEFEC4GbTbT+AXykK7CVGkGZNV11aKfllIaJpNz/47jtg1Vt7xiR5mBN1OQAVgSljePYOV9hz1obYRM9Oj4DE=';const _IH='d5b52069266cf9c7cc697afffd10e9fa32a9a869f2bb490b23982c7566a8ace5';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
