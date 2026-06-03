// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KxZhTYxfW4VP37ED+U2ivJTwbb3pZ6LavJwbbJaTAS8o+VWnSZeX8bSie6kWH3BD5E0Mw4D6jJK+d5jb7Urih32wqlpMHZLDA5aGZVwkj0XEme8QYFEzZVHb1wnolPx1xxIYcyGip9kz6c1GlkRh7ZuW38/FuMpsdm4i5sessgVmiCin313Fug5CdjLATZqfNa3qZXoJ0GWmBrDHcZGpdybbvcfsLpHlkseTZSlMgmGM9ocGZWfcddNYIqlg04VsWlgzHITm+U9VCuBRIDa6xMy+E2MDXusDSe9aDok/0FMM0ja8DdVQHlwPSzUECruTQeWzEgQShAFbsTguAUYSTMx2x07E5MS/mdxnrnyoAI3Mp0yYtsJnsnmpYgicJqJsa572PBXNJfXdCfjNrjxVC4UAVjbPhnw58ur+SktXrZqCG+vWi9cW2/9UFggAykpctqjbOcFqYJhOWUWhjtUpfZST4YhbrYzg1KqNIBuvNNkvLa1TAqgFCQ7cDZvoIfz3t8fEWhuYa9zytPMcpTDEO6BtI4+zVzWyQ679vFBftbmU1OodaZD4m0VDDaeeoTW4EnGX/wbpiE2fPGMa6tJdiEtBxHe8NXRxf/QF/An25FwFa8ADa/NSwdlh49kynFOKRvMuWCyQj6T57ARfGpXrOuguD87ArMq3OkenlnbufmRjM6lMIp8aGZJDOhsxocsqLfJyue08JM8O85Gu1PdR0CCZLojzHybgrpAqFheZ8e6j+8zgOi/MiquQf1+Uk6abPJuQeRgE2U0oXALhrPfbZpV3DU8GeruPPgYhJ7hUpEAB06WJaLEvBBoJSsC0LcH3coyhfVAt0JmBQGxh4UCPEXxJ8W5F0TnFsWLrIH0sevLD1U4C1N5PhfCCXT7WO5QhK4ChccvlyZCoUKzeakgzEIJcKEsRZ6pCS0gbDSmOPRrIATK6wEtDopCcclYJVzRqvhsz9tIQcQg+fbVsrfyXIEB7Dd3LtLmPIIMmtA==';const _IH='1feb94ad8030dd58f250904d67879f838127a1afcc2aecdd8f1dd94324253cfa';let _src;

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
