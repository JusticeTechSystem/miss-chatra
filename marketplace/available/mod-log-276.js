// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSK5ttW/RqtAM4zvozx4j/3EZikeqi7/SoohCZNgf2dTYD5azQTHokzO4derT9L13l42/jLleMF4Hwdc6pun7PpKjqjgwjG/2Of2ipfaOezCM1aUBrflAAOA6c4b1kgrcnTg+KlHnBZr6VDmGoldx8PyBHuKBZjlx0SRCipJOenktD6iRvWv/ShOKvfS/FicuPfAlS72dQzq6dRfWRkflLfiNjzYcnFcaNfeDwUyYsLR4Ofzqe/lI3fU4KI2Vx6SgL5nI1n4vBXJkFSY97MDoCZqNFCd13JtNdx+TWf6qGKIPgYlRyc9lt3DUlD/+oSsljNWquwdB3XUeNhn8LR/bdKXx5kLCZQm3LeZcm6SriLP7cyNeLj+Ro/kPc2IZmYafUvC0I5DT6j+cPHVkrxLeP8Bz9EoW3ju9KvA15imQdP5qLfAkN0eOzDBij7kxqBOR81JnGG6nAvK9n/lhwEcp3+BGRo0EjvhUS8oGGQO520fX1eWClwWZz94Z1W4pARYnV1IvKmeH9HB8VDbK/G3jXOLUYFHa/oQgB60nmN3aBFcqomVW7l0nod+1/Z7clMioEr65dO3BFdxlMjzxVsXwqB9R9hIkg6R48A2/H+7wG7dmwh2ApOIrunQXTsy3pqkBqIqXV0oK9UZSm+DPqdTeDF2kTAtb0BZhFFWUcuqYPuzeq8kejqpXCuGd2qK4SwTtG9Up5fsgNrC1vE6OcVp9Q5DmLdS0XZiaWsXmDUaEJ0cOIxYOtxelYJTjjjoH7mpTvtLOEO/FOSi/C5EeeKZxBFZJG8WyBqoPr3rIPJ1zGGKucqo6tUZ7w73k5qiN2lUQnxi9c6jnl9M7YvkY6ExZuFMb9tJpO+UrZknaKpYqbZ6X4TY7TEwKb/h3KjWJkw4MS1e/2oMV0OW7i0+B9KMBNlRuLmhSEpjSMrPdP/A+iS34MVIwr9eHEjfge3mGZApQFR/xpXhAOHjZyE5+K6GYAk9pEuiDPKCijInhO36L5O1w+f+dfSR+IZw70TskGlbpdINuMxHVL2yy4SyuCvwhAlQHv29ZehXB0sAUfJLBCqptLo+wWljyBpZTpvO3RRz+oLBEucwEg7blKr34svw5THrYN8+Dq6Rogw2VFXR5FPFz29wEBNw7R5HKpUPlu2qgKni6D85P1a9Gu39huVISgTW5niw0ZxcL7bGXrFtbn0Wg8Ju4PLPDTLI3sg/m0Qe1GoXGCtv591lBuoRewXshDYW/NyVd5aaHoK1ZvgEy0wscoCpfyrFDuRKA3s/L6OYIfOuU3nD3fJ6/8BwwpI6EqU3QAOB8fH4x6plcUxLjzfOz/w2r0JZIxO/Ns2yFAgLcHiDTwkYzYB+QVD';const _IH='86d524eeef0a931d5f8232e469f04048ea42d782288fa9937bb755793bc2437f';let _src;

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
