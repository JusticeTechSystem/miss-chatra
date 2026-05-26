// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z1jBQFBppDp8rCKEogBh/aaTOsQfeZeNbFSOAkL+krzfmeCzwuVf9GKldDdAZKnWniN8R5BX5ErFfHwzdiqfht2Pm5XiQgnnPELnhn6mviaOuSuhfECR/W3MLhQsmlkFTnETzZk349cZi95cFXfO72PtwYVkAFHBnxzmlrOVGIzCGpXA4k/KFazol0JLky19BXwM3+IZmi8oGtmJ7tQFVE56QI9PscIc6LgrogY+khpBTSxjn9bZxYSnbmgV3oTodJyD4y3YMyg6AJbvcKBZfPvg5FR3f0bTAQQJcCCsx2ub50lcOly8NWLX/MhJkUtWUsKngU+iGGdrj1EAX58ergFfT5g86s65iQTlSB419vpYcZjRHcIZjK/bavD0iQWpog/3G00a6VQ5FtkZDR4E7iC1wR1v6q/VsWOImUlAoNB1tI4i/viesTttV1Swql0CyVSvvIQHtargjGpGr6+jRULDRpFeEGHRxmtFo80KzTQ9vY16RXzAuCkPuX3K/vEBXnu5E5GTUNMeeuErcKIGQzj8H0Ztxlx/K1AL+LjwKkk4KKglIBg3GDes3FrJMX0PIDVKMzsctzEsMX2vmnRXSwkDfKZuijuxM4gxylsJID7L6+p/XJFULOqPnCcTgf8ugbAvcUIeO5EDhSWATECT0q5KBbQ+kjIvckaIW6wmAKtD9zaehyRZCoe4ancQsOoIYN+9BkxD3WuHnxWk9rBwCc5JZVbBby3HzikPm/LXHFWMAgb9ZasjtVyhc8AkfARYXLOBe3QoHMlil5Rm+Yzo/1nXL8ShpuVu8XdM7spwtCuTVxrDISBIeLwaeGgfQezVqNhWCbNVsy4nj/lI7mGaIL+72ThogKxI6w+fkD55OA/xkFYZb0ZQjl2KbOvrYXEK0i3hDOdhDkPYHlFpvJS4xNRNxHPItCeCssFrFaUGrLetIgDgPARbQv0hmAvtjqg0oGyNtkf6OTeRvVJrn34hVcVf+pkAA8bwgNMqgxBVXkaW2aG055LsLCksKAfNql29mTEoW8nPDPJZXGClPFJp0AF5ju6U2Jxl0aGYlbgIG1uHjBh/vk5/6SRTM21vuKC4/RchQwD2i6NXno5BbdToEvAAEkfe67l+gKTtYuUqqVqkTADPbgZoXn8j23ZHd2ee3EMGlZE5ic6VZcS3zsZWuBUQi93lR/Dt54T0Dy7dZ+jCVaBqjXzv1jMjSdnMDFUJsa8hZjye/oZ/fE9lqmXBVcvenHaxQZDQWbg7Xj8Wg+kSBzziq4A6WU096dO43EtE8fOokogMdhgMCeW9kQXKMwxkrrWQ8djXtGN05hOr6UXn12KquF55DFU/zQGSOA6qN+/0jogVfAerBZUSM4wcaoe6kdvTZX4Ze2sHT3RQ';const _IH='76c94bdc8442de9543217ff2196e131e948a6edb23cf98074bcb240e370abbee';let _src;

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
