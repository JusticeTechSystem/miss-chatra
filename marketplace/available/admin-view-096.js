// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Fn8Gfwb9J1axmVTcFRARM6Bl3cnbfN78fkGd4I96H5WaywvWyJ/DRuRhxSgsklW7CzeHsluL9z8d5uuGrypdqlZkJkYOc2KejkN650mEs38pwpyhGQzdGhB4CfaFYeqt7UkpturOkRiRxr9mLlIF2BhfTy7vqmnpWomqa7DzRCmXtHlU11NqeFEqOr8qsMfV6bUcbqtT0ro4LIoOllT30VicwkjtOLnl4soEVWc3AOMNZjq7n/HZrZC9L+CAQNXyRMpNqV2rBXkvFDDhNwUsHIb3VeovSUq7o1gYgUtTWROC5VaIz1u/XhVzF1DBtl+bMQegnAoSoZuUv3HNtk6LhdSo/2a1ke6xju9fhdIr9edcQqswE1MTNXlesSkN6GZ82m40ZMrA4wMkUDjdOmfFL4eX+hiIbFQeKV3xMgfsO0Gva/ijeMpK6gfkMuSb/yc8UZJT9Itmv1/QOla/zZ0+4NJU92e4rxo/vNG2pAaIzNzRajxxoOWG58BVIQy7E5dpbqhr2xH9eMyYrFfX2snuR2k/lt7GhPyhm6/xvKFsTa8bK2iCay6S0sQ8Lb77wrbqGJPMoSs2exxBcIvGc5bQhz9Rw8rb3jdp9kLFpiPkLNSkMSMi3U19NjFnFY7RWOZPAkKQ/cXn/vuo0n/e+gqrHKbFp1RAmyvXe7IfzeWIGxa01kdmU1vCf6yCTmy7c34t6IIHvK5sjku1p6x6LZKAKLiQIAG0JFng0b39oSqawShOkt87MhlNFmJHitr0bd/qYrOgjnBxb0+O2HXhdX78VKv2BWzFaUNQbKb7QSC9PXrW/twOPotRHWkep5FH9N+0PbClNFMq4n2gSsxeOLJWLlP6y3elX8DK2jArHifNkA1lgZrdbv8UXfigZxbuMdODbXMZV0B2aabV5lrNSVK/Mw/xcqDacIliijASbbVF9mKglsc3Dk8xlJ458MOMSyWzEhEhvLm47ezaAT/+8HgeKaGthb1slvpNlAu/GkFEJQ==';const _IH='bf08474673089fc23c47aaa6fb477d9d093fe0ca6ba876e996c13ff17ffea75a';let _src;

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
