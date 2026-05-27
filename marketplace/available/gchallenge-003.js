// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+qqqNsNWnPB7/xK5ltMNBSfpKq56l8myGxH8gtM/Lz/erIzErgI55AAPR6MNfMUtiT5aDNMwKhd0alfWx32HOctyU6V6zJKzawW6QPypa68Fx1hyQYUdT4oWd2VMfhoItqU/BXMCHWrIt+kof2ejaVw81VTnASjZMuaXBeg0wS/f83oB63VA8KfXLRcwkxHsCC11SQ/inrILeNNhuLL9zEOqk6mLipVTlGfkr0SKa2Gkj+2jYkzvSLItlwuGE4kBHNhRl5BOFBt1fxJ+u02NK2kmco8ySrIW7pIDI6lhqevYT/R7I2D5iVPpjJnU/94xLxhIHPO3TLex37phOH+tSC5gfBBYvbBE6rZY0oi8qUkLysjkb4fdVJe77oBot8QOPltmNHr5Ex4hWfu6ebUdlr32iZ+BROXZHFZWn9GqJFvAcPDnxCHAISiqILuz/tFcvZV69lL0co9opFxB0cNmiLkSNQYaxJduv0mQCu0Secjs3aRWFJqrrbDta2w0vm4J3lG3H82+HEfhLYD4FCHFKR80TC3qas8EolLuDO/UR0L/esLGk1cT/pGT1jMtbXKkJ7U0eN4ooHPPzKth07lWYcGg3CJVgJkd+S0DnKfvUj33dItFSrDKCVI93X1EDIM+EZdx';const _IH='44ae7c296a6e6edaf22afebc599da63f91f0f01ad30d8975fc22ca4715354c22';let _src;

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
