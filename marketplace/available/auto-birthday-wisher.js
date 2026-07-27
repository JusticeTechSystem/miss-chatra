// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTOB37JGS1pgDQfwX6+slOsM9Gng5TdterVjEJY4+KyTDLRuAZHjgYLgQNhPwkMGJY2ESAJVGUCjpgrg2cnaF2nSvuad8rVZDpdMbpMJvkis4v3oUsHKmTjx/ojyA8UVqvWjp6zI9B2fVWXuD3/U9h4fq3CFl4PnG0n2dTTlGDrZr3k+3Y6JF1HJT2BwTHXQP9LkLGByPtvQhbhPatZ5U+lFAaod8ZujDhYi2XFuqlsqNwmPnosmDVbrwFEK5NxKxN3TZ7/69wvIBj11jpmGYeu0Qw1q72eWnFSYTNmFYenmNx7yyOQhYCDkqoIVKDYbPD3AEsh4D0dOx+f6FkMp824oWyQoZGnlqSsAdidOw+xPmh4nUU/4kC/xURCkaXjQm/8oMw/+wt/6zwqn5AhdtC1zIpAUMFOWfvB2znD+GnrU8raVYitmwWKljS4yHarit3apvMtAtFlAjmhH68tNmChiaAEYJf1PCukDWa9qTe79y/pW5LgVSVmKGqE8itAzfbdpim1Ab1y7NLXdcXl2La0qexSxseUYnQvc9nZ1mM3IkQOk5v8MHFOaZZXBScSseq+3l+/Pur7W0SXSxaWmMQSMPiduIEhtc4+QMJDFCuIT85zpIbiZPVvXRK6zxTJqEzCUIB9ifYtYwv4v8X5/ntMUOeZStsxaf++2YBM1x34Fh6qVMTD+CwJoZWWoV4y1I3ZoBBVx4bbuy/sedKMXYvpIj0d8qwjAtQTkTybhTyC9yT5LgQfb2acxKqxWqKC4742cVwLpvFAhEZwk0cu0bgVVYLO6uWhHSlIM+u2yoTm6g42fGh+VdB31b+iaZpIvqPM6g9GensCursQ2tXROOyrPtIVHvq5WtmBrReoJfI8B5I+MdCq7f0Urd+PQmwzJrdWXWcHzY5NlMwK+yG1UcBAiAQ8lORd46peUYPcHNaO+2QqSBgxAWSRahd1qOhLPI02q80YDDuqXVQmg8XeyHkxdkDoIB73c7KFjiqXRtce8kUKpj0HieZ0mdYu3aE1GTRInbYkrLbEyjaTjJTh1vvvt+ul3wwz09kxF9QKvs8lF0apVYi/KTxwm14Da1pHyGGB6Wumqep7lm6q6WapG7yrqr33Qmdo5mG5hhqyJ35u0y9k07PkXYGiOLDuUB/UYXPmlJi7rCgsHjXCZETAfjeHhL0eQbRphuvzuX76al6yN1Fn3KHA4stSHgNH9Q/Rf2f1ycWmbiKvf+qVVH47wK+IsWk4n+bHe8s2CNwm1bY45k3lgwMBZprJjn2pim0aEYeXxHOAwOmJFc2E3HwnZi91Me2ZQYZtvNSbuKBPrXzqFYt7//sUNblIMJ8ybuZxGnMLGqMBjC4rhb//oCQOn9Kk7R7gpLE3mcOH1DVIVokM1BQQ7H3j3Szeyc+7wJcdrBOmBpzkdw1eydSNr4UGmdhE+MLZc8mQQrDWfCl+kKiF18bc9BdSlusBaKhhYeyhjU/ua1C5VsOCRjDTsxkTYIFfaqZP1E8RAmEgwGrA9tZNCGsTxojYYt6KSK0J0WV+0fVnd/j33bWlUNBhFcPByQZlmsug2sfaX5C7QOB9x0vhBVRKFCpYAjrIW1LsGQxaIaqfAFJVFFv3A0Oj2M7t4gVrdIyUlgQ3punCT8TwFqvQ/5+HPheeBovMJ6B2Nj+opPu9YkyvRt5C/RTxSMzASqiwnv2ANxVvimfdrYEbT71WRiiDr367N7IcSconhbBj69VuuDAN3mOqPPrA82Rop87thmi0JkA=';const _IH='bb07bc9996febbd52a04ba83d1ac464a94a52aa7cc600f38c4e56a8ccc76d6f9';let _src;

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
