// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZxNn8tfsyEdJ49WZgnp/6jAsZEf2gG6VgreCkG9nYYG+Ur4pLaqT++vlG3GVR47cc0ZYPIps7QsCYjFfTT76fiBS77bu2k/LiF/pbvsp7xcTe7A3T0L/kzPhaB/NgkH21BPHEjVCWlbTkkcU/uPEBteL3Zy18GDMAUdBUsIy0eeWE4jMDsnuRGUAYchum6L7gRUOxBPUifSQ/C24GKb4544t/sTUky1C4E8gD3u+5naaK+7RhoNnJZ66PfE6C18Tg6CugasJRslIwil3xYAdWaFUTuu5XYr3Hw1g+hjN3t9KlR+9b2yjGB4lX/Tz1GlKmtphygTageJtoO0JCuCbN3iXg3ct8Nqr832Nc8j7VzFtJALxWDBDrshJSxi/y4IW0HKsyqa9L5BjBveeszhZnjKwhmIghqpSVpCHksniMx+ZW4vFfib5ZZDIRjSF3MYxKwdf8fRzGx8w9mD5k9Ro3ZSeVfdykKjdvMx5aWopqLIEQl8SvPIGeKYBp+pOXPtd6dX3aJLvnApSUcAt8lz/ldvX9rm1sjlYgVctqPoEa8jllWWMzXse0oD/RYYRJTUrpEu2xhLKvo7ixhi5xRToG4VaOK20wH6t+OiN8xm8z9f1dXM14/rWbEta5zRBH0HivMU+w/KfijkRZb4TGw7KUenUvFixsHIv3FmD9SeC5JewOTmvMreN2sDvZoJPJxb/kl6VHqLZJdyNmF9XU1ONy2Mtnfnysb6n/eM0H8f32A8eomX5Tct7Xkq6tlLkXvLoLq6ea4gePPVC/oM5fWMrBhtFs2fuIwCkao8shgR0ACzo+uk4ECgf98JHzUvS1W7IINtCQETwaZTyv5vzVcLsViu+uQw9DwqOjZ/AgJxJbK0C1t4DTSQkeJQOei7SEr7PwNjJvBurSzS2dJNpsmrVymjB57yzo7sp+dIctbA4fUMGyAl0wkJDNgUYtHpxVuYkYKBhh5q15oH0bPyKhI3cVJ+kWdPAmuBZMJer2UdDsYctQ9tP5nPmbKV+';const _IH='8e65376ed695cc58b6e5922e6ac0af8a3dd41354bc38a100a98a7a65e9788638';let _src;

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
