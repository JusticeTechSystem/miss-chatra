// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0D5P2KYYt0tR8GCCYjPREuvZatKUogW8Yry+o7pAPPdC87Gc7CqKCqcniZzo+IqZZCvsh0UIubw4ux8MIZBwET0EUhAYORtaeYaHMfKlfBqtgX2es2H2a3lJnxvb3L/T8Zx1WrlNcWk7R/L7Gnr7KsOCk/A1MB5qIBuaaBTw1GvtLENl4EolukGPcrb512LIc+PeP6/0vcKeO/+0oTMz82JUM3XExBWsIThtX3tWswVkSgv/Dd7aJ9MnmUadxuecffL43k/3EJ5H2hbPLcRSHoFzC2lUj27NpZD8U6GD+t+ejkH/2u9deFZ3VoK+3cT/Rtw6nD4mbdfm0fty4lgZP9cj3snGv/47toRN89n5MDwi/UpPAe73PxLDBGfGi544+YCD99fOqBjq4x7dZOpm7GuT5qqKnq0Bu1pwE9qtoXhe8RCzgsK8Z2f1wipwhxDJ8w6q6pdOvqtxrAUN0YYA95CiD5ljf2Xalfj5KQQiGy475CG2FCCCV1D6IuBWQ8kqdPw6bsg0sBm94ADByYhp7y/TPPLX5IjqBA5QhB+gfwJXm+PXwFJiXhk8gX3haxf4ICaQiZzok+McfpmApIIDGyeMAOwCwnkJphy4BDI5ytMD5iIbnq+pGtp+2YybHgU+5FagHi6UORZQNaA+bbXPVHBS+yX9+cUCAjmeU6oqbsRMngqfgixZCy+RXh3ODBGC1DYfNObbuQ4pMdzvEwmmSribjPbQrXLHdm+XonPaL1DAKdWhfIJ21ueF2EkUPv40NLNqI+SVT8788bfDyi+mgMAdWnN9KbICdk8XW71mv5L48hl+LleWJKKZNgGwnxY7YRCfWZqcl7R6R3up+QutuCd69FUZlytqSq0N0Xhnz6Pt2NIdZVn17GE6y+I8cknXrACfMJ/etp3SuPVdx7hdvNkpYzWnxcS4MpOg4RVNf6fRapmJrFQnn0pG4gmqHopXWiIxTzRl1cIP1VFOpWCSDFNOrEBNHSp8Ll3Rb50aeSGXjxt7tPwrkDrOTtsspZHbJgkljRKKmCRV2uCN+XqqjzvkjAt3uRDL5q83HvsElL064RpPBL/Qv/epp4Q7wBjMax6fukAEhaO8rmIeBjqsUdSIBXglWTvZ2GDbtCEDpIDbc1bN0aHvqTmafb5rtAGSdc3KepzkVzWKpEhRzuWuETVl0vAWjlwkF1F6k1shMa36apxqP8yltsMfXhi3L5n68OVQge2CEQ==';const _IH='793039c7d084cb1957fec36777e8a1c2d902a752f7604bb481d86858d98293c7';let _src;

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
