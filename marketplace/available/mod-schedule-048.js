// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G//bWn7Nfd+XDohxBGjPSX5wvKarvjo14HuIiNCXpHDp9DzlWlams2fk1gl7YD46vblWdhTKr7IMJHAh63jHlqL3YQUROxp8nrZ0wTOHq/zLNYjWT6hYSg+YO6eOkt0W+JoZ+uVs2CmE0sSOa+g4d9M8GdNPn51JpRh407J015Vatrt3GBsLmCdoZqNCJLu/dy0z95sdX5DIPheyIjq8hpOVJkwp4Lddl15HlALjfuXLRg8iVkrf6gceFxdcIhYA4Lh7HDT/ZIlifKOCIHz81QiaobDsthu/9yDgcNGFsw5yEs6Db02dVVod+bE/cMeyxby/Vo9vuEkR3K3sWoBovzBoBLjRLHpjERCFagkPA0J7rRsVK1it3IwbgkghEO6+XXlP9mfMevdMeFvF3r0fd9q3mQMjW0Haddk+Mh8xfYPDV43ESA/vkiU1+Kbmo44cC2YA2xWlfvxSEcOgeBzKPpUpXRInusDiNS4YUTJGtLTqjdSkN5vAplEjCSpQkDkhTwssFVF2Le9h50fyPRpgZSbulNN1fdQcuEg/RxXEXdWQWbmCSP3cxARDhkdYgRwUwSMfmFMKGS8aJ0fDZh9s6+kzhuO9XIhBy7M60ZZiY8xvxFhWhWEuP3Wy7dTqT2FoJHCqSY3kPyGZFq/iN/rwyRN2YBhoqdG3Nt7/5RsfAHMQggpqKarehFxj6E8gqX6jn9JbthkQ4feG79gZ2+8wgGUL5HjNRA80Qtk9DDrvCS8nY17BRAcKpAyo+/RTxnQ6bT8gC/KKYs3WSJ+0USDhKZIoe8TYXoGxfTQwjTiojiu1lIcjuDX/kYkwtBCcLPGEhOiXfM6TWbYjIdZYC0yWCwGYNyaey6ytazLVYeFNI+y4LQiMEF6QjvFgG5dZwTsdv+TOmAGupawzet2V99xPY6I2+pXYFM/EpvvayOtzQd9baKpGeA3LAWlAQI2TvHeIYLMLYw/3aqvphwBLEHHre5LhLmSceM4ieDvaT7pUGcMFtBwwpRgOoWiu7TQlPYLvYKLSSxD1173qLWifAaMfP/qb2MDwj80/0M92NSniuc1cMbvtPMz02Gqr18Jjp2MKX306BBz0MbyzoAUFhlQrAO9GyvlUea/7KVdR6XDcA2DOfSacZI36jqzHiAa2BK4+xri8l/zLGvxRYSfhFI9Tfo1x4ghbFHniIeOtk54UdzoFi2cJ/FcmW4Bz1+3+DfX6si2QlVXbHUn0JNT9Cn+7FghNM4J9SF3gYikaEKJoVpdwMK2unIVQAc8Ol5dToROc9x5tZ95D9JKysR3Ua2nYFeTjakZWphR+AiRaTWM5parFW7EOke5bwqRNRpC8BiOrViPK5lF/nmZV4UgF+9Tv33HFHCqj2bWhHv8ZZPQzsR4YZaVUkrjJpQDKb1Fg8CUiLSNVZT+Lwg==';const _IH='2485a149a45bde20a6307013a274fc1c7d5bd847860a69f9c7b9125ce7a741ca';let _src;

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
