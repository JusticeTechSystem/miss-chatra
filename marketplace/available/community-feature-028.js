// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Fn2sNS7Lyt/LD7EV2bXw8Db5TY+73I09Fg9WWvhIDoiwPxOuDs2wQiesgeQJSf4g498JzB3CGYYvzmLMWgyBoB6EoSKuZSGTKCFuWTuDq54/JBk2Sw353TDdVopQsFA2sVS/INd0u00usOT/nAX74Bc5r9MZ5hglH3Focw4k+cT5F4LyghXpj40QEtLle8a78lSraofNeZ4p3XEOR/5qLuc9IgfzO56b4LkczSiLOL6V2p2KTW/WL4fzM0c1UpPuYyRHx01M3tDr6vQbZ5L4iDyQBFuQG6ZQOPAz9rxut2Cu26x+malnt60kKB2hZQvdcXcS1AdGTSGY9P5XKgboVIRg+FAdryYKAdbxtw3WitcSQlXd4eW2n83CeZHdtb72s5sbN5kEucFU+P5EsLgD8bxhGSYAZC7jwDNet9bvgkxg1xmXWonEptqqdZ2Joe2lcPsmlUZg3O3ICE0YDHw3XiOFTuO1BhyU0NRUX4draD4gF63lXrm+zgdjBL7SajjHivFZ6u+5P69OWaeYTZPGKcakBvKO+i0X9yhrZHNRRCelp/Iio8DRgaioMbsNUyuSD7m1WzVbmVASw324zNBN/j4GE8CCV9fo4nMSC1SFx95q/+49Mzfv5LdiBUoeM7P5/R7Im63nL0vXMx0mrQ1VLXnCKamEpWDWneS37iRdrdK0y0HEkpcgjG6+6PeZe14nEGRJH3pQ2Zo/B2spTUYAif9e5IbC42YJ3g==';const _IH='d5b985d0489242b89d59c7fd81258492dd163f88e5f29fdc976482149c0a1465';let _src;

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
