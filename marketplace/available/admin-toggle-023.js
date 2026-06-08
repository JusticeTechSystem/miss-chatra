// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iYmbNeJEA40X6+CPc1npEiG7YlcqhCQ4EPhYS2otlcpMeanD5U10PCNrrEuHJlDfJsVwV5q7mbUk0eIgYpEmuZxVkSHIf+GxXnS/aOWAXyU8GV2qcNn5AoHwkrPOsGK9CGXJmxR5xb5WGpMBwFD06gWTGRkb6LV4CFpRIf/dpW947oK5qGzND/sMHKl/LopGoaVEW/2Cs3ZTIrBg4Nlv4oYt+qNwWcVvW6ryhfDHFI3GcN4SJrwCUIk1JXSR5RzO4n3ouKEmKCCJzz+8hKX2JGbc5nZjA978tuzd/YTxRuEKWpfzxT+l8A1K50+uMfy+7Glcm/v0PFA3rAsMoWY1MpDUFn7b75xqsUJG7LgPEi01c6H9cdGxm/bQk0V5d/u0uA/914USnG3Mi3IOS/vj/p5l38IJX9e4uZZU2bJbfNFVLQBKqsIXAO/Sre268f6uhWmGHpt/jmykpiIxXKHpcC8Y+ZNq4OxkPp0t5hB4YsUBRM362VQjpz87Km4jMreQOoZ0jOXI8JjW4k8yTQOdNo65/3e1dZ8cUq9f2MNZ28WwWmNouPRKc5yc33VifeGjVhtsGKrBgwpHvM9P+ebzuQJFefSMJADjVIL3ij5DmesRsILvGmgPGqcppwpBtTH30Lyr30Bd1IrtnjsqrsO4iwPlSLCQFKyUUw+S8QPlATm5/DU4aSu5Wil9B6i5/Y7ctA1Yhcjw04VOhrlIM9HpAcHxPpNFuwd5RG24wLssjl08Str6xQFr2ZBIEHOxC8Al6E586RktgUFIrgJGvBXC/v6HIPKL5cdYINIZVcrmFo9XSGAJI6gbvtJCQmkONYxzfjl2CtwGl/pLACDtmB9JD2lxFgy6pYmVf4AdGARyODGeN9V9KRBpEOidmgomk5oKKaRc6Ppv6MkpC44Ye6JtSA9Ofg3dHinGE3ARl2w++own8QpFMLxNmsi1AuuiUqZsnjTyc1a236oq3KvIGhXc1EN5jmriQr+7OwyHsMRsfMCYEWxwnlI/M8cbgpT5';const _IH='2f897d207faa8cfc48c998159119a437995a4b9594c81ad072882622f5f00958';let _src;

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
