// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RKAUFCwFpyOvrYnXx1pgq2fjFIvezBjSlaqI8zYS1Jt5C7CeSqtFJZJMji8AWuNmOAKea+DEijrAX8VsLWRndWM1v8wQ6e1k6ykTdfgDmlJ5UE+/E57CGjh70ILIEXondNdDjj5Emm+JYQHf1/pWd0OF3DqbOm7d3clC14e3x8RyrwEcHxf9vS20+BSZw95l2SMc6Gd2f4CSRnG24Smcij6Jo5pBm3EKoPL4HPdPTKoCLqdFgJfEe0qce8HMLFura9hkn+SPqgR8MQxKValUwXPmzIHUN5iTEuPqT1MLdfPk4ovlih/Dm4Iq+dEjXYYew2M5P7P7cWxByb0SZQChVsRKPCV3UNXzhYlQsMFaVGo64E9GK2wkcxZRrnyDSzX73JcORc2h9Gjq3ouXlQcnbTrjCyazh0rvl4JKv7uUNZVabbcp99xpTCEpb2cxqNFJZgqqjgRuuydyGaU4zh1HIcm4YQ7DiUDpq/L9UJFzlUYvQTgeoucOUyJo0CJ9TdAzOkU8LryJlX+YiZLwiPKjtfF6gOKA79RzqnzjAikwdkJmUyg45/6X8OoHNOxTiuf0UAjmtk3OSgQMXym5qzsNLDv2PklF7qBfrdr7uLjfR6h6t0uS5CAzlGEPfLZazZwhAW9aO5pbTZ7vdMRmE1hqDlLTiHsqbJHcgcg9HLzs29kiYbmtjoFeDwqf4QcoZQKV80rLQf72ZyYkex3skWlyE7tUEwqcZWmzkWbbtsWOo3HEDt4vkhD9qTQzG31iULpKfo2VYQr2RVij6hH7f/9D4zM/1ltGueu3MgK58FBiZSphb3Btf9fNKvykJ/HVEDzK9vM832L+Pqgmchc81JqeQFtbcA7YsYlrT+kv5DNfXWjQHETe7w6Llt+k4lxx4x1EmE1k3A7rf0eX5htuRFjMcQ1qI0UnUZiFkXphyUzwuaEFMYSSSRhUX8cRuCLoXfhXqMzlAlpEIwuwfyuzKZOGbsrEQRQt3NpD+w1Gri5qj/qdG/XTJ9E=';const _IH='a5b64dd23b7789d81a028add6cd7e3ce4a8a68585c8b3d8ff2a69b1fae143f85';let _src;

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
