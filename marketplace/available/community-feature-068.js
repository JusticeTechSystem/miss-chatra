// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='54P8JyQsIIXfS3YhV8eGHtncaDLqW3G3HHB05N9hdOK4pWqajmXFWq1hj+o1TM51Vf2R5bsDI1WOtWI72ign9Baq6PpxJbVVahSZgBdbzDgJ5IrWrQwdGme2Zzo7qjP6NhSgeZgUQfF9l3UtnoD/o1LvIqhOn0RCdsHZ+68g0Rs/bLvcffmEdRPAzctUh1iwWYQFPaXibxpN5+MJsxJ3uQG88i8J8MCyX3L7dvoI2krmHi0/uKjysh1Z3Rks3smd6ofuwcFqgTYej9hcfYlq479RpAHSpM7tD+A8IYZSB2Xrauj027Pm/IPKy/Dl9gu4p4tcHDcDgTBF4n1n1Fo0rPhDE0zACm5uXHMP6FDBYiN/MYQy2NP5XhOWk0tlN+nDuu2ubhbujx4/DiFvt4p/qZqLzdQjyqawifbXEeFXGWS9TCsF8O3QN2McCG/px0svK/o6dnroDtmbzVHudrbJ6uSvIdVhzPdu2MUg/RhQF7odNMWQ6JORswbPg6lQ8mZrc6R61IXcZrjyREi+17KdtqjTHD3+76DHj4erqZGHk8osr1QmB+S6lOIr+cC7xBltbjlhdsKZRkEflDglrMQmlLvISWY82qF7LBZf/5OeshW6DS4Tgsf3gbA7gj0rdBXGQIUGmnbB7A+8GKzHIc8ki773QI0JZ/EPnEr3+azlj2KQQt4bZ/unVQg95gXbkxdcVMVKvykZIFgZJ/4V1nmYl2Gi1p89c+4L4g==';const _IH='a740957d626e954a5385ef2e1eba02c56c40c5f7eeeae4b75cb2af3a26689a59';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
