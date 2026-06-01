// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:46 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwBvPNoTUqLwBiAduKmzj5I2zyX8ldLmVf4wNCJiLkiqiNaSsYJ90pKxHxBGhxqLxdVuTJ8xaJLAUP00gz7kCYzFjHSY0eRAY2GjR/x7ZAh0+uHo22e/ESPlShmzs8qwzpzapDpjqFAe6dwobjngtQ++poIUdysiIg3X4Oc+o1EXj+ztCqZfJ0R3knB8DzKil5H2lWolD+J+n71M8JziGTFj1YVco/iK8h9SHdueTPUP1zAWCM8oj7juJPcgJz9pDNODOpdoPb6iq824488HZ91pJphAznK+IDIad+toEGKPRY6cdmsl1uEW9Dv2C1VjFuSW/5eIxWZXpxW/eOxMzOWc1XkTAjeTfRpeFIEgpGVYvR51j0Ex8I61oYllLJdId2OjYlfUZFZvMav/V/qNxUK5kv7F5DNyDNXbB2o0+SnbqpwsXMM0f9UX1aszXMOD9HeHM/saauqH1gOu+EUVyAy2AZjL7xlJGrtEfi4Nrh/BqfBksHqAkbExOfHBSINX3k1aBbXYpu72a+qMklZpZxQRnt6NrOPP0oLiJgzRz7gmXKRUqWdOZupa6zUC3lvwKLQbbenJVxWwd4I77cM75z+qDOxEYnDaFVZDwfyCiXVDbWft3QsR1GKPVOS2zwDhp2mv7YxmSnqKY6pwEBWohXcUCfRhJToN/Zk0g953NiRx7+F0H032FpInTDHvr3Awjf7k+kw6WfQQwriPQNZElEGNpj8r50YZ2Vq31noP2qpOx9uR7ABchFeJQe0jdJpFzCcLiDl8ROB19jKYJ01sui3/xdTCteJ5xAuybs66TKI719mnBpdTS33HjuQwBemjZfHI9GDA478jGnOZMO60fjm2hTBW8J1A2JAZ6w+MtvSb9Ux14J23gcR3jpDfX53cB3Za9U3voelsvdqeA0CtlZBMpbI7xzjUb5OtCAOHH4rqyr8djHVz+hkpRftn5vNTy1AKmqxbvkEzfEQkjyxZadmZW26fgryvs2/16wqxfqIBztNTOcClNeWxpCIltiFfjzucyENg6x8liGJAfT2yIykfVkUOhoUlnzqjLjZJ+2eIJUjSmsDHtZfXOHA0KJZD5P/OS4sbxi2rVjQeO2bfn/9Fsdq+FY5kR8TNGgXzCN6nGcLor6hrAuOsIe6mp6UL27+w9pZehq8VMGdjUjH2NHruEij+gaLMB55lEk7HjudcpvXFla8Q41JVG8Oxn9KvBA==';const _IH='eab7437910df8d0280f16714df9499d3f07f9bdd7311cc71e5604df38d7f11df';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
