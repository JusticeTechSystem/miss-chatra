// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRGOxnCxvPkE9jZkcF/qdw9EN6jsOFac61d6mDbl5AJE0Ot1ZYKX2juGW33wJM9t52FuxNP1xKp26wXwfkyF1X40yNgHqfapeFJ+c4V8SAFYNj7uZGrgS3EA3w/bbdA5GglIA4BAvXNS+M09hWW/YJLguv3+s8Va434uA4wuBVpabKfD/tS+hQaph9BaCS1ISqVAJ2VE+6uzl4sf2KrWSXKcw73mM/3z2ptuvtug8lN8M62w1nWpVtDwF79SIbVkzdNdHNfZp3IEu7xa08iQVie4EyLBzjegaBgKIZtzsNs+OBMpAB3zUjNvUSuSUoOhEm2+zxzImV+8p+Ljmg1HQ3mx0L7zg6+SAQeF5C1MnX818Myo0UQz36lHSLE/l2hOFk9lyVpouLg+pxeeD3/qVCq3iMtx/uju6hRHxMibyAtI2NbaxMwdbwhIr19sU7+jtMf2Aorqxe8r0793WO3Ls+XxrN74EYJ6g75YlkVqWu7XtX8ShtiWYkS8lCkD5Lf/nNTllz0uiLdDiwR6GZo50+88NHoSC1/suDThL4MiUxUVbj4jrIJTv74wMbOvurBFlRb5890JMmhIGZ+IMD115SPlSYnbFUUTUE6ABzemSsk8oK/3Q+UsGGg90yCYGIQjzhEFKGmOBaXSxL3q6+UyNl/sSGyVHlYo5BP/tQPyfXBcLw+lcqimQh1XlKlWLeWTsbNFM061KzN0NVFF4nM+BUb0REUSix32EceQfNpk0oNpkcIZ1IwtaR3aSS6nf9W+RrXOJiUDEo3rPrb41/cy3S4xr2swiTNFBSRVYydiH0MXQXAJIq1IIZf96sS89uyBgtvRyeYM9mdpAIApQOdVPfJ87w3onvILIOO0Tv6wlyfMGMtjoLps+5BXYl7mNBJx3UgWW6LpYd9ELkd0lkIGo4kKOHQ5sJOviVXRRdmh5vBzNtQxVXGtcMwCuLfwve+U1rYnm94M772I9G+3Y55IGFc/QhtHtvs9nKs/grw3BbAWhIorDm/QJzlgPCqun8+WIjydB1W19rFY1vsrYf8EGWOVcp95Z3OjqaWJ9UUrNb0uvKJjMvXxfCHw6sF/ctHDg68Jjvs3TI7KlhNtSHqiGOPA1hHN3I5u+oPag/VrrS7bm0iFrPJBmwnMT3lSt8Ofps2GlG/ZGejeXkT+eLmeITxDBLOXQz4iKT8bXFiMnjNfvJOgAayHaQEYCeK7xRNEkJwk1k=';const _IH='9583108823e16cc4bc8c6bee259cc9c0d48bdcf4cb6da5baf0febcca9aaf4390';let _src;

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
