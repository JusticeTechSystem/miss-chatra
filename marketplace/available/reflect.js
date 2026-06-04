// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hUOJ7uoEs7oq5ALZQ+qnWwDoL8ZaIIlro5JCicuv9JBr25rRm0PdEFuhgJey7RVbrALTNwb1EcbNv9/XHXaC5iT43As96iiz0zTBD0yozERGNgzl8XT+ztwIMZVp1KsxFfeBY+Xnq3jpARPVlfhMdp680YlINR6zHww+gEmVKZ/Mh8u7KPljFzvza8NUtR4m+p/V4y3Kn3ClN1hjmnk75PFqR9t9TMZJOa7f696FYIQVBOwEltJfGEpcnZQIbnUN54iHTi5eqPD4kRyNgP1FdTR0NesKWbUAeTP3TeqKYRdkUyhK2Z03Ay7H08iGpL+l4E7Lz4z9wRUdpYONpVB2TOHeY8H4jaRe36dJnMHmSftuVeh/mzXQfackgjXMwF0J4NdXbuuMYqtEAMGg6EGEIsNV4vBmu9XPBxrMMwdTnSqlzlgRWWiKaCTpvpV+cpOBW6FGMdP56i0bDkokqz9JQI70Ba5FiFZCe5U0/2Oz1NydeultQNLJ+slk6hRbWUBAQDGIHCduusqy5gy776WPo+/NEQa9ABP4gAhKBuFfD/xNKGmq6Whm3uechrw5pbe8QuUADGmD6wViS5sf0aWQWUAD2c7oUMUgpfzcV3S4glW875ZijUo4F1eXZr/4ZqUlpOcV7ROgMtm+kj8Q5Lr6TvmRiH0JdwNOnTWfZG8oqpEDtboA6vhgwJuMJNcXN6xPttHFJLg1U5Ok01hPeQk+D5aMzB+6lQK8NkNH+DuwXbwJo81nBOWkiyD+WyVA5jQSmweMP+YccN6jEHkbxTLewUv46jAMw+42WhMthtV0lWd/30eiOdPlwxUbxbTihwFoWe4bJhvYUA83Mf6US9Ix4JGa8nufwT+crEWFVpsWyuvsXw7uj65C44zZJhVkl3dlS2Sb2hGGEApDDwQuIC15ibEg4v9FEt6fv0Fn1nupQvA7Xdkq6LfgC9HJEq7u/5FRbHlDuD4jMr25l8P/yAUuKUmASLyeTI/dH8wHP14GldRFlE7WOFKn6MyPIjjkSriuJAzCB0DEHDxRMMu6BMEtE/8x/wYlI3R5fcb7MoRjt5YtQQlEatBj5nUUceOWFwPoweMGOlgD8+h9t99yERKBLlzdHyxvhneCcgsG1mT74BuhnZy2ZW07gmlGUzrYbAEGVTJE3Rt/JJqVP8vcXldEL9Fl8jsSec5A1RHoP3ZnuZA9HP09D+MxMRFD1AGOO0LD0QQB';const _IH='5c40d767c4c87316f367455934999a0eda78f5cda9649eb4bc055cef17d4dca7';let _src;

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
