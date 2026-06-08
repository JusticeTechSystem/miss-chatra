// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cs+gi3Fl000BxXE1zIMJAMcVV9JM+FjI20NpKzaBpvBIseHVspaAh0AWjp9ET7NI1FocQnaA3jl92qaACUh94uGlZwLpsZH1CZn2wZVibZmdY0ll4h3p1+Z+9B36th+u4r6jwL0A8Fqj4/mh9XMIv3xfQNYMj0EN8hCgxaB8Cyp8dis+0mK4ohDuZgHcTRYw+xp9tDefzBJjmzVoNqRzpjSyGXo0W3WX38N8NoIgh28En68XmHSKNs2B+x91BX0vL+kxXAQyA6mt2OfsBNRrmHE7nXoML63zVIuK2NSK6EOAFc7ng7Np/2UPGXFeVcl4dWPHj4fNQSH4hGFgJyoeLij0+IHWNZoD1m3jedVpea1u1HYZsI1Y2L+7JV9EvBWKPgtEQj/JtrZEGZkL53YC1guprVcMTFbNRgPKXNWL+ptnrcspeX1H0zplZw76Z1fZMykoC7CZhiOlY7IrrJo36ry9XSuDB5IOqAf1nU/iiiDF/87d1ALZXiGJ1p175jCtpVuaxeFXPrUhhYIjvxPy3P3EbspuAz7F2oqHJHoLNs+p0ix1xIsfFQjVDeUPKogJcCtGfGTR7wTETw60CHfjZ2ddEd0HjGlogRTRbyYsWuHBJ4hxKRMSHGxNgTs6ANa8Bsc+6U49/BS6Gb1uDlwfBknQWdHPSI93Td/quTkQwlB+7djDEppz9cTpKtavs0xQTNx5JdyL07YtKjBtTKJ69ilTgpaooqCD5UqzX57me6AR1zo9EKW9quIigOiwqW10LuDSSLxyCl6gvHAeCFiRrxSlzzsebnWzCrU3S04GdPP53NQBM3OP3nGyShWKSqIOPqlqyKU2AhBCCR3bXD3id2oXiqEy1+yD+vLNE6clsGg2NJ0d9GYNFWBWGwZ/LRWDIy3q7jigYqnckSyRd/cixSPoxz6A10uo5CJn3cMXscbIUUBSZLxSmUiOsJddDKHalfjg7bdCUEtl5d2ZRuf97Lm7XpCU6Iu7bM24hlV4Ml1jNPxFmQWJ+jeGBg5nja7GEEzWMim685vzWr7KhSxnYTgIInVVigb5zTgI9mvhvl4D06VB17+ZGmrKzXuM3AFT1O1JEE74qT0fN5SW2Z3vvzjoi/KqiVQ5agh2Fwvi49Nh0XbFgVl4ngaekl2PQGThD3FnNA1R33RmurzEdjHolerhnhqMCZ+PruCSJQkE/cYkQ5kq2eEuqU4tgTjf+/Ogt0ESQNjvbnHXMLgA34dIw9WevO5SSi3/xi0RSrTLtVA02ux6sNbsVKGF7p2AW0bv+pzTrU25bbI91loI5+zgpbfDd6YnKHG9KkUinE+73y10viiRwUZVD4ThJNirGJbKQPeapVF2Z5sJQeMs7sUAj/8UKzGJaAgGL2V+4gQeVGMpLVBUF9s8aw==';const _IH='36927a18d33eb406776eb2afc0804df3645ae1e8060e863a5af21c872a7094ca';let _src;

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
