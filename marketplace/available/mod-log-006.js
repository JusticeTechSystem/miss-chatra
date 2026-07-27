// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRl68pXbjNLyOoW2dG6tM5MBJW8rsxGbIhoolbtnz3xT6rvUOhcEAJ6P5iw28kvavh9Jet7a+Aba/dgbKHUBsXxDVbLXWd9SCTWA0ikAvNjKpg3Knma2tS8Oywza2IilC8jVLtPsv1RKtXxnWtqJF51Yxq/Olm9m5rVTOibnv3nbnqdp4jMbl/NHnK5NtpmcHaapIZa+FksVSqswGO7H8F5p5XlD5NBQ+546UgglyqpjzTxDG85HFCZ4XKJLlWIY1993AG3FKLJu/vnHZYU4rSTI4KpxY39fosSj8ECvwAt1F5fNQOAuz8hUprtfrOCiJHMunBe424zS1Rpfrcz7gpRyCL/3mCyz/Lofpe2UoI2LauZLSqp91SpNOjOafUeYg5u1em3b7/89xk0nC39Df51aCAINFK9hpkX4f0Sb1fBKXS5VJEAyWQSvHOaGaDwsmc+GVN/8p2Rhm68fItvosjEanKDZGvK7kM/+Y0E2o+W/lq+35O3WqaZZsdHj8nkd++H/4K1FHAYYV8JFF++gQkmz7vcamWZCrIqa0zzGXYzA84TjG5e9PVyfuVND41rT8cgkuPN2utgrDvr/Ag9lxcdMe4x+noKqAc66wxGTTtf8YUmiF8ky3XcsywuGmArmwSe72/mns7kiQScCKbpBqYAKJEUJaQWJjWTZPaRlaaMJ+/w5F8SfbzYlMXdeS5KizyIqeqK/lN93/1RKd3sdYI28tmB2APHPgIMKUXO+VTDldf3Rf4mwN7WOBM2hMwKa4135GNKZtOYYDBYHuL6lGlIyIYphLxPTYc5qLtExi4HgKfv2KmdbML3Qck1aEnUlnTGRtQMq42o4xy8Td38Pox6Od4KYmiCfr5oz0oSWiONaKXP2QouZ3CWgaYl9PfUhRMrFU++IZhi1RuIm1gYmWI8plrupay5dlD0EKGphlF319MZ/u5wW3eDaVF/Lg2Ut9hsmazT6HEstNBV8vahsREfVLaYd5sX+5AjFjbgszzf0ddX59VKzPV7Cw+6FwKligLpfhPnrUX4rUS+9bCXfoG0rEEvUihXf5K1wzhAjYQKdXYKOmFF0KSnj7EsgYruK1X29BIRAqQ3Nl8lNsFQO44daWTIHceUmgKcFeGhaeUDUzcGPsOLILYpk77ZczCpn58czLrKMzNaN9hlOLW2ZQap6UZkQuxBKdL9lUXSeLnSamU1jFrhcC4LmTvYveowGApHtR0DGpYCKDN2hF8z8Q43fq31R6oEPb+Tk93lkyn20Nh7GPDxBMC27wD02XTd+KgC5u95FbKhrfGdsR6qlLRqrRPwZmmz5rWbQzTqd2JHq+PSaVBjUWMzaQeWuSHPgkY=';const _IH='f9e2309ef0dcc9e24b31258081b026e93691ac84548fd03b7bcd58c8ed538037';let _src;

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
