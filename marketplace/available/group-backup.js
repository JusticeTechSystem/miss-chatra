// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7nwVTcNfDn/9rn9FjeLqn5sxHgKIMklHgcR/1/YEa/qP+PbzBRDAdaHnq5q2afPiEEqSxeyv/xPRljOVkDYbb+VsenM9txFHwYWPgxLhtrFEBn7DZJL5sY8yhEDfMTOXmqL6vtP3GEJKIMnM/JQfHKeJ5guuH6HtR2r5pxMo0UxvumY5rt9Zn5/S58TnmG34h9wG30r3k6qsK+diXvUYkdkIyAPyaL8eIeL77cCSG6CeUNkN4+LfXOFVN09Ny27xjQhxskuK6V2VqPJCnkVR6y9vZtKVEBl96fCy1/kjpF5qaIAL/QMN/D5V8m3EULPIw95TytBOiJTY/J1+Z0+KtZVZiYtLHq9T4OzKdrOWM0qBvnH2PTwmtMmPxDh5iQn4uuXcwZD/uXDLcMEAR+Refw6291YoQh+2tnhAOybbs5eJhiF8GClJdNodmdmObWWqoU8cfmI+m0hQRGZA0UguIhsM7gWjPcu8Cc5ldn3q2GeJ26clHfmwrTlW58QFVVS6r0sPpi5xiwW4U5s3NZgY/KJeT7uf1iYRZw5v76vjC7QMiOo5ZxX7u22sPcChgzVbb7W/7n+kLBO/IYzNIY1GvyiX9JnfrFFNatVu5YYF6V566ls7c/qFf28X2Y8rjRobSm7w8ElQjBXF/HjUiuCkr3fKc+7IkvxTgkGZPgj9336m4rw39PGL/4On6p+lPx9j4N8tv06nLgCK36gvEIvW6Dn8xfVWyPCrzzrhqn2scOoVtaQGs56K9FlrGj8J3SLljSJF44Kb/x/UZc79KBBobDcCnBDFfF8WWJC/mgM2Wz31tCDMH7zr6cyp3vF2HcCRgCEL7SguTl3COyz/IcTUN/jltvLJtR1y6bioDhHRX9TFh9UX7hv6+m+AHwWnoskshwX57BPDfQPEJEZi6z/M23FwcEYQ0YcWyf3TSdeuUWvQVEQ1r/FrRLrjcVmSkJ/083QUGw9L/f9TT4Vj25ozrB21JxAOYMS6PhaV9y+Xm3KQC5GJFETwgtIuyWxCf23Igh1TbicLatVXJRwx5lUFJ+E4bV7JVNiAoBhi0h0IQvLcZ5k9VgHIUICwDvTyqSHOEOaSF1lqhKf1hwcXNHExDnttAE9ohjxNTBzyS5RqAe8ew90BujESpCeMSaz9vXPQ1rNq+/yMC1zHemQghJTcw9BBTLXApJj3i/d8BsBPnj+KpSDmeQqnnr3wcE3ijBTNR6LmD9vijFtZ+nIWQ9z+qIQ8U0U+aLZA7E3j/uY4hR4HPqUHcmeQLPiJa/vcZUISd9tt82xBLpZKeIATijDuhlXZddtirRAx4GeZZj+MhAqRt13wjA1n0zav8bkwcohGzCuEvUMEhL7uhp27L5sgzl8XeTKDNmtCO9UXWeUbRHkc3aZvuwdyd3aM/q7K77AyXE9z34fvjv96o2/roFv5p2qb6D6IqMYyJarshy89kqY2UiPrXonHsr7HSpIZV0q0WMjhGwuts03ZLco8tKtzw/W1UmTPjXxYPXekdY8yCKJpaR2DXLGRDcfb0SRDONR9hSHzjPntnIUS+36gpRHAquqIMiEg0TkfcmgQ6SfMJbelXOguiSpIpRwgjg9ctfBjrOLHZIZ3qpYTwNGvvnHPWsZbtMPKVVH14azl6pnRguGakFdJta04CdRpwCW9VnvLM6f8nG7TaS8khrv9SFVheDYv/hI0ooz80RjxTfhblDAsn2b1l45PisQ=';const _IH='1f2a5e94bacefac3fec6434f822f55e94a454c8463605ef6fd160637b1ee9292';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
