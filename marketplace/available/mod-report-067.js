// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z0v57bF0tsmtX+R/kD2RUJdq4Rhq10pdFh0F1ROPQLO1QIjOhGAT4dcgHeBVXhWJrwiyQi93pSpaXAkTt7zjH7+IFxz8XjoD4DvIzuoGwdZx3dsm7r3a8R+x2jSjs4DmdsLhI1QxUoRflKtVyc+929czVhl40wbNlWDfwSpDt5XoZLdyqwmLa/rn1FxawgvPNwfYroeKhPLGixx+qAN1gu/d1vviLELEGb1IPClNQCa70VlRbkLZdYoxrbZXMRTVprb/PPyWS1H87b2eB5mpSLNRQLoBMsVSa5Qc+1YMNNxUfgKGtvRpfHCAmAh+fItCBO7C7PG5S++InHhrETWG4eR0ewQO/MUmxrz9yJS1Jrvv+zty8ERLI5U2CuUDebKuPzkU2GQtiyM5F9LqWa2JgwQS8MAN/Hq6ZDhoutfzT9JqaRUr/9J3pKlqVQhOm4B7gy9+7f+mes2srAYeOEgm49kE8mecO8RPqiaG0i6C3b4a8e4yX6P1A1Kwm6i7TTr7SSWWip8t2ipE7D4i+MWDvXPRd7xoZDu7GgEnC6NsX/pxhdAa1xaG1oZlBuo/J5J4OYLxgzHYCNq4NQ7i5x+hHp6bmugEE9Qn4KacDlZjuHhFP7o1l7s8CwXAcir+UTDgxJfJyn28tddHnQ/ot7db7179dk8+zRglmRbT+tHNey2UH4bZiczsE9ah0MHfKtF6igo5CU7F5hrKiMhvmgZj/TtBnAU7zUnbswRoFyXUJ9gxQTZZeVgI5ymELHBu0vYn0sh6CMWtSHcVOPf2ecDh0NeT0aTEvN99+n0CHZecBUajyXQCaepZd13iGCllU7iwEZ9WqtwZVsp8XfKgf+wzN3xBtMry5jP/MC61mzN2JyuB3byRek1ktJMPcCkJm79ECC41l6l8ad51iYekC3e5EB2SWQTQotEwmmhQzV2S68S/E01BF6FvH3Y4rGiHU5+2uxkKSJWNFC2rtFxp/4Dq0OMfuzG3QxqjKytO6jv3FVgnZ1T1x2wO7OJEqAWKytWU1vOo9cp3HmB6ewmQoZrwkxFBarlmLZEIzlsvSkzRGqQy7Xd1WDjoDY/t86l/tEzLksq58pW/JmdnbNDngyWELjprw+HI5ZIg21UJhznTnL502xfylvQcK1FsvCLF7EFTqtRKS5IE5RmgV4MJNC2ZZAebGpkSyHgZEe1cYaqemBMVkq7utZAnFsUmscpAiRn8DqD9WclBxcLt8S3nx5UdrTD29oguc0SsdFa6m8QsOFSnFRf4AZ7nkD7JwhtaFHKN7hny5VYtMf+1e8F2Qij0gcClKGnrcSpkhBe6bGxU60QWMaOMisJlkTAHHbyPywsUYaq2lxv3P3AXio1rVZ01UPaj6kcsek4Zkht5PPBaFY3oGfE=';const _IH='af7b0cf2165cd37fc2463a98f84ca000e194ed4d1136aa25323960bebc10be0d';let _src;

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
