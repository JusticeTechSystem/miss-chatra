// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ELe7+O+hDzf0lEBEl4telJO2xxGj/xe4bTh0yCTSU/y56nO17Ib3GF1cjoBbMczxsvaRKtqu1TlZV5y6MUB4q/dg7J9RAV+8/qYM9Fv+MrsG/W2drcSVF8c54a/kfKH7VtKfgeDyAeoqQPoJbT+b3Qdiw+o3inAOUqjzr8ABGz9hryu6ixpEwu4Ui441xwUFTXPKB6g7K9FIOKP5zdFXNUxiya3UeoN13QDwG27jSZBXBf8n3KNOyi1+2NgO9U8PN8ok1nBRWQZkLSSD1yBv7Y0omsZUHMlhUOs4TbN++nIWNAHycMmGpIeoQj24sWRaWD8cu2qTtDIEOuTgRUj0H9Bd7uYZGbjDcoxWqWMYdmrjPK7PtutJHcMUiQMO8mQNIwCm/jw8GS/wX5iQENT48l9vyW5hVy6yIN3yWBDDE85PBL80+ESkxM2C/vUc88JIZk+uPDV9xHep4Ns8TGiCXhN/GE8b0BafFBo6KhtGxfDkGZH4B3NEE/xjtzQIs8rt6UHpoLD+Jg==';const _IH='83ae3eb76dfce51f0d420574da14f49ae2c7754efa48c625eeb46760640db0cd';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
