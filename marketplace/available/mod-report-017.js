// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='49SAgosdRFzD0LhMjdFngXcyqI1XUbhlDvFPUMAiU5Tlf7N/35UReZ/pJFsIT7XvFZqOLA0C+c3jfLq+MoctogHvVpxHoc86YcgQrn4Or+bxLbIYGpPFInYaGFNkLgJBRyiJn50GAFIpa0P/QQumIEqEdc0lwcytsLkXPo9on85PyHutCjwxNDW+t7gjvZts0dOfCJ2ftxB6MvT/RUwMYA6HjQFWrjw7tb/mye9TWBO/W5BWqGD0mmgwmFMg1vAy4lh5kvtYjBmbOtOXWuEkm7RS33xmcok2qhmOhhZjhcsuzFb0zpHJG6vnfi5XA9r3btBvAVATlhARVQYCmmg4LTAh5xU0WfEiMRuyuxAsFGo4wgP4mvBre6xPN6v179VAIVimPnE7L8LU/9NUQQjqVzvhJteNQNBdlcIi9TzbnIIsaMWeQoLXbQ684CwcakqdGrrWkU7a+xFMTZq3tOjFj8dXErOziBpN959EXSI986uruvtFa2IaufSqDk8Ud0btDd3qQD+NMaoguCOnGspdbEqnLYyo3lz9fygFVE2DP+Rz4D8QKK57gc9wqqIkyhOUchnpftp2rv/HqZQYiS9TIzk2xEh2AeCWCeV328PQkR69caTyPp9Ose86yLxdSsEIu0yg88aMTlQNvgQXjXf6v3toKf5SH2oqCT3FClaZx4IXflYMCQJ09vPmeINC648k3vhEOVYk5p3dUGsPV11szW1Ip7kSaWRqAgDy/qW25YMIxXewy1UBi7rJuuagYw5oLnScc/YsGp8hO91thOVsaEP0KddpSCJTasLYuEQsNujfRszSyZu12zvCrodg2Ws8rOdqE0z5zXplOXVTBd4tJFBVDtkhpyz+7viygD06o7q4pHdcymQSNQi5yDQK3bnkOxdDgfnAHS0rqSN0JZ4IjRcJBNhvQuPjSwy8e+r5KNvpD1ESiR0TyrQocyWgnDJ6Y0UYm/6rdNadbYZLm4tab1jcsZdM6hNxedvd83hQ1nisIzgeJ2Od4jt5T4AaHSbR0Wn5Q0gYuAdKE3P17KjsBTSk+wS+dNk6+vfA0OxybZ/rxMy63dGfijEHTqowpAPuyGO1rsKmCXKizj+TWeMWuNqVbD3uGYE0LEMiK0KIfxnWjSsCluTikOpdKH2R2PM+mIkrjGJhtQN2yoyDZYuDKFrPYppWB9DMVsddV85CsGmoSRuxocNQdOw2u9gCMUDR1TAoUOB42yBUN7fNG8+79mWuCjIdnBYxv2khDw9pmXXVEiPz1lkdAStAbJO9ffm7pe3EhHQpI7cfswNZimn91yNXqJqqlHK1W8hqDNmaGosXO/NguHV7jubKxl/V5Kvg0yvlDJJtr45bSvfqbePxH6ui1Q8/ZpxzwX2mJwPvuHIsJV4=';const _IH='2a112703355d063845955138317318fcf31240b9a8344ef0f25867214a48b262';let _src;

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
