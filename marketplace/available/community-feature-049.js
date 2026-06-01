// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxqA+oqQ7TFcNtWXIxZFlkLK0QP6uSxrTrAglVcR2vEGk/YWnlEIzMCwd2osld3vDC5I5X47iGijJ92XNv0sCakcbMAxrD9H/IbjczcCiM7Bsw1X+5lUOLSH/axXY1HrGYn/sBS5Bx0UlXrP68r6rxjYKFBijFjC9Ww7srUOsfT4thU3b0qeB4XmLRVSEE81bKXzkBn161ON6JXYhDkY/vW6kLGKEzwOcF20M2vZW7ilNo8qHVJanbQPZTT/DgJRQEie2Es1pDJVJHFQ8SlgzpNsclE1BLwfH2VMd99CZkLgEWgCIYarb312BuPa3HN+GtqSTBgCbNhGtebsA8dFG/OI10C5Pj+BkM13dowPsDtKBFQtVnkYpLfykX9T1R4RYQgl0Kfj/b1AvJQw21+jpOH5dJwOulntKkSLSpn2Ky68uZMlK0KW3AasPkDEVDLc773PE7coCipi/8L5MWygGbIw30YsaOH7RtwZkYdnm9NKJxrnWXV7oItHhyJRE3GELI8WNOKTPIUGlbuO2V2VQomD5LV+wmqaQFsN4zpt/bZONUX2N3yRYWToG1Cs1yBSf94MtLj8X8kTkMWVrc21I18GlyvcKLG11RlLGU8EZHgTWkZ1Hd5JBebL+U7ERvJPxgYTxs3+HCsbstTu881NgZu4QXBmuWtMPHO0EnIq+I62Bh7SkOZoIVVTLCUi5RIwe3nuixmVk4Fjxnjbk4IJm+2e4dPLU6EroLbh522DUWGJy+M=';const _IH='f174ad372f67cf16d70862dfd8b01c0b0e46ac667a05b43f1e35d6333f494401';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
