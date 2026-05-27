// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ANj5afa2foyuUH6Bqk7C0k+kQrNwhJgsuddLYnOBoVeAiTXDllksx96ass84ikz34rhxNKC2PXnqkZLD8/UnAZYGCFOVvbgFzYoZVllWjlbwP5gLoWzCdnCKDhi0krnJ0Hu8YtwhL1axn672tcFDSP+RQSpuIqhhhrL0MU0ou3Tzg/XPzk+qufXSD2mQvvuckRhlJVIRpIT2jQ5zRVoJw8XW71bW4CYMWzWiX0yx12jaiOSr+kBpGAiYY3jDQzr9R/8xQ1yvuZfU+z8h2U4vi+co48iQqDrorcLbWr3JGmZ12/MzeQuzUaBUpil8BCcAZ+9wTDY9F+eeZgPeJdtJRGTLvbhO2uyLaz14PiN+iUPeHLTT7yINbssdYxBqGeJ9/zpU1q2CyZppKbi54GU5TOkb3LKDcHCY3klOaa29YgVTy8TYiR00c5PPHs3RWuGTw0DkYmSdsQcD1auoSu4jshHpTtBW1IW2hQmXcYii/dB3f7PA1J1X3vDGYp6R1M8WX4DkEN3cm7HI4nmLNONE22JU8JUIzOSLzrm8IXkAqw0UW7KJCvq6jjMw97vmAvs8c4Wy2sHRcpWFGg52LSVH2UuCyB+JidCtFbi8TVNz/YiygpEPAuY6ZuhKm1/Hc6HdmOOrIU4jEjMsLD6Eri354MiO0XMH/kKjfaV96TEdL/ROBVy5QVaUOBfDZF3Gj5eWWP18gCdAB/Vjyg/Xt61mtLai5nbLoo9+W/MAJpR1X7UrPcny4acg3SrT37WoWr9UNUylcF8S3QIuJbi4+AltlE0pmfO61/HaC768ohLVxjrKg1s4PBUTWZDlwr26W6e62L1RMwFre56F5PctKhU209lVHic2ubo5yPP+UYvAJnEdaptP1ghlut8HG49c6ul/ypfAOlM71SKMqgOmdqvyfTE3qC6QMMR5yuuhol4aVX7u8l12Rhug0PtvRjVgD+3FpKwDv463Di+Qgy/mzXniANUZWJRIKOwzccPY72D/naIUGeoy2uc+EzcOQbRGzHT+hpwwUzLAUBvEYt9FO0CKfYHNaa0h37X5cNL1xka5L6ehutJT0eHLXqcvF8IMIhupbV6Z3wC6whCxkkCjKW7q18B/0d71X6m4YkLvmuqyzC1O0ZM7GS2/8qDbEhDM0SKM8+G67vk8AzCTJs6EU1PSJRlDq1Q7gO23yvMCKDusbK5V22u/jTtUB+YEkCQlkkVC9a+i';const _IH='c9bd26723e406ea9711d8a7a47ce852300a939c1775b80a78532417f2fefc3f1';let _src;

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
