// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ihrwG+kbBBU+mhxlkHnl3ZFR/hA9Dl1VHTSCey8emx3Drt85/youldnnESLaxp/a0EpiY5XqUuiYjw/JxlPKsNzv1u8fKNrHyTvrPOPeAv18WxBS+FLvEicDjZhzQujHY30zNbzVgbNMd+Cabo2y+2BOzO8VminHjqS22BpGE2bIXqOgDBoWiRdOmM2pioI40b7m5bVX8xX/qTQeKItUSfozvzmh6yOcrR9ZRqNDrUy0tikIYTSsOPRvGnd32PTUbDzufIiMr1EWOf99XadvMrGVb6o4uLkiwFPK8JEN+GI5nEjNcCWaGaTalfyKG6gbPZfYVqE6W1oK/gMdZwT2udle+zzFztBie0ff3qQZSPoOO8/Pr6fnCM8gQ20CeZoSQwWzrRDXhJbZiS16+ISCL2Mtw4tsVhc7Tm+CycRUbDLu1iHa+yokzYpcwgaDhWIbK76csmtYS46+KWlpN87J34Hgz4DaqWHAP72T3VAkfjFLdwsIIpxen0DNHhTeayRVKH3ELqCUvL+6XTMHFsZo0r8dcXAXuEUIh+nYp4W6GyZG9gmslSdH9yFHF+1XwOUwo9k3cbZyzZb+jUudS4QZMS4v9uAatSeC/3Wlffvbn0NZt+hq2re1azEC3P+gYaHUl9aZ8Ucd9jggAX23/OdRQSwyOsPd0Ez9bx3xVu5R6QAzmF6KsEr6JMTLpRJ6PeqUTtVwFyT9Ao425E7YLBIvptK7GvNc7fC3/t2/fhzpF7zFeYfs9R+Xyy4O1hT1vA2hkGeM5T2zOQk2U8a86Aqm0l4+Bml2qAuwroNS/YWUetLcO22MHonAbOxIEml6waGTLNQ9GRt89MwAHgoYR9T4PDFK2V3+2rS4Nyc1NRrtKqPiAYBwEAKk9O4fCfpFrK6OvcWMyY4ZEr5CMnDXM8Cp3JQm+hPRK2t2zLnqwsaerOivDpE+yaOTY7HRzr5jl0aDHLaWROyhh797/h6Cuqn+DVP25j28YlcyBID3OCQumqgCkie+nEJSqPFYia6pefagE3bOOKdkVE+ejL+Y8/690DvOTMznXJTQy2c+h77hYT9cijMn8Nr28i4zC+nWC7x65cR+VszDK2nNsU8+bW5xV6vg3PR8D+P1hk2mv6g8uRfqwERVexBGStywSkglja7VKF/eCtWTHCkrCQS+nvtGaLwRxVW0I55Zr0gdBCYlrpk7FxHEX2CgZ3DlOeS7/ac4MX1oGA2AoZVCyczg0dayi/Fuk8c0H5385ScKxYgiwga3WK4q/wOZYu4KhfTfEF+ssxfM7iE8dBts3DvotOi1rSdnf36IiNS8doZyH0dtrEcFGGyKEZD8MconvUjYvC2OqDKBAAIk/33xwA==';const _IH='b1e41876d8a8ff0f44194413866342dfce1cfd2887dec74036c6e35ef080b276';let _src;

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
