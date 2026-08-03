// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS86smxIlK8aF6wANch5JNq20IPDkPsn7wUNZURIbTcg7w52zKoMd9C90YoVfHQmv7kLr63yBmM8FQV7w/YoCOoBdd/7u/FFMgo3WO3lU0w0AfzhChmweVd/+nG/jVZbGl06SVixLKVa+NOiHv+yC1EvN+XhIaxxm3S+5Yq6SW2Vf7UkUXfcEgh97AESnoR+ovf4irRO9BzuTjCd3UuLhCq5Wqdx3B9l6YU5AFy+YsMstA5NLmgqc98UGUPgQZIcP+dH1D92uOyIzc1QZKvph4b9c7i1Ed2Mkdo1jUoi7+iVvOzVhXZangl+dUhqhCm92dPKGsZcH4uYdbsMwK0Pg+9zYUQmgmLiUXCuvhCw27JwJweAQ0sbhMka1dAslpFmkQpAsBFKCobibDilaRS3SUvF+C/wqMEan9B2jc49fJh5KlE3CAMUV3hsmeFwwDjqWdDz+iK1ES/dBvucz4AfIRBhrWLxq7TYmrY5GLBjLy296+BjwwaYXeM3v8CPpscA7clUtIy48/1ybevhTzPYIP/RLJKVXVLcrF8qpzJoQ//yEw2kwfJPWQUHEYNikx8XmWmV61ZMhewReHXmh7dCvF0ZOPHndsBGPeB4zFhPulweb66f4C2tOmOBWFUvZApCa7Yj5gSVYigMjtQFBDB9Ib3KLNR2wyw6z+CAPWSPX48ledwzytcEln3jY9vbhxC2YnteQNoyf0PAS4NCrZonpy959Cot0B1qmeYVxY9qXOd4gWTfAriVE7rio1C8T7VFqSr/viNAXK7OQKWgIGJX2/lhnZndFWIxBgs4hJS3rp5a35/XMNlrGk2iX4botnvgPTFr5JPvarxRplUojyH7bSbLehc/p3pJ4mmsrVDz7VZH9Sywf1rXKadf3cMgjraBVOyPmRMV+Ws1G7CfAFa7n3Cap+mEKjj8sG3C/NTAChFVMpcLYB19ZshQH7LMb3L8oEkdZW1fDSYWqZDloWmPusSWUW5Q12cALH4He7WArdORDH2Th/JQTj5nR9b3w52XnPaHL+uXYTuQ4nRD2329AHc6H6eFXcZ7ATpm/sDRIFTwRReU60dmGe+mrr0zwN4Q9V15TZJf7Nn2E0EWwqV2Q1P9zyWcvNw2RUcaYRxLN27o6jNpVgWU+Lc9++QkxQIS00ceDAv8qfHNdSqHZ0ZTKD3OJt9+55NNxXqJiqoHSzQPRPYNbRYM4E=';const _IH='cecf5c05d69d8cbdb0a9a1dafd20758300b2665e9ef803139b2539afdce48d27';let _src;

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
