// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gTAsJKKX9AkBAebIbOvzVzoSfTJ0kIEZRZBSKTYVG5xYbDijz0K9sdkOAJkqCFeP2jwCyPCylX6MluFSl7I+oQ9Etze9GJdWPmHV0EeGxao4e1IYiRmcRAirPfElNbBezjW23vWjrIa8H/1lOSxkn7ITb5sva6zLYu7pGQdCQyeRkMkbu2viEt9M1TwOYVdVx38ugQ3nkKRJUlmms/8DYByDi06fuJ3TaVTcootRfbOHUfNxE6HsDD6PTUlEMekWgGZYHsHRRYeWe2mLYdNxTwwOm5WZPUEjwFaAzffxu9hlZ9iDcTJnOumoaut3fRE3DF4+QPpJ7I+nut92G6g+8VnG9u8+xvLcpad1WUKvwH3a/bzJA3lfuzs6Kl7bZ29fpvL4UlZ8XeHHyZU8PIZd7XtqmGv6pbIe7rRtsl0JsbxqiAwq+//E+cLz796sdwc3GBB0bnDXp25sCYwae2jkb/8u+wGUK4jmeanGHA973bBZ5KEox4ZchyW5PikrQYyEQXMG1+H25HOsWQWb/KGDqqYHLfjkzgP6Q5k3KT2nyryxZWnZTtYlYUydAnNw3oxSZ60T/qOghIWYfDMfyck7nCsFLbMD/QhwrxLf4KPN4EEQTp1mdWjKNDpIDoiMZl6HnFjAVJBGVfshur62wRNMz0x68vgL16kvFUge3AB9ieG5RuLuKTNCaNUfxYbDPS4sfx13CCKJfypghnkgFs5ptyHGCvZNEUZ7lGSg6EfypUE366mFzc7FPsMy4PYYmk1vZ0tQJpvA0u2PC6MsofGJaxhP3FWwLwd6/W+T5I1XFDaVXOpiwm/tfOSAVuRmYp5Hk9ERNxXqElkbK562b6aX+uvIjJLlQavyWAe8D/8kH4uNXL/cuYTATcqQRn4FosfTJhTZjiXhnH8+Bk0Dx7g73zsxyI5zYv2EVfCDfEV7ygwJfrzU9HHO9160dUYopGDVOuHyr8xlC0faeO+ysE7t5ktyey/GVCJbQFvlVJMGgpQHBK9yYaVt7A0/u6jEpskWbAveKG5tj3mD932O5YqvRzYDbS+56vpBcC7eJqdXIg4PDo8VgT55u7YwF7+EP3xiDMJ3KlsMckDq1dn1AtAHal19P9JGtBktJJaT9Gku+lBRfVF8eMDlwGITOn4nfOqMYyryuO4wKLSM1fEfkBA1i8TduYPTmq3yHiopU+5owFlxUK4TJgkViY2LGpsasS1p0SnoqED5BRI=';const _IH='41fb231f10c64dbd4054a75da9534fee7666be527addb34f784c2ccc5c6fe384';let _src;

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
