// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FcIA4h2W+HIoDxtFNhFP/UrnNe4O+X1Fdximf/hbZG0Esw6oZBziSXSvBk3wFRbY25cDTJ24Et+hgFC+uI+9ZIoxfGPmsWXZciJGSDh7bEoIJ194JQClCR4xGCrc0/sgEioHo6CQDjVco5Ns8K5cr9yKgL2I4anZVn4P09+2LRrzcWAn6e9SmTIjN+ipEXXLGxl4yAId0ZwT5sI1x8p9myic638x5+pFcaDw90UOzpKQSdjqcMsV2zwSO3d7+tHAPw5swieHLoT7pUQ5ya71pCk9Fmv3bVbvxTPZyOj8x7M6p7GqXbDTZIuvAUxtv4t+PkPBpl6HkK+OXyppQ9rVlnEKElyEYElCouUoPqQluNnQdWjN4+MDWB8ozCzqAvbxOtDi+vyI/W+QBouFkud8t2ZWKPJtf/D5GJytPOwCPvxt08Pl+QHmcTPR83dZZPdR4oU1ancOnpgcQ+sFBfiP3joAnLhjwgBJIUp2kM/sfhga4RNYhjyfG9ahBvTkM6F2qMgxYfG/8xhYPvky2ri/OAGb5qTHMTn3/s6i2i9m7wz26X2F40j4BBUMmUzmSbGq9tWdNeYG9yyXuJoS6NL3EuIkP/BudHgZ7OtkF7VKSnoGTxxHu8owVh4/UL5yL9uNE+VTP7LcGXoJqvy3iIpU6sJNuK8c2z50WfLW/7FMbXKhakICLETQVpi2HpIANraDt/HdS+/lCwo/WH3vQmpMdi5KFrzGcf34rZizgU9Y1FERLAf861ZWeogJ6nGd/SoDZTxuJqj0eKEt8LsgXg1+5f2wito8gFuAUDOFCHAPtrL/Y4ZhTUb9I6+BPbalTKSOVmlhJiFRmvXOrZlZ8GwaR2RHAxyGgDNQ9oa3zBNI2CLluLbicWyeVDnopli7/7E8kcv73uY6SkQ1l8m71skgKLqIS8aeqzCS+sm8zqXWrV8/4lQVwTl8yC3eU16G9DvS0ZOX8gAZ7RwWhD4kt7dfNwaXW5YoQ4Y8/ArG6e3JSRrjbODEq3Glea9aJmHhw69ET9DnM5IAJxz5OfPkk3UY/rQUsz9cXpIfVN40pfs5PHnVNbMUW+ruUJ0lJFx1uKg2ak7qQv8ht5nzhZX8v8w+oUNhAz629wdGq2KT2qgpD6d22nkX3Q1cYkh8pltHyFiTwzxOUxdrbJ/uNRYONhk3x+TBSdnKDe6PAJSW+hKOXfS5d82bdMgP78nGQASVDewgbnF74i8r2tLSKtq1dNYTH2GuyNvb+imcHL76Yjb1Dt09m9PEQHxxvqYZPAn7w/EO6ZId7821bWYT3S+f8gVwwEYWI0Ylc82Tr0Mp0qg8NfYIG/gkxj2iqE539L9Nn9wIXeuIQTAqxb+aXVOAwv4N5eeX7odz9DoF/A==';const _IH='55836cb0a675427549942823d2487992d426f597f9011f121f18829f9649a524';let _src;

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
