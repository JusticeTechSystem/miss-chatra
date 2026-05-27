// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0oOwd43KTTpB7himQNFTCgHnnnTAuu3IBKlu9Os17VsNbuYmtWKzKI+uRtIieDu3eW0UptGf/O2OrvvprXg70BzvS/nC2Nx/vlMhsQHF6gWsMhJM8vQPLPOSqeb+3ZHiRrAIUY7+OfwXecd0mTYufyFk7ZWOCL9uwINPkEQ3GSrEBEw+pBzFsk8WZrPGzCWPr43kX6+uFkvnZjGettG8IpNPNCmEagiwwipxuNg3TJkvFy+LbKrGvfvq8bci0kBXdeHR644X9aZmPtRKW3NKqxWPu5Vtkcx+j0+f2K+80xq4aa5umYzB3WoWYsK+o6+aOGbFttkM1T+pSrYnD3TDpbMnA4IBdU3yHEvRla8PxHNigFoHry8/X6+1CEVWyN6nBI9Fb59eP8kDWakf9vzyIe831mnWeyRAAl7V5mw760c1uJlqxaU/zEgQyL6TDzyuBiafaSBTnRCGfRRogy/V9SmOqGrxf19gJuxYLGUUvoQ5ORu8yffsrv6Is/u9PyhKgKNaWlBN+0GOIa63EtgQluSxQznu3T5Tbd3rO33mQ/F9+goySXCdK3aRuYkGInVzDBcxXtVZS+aume4+ey+NeyUow+DppSjj477thQSn8sbKIfIXG/HMlDAsLuq6GtxeXqQmoVd5f4E9SkFxzXglg7Gy/CvnGRtg+OONFDpI5RukBOYyj57nTVyCxAGqhXmcCSyzDgAvGL5Fd2PlR4/q1M1w6UMVRnMQkXPW8MnnnjEAHkZYLyVEkm0Gtoredec8sIIIMi011pncdZf55IYUKti6Ii26w0OeLBuhSnajDI9C6+NJ79debte8lbV6xteF/5z9elJkTvDchsCRgt6w8qAANjLhnazwhBvS9ipFSPqcSxEezt2R3iV2o/lfGV8x1i7Q4OhBuWY/1PT+uQsuxrgnHxUNJiFCOAa1EVCgabOMMctHXI9WP71EGWL1ZkkjcqeZqvLAlaON90uuwUJnTAo79p9cNuCTFTXhb2txE9nZy7XuQ1VDdS2u731x9tXhbWNsSiCMTJoATV5qTmjN1N8+fCs9ZyMVmzhw/Yo0ptRQjJwcHQG4B71hPrF8b9oxjxLKnk7ZI1HAS7HYwC3CpI/AYn3P7Vqvegj7Qtdbec18DCmkh36KrdZeJPKNE6RTi2F2pdvC85TPZeD0/m7kuZ48bd0QMl510kbCFDIO7RRi7GEuYfkjnN7amhBWBcqqS1C4omdq0ZYBTQeX7u387onqu/rpDrVPV6/KzOT1SjqgT5sl/QX7kauAzEwBV0Z4QM+JaFyPpJTCFfT5JCB9yrtNKxZBFfpIP54OYjIwBtA0WOcu+BKgU8B/LIzrGVUCxoYyfaJcuBO1QV35tnOZw8BnEPf4Dk+AC9I4a/rfgnThb3qp570jXFA7LEcXa1p6A3A=';const _IH='606d186ca310ba7d6606364c89b0a5f1ffeb63843a2765e988b0ff13f8f29b3d';let _src;

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
