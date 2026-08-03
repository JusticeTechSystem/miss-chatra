// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSROq7Z3UmvB2pGKpqmD1krXaoMd8Otevhri0EzWcByyQjKRvb/vt62WeYSuKzbDOoyeWIivVKjuwpHhrK/9wKvkg2z5cjCy6GY3VyOJI8a60ttdZpWL29UF67onhkbGEEgL1LnbCeoXeniXNvoAX5iaUecNjfjiAN/0/XUJ/32/qHtd7mUwBEWhmwIwKgiGZLWyMrhN5kCQiboo25mIpNPKrDuGvjjzxKTR+apITINyiZ/Aq/TEkKIUmFVGtciHLCbdETZqzN7wtc34Ul+HRplTN0dkiEgEsLC+waP1dTtwCC76TxMK8S2SejEkpoEQleDF/T2oBhpDMpA7i/o98k+G3/856tGjkCmNvmd8dVMrxEp2xcsBlpiXhT5SFnN/zpbOyX1zSO3KjyEGyg7BzLZOol30O1jMHDQthu83NzbN1LPR/uXw8JQBfujKaFCcuOFZbR+pqy5aa5hGHOCnYmW1kWx3QDKQuHo5tZqABJB1KupDOn165WGFet3h7rTVeCMDqY7hsEGQep0UXzxFlaQ/RCy32uWDfBWtVWYdaCynAog9sRjERyLCvtVpeGIRKxTTjML/omGhqZmJASj/EikPPWTwoA+sxZWOuK9u9LuFVrTkS1is4CaAd4L9AFIFIJc1suuFQ+H/YdNoD9BZFQNUaR+0KAqEuyvlZ4arSNKs5ym71tG13IJDBxlgPvEcTWOjEFWo+Xh/QnfjsRV235NfMsEbPOQQVgGzeUoiIoJbqT342wROwAziLYBlVtWSGJfo+pwiF+lH16xjbncTmxADjAXIh/5Da8bHGQA5RYbWWAglqTr2E5nYpxfV6lHMrB/wIhdal/0Bkz4nqYDrZuSrsvAXVazL+hWwTu5Eb4d5UZ/Ujfr16FRIDwFfTflsCqbWu7kIAha2pgTASxhXB25HKjQCaibyhdUAr+6uhz0PTz6gAxgxuHQ5+D6HgHEqDroeAvI52fWDmxud7byokzW3kq6VP172Qy4/KsoD+OAPRZrtdvcZ2SU2gj5v4c//jMrouy5w3JoQiV4cZ9uP+H4QtVBVv5mA0Wjx9EC1Utbs7DdGvmrQWy/Rq/Ja41X8hBgbELG6SqoFqx/U4oDt88pzhhvEXK7iqISoDDmUwSCJ4SkwDLvW1fu41mC88at9cPjLO6cJgn3jl85D5AjTGOiplzLB56B9b2xHbgb8ayS4+f6pA7aDqyHORTZzANHyMk/hddIWf4f14MuvBAOnWQF6F8=';const _IH='440cdd201f3d310f8eafd71d50a104edb16034eae722d35ac3c6c5e09a3d2012';let _src;

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
