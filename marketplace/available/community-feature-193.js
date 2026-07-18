// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSCIrdf7iK7poloKSb3cU9ToJokesoFk5ocLX3wdD3EIDLYRZBvKIucwNEky3vk6k5fJnWgQO6EA8JFMx69Zp+qpM+5MK29HMbAb2QZT03/LAQco+IQ6oIUquzRUjywaI0aBtiFtQXuN6fKUyur1xZ4cv+7rBsunp+pHjXXQsaPEjsmahQIn98azU47Qm8+RCucSUYMyeRGTJ5TIulCxr1Sr1GslD21xS9NK6KUnVwVrBso/0taefxSePFQkq7uwQblFAtMW2vnpAswjLO4t+a/bBbI6MoWsQMIqENXJRVCUbUy/5djsjVuiqPWbtL2A50FeFXxTUOyYlkPrG6dLUxYE21TU9BC0eVChy6TFefoXi8aaOtaHzUAzFTsOKAosiPg4pgdiqsONK6LnLQm2PuguuH92/o1VBNFr58zSSMh5PYwpzMvz+oMZjh4dAaANe/XhE0BAJPlj1L90U3yQBKPNu9s66ymPVxb8l0HF6wJOHGYCTqvbgNq3buYVS/D7Pr8yjySl8YcJZXnZJnoutb16gMwECaWpLXKIsEl2QNMxuvCgSdbsuNQYa/ctAljAKUNuAF1b0qwm1lz9ZNQZNjSt93TcWJbrh5rnw/44lb8RsC4iidBDr+/sAdCDZa/OPMIePBznNRs/LmSJbkJOhQiVXQVULSQCekbBSn/MhgJgxWXCSY9HIBx41zFVLzZHcf3LCJ/NWqzJegkFTnXSjl6W+jOzAry63RzWAn/nQ==';const _IH='7a615bd81b4da7e75f38995b42547069e9ecc93912fbbbbd1733086e3774a37e';let _src;

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
