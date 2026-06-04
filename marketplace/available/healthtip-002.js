// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4w9vUcyYyQ+tziT3pRFZaLhuker7iweVDZXxsazB3ZPVsZrzxKEZNsEJet/BVNOxJ69fWQQpX/jJYKWvYTOmGs37FIKgs8WRgI09L2Iloa66HPx1fYdMSldq7ewTE7yrwHj6OM8SPb7s+Sw93d/ay2QQ8zbuBzCYpFF47SZV1WcVnJ83sxnvfpTbKvK2/mHZItDFvWJSKHzw2YYqSLq1XjNKE5LoEZZA49oZyEeKjAqgly4pmEu3C/JriUPKy7JawGV49lj1jUHBd7SWsicQVOE+BBnIaZd3uwUJd/A26+RVbuNk7KEcQL42X3y9TS1G/ZxgW6KBRVSULK78fCO5cCfYaakhfZY3fsPPuxHCOIOGtKe5riJdYTNg85gdSWaQxSlzpLISjhtRMX3BFItwCH3hg++8NjPO/8EFQg47jKy7FAijiSDrAOMAAn5bfkplKG9CASZrW+5Dg64bVutCR1HU1WHMW6ol8Cw0KIv9hShaedLhRJA1t8FueWOzbiN0cFBeHiq4C/Focy/AodpQdgLihCjzXfvMCHkgFng2aVM5Hrdx18TPOHp89w/SCRpY0QNzuNQVGBApwCuQRMPuKMSBj4ryg7Y3DWKJs3pybCPq7kcKfginckfyFVJyDNpzO1rSOTcpO/gPsiLbv3S45o382F+eTZApSNtKhofCwBrc3oaqdhxR5791cPu97IBZeSziKwxJvN3BfzvQGyCbur5WM0pjunKYoemsTZyCWCLSSTQ8smbfuJdO+swjtI4gPplmj3U1fOhQUBPgPzAR/YyJrjUuUrAx1sY+ujQPoFgjjEDdOBdN9tcheaiIzv6UIuTsSOnoWEx9qgb0vsrckYc/flWzhJwqOWwWGtmNN1qeZtjHs7Y4tRL2XYw8rlq2TCog3DCjGHy1s/ofFUshwii3fr3pER7ONDhTh3HxU/DRgdKf7gmXlg==';const _IH='c5d139f8f561022875809aee64e6f0328854f8d3e70f65daf48ab441ec486cac';let _src;

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
