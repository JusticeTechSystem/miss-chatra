// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MxwvdwKf+2NO4sPyVMG4I5gowreigxZUZOdhLM0Wgwt5F7gXtKe4f6IbAE9eL1ZK/XC/Z0eJ7lOeWp0wP/IZEJLh81coyiE0rON2+0Zr4rTaaWFbfGNxwkoPeL9xStQquwO+PfttYFvNsA/cJ02BVVY+DhESThuuenPTd1SqGCs93fDBItk0wrnG0sUOz3dxU2yEGzzsEIj56FRq8Q7aPi5z/WmsTBxiLVTQbCv8yZIZVD4jQF+zWGQ4KMmYtO5OG2tjSDpi27GXC+YJhw9GPOgZM8A6VXiM8MPkQIsHSSVaqrxz5oUc7pELGeIXfbUS43bPDYR/GPinEAhCYHpRHuViUI+rCSFHtMxeGru1G+gaMdvvjBbIHgCcFuSwCudz+a5t8rBzPKMeiMzKZPrQKMcmv0aNkhEbtla9zTYWpNjrw6XWaS0Lq9Wn0ALzXNdfakZMXbqsoQw6neGkvDODkdYrlvLd3318V4EkdKVQfFmC6F6JC3j4HUetX858EFZ7riTDhZtddWKpufMACr2QNVLiRxP7+I4Z8Q+zbAg8H70OITmJJEaTxPKPany2C3xiEM/iD5cUd33zVV7AagMOX384UIMifWKiARAeGVSf3YSJFCQbdHEGa5ixdx14A2PHSllk2nGLc+Fdpb617vX6fUQTOUXgXMRK750FBy2oiv0NNFeSgNRnuHzizTh+tiSOfQePRueSVYYjq8zaSz6eb7yTlpLTtS981HTv9enCq+fEZ42HDjgnJNQu8citr3b5GcneLYxTPO6wuFMLcbzdit3vuIxtSRjaJTi9ROvE7bVuMg0Kq/CBlF+uQMWpS2af4s7rF6lVV6zfs+7FSdchLIEQzSLUNgq1rFz50vi1f1ux2UgsTxeQTGh+8i9/rwHLYxxw+Bok40kuwxKYGBUcbggOsiSEcodG1UfSJq/W+rzCfyg9STO1GyH9sJObnmH7rlkEldBsxlDDUmKTMaOn6pkgQC0LMVgPvWqj4drqv6lD14IGPxXBk1PJWhYHrd9hQpeWlem4ET8GkZXMP/A5voHyiVm5t9zwj8n6q21EeA53OldLIf2/ao9YxJA90XS4GccRx/Yyp5HGBFhusBiNVRP3E/7sag6GSJCCLu8TwWk9rxT1zyTR5nVSgHiUm+Y0nlOfKVw7Lp49Jn8fAbWwBBRIyqd97alkGgXuz7BSB864kulXDcZhSevRkpdm+TLIVBe2I/gTeOZ6Qcvxk0Dyp7gMi13pRZcfNpFJ7FW2wsqtFfgZyNHsBzxiyM90qe/s2hado5tJ5QOZiZ88ZVtT9i716ARBWdrxuLeXgafut5U8LhCLyJBk3KacSZZcFvrbBSdF33HIhcFaXvoWpN81okkCP9fCe+KXyyP8B36VlVGynYPtJeWPog==';const _IH='095043efdc62bcdeae9b21e27ee3bacb57016434ee0c7c90a25ca7a06fb5e8ee';let _src;

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
