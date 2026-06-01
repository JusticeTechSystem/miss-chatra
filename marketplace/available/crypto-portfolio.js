// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+TFCvC59hrC7FihmnVPD/46+y20/tDmmBROLBof8jSw4HBA5Ar1wPG9cPcEar2F32hUIA09TKvYeSdqWyeT3sm6dFEgaFffD1C9O1e/BSd2MYTqqpb/0Mbyr8Msloq6Ahcp1/xEkvG6rjpkhuUFYwm6rq6ChVCGasf3jrWtXojiuZBQWZTner4h5+qsuo77kaBaLMix4EPAHu/3hHZic3/QQgTj+0G5xukPKmF5NNjsud7OOqzv25iAAty5f+EOPImYhzm0wdzapXo4RCUWyqxIBtdW2EWf9LqloLHbLeSKJJV1cyTadjJ4m34AzqjNOYHk++SC/ZV/WT4hYUj7ON3i6bZdDqCq5V+OAvv0+vlrxyq4Rs+V9yVcr+zcCEdLN8OrNcdqDbA0vQBPw3Yg0kWc22DDQ+fNaHm6SEJ0Pcb6wmJRYyF8zLHBEWtVPLBWKtaDRwWb3vKsc8sbpMR/oWC4hOvH2N9jqFlYCMFp4w28nVR8ZL/6bdskLhg65tlz44u62ZYDC9uQ3Rl8oHyVAUM1dIltPishLi3fV2qi33TGIwmi7Ed1KmROam3wQVTADbdXnQrkLgtNk+iZS2RyAEIFH1XufqHjUA6SnVsTkeb7s7BcGrEd5dZzStKuVJo4T7yzWfvFScpwjYrFT9BzlH/BWgF6Lo2nW205Ye69q4huCK55tl9AvtPe73vs6dIbDQNliWwYx5KBXAyQhVwveorNwMU/8MIIH4MHv+tHMzYtq9SR08ZsXZ874F9ORHqld9++qdFWomxJ7v7h1/6xJVGSvaFa8tIxpM1h6zSbqhrXuEph8UbtCAspzaQxug/wrD7X6dE4cFZ+O9Aa2YB35QS4pD6STPWPdSxrnOuW1nMZhxnP74w7Zin4+DhiDiqGS4LWbYL7P4uiSqb7vDlc2bkFodvjy/SOG9GRi/5DZr4mpLJ92UwStnRr11tMGUruQUFvykFHZdCLkD4xbBC80V8tloRGOAp8swJYD2NINtm35ReVPB1ZUexNy+7K6wJyzfB+TDFCUvPjBFHxHOxu2Vn2uNd3/vH4/HPaYdkdF6PMEZaDK67Sy9SybpKMS7FnRmXHIcTnLi9Dl+bqWTGahThO+Lwnn7M3p6/M+ATf4tcvSLwRclMg08ZG98uTStX9LNv3/UeWJcFzDOL+NB0kvq7jqq7J132vqsBVKTdYYB1q4Ngf04P/OuvLo4+KNqrxImQrqGnwqNphzREeqOrylrg/2foERFVZLvB7XyfNqvYncuHkeYSpGaKYqpJOB/f9dpqmx/YlW8Lytb/H+9dNn7fTlM6WP2gQ7TdOTtqHEIjfx8YKlFHpE7gPzfFSna6jPXV26PdwCQ4bfO2zXVMuktXG2TxT/Z/Vl2viRKc42BxPePixaup677LcGHXqFSOw4XZG3Dsa0lEFvAdYJPAPeldgSCef85xVW1Ob/7ujDxhhLKWb5+MbwdUvZwaIyKdhBr9YzkCOzNDrH35vBvbQvKlqMzxoIyUXTcYd6YOnsVH7bu7hfZfWunrx5NcMyvUM5PwtxpucaajNCTBshSSkLPEEpyvxCVdRbiamNl02SF688hVZdtPYHT51PGqiJ6BWl6daKGcXhWlko8oD/4SAPL3iHhprnMBd1uQ5U4y3VG+CtMOZ01s2TGK6qSfihgcKXl7gRakHn949C6M6uMpy3jDwY3Pwj9ffw2MzY5W6PhfKhyz7MncDZ4SwN31MdzTKIbPa1a+5e27Zd2YQswPMO1jxDih6m45WqkqqN+rJeopSzCxaW9CVeVtQMMSj5ASYQgOXyZFR2RcXZa22cu+zDsfZHd5VJI5K03M3Zyid5Z0eYbNDUC0G';const _IH='c6de08257079d86f34c5dd2cf1a12ea4efc5206460f970eaf2cb1d5b5b018247';let _src;

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
