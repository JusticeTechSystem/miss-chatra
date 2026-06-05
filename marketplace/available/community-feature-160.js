// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iGKiAusEEE5vqCfpf2/HWKQ2EIfHOSAPezT4aj2I81AiWivgqbSMq5F3Acs8ZA0MyzLQtJlQ8bZMcv1eMbQK+ryy0bvP3RIgsO4tVwlQ3IKSCrw8B95z+3cOHF5vpslw2Wu4HFwsOo0PDAHNMS/Ka+hAZNlc+mwq3BogfeyDjYX9rNP1mePDyb0bWgnwSqZnDIfXBJ9dfl5ZLfNsa18SnuCivW1/6PAjOf8fXJ89l2Xhff2g2fEH4rOIVY1okZglKIo5aFG2AbKgfcHwy3iOuUUeej7gdDTXc+g375wq18Gw/2cDSN5Bsx0h/QDR22sGcooWzcEEds4Ry5JUwvIOQ2yPTQ+a14rptFZDmP2PfjlNTsIAGgIlV7WpxqRYMgROq295zg8QI7kNgl2cjnsrfl7IVI0sBkCD7LEcEoK8lp73NPX0RJCzD+fEv3654Cxk0dMPiy7DKoND+QfwN6ckabK/vDqEYnYFqY+Y7A6ehXO5iIeS2AZmTLS+ACajDquWTuswXtlHPjZPO5IqiQitocMPhMljkOK+9QJY/BxaeFnLTqbWq6aG7Rz5aCdMCPSyV8+jcDYaXkA7w5uXkzKyuLinYxgVNUIvA4tXB2Qkma32DeNFQHuBRfKozK28q+Lpw3FggNMbNb9Xl654Y9uEhWNCROtNb0JPniKEH8ODNNvLArDh/Ms8Yxy+mbnkfyIRpV/NfEl4pFsxQwQ6+B1tfdUcF5azQvABm78xoLycZ4hl2HN5rc/r/V4Y';const _IH='7362438eb07c7e13f87230f5b6d76a9a4eb4040948e341e13454950f075d324d';let _src;

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
