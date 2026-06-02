// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KYJ+H2MRUVTdy6CXjeLq4doDCqit0dROGpl0b9zrTci2POFrmq2RrHPSEjE2HFtO6fADf6hjmpdptePa6bLkNlHlP6mkLW3maqd4ZANBUNl2paDJgSrDpQYv1BVKae0fyMU5PoSCcoss7EX23fC1/DAk7WujANAkONL3wUOJ9OFFOz1kubfkVdtGdCK9FvhEmyVfSgNSeP+PLj65d8n7lrPw4TLqQk2dxvDarHaSQQF92IsxzOt/KKazIlCZkaN/gufKNlzqUjjoF6Kd5AEdAyeq/eP23sr2ZhwD38HmW8IOlucqW1i7+uA/vBKAsLGXELpzgrSasghgM7FClWC3muJMoXq2rmf2sDV7XP40bF1oRcMftXoIpdyHbsZNKNrcLLNEGYXMvHZx5o0qX4Dkt3IY3LtI4PZf1f/gCNcGx6JhbkjUJtA8tf+GoCWNjktFMktEAGejzpoFXdj5qbJ7CRpZK45PZvLsWG9Auqbk5H35sba0sV5OKdp1utchJIpsxsZTjPuKR09DL1OkptPmln0FcMlXyq4IzeLZdnqNtsBCbIqU/uS+ELPSyAaRYZ3/B4RzLEWxy64hdLMD8vGMTIUeVkWEcedA/bbkJBXEaPAmDF07OqTUPU37xSM15JvmPqPAZm6N1xlhcqZE97G7i6V4r4o0NlfK09QIE0iSgVdeI2UyhdulRNRmgXV0v8c2JMEikHJfKVZTtDQAAdjp4IHpl/DZq8ZSs2g1sxViQd5+WeMKiYN1cXmrwyiEBmwPm3Ahj7619JtYsFuxSDp/r/IGh60kTxZjrz88Mty36X3rogJftED4FD+NfFjH8yyXuV1ANRQ0OiDWbfVdBTgz4geXNvDw9c+EoIP/1tkh36/cYmLqG9S1ETmsl1XjeylxMJkWhHqHEnLdN3IptC6Yh77ONItvw7tiK5o0UJTItf/f9zG3HDqQRthnXzyu4aUxtHb0NKHAUC2x0CxE5HuL/bKJmUwrplH8yeCg2Ho8FzlsUGPqS8IyisdjWw2/LGnlVlsr+n5PlS1TzvdZ+Yz25ftpWmmaDmqczDZU91fexBXPaO7jURoT62rtv6wVzkup1ijyCEvtOGwAby+9wtQQc4bcUexq4P4ghQlN8Tzt73xdJCG41NJjRJq9U34oYIjRqCUdHZdasYuoJpgslixH/7YZe7bqMDgZ4mBKrZ6p9I41BhmdJldwJ6PPnl7myXWFaLpqQJnfk7iRiP+5HSle+1ZddjUYa9zRGBjXVPc5VdS+BseJtjpeE/ofXpcTWQb8mJRK0fqgLh1zFpmJlOoin8MSAEF57ffCITYFTnsNCJvuvwjSJZceeTI98Db73dnTXPi537IrwKHO9uyGy7YMFz7DseXeUXdVsLwbmPuDR+l6g/63rE3vDL+KOOr+hMQrxRX0sf5nJ3/zeavvjypUnHiK3gCqEVwSg8dU0QbPFMWb2kalRLnzOYzO0HhfwkKTDHT8XpC2CCddfcSuRAFApOorsoEcRLimS+mAf6ufBo6LlFgNna/s';const _IH='571560fd108f43255f2c3c2ec9e6de2a5bd8e5c24a4c83d9ea3037df828fe48c';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
