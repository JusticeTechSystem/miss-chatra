// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR9YQ5eQJLWIl/sk6YKN69Mh54w62BYmT0tFd+938Aka8kMnuVokExiUGX3zsozC7c/Y3kstQc7xqW4wL4h7Ptv2KSUM49LWCbzG9/PeXJTEBJ1/xP7HD/Fcr86s5PDJlhH/gHnr9wjJIDEW6fdgnaiYeQOScyVozbxGciIgBFf7dP8Wsi+9SoW3nojgacoTzbPexCLH/gPVeKAI+6pq2qu915TwMEujL/hMlEN7NwRZCVXk/CKJxjDE7HuHAQW3Yv/Etzym10xEnk1lszranWouKbsLeeRSWXV1NYDOcauGJXSLXKXyfHSNYJgga4sTtJ8+29yXnviNKKQZJIlSVW1Wj8jUaxmjbGi9JKyA7425TCO7lkkWtgMpxl3L2CvIf1xIf0iDQvrBJ2bJQzEl7cITLU9AnXrI0x5yPk03EV7oebANYl0gc4ytBRvpwpUvp+M00VuPInllyqXTKQGndPVW6LlZSbvaqCRKwrAeo7ZP2VuAjky+LJzmjWET8QRPwlua9k72xM72b2zkdtbWqv/+HRHI/Xg2zg0j6qylENOUiCzX5o/jQsVZmsEJQ/hOBJ4mIlsihWU9gNdQO36+NjZdADlfe+BzcxL3ikoW4skqX6n2AJgn86/Dd+XGnHDq4jsMvepTSBNt9apPLGjKAHM9AmEM+ZRmqELZvH7FsGZfp6b6/Z9yiBVYxn/SJsFUkFDkbf2mFF9utiy+trbzRG/FqdDWlwXW/ykMNw/JsITVVbqoBiiXgo3iTl/phOzZa4cj7WWcdVcRcKnKEC3oPkfn+CwTdaHtbtgu0Ertkbl143Zu0jxqBSwNCPLHxVEikYqLFRt5cp3fDD0UaVj6CPklwc4tOSrP2W+9R0DarbnD6Wm95CRWsHIDXRij/bCZm5ihpYhNGqObmHUOkgK3P0KkYwgItpxndtr4t+3Uq0LOpH4liCgDsdBKph//TJ63ww01nZ05bUns8v4vXWzvjN0Wu6rXYSpzwXi0A3NauEJYKsx5WSCDJv7T65+8g4GAR5peFPBmVFLZvMf5Bqrc42n6954iw25DOOIDu430yFi6qU2X1nnLbVGVbAdVtsJHcRVutjUL4ZDhuFq/b0ejjIfFg0v6dkZ3kRwhbP0dUc7lWDm4tIcaQ9usglKgN/EPzPT2T91WaGdM385d+7yb4sGAbnylc7RpSTonoWmy3NyQxrGeBO53fkM8KgvDG5ntoJmMcQUqqIM1YjEzu1C+Fn9acmuUgqjOs6R07eJUWtrHnOZod6sojFyFqe1m0EFQxB9pa8okeVjROJwyTuVMbIDnxRGe6/Aa3izGVkwldLRjEYBMwmDqxuRHit2kR9BCrzimiUUi3a2xC+QgD817lGUVtbtf9IbDlk8++tnRqw=';const _IH='c5de22c3b2e9e8f4ca34e54cddfe2a29bc0bf5a7587edeab0816e7b22ef98a8d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
