// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4mNuUcwqmGVrIBKRxHZLAlQ68kQvZTku0aTX1ucLd9iuKGDeR3YxdRDStgFSfSbMBAWr9QkcQYMNJtx5LugUWG0BRfLAV9FAPEhRqMJEdRiS+XQg/n5e2s+ArjHZZ5jJogGYvinLWAN4PVe56jnjaBdSU3kGrX7a17v3LspgAKIbY9YzOL+pEtI7lsOOSwoesD9q+r30Wz9IfuKmXLzz/dDwi6jARyxxfp6r/CaHYJynDEWcuv9hhOdoqlOuOf60XqIpWjtRRj7uIwX+Yn4TW3JF6onnG9FuLGrm1UOML/MrgqUkDowlipMShG6Ho96QII64sduHpJyjO2m+RZNVZYHG5bTS06sp/F6KJUoEq306Uo1QSPC5YbRlV5TaSuUbR6r7dqHSejP445pZAYkqkBeLdsE9yY5Okmeet6SHS9C78RLYtpWElqheZKXT1kdewApeRfXi/pgxPp9kD5SwUQNJ9Hp1/uY0sjTKqzwnFTQ29yjNajcLlq39PgA/jphxzksMKsefSd89i0xSSReLwwG18PRwlehMT9V14FzYIM7wZFGIRxKpWrfEp6dQ52cpEHF0yg5uYB4bTyXLMgTvAW628kGnxnFoX/sQYcS4i5rPyMEcJhyvubDJe3Ti1jL5+dAIt3KtXZa+Ta0v+2Kfh6Y+tNz5py9GzhjRZF9hZYi6nHUqbQNKtTmdcwiq5nyagEJWjVhukZr+lfk8gnGgEiJ5i2/0rklbhA5b+AGpHqJLTaI6GJMmpmUMG1kTn8srsldHjE+nuMBwpHCNUxc7rHA3EuMfAVDWs21LhA+yb1o+bV/WI+Q+5+/LryVnmuMraECiGrfewiO3CPSzTiiqgZDhFsTuH4p17H+eMaA71QOAf3eGXhCCAFCJVkeB9GsEJiJ46KKb0+fdFWTDpfcW2JFe7C8is6s29avOE8jWxDIyTS321HFgr/O1DCczqt17F7olwctwPBZGwaB1WefzpuXLkRIPrPP5hcbtoRNMpSsT3klTd+BXBeum9lzQlE6jMK2oktqZGEn+/RrdRz+JOkqR7lM9d426fsyBapSaTi9nK4gMkoSQgcJWDFkLlNHqXB2Pom9r/XQXvPU/z3RVAm1xYhFOfyCt8nnhgPz7caBfMTh0zpbgnQua5lPeOR5bw03lQw5PM0L9/TnrJjufu81xH6GWjXPyzRo4qADzQIvVxnRjZlDAI30A4VKTxDRfUsNaBRmZvOKsqQ8D17yx9WJ9z5g4mExWDna/XF7N1pbnH9QzyPfk42Tep//ohHPXEhORmrrp8dye+tHSaNb+FZFDv1GGa95xihbi7Gjm59QwkUBBmag+6i1Vjd8dQyN56BqnPpwKUDL/C6C/AQmPobF4N9JB5c/2pwE1myaPHQU0qK2HTO9Hmh/QYmw7QBwMaPg=';const _IH='4e42874a09316cefad82588b601b48cc202f5ff44b1655f9b03e042c8287a1ce';let _src;

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
