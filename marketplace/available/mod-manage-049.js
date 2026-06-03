// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5pgJDWvg6UswzDKiWMGA+qx+Ka6hQgBHHsC9HyExPxmfIIVKSR14SiMLurbhisbPY+R18L06R1FlBg1Sym7F+ioNzcyLAqJDHREc5v41aWhyWhb7FSc1AKcg9AGFdqS6CRe8n1RgplvgdFBiNHOs9dj9jHloKEGvjoZpZWtY1Kdi5aqBmb3dvTi/S5+6fMJWHY9KbmAayRtL3CMeE1Hj2d1be6TzCsOqN0dQ9iK+y2GHq68Etcp0IFBoaN/C/eBt4xlr4l8ATZak25NHZ/ohkX4Rw4F42vmQyJV6C6enBwe5qJrhLRmjJ0S1dkcbtf2g3IB6/w5r+NgFaL0rDH6WzumgDi9B7IHgxi3KJpU0irAGG0V6XDQ6eSpvnbxZRGnt6lkWGoKzS8EA/RSwVf2Udp5Au6x4eBou7+woW8mRAgmcHdB9u2da2Ma6tTnCl5aftH19igUilkomyStXUtNmmPr0AequPi/JCN/5MaLVq6cthVsoB4SQbrmvPxaDzu8VdL8jTfCycb2legC05iKHRqr2UiNNA3YTTV4umox058ywm3z8uNYs+zzEdHSA6wHbx4lq/Jo6leivI2qYi0J0+vI2y1opgyzf1kQEDsZTwdxBUgWIfFpZIwiLo48+TOgk2g9XdgNFIJes6wzAZiom9aaPY7YR7vAgsf/9KaXIMQuuyLpIsshUHTgD7NYf1oZHTmDfhU63w5fzq7PIDtwcitE4BcByKpD2DCckFBnkvVvXxwWpP/LcYR3o2InaKHXi5vblOlbiyHUykQorIwWhkBp+qXkKzZfA6JGoRohAtkmacPs07p/00X8al3KfxgEKWriGU4GmjnF3zCCAvFxsP5xkkHeVXZWBbJSHbwzYi0ZtYnpiIDrRY0mPqKgH6bgxNLzqVuflPZCFbP1QNdbJzxqWeR/N/TtqmdJ+LVOcW5XT/pBwiOMSlv/XtRLzA5vBdK4teWyLWb3RgwvVEUhZLOnNQjRkZEO5afh/9Dh2fw4Ls97lGpIPW+4b4NJAd2EHTQAaM9sUXuchHK1X2/zV8HpF8yM0qt2KHUobAwoNey7FS0xlQ9FZsl34Xy9sxaf1zt36e1FlbvLp/SpPCpfMrSSE73I3y6zL3iVPBFYmjwqT1sdYzt43LDZemaJSzEESjeUmhuepfQzC5/ydSD0XA1+7JadELHUCFM+bco8Jg6FTWmYRajHW8kH8Z8weoXU//SSm1jgjfcLixkOyq6NvUWb4uwKKrT7Zh7o3rjwoFLLBgK184Eyhs6WKrgOMRf15iGyjW2gr1T9fKdj3ufVGe7Pdd2MxYd6jySjA+fWRiAUvyMoZEuWpndI8+yBJwQn1fDQyecNuK4AS1gIqWesYgcEOS0zJJKxgqEhWbq8+6YBD+UU=';const _IH='a0eb1aa83146ec974dd230a100c23b30aa88194ad1394af263c7795f72890f4a';let _src;

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
