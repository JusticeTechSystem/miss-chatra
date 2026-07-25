// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRpy40Lyz/HGTov0RQHclPrc0FM3hNAo/tt0slWeX1SbmMMFklPg/gZzZ1Jw43yCSNAsUS7b3sxTkJo7/x46JaRfIziro2lJ7lEPyD85sXzweXDLMRTFeirtWA6l8GyugXvlrelI33wIHU32dZHKypET3uc8t+3GZ466M3maWo4gqTn/AJ3QZyrAoDGeTHwniftMobUbA4h44ImUu1+RxByBk04/momX06i/j4aP/xmJjuEnx9njbO63YiHKAp/2mXQIHyHDpEhp7oYhvmXOhEbo6ubgXOxiay6Jg3QVPMRG5ZA5FGVD4zMXHAnhI22yf4LRSz9E9O6ugZkS+scr9RGnUNa3JmfdTAtujiFIcyhBa5xKA67MjQbcf7E+djjJd2HC4XN+XWv/3Ih+0vMs40s41deYnFYZa1khgZTCWPPrusPTJYjHFuCYM/FncFuOkBaCki3kAZXOyNyBbT0MCUC1NewSShQYJGSg5ZQFvZPJh7u/Txq1hRweX1gUr6D3Ng8SgCydU7M+F2/rzKl67WL/0cIT5xUO2XVU6EuOwn04+GDjTmxHsabOnFWP44a6DUHHbhm2H8+nBxN3z09OCj5ePNZEfK5UK4yzbFKeuOJ1gcnTDJBsRUx+MxrwKRY8IWBG4swlekWaXENx0F05zNt267NdladkpqJn35Sk0YcBGENxj9/QaxoOjZnov5HD6ILBL4RTOMaNuNafwlrkkVtZu7hsmI30QEiRqEumEO55bEJILvrzg==';const _IH='c9dbdbc6553b03a452f99669a5f494f8bfe90a0449ea583a9edb63aefeba70d6';let _src;

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
