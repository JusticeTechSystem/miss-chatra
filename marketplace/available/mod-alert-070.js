// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YbOza+BC7Y9L3JRGQrORLb4wWzzgJXnLqFjwOd952hlxOC3g8KZOhIm7ZZtM5nikfdo222xc5vQuRsfe9BKCYUDHl5UsLIi+Z5XjP5UpyUlUcMbJiIF+uF272fKT/e2ut3aeEFRwUPZPqqA0SDUJ37zfHwcjvKOuOQ2GexHoAVv+cACWhfHtm8mKJlcCQJiLgbfY94w5nP4tYqecnpK4vbdp3IA7vJh4bcPxvai4VhVXcVyl7tEluy9DI2gpMe7O3NaYYsVfAVQAMQGTiV58qFINkBggj19NUnJPm29j5Rrv+fpvUfM/PLHQ8LEYUrfwOjNfXpKuh/sgFX1vUVDQTJkJk1lgrdgONTgXIHqzlsMHvMQUoB+Arn/ir3v3orGizWJM9TJlp9gLQtfAM98YGC6S19dgVqS7UtMOZ2t5PEmPEuryF/j1XkoHMZ1MddQOr1bWT8hlvvNjf9piYqUuiPnHeAeblcBTkKHiKl/xbOcVhxRm2TUhY7lq/aQV5xJM6N8apDLN8N36HKTKfYC5431Iu3wOzJViq+by3/oSc36OJhgGtQ42LNP0/qanzZaUwgIWTENchIUR6C/2CcHKnWcdbVJB5rW7071rb9YfPABW03lSmZsxrqxQRmBLX/kexnfP7POxP3F9WFuQtLCKz5y5lv8th/pWZpQtyb71ogaQYvb4563sLgNm8jNqfjnLNZvMFXRQrHepDtWy5XFXXwDA63xdNjxUrtgnPz4VB/7vIOeZ/6WaEWlOe0VUuggtFTCAbq9KlqJfAhk/zXqPp4U6Wqxty4sGUrBuuwgD5aSYvdrq/Eiy5MoktvwJnVoiROu3VtHk8LmUomdqUtPicD97lNRxUgxqCh4TI87sPu+m7dV8jVmALxYlIs9H4EUO1tTpqmuwQCVqFgEh03a6rEuRbk8+YwwcSxSkOSEGXAOQIhbbrv0puk/m9V1YM5oIH/ZOKw9Nw5ViYfyW4MOakWyto2GnEvo6PzVBjaM7LoO/9NsEug7NzxXTYx89PQUsq8T0FkxOODM/bApKuxeO4bIgFNOZsfKS/rxeLhGMw8HrvXFwbmVu5/Q2lpQ8H76X42AGtZ/huU/aMagIHO370k7/CHlBO6TrHMXYZTutPNRUGHlgLNm/bILTqvdIvozzR5Dh8CRKMeVn27YW7XsOWglH4rHguxnoXzofeEgPTiE6sjEMGWmmWJwdcS1eORbZrCQQxRtVyXs5qMdCLVPNY0gYR3O7E7zEI0Z16MlRzwmAuPp4/hWemjLvRdhnIEnVw2kn3yUZV2EBl0eZwV6A8ExZljviyIzteef3sAjQ/f4TNuKfX3VBhI3bpHKpDJzpm25LQCbRh15WrGB0MP3jMFV3wvnV+oekXQ==';const _IH='3c0bc825223bb911da53bb810726d277660285cc7c0c5de146adeb171c85aaa6';let _src;

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
