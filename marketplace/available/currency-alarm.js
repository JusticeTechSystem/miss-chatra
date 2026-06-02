// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MaBy4xob12u4ZIWptPyjF/imjYVb+5HZuOyclb2HUwesmlExFD+TBK5pB7DClsbBRG/PdxvglZWbIDcQoFiRFBABW/jiNRBDJXxkbgOHOWOtVIgNMJtSxlwXHOtVtfIBPtAxf0vDkuRY1NWNgeV/vKaey+rFZBRx33R178QTRa31+Hrv2YLPngld5PFBDzbrStvlwNymlW91gk5WkeGtmOjYerTEN5XbXADuSpz4zOefB756ERl8/qirYmMqgdGz4LRURB6rUZ1woE+b6V2G34qqZMV+7E+imaaal4zEbhaiKRu8cCnMjD42j8yOdFIIPrGNYiid0/L2+yQADc9kc5gqWKCOzbMG/7L0AsBVJcw2jxJDvkyOY8lstYKg46e4iu/MTkXr1pVjkhlJUUtu+kU4MvjeTSjTrX9uci540n/ose1FtD7oh2WX1ryLDhdkfldo4XLPvM3rEpxfBW9lGJMijgZwskJXOwHxg9V2rAYwf7d7LWojHRuijYLuL28TVNW/Kg15+NzHwNsnLMZSy8xln2lWSfDk85sXk8k1hHPkSPeriM0OvletPajlo67CjM3SvCsbpjG+8SbGzEGExLxKUmLU3oBQNgIxpOvmQ+wENV0bDycTkQn32k/p1LfK41Ils8Ki2ozhtp1xTXdy5ItK1hBvsZJ2HIfNMaReio152onr0q7QzfhxUnnf111V0Ex0FxpVWNkk4NSyUBjg7jBaz9qKb+5fbmMJFTeRvfDcAlHhZycBmewAE2Q8XrCp2obWcgkmAuFseY6ol5+L2NR/o8yyNNmcdF8UAwKKbRGTGcEbkI4Z4SSu/sle8H/QB7KCucUjHdl6Mg/vd9uB3azDjk3kMZ3ucXAmm/2hFuAjVk3eJgPOEW6dyyej25rUJbZpCRB61SEBdqM7QQ4cyM3s9iFsj5I1QWSdB5CgSpNfZrbjX0CzwdC3QWsAkcIGbOTsLiD47ULjLOrEMKMEE+EPudoGfpUgwDY9p0qeXCJcyq24Dnhl/5YGLllUNW2e8v1yZNTXWP6+8WHxYnMqDZ6YCzPMgvSvLgTALG3yhuk/0aOshILphRroajU/VUG47nfB4JgDFp2O5REJhz+9amekPpxqPh0PdT0JgXdUWJp/1uQvi3+/xff3ZmWd1O1ex8QNeoSQUW3WleSFvk/9lAQ5+7n5aCzaE/54Lv7clxEf2dvETMPOrlRY88RIDXQlQzJUNmErTuWQR2FG9MYIsATZE30qLKLfE/vlCO2xzUQ8HVuSr1QiAhLuFgQzYix2uUrU9ah03n/8Iz+Vt9dX5zUqRl41M2RLSkT1z8stMp9t2lh8BQAE8y8+vLJWCLq/3vbm5LbH9TUivPyDzb0eunLvJDudEcfs/g4CkS9L4wq1BSLSbOgLJA2ddOMngrqGTMx6ATjghoLC6muukohLxPQ8WoNm5ZUFxfO1NRNc/9bve+VT0G47KXbRhAdtRjpw0wAq+gfhq4+aZOhXrYKJr8g/IHKQOapu7hyGmDx07fAWLlocC26UCziQEBpdsxoxyeyC93qbhZRHHELVFBIlrFE3L4v6OIHmMPebOyaPw+3TrDUd7ozbNRl8+6xMZAQQWoIbpbN+TOrWZCsr6VL3ARSRKaF2uI6bTaBdDdh5uCrUFHV4xZdAwSRWpmCJz3VkgmAmC6X+dIE5nKsRa5Nq0pA57iQhGpfTqB+6w6XhsSgdobB1I5i9mFTFHTuwfxPuGZPIgH95RI5c1O2hp+auJp6+IIFktUqYRZ2xXrdTf5eXfTndM8fWcgSEu0WjXJv2RU8ns8LVhHOiD/EKyxWl4ZnkRx4i8Wq4x/t51FrJsEUIeQ6Mv7M+WP+IrcJJb8c=';const _IH='579451f55e1932c8d78da72cb85104570ddfe354474e7338c609333b3318fd98';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
