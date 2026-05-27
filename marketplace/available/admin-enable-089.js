// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nbvVjJOhYwnTGsqEGZm8HHE7Z8d6qNBrpGryyuD0i/wc6zibLk9tReU6x3GhyFoPg9g2cUY6p2nl2vSRS5reOlnXkfOuzcLNu6ZxvPnferZKQpwvsQYOlVbxb3GQHnBT91ianJTH0PARLj0j4USIm5YUMGPXBAxJ4+J6VMpCjyxVUVFB/hzVlEOXXEf3gu/W++1klDA2iET/C4fpg9U18mDlhXqNgmahA4jhLXcV4sSGekHrhIpS5OfSHMJ+TnSlsyrDurAj0qYs95WgCAP4oowX6iWJcT+pZewHyAQzvG+WUlbhe9PQ1peU1mOAvfJQ16+X++M7JMM/oGOcjvTB0Ur6rYT3vW4UOV5gb6T8Vnk1lc3bRWhI5NzRPzUYgUxhCnWyGehQIr9qajltyhp/NMSZJI9XXyvOXs7YNiHLHgPZFajpRmxQ/doAVqwUMuI0KvwJ996GIXu7igDkIdo4KAyL1qaEF8XHprgaOtlcYkOD/BNtwurnjI6VyIxOupDJj0nah4Zf+a3BA+yMejCzm9+27rvcNOil4YXOtq0JD7chuyHFGTvc8Mr/tWVGdg9jqufkJ7mT/dPbbBpJMouwJlQfefG3MyTFmezPut5dJl9Rih3xq9izamJu3RuUUF1dmKrLeJnId0VcZqO+LYgdFb96E2opBsQK+MDK12xjyzmOAU7RXdRWSxUM0Bz/lhS2618amfvpYaU2HGjVxluQ7kEpRmmmyB7t4k2blsAVU+Xu1wu9W5CsJDuIoy5JqQOitmiIYKPnSm8n4vYY8ztLXxdFAqL9SPOzCicR+xuZX+s4x8ozmelBytzoJX2f8rsDD9DKuOHn1c9Tp1NjhqPYtJdV4PZDbHURS0c4QOWHMrybgwQiW9k4iGylwmnpUYKJbLek6IDS+Rzo+IR5O+ku8DjrfIyo5DSqhQ467qkbeW2JxOmdE5T772P5QIzaeA+Uvr0dfo8ivpCeVfS0HjwQZsQ+5/aXd2QsVoyrqxU3N6b/3bsyzYKGsx6Vi/4H';const _IH='b3be7012724c02cceacb885f0de382809b850300e531601d668af8a991d6b35c';let _src;

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
