// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hrOQeGN98vtc0bKz7gjKSXeSKkVIeVJHguBXQP3duT9gPclaTo8vuA/p5bIakjcFmJTgon1t0S8omozzbIb5HNhDRpp7Fwx93pk8nMJFZ0PUikIfSUrRFnG/Dpp92mCEGWuKBZREJLm3Pa+Bo8NgBGVD8kjJTxXUpJchQgiWB/KlCi9raTaGwE71VicNmTs5FAcSFPdxMdi2Y8TSiUkieP7MhpSWnpj8so8yIZXehdIttNJxpvFBrP7Wc+V8QNzQNLLv6bVPxMwD+QAsG+L6/dhaNBu6T4P9yT/bLCYKZxT/mXz/mpEpQe4jtUVqy958moFoji1eTWfRIbN2sXKA69/hHMRed3HCBPbezqCXkFF4XUUK6M0fzmXBol5O9VUKb4Yg9DZ9ZE0Ht6RftK69qVBHKs+X9YEAQ74QM3oGh51Cp/3cpzunauDAtsGpD3kaxhDRaaDaLO676AfftOZT13kaKoq0D+2PPX+wnM6Xk8ruZXSDleG88/zpCp5JUHzmmvwjbrCQlUavD2CT4srvpgaiix6liPYBwNz8hO5I51YYtPS5jfE4mcKorMh2Yxc3SAO+5cxLzplFINBT3hXaWb0X8iAYroaExkqTGRkfROEgRP95br1ZALkb6H0vIIX95QluJfpSX8hbonRFLzsETp+W3H+qiiXVsEw5bf9VteuDt+2wgJ9Hi3ocoRJrrYJBb9r+foLjK6lUEULSg6Ghm/LAr6Y=';const _IH='959b79c589578904b7101e32c407fb79bbf791665751bb8f63411f443da411df';let _src;

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
