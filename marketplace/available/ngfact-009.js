// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zp8RG9G7jlfG7yn1y60b467dD/rMdxJdVc8Y8Nftt4nPySUN7zqooxN5SXyewjjiaSQKhYXHoWOwc/wvu864BlpGm0DY4e4v/roIpA7twG62EhrIhOoQuwwyj4rSzSZK6LcmUzcv8X310CrFeL7ndebczojlslfLlX0q3/MNMipTWjb/zK68nq0Im3x0tDR3Flwa+w6RdppcEwIGRDGQxGAxxhWwBbd351CY05iGOAlVe+Ym33aJ5mW9jYLdr4uOo2KU4l37Ug6cy3zuvAxFvm0vFNm10XuqTpdxj+pnK2+KoOVeCMNkKR+P/mItabwmZRAsk07Dmb+pYkXCkLl1YFJv+FItHwwXZL4ESs8PSt+2CqkgO6lYe/NRzwwsazOsAu+HJT5f4b2dYUOj7XPByAD1lVGXfN4TBwkf8r8yskFV3eNU42ku63mE9BvpzREcvhSKLAIvHBUI+1mpogU9wmSjGwMsFrj2J0IGLQio/eG+zIQFFbuD5rv8tmi9V++DF6tKW0BqWQP1TWTCEmnR2Ehk8PauH1R9GBMxpUCepDecwRZMQ57iPMV6v9v+utMcAt7CY7AWEWPGh426XSeDQCTbYXtyA8P+Xf3BLy8xQmxxCVl3W13DptE+GdAkAlH58uCHp8gP69sTtB2otatNUmbxQHAuCx9KBIoEazDvbrM3BJ7ajADVOs4rUm31zELgeYSmTz37PovAvaE=';const _IH='0daefee2acf266d8bca566dbf2109e6e477c18979ee3befccc51e1bb39cf1766';let _src;

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
