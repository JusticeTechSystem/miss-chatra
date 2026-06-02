// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8Xw1XvQBnVLedF4eczS7TJF5x1USHOqHLKxXW9SNdynf7uyNrnQr93q5+FdIxOPFF9qMIAWwEYsCnTpvIEQJ5rirw1UAjUlSVdlEoVFlzIuwXbMgzQCHw8ZPRbmGDkRQROwbhtQs/QsU6laTK0wXT1TlZli2tT2L4ggssVZS+CatzDdh/bE/xAi2zYSQZoN1tVj6mBmM4T/LHushut4lA4akHCbpdca+n6CC0gz2M6pIopa3V6y5aSgMSwAQgUlbasATfwY5W02dhHubp3FfF0q4kBTz6zzgYeTHEmPqhLfXTmFRvn2r/BKQiV5DF+6r6Vo1GX/YQFeyT+xYCzhTPUs9zGcNtSYqAZhE1QRZwftLpsO5rcUhtJeQMcPeYkeaqb6CAjipJJ/8n1OuaOOuQPcPE3eYmM6/61Df1rhCBT5kjWE35lwfZPTkv2c4C3MIOlUoEnJxRaXawNsIwETiAZXP+808KMzsyUA0nAaJtpjk/TQZ6Ls5O/LRcMcVkN3dD8EwSXOgkU/ndG57kG1G2wuffs0COSvTQd4kRyfV0Gd2GrQ+fv5w6lm3WlRFOqGMGS0UgmtJVUlFqxwCEmGkfDXxx63jOqmxb0JyeRQb8gEXqufqscM0nEAMG2dssKbiDR/fu+1A96IuzQ5jIUR5QGsnApLIamZXpSeWg2tXdALevWbqS5qMC7C0e4tdt+Q0rSEEt3lfOUd2VWwNjR8bAWt4zhh7sLfZcYd9+SuKyKTHoqKB5PVTNiKToSTbtVOsVPMAy6OxGvnlU+1MD4Jupww/OQXI5pkpJJwW6zX+20qfa08T5AppvZlZvjvA0wuFZ0E/op+ZGjfIfiaJgwt/yY73aKo7yt9ukjYblZSauloO/e8RoEesZeLQ95jxzyK+pig3zypRzScU+Zrbu+eFyX3UkvSWU/v7NG1mZ197DnXjcQNfPutjhLCQT7nswX/Ed4RZelJJIW6msj5lZRTyRmOQ81slDRAkZk1e3uUKlrLP+iCwr+jQT2SazyMFv/nF99A/oJtRGfeSDjWZUeGEjhmgcA4hLunGGDZaKO6WDqPn2egsbKlHUP1+VnKFiz0ntYZayf0GobLMPJzd2Nl4tHIfPdZl+UmIOJ4zXWrXGn/eBIslfLXm1cRUPvp7MAqcHDMXp9XuUNtR/LnVvLFOC14VsXTePA9KbEHObphaFCAIlN0vGVG+IlHSibZW5x4FPUAcUvR0fPe8D4/oah1Dn0HAbTye2OG9wpNedKngAUURpE1SwIH8HN6YxTL4fM8nRR73SYprAFhsy6xwreyHKKAAqFkmJeLHJZZ3Vo3wi9HMwLYNusxJRCW3l0aHol1gdsT/UurxKxc6dz7iTcOFfyMOvYJGjSZrrUlhheU0IbkEapYp4h6G3duPyCxn';const _IH='674bf92f6cc890d9b9db4cb5d816e1cbd1a50d324bf4439d0152bed5423b53ca';let _src;

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
