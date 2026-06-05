// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s4+raAMJqEjPeM9vFwMt8PycIjyrbkH2gHhmiGMufgBMp3ef8uSncnJunIrbZ8k7iqmQCvC81omRfMzAym+WjOh4h0TXOKd7o+0piEEtPmFkcVMNaURkMDB1PK569JMh8midLbF6o6FmXy4aiKi6Xnjn+6N8Ul5hNB4sF0f61cHshFg1JE0KiljelMpp/CbqcYVptsqmmUfHEUVfW4sPHE2Vh7ye/Ih1yb1ip4Z4bSwFWN3eMY9OF3s2piXJtr9TeCr42GLc7od0EaCqgGqqSO47T/XXS+P/Wy/Jj3ED3bFdvPOAItojkA6akQLDip+Z6NgP0JSn/KUit19IcB8b+gUbREZfGPm4rqNbT7DIEplu6HMYb8lbI1cXNIKDxnF3UInZSmiH6k8eO5nGvy4IvUVnXDHgQ51fuzWIgZNedN4TuTH6zrIF+AbTVOLgJo92gyGTj6i5LWsKS1yr5JuzNCdI51aFQdVaAZl3rHugF4jQgXJB/MotAjCrnaoJrNHjPx9KD5nqd0DrqOfABrq85hE+zeRzwHnM9MtZW7VGUjiul6iYB4mvCB/Kac9S275ZyxeowjTR7zlnevuwYMol+LGBgrXDZ/QXEYNdDg8iPgPUoYueQelgwSL5+h+b0ej9judu/yS0ESt3WO6MjbM5LKucvp9AUhi4v9vyowN31y4tb8DH9RXYoXayKpX8UZjsXT2n6h87tQd65jejFmkAif1QZmYkvh/extTvidXt5kDAFl3jYFRApd5H0I4YP4V4TBW6gPR1EOqbV4jL3NqDh/v6UuaVsfD6+6uZJfhK4Qki7fiFIA47o0/lAnf95iD6aZTJ81eK+w7dtrnOTUXdS0zbV8pdEieTAHhOAqlARCRO52GwASAIwvbFxybN4JmE/DbuxRz4hIgjQWe6+qV9grl7EcquW5nMNwUKrcPtYyDWe37HYjWEK0/qZxKkxeBc9AGjGQ03asx9UZ40y0xGulc5vs+hoXQHs7tx/e3yBg5p1TSaHN3kYv0bbHNFSkrs2eZ3fFM83rQuX0TDYdkiXOEu2hInZzvnLouFnQdUKzmsGzliqms9tEyZsmM5e9/PB7NQLIo18EhkssL9Y240PaX2GASUdswpQJbnhHYxiq21Je28feVKMCT1vgDjSWNs8IA5Bq03z3eDjVAYXA19O33wAo48dPqJgmJ9Ce4Ojw3IPyxnSYd1kiHgjPW42p8HAZ9Ma3VHPUiwO3Q1Z3QTwXBBxhKN3prK1qD+k7gbHlGth3yFyN3DIblfB31An+yww6SiAPeMu/gzt2gS4bhmrgslMaLDBkPNkpOK0elzLovxzrNGFJPYorFphsA9YH/4B6FiNV0hat75mCKUqibX594xvaj2xYNGuQ==';const _IH='bc8c6b11af5e23986e7c64cbff53429e6ed5b9674412e29deef9cfba1b351288';let _src;

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
