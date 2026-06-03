// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Dzw0C0YKmnBJefAcHLB+rYA23+nA2XJYUwfOOhh7pe469TTAHJTzKUesif8QiLpAshQEy3jChQjB3NDClqPLrDzhiJe/9qVZ1Vr7y9SlWlc5lVViynw6wTaT0IQDzrumyI3HBDMQbBGj5volyv5hDzQlfv7F7Mj3Ckl7DwNP1xOaDrJo7wtXOACTesjNOt+b1VlhqBnUHHqJToxJgLZgqU9WJFGJG/2QD9+rQtvZIAVrpGft9N8ZZt1YNxPdaxh2KAR3mfbmhKYVS18kXx46DVAv1/Ap8ee54ufcACfLoPKmTCy9lG9qK1JW0whwQqV7i9SEQB6ykxrDfXl9FO61r7YLYcGeGbK3ss+5wQkoGXJnCV6a0bVIiGD6XAc/HxXvB9LIBsczoXhoXlNDqJkuFTYk4kpIjqc7Vez6u8f32RfVeyUMlb68dkJZhRIalPNJEbj86DM346pl8RPWi/zqPMm/dZV1QW8vX7WAbsGzjjb8JAZ9HmjnQ4ZfH8mP/iVWoP5pk98I7aCokZzs5ywqW094Es7BpwRsQX6g4JnkYLC4mlUTFx6oQ4OSnTpTSGlQieW4PPBNFlUJFdh56nh/h8XG3NGSWf+IFyfa7VA7DU/eTT6gpU/lNABjwN/SgnqBJSLswZXHxgoKnmOA4dPh9lg1MfjU29g8/z3e/h39HLMIaUySBDUAjHz/2++z/pmS1fNNZTXz9SVLbjhG+6uL0ozTNPm5pAnk/TLIDUOrGJTT8PorpWmWVK41UAnMh9nNLk1jBDq/Wb9aaJzx3Z5JnuumxqW99Ppin7vZ8WwQSIxsWRTnQsTHu7dRMmdcr7iyJw2ccc5BEjQAlc2GWbrAh0mQVXwd7YTNYItJD7fd57hKoYnHoow1B/xbBayoUHRm5fpFOSZmkkATuG19FWsZg+5ygCPaROxK04LXJgtFyvLc0mFlZb6bebJ33RL5cgrOxxBAGQDt1DsPHMWSZ0y2oDY4aBJ/HKpDD4kTfX0IbY7lPdk=';const _IH='bc0d44c67c9ed86d9f3970835e0194a440ad30064a2a9014014a924a5706ed88';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
