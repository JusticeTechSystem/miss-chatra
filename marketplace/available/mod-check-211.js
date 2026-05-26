// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x3LCpoYBbglLUDnV2vudcF78WPypJ0rwGK8sAo7qEJANlAnjOhxBYbjjJWvq/fdqTJseB69xe0fc4ux+ABb0hizoMeE2l6Ak3s3U+JgJ5z/kbyuRhsd/QhZroEJEXTy4QKCjlzcseaYpnh2DOOP8dZDCVSW4wJUBYEbHNtgN2zH8t4ON6veFgtO1QSsVGf+gxDN03ilrQW65neNQIGR7t/vMefkS/V+kd4HbWa5o20BW2wJy5PwOFaVyxMr94HNeOqP+zKaAfSNNQbklMd0sJLK29yzb/uo+LEK52E9eRsJ9G6XCmk/uuuDBucTvCS53lHoguoulLc1hdzcbe4/M+Zf1njNRdaVdZUdMDN7zoC/q/1DyP+YoWXpTj/t01Qrh3gqwyactZODKNy26rzsc+0DEUn9po5AdGNKktNJzCsMsnL1tgiwd9q/EAsM33M5b3Y9KYdkRKb93Spp67bWoCzxnggpwVvloo22vJQcBPYcYVZfDKEgQW7thdfGnxh8Eklh52k0IvKyjsXxoh6vf5+H0Dj0ef8gJ/IILNWY1HwU6diIAMD9OGB/wBtZzUEgiuly9UI6ZRfSqy0dINaFnpQON9gwMQyM4nzg3KDcqP0W6GsDXQ6XadIG8tt04XUTRm1T8ZLqO5z0MOZskECChd+JhR17uvDIFmrs2lx4VTMGpRrAoEozcKd+XngbOvqPV4OrAVxmABhnN00l62ed0PkM+eiz3vnGw2sn1FVvxo39G9fdOxzun3j+h/TgGFTx3aUDWxkkLb4G4JR9hNksGnoXA2/KF/vnR3gZlaTARbnv+MWX7igNKjgNpP+xLeICkWla93zz+PpsHmVsAyUGXDnLG6BoAyxfrdc8aDdrRx4RmWWOQOR3zP4UbA764zkgXvCRdH/AIPc8mtf+N4BQ2jV1fK9pnobFuX0mqeiVJUegXz2YsBStXMrYbwo7oYnCAYRI6BGJh2ImbhvIiZ4hH1O3ZbT/CvTJKEAZiwBRq6kxbx118diG5nZCS/xJZB4BuuAYWE8nmxnqEutheIX5UTQeCVr1KxcO9NBnK1yE39M0QiKJNHGRf9uZCSEHzeEh8/ig53GbtKWBEVfQr6oSvKJfyr8nRCZDrl4GXL9AUP+FLiggxHJxl+KRs9PsmhV2iWTsdTvTuqkEfwHZzpRuZ740crp257sNJ5ojp9OrIAVDPlZ9Eqy6gj5q1oFWw1wIEcC7VbQP/Qm+Hrd2T/OyS0nGlsWqrP0NxPxRE6vHWeRQSDXtXSwXWKDkD5g+cYHYwvXc9SsjDmYsD0//YgFj/Vv3YlQulZ3tHK/mp2YkKxPsDjqgzAjj+wXAVkMX03FcHVhLVfmMENJKV8yF+fQ+dCjuvjM7pJN/LH6BuUpi3';const _IH='5e1192fcf25904dca4045ae8884a5b4665ddaa800f99eaaf7d5368bf9cba58ea';let _src;

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
