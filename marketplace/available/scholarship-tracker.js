// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C2gWsQgOl8BXYVKEfpbo72Czn08vQYBlEVO16RydM++bfcCQz7ZOgGCINydYP3juc1A0z42x/iJmG1MFLUXwT7BZMpzjjv8Q65SPojoMn1EVH+BXOMEluRA72aFvaisUrCTwrQi18Ib1ytYlHE7By0FZTaAYPshRkp3mfQH2snsp6Q9kzIGw9Cbf8ug6YD0Cxm8PSF/M5IUZB+Ke6UplmlsBHsg5NQQjwM4uo9zx0mVksNPrVryXI0O7u2s8hQH837TKNYQWpltqEo8mQr7SztnrpGkJFW0PKoW4t9OkQtqzpUwzLDOgfOzFaQWFF6eX9CNwiX9W0Or/BvVzuQlHpheTR3NVdiixX4GbcgRh/a1Q88gPzCpydwJQ8PS27ctjA7A5HLzrqu5/+1cmA1cHbXuEx4AyCzGNM+CNkII6pR9BQnELO+1tDYChEZdvHGQQJ9OxjaA1Yt32RZ+elidxUwc+KNpljdtKegzzMrRPJJKCZoeWyXe8VzAVB0qPasTnXrnG/72pATpesiVdg0KPJliQT9GDAuw+9fFJs4GxeBjwVPUXJ78hMKhXmsxOJbF6PABL+lotSyZjCvGXS9vbkbErLIElnd8rKkq7IYZL6yKNt0298UNzDMTxk9A6D2A82LLnHG3u9Zrw9ynd/w7O95XMzpwBdkoQ6muIEogpu04Td2vECMGSbHRuNZ2Ia2yu8gn5y0d3NzrckiBSoATOSVH+aDG7DFK/fyWudKn5Vu4xy5Da3VwrJTtj8/R9QvIJ5jSuE/aiUMSd9u21Yq5azAhpgOkwY4bfvWVbSLvc7yXYXsF5DXz2xjoOPe/3pQlJlm5Te/mQATWHy9lFcEpL21/JXNKJdQKYtaUHULhbMTsaO1lL3DqFkjJGKEQ4guNEvYkdNZlbb7EXKpw82jitgBEww/WU6xY+dmQRM/LWlVEG2iSXKHwnHs1hXhchT9f4mRIpCRY3NXqPAwzW603dYV6iENEmgTtOZAr0q17PKA+YI9HDExA+7PDqW51CuHbEwhpOgVNew0DH6pjnS+ASo/H9zdhLVEriitjrnKP7i9FeP1wtL/sO/b+kN6eScY4JR28iEA4t4HB6tEZHtz/ofVFRi1KbtwG7LoauVK4B8+8aP59yy32AdGdXeluB4mSd8PpRn8LJ25l26rDJgT5xeqYDdTqfrDUNLn3Mhwv/kVSHbzN8a+5lbRpoiuBu3OKt00nLHSeyOp9ALME6kE5jy5J4f+cE9Cv91NJGU/AfdcxhmOb2HusiBGq/z1mUDmTc+Roq48D1j0gIsEKQlZT88cbwFEDw6EL+HECHhTIPMLxatzLm92+do77ZWuQqm5Fl6rA2CRGWxvIuU8RX/eltiZ41fQCvCJ6TmpjSJvOK9FLv55EINLFTuCxw3gWLGkoSCLHiMkfOrIb3PZvVWt/3ykxvfrJ94ZroqQPaoYjentU1ZPsNs0hxfkw1HB9uz6fwhGdseNhBPOHoYiwgoKeA5BJIvN8PaI/jLxddhqwFHAhE6F6JjVayoxP6umlusCFJuZxCb8xhe2KBkM/FovVbdZtfdGRQ95uNy2iWO/QF1rc1HQqFM/5UE1REJ1gRAtRirWjCF4bjlxgLbGZRLh1nT/NDiBx5/96gt0SpopF7180vTvYW+cnptQWCczmgSzxA7qyccs6N83dvm05NN5ZvbYCLBKW9piAVBLfikaKnKI2JGasmgJZ2JmDW51MDRg0E9scrxB5cgtd6RZYzhbMvnSUtYHhnAEN4I+5vWD2dUewo34sXU8CVzY4jxpO18zAIsmCwd6QVJiU1R2RqkELrfTPulHgJj/jg9Aj7h/82ZlpN';const _IH='5a36cb11321e194afda3504057bba95f65d4139589864fe268cad5e9bb483342';let _src;

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
