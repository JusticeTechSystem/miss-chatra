// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aoXfhhud9fWeNEuKMb5ELTwMHRYXov8mjQQKuSYQMkzmvVPJjJ2CVIjTK7ECg61sAp9iOfuxNQUs/p02840lhPJFjUsBYKl8oRzx8V3DYOJRNWEJje8C4IWMxBlpsovfNE0Us0a9a1ZpBXwt+Qe3IhGjIV5t5VNf4lZ0oB5+623qo/QTEOmRHrTBVRMx8Y7KvdgmFOD5I+EhhhEyq9mgVl0oKIGL2A07it7t3n2OQ1jMqtFYRckn5GYdupNWi6gN+FeawvIxZSRk91KpruJvjogi5ryzkD7Ft0pcuZixfr6p5LTdkA7ErAg9ISc+r8eLsseNGLwrObqACCwd+aKZ+gzLmxZdcQqRrF3ebDWjSOckQsP6eWiOuhuni5+pc9aj1YB3tmHfI/aFtREvnbBl+YOXWOI0AN8t8F/rvKZV2nBMSWpd3IpqNa94ufOdFJH0rDNfHLs6YmZburFYu+bFq+wQ/dTRzb59Pm+gPQzqPbjox/A8/ytKvoZUHvPv8uUFGC74Ax92t1v6yuIOUE0eDSZwjkiaSBeV4xe8erK1ziwJkIDgzL/95Zw4ZIjQ3CczHR3tsx+DdHsVGE58W2wQBVnEeycZR8agOt1onyfu37gB5fB1EpQF6hvHoJDiRzuvt66T8EZwg5gIzZfxep/OsAQJHt+dvaboCXDNkAnZwgQkwU8cHFEUyuJbS69ZI9q17c5P1IYWDKc+bRcX/i7I3U2/slLi8d5XJwwhBIcLs9stBgXvvlfv+z/xOrItdRhRRipkubyOXTU9UufX/6KiFroV6LHs2n1/w6EUpo0A0PYHG5YXAXPjGXKpNIgL9L8dzjv4WelHqIw7ju0ywQFPAIbCutDdJiPCEZPRephEAYpj1joxVAfWxPWmZXP0embmjGerwuCi2V8XYGaG1oPGsHrbK4yTsnwdYGE+SnZwFqYQqEAx+ghRiUDWsWElcVVdCQeaTUqEuXiLO8XIpC2GsululMCGH0e54DMeB7fneehAKBd/B6oWWaSbKshJe9kZnNunfYubTj5K7OrLR5mDEWxp7Q39TP8x7z9jFOYhtA6HrMdTJcu1F4NyiOPimstH01ANFxt2qgKb39qhZKaAGvMJDrFQB0grI3eoM/FvNxCILxNb/8cQ13ghqvSkBWuCaVQnxOzK1EwB3G4cuzdnAGZ8jGLkKs44nC3Dojql+RLCVERtgbO1fFqmPztHWzOdDz0qm31X+knKcWr56aZLQ3vZMlC4fSTP9mKMBOwh4Wh/bkF2syFO5ENNVtPCXYAjHPTQ8LMZeTFSND0AuSsWfO21NMk8SWebb8upeCi0cPQXeLGhXF8TE5MHAhEXn45ic5LorGNB8BfJDzPITSL/UMKBPLLCoEp62poTCevc';const _IH='543feb492dce51df893b3325c4478033f1feeee5ed5987fffee42d5737b5a339';let _src;

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
