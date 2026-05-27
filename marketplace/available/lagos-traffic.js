// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R4b9iotjfmFB2NA4c38pyYXDSedvMm6ESEyuF0OC11lyWcAVavlMLtEqDRlbKMFgWb03asbhN6F7h4mWe3xIsngd021V2A5yCvmP9mCE2bhqTxl8093erppWXDGMjKlKIz7IStQ3erl50jBdxDEsYQ5szdY5+SoDR/cUGHp4OlD+3uAIBCH5HOJgaTm4qL90eiXbQx74uoyXhf6/7G3crfAIPaCBHZk0t9EE8obXib9PZym5YaljTmElkNjqVjWPfsfNFQh294S3814O1BIB2jygon4xbciObMvsIaICRmz024g8HMCxHBmcMaZODhBBOIc/uAMi4TYPh/ndACqSxg/H/WeTlwzzCructBSpfMOUcBSF5NmUGedsKsiC7/9GEuqTwrfgTSlsPcujEiwFZ4TxWWbgg2Z6XOrcY/cUC0UP5DOZToSojqy6AU9upT3ETqHwrtqZEcekd/4CW/DeInLPep4PxhPIdcGKZM/qSwcLHIEfXx4sem6Q+VP4aZN91Pt2ZQS4Iei4p2amN4HZu4TADuJ5e0tlvN/CX7tMH04spSTHRdWo7/4aN2HJBcOvOKFXHnCUYoIVk6Bt7q49KC72QxoZn6N0Aci6M3AqzLOCYQ4iPySmZCJFxuqlTZqlAUiYQsn1c7utWBSg/jGfD+KBwuKG2r7Mb+NmyQ7ZTw8BBtkzWrI4z11lOR/ZrmoCTtDag3v8sn4NCaZ7HxOXRsnTa29x1Mcu+ag0UyGRideeUnKPrjcVO/r6PI/YH0l/eTanb/MgTofNTI/rkUBeHJxkv6D+LLK/yU3gsWS9w5gWnXQ7e9BRc9/LibB6853sj0XzIEv81Lnvny0IQa3X7I/pBS7Kga8mHuZeVC1fphMspqBZY0G+GbYOWwu7i4/Xm8FqrM6t6AsWElSStioI/bCMWG/FiINwVLPR0baUc7tBX7qyXWYqCGuv0RMo2NTvB+N5LAjuLnX75Vqh6CesbFrK0hzoSHXMMpLuUPVNsVGFXDDHhUje1+kZMjxDuKDOp1bs2VUunTXC/WrtFaagAJHEY2pkJTo3e7snv0a8Y82o3TGX2+HWq7kIg8JRLL6OsuaWwJQXU01QNV4d/iuPmMQRgh+BgftUI6Nmcvhz+2Nba2z/EfenBtphhBQFB05FLQJThTKuWyAsiLvPIuO9XNvKKmpKgBlSYhcza+jteW4x8W7BfCvcBuUJAt1aT0NkQ1D2ZIWZoICfQPaz3nLkLJNysV6BFZBVlFoynCfFEYFguZlUWONISA6LNhXyOm4UG9H1cuYpihxG45ghhLpmTPxCo9OGZFXhySDH36UHoG40cYzw4XfyhGZxr/2RWmhGA75ZQRn4nCjFmPY0RDbvvzqpc42TJYptZAERKo5SuLAP6wt3PpnGPYnqU1BjQ3QTC/kGaMJJgHNQ5PYtDl1aEKcnc4/giRcb06py1S3ay7TrzDniHw1/J68JtdAuImwwLKtOhbcFWh/Xt8kBzDhWcSiOZX+BJaGe8aSjeuTaDy6ATHlPi/5MQJRP7VLEP0q0MrnZ2f+mnCU2evWDYLl3cKnBsE+YmMzyLz6oY+NWvMWmWWrzQYlTUAIvWhiQWHFH1CatKA8bXbHFwvkmqflVF/C64e1M7WjmHllcQZla7H0pNsPjTNjbYwM73s0vamFAGzYfM7R86c9KCy6wiNDc7lSruhE7SjizkNDaocAA3yujLlS89w==';const _IH='bf29a102abd5533f62de6df96598616a385d701e19baf373f7592ca4f9d2f5a7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
