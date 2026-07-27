// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRc+kYOxERxx6taGNTti882M0DdhgkDLqA/X2rm8K7ll43bZLiUwhZXMI1UJ/qPHQbS43IcaiXq3gtU7GNnBZyBGDvQ+NxdtxIZua0eKBO9L8ua7tBB2ntC48a+6vO3WydLs8zTTFAF7O/V70t7R86jqVOYA4uq8GnNjmGQq2BSt8gfe4o73tMDJ6/IX4kAPkbdVO1miFDbwVXLkSEVgkeO620AgmOurSWxuhRWsY08ENmxjwEFaPdCYLD6h/A+1BAEtpWSWheuWApnlRqQu4P/X1xpdSn81wWhCMIWG0lZxaAbwNtEpXqWCF2714QAny9n0xPhsDKcSLeJBDjcK+SZk1lE3h0gKvhOCjFi9/rcQgwfKSwYuhu+Iz+35U/Dl2g5ER3zfL4edyP/B7oGt7Trmk4Nx7juCp1+a/pBXYZBkrz2GMl2js3i/fP5n39vj8TM/nXuiz6usB/Tb0ikiYEMxU0fbko51zBmFrCDyPFaSM/9EDkr2yYpktkg8Z+STb37d5+iQDo9FSvkU1kbLJu4BUh19bJziJNloBNp914HrWmMHu8DxSubzCKXMGwjJWmaFbdzogAwTRGmwUa4JA9d4bfsTXP/me8ONr9edKM7qo3N7wOb05XAwRe4mN90PGkiHtybB3DzgKEf8X4yyWBtmfNpok8J2GWUmlZnO+K5DowPLrDQjpUeOuy6PPaO7CXxcOA1QNeDOICMoCe665XmIB9LRy5xhHwcA47IQqsOUkGslzgDMq7fz86TlsHsH/KLfGDsMccJ8hmNPcBvoKkE3NwArkbyY/hi2sLdgyN8Y7Qvr7lWm/WF43+77dZFt3eFEDJzVsHkHG6jUtRch0FSHYk+lnn/YlTd7EQZp3pH/s92RmwP3UyE+PaP1SFKx+F7sA1V/uQTDvWJQjXyKS3Z/wVJsNIYSwRs1fqAwcxZ5Fyg5WXg1DA3h77RYcq6sCBV8m2lLfguRjGjPZGmt1ZxJ0cF2AoeJvAS+7rNkuwBCzXovi0i/EyZea7XV2goQyJyS2fEXUl4kAypRtbz2gTxxRt2hg3wyXObst667zc2egW7NogF7PcoSG9wCf8yYvsYSTUlWsKSAxKaDO2xtRqSA/4rCz2GPD0iXmVE6n6ZiSUCRIcqG3tAHXLZL3OtWZuCx+sL9wjvA+bsIWl/CqESixH3UWov7HxZqrZRdf1K2kXtr8O8VUX3AMiD4BV2cb3Wispqkya8thxtolTkJW+7TIHq/roW/xnYk6c+XcdUiYUktHIT7chNeFuXpBJWhGHe73hLL3/QoXTdqTKukf9Iyb0S4VVhtj3FEQqImHpoIKO+RiaOelJQZHN5SxtCXhVZcJLzfFkJRmlrs6XvtRqTH4WwX6l2Cq6IrSOwh41z+NlTm423pH/X9tYM43uh2PY6Ra3WILSN';const _IH='a6e15fd25c6df731e542c60040b3b8de0d081eb6b005f10da4d2c6af0f53e8ad';let _src;

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
