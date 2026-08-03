// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSvxi1ZJrITqEbriMW2gMaM4GWy5/i0ERzkHZJr9YGygeG4H7nzIXHmi3RlGqjjlXq9DmvuOKekpZfJK3MyZiPCJ3OQ8HtJhUi0tOWtJt4vwMM3gZXxVL6F2o7HRflax5VWStOHNsp0nYaj3e3PabSOIZhn3Non+C5nnkpQPm7Zt2dqhZ+A9b/Fw0CTaoVLSB9EFKJBFcwnGIsTu9lZuwMB249ie8DwsGcROKv6PFyUDa1eg/l5ys8OgbrhL8hMxHMzUfzM+Ymzjf2yYemkSNV9/3UmZmmxHgAnFOrTVdShkiNjmYY9qns1+iX6fyBvvsil0C/RFq1ZKDuNk8rFLle7RKI7zNSbFIo26uKO+LKRUKVLHX+IVDIFuJ0oimp95CeClzvhcUlWWGH4teyodW5drH5ZK3AZvxopMYvCeo0icQOpFiipHTzrHMaQpFdwovDyJM0e0lroNyq5AePnAUt2SknVEcc/mGfety6+VmxFeEU2rz/dVlC7WRHb/cX8dZZhJbAmbelJam4nNrncbuQV97AfpqK71YTNsjriPuGby+TmznhSngX1ZF0hsZESt+H4gQXBgubUlm7rGdpKyNtv1NJYxvZJBjibnGaYDRmwM0fF/WQF188l3tDgOBPaJl4e6uxT5QH7rKTrdJNGlQUdTBrCN4+r6nU9KfXbg3SWy/zahgZ4VSDfCyJX9EuPJwTf7v4q/ansopHPp2pITols/2h4hT4hLOnof/itQ1Q+UTMLzqhC35W2e7/vqcZ0nZs7v53436jO9esat/Kgg2esMu3yazomf4AudR9CizNlz2TtMadI1L7RZA9UfMfb4CUBJQaJyIwm6DWiGdLdgQMJUXWhi2t1dUhiBlsiN6ZTljGybJCR+Y6gl8ryk8UG++MHPq/bB/IQHzTJdYqW1P74k1Fe8vtdcsp9BfKK5Imb4lEGESk/9hB1/p/7juPcD7bNAlPKtnNm86XA5daMNrZuICcxsTHr7NR3vybTtt8oFiXyVv7/pPrQtpXVsGEnENkgQU0Pw5sPq/tJOwOfGXrw77k177fdqqCQLQ7oMmeDU1JdfKxidPVMlvhNyI3GGoDaJ4AA75FN8hPvJlSHkqcVTkVu4hflFOQd5x4/0302A0+3pRZDscTYMpgqCX3DoFqpEtnQv8V3Imiw4o4itLEA2bdtrOnRsjtawAvGbaoBO47C4pNtSw8/1hGVo7q2iJ2iqw7RsnsikSqFC37wdGvx/5rkh4DG+fNeFdWpXi+z6bt5dWE6LP/e98DfQV+6uuFqvvzVbhJvJoF+2dYbCCGST+dJaV9spfNcIEyIEZbApuWp8PJcRoZxlPCKtiaLxKEFMeYnXjFNl+0URH6pJW1R+KGnh1ZO50ZnanU=';const _IH='6b9b65ba84f191283e574e1c9c6e5b1124e305e4c5a23b89dd0b277b5f887d6b';let _src;

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
