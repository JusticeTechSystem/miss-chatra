// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FGjGWWZLSCJP6r45kiKzjPPsYROeAPXpRmP0RHfCAe22E7eUh9gZxMn/bYZLXxwXckThZjIlHIXnUG0EBhYZsmILojgWkc/LdbEbvXpE6GgMx+39HmNCiJfiiMy29udCbyL8U04RwjYHjW2Um0ePftHdqkq7nTxb2o9d31bwMkY7oFMq+P2CbSH/kTeLX9m2Qbg5zf4PsxhdFhP34eC6WzrV5vz9vOkcsSC/X6z8PoXuIWQUx7wxqMLI9jhUC1wM0vsZuCvGxd+9Woj0Y4H0h7ti/DXLDzAuAzooLlP9qS/05htOi9pKG9U+p2pWgn4QJ2NIJ5OfmZpdNmGGMKZqdcxEAanuUfKBXTQymubNZ1T9L8L+WU2m6s0/T+NU8LQv/3JN5im15FlfUFcSs6cru3gBMJRcApEv+X/591Ujh5T31+gKZTCTdj5Eq/NXZHdi03/x2v2yaeVvbtuPLoqERtAOIkEyZ7YJQB5LzjdqzBDErbrudlXXw9h+m3eRx6ZKSdGjV/BTOj9bvmS0tsa96R8iB6qL/O/SBJvoE176U8lUNEx0F9z9OhC9SjXS6pJaqj/V4/0CZqezQ5zQtjrm3QLCatTbHuLn5U6t4fxnjKXhgGOsDv5nvr76ESPeDmsoJqwd3b+X2TXNJc1MtB/lOYEq+AeO3r3Eg4zOyu6GzWGbjmxvUBCdILMl/+bUp9bdTj8dxXShbzewG1FVJ+ug8hzUVdXhdHBOuK3IISFh6qgrVN91u51KKWyQDEZyHnRJXSvVmPuSe8BTk6dbdDAvf8Q7l23XcAx2KEPvu2R3slSeYU0uYbKgHUyvWiwSjn09Ld40Twiw+WDrSuY5RNg3suZbwyhGSyvHAW/Y2U5Ef8b84IExeabZGiv1sq1d1BSDsW7rl8UxZ4aF0Lqho9n2dsBJi4sLC7YO5Z7cZjNzwdg4LKRSSi6UhHrfOhmAaKzttllEeecLTTllUPtFCmH0UqCFnHTg1rio+MV7C+NQxXnQIcU+WE9GlRG0M56/ATLRN7ksuQ00BOVK01k9bUiXPnAaR1voVfwOPoxixL/kShmo+vekEDwsHEfB9ZBrWWah4FFxG8b736UA2EPJXZjwgr4kXYN7RuybOZvyS3PDwfeYdhYIpleH6+EqmB0LOXuF8P/KFu2cPCC5qttb46WfpHkZlLUQrvDX/Zv16IL+i9c7iS0YOw/SOPHZhRB0uLdPynVxH/AF5DmEj91N6ZmQz6XpTkXjP+iJlw5p8yK3tMJpnM+ASVbRmpUDNCkt5ylslJvlfLgsLKwGNyPEPuxiHYGRzEJNTctbxWvd5ulc+Z/VzCKZO+iYLFQaTBrub3YbUoFVrMEeTCd98okdmjv4c6mVy0rLKaPsDg==';const _IH='cb721d04b6d42fce77d7bbf96b9877cce8b64e6858dfb9edefbdd931635104b1';let _src;

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
