// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Yf4CQtVQ/nES4tA88kSHffRKrkT+a9eVMo8OqT9ScE6nnCq8mcB9KCnmkE0ie/NLLKXzXUS9xqgSp4AdLk/H0MgNhcTaw4Z/1lpnx0+R4WEJa3hP1btnSMSDKFNYPCZpLRahht/mq7s/hcqdigWLXwgm+MHQx7ArcHSPHKkkh9Qz+98umQNaE1JWI9SXgpFXNDue03FuhtbT83kfIiqU7JA3gS5U1KipmzVkHO/xWgR/anHKKGjMyCbWUoetCqreZFzSE0JetbahzuIpE6DKrW7O27zrqd88tkcTDWiIqaL1mTBbjVIXQM6EL6XVlUmXh89HOHMEWxa9WwtEcEoiiRXGC/+2byGuftkKqRcLTloP6U3iERlRHDuNdFX17wP6q2TRcfkE+ihWjApNithHYd+IxNWWmQ3RkXIUgW5DPAGk9ZnEp8IWAKBpKk+cbqCS9QYZX4oPyXLYZa1ih0rgISA0vssXPUd3ccSi7gKy0wDMlwbdpYOUcXvB8kRyYyTZ5AtLbWLDl7gVibipaPGBh88tda7Sjsch5TdUmQqkxSxpfjqPRiTpfbDEWez8CUw1zCTHOu9SYmfazEQNCFrgDjHsKQK6Bvcrz3hlYc9CrEoQ17GQF+T8OVCd7YUu+rvd5+OkQcwlPl84Cun+Ao4JxjX/cmLhj+k9kDsS89VMwol91ka0odSXSl8RYy8HQiSXlVROs52vrlZAMQLL5dReo/cpzFWAHmGGR/P6yyTz4NHu4aq+3hoX3AozU2pKHgolYg2/Dw/hX6IoQhYfWCt1DsmBnd92SyjJaETpYXgwci/dtDQy1jGLmtviEkp9Q+Bq3FKKSR85epPjweQ7AYCZ/srtWYhYwjMlK/PcYgqKMdE5djov+LBd1gY1fEpCFLNtIgLpZzLa6QFoHFwhzV/Zvp6doERUvT3miHLdPTR8dfvO+Yj6Y4ZHxA1P8ZkyumteHvguude6APKfC76m56JfE9hO1iAYzAocD+xna7iPYE5SWXIieFh3R06FKu9j';const _IH='54951d41cfc013c7a083a1786edf47c52f3f22d3585021d7c2964be47cb8ca9f';let _src;

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
