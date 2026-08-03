// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQShjLSXcHbWAQeEBsGUMtjgOFXRNAMf9aSv0DiDEgvNcePxwcf3fXkiJPqe63zoEzk/HfSej8ELHmGGSnK+qnwzhw0ezbeAUJOwoZo6SVPdfhqE0aa0lGNDreKqoaHbHG6uQjB1mrYUTkZETKoxqBYDwtLT9WRKEQtpjfcC8LCRJJTmgJyQhqWD6mk2WAOrQ5QVLvk5/sEcWV8zsq2N19uug7HqCWvdoDRGaQuCsqcIo6Vr8Y3bwKjcxOZfH1bjPOUNwo9ioPh4P4YRxcxYOgw09Y2lFWM40tkkxiHxcbSsWvdK6vLazd1mm+qj6AjUmC+p1U0MgmkNb1SlZuWsSaXN0TIELJ/Syk/Gjn9DByB0wWYyEekyeTxQcw1cOOiBM6pAA5mGlzsWyewYmQNfKEl2YB3Ev2S03yiMJW1Gh0fUho0NLVnV1hDx1y/TLGxZHQbuVwRD51VGR8gWzUXpA668fMdH7CXpikGnCltn6iq6smj6vcoBxUEUF2yCNnuR6K1Zchzo09y7/qVnJz0k5iMEvsm5n64S+XApZa4vWOKE622PaStbKdXTzlYPl2/X4pem5AlxQgSXjgyr8nA8EBhUVbie9iYd+YRfgIUPCRcM6IdlPUMNCKAFv2rIqhLvIZ8LP+l9z/Wx3sKafO8qsvwsBfAnMJ5hFjIs63+wKSkvNFpOh0/W/Hy8tfMtxictRhNadvN5vp2EpkyR1fCuPVeO0ilFeQ1nDFNqTlI1I0bPBUQv6XJTorEOeRJw68cFKzS3kCD40cEZDi1L1g3vEuJPO3NT28zMGGkNzaPxXCQ6xe0J3RYGVZ0oToy8AJUNcPJZ7Q24bMjPoqv9Id5fn8/M4D4xjWv0j6sRbot8Pkr6PVSLIZoG68fkMg6A++usjDFtchj/vm9Vqvb9USLPgxtmeEYXWZn8Ksl67WPTHmd29f7qZ5FpA==';const _IH='31685d808c5d063bc3811261f8d636add9e0bd1ead7367014fe6868aa664bea0';let _src;

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
