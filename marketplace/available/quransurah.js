// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hl8n+2sEibFpyiHDmWTwI+71f8GFtjN6zHErAWVZ4moxj/NOgQx+GDSHuBjGiDf2a9qgys1eOt4EziXK/qoeeAWgUqAKTHarFr7B6fEk0p3KrfwT4+M5GBPl6Zu6ixfQUCuRKNrUi7Tan7DE8xgiw3FzA2W7YsA7DfRvMVoXlWxpyEDsi6kh3l5RgSvKPnhFzp741RjbvUP/E7aj2zif8epXHCQ2u2afSP6dhDs47hTheBdOLYCKExVzCm9LEjIpJ4sFZQ61xj7jJCCRaEqO+ME0aBfM5Is9E5IV/lgywX9Cb0I21wUcDw8az7GRF/hkkcQJ9U8wggE1hlFDGoO35XXbD3dJ7+jWi2L1TJBVJn1YSYVqYzYwC9Kbl8GbjL9teJ8dcQyXGJtIjpocSVPYe79kazwhtNNRHrRwidYCO8qEcAVJmWVRs0uBhR0+FDvflAD4iphMsHXl8uawwWxxQc9bjqJaUyzsl9+L0peYUAnZZIelRmA+qtHItypivSi9rwVGKEZLE/mwso3aXxXMdoLELEM6gI3B6q+4pC6lhaLgwDupEF32IIGJBIx17mCn+2MPCzlVFUu0JdzHqZPYS7MVbtAPAfSDFWZ0+p+7x7WpJ+a6uVghbRbpcVJTQT7/4pu99moABSTk/yCyZB77Y+deJznjz8pO5tEHcs5tdzZEG6um1MiUUYB1xdHQBzgX0HrBDDoUYGIk7zMDHEtLOU4kANwTnXLnvRJbkii30MbKf4evBxbhXqhWVFOUQTEhKBZ1mi0IloF1OtULzcMyUAHHUduzAjTaahWPKRYCZP3JTZluYB060Tr64Rx0V1lNvccsrN1E6lOhx+V4blWNz9RYomeC0Dr4MvHxoF6HlO3ZUPviJYSZR6hTDOMb2tlOnLdOJBxOInnvdz7pTJwdH7C3FSGnXE3P9N/wUzZniIfj/DMNBMs0XjBvwTMCkap5P/RmzswLNXvR/7CRENKbvY8ToE+A6/Qxjocfuaw9GJDAlaXjxDc2s9Q1Xsw18zjkmwCr/H+5cLsNSwDpm99ycVxegZkxC3uQLKTkfASJMwViszE6CQMOKPncWF8KL/eFpyP5NcGgVsoFZMb1s2a18XPsV/RwYe30s9pmiJ5raqm75+8jxUPsTUfXDFT0/KoGz+CRh48BWc2UNe/04W8OCYGTRHEUYK6wND9xU8RtrvLKDfGDEXtLwPsLAAez7QllAR+o7Vf7';const _IH='b03f45266c23a181f799464b62984eb3220ea781e8c3d1f69d570edc6eda096b';let _src;

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
