// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JBsgb66HLDSN0Vav/nP8+rN9xF2tQU/jWJig2l0lUecjyp2ybMvFNH65iK0PFW/ssbVnCZn3QOOOmHZnjAh/ZRWfE2J3PO8b9GPmRQQMUyRAjw/OGqMukYzrd2YlCbJWlKMrJkGRNicDaUJYLpBcVnAbPCRW5vwKVHXhzjAk82WY3ZaYggASUfVnrMayOrVLpmAkiShk3HIQ3RtngJZVtiaDLays7nSco0HVHOBM2u5A9luY5NqewA1CyrRvs28EBueo4+wu3Pj6Q86cVuNzfYUmY2qoVCT8JyZAk3Bghl3rIRmqBcGN6+v5xc15JLRczI3j3dcR/NihS8+HlTPdiTu3USqxvHhnpqxiMeTb91l1fKrHyISICNIjB8mGxFAT8tJnGq8NB9WMK0ePRIkObsU7EmrbeNHf6thbOcIPpFaJ5dJsp/nnWFcB+Disy1OK9gyZ+h7DzknInaEpALKesN+LabgG7Xj20a67zMs+TPYLw+S47ZH6KoM8eMJfiS6QNFH++5LIox1+SxVjYeZ8iIPS5Sp4qfK3FQMaD5UfDCm9p3uID6fyuzdISt5juORCOcWs872LYqwM1CuJbB1SQ7WXw/HQXXqPqnYvc2ZpTpZYTtNWrCnrqCQNFMV7M6aQpagsIAW1sujCs+J7YN6OJKnjLPyt5jYkeSWmSTnks1nkzsEI+EZITwq4lzKdUdZQtH0g0TWQVctkH6be/YH9Ni4/uGZAdA1pGKG33l3Jti49LqtaBvxBnMikHEJxApQIuAeDfLISb17L5+/Z2OTKnXoAJYxJn04DBuVUETmkKXfEgaNtg0BKqMS1XmYyr5F39+N+tHpNlL8nWu6QS1IGvUHVaf9MLhvgFUjqOiXfJ51eg1XnpES9CMWPzMj4RhnthsLEKkqR02WAV35oPZWUPlk3iq04VQdWiMqq3nTnbavKX/Ei02+j6xJen0MRXOtFN8Aor4sG/GZ3rwxLF4+r4MsQTNFY56Va/L8ZtGThvHjSlLFlIgmh7IXxCKpELmDK3K668p1OeSqQdkca9stnubvgcPRQgOuEO59m387QqRvwYAJ79xaI72wXb0f6BNYRyJtMOGeZsfH7c0mscsvwob4QTPTGa1WY36CQDeHxBfJZTg3WVsJo2Sij5APwc1n1yHeeXaRYnZJWtzYY7dW1UHMpp/PN6/GoAU2eyPeiDcqeVrT5750xXD34OJ7wER5AEw4gXPk32kzt/2Ns4jKENXvOGopLDcAbEguxGR3NjNFHeuAMiNWORxK3au8DGnr/FnMDL+GkYauEZLwvBMe89wR0ftoi9srLTMYHSsKZL0GvoYGu7Ef39qZwRRbQF648muBfizIfY5swqcaLrDsrkvH/H+VhK8IT5yczI5qmcqN4FtEPULjoYV/ZcjiWmRfNEmIU6OGeoA5b7zjnwMqP29OJFKRtPlaYddmDyTyjM61e+upjZn/E6zfuhglmX0RSZZrbtjgEQedjBuwCEOI+ntO/9x6IkSP41hRkkjC9Rs4nZgqnTlLLEq2+UmDBhNGeWd1Z4soc1GomkPJ3db7dtmIK/Y+cdA==';const _IH='e59386437d73721de334480eb7c807349910d890bcdf351c6a299d2c33d9bcd5';let _src;

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
