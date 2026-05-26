// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G2NlXdMxCkDPJQ+z/5GlGexngnZH7nicvB32UbjtTQHLp7CBnru2BFtNjs1gKNx+2bk7tpd+WLNdPP4SOyUGcjPmAh7Dg2DaqNuE/91jfRCitJMmgkr1B5AKxdV0A9FSqfKuS9f/HyFAI0eW0dbptAtQJAwbevm12xfRGcGDVXpEg+ZbfMTQaBR2nvazTgOR90lQ0LZwqXufCtirdF7WqD8i2nsUVb1nroW9SbwHjHaNGfRof2J9/eByL4aLzsvB28JhuL24UhyoNYlo0AEK529YLx9uFC4gToAFKuVj23IJSyE+XLI923lv0VOMgUPq3jzw05uZ14hiUUqN13Vb+viYERw/YJfCazyqHG2TklkLRIszQSh81ZRIJpnLwJlC+011OgXnSfnVj2EswVahXf+EWR6c1cVOmkMinURpEezHfOObIlmREWaQ66SO06RStrmVgzk7i0K1N91Dp6nE2y4QwOTdNW4iH176ucSXulQxGGjwtxm3JceTZ/eowlrd5RgwKRW9tAIEoDYBIVpMlGkXyJuzl66lltgw6wn/dXT3S19DjEaDd5HT1Tbx+BcGS0jgiLMqhzeLs+5aybIgmcXbxA7Za6vaqLC6TcrLkzC2rw7gTVet8NNfuh2u4p8WBHoBlLzQXcQGfkxg2JeDmiQvMGmyWSmi5gBoo+u3XLyFTAshqbIxobkXedbsBLbj8418PUZT/yuwySK3cK6Kaa1pljyaaUknfdPSmrlRV0+U8iJ19xPv3iMk8n4kv059XJyjHK4s0HR6IX56Qr02yvtRvleThB/jyq/EFjkGZ2XFoTHAfcgDsEOSLsX6CuVH8o+CbTmcug6xnXLYlsOjQ7QkxzmkwOJdm7v6/NJH4F95Zp3n7Qex6UAhmqYtLegihhB8h5E4c360q/gFlXRnOMsJhbLP/tzteV3om0NkhuKMUuIQaCs4wyuDGo0RTARDmSPlrt/WcpWDvZ7zZkS+PIBXXWYRkNSxqvvLdjbq2lM78no=';const _IH='e5f50fb7b6417631f5f4f18b74334915e9e7fcb46800e3bb1110d956a947f907';let _src;

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
