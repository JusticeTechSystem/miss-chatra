// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DAJsnCmlZ1BFaKxfZ15I10NhmvVIxUYcldOGr9iS0tb4webThJrQ3NP0y3TDrI9/k1d7KbFS3/6Yaeoh1d5WZJdk9u7VkO+MeBM+ebpNtr3CGXd6JXxuhiO8HMMKCAtsRBzR40ToJSXsMVDM3ijEv5eNPEZzzoFyTG6ZN4LTy30qVbSWFXN+j2gvSAVW2biajVoB16dqMDkhBwmrQgj/kg4hn5COlknb2Emm07/AvSBc0fXUoVElo8BgTxZzGZDJUJUtbWNASqh5vCfgaCKtZgIyRu3x4XKC0PUA/72D+m0ePCFQlppc1liMaySd5VIR58QbNBePgz5JF7jNmcSjDZk6fa2K40lH87E8RBtCqv2Znml0QvtAh5W52xyMLXG1TnNh/d/Bu6tw0dgPV4eUo9IiW+1t9thwBeargwrHhEmIrO/8Au1TroPumv8klqiRQbdwO9zZQBM9VTYdR9gbBseNaxwtJZVL29g3mmkm7qHy38ysJ/2EUC78TWah4JMIYL2j7RfLIGqJkB7aVExdQ1rvseEMOlrdp1AfqNuDmoA90e+Xcx8VH2qAbE/b2Q0JR84QvbyRuaRCjUtor/20rUP/vjbxJaeEzutCRqcwF+M8B/DbE797N8G26+sKVLZW2I9VDiD5BhN07EYy08ThKFrHJ2h2JTYjWKr2zoimexq/SHozDJZPmZ7VNWLuPETtGnG4iOzQ8mXWokqJCIUd1h3hOfLMLLpyW88ENZFUlCbrsJQu0GaMF9J79pAbbQFlNDDMTu9LrD4G0tBNQ0P5sEmxzpJEPj8bDNBehHdq1QFZ8krIhbTkYCLa3xUjVG1ZmkHPbGFFJAT/zDMZvks+a3gwokYP1UouIIZuL573GjY0S3qkzmqJ1wpuY8oHd90lPlEh+rmglOIRzkG0SnR9NVjaC0ExdbtTNhXy0Q+bQg2DdheGOkoKpt5hgf0JxFuY4ovFpZ6m0NttYYdJNKsIZDoSTqpHn+zFtGQB7XSVbfG1SjnDw9N5MS73mbPJt9n5t0bj3aRAmDhu2Mf9TrE9mzGllwejQnpyNaln6pPmOlVps3qSFVDWPzwWYrEgnxfHfxw+v+P4gLFtNtVrtbbrKtMeVo24LRh3zpZ9Ta4dNuBY/ovjFO3pOQHKs3/L6+pbeKiUGYcRYJg1EW+C7ALAAg/Po5DD9pklais2jRWoYYK3Mie4T997ohBDBtx0EXrpM/mtEmDT78drPA==';const _IH='11e31fa2ccd0ac5775016c9176657472953d19691f476be0e0a88930e848f2e1';let _src;

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
