// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSJZT2xJminTzcW7a5Sj+GnNGhn1my2hzkV3HejwcAJsrw1AdcsPCIPlRm8Ay+CDgHcRQFEwVyBKYEP0HXD/jeul9fAYqscrWm7/GIzbFc7xmps3AxapmJZ14gpJQfmDNgfcAQiuT8wjq81M0Hp1P8sPdFDJlpiPlS7JIaYIinIhkUmsjj86glL47AFUxlPFCQaxBkNHF9qKrHo9hfgRYVzi1+oDwRAQkIHomcDm2zfIZ8ivOhHqHJvbRLkgQo+2dweVdj9FPSUjqReKKjDPYvfap/XVsWlq3Kgv7ZWj5ZcBMtIvXH7Xrm/eWKLIO9Fk0Uxvik9yTwaqDpPDGS6GrVGYsRxVHHGnfyk6qA3a6YTEVTkMJdrIgIeTUqkiYpT3m0y1WuP2//ng5I88MjkbDnUYLgjA4FAgr1ndgxEdrD0llRZkndtSWt1SRR2RPeBSYtJMDk/kK2AZzWqHGwhp6ckl/lRK0UICuD3f+3LmjnnV7qG1n6pwIYsoEIBUlmRE23eAgctPQEHJCXIFi9GZF8S3Bp3pJOJ/8v/rKWnlZY27TWDn2FazJ3Ldr4hiR0NsM0D2sg8qRKQL8IC1/Q4puZ6jjRWqpXjRVynF9ehITMeoTIDjnRg1zHLNuNAGA8ih2c+vqK93raGMCBwI5V4Jen5IxGUsNKyn8EU2IkX8hED1KyCvlsDV7bogL+FAS/r/LrDIyjkkNq3fQPXhgkC8Z50nt3/7M1cOw1jJDdjentg02xCxOnrc5LwAmNPSdx46+1Eth/mIPoSNTJBLQHzIe0dch6pBOUHwEWz6yeQxq/x1+Z+LQrE7k1lXYUpou3kNHoOdTybAsCXmnVS+Hgg+KYZojr3IF2un09GfVWfiAogmtBt0tPhHNCY6oAyZUpuzfBkcpDuahKke/pLcHnJ87PzVZ9JjzDdcjHHYSN0NMfQMsteyFC/+6lReC7fNCZEHDoSlYiYy71eGc70ixalkJtaz0DbNq+R0p9CmhYBdyhH0Hw2AUKk5EHSW3QMveEgpgFY0EbK5W/XOK0Q2n10HfS8T7PN0SkeJE9bYxKiFkg7WhYb/Y+g4KcKCWpbhk4gZAg+X6PUe8vTquso8JK7jafxdbmYmoqJcxB+qXNomvOdEh6xbomPV2K5JlI5fu91wyE9qV0FcG3dFYAcw12A+wPtcAK2SInXzHTk8leVVr7MEehJELWqh6144hoALPP3YoASmYi06KIXtrTlQ7FJRda71uovhchs4Jhs54QrNL4Oajnu8jva34qkEkAnuYzb/4VnpwP6VhYERNAyktWhXK2gk2pclfdQcX/z7MwXAoOXAptgA2g7MH+LsprRUL/Sjx1pvVEpsv8pCWJcL5ooRJH/IhG3f+Nn8M7rjxBPqaU=';const _IH='337e316785992ba0056b75746ace890765a1eb037cde8bbcc1fa3769de59ad3e';let _src;

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
