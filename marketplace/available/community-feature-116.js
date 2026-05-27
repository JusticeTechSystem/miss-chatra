// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zt9fz6Ra8WZysYGeBzceZGI/JvTrvk04QRXsvmA2h4cMb3EEN+2hdsEn55cKxqBhx/EIpDGUSeLRAsDMswsyycxKknaIgHCMoA2ZMefgQa9hZVJcTpJANFwTiL9UHAdfnHZurD0+KkhX2IdLq4Y6b6VDcaQvWTk17AkfXs9ldrVBk8JE3dJoedgJdbPHJBP+CkeZh1PGijwa2FTXv+i9gez+7M1d6329RWFQht8QR3QTqdkd+2Qe92KmDM01qOkLEh46QRnAHRacaf6gjQCQ8wgDiDKwxL1EtP7ZczopI/Kdo2MSeQ2JAdbqN3kDEXxPFbQ8EAjvJvumz/fAZ7JMls8odddk4AeG3r/tXuonsFmfjx/4kAlDeGQgibQKrFDmLOkd/u2wb1vKD+qt58dh588Htah2zR+7DthS5ftcxZSjrA1+9lEPBxuO1HON9PjA41D7DO5ztqrxifv3NRrC3h4Imsk452q9kpNGXZvwjAzxa29ITipUTvUdrykr4DIVPI/5K7emHTOMhWsNPytjYhVMYE9BeZXGiPehWyXdKHwC4m/ggNUaeNgVWbUcva+xRvWstuBPxA1IJiAh82eztkJODEtaDe5hAnsH/+wbCPgMOBBFlXsBDxcFVvSoXuoRy3waf+O0zPm7VphUUNwmObnu31mr9B26/W47MsmGVGPeh9twkyz//22I7c2XGBXlLau2GKzl97ycLRKtPoFBO857kLVJNPnv';const _IH='1d8ba8a8ac61849a3009968ad8275f6b7ac4fe1a5646fd85bf92335d12eab1da';let _src;

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
