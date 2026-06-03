// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oFTk9+zixOOuxrGmoWkXT/JfaE2VlfEd+XXPWG0R7DeoZUG4ldp5vBXt+/WDOxoHSO4owiJK3lpUBNRMhvMcUEYUjAteMFxQUiy4yp9Po+38T/ZdQJtUTT18IxVY181Vqg87xJSzlo0uE4QwtToWeZYdiwQRT2/U9xT8JwwO3im13ZSJOvopcRkA/+dIrXffv47M8aLNe26E8+Aq8CdcIMgxxeYMeJXQsRai3hpBptXKE7GdMg4qmNFdy112tLHUSD3odzKiOIiDrO3gBHgCwpoJOzF+ZMpySPkbMT2CkcDNdEOuBg4XkQeRb65ulEOd6AMXA9IQDuaEFvmrAYzcpYS6Ua0lfVFhxT8xL+FwqiGmVL17y2DzoIgRhKa+ahGjy5gO/E8snYdXFj+u53O9jbav8rlBvFBdMxKv9F/7Fm4S6giKsNf1gi5Hso3BpEW5cE7bsaDEQAXX1XnsTEl9jR7qGxKmtn/37kJ2OXNTdHguz1Znt/5boEOAvxUYS3qhGMyULpj3mC/v1sc8JXAPtFNY+Tox5Tt/tJDtFWhkhvsUOmn6zJN+gQbhpsseZVTJy4CcfZ3qEZwHtxhveB05WzE6BocGNunUscUJPn0n/wnu1PESMAl/KYnu8k50Zd6SMPRuzKjWQ8HMUB8mV+0g7aiNAHpVV6kRkj5sWVK3LnGPYz96TqujkVsgN1w2RoiXSHqFLMvuGSVpU01Lc86G1d0nN9jNZr0tf1l4iXvVyf5pIbVDQinaP9WnGQcgXKmsc4NGSXzhVcVxs9yOW0zu7kDPU/d1qSa4YJcRpoGPAJZFb1vrRUdCxeAUf+tpsEfnApJ7/Wf8Y62oP4Wohtzcw3TQ/9N1TGA6DaVZiAFxqYj0N7BZj2b/bb7t1rdcMmjkAIduTjBW6hnDFuvjCVn+Y5N3InxSXwGL735Q69NPVFgHQOPJnun3pzHQ0TzzDxzl0sbavc3qmPytVKPKk8IqR17C0tJeqUw9J30mMkW8iazuTNnRBcyBW+E2mpVbwSU7sry8pA==';const _IH='83fad36ab9f51ca791a00b1208cab5d3016aef09e07f440f552d7445b04112e4';let _src;

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
