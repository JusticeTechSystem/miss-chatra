// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ug2NAfw4XlhmZNEPfhbzLOt0ObgGnO+Zt5K9d7fDK4yxroJ/nO2ee0Dm6eqHPbZBGkRmXRPNrasRdSovMObo1dDvxG7/W+L50SzIAQswnouqhaJ2S449QwPC/V+64GmKltR7feiCxOtCpC4ZnwmH09tfZi52ytKy6fp3OaL1PxcqUQQdHl8eVrlSEVfKfjDyl/hMKV6UmWfScD+R+41Yam6btmDfPSwyywCuq/4qqjyjhc7QCxMvJh3q6itgSoPDzbmtIvEq8XtK/nSwq+o/VadnLgKh4eeZG7ScrnbJXg6viY2hSturZzgQo9RrHkZlIPYMvk9UlCkJUL7jSjx4/SWxT0FxdzMopVn4tezMXt7hoj609gLxZDui7Faowp5IFk2ppx+vS1m14dc9fNJGixnAWEZpkd5S2ORtYHxZStkgaYZmL7GCoZHveh9kh0E7mocvnwLwCCx88G6ZJE3So0lBaomT/YJJbSxot0s+k72pXdEuC1LP+cftYnKvZoZbGqez2PDTu0rAdP2dgpOWxJa6fJurfTkix6WLCYZ7qMw3xWOCmyrt7fAaUsUP8tKcpcdEhpwzV2otH2Wqiy4l2nKHDSaIidCuryUxX2fLBpt713ghvQIyO7n4wdflzn/JP8LiyMBkLoi70hEDUWObbqQoujfAZAaZ/YbEyLdhNAVIgPR/FjXV9eZc+Fau+Um5DQ67rMWfXA57OdA0a5P+jkYdEYvWthrIuljLRBaV939H6upzORc5B4vWK8D51T8t2qxeTzlD6jzKhDfU1bK7rtHi+B2QDS4RXNujSxBjVwHUj/UypURhbDhay3miMUZJZhaVZP0GCXvClMiI1SSephU07p3jMZHqv8G+oTy/f13U+0bHmAPomakSWUbT2Ohmv+F3qhIhoh+UHR/ylXC5PZlbbtrdOOlTWhGVhdSv8dJg48vahurs8a8py6ZXXFAByVioAqDC44u//uxXpaAsI5+VD+3hnImLxvvpQmS6HNIF3ZMukVU3kCybzyR3KCvXGL1Q3soUGm0+FUnLh2LsbaoqHPxCQWEvlbmWWkQaYUBRyYGQh8FhqF65WC79HVO1DCLLXS1WLnCAlCsg1XXFnxyaxfWZmZ2rLch8UbyjAG9ZerAmaKQiMJemKQl2ethmRBAEtEWlcuZg2a1Gdce0bbYvJSdKd+OIFM7F7CQwneLq5zuKuuICNBNHYRRAYVdfWEwHf+HK0dakpKYgiLuEOqyECAOCm63Uf5Nrb0CDFjbO6rPV9qXgN+7hBYi4WzaypCF6XUR9uIg/+qkOni7lgQAAnapcUIr+2wbWtb4RnvKRjKdW22sDF6TPUvUQatZSSAu9E8DohDbinXldOTsf21OpLNPgrYX/7jXN3ro7';const _IH='780ca7dc87d919ecf56ebb779265342159f144f55acd744d090e221fc2d1443f';let _src;

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
