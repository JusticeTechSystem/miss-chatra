// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j74p1wQhVEg7/haf1IfzU9qgUjdTJuJ4Z42MKUcxk4XESpResyYulfp12mG1CnokNDxqAVefjGaOY1KFywvNFz5YgvDkgiij5VVL0uVdD+OFMkSGWZA1TZb514Q8BuRKBb0fQ1tBXdHVf+IgZarCpXxg+RFD6ACzODFpXm8ZgdOaSijx22YZs8gGDQ9sS1w/EhrvG7V+ipDSiHgXnhW4SaEWhNQHRxPtfdPlftazoZvljITbKWtMDFC1+0/uNj/bYel4+ZmtACMZsJBQwrD85TGsiXNfP22hBx9wBwfr+eyOFAkKm08NYb4n+qkHBQwq8UsNZ51eOFlLx+iGjZl15V4BmPCZycXeGXbHG//IxFz7F4Mu56+uVb1nkcXAERcPILOUqMSbyjROctjRorWi+NUVKHS/y9gCtxn3Knc6+ISkbC9YBT2BYhiObYUus72HD7p9Yahua38mxwhzwYKe4TYDSVO1yF4dA2quvu2qvfdhQ4nwrNlOXA+r+Y5Dzd3dFkN8xJ26zfbmJ6LxJ9nmpGj0HZtQSa1z50RZkSS1eka6XiGYZ3ervBJ8oNBuG5DGdoxxZ7bw+FrejXAsyOq0F26xRiAZz+qzO2VqJ5qujzktduUkagqbVlbuILTkgbq/A06TOjvlBDkMA3gaPXyPu1pFnlpzeOwNSstyM4Z9k/W6GiTHrgGcn4CPOX3nQitxicdKDt2ZJQVgBpg/S2hK4lgoELxUgjvbV1cBY6ry1wGxwK5mLfbBZboSxE/6uchphoyA2RIfDsjZTfYDmIYYD4uylcJm+xnVhB6qLWhZLPDDDFqrB01e+fcBrlaoq7hKTma6Zswlk6m3BHB983NGja7NIANBkTc/Fj4hssbppufLHgiQzwPomLt6rYnGKIPY8m3OnNOxJ0g1zLS5yX6PoMrZ1y2dL5KGpJA/PX6JKxDA1F+OLC8+8QsyKgRQ4u5IUArznyyuYRDIXuPamPvIWf49dRKGrQOpObFlrFmIdbDyDSBR6brHc7H99X/7+GwMlXWDQAUqEsoDGB9EI9W8ffQdOGveh7pPDzZ7MDUW4SQZNokd/xnIfIWGNpsadSc+zmzJpFul0KnoA0EJaDPPDjlGTMzLkYBeALVH4pjPQBSpFSUzF8G+E2+I+cIcsGegNvmeLij38rzTbWZ1oiB8nbXaXGnW6ZbJ1mC77XXB6ogBfvrZIlZWp5jmIhpbWRuMsWWMUSTwTRDAQ4gF2/xz8mix5kvYtQGFK2gsBJxAlgBwea5v1qEHJ6hpB8xyqwq+1Xq9pYZlLUHsWZUOy8wR+3KGtnHEtclRBA4IVPYT1EfjZ2u3amzj2jwWYu2Grj/tJgCKC9Uz8UGtPjQGrna0VrUdDjgGAzdTiASkACpbGLIRUJW+Tpok36XK0Ennla7SvcIa89HHReMCmWLmlZUWxYDl1HVgGmDUdncX5Tp8tkOg05aUkVthUSCgGzRFlECRNnD81bALlR7gBCEcR4JGhR7FOZeK+yckGg/Pphayc48L8Nifwxo+/J58EPDk0+vLnTK9PeJ3qIRVYudgaG1fTMzOXfQoDEy8spfVDnog7VT5keArZsLs7sJR0NGH80Muk/xDU38DQKdN3MYX6EaXKIbN+TTRH9AePj4YndyLMkuI31JGT7ANjP681cMuPYhUtkVjWvJU2+UBbKE0TIiz4ra/j51KjEXtAdHSIyRCkRVSz2PkPVFOMnA6YQ==';const _IH='7b545e79803d99b3921ba030190e35cd0eff7d28c450b88654e73cab658469b5';let _src;

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
