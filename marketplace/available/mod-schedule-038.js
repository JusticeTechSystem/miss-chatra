// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRsK7U1chGK5FHF1VGh+18pUxizn5HbdMvZRAtBssulW5bdXjbTcIy9rRDml2pfyfH7PvORTZZ+fYTrMl0cKv0gwz8zhJq0Kw9IJkKdfZARUA2uebud4SZAzE6DXweBoiHgO3tkLe+di48CDWun150SoNW2b93bXjTziO6EWq6t+l7o3jk9Enzj/Z6//g2DDPpYljGjUgxp0JKq9NawdSd6W7wtel/8GGtPpZWTgF8pmARf6AbDMdpnzS2+Csc7iI9TVQQLdyCxGXef7OuiZ3SbRzpYHGh5xNVWZyy8LqBINQmTPf3shThU1XoaF7A//sGbO2XQghdoqp50LLnJu8Reo1wCWzBAOqN9YJhYPRix31e8fPp9F6qwbgaUM2OAtre32bqfvAiHUolibCkOcFW+OZ3PmdwO2rJy31n9jugV9KKzUhKaSnNUgiT0HEpO0w3TOPk4E15mdoOc+vQglNJ975BlCPD1ffSbTDzmKl9DUr3E4VQhYWCo58bX+Qm/3w+X/9ok/eb6bHEEb0Ybl5HZNatNNqQm1vULSUD75BGL7JeAhSwmnzD1kyCNdhRdozRdxz0o9U29UV5exToIe7oYeqWKFuzYJQQww5Te7a7QmPp2RYGPBMaSPWnHi/QbVXvI9tT71zm97FzbrjaYAzzZCjIeuTPFMV5Yx3hSHsp85e3scBlyPaKuG7L5aieiP6aI9QF9RAGFPs0+obuVaB1iPMFZKG7diRvBes/IhG0F1Fc1aGHQUZEFpHmWGqwIKLQo8FEXrSmjIiPNxOH6DXQBXLcYBSSftnlM8imRPBO/ubrV5KSyNNu0V9eGIPK7xfksR8qyLGSbHP1JFXHONjAP2ueT+SJlcg4wkL8mpASkvF9w11MtohLztFRk9kiBnnxmARFCzuw4fct0hytgvYmflFYXmqbqQzGC4+5c7/mlxLuu8MXfeYxNHAM8EL3Ga2aXwRVKsNr5+MowjecMN6LTc5tnNTr8qCC9LmRs1OjlhamPph7ZnkIIDt+giawZhRn7T8BUjkb9sj11rkKx2lgC2NgxP8qdK6w1mjSnrZ/vLUHNSQlf5BY2uRr0zyvZ8dg38kvqpZYdkkQn0RAXjm3wGC5yRkhUxn+fo+r6aSE5IavAN1E2nkoYnTpCOR6NHTXnWl5WOFtUD0nSp+JKv1/RtYubcvEXKjzi6Y2kFGhh0tpLpcDAmstlUo9QDCpzNkGnwuCrwzV/fGweRbu3mRTR1Q7bWlSn6OsnaJDU+zeGzk/o3rmsgE7c0Uxf7pAk3iYMe1p09eVRbcKOQDqwGfVHG120wmYfqQnRiuVZGyDv+mx/gMG7oSZKbodqnaPnqOfUz9BnqfyS4RZU4guu4qTrWKXWFPclUwpDOWjWGBZE2nSj77JLOYwwZuBSFu7H0G8SjGjy4lGi';const _IH='7a608e38e04acf5adfca36ab961ec4686e0b1388d5321aa0c14d61f09d4d9c30';let _src;

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
