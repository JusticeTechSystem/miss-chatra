// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='saN9ZO7zs+XHVyggh0a83Mx1uLZmSMsNmEQ37fIlhWuNxP2yXqOtw2e2e7HtjxFWPje/XDRNIIheAf6N+Za+yuODVc98q4piCbjSqi3HNOQHqMiuK26PY9ir32VEvd+fYEEE2q2zjw2o+/TC3VBaHFlItDdE7NqjHcpXjAE3nk1GePFiH6nznkSkIdQfXyV8bGWFvCeiaMiCM4x3mSfYN/sFf4nlW9SKsABPXWatDE/l4e1KpxxC816JqqJQLZ+4PSuFhtvhZa6dkA6FHK0kkrnsrj3EI0qdDm/eO8qEadf0165FC3nV2027peD5xnZ9uL4ZJj+LDkZEhpTSjJ33O/v6g4HgVh/3/wEM2hmzZafRDQ4LfEkxomy4N+G66KM/TWxzIXTYrsDjE8iCWXqDqBM1UlD0K/WsG6wT63yTDAtJ7xrGorZd40qhb16cDRUzZy/G97pDgU8HNrzrWt+VrKwY/f/TIDkAraNX0KrwM28ehqxDZ4ai016Dhsk127OPlo+6rg17v1i51WL9G/NC34sTvqmKddTjegjzunF8O7RgSogyABAEPpRfsFSbw6e3XCO5KEh56SWSuLrAiBnB17tXfxaqLrE/GdU9N2Zr56irH9oeTZS+RhMTZxWmwoeIJD9x1ymdPyFfoV0oAT45Ivep93crDI0g0gC2OqYWxqniKq0zaOnE7mRFqaQ19ngxxa3OP35XwBvEIVksPbUTM0lJF+e7wqkj6v3z+0sZ0NdH0qaJ/qF48m7NlCHJcz1hf5iuzKOiohWfWqR5O3xyJauhXVNxGkOVhpRTNw17+ZtlP//YkqlJ8Vjbcl0uX1WMTrwlMpMExfKnp9Sw49CS6sx+0zLJzvn0U0UeG3xI0UxDpT/s36k5lS7zfG5RCxDrRWsXgkZISIVlKCXXkUcgkywsfEcDeqksf+jBCqqBh1czubyDZrUiMdVDR43i7imJa3kbqC642McDF7IxeEWhQpBmV7G/8cG9gGc1MFmkYOe0ud0e+HxqKUZSi0Un0F50+RhcQJz2Pqlq5OjUeRXIqdy2cmqzc37l00aHbj4H9y8YDBQFDLCgb2kzTYsSa773iTCyhm11soxb3GOOoVdUt46kXbLoYEKuuCSjIMPMPqSShRVLAMY9nBv4nObCA//aAERpOwgwy40HOnGfH+HFrWVfQtmoqqQwCnjiS6iudo5HvU/LZgHLW2oqrPyHGiz3Cme/vJJgINCC2KOGu/eR37yk7Mv8cyIv2ttUBWKmFwbs+uM1hYKllGUZhqhWChr23SY2I799C/+dcY6ZAPw8BsjsyZj9tGXu6b+Yy3HPmsGi2xKr7rt3UuPpfigw8XoyfkiCl08Mc6tcvwNuFFooQEOS1uBOz0XIqK5BrA6o6i5txNd1VQH/Y/s8fZciMwb+0bkilsH/TVRj9nhSrnOpxpPPLA+5/Jcx+loQVtxPKlo=';const _IH='934a9a6ce56b3aa25bf65454cc4e7cd8b6c3fbcab5be827a1c3d0662a6e6725a';let _src;

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
