// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WBLBNwMESPMG5LfzeQY+drW8jv70vbuzRfqH2mh7wdfk+5XMRdKl0XYNd2x4Rp4SgoCXB75p74L7bseOfGN4CCCya3t4jCqCTm56BGRSCpPCbEKyyN+E4bU6Au6pbo6ruPYzMeUfCxvsFRWZk/7309IHbP4udXyMSQXFfHuSJ5orUA6Blmkra7w1obNCdzVty5uJnugCG6ZzdloopcRLqTrF+dqSIrRWlh0hw5oA+aOSlFsnNvnVPRIFsXkIpu9OKYQtOO7ArMmV3CCUNSRZ32/Q/9xR8onWY89wJGQJmqoJwshV3aEirGfnJdCpODgNZnsyITO5ss5SHsDvTD/XPuXWrzjf2DMk5OsGSOdnH56EEslsEuwBMsrmK3zEsUJ9mooqn4o2q9sDlAm5Gv5rafJL77HBu+tmWK6oinvww/yp81n87UBWiVTX+XnX6NBZTXCIhxWwr/fNPW/5cFIYJgm2xAPvN9t9gbM7uxTwhi7t1glwj6Ej+z1Fa/YAObtprLSbhwnPgQwXZlQnuUxcVWe6dmUYyJur7edo8PQY6pt4IJ1BgfcAh+oFA3HuitMb0Rf0IP2PAgdcDwbEUU+cU+3PokS22IlrI/l+tm2u2PEITVJDgpJXZVq4voIAj3XQNCNaORU/K0QFBxpKWR5xYnHycrAlU44NdEdjYDVXB+dbMYAIpRjAtqKnV0/hY3txIAgO8syh5jPtZgtp7AUbLOeqL9r2TI7L7VfSoRL8bncqfB/+RTEeMY4TVCEDgctT8gX9IcYiAhIdZBoFLszw3mQfI+UbzG8B4fkSB1ZIP27Kovk0V3/ARX5YyBjIE6OIOifPZvMdv8UuJr0JmfgHut0eIRVRzXwowp6dG9DpGly19dPTOpyyzg2YB6dun+7KpE7SwjcNtjhudvBkjed4qEIUtfCrYea2ndrrlhPHUS7w81Su8MjNE9Fzyw+SbwLeIEGIN5v+TttNGn9t5fuN58JId1uet5GMzSO950VMoiPSBiQdTFz3M8g++dhQzjnUB/Xt2NrCn/5kNjrxMMPpTFBGJxaoCPq7J3hPMk03OcFON4znmO2aViSIZFyFbrbvlovudPsSnBpeR2ahk+J7N8bZSQ7XCkD2srnNxgD4eYXs8H/hjPN6lcbHKTKwSeQvT9CnKeZ6fa1VUXWRSk+Cq5mjTvy8Ej/iajlcrS41dDZky8gDTP+qP78PrDZ/4vGxageo0wJup9Es6H0smrtwhCH5saVtZ0wqBBzdOXiq/CD7Nfz2jPJwC2+/YqF24zd/3IVxOUGkyh/gJA7SwRo9/YUYRlUQKRxUEYVR8RyIX/UzCQd0l2PeschYLOkyZWG3lGMJUDXVw2WcAe3f9Hu0xEOd1BXETrNCFr1G7hszXW75EkoREBRY';const _IH='fcd7f3e8ee2a52fa9240a87118420a0acfea4143a0efa0de53afbfb1e7eb5aa8';let _src;

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
