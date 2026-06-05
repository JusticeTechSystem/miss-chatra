// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h6BO+0A6EmwIZpXQ7s9jbNu1IyD8bKCPeyTVPe/azDNyPf8VmbR+1dNtfCwccZVtiBDjF8Ika+Le46xEPEVH9aWN7SUoVSsvqpq9ZCywQDckg+niBv4MUHNGYiF7vdM2djepeCMkF5lRHO0uvmSaTvFx+13KO6eaw3MfFiAgj6Ro60MJ9P57xh60cN7Q5hQHJlF7EmLZlORH8flEbGSaxuv/xTNnRBh65386GGAUeyjNXasR5JTNwceSwb0kIveVEDN1I2pUwmXAgAnC1OAjKjRhrZUG6TwTXgQlnGv0uHc2L0M5PghWenLWMVc+U+NxChpUqu+nXiZygSFQT3kZh2jJ1SSQtkMn9CdtQoExX+7v8/DsZY7JJJy7x+JQa+TwhNIPqnOvBmHAM+OLKRBccihIvfInA6GOe0h+vA4sdPZYrsIUHwcQpumKFexDzJgNIOZDEYPj36jId8/O0KLjsKSGVkTSvDqX4mAv0HUKdK+MD8Xtda79/5ibSVWnf7JykS/L7uhx6JXKcs/G8BzqvexjZxOdRsg9JwvA5H1vf+WdcY4AeYZ64KfeFAmuXrCKTjA/L9PIFf1cEfc4UrrYMAZYKy5v17Kq4naHuozVXinhronlN663I4FfEqyxjx9hUUl7eOFyJBFQTgqB6TNyXv/RiDHWrs9FXCt0ov1EmLMwU4uyoK+LQxAPrWHGNuImPkBM4e7si1jSSDg53dXK+s2OLde5G7BcLv6yMbVLxEdxfvOpAKCNSGsVIcppOAt4gDs2RuOSCW68QyYw0UaNVOtMLokx1iDK48knaZMwcXY9I+FIzE1IUNtVyBnRrfaqVD6PIcPMEpYtaEDEKJyYuwUigdNnlqUvQsUBNtjbQWXAv/Oa7QMoai8UO3G60X6wZhyYAsYJ5yRAYMHHGnCMPsNJoKxShxV36WgQ46BawhcODXIj59vw5Gh3BYX/XkBZr7xbVhW8Ief6+nYNhpzkMMo5uFcLEuHcm6GYVQqMs1jR0G1d7In5utHjyZk7AohWJfTAB8UyAM5pHn6DBLW//oMdCuN2spWYT3rk2A/UN7ZHQAlV/7OgJ5Z/lEXlFaX8hIHN6B+WvwgAumkdk2ibd7phkmVoHEgZqu8+UWYPeYDfKSbqIubvvL6+ZVUSS8w5OGmcVyErbfU218LvP8Zs0OpZo6mlWa7mUf7BSEiWH1eJpDpcfu2JN3z672exS7k=';const _IH='74f2c7bbff942eda8c9be2aab94fe9d0c295c523ce83f6cdd48b803fe136b23a';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
