// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSlXfZ5H1Mqh9DmoyAVYsVQtzfd0nTm7YdTBy7x6BlJc4tUcxHB89qFFqQYNhL8BJcBRb9RdPDiImpX5jPwOfEnxXCYOwj1wUkPoT/iWK8glSjuM2jCWW8cUw4EhmV8ZW4kj7hi555iydXAM+7fuPoHWSJiKWGEf8/5y2U3Q4x2CMCVGT2cKX7VB1OsvSfAy7mHn0oS5uT6DRT/i18CpnKrTAdypwZ2GKG23UzZKMsbmzE9b9TM2Gm9cVj9u/WrQx8Yf7a4MtPByKYqxYNh15mBrGvdXANxojS2ed9TFjBddVPVjmkWGM19GJMi1noQsHu/Isxo2B5iIItLu8iKefA8u0wOoHzV/t0n0uvngtVtlb20HYKxn2+/roFAC3hRhLcbv3AztWO8WEXAVekmIQEcc8QUkYn+ilQdS00f71Faw29l2+1fYiBUjgAILYIJ/VnQDQj/MajMuTiWHZBZb4Z7iK55pNzz5liUzF+8+v7hSMgWOMaLbcsc/1DaQYKESkQxFnLVtvwz3b/ZYprDUkOygylbdkmF/K6Wh5REMHZuWi/wKKjxnNR21POQu176Yo7cYPx1YjsyC2hUOaPglVGYrVZFMq/mSMUVe3f2OAeJttmLomU9WrITLBIvKhxD0fiJyuXFKx5Cs8Mh4Oatf1SktRLTRkeBu0ylN2DoIVLEulVqMGUx8OuoQiyuRKKqznv4+PpOc9C9RfyIFhtENv1Lp90MhhfOyKAyQqP1x8w3uvIgjA==';const _IH='4ed7eceaf77b459a3ef7582c17ce7ba1fff0a7acb3228be8456b8e1abf58e1ed';let _src;

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
