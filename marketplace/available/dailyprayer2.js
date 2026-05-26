// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+qoAas+Z4H7Nq+o0Y9qSSyzwixVmYQb11bLffjwDHj3YUD1oA5rM9+iA0j4B4sB3obw/Alh0Yt3U67NGZlfUYAMGA2EwPOeZYY4ZuL7S2RJlwSMR3+e6g27u+tp0JEsY4Yei8fALysPy0GUJWV3n/Y/s1z5G62Us0eod4yqocD8XvL+9BFLimLxty4GqZV5/sGWP6a/mn4SinC+SHlckImZ6htVLBlQ+G/ZIHnOIcETodornPdw1xtVM78tPiG6wHaY7sTJ1qy2IFLAAvItSbOue87KX7SVuaDVHMKxndSNC9Xd4dVks8EySrx9tNzxDAzGi+LLbxFyRPJSpDgTBTSVDl9f6Laay2OdXEkLO0PT5S4lr2hsaiKJFcETYam1N0BXFAEqIPPWdGlyb6HxN2EFXN++ZDnyXLqYuv3KBe9QXq7+hEs+xhwJkRYULq5CwFPlYW6F0r+XA3HMmamdBT++cwRwd1P7ocfuzE/sYYcQv2jiF9jPEgOfQinGqnt6Bv3MZ5xN8c+WHDOt5xdsFwQgLm8Fo01k+OGJFLIjmFWSsyYoIWrplT6dqAKmQd4EbIQbraKdYgdFPdx7oGeUQ36fc5B75aDVEQHnjdCO+lel9n5vXpz6+R82vQw0Lsi2Kllhq9ttcspkESc/kBduHPENo7KrVmfBYgQY2LOJNcTEl+27nN6kcfWmPpuzI/HMZUEV2EgIWimpxjEtUlhUQSCaG8CAM1KsTJK7xqIp2wBNg8FkiDGX3Oa1zhZzADYdk0bYvcBx1tsgtoeXA9fatpA7dHMccGWxkV29NafEwm3HSylRLO4sxxJve0u4znfKUTN4oPCtHah7UolKKwGloTwW3c0lr6sWNnkdWIDjYrlrk1GWag+PC65xM5V6XP7bILOblvv9PIeKb7hfEz1Zblj6Ii1dQsPYuiKrguvpkC0PHnxWGY0ovBnUUjxROYx0yXspmOgCfSesfo11DqT6O+/q+L4vIkOHTLRoBlUgC2IHQCbli+pjvAw/9OdChAv2LVoPZYtD+OLwQlamtbBqefILdq++SXDuFk4sI+DufpOGb6Xm2HciS0aGo1boBBBomv+WzISw8ED+wTujlJhqVPji/Tzlk9EQmn3CWLk/aEmplaX/QnKS36taZQhXXLHuEzjGD3WQkb4MFzbgAZqIlqvQ0ZVM5pYwKKSAXlZIbT6QPKHeDLfT/LJKw8vM38XysWsgfgL+ARD4=';const _IH='2935e6fd5487960a6c190cee1b22d083118ec8d5add58a83725308fdad9404bc';let _src;

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
