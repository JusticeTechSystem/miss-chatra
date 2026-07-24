// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQgyLgTuGwSS5PzhIG4qi5THFB/B/omTVtLqzfp1KU6ecUJJHiaU432JMYCywSj7VHSsTwVi1gc7s8xuzaoJzD5USE9HFERpZMlRM5lM2HpGS1H/zaxznkOUblUFnnUEV6phnE50ywEjixl4xnNlum/Ghhg78OJ7CRZfXjLyZN0kvXrBEN9lljt0qkioJIl1ZFrDJFnDHMuZD1fDA/ZMaqFLL1p0K1JkImZH0ZqZVugHQ9rSYmWp3ibVAsARIGe0Sg1cHfRFmLY59xMqm2YwwyO+KBILuXAV0DpAWJSY/9P+ItrIbPJG6QwVdcpButrbHlGhkbUmVdH7veMn1YGkhQVBz9aIR6tyczW4E8cTBiwxZ6INdAank7u+XSiYS09qfWgaqSmJXCiIL4aH3NXql07MrQRQiboIZCR0d5Mhuke3p7QHZS05tU9Uoyqg8EanHlTwEwo6jqJG1fLpChnhnlrEGySeTuppagfsSsiLFThjro5LoE4etI/0H8SV5jk9j9bLtA5gZt4KUS2QXozD4DIaulPeZ9Ha1FTmdyFZDsH4JameAowbsIEW47bAb0lB+5dzHpF9lKJtkNgfaVR64fwSuSqUQ1Kd5lqyEKQz+FlaPM/YSobW7eRJR6kN0BfcOINk87Nw2HT1Sstr4C4HMAITF+y0ZopNHHts+5m4WLXoqPEbhqIulDP7fDwTjHqwyDbgSoJnwEl82BMx4BDrxLnKsvAnQL+ypm2MCVZaA==';const _IH='7b067e8c9fda78e6f3747313450e61ef4432d44641ab2460c9f40bb5199419d3';let _src;

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
