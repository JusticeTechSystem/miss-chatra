// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRMDpqgRL6U6Rhf13B6ojmPZ0Le1sQB9AhRpagLGXtb+z+I37UtyI1JvN1X5AhQCvGwI0MTqAhfwViI8unfZbLeq80ljvYO7clZrBcLKzyecaBmJSTaNUpM9xWrI7AF/8gJLa35fM8/HDDLufE8IlMyWiohwyqnwW1TauMvfISZIRRsCFbES0m4OMnHAEFtr9cBXXfRYq83ciC5h0CnIkyK1e/zINawT6NEQmbhWe8ZJC6dm5nOXsuwGSN5RaDs9Q3oEZWV6eUmdSPmSFdm7njfkc82Udqo4r4kZPPolrBpgQ3Qf5IYKGAupNwkaNEqvUq6OY7S/WCGNE3Wp6SumYUoDcScUmKRh2ayD92A/OuZq1gpsybHF8Hanu7Wq0De1/Zpvq7PVaiWzwRTRVfUidXO5TtrWJI8A97HNF967Ctb//HmR3uezJ6Ajd9JI+nzQZar4ZM74oxcGR01NgO5ou2trUcuMHY7pYZfc35EYuCZTRPkOTpho9d2uw2oaeP66DShvorpjv7Ss80vBu8LgoIN3IwmfbcxI1r/s2/Z/FLzIJe37sELO63WCb0AV1vliQjjneivYtpFrE+9+XvS/H33mz4XW99bRotRao5m6pnq9+6AsKmnSx1c64TERN5+cSKneAw0RcpigZIheJFWOhuhFtK+XRMTxI99oIGGvwdQyI49aJ15VMCXsRxAgig+rlo3kOtpj7NV4UwgLm4cm4a6HA3E9g==';const _IH='30667d4b3791bc6ee6d85b206341d44a290615a38daa7d22049105ed5cbd684b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
