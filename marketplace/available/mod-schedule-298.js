// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ3L9ooujXw0+AsuRuFAbryVe57Ami6W2HE7NONBfEZosA9WDXhI1D4nzm/49W3nXRXaGNK9lameYi2Sfrw2h/9mc/AYFZKNewbWcuWYsUgxpg1UyL8//FT0bbUADCnIz/uvArHTwDv6f/lUQwC3WSOgPWVKweud1t55QCW0JHhJ/5XQCy8agHge62XoyRkX+qKTbAAqgFFI1NNeRIIWVV5/+kmQrOKIN4PEYyw2pApHwaHd7RYc23/xJqHscxuaocwDQUdIFLBGVtYQUTGhzr/R/BZEIS6Z9OBS6gVsPGeB+kh9eSILsS0wV8rx9ap7L/XLK5XfAWammuSymDYUUb7YMKNcl5QpTW+X4bl8ka69/nFIV2G6Km0MyqawOATLsRPGN1iZi/6QhC2p9piRbpEAqqU7VZZjNfci4AKyz0liEAldpwtYZ/6JKpppgxAdRQXS6SjkLKItX8XhZIEyAOghxYYy/aDwDvHscGU/4+0boMILCv6NBkc4VysDFkK8wiFFcyLpj9dO/1qSzchIH2UIDdx9SXRZIl7JLJYbHwYrC8DK2apAWkPi0Iun/5SbCHK2Fgb/j09RACq1zDS+oUK2iV6VUgPh6HUZETWm1nPlwP8HUk6Q5xzEJXrz7J387TYUsvpIwppcXnvmeKrv03/UkA9DIoKyuiMKR/x5Eb7CFri9MVa5x4xrg5t+aWX+GVjFDtk1iA/s/rmoOV7t5RNZL26AqmWLM1PZYzd6wMnuMe3r0j5/PVg4rc1wFxpBIzfVDRg4IM/BRUg727tg/SdLWYj9FRdTqzfjc2DQgU/kZbp77E1aImSIGuhl1g2YuZ88Q19paKtV/H+DIzr5Uai2pPL6HpbOWFY5+NM0fyFxsW9m2e/WJO/e2Dku9XdBVmQhn6SVFXKdodPmR8Q/CxggMSEm5kmbjWUnyb3h7ZwVZ3RggnEnWv0gKK3CVCzJpc1Bj2so+EoZrBYi8utvufNr5qjExuncBxarUlzNqSIUV3f3hNmHo8HNhdBjuV0fDYxk8Qw2FN1FiPNISwUqpuOZ5joyvMyYB+wcgBwieSp9Pt5DRbRE9Ppeng+HEcS7ejyzHPJ7+mUBkIPtVPdZtubBUq5PzpS6vwMMuj+z8CFcheGfiMTmBQw+encQLEB5acouIEoOSUIKKW6wOZQNBNEiQc7MorPyMAH15mw4oMbs/0UFTTN7e5XdudK8iI8KqLVkwQ2t3KoCOWv7VensZ0Gmp81esPK4A0gbeB1eYQIzlLLvan6ZhPT9vTMOYI69vjD5EMWDjZxW1YFFJPLTQutZaA3fUfAM+3RfN388Llpuu2O7u41hHJvOLdqxGtI8v1dQSeBvQ3DJJcOldFveoezTP03eMUBCbCXsEMKrBkSIE02NouYpdJhu8r8xkZB3iEzrIp2NVWmtyE=';const _IH='b6d4f0de59b7feb3b455532659233a4f87fd0b34b5e032d84354e11a51054e57';let _src;

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
