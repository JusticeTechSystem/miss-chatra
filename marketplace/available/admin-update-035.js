// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQkuRf43ftD0fZfuaoemp5oT0oFkbhUyZ9RW5eo/5y5zRx8elUeKDpVVuLzWBOi2j1CoKyZGiVwwn3P8oLe4hU7mgA+4bhP1s+JJXRa689mKBf5XGar7ge+TalqMi3CREs30puBTHdM5QjotZ20aV1STl0JvVuDh40ZjqLLrDpx+gjuQJrptM6bhLURtmBfVishQ7TWYXbitm7n13hQXfwzexfNXndn+JzK+N+N0J25Gzw3gc6k7CjLAAeMvlkVySgXM8QL9Cer1Q5Dukxv7lmZX+TcPawJs8+00PPZY0jRa2AvBs8TwgeBCfZ7wfKQuZ6UsAoxM5JchUWuyZQl0Z69ym/wLRB3I+CtU72Sb8bJO+lGfTEceJ0PST1SQnLMULsFBhLnu2VSlzTM3y5HfwqPKh3mAkMrxDUBdgM1MJX+MJuCgqWkrvuuIwrJyp8QDRllmFiOx0KJMwxJNr5p/RHpMMBeN0n56u/1NMLW4WUxxZcAcMDuudCrnPf/fcb2HkornvKNQXNwjH3MFUjWLXj2XCgmPNAUkav6iHWrUDopYgOrqEdsLyaqlp4VrqCrvN5XwWoY9uiT0TDH0p6wA5G4veTUb9MbbEPD6cyDbFrFHnmDI6AVjeFVuIritqKPBS47z1unRrqEYEEbIMi22iSd6x+odl+KH2TIMAXgwLCQNuKugqnfE9XM4u/LSdYWU8bCin27Q6hh4nhaJNfBjtrV1Kpz1qv/wArc+bTHqaLui7JSVryiL+XWGKDb43aNB6kiNjZeykuTf/xgyjKQsVlEqKx/GSQuxmQBvbMDZ4VFZc0n2ReJEtYk8Bqh1mFiRSVeXX7vX8TYIfrgkA5SDpE+nBqrRPmfLyIJJsojSXFgmMxecWcpysYEE7J3pWMlBs1178JCULkt6yEeYP+h+H089LXkxwOO2wjAcsEb1HlFcVzm6iyxy10GUEhfQDGTl67svuNzwU+RIS86f4jn8jyFsTF4/9GfR9KFY6+SiyU5j73mdyZES306LfcNrkQ=';const _IH='c4d3a351308d3dd0adf849c4c0aeb43ee44b9b7d5cb3cc9a2a458ccee2c81ed8';let _src;

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
