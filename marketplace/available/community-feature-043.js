// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQR6em1lr7hrb9KZhH1u/vJ4ffOA47Zyz8Q6dNdFuAGBMEx2W903ohLuv2D6tY9H2GACxWNjFeb1ifP/tWHrhAAixPghLtbO7hLkH2Iru9cvvtx2IxQN/4PKcBpuLqSlyaJgP8YLT4eDPurCy6/IGdDdworWuGdt2n46UEaY36PfZCSLn9r/TvfLDO7Ka9vFarI7uEWKOFy0+pbhPrNnYZkHbk+w2jUEqWqvejs6juIRu7EQ4ASplty2O93CouPb9HLZSmRa9QNxAL6usNy946JmyOCi5XsYdYvWFE28Qpl54SjaMTm4ISES61KOoGKL/5eiy0UNybrXqmU16rhc3laWoDEL1xmxJ/kHvUe/a8Tve0b2u3EQpxt171fIdQ7+SO71KAluZXjHyyLnJjzn0iQun7sBbWowXgvyrRYIvWHyZ4afXf9mAA0IqG3ozZSnIxW910hxfCVnMHqFRU0zkcgB3LiWZveNPuyf8TluK1J5XaU9DDGjt+F5GaR7wjvM0H1orKq/3wlPbfjQsfKuMH1emnEuFvhm6+YWvryXpn3evHw90zIv0giJFuICo9kahTiAiupiquGdn3oMKvvNPRGYSoJpLzPG/uqYuwJc+qegwfZ1tepGG6My5wXRCmLqxYKbvnWf9uG6xs+1QDJLTEHV+EllaG+lK7vYlMfLIWPlrzBetvdXahFwXd13ehU0V34aEaVjiY91AqzjjllzZH59wMWF6qOSC/';const _IH='9b84513cbefe05f9e1232a30bbb85e2e6805b89576b256b1a3dda1e0418f1d1e';let _src;

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
