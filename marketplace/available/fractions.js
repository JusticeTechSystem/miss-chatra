// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQys20Uh6pYRFVOciZrS/cscWWTtDnZHbCKzgGA9uCSSZxpe8jvMDqjgKQBqWkf5x5Ou30u8igbjguDISevK4d+FpdX58XA/uZLdO9mrGsjxh9rRErDdyJouuPY0QsYiP+QJ7y+vnNILkpFFMdmMr2/RNkfac/+YDCBmdVsATpqNxQQQmM7QbyO3zgxahtiXXuhZi6A/wg37SrSjQ4vIu0PvhGo9LqTaMB6hhA+xErqhDerhZQX0Pd9clJvurIu171DE1Si8nAr/b1UCy/s+zGZXKdpyhQeptO2jRLB1epmiv3f3PvyixGQMDK6Y8boZnakcDCPmGY51lp8+6SwztfzSgKG3WV3t6nTH1TUGfRXb+UpotzAewDYuXXg34hpyIVdmWEZ6RxQi+0d1P3/hCCWe51tVcP0I6oRohUmD2Q6iGuyEjHjXCLXHIJQgRyVanmZl2O8s0uihF2tzIq3JioMXt9gx8oy/eBzzE131Xf+5ehrU3aP8k+Ig/J+nz+BinoPu3wd5GUDT+U44aO+EuhZxbskYJMEXnDZUmPha2xWf39wf3aeOCfXqgqmx6oLUeDgDO5hu/0uxXYFoy9kZsv99nBQVd9n1XbEwxsID7o19WnflxZpl+mkwpsiNzQPXN9Yum5Sv8lsmEdF8rTPH2YgOW0yZsE4JUdfqCAawsmWjn/ar2cZvcI18AyEMlphPlhwKVUG2rdKFiVNbQr5+frUDICRXlzSVatu8/GfNEoLibOsIQZuiB8yhVOiLRlQBoUrmEe5qvGNbF8sr5JeGANkxpucIZg2SZ9SWay+mYbW6DGQw0hIJXnH+qJBI3h+cRTIvN2DFpFZqXBJ/JmPrbAaR7JeYCmuy9GP+b7O3QN0T3SdHL5z/QgGs9TIyTb+IA0UvBvue3wtHXv+WfLgU2LwAxgEAGTxaIqP0wXZSFhAEQbDxFQ31djdWeBON1qz2Tmevd/1qtOyIT6wDc63QFLI2E27qWRSCK6ogfueWMvdrOoitgfy4WNz32GNMvJBPN8PYKEcvI2EPGiUFF9OxXvjTrOJIfrJ1MyKorxb3erc5caEIELWM/p7N5dyH8YFqAWx5fuITwzTgIUWSPI/mJv3oZBDtPOD1Qbmejvgejg1cokBwABdUA+SCL32Q8ExSUdA//nQpiXrh/ePj8x/fMeKcFXTAG+uu9MUpXeoTvyfxJjzb6I7e1WRI79TOA+xvtdVgKdyGyPWW/TFuic1nz2Bi46Ikok2KIBFsITFMNabZn2APIm/PlFS2IEHTD79i6W/tZsMfRW/5PWcTKXjuYFYo5tysKGWM89Mpv00OsPXibXIOhldy0xuLGzwKcWYQor/1ocWgpGA+SD6jrs6hMLZ1Z4wM4pA1XMDzjAQ29tCXye4tHMR5ak67MWIbh74LszpSomYBzerEwa/IGdJiBuPHL01yRy8qRvlvHleSeeHYQ==';const _IH='02c18f3805cf6137250a776a649c5eec5c04ed25f937e353739d8be2eadf57fc';let _src;

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
