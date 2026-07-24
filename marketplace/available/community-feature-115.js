// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSS6uP8J99P29zp/10pUS0iXSmTYJ9kwkozjxHBBurwzFaqi4t7BrOf05JGtbX2BkWWs+1KSv4yuqkmjDU2RLJChmi0DmgyHOjFlZTSCN2eJZN4xW7z0+LMKsoUZj6SId3M+1T7mk9zYcxe1YmppZH1vaa/nAErpHr/N6IVBzA9MueegIra5bC5X6y/4zvOjoyxJuNZwHhvKOqkp0nd49lrZC2EwIgmQsX+7HluUCILBXBZ38TWd7XArhRYFrMMggdzYiFDN5ilkzng5+walhO/oSsNN3KMcT0ScYIlihkgVomyO2aO4IJfVvrs1XSYjOPHCne3Rj7ABsvg0qeqxLBhVC1IBotrndsKwO3U7JgUjjnofTK1TLBoqhSWfFkmSeVqmrc2JoVstHFCwdZrdRRM4tfRKLjoOTT6T8FF69ua4/1672wpDh5TK2rpDlPY9tcp2ejpAYyG4cj5cPU3kgisZxyrW2bIQOxV+cJ3Y8hD2LtYGiQj/yT2/OtFGbT52k4lMmKlZfmDt8Ezx4Sbtx/cdFwtDAVqD7VJdqDfOB1Obscblm6p7bAEXa0bdLoyYB82EOXQBuv/jUtVXL1YOiXh2sgrr1ePWX6XLrb3JFFUJQGt8w2kQRcApWFzkBaMNrYutF7fk2ojKZ7IRTlcRthbjn3nznAnbvkp3qF0cv9WGobos/QQ1Nw2MkRnqXiYPyPBzojCn6u0fVGa76lpHlFLMaw471BxhAEOqlHxCVwsanOQJ/pFLYBKBoA=';const _IH='69749b1857e92b6f379b7062187acf8c8144189dd9a5b60e349620c1da30ed5a';let _src;

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
