// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nPJn+puLEZ4f7wNGhWRPQg930WFjluFRCPyrvzo7dohFgEYZSMMU9sURHuheoIlWZsIeAmPv2ZFbrmC4l3AcZUNTiBiPUN+EWR3FG57zxuF3CGdMBDLMeeVfmnZk5zQVFyd+OrIVJ4n6gpTzrIQ65vwYu68M/VtCPRb3MKmkN55WQLHkEcQwszunBbGCppujNEwrW4KQhpqDlWtF0KJhYfsahnhqnz6Xnt5uCGSawEc3msEijQhmWZcRpK+sycF7S7100eMsCgtGDV2sTVEERnqOGuIwTOWS+ZQq5y35ic1mo1h89EUwgRT4RiSBjYCP8dPlALN+r5k7eLxNvzV6joe5J1MFrk3SfaZaup1SYw/HUW/O8mMbaFKU7iV657+3X5TJYeoBwN3iAPa7yNnyyGw+Kn5l9PcxgQnF/WD7RMepkUcHrRXyUMHPCB2e99JuUj21o2z3ABSkdUyTX4Sez+7+H/THiADALRxdWlNYG3vfXSKA2Yqm7GWZNC+2e8/1e2zo9lQnjM2OwqjCGMGmdVKwPY6Jt+vLI0K9jbTCejL2/NHE58ad8nrHc8EAi/+sxnyzCpUcQlvlxzbcVaiSO61aYkTTaqbDHgK2dkWZP5dYGRFCWIdOfPgX79F+/E7y2iJJxuvQiahTMtX6RCL0l138SEudGNT7Cq9DuXSXo7Cmu21X1/rB3K3bjhpsgZapVXE8bQ0rW2Y4aj9oZPyEDre/wf5sqdfZocdtX6k=';const _IH='45c482f2ece6299dcbd169f3adf56a1a1bdf93bed9dfb470a162cc2044668753';let _src;

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
