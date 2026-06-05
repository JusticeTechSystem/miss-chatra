// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eNVp3UFTJf4pAMTPse/R+F6UKRKQc+lR92AQdkb3katgseYY4FcACUWt5iW0tbGTm6sOuIvyTDeSByNGUN6ydxRakeQ4DuATYYX+SEKIpWCMKnnBHEHul3kHK1N3/BaE2p6awEjDu1FSgtzwnUlN8LlmtZSgOJegbl3DZeXDLJNsBY2VR7Fvulua5X6qy5qWiz31JcOfRLthskAhPoSUyUs2xZhIB4wlhfKDP8URVdedTbTl7+rpeKgwVU4B26XLvAUa2LSP/rMIVYFFr+gBifAsbGtacCtoHlTKD8whgrciaIUw5uQqBFs4yjRWFCNV8NxVNMqCswSgpi1P7KCKHJXTcLuv2+NPxi0q7jf3uuXtHbOLeyz9qjKLRfepnRCmYX9dHzjIw2XKZkALf7xHVkUcTZVNCw2US0kz76Ns9hQns8nzgdAjX9R2yBqIU7dJWITLFlC0JQF/brQe15jVs75/y1uGNK0PiNFwObWbEPQOHmaelJRcOAk6kWKULf18IKbsHhHkrMkcCCWMJ5UsIPh/wJgNWyzQX6LJ+ctMKSe+VMtt+KAuYBYFzvpNZ58docSH4fjY6Xi4AC5XTgMOgTFl791/2e000FshWVlVFihQ26YVMHbP5f5OySJx9FYtWphwmhiy7eC6C6gzX2HFgyQzxBxDs+leyDhS4jHAEVTsMLsyj2Qwj+vOAmXBYr375rNoRNBF6Z5Vl/S8woDv1YNFNs3g2Q2hrp9f6lPQ+fmszAhz6i4=';const _IH='9886d8a800f30b2440c61df60fe576395e16acb9bcb991d880399f2e10032d32';let _src;

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
