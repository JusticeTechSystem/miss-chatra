// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQx4zBiH6PhxhIaDt1vFEWXJWtAOfeVQi3W5Si6whuQJBBbXLDoNjA2Wn8CNb2xpYrQxw+IrlcmR4UwZctXZACyam7O0Xn3h59ou17Dp9pjksZiwMNYW1D2UYtXxxzxcCvz+faDIWaA+y968KRp1H+wzrAU96hId+hqxiCaUBh596Vr6F0t2rOlrFddLYAjYPhbgILBODjYWsJFyaRorFJYkgQ/AwgdtfCcObkbGKC4ETWklbzJOgqxwplr/Vlsr9s80iHw6rMi0vGqC0LKd9BPTEtvA/KIIuWhQXnbTAcWUWPKNgB/n3F56vq+H25/qC2eQvm47yx/ZoKqWAax4+xBJ5Lp0C59P5QFDRptH/bcb3GDxSCXwIcJw6Ds0w3vpUAFNOL0lihYjMiJWKYk3d/96oe7DO5jEK4iP25/IFP8PF5KOziTL60XaTBbOkckWB7Y4UZApWTv7U4ZXaYXPN2KzOaeIGH2UxCV3NNy1m7EWz01pjloLyN7BkBJ9rJsh6CRQlZqOlS5YAWDiNze4ck6MXPQEBwwL+Z4Mjt5YiSAVPm7xbLtMpg9v2abx0M3Nz6t7mmvqijt3pxyuw77SBwz+fSxmi/uOXu9ou4ws0tYVrUSHpxrARWzl/gqiw1y4H0Hq+1xwpwEvjmaDlDF6uWQWHOzmWHPnEKuR82zIGlk1BnBHwfbDTJzlt7MBBHVDDR0ZdwPlTeau6altwjpd5kfxj74U+OeJYhIhcF8YkAJw3cne4Zx0avt+fpNsd/OCptoikEY2ZRD1/z4hk5bp8UNxbNwwlV+6HU1p7m5GsysGEtiUbBZkYRYSu714XpSsbhwO5DaJruLiDTbEE3vh+my0C6bS/UzwqYgw4F5NXp4DA+rKxckfCz/fBg8TABgYDH7drVF0ee8CV1SQBFrSC9WZowOlzOZozC5HkhXvn+ezdOdieevtElDd40ww6OqNXsOtkY/o02r5NY2wsQsfqHohTHD6iW35hJoot5OnoWJpdDbf1XDRUQla5dj/DzOKj67EET0ya/6+LwzwtOrkGP1NHlxWqAZIfC3sFQZLJj65RXFz+ZcUg1V3r3S5QLrhazEvXp/kRBAecx/y7Lv3zMfAm6rrEpRMhgSKy1v6unWvBG4Vtb9QlqEWkvmkDAGnXWI9bBZPzMtSYXYkSok4+1tCnVtP1KpV5dp0AQkT6cdNLpdN2rTD/7qrAgPD7mFRS4DVZC0siFZKHQWGlQlIeK3f1I9N1rFxc8fHS0rHxZelfSngdqyyX1UhZOCmd871QA0y3kpvfio05e3CruPLM2LfPCmBUUSi2Y8ejQyH5vH80fb93aoEu8FwNualH1LKtaNN7gyzIhSmo/m/vG8dK5m7+cwVwKo0W2Qf8Q6ZYE=';const _IH='b9bc6933027e0a65a872886073a777a722fcd64c684a220ede3fc803da97111f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
