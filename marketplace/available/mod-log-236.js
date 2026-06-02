// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x9elE3SJQ3kappEMjfiZvsI6SHHjAI9HL7Ukha6XopwfoRPNUmz/8oaCokxMU3PcW14FX3hG6ogXUze7H4xCvmBVhecrzMPyGGusKPSd09kQxoYvQ+Cp4Uvd9CeoDJsUbDO6VNNP3G/Fpnbu1ts9kfqM1cX3U/GOkHWxoRzDMn4yGd0wT/wowAZFwMcq0/7LXIE68m8iA/GywV3phRWZXdBLFWoKeGUGqXueQ2h3+Jr6dHDwMz/UTnGrSuzrTSmW65BqEXnMADcvvaJbtC+SxlV3pK0e9X1DwMiFvnnKV0dlTVFpnZOefRiNCE+6oDGARitpf4kT8Pi+BMKKj2RYmkTdrSpjYjQ547bP1qAi82uCMtf/n6DS6j2aoml60P6MZ5ZrM4XrQItGi35wFuXPEbATzMD4CqV08AW4rQSejDGP3x89QKwe+Dt3mOluddWJqceONujehivF5eamhMrpWmExW/HmxxcYCDzMFfXcbOwSAQ+R1YAMyf3ZwMmham+ewf2/wdqcC90uWYb9ltdrznysp/Sy66UkO63Z9dbAHDtDbvM3Sx3ZgBkppvXSnWvzWG0PbQQ20hj+44KZTEK5fPbWXj635QVJ3tLR5AP3NZQCuyLCSxYExF+5d/pWYR+1xixoNQ3lxfHY4tHauZq+pIeikB/eNm8DTCCnoZItSWDdROyiGThS+XMm70pULiKKdaF1DoAUXDJKpisaqCZduIHnBFAhBAMWSdEygCUVkLFRUamL9OXmqwPt7xdkAeKtBl6UCP+OeF5ihbnVWwMyeiIsyj+5ouIkvHN/S2nRCNFi99q+OlCTYlVls2GeWZHLOwNV9LamoNCSRmeM5ZJmGv1Lge9Y+7bHyO2+55VBIk5UNsjkyFoR1Srj7R0AUjqgvXPLIVsZ2WCNLe6//lxk3nDEar6GQJeekHGhsv19M8BQZde8cOLBP8fdmlZNNfqafslJetTB/SpnYWNolVIc8MVef7PiVGugyCCCN9qYPVP6GeMAxn8kqlPjL+3qUv/UuIwBfUKxZkH9RPcAMOQxgsF2REG99hGZ5mR1BEYSmdL2KK7DahlcM5xOoOzvb03lKW7f9xzpAwynJ5qWo87eyrBlTsz51lRK8scjoIYRsBDlomq3jgaisKNER3Pvi5ftvP2lsNk99r1sQCb6IaZ1BXFMvaR0plBC7Dh1UgLKJ5R57GzA/BGYVQgvV8efa0naaNnLyjCNDjgZMP805IlAmGyy8kQ/oyp0pnK3iJL/xWWSIw4WRYbaX4BNjCOkulZ/YXLY/f0nlqtWXB9qvyy83/drpXdH1g/WZVdhBLGtDvIw8kjNHIhOyUjA+KJpNRBI83qCPofkQQBw0w==';const _IH='1f3360a5a09b8f4301ed035c9a99a984c4e870f53fda032812ca9baa198c022a';let _src;

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
