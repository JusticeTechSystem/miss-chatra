// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSN5BGxsin+/c4HGj7vY0gu9c9msVe//IyIajsuN9GkZZGTLSiE/kUIcPRrOZdegm/vU2fZdR3IiwPg1dfDVIkkr4/vqXA/f2KYCFTpF5ONASbxlI4lpvipJZ6PCQmGbXU4TEOa9Sa/ja3fZtTQ31KdzpULcBWRlIy2idJSjj11ewcwaZuMJTr7KCalr75QBlfCXMW0VtvuR2TDBQieY6ijHkxinUpfmfN4txl5YMmkQJyUFhPeapn3ZJhI/kzBmMqsDOggd/lFylg3LWCuKMKzGveYMt4drEMG1MpLsRZN0g0M6Yh/TfeWsNjq+NYgeJwIa3ipZO4x70WJCnI1mcPKFc4CWsZFFZ3nm/j2PpJ3/HPEJJttKY9RAP66WcOVt7Dz+xPsWih/eWJuPtPLQrj2pVb938IPiW5eUkSqhKi3VtvPmDO9U6sDLFHFSTpgtAveyXW2gESpJcergr3/3Qj/Y4RbwuVFSGavihPf1N4dmedjhK/PO56HO7iypQbIbuta4UE0CTwZk/oyeQ44rIiuweRYTC2RKiSj8PtNWHwnp883CVRJxnNcwOqbsJNvmMS3pW9izvDwEkgkwGUl1xWZVQXwj0R/onRnj79YfEXLVdB/Dz3o6cPUYu0rvEvfIo9GLg3ThbmUEtOuaQYQVtUYtjelOVl7mD58x/BQehsMjnwlcr9lyyA+2MGj7SlXLCAiXJB7VAPFH9GpPwZ38cgEtTf7eF/Jc3pIaO9i9LhrBUpg1gxndMuT/rwN/pYgLzCs4y5SCCjdZApoPbXwL5m4xg4ROKo8ykqrzydR7PsuoCpUkWtrCi7payeFBuISiRsxJs7PCBL+r+DxT70yiqGztzWKb083cFRlSeJ8RnfLnCI4PQzbJrlV1d1AK/k/d7Wlnow0JJ47+p5DkjgBFK91B4C9ahISXL2n2bTzqUYUJgtICEfobsBW6nL6KPdZJ1day/WIQC92UYbilMlevvmVi3nMKbYIoUTCcCz7Co0jTT02hFTSgpH9QQq/rigWpkg213T27W1J4CaZsT2A04qLn1++aT3tejHnR2QBEB/BHEcEcXzhV9vTwhRJf4hht6F4fe8TZmx/CtzNoHnl3U69q0wguI5HLTuD9LIKD1Uw1KTTeyCwIXW4TSfcRT5e6gTJuhaxj3pRtSMasE8BpLr8Lp3jud5iSbrwD/zn3hokseOS57RPGK8Ep2RZ1vpSumEV1HztWy0JFfo=';const _IH='e642d779f43ed9fc176c0de520a4dd1763f1ffb39e9f43be8eee35de51b556e7';let _src;

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
