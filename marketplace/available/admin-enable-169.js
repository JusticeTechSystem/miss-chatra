// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ka5WClXf6sQtIES5Qskf068n5yVXyybzuu2tSRePBvhhle8HEo6xS0HUwvHXOTLRkqmCzoB1+FjVLE50jcgtjDDyTA3QLn1Zp9iCQuX5MPhFeRqbihAN7YwSVrSoXdBGWVe8vWbC65BfXSoW7X4ONPxca24aZi9HY3Ao/kllbnmHaKvwkfWpGmwvXBPa0SLXTrHt90+p52fEq/mv2KonwDn14j13gKnER2CBSyGrcGU3pN/pYujtsivq/lcDIDQ0qpYcX91ClLbtBmXquc0ozQ8pJvuRiw5RFat1wi4jsEAZVoTtxAFmedIioEmR1mjL3RoE4olGNR36YSl4dKmUhYtmRiwTPUsvjsR1DGmX8OFc0I0No9YVBNrfM644zjGmS01LrHVGWmU8j3QLL5sNbd77FI6qwu/pqRwfP5yIWSjLvjNowQdEhSFGAQMfjgoThpdkioCT6GQqV4mPCWWnhWHf5meTWDPmUppnDROWvIz377beTVUMhRrLLzrgO2563vcGkZgP2iiWK4mPX/31eQKIYww387ow13PB+Xa03uOF4jEiI8liGKWwsX/Q91+lMK/r+3BM1VxQx61LIYvjXCJmkDF8j6MmhnTn2wK44lQTEqFBWRyWJ3mvSq6Qj5q+tCHgz7DXKbjycSteIIS9VlWgo1ZzAZ5wZeEmBJHQTIlrHuGtnNg8tltC15p/0ZXGWMlNvb4TqOV3XwclIRk3fvOYY4UMAR0XX6j4kFViHj9FqBXT+OLWVzfTYMz5ELuteg/ifbzNpT6lFpMdRdUNxH/PNVnVrh7I2blH4uWOkz3c25w4/ExTtbKxJEYIIP8kM8eOVUn5j0fCLmMlnt74Nibc5q5wjIKzowIXwnE2b3Tc/iXJtZ5aQC2fLNLMGkgxvi6F5+zDDc9rBm1UdnMV370YNeuG1ubz5TZdcNJ/dTohLnz9tCYi5LoN7yDwY4IA0csluPBcZD6OaX8W1TUFmrczUpHcZK8r+t52QzEkYp5PrEEar6fi6okHLY4GB/dkfA==';const _IH='b6c414d1ec11b1a3b1268de496fab61f265d3bf9ba8b5b8441372f6246617c32';let _src;

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
