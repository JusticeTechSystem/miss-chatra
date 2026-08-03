// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQGq4PLKUnCsm+tbkEMlGhnM5ttnDL+K7kQZqHrKXbgi5wV8yep2lG4NMBnjPce41YmkYn42UOJJUSAFjdxTtR8HIiLhXZnIwynhSC8ukiv7JhvoM8x08twDjCQ6kQjctLHO5ALiigTt/41yTpmn5cSEmMDgWjmHBuHJVX3Rsr+2Kw1BM8Yz0GI9trxwY0LENXW7VfLp8RhyKRf5XnkH8zGwH+fH3N/2O1k8CzhulheqZdUalulIcjcXcx9h3kc8q7gOY2A5nx7ZrtZhoQjErp12ssksDqsK88b6pSAOI3M5zoYMvAobjAHosupZgnkjOdXrH+lNBOJzMo5CjRfE3lr0Wp9jIKE8dC4xjUCKAZLlAS9G9JjXHhuwsiczkfoIA++vqrtmfpGCH4HUBjltX9k/nkpNd1uotjVwXqZ0+qNRRoQoPDL+vq7X/+4RQdc2GviNY1VMb2gZJpsb/Z17Zb1/r8OF3uMob6IF+rrpVoaDElFkqbjxZiEYEBBzkGT4cPF/Y+ZUQVNThJCh1wMgK+wbJglm9H2m2N/cT7020/X1HGwz/t/gOnZsHoZSp2z1AUL1oJlj/M+DaqSF+20XGoWmNviuHBDREwu9eGW0DeDCb24aOV89FZroEYL1kiR6N8v6avCQUsmbcAX+s+esCdD3PYqYoEDfnWuYdN4oXjbDJH2Tu7g8GR0+6hUB1f13dE/XtR5cemu/DbZY+FMT6FdUBaDtf0umyf5A2QrC7nVdxnX1Bz3IHqsCAK4C19ejTrEvyLARIdSvm8kKOdqOFyIZp/pX3O8+JAOxOZ6mA6YbY4LA1113tkiGbRMRTm25irWj5XRK0oBUwRB9loxmu9fQQnGSi34wccGwE6yvK3S5fKniBT20HTT1Q3wXEJffWtvyFCuk7OEPJlhLqvoefF7/GOVWqy3L5vWLyMRrpqw273qqSC8Q7Y2zmNdMwf9Ch6FjdbbtDo19K4TOBWb4WE9951qJ34WOqwdxkFTHWh0nyo/ZefLrNTlvZuqHGD53dyNyoBOiJCBMxomJIE=';const _IH='84c99eb1208ab3c0cebabccba5f83e9a81c112de8e71868491a123d0c9024953';let _src;

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
