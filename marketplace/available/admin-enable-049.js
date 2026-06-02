// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mf3/3CcpDb1YEW2JizCVktHYApSH+hMhEJ7613XLWwMUHWvW9I8C0m+KDbudjelajnu1WjgEghzYWc1G+3dDKEw4LcExCpfTWJ8Y7u2Pe+ICD18KPu9Xljcg/fxkbXUFHYUeTF2FDVF65wGEdqZ95GWOlSBIQF2B0jpfRnZYfB4xq7eRBpeeeEUkgNG6ZO3z4SbS/v6i2NI1fLJTZuexlOc9S2doCGh9sFyYahGd6cv8wszyTpgILCGW5Zqq7aUEw5wC7SGb1MA3JQL8s/NLqxq+RdfXY+ZERI5uPRYrv2H0MsVGxSDVkyJp2mzqMoayASDvuWSHhfrEI0TeJJ2sLlEjhXSynLCdDNhknxfJnaMtrQ3tOJREgjhGWLm9JR8Y58Skz4/J2aRsg+3HGuOnIzSIL5uD9rYZVPd5OIuArZXb2kzntJNdr+ok1gHDGtLNNCSZTViIzn3W+mshreYag2TqRLzDkN0pPpOMKjrMpDuR4bJidxtFi4rX4ILslewwOr8nm1YneA+696/D1m4eLir3jrtK5ICUzBKQerfj2iUnTPaujxOun8d+gcbd4GrNMgwdoJ6TRp+QUu/vN1DriiTTWuFAENyu1PKRjduoYaR9dL8WnIi6xrtzBqnQ3rc//0R79lVg7+NFerzrpGqUNbqskaJuQiBL6Xx/pA7ACVWslH1gmJkLslL/2IZ/K3NQXnX7PpTWVkXbB0nC26vvNSRCWUaKwCbvdkSg545PRk+cuJiBbsCbxG+ptV4GfFLpnnWMeHFGTyS3+yVtw3qu+3LcF8ZoyYINtFYKN936P5RqUP4FJilvMxdbGvO7r/fs/OHeku+K7eQHKl5qsxjTubrGldxVv8eATr+VCnYUgf3fLHhEZt9Tu2yflmzuqZbpl0F+fUAF5M20lphzXOVM6uNLTyfykNGTERiSZMUM0wDKUB6gzTrNSSk9Wfi+MuC4M38BOKG/4RG12K0sHX2M23zka76e9NaZrfUGvsi72hSI/eRdkkqBinOXA0HU';const _IH='8f346ca73e6c9b36e8f937c4d5502e86cf5fbea3e9de73cedf759d156d9d1c95';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
