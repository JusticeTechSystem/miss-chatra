// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZfAYEpiOkFSt1AexKs9XBooCscOjhkhC+kw+H/8jEGdc4QdBCkxP1uBDvjiRf8sSg+gGj6jS8+0FXlqUqH9kYuUPgXpFM9IUEK0qyrpKHiw/fn2+ozLxTGUWR2qmruZ9OvSElzwuPvsrC5T7MFZvVvBdfvBVxN6Ib9sxB2MlywQJntDs5e+6A4e6FWl2AbwipJvLwA5oupKoy03L4Le2CZ0XE2WwlUsyAfjaSDXZCWPg+EmTjmNX4hoMNZ1sUed9qX2jDhgJDI8Nq421Gqq5pdTxgshBEe7gwp63ECZzL6aFoGmS9VfQ638P/8CWvnwYbGqTMrRspwi699nd9BPfJnuX8Yet0NTB5gqC2PuWmW5KTfs2qBY/MeqIXQV89XdNsZv0TZo9gr65K3HuP8soWf2xgjBkOD1DPmEALSL6oY0vSFEB8W2qJvr2nGwRqWMr92K6C/s+DirJsUyWLQwUie2EUePghO8kMbUutertpg6OsJkc6wK3DHA9+67+6UiJr1miDsGx4i4ifTLFNNHxIcB8B/B7qZeF9HaHeq2LxM5gsydCW7mcdsTiPgjK13aigfuEp+HlRMrJnbKPxkg52SAeY2JoWKpZF2S1LukdsjfeuMTlgfcrH3b45ObUGQA4LBWD4FTalsHsOqTFaclXMGRep2G62i4x2SMsql6U7nWj81/GdMDRnIEzC7YBxdb5HzNz1U/d7ofTyciIbqcIk1glzfcjzCvk/K1T4U/tzHjm6QTX+krgMLBE0mMUpl3MjKq2ka8xUVmM1OgoZ5/EFpibKg6U7viLzngjNDcW+G5S1m/M4yAXM3Yg9kFOZMhCK7rU1V9/RVWwK+EaLKYTOlO7hm82yTGMNlM0RGffSGApb3/HbYWYkjjHxBcdAq+Adb3w71PR3mpe8lMbsuq+9mR2ovXJPNQ4qLltURr9Tde26jinxqeYqTgMMaTD+kylFFh1L7xX83e7HO9FRTEKnU4lJ59Ty11D7V47emBCiSLjRZmoE6zHsvJcF4eLBs+z49Rbx8BpEynwBEjw+Hkh/FhxsxaK+6qASOCrXXvBpn8Riw9RlS8NWs3hv5yxdxAtFSaSnHJVDe4xQLcy27C9PyX21syNJVKnIV8J1vK7Z8ELuW8oemhDd+WT3Ph+oYuasAZHJZ6lS1ME/cCtSotrCQEJeqvwzGS6McUfqsACXqe52oQLmaPWFRlGG6ZE22iz0ZnWa3Fqjqi+UryEpOqC9n28/SAoihadJB/I3J+dRH6jJtFm6a6pt6hTF+eldLR45Ve/xbTw+hqBbb4rvrgM0ztTXb3I7kwvEbowfQ+FDZEhnzom6cfjdhfEUTIpFAIF9SDOF8lHzg2jcT7OkzZLnt2KcUw5Vhw89D/A+twjjEZx314eVwf5saTJFJUUknP1mmIizfPdmSHN3FSLDOfmiy5ptaaG';const _IH='6e858f8ce29d7d3795f2fd64970af934d8b9ab43cb1e5333181423b8623d8d7e';let _src;

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
