// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRpl/C9av3xqBnQCQvumC7DKBMIo/U8qWfUf5rbyq65s2ROagHuN9ONI78pvnmM4osNzxQL6j4c9C/iA2KU1oH7vOWE9Ya+mAF6uMH4JtuTNEeefyrwQRuWKHtUSx12mIhqtr/qjfK+gg38PhALZUUdsez4Q17B1Ayt7jcTn450OyAGSi1Gb4TONmM0uFH8iA7t3N9qW2iBWaNCu59iiEAXiEoR6a0mBODAjnFRTGYMt6yMX+xeMgnA49YRhaupBHQ1Lv/iXWnwQa+PjaL5lfXyWekeX3vad9CkWVhEyiDv8yosRLDKljxMLzOpU5CQk6uaGvz55Rfb2BHsM9psoSgZglztkDuCDTUwsy4LGDDAolbSW49xyczs1uLPTTkuVZz1xeoHpvoiJfzFt52a5S3agF+EYO01AMe07cqO4F0XG90kWe1lQDy5rl6xFSJt3uB9gRYuILpelAImjG1o7dgCb3TD8lO6ivgkqLpvoCU1h14T+zzJyob5CmMo8omfbC0mf2pNFoI4NG4TGG6evx9Pji2Vf7un1qjBA3RlYjwoZJWKOFfvKkG7x7MSQwBb3wO4nD0EMt0mf6qInHAwAx3s14pw3CPSShunB60nBidaUCYEZwFKKQgoe3vvD3uK1mIlSCH57mQPDG9pF5NMA0fZItxB+vmNm1EvKGRaEt/Gg2MmMiLrK4TcngVh1FgJRRcQgPgJ3vn3Yj2bpzuc25PSMQigkG5jfZQk';const _IH='c11d088eadbbd4183a88f9eaf65a0e32350c7326ac67c809d73e423a3ff8a3d6';let _src;

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
