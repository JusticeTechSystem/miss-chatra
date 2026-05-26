// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/qx1KdJttH1Fyc6orBSQs/Nm44DDj94ZdjWk6rYy/WUKMfxHImZ2tpKM+ixBa6WGjdw0RS1D+5LwueSutadAtmdXpuk9H7ejeTXRfHH4zYPFR2s+lNc48vof/YoXYYIvkhZC39adOW33h5GkUxewKCVM02S4kVTHS1piYAU7eZ7pLsPPxoC6SrucHHSGTjUiguMfz2nf1RJFKtuY8HQW0OI6dVEvAtmg62+bdM88PcnteVHPhOk0kOcFdhZHl4UGs75fSQPEzITZ6g6R0rxHkJLlxQRWtxn6GQw3IUjiM0zX5kYPCc8kWQf8GjQD8R5f45kAGfv/Y7akk8TwO/7JtDxLA23a1686Wl0LUeK2U3+aXFALkmNK1L5Rag+CWfu5zr9/OHDghOJhurBZ4DkSUX45u9Ap8yoFjp57NOJf6v6M35a3E/4TFF7TPiI5XoubOf3T5nJ1dfMaMSQ3Be839EudWkTYDbGDXUFOcBcPkq0SR8Sf+vPOjtj8DQVGhbvwRfXs2xLxIhMgzI/2EbA5/U2HC+u/UszMAXdP0X8PgkZ7rnsPGCcxmgZ5C7QKAHrvRU8o22vATTW5zbQX0oYAgfNd75Tn9aa4IU+Azg9l0Qe9jcnuVmK4d8qaw0WD09Ak37D87SfgbN+ULIDBVlnfUPoIWAZJ2jU0HeE04riz868yUE3/0CaVAmMqKXLQXquhv7AAlxLIoG4BlAF2JzCEUydJvhl6NawZ3mQpx/uWFmGDC18ADFFOcz8WYiBNRzAdbv8POBgNqZfeVwcQQtnLnW5IuQLUIDiFE/dd4in+EARWpLTS+nFAzMfAHdvhrLPYr8aq/A/e7HVlVt6rEGv+6ldq6gRYngAXhX4uxcyqFcgYih/Hb7uiypDCEfs1cmUAE6FxQUJqX0pAQDvoPOGdAAXdU3k/0TKyYvz7LCFDaWdv65qdq/18MN7X6lHVlQm/Yl4b7YSoObUNn8SSmNuKfFaMQGfjTRmbr98ijORfxFi7o97hnqmIzSVnxZbXhJePd6YclMFKiBSIsui0cc9LWFiLa50ud3ALZFDPX/MQ/ql6IyN9PskkKUjWGpJQMk72vs99cWlE6A2e/KDRuK8plSrd6H9ag9pMwnOQBU/D2S3s6nn7FRfUxcBb0n3oKqPXmDYoTP+lqabdk7CaZ4BJDLav8kmR3Uq04hAqvOnM4ISKQGMJm+RLmCeURv+DJLB5TpZu84b3';const _IH='f5f2d32ddf18673dbfba51d1d2a3f6b1a22df08d9584a854f4e85da7d560f0f8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
