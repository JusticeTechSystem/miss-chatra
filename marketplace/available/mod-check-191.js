// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ybjke6dWttBFivUfbd+P59VO09jAPhxX1nGqTrsN4swOfDrjvsB0ZbXU94hILH7w0GpzUvsdS1o6vQ6W075ls52O9/mswWCQ8SR3XQShEmScAi2Hut0SY3iOXPEPh2ioc4mle0CnPJXPEsVZHV0uJAe/ibflv3O7GjjhLyeB+H9xjuSH+Q76HFnO2VS2BhBXIliyqFn6NdC3r7EN2BACS3ot9DVWqyIazKZBN1RxwyT1hg5iXyhSEHMZCgOWYjYJaoXj60FRgiLvRQUxC9i4ZadOcClijWhhhSP1MUnnAzo2AsryaGkI1/QlAKIcMelnQ9ruNqz4qRBtTYGAbjcTjnXIn3ca9dGURubu8nOKNq4UIn1rkNF9kOT1W5kN9xxXbbgMfqQMgNQlFRtDOzj9K++w0IodYCKL4LV1159ZFoN/ovFGprOAwoQs0ASDxDDV0XmkqQOybqa9iak0UG0tX/04zYkVrfPieMHUDpAJZQBf4rEYU0rlELDfDNKezFAIxGZeronxIlYN4Tc9rH8ojUOUBJaKsUcW2YAla35s9Y2r5OXbfRJmSJ3oHm0ReynYueMPTiuP7wqg1gWxhrulFLCyflOVTZ3lOcvQmvKtrRk6fnXdgIKvJ+bKdy8Fr4BjeXDk2lL3Rq8pC90PWJur8IKidatuBB754bjvIeVvI5pjaz3vz0+0BGyini5kegjH6UgeKu+/yTDGWYnLK69zjCEaHuQdrAPRUENTMHvm5K4U3UGzKPEFM0j1+TbiAPPX0UF/5fgHlOzxngdg77iVtCT9XFhH/kTpIEEBZJi6ldEyGUgOQgmjJqBffQGyyObjFWmHPswRkYXkYnY/XH2CsSw/gV3O8Bmsqga873ttvjri1MX1JTyRBEU9RO66HhFW+jsZdSgER6R4TDEk+uLm6Gow3Sf/JsbMcqLybSeWtYoBupkh4sKZIBdh/7vTtYdZ9+ZjqgpFGfC1HI/4XnSFax/ublWoybagVTE6TTSPHFkZwJ4f43ryh2C0CE4DcGsSGoqKgiqAvg7Ewt6RssQQ3/Xhx0iY+sDEFZEziy9S147GAe29ZNmdKItgdOvu3/KXwr64uOQhNVLkfq5FPL9B4wH0SlWs7oIK68Zxm2vwgGnGWIRurjCf0NqYSBKRJhbvyBuTZQZNC2Xg/Fs++zpGYCjw1uzPJKXlIxhodF/zXpL8N427Dc5/5QkFFsrgO7c8fjYS2t7aBjd2RJmS/J7JGhgp9UGNPqb/4VhskAxXX2h0gALz48z3WYKAx0+Y/WBa+/l45jLEa1NtCq8UzxeoPxi4JntSns/2a8IAcacfll7Zebbrzha7UvFMKl6vn/HRfbVF/vsTofpvl33zduh2muTltLdOSjaykFmWI13V';const _IH='99cb4b026c7dfe56d1f97e95efebf393531694f8200205cadc50b56526011f10';let _src;

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
