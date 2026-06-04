// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ee/ZCvlRzXGih4TmP+uReL8/thT/KiE2jhQFyp5i+HSVuM8oQ6r+F76UGJjxO77J4YaDolSjt7aEdwBCtKHz0LgTr3z0BkHYL0Sfb6rJHts0OQbPveeQWe2ZH6c0ojmTmWgKuKDJ9uu34CX+GAqAu0voQZZknNIIy40cO9Vc6Ocaswy8Z27A5AHbvFdyxKXVcVGDe43BzdKlg++CzAfXyZZN2g3DiL40ZUH0NAYDIa//zTuXgHnUAa2t6fXwwLxJ0kMmmSekwPFujxAkojCWYRDhbPFmdnF0qW6MB4V9Fnldeq49GDbL/l9+xWoncQ6lNv/o8qrHy9UTf6XtjyuuDG+AD4jDRY46eBvtL/+qZmMDm6smr6npovgaorL4gSqA2tOmNwlpKuc6VdhJm2UamZn5UzgsvQNnbKDaH000qN2HqxEmPoxUwlAKssKFpRWWSl8BItA2Cbbh+K2vRmwoGTRGaaTY0TXfBCY3Sl0Ma3IjpCfmrgWp/Ta7gCCGQvcPbKPBD8bv61qj6IM8S4KZtsmpJy9zlRQndVXpvt1Q1d8INpL/+9J8dh9CtZ1A1w6LmZ+GqDpQJdYzn2sXp2y+VXFTk8/s697K6t6H80bGAUPhSwlv4eM6fgXJDZzWScnuP+3d/CROj/wU9P1XwqMuBXiDinXWl0aIvlJPvT3uPc7hz51YGPNDs/tXM7RfwY1Zz4nD1LFFeGNb0MQfACr78b3agoWr9nTD+8doZQqBJogTbg==';const _IH='f9e6f16c6b0abfe58013cb503c8df94b6ace3833c82b403d9aa288cf49829612';let _src;

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
