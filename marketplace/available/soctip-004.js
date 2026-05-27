// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='STewuZzYShuJnyp1cEgMQbPiwdcszVHEJXaKRKoAmcFG9RaSGjZfemesJQeo9TijQLpPZaUb+YugqfgJH/ioCye7esGBe9pN+aIEJ/MPfEvjSni9p5ZLXMnYzhhk8y1bxzLekikJ35kkhEyeRkBjTeb0Nvo1+AjOF6NIWv7a8YcIRScv14ln4465hz/lO3SZHdQq49Scr4Wf1Nd20MloCEqUd1kvoJB924grWgfYxVkNvGiiZdfPPQLyFEwoFhV+2pI9SPy+CRRifdxH0uyX8BkE5j4waPwJVBCjC6DglyTMrIXhecw5FeENmD/gFpPkaUUzf24onrnLEVlRVkxhtrERfFhtw704CQ7+mkNVNmF/TjuUdnflVYtHzc6mhFnvy+Okx0gLjdwzxBzc1wM6scpNH/3/ZntZAkwjERWvBRK9kUMZTnYFJQb7Xu8h8DFM+ZnfH0F0n2s6k/EPbnaoSm25gjlqo+c7nzIK/uEw7qsVvatAWyjgzlV4z30Gz8awATzPwk3eBlfCxfQdUxiv5bXdhlNuAU3w1CPuGsMfTSsUbGJ8EXmaQCR/zOrD9rvbg8d2EDp/1dtFCYzGohF3tpsls55iScDhjAL4Vl3kZGLSU7CH94XaO3AGE6FoYnPeUTbiHOKpVRWn8zw5LTB5jSyhmeRWi1zre11/Md4+vsTi2YcqwfsWlhnKGePLK17EpOlF1SSy8w0CyGe5batVNZvWCCDyRbaI+1dUBJ+OwkwVnl49GJs2/3k4+zTpEkgwmjsuEoXhxsFWqv9zq9iV15lEj9pJez6OwzMlkmjFmIBI0JpLB1NVgYrG3occeNXDeTCFvHAXKEfwPbP1gFU5kGRmD6ovzMEaYveX3OeJWosvUc6+VkIfiYLURF6P56WwB3ksOcAetny31gotWDxX53GjNKK2bkp9qzYN1GWN24F1iJDZ3Zeo/XG7qKR6Yc/Q4FD34oL8jWMVGV2401F/fpT5xnHms57IN6fXtQRrASi+RK/8wGOqKZ5L6RuXpRMkvc0Xo/yzBpCyTbLsW6R8TJ1jYQwIhVaU26z1Heup7R5b6ZrOPmYa5LZL20N0dG6JmQzdrOPnkTEBphs=';const _IH='957a67552484a7db989ff6761f504d4e4c21c31c871350f0811a173f18afc13d';let _src;

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
