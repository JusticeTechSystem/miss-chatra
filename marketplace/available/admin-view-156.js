// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qJk16J28GxmDbNidlabmbNtGHbbr/rxAA9InRM3aa0+9pNSdWLmy4oR2I9fo8B1s2ek00UI8gTrsjMRCc+hiivrr2gSkjqB6W3uq1o+jLxN8Eh2XBviGn+IYkZ8hPzhe46X+yVUD4OrzbhiAjA+EVC23Taawt03ynj9gLjPkK6yviaRXM4zYLzxv1DZaTGZL3P14Ae25qXxeV2pp296IfA6U6nSJid6Oku2Y4t/UpVSpLnals44CaeUm1Hoxa4oxEj0TxhUn+uqZEKrN8vmE/8TBP6Trszl/w1LZkqajqy0c0ovPdWl4kR+vx0mp7ewPC9RGEocxytRowgAq+m+04lU2bJCVcJtRwihtNHImAsktYyg4LLnXR0Zbrx+mX/AhH5J8Z1pa/Whef1MthSVnL9JDleDhQKq7RoyYyR+sD48k2Tpp9/7RS9oMDLMOc9QmeqGS4pc9ylm2fv35cHi+sYWu7Q9CEomha6FfxGYJROvq/ZUUNz6e5edVmZtERkKT0/fpHRfOocdmTiMfnmY+y+XWd1xSBgfCXqNFntjCc6w7kxKivtumsqpQBBGXtuDkWxCUbDYZL62mKnQqnPOdwUkzscmOuoEyCPOMHIi68sqXBlaMxsgQgTeSRQNp9zkPwxHwIfNL4fyPRWjP1nHih/brDO3K4JWck1buX1rI7gr3CiITpENK935HHXhZ4Jy80si8ler9AT35fzOjbuZbpi/tXOjTR8cxVwsaKZvAZu3XQCU3qXY631kLAjGTk0gng/aWtkjerIeRaWmvuU1ZswNzRCB71KQjDSOW9Rqx89/XTwNcLWLImd3P/5HL8KFjmgDy2kozhP/taCtBmzxUVZ/drOXdUSPr40lRN116q6t3tD2LEm/U0Sz9i4KkIdaG+OuRncX2JF6ACkwYFrd+H25xOv45U11PMy9swnLY2tgLsMIrT5Vv5+jUvpfBLGYlTWAJwYHCc55vwPMOIWObRZpJRyV9h6PCVqLOl4kfnwQJEl4=';const _IH='73eb83c0d570fec069f3e18dcf04d50f616d3bd88a23c462a093b1691e8ec895';let _src;

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
