// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8vdeo8Jcw0vx7Qvv8q3E22buYvRdVJ8Nz/PHkCa8AnCTUILWQpdw9j0+LCkElhDiKx6yOWed2NgVpNf+O4kJEI50Jf85ZuXW2odDCsrOmWfPXU8mJzbdJACCCBE+xFVtyf67Vn4F+83TxkOgKu6eTgEDpHdt97CnM280qk8nKXqd5myGaXnHxxIyhtkZIGUoxKCM/NSTBfmwgW2OV/aNV3FBskn1HlFFEPxYBNejy1yROELrNgCBVmOws5xr6+OJ0vYiNfrvRutpF+BkUPhGLn8CchM/XOiuO61LTgT1+CSrrbZAbe/zXnzs2UVw8Kyt8QQ/yDt6M/g3lAj4ZWkmoj91imTsd8TQg/0nPu9p7UW2Mrq9j0jMpCoASbfIZIw+GSjYb5wmE7jAvemr4PneE6+iwn7smvfvPI+ii6qQ4XS2YJbIzvhV/E6hIHgLgQF9vsIlj97GXmQ0f14FVGU03zWP3Dr1d6cqrGCAVsb3UO76RcU4Krv9wpUeSWolUMfb1YrX5re1GvHmzpQ7Yq8J+OpGwkoztRCx1RQPJIuzxZlZnKEFD+KtHS9RGcrvSw5N26Ze8WN1nVkCX7GyIaxB2+vF8fWTVZlCh1vRzNefcN6HEe/DS4ndM4r352Pe6vXVOk93PLWH+E1vtVb51p634iTmbjCXWAjaQY3OUIaKHw+xUo06/soTqAjH9JMcT6+XPSlWdm95YH9gRPiANylSi+Ow4G5MzGEQXiFUjgg=';const _IH='a768e1e106d16f839c5bf7e8b111cdfd767ab6e79315c912685262261419a38e';let _src;

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
