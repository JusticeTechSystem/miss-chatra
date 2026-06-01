// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:04 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyFXWqwfWsxtjYYU42U8qdCVacX4Lr0PVeskcSRpdSC/NMChRNpdRgyNHqb00zwNtEXPFEOxMO4cx67lsQ2KRs0P1KEE8iUPeynm4r9HKdStinZpvOnOhqPhohqMC4nBp9rZoXOgCzCCYGqRCbm+JdbKdNDObnsjE+jSVrumAp8CFSDd3AxtCIWoEs00zYK2I3qajTkG8KO1/9xD+hQTIUhQJ5/4VDRwruzwgR4LFH+85qyAWpCve1xOe5vu5rb7H3fXvf0li7soD1ENz/L7ryfGRAz6UU8ETy5wzP1oIXOm39Pp2efGtGEgpT4pJQzRguSeXqqAD3j2gtjsFnYT9vFesMmsDuF/lPFZmTqAyH24gdGSoD0w96s5Fp2pfFF9K7lwCgoH6vs1AoRWNcD1yvjI9uMKi3H3N2AccwktAPW9f69MA8axJnRUgyBk5hDMt+2Y3/rhm+Fyl197d8cRJTawDFbFmXqcTL2LDqMCpV6aRFCXHlwKGOmLiNnwXVHJlj6TFc3MM4VMCEvUUz4nDI9yjmNcNzR14b870ZdDM2/NkF11FkztSwlTCEODYl+9d1X6D+biAfjy/AN+hCfzsFhT2wg6rpaNcUFWjiPlYCo/kd3lPWNdzNlcVOsFXOGX5iwuODgwYS+085zL4R5b/yB6ORc8kUVSbhVprMjDtODoviaIU3u0kozn64Tm87GJ39j9LyolCGtunYrU4gguvH8+DWgrMoO4vGY0/BRr';const _IH='ccbd39d7465d307974362a1081c514933047c92a19d39b91589af59c942256b0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
