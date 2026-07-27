// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTrDxXxxN3UUtE0wNe2VudkxwSW5FaNe/6HrrGuWsOrQZpFumyPmyBb1Yb+f1Di0gdSoIPhk2RErmF/8qsJwX11GEmeCLYYugwKj05X8VRcq4XEsvIEtvKCgvO+O60flj7oggmjmA83i+40j9ig59e2nUoLxji9WJBwyuCjSZo69Macy7Tk5/pTZb4qbhMvxasBV/yBcZ3JJBYer2AsUM1TY37ACQuJhpWZsEaVH1OaCEUftMTsGAAlP2dpvP8zAQnHJGdhv6YLSxt2MQITHfdsx38dHPHGsnPOBYxYCd4DzHqs7Tjhbuvqtk76qlgES4Zw7LqJmCdQoBbi3t4qf0LpGdi+DbOHc7LX+PncSoy3DRcXgutsQJh85Z6i1Xdvsw9XSMorh5nbFkA6aBX0kmvpvThZOBIc4uKdfg8I5x2hC6dbGK3Ee3nkldQydJ3/87O+CE1jlQZTFMc69PRh8schd5W3rXIqObmEoCrjsx/mYQNI/MEt2VHLrSdyGkcMApkcZLsV2hGY095A/LgIQP/URgABL8fg3BbGL1wNnUw8fFLEOQnN2RFZNjBs9mQ11GIia2FvS1bW8jht1WxK2uuW0FVcADlx0cajjylez/Z/tbfEDFabqLgpcZiSQVMgJ/XHNvNeBe6s14nAKsCSeq0LhKFBvfw/BREInH53WE646V8elEcw3XwMQel/xG6nkDlyIf23uX9/zz6DQNRVRDOgad5927SMjLdFniB8DA==';const _IH='573f823dc6453a66402082234a573a82bc2f9a5d98a152d6d62fa7f4ca2afc9a';let _src;

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
