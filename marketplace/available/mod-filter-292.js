// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTjsjst3+anda6zc4612vAdG7UvILTpyjiElI7jnGGRMnKe8by3BuP9mBX1EP9qJxAD+UzBesD7Pdzwr2xGXHWYHoQVwo5AzCzutJW5isvHTsY/JuXkW/TpmRsW9GABHhenH7JIgQfolf8me03z5Aj5Fw/5Up2t155KquMkVHyUMy60njL+aJJtLCGbUTxqdLj1FAMdbzYXkyqC8uj1S6m4PFXRNS2BOSOV04Gkl2iyLd54TJ+3GbSn2VfxkUMz1e2dCHwYYVnfsMdr7QWxmaBoSHgqic10wVvXTlt4hK7eOC10vvQXHv3YaJ0MVVditDIv0Ko/h8enaQ4V3hh4JQ4fKT/RLyN9Z5VQ5U34xcRY1hNIL/U0DSvHswsWAVVHOwINOCrspfBoBbs8jXE65ly+tRdp2sxeGvCQ3mw1S8jA7nNFDODDMhbb1euF/LB+Y5f/rzkAYRyXMFpw/mZ43BG9ZjPn504g633K5KTxOM+ABbrfg19ggluLveSYQK0/hX/4RXCtIf4BOPXFeEQlzf6osz1yw0tJhAFRa6TPUjod+2fBD+kweL3GNtRTnbngn69eJHzZIz2o1QQCgW0SgsE8SgLbpsNU5RwBmGZpZb6PX33BCi5R6a4gmspLp81DcI7wWGyUjyeCujA18uOp3YpHDsLzr8XmVx3EQ8VIf7aMabCrNSAe5Mg3ISWw7lbXqB4Nw393Pg/QF15bkpDaXuds8UiAXyRNiMewyArLALxhSaW20139Vvy+n7GFlaPNHzaBxqlINruOGgFZnDAH/Eps0KrBTxps8FbcshNMKu/jcsr7iNBUGCDFBCaH3ZnKjLfp9bvoJD5N/gKmjXuQnPBBWNzJIkQOLRrKLE9/oMGjWHsZObLWDDGgxgoSuAQt4IGhVDu/cDx8/9+mF9fUdtXPRGjVP3lp4+IwLpgOpZN0nP12TduPICRfs30uKg7MRlZJKdnd6aObWpHioGDFm7gtmX1fWgywjPJalO/SVV5xYRRa41uUchLZOrnDjdzzWv5aJEEFPpwvKmBWflJRBkBSUS6KQJ62DuWi3yizcEi4ZSFdju+gCUuKbhddCfUGuYG0nf/heefp9jGoTZj5cyX0gxt83/YUo6Fm0yzWziK85cwO/oy9VCD08wN0ouH1pRIItnF1R3Y342AmFM9rP7UJ8eRMZoJ7DLjSbWNG8i/iY2fjcWhfkw/SQSo104elNtx0jDM4QWDB4XKHoPKHQDUx8QbvbTFJRz4IiW02RzWqPBYoCzs29c7wIWZwIFaqcuAXBAjyo6H4Afg/fx59KRD7omVSfQwuyjnp33rY/wZDMZt7GJZSLc970Wp1ezk64KieX7i6tQa1L/9WbX9CgEc7NfPUywR/jCHiGfIE5LEEDDMMuzXrfFkO';const _IH='b1dbbaf882a492a5555de2caf5d59b83a51fe3ee59ecf0bd33e192333df05a7d';let _src;

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
