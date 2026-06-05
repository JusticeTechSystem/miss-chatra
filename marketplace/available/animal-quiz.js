// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZskUR6H+Oc0ywSwQ3X+q6S1+Up6D4mUQ38RADGEsjW6V6sfJw4HcI8tMkI879gDeUS5kGMWKdBW+jTx7IS5Qff/ZRcI9MywJ8xC1t/AOHg/RgaEOHcXgkVamagXfdmQplSr2HX4CVlHDYF0xY1HRfS0X2ND0vpG92YSjMM2nBYsB9uxoyMVWQx/jOFnzScQ9nfSYNpjUtEZzq5Z8Uc5OTb80PxSeAMzDNEOdbVN91aEgb+FOEbFVhJ/qauPqLYqCGnn4O1NvOLsjJ0aAwGwahA8FtRtGoVGaI/Qk+8pWr2piOpg0LYjkWd0fEiKxuHqcjYQD5r9nfOV8D6CPj0cy1zi2roUd1Uu08gojj9Y1Ar5r7bsHii1gZT5Tkpb9zBNfd8rtgt9F14ah9x3D54k64kLsVHvi8ykxtBPAbJlqM/0rDjUQBdLDQ5vkaibb2KSNbfG4rnd1xNWXsUqdaLPj/MMDj1p7dIjXDW/61c8SNW04Gn2bUCxCFGHXGx7WlBeVYwbyrJ7DDSA66I3kkd7zPjaDD3E4xu4NS5lC9mVwfmkQS1H9urhqRMi9oZuUPSOU/WJXonf9Xse0cVF+9rXVTOVqq6MAx8cJUO1Zf9xYqsOKryCvtbWjoCVrpGLr/kb5n5hGRelr1zr0N7df3HFxSrOUm5aWkIs3U0px+VfUbO4/CzFdrgkoUXJiu8bJPtMoztmrlkmKmXN4wn79rjG/iNs2RFyTAkp9fG7kkw5WVFFndhkbXkUiXQksWKJFSX4kwNICwnhcGf+2viUsR/veb7ib+SN71eXLskdR3a66hcqbx5dofJyhyR3+PYLbpNz2LwDlWdkSP7RGsNl3ktACosPnJtKpheTgfiusfFNHVTo8oMDGE0WC0zhvNlAE5jQpQZ8eEDh2+IBwnQIOo28XwNo2jQPgNSscvRFdC26bu5GF75+13TGG+m789Xt/tTqDqCpcUYnxBN3PE7m3Gm/QaVcKP9YxVUbjB1Ovi6UMci2qCdvXoc1cT1ZQi2+atRAaaFfbqsWluw50MY2a3LnjG7+t6C7UiowYvNEWbVQvmC8Q01WU0nY13DjQ/uSPJAJ1P+5FJgFo1dpaajVAzkVcJH3X3U3kzu+hDf6GxazrscLcRWw1HJRnPi0I93C7xoUDpzCZWG3CC5gzdzbU/zSTkNZvksmXJRmlE4AoAmWDmrZb5skNgthCpYxyDwqH85dXoVtxaCjUm4W47ykWEHmqSIASxxhPTQdDQAWs2YNwj4Q5GwXx/O0lKL3ooWlqvN/XuCtc4ikKgKsZ1N/GlvEsU8Id8Lli6NCoHAMBj3HSMJ3cUs6sLNFUAOfBYy41WpePQJuAd36In+DJLq3g7dNC7xoYkgqgjrl1P34ypiSPNTpyjNZ+VW1SpqmnWZgXoTWJIFO+ez9CV04P0I9VP0hOCYCBd3M7+c0nQNvXnHlrbCav+unZDky4TW8U+QkGUUK4iKLGZ0zNK3QOcWZdMeQnaoCOnSXHt+CtbhbO4vGonw==';const _IH='eb77edf4918c995e99d8f3f26f01c99d73e4f67b94634dc4dfc7de04cd22c2a6';let _src;

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
