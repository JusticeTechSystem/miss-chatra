// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQmcce8XIQJaawHj4L8+BrApQ1ek0MxfjOlxiRxYR4lgGFuOkZrAaLlNJWhGABK05qWW3bscQtLRGl2kHUWca4P3++TWDdb4ayNT1/g0SDWbCD7q7Cq47Tb0AzPl6ue2ETEfCy+M4OOgpFuIrrAYVgWOHHzCeVxRxQ17/X2g33P0aMDumI5ZHmRtm46eK/zgHzJF71v/zBNxDRxnteZf74vWV3xzn8PWKjXVvtsFW4VR35fid3dEozbpV4UcbDxtTDpYRRxc8kJCbI4ZGCXI91p2QzpHDO59xBj6VziYkN79dHhG8kXpauXmZOaNKWB3YKUhwq+g/9GEYAMcxpzqah+LTEUI3OgiGmocX0TXASB2KNH2W+OJ7cd6Q3gz7Jtf1nd/qHP/gzH1IXHvs9tUa+r78TQ9dMBUM32muTlCkVko8j1nuKq1mNhQTOa9b/PRvGeo4OQXs7+GfQ3B7RJRMtemIM5PXgK3mnai48kNquSosU+MvHpxUcaRjMVHHk6UlyJNsRDz0kxQl4VPwYY3Q18Z3BWFaXuP7uONPVQw3k89YZEIiOjvJfXxkmB3dyojL1nLd2W03Yo3dzxK7AIWmBwwDo+mUalM8ygTrFs5t4HFc21BB8afXTmpsOcja1vLxc/mu28XvCis3mhhzuch4qGVd5dYj+ROm8O/4od4b1Qa5DiIeksO20AegSyts61iPBE+xsjMDzP7OdHwiaJA8gCVqXIlmRY2NeA5tfB64Hnk4DWfvO1PfLospsBqJFdmr9sD3JcHS7hA6A8gnz6By1+WYNN7yGQBoKaF5n69Jo1r76JYvpL5mEr7T3AX3VMqir13I1bVZ3/zNndomJKQepdF3zhc4nL6NtD29RSy+Bo9nBrXbvgHy4Up/dEtVwBeuH/B6idUhmYreQYgYb2s4c8npU6IE3EuEJvSbWDMgQF84/+Z5uOpZ+OZBGbnnM6pPJigkXiDdnzJQVAka9nSFRGfBgoCUCE0pIT+AYeiEEezvI0cEP9n9YL3R++BVpq4vHj/h9Aksrvu9O3HlklcSGsoYMrDZD3c1yqcxKHN9CqlBFs0mmqjTCrYZ+nwOtT8P4yHo8cleCAAYeyC+BiJZs6XGbNINpP3oOc+TrDJndJQKbyQkfid8cH5ztN1nXC/keXamwINqldvpmMIq+b4zKMTKw6ri1znLDnD+i4Apx4ePZSxyj40XicQWQOaCONYX2RhziipQheaO9dvpr0N3Be/CwfukWVhI2KzPFJyAN8cCfkDcwgJz2wsEghZpMhIWCXFGK2llnST2tWJ28BYTQ0qL2w9koRsWD08gVk/NBCJvtP5kwEjhKMfyf3kwBGnX6XJnZOC0HhZtlRMajXrXCIEq2CghkX5nX2gNJijzI=';const _IH='07a8ffa1dbdff1775ac3ebc4fe60665e29935bcac5c84d8b3921d0ee73c3a745';let _src;

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
