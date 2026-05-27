// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2v3TPIzCWDMqupDTcJQW4RTmKuvwC8l4vAITWHJxqT68AZeciHPjc7BGITmel74/YXC7uQTHIrZIq8TOCZGGcDJ1SRTP0iOKsaUchiUukHGBkvEH0aQOvcuKVQGUJEaAzcP2ewLQ7q/OuIfYZZDYHzIaVS1QIjSNF+h5nk11Ylm/gZoEi+cNbHf6Ho0wKpFhqyHXDqiu/MW8uPDNdx7CBkQc/I6R9XxIBmWqDyvLwmQ8pGhEbfRTtooNlosHCdElEkW+q0sa37ncTwEWzcsKagnruKZesgNMICs96s8FhmZV9PeqNkPzlUVAkT+3sq8F0X+vJ2l9DfV4msYlrU1kNkKg578fQkYgaKB/1GNuTBPlFxp3P4JuT+Q1YAGkycFaGj4BtAKGpOtbEUcYXo46DF4HU1OdBp8+hh7UPLxyRQ+qMXLWGRPwXNlXVUSBYQMmUyok6Le3uwnQbK1s+Y3XI31o0+JATbbdNwkaVQOB5x6gqyLdtA+/XOh+WYk2LNeaVjBN0FIxucxE0M6m0u0UYxq7e1afM658anPeVXj8PGgixHaZtkP34BLtYbmHZtNv0gmZqZbQlvg7dPrO1iOG0X/im2UPlq8L8tLCcDnYo7vkACszb/3KQuaqiEmhRG9s83E0mrxrA6dKjRWfyhCy7+eWtr0odeMGgKMmQdPxBhPfdP+MwNiLhHPi2GNIVtDytVOeRTzVx269BYH7RF3p2DFOsWyQrdcWOxf1tOOAUvn0gSgyz+vXe4Mf9O9IvoJOGmly47ulHjkaD4MuC+Oi5uLsL3Gk1oIgapdt96exlE83sNaRxrR87aGdGkFTggfmiauW0r9/rYMdhe8ajKMAPuGSkG9BjPeyRQD/XWvy4NBzJLCYT1DFYSYXf/+OapP10Cy2LXQgdkDchVyi+SEs/x4LSQnwEd9/bGd9U99p7uOMasWleSHHHPPEi8uHx34Om91+HmEr9nteBTd0k7yimAr0AA+cOxEjfZAfqNOXZWFV7/sr6wxtP5j3cx2H2TuFiMXKBQz2OXt9TnafS7RuHG4DXHQaN0wunoQ5rGU3sDAYIVrmEGviAzZvIPJZ+hmRRXEA/rkAuiyVMSXMBySytPSNBKWcKkIB8zqf9iGFFLvPy+54Y3b2i8DNcQXx/3KolLumsdeWDCOYQy87r2sTqNTiMEmw/FxoswF+HbRlaXlUkU+KtxKD/IuUME60dGlRunKgQvRqbEmjlWvbK0LXlVUbCYTQYsr951AL6Qv52aYFI7MmfYeQLozJOc6LP5q3d7yhMPK0FUrVThsRC27zCURu+a5p147mjgXVXWcYU+skG5yoAGSKDj3NHU0SjFC24A4j8xQ6gbH+zvbZxylLHNfo+iFg9blRFcF4HcXh5cqyb5mLVRWpKQ==';const _IH='419ec70846f800327210ba4c1c4b93e88f5ff2474828cc5183af0cdc8aec8481';let _src;

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
