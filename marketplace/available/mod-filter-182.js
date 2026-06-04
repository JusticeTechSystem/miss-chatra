// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wNdYvyqUSVvGq72PItuc61XCaZhKumC+EeYLjJWMIY6GIR1qHQrkjObzTZm42VCja5JVVFmPaxrTDjOZ1b8ZQKD41BjzDTse1pvUm+OasXIiqcPg+qOAEFc7tJtUsVv8Y/InxJEkyxXxxlZze2qinsdhroqigBkjR8gDUZYJ2zmXv5oLV8TNLAMCNqoTOVmLArNP90tsAgJvI4BpDe16Xv9iKMxvFXpFeBkRylDKTzzTranDmtbUYKjadOy5xug+7cUxWjBN5qi2RW3JCfJKQsmjEnAO25Op7ZR3BZbdUtB/wg9T68TudesBk/nHIVTLuzgoTdXwKRoYiVgHOPy+RXY0gtazA9Y/3Q7uQYQXAOQc5246A5ANbAEvzTxE8lJrLzSw+aLURohGONA69TXejRG0sfSSK9gF+SWBurEEDyVxTmSP1RDJe9jc/Ca4FZ17u0Ae0yU5GdtEl08WsiYYDlhlF87YzqoviTF8ivevPghaVpjINVGgLD0sg/9epec7rrWNmbB6gQiOYmJyCFd3stip71brOQFq/SIZMmXYETb51/SEqNYfm4lQPfr/uSkSIbBuWs2cXgUleQvaOt0vqCypGNgd39in941DYyHe07UgxhQM5czDtY8vPtG36lEU322n92aoMjv36IslF1QKk6mld+kkAFNTm/0G3/WIbKGdpZpIVXVB4U9rQ20hW0YzVGoCCsAuPzU+T/6rl94JP0U3bMU6aRsSZKpF3H1eebJatGdpPH1ZGxv7EdRDObLm+nhaUvr36waJvcYqzWrr/mzpDIA1kiOsbMMqwuF+ErDeWeOqiPIW9l4Hy7TtfbNkNOLN1QBglKdKVwmZiGZ/Knp8ndPtfH7G4pv+3byDFvbTmJAn1KogzGcsiSq+RqoY3U8Bf3p8B1MZvlo3NaEBqdlCbPJ9+rhlMTgu/HBybHQbLF39oZU/6aW6WdWhORwx7ODAGNjlMEmS/+mWgZR5XrB1Gix2DG7Q5U3wi16I6H3WwTLc5k5rF0W1WduwsxqGfCXpS+5wgAN/ps3O3ma5B0yoz9FV/aCbFr8qQuoEAZc0bzZTLZ70857GQrzOd1hoHEecMazXHFnM94v1qpNVw/TtXujM9lF/47nLJzx08WBuzxBldwDb7WEMDT3Nt2sS41O1CAeNSyVn7Ezgoyrdq/xxSe95HndmTqk5VIf6/e6dAE7b64dyLtxkBrSngXMJCsGhObHs/vOBvn4pGfHniy9wBMKGBfpJKc6QD+8BeKD7JNz7EXLmjgIz1rmEiXH1VO5EidOzYP9t4qJqlOx5YWgoNcuu8rjkZKOt1xX03SF/IYNShcn4D6qX7vVj/UcXP1wVJ2hBUbCv90ezLQJuGNcLiDo+V3brv7Qk6VVwqFJCQEifyc0ViQ==';const _IH='ec6de59461dabc9abd6a3021fe6be44cf1cfed5d01b8c006710232e4cb68e749';let _src;

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
