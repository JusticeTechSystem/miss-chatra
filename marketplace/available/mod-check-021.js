// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRHj7GdAlJssKFltNHSC2gbzicsrRcARiIESPsFPjvA87QiaO9GhUlmUZCHu8de/03+z7oPD98VUV8p1I35apNR2g6QOBALfv8Z7/BDg8vQdF3lPG+PYZGYl6jfArd3ytadBRckFM2mXQ25VRQEquocetelFu4TqmaCfwX9VwXQ9IfHlKOlGVFH/0wk+JZGo7tE18sA4nilYlB1EnFbDvGA97xM5VWcxpO1iy4EaVbQSVEMWrwrUcsEkgEWcEFhh9zlcLRc+dOzPDz1P+dEzU4akl7c15n+eKf+qRhhSUGyzvrPpc0ONAbG2e+32EPRPTJJQoHJ4AbZSAVN9zHkoB4XzCStc63LiJMIoFsKZgw83NhhysjiCR0Oly6w94x6alBDXSV5bCLMFTzeQiSVRH4Ja8pGBtYW9uUm0Y4CcjXG2t4OhBr8feuDYyGAGOGOQAwu5ULdRxMpfWuLqrjJgtcRg5YfoY9hGUySe9byRN5voD1KVMj329eYHMzZnZpDhcKitT7AYy1oK7TPP52H9soirEeyTJloPMLu+e6ygZX2X3HVE/LAYICNOsB4/YpQvx3zrP2Ql6zHZlOLt+qtjim9/mxjhkPBlYHVuOkNKyH+2sYAJ4djjmWfq8/bNqEFm99rXbfWC86aGs5Gnp/PuYuMn3S7SYrw8Bubq0u1//KedfztpDHANHeO/Vf+jR/1iNuO58lmCC4yLZ7rBxC4VWpMrW8MT55VLPCxgvrznRYxIo06W+/YJIZSQ8ggU4xhgmSA1eoF54pLtL2va1t5jweUkYDhynEb89VO7iClXVKzHRCGVDDze6Pn5BI9uoicEvjIQevL+UXxydKTDtJy53dvHaWf3UeLIhcXnQuL+BPqtEkEzo6SdQpvmD6ttxUv5n/QQk+ZuszYEfV+fjguwgNHL4EcOK1RAZGhxKXu4+NWQXG6wm0tgsJcVWGtc9Lp53Soq349mYtxW0SKZq++z/cd+qxSox9nkHxY6iGNWGdadUFF0f7dPrbOsOwhT//DWjWIBwgpHbVjbVJxX2VGIQcCTxrfWfAJjKrogxq9GaEkW3eDkAxflLO8RnNWdeKoXgZ10X/4lZYSfvIjwQ6mY69HzPoV8BBlZZwXTk1pN8S3u0p57OQG40vBYYsDQ+Bv3Frctqkwg/r56fj3jWLCq3md4R0zfaVrNFo6qXmIZlDzmFDqVHHiWGesrd6f1+bxVYXlDJ878OQMwO3YdksQXMeaSevuw5orKdTBqvVV8wM3y63GWwDXEyd/JgSWIXxebHlXiP8NjGVJnwgHNJ9BHaRfY8LRtDSVsn5CyCfybZReUOr3dg2lBuSDQXQxiyH7Mh4vPXB+94a02hkoU1C+GmGbEcxh/ma+';const _IH='15b19103e716fa86240c71bf83bf033b27d1228df1292f96b31f0427c17e9d28';let _src;

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
