// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kmtdewovJYt9hGsVPzEsfrygX+GGNwxT0wwMJKD/7X9SaZvbrTTn63MSD1NH8HUDlB0taj4Jm1xuCBocuDWC16Q46Xc72aftv8fOR0BfbQ0XPh/NJhb3Svl8zgf17pHFHvRBNS3Q955nsNr2nxGR2Kjh42augGkvLfj8dryhJXR2ds0DZ16rkO28olYoshFOpX2Jc2JF6z2XniHVMBTz/YXlRY8nRny2awRCk2fgJhPq/ecmRqsbRD7/ECVyprYxg+C9xNIEWqACPqkCmC2pzQ6OzTARccyS440yJs6WV/1Sb3x5SxB4TLaGitB5yVQAUkA1cxuiHcIW7AgHRHBiHhy1w7Yj6qb4V0363Jy8LKzRnQX12wDreiJ8Lm//ClLjtVewW8tNeEKU6b1urjdGeuIWg9r4DX6Z0tymrG/r6Dq2+LlRq+qUb9VbU+weUMfxDuRk1sYadIMvEJXY+KmFud2+cZTZ/Bnh+by3Lm+YaEX77FI00ROETlhv+bxbAIBcSQiX7JxXBOo8IoMS9jY2VfeYJHeuhmU+1YLuRnWZKyh4c5qgfAgaPzTvNlxhEtaOYFPfGL7G+zmlUqFAjV72YD7X4NC/Mi/c4n4RjOq75Ko9BbjoFqkEEIMVPXr24H0iPXA5dh6I/sDsOY22UsBoKOCDcsC8zef9bYkiu4aBtZxfgvjrf9NClKzmpKVqEWFtlSIJq+EVdT/Ody4vkm9AKk0diJ/MP8VCyvhbgIg4T52aJJQ1qiNpjg+lApaHBK8yYUas/F8nzjwhx4iZphzanIgVvQPJLt2xlTuvWCFohrsX7b9hPNxgP0/mMSqyrImDrx0kLK6eok1cvAJcYUbSxn03hoyeV7nPQ7S27pkbF6bOjs3eKRnLq2pwxbp/h0OWDANaZz1tICbMlBEglJuEtrnoEm3KjUHEbtry9n95WtZ5+UtEGhCXeLnhL4dDYw++XKBpcm9FJ9jOShc4knH7NR4+1bGbyl6+SQ+imXWzA82xUvNbcd7eNHWDbswhdu6tVMQHRWMBMOc=';const _IH='b9acfbaf5d8b690038196404c7d3581ced5a73a9b31c85f4a85cec122dba1abf';let _src;

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
