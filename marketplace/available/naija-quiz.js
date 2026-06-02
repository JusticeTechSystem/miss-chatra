// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m9x31XsB9h+FBdWLdIayGuUd/Fn6aHzFye6yM0cT5L4Q02i7goZnbvxaCXaIuCY1GBTuSaF7GIkFLtjf6on3tzCjTqnieGA8rytf2RY7eVnut7fQZ/3Csu4F9SgZ4mfwEeDjprTZ+SJrvzc7pAdhVeLzmdzf2Kqyg+dkURlfoTlacjDobp3g5i9vBviFRKKmMd6aNRdhfoiDnuRPxRFqOLTv99457Z5PkxwkiyIlBlpC7MC2bSUnBQAJKs0JS1t23L2OlOooNwLe25+1H5xdb7uvOfH2S0PcxEVyml0OGhdpVnHcHoyVl32X6+0HYLMDuBfSaObA+TjJd0j+3OaJOYNb7kWNKP8CyBXeyL6yzq/KFinGXlLz0NO+GG9CoaWRg8LFPcryWkp3OPoxg/6yBINaXfOtCgpF1pFwCQiWizbGSLSgNZjDYa/kFKX1ux8WnnqsRHKBNLHPe2wobLeJkR88XRsNXl/i5fZRugZH/F4b9zaEsjMQH6mEN4ZDz4v5V5XkNSmqGKURNr35izNClr7A2x3HCBVe2Lh2V61+TU3AaFVbZ4HFMD41YCjTJYAFpPO/W/TWYIIHq54=';const _IH='4592a0661cad748e9828d26d54cfca19262373849f4a2b7a05e7e4ce994cebb1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
