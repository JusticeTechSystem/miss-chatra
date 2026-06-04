// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vj/3thtO4xuOSO+xf8iAlROl7LHJcJjxlMUo9QLrdzZRSz+VeSeGwGpCUsAp7m5hXtJDTQVAveK3q40VIfhXJE2bNr8xTOMRghmRVM1qrka/JG86amyxr7XR0GoAJQTIweNWBVOU4RiCt8zebYpt2g1ddbUOVUbISC0ncEgQHDEj7ZMLe3xJumY4i8pJqIsL+R/uYpuAWa6jD7Kz3O1ki16OOIlUQ4V2khrp/1KZfaOQ7Ec1Zho0codRTdq119rF7EOtLKP4vmHvR3OWY0Hf217kmqZ6pQXakylbFG3d5Hjd8WBluFDbokfjuHCGfW3tkPxg3bmB/oVi30rI2VT6uWiSx/nRwl56w1xLgy0nwi99cDOboOen1BbRJnxrns0LPnGRVNlfEE1xaMtAKjQSoW2+P/1xZUk0d4OpZmUrlcxLImAdnUbj7sQF43JsccnK9wZdUg+9IqoD1x1wa0KBectPATrfH+foMbs5veE3jZmsPLeCo2FWm3W5vu5peJmrrY8AohV3bhxMsfWOiC6OHjZLfEf1IOfvDJ54yCPGKlunRr7tgD7HUpoOIdQYRn7BGJwbru7rK8yL9UI9LfKMNq9Vefss49MFWpj0vLv4UFKZhEDCH5/Skpoa6IzDBEy/51KbUIQbTqN1m0byWwqj6ixjF2H9ptMyLraUe02aK7WJkghoQt/g2Sl5snDIvC+9+svvbmQa4uXim/rFHAZ1RqF6G33EBodTk+PCij51/6pkXPIxoSUMnOCSXmnLWHXp9nWwjbjFn0H6YddXOoURaxeXjmVRyTf+NTO0dVuCKqK/TiEOy8Xv1KUy/xJE8rT/+KKdYfmilNnnlkW/OfMyF+EUNUZWdmFqAs1pvtSRfA3K0l/jw79uIKYiQngvjYsVmKYlo/B7hYIbPgYYj/1hl+m5uiN1a9TAA8kV1rinOwR4mMS8z77qTz43ib9zgNhO8MoTCGC+HgZPLMs1TJKW1VKeAtoucgkW2iRDQe7uZ6CYsupKEj+di4xqXwGJamEbt3F/xzpODRvV4qARySHctbxiGOtwKedY3guQm8aNZ5EbdiNOHqk9d361Bk6m5epRpevNw23tJudZlPwGc1ByxD2IWfbQ+mv2QjrjaLYHhUNtOg1/6OQP1Haefzd8BYT0ZuZKgjjDtnPMi2rMsaMN1mzaBqs83QyrbzrB4zz4zaNmtoTKsiGV6eEpUdB55vvsIvbJ4XgHBIjnL+U2T1BSXQoRzVvT/s711OzTvHQVddI3ylRiHbtbo3jrqxtHTdM8TsRbri6cJhMuHIFqmEx88SzralH7LQgZsqGCQcjwHCab1EFZdJLuANt7HFVHJ94ziHwdFlQsVvF6m0EI3HkoRJVI6+7V7qPCmi6QkvkR';const _IH='55b733a9a7bb2f8606177fddb18a0b3cf35d05b2b460c9b3ec77b99b03e25b61';let _src;

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
