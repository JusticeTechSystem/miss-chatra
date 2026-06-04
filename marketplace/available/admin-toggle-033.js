// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='roc+LuzvlBknOSfnsrj5pyxcG4F35y5WPQQLK8chEQbL/G8YnsFsRfIt8KcZysT0QFMqSMUsjBCqEKvQG/ZaYN4gzVZ8KOKAtLHo2nysynsc7EvwTMqrEDJ+KqcIC6EOFg+BuDP4SI+Rv7yDL40O8e5+P/RoOp4Ekc/orsqOr2ZipRDXgcV/uRKOlGOS+gzsbsX5Q3DCIQFF0aufAYLF7l5YldvLetCZOS5WgHcMPyB0piT7SjTY3hT48Dn/ccCgMqTm1vuFlzkFY+ULWDi6TqxKfzLdBTzSHlmkilJT5aC5l7oZ5XjF0hzu1WMPqQAIP2HP4RoP5YiFftG+i4ZoWDkmL6zrhajEJb5Zg6X8MZBmBN+lA9gNcQQ/JNc+tXeTHoj6feMkhcIfZHe9k3bqmQaKLlXQral2xqRBElsQA7ERGQReA0Wpu1Qa+UOGFs3MWjI9jorAD+E28/wkI0QGxEHUWQ0VO5MCK25llRdK/oTgZ9vRJnyT5O/oJwSaaKaOgzeygAI2VOGoj57bhCLMNNRwnQSUDGfmSbvVO2h0FhdMcRDiJ5cfNVFuCp7OL6zTmrsY54hHd7FJ8FqygWcKHsPz6tI/WVRAPY26h33wOxL2exyQvMTUep97E2/CXMWKnpBwlRZGKNEIO41m9DQwAex8NeeMaJgWIj9c2RSHuzga41U2R8wQ2Q3XpqnEdOHLN9zMU9PH2PJMLNB8+yM9Rly385L58iTx6B3ARk7LvJ0LO6c6zu0/eGeCHqADxC2BwCB9oI6xZEkRE6IwKhbKnRkzBjSUVmlJtmCY+rt5ly9Ni0M97a4a8N05lNnJA16owr9BD3fSvWZ9byiqA+8llxaHJJSyqYBHPbuxdSRLrIdM0awcqhJ7bZfI5640hoP7sX0GBwLTUvQVpUmsWl0muzx+p5yjap0xUmhU5s8L3eVNBjRvV7obK0tjONHutYKktFqpRT5E6+9s7i+OmITfY/LQ3PkW7aZP0D7sBzWVxkQQxJtYDDqstZ2pCswR';const _IH='a3b506fb250907bb1955de61c907ea2b321f57673df9b437132ce07b16a35fae';let _src;

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
