// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lg+Bdq8aFITnyQ+yFUjDbf5lKwPr7w9p6ngJkqBmxijk8n2sV8mIAGl30GRICUGqzmXOwGdYdkwxnmoZkn/KnwKDNiCuhI+CmPUIuNnzcWSga2biuqJ+sldExfN2gL4Bt5xR/nFVseChtc20OlvCaDmjgHMaDUYEpmcngv+4WojPd868oHtIguD226BNomzxjGH3Bruc4WOsPVJ0bXqzVJ9MNq6cWdsh6DuwUtiXJ2ZQ+bOBNR/+We2VS9WLLcXfTh7UAN+ISSdBmRlsdILxpfgpJt8fY7juKAbaVcLwL9N0ObUDZbVwjaucS0k6WVr0wlbtHTZfAS25DT0i8NzKxsdjnvKby0LFvWvWv22Hkn67dfyy77+aBz6Jm46/OKt8OBOqMlYvRgzBkA34zpl1+cPkhBl3Pyt5b7tsZQmL3zdWoVHxlOzq1OSIW5hKDQI3cGRYiXpuggP69bHn/R1JMJkv3LVfwoqBR7w98Q3p+r9ZzerH1Fue+7ejGZeBb0pW/9+oxHV66aktLaDFp+Q4cs53CeVfLg2GU8I+a9rh0Zxe4fW1R8KgdhQdwoY53b3GrhZwXBfFzYGHHb7ud3tS7lBqFEgOZBQJS6Y9OtLlZoQ+3Q7BlS7RqsQ1ch5YtbfN4ENATxmmI/mK7Wjsi7mOHGCR/FUUHTKeM05wOT0P1EESD8o5ZfzkSfsXTM+gxgKE83wm35EB4rdv7WgJ5n8JTS4XGe55J3xi3/FlXTVw+hcDRHAmCig17CQByHoM6CHMHlF4YrOfDZWjHmXA8Usd7VLZ09+9rTExNuQak1v/hmcSwXlvps0Fuf4YHqfaUNGy0uhB/Gumcg588kGNmLnVdivqzUV6YBwALd2r7E327z3d4UotGi9MeeVxqQKyNk4hk9BmgH4Z+tCI91Py8j/J4kRWELosK5ODWlBH5zaAhz+7sXAd5OfpbFw8ZoK19tdqS7+ho9+trC2nl//r6dN09UcSsFujnk4kqfrErnk26m6S+5KIvlO5pisOAXKdUuXKhF6ODH2gldS+oojI9deAXqgDK5VwUk9A3NINzrHoLLAq4w==';const _IH='63cb9bded076e0d58afba6480d78b863b7ae9d35a6e57bf88c76393d5ccc185f';let _src;

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
