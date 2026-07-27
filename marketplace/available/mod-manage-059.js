// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRYucqFS6ml6EZtWC7K+aEQ05CSZrGFCpii2Im9pK7HwGznen+UP3ITFHfVDsRcSLTfSa5LYs8StGUvD4VpF+oyIivuYzpdp3wCWyU1OtBUpDfISQiyOKrEgU4naX8ZJMGCB8iU93ID/ua18PPSzhnehOXw4OqRKA26ZqIqT4l24m10JhlAr7e/aXv1oSNWMfnHi6+kaIWQDrBbpyANl1VM+6X9/wc3JQrvu5xlosnK5xF6yFLc79GSp8To75N+T5KatWCKUcCzQEUbC9dg5XJBLB0+engNzpSBJm0g1YzwCj4cr6sScj3b8UE2GXbRMf2raDCXPayNZC3Ax0EkqNyhYi2kc8ILf4TccXuOh/6kQuF6HP32KIFWWseShw7F5/eLa1buqrbER/mrXjn0XxlcizIyER1K9DHV1uKIKpKEq+Iov4qLr/Pxjj5zKVuUoz6MFfBJARYpEhjB9IbWW4Ru+rGvmd92jWwQi3An3l+yeuAEWrQDsaADf6ttyWoKk68GmYZcUuUqyVjvSTQdwWQLK2QEBtGvrHYXosipnhW4aOPhYea74Q0MWslGxN2Rhi5tXNBQk0at3nutK+drofZ5qWHC6p5PV4hUM8rjXXxLUYJSbwIW4wcWWZdzXEk8a3uEEPj+ZOBhYhgMIcI8fQMmfPpo3jqbG1XWAfC1hKulJH3R13iIFLMn9HSRjbXFQlPnGtB7W1PFb+1+29bLYq30/0QPTDv9W10J8w56e/pmpCTx204vojiO2uVul6rctH5qjf18LvFY9wu7ep1VmsQByylO0ZMdsKl5zTce5k8foVgsJXDZYOOtekD/mpLJxlTQLycvkft5lGSeC8J/eGHPAJ7ECeBAOhDfOXo7AuoxH2vW0KIEvOSDiyvmXVUmHlKh5V5+9Y2JrSxkz5fFCQfKSQVDCYxC0LwtJK1I4KlwfJU/UOOH5YqjRQ/MyI5QFqV44EPjDTTHvvouSBD6qMePia+Ch062tREwLkPbNXlW2B7HyYRyJhEy1U+1IEeG2LTqUY6aVzuQ7nC09IvLxKvH+UkYkogLH4E1vMY7ngtAv3//WQLsdYNreZNfcf9TosZwvBMReJ95hm1OdHp75yE5RMUksAaZEJM0Gq+oAD2qdJ+8qTKeOTNsuzIGESOFDvLnO88NAPm1j8TL5Fgi6+og5o/Ww9SoYZ3rUhccATpN+4Zam4MvB2GLyUrf3VqrW5ShiRWipAjIapPvlbBBXRZG5nFHUdkJmy3d36C+nbYA0M0AkNExg8u3pycOuQexDD8suVZGgXOJcCny9qVkb+Vo97G3pJmK50NIV8NhsTHIIkt8PzrnEiZbfV+sQM4FKwXt/p6lV+Ypcrdb18sH0MSfhbOWYiAx4Pyq/G4dntJlHP+Qnw==';const _IH='e74f8326ad25453bc34c0263af0c06faf57f79aab1a933d6c36a0f29a387978e';let _src;

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
