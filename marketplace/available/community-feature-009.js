// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eHaLrgvAOF+tr6T1EKGbfcSENafr1MpXO8dRKizDjpWORycqihG1ckUw+ge3bGjazhdkq95K8+LkZQ7oQGbhHuaShTTYDQL1sofFz55qotooi+dSItpVfoKN824mgyHLXsgdvhj0zF7vWp0+SaZ8Uhxrhk9CrN9w+uNkXAD3VWZTuvRk0Qs7JUckoEtGrZeAzLIJXbEFK+tYKCq/xHpR7p4xKGabTwuD4Xy2MMt9aidqVgVpD76HWafGlRHzQ8hmRkbcTyir3oVRzNVMstMeyN2q/RNpIPh5Mh0/324A7W9nNP61eAgGeIhimtYP2tUzsjmHqZTRK6U+RqVGDgQPQLzsyxAf2g68VqjYW+Tk/WmCdU6898zFyIsdWMAaBMSE5GTM7CXKAvW5TfJyWczsxlLRuFhxbMv2V4uKdlrs70hQRqH2t2+8JgkGWnp+e7Rj5n7uZxMlvk/7w2MDSx6ATBaXLRS0+R5J88SCQ8K5CwnlJG0KOSk59jBUvyAqcMa9Avj63XC7BDcwSA5iJO197E5sQKxkXD60KStGD+oMuNs4Ka1lZEXGLxLGswA8TwvLStGPMA3HC0EV6wgogrHeiw5y23OmhRPUMvU1NlPHUW2Ndn8R3P/yBweQlzzZSYx/8+m5pBJPQIhzXVBleYZik7Pi36fjQlRie9btlBTOtrRKDEzXqaV4cmAcCmxEU94ikEyFKGgw0nNOgla6MbtSTiOtFg1719qgr7RgJ1zKUA==';const _IH='55dc45eec831f25ac8a13ceba896b646a7919dc8eea0c223cb133a43a0a74bd9';let _src;

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
