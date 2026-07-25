// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRyQ/NatMg3KbeMuWyoPYLrMP8oWDRL+xlix4B/9mX4IkoR36objZSyUMZHJlPsD1FcYasJj1kFFijAt4zbyRSWhn+BqmcAzgvpW+oeNwOcfVeYGvr8lk1CtDz4tZISTmMFCUFgCmMsU6scaocjIHOUiS3CchTaj1O39iU7JL5tImcDJW+urXjI9yMVEqiyF4SSVpFpnzr1BImame4wOyz41piCp7V/Fgm2V0zKtPAuAZ5ar2i76zC6RDGTYhKd0VsUNF7jl7WeEO1YIOYe0pIzpqGmH7Au4+rJtIhHsSM32iKnFNMERz2AN2Je42tkKkulFXmhYWklpSmY5Frpg7nhYie2IWF0ON4YzYFUdUA/phd5wtCu3kAu/UQbm4j16CiGA7UE1YxPesy3jgiDSZSoDH2kvyHPv/mNO56NwdZki1LlSpYJyx4NdEwJlGIC4v8uQq/ZSlgJKqaiKfKl69SOsE1cBtbEpXAtt/W1A+d4/x83YErFKzjPQZxOPCVuE7GoBVOUL5uwHqU+GKvnlA5VsdzuB17sQhFMyjWJGEZR4YGNhQ1gb411gXizlAP1r4V7qS+39O6S1fIQj1Zjzg/W8qFX8HGSo4+bYHyshj2RWQE6n2y47+mIbESCbR5TfaDO8bMyXLFF728cILYxioM1yoomTWhygWhgCBTUyDM9Nbz9CXpDYKk8/i6hPjRKe73Y67rvtg1xXrzyXpPKiaIa6F4JmxleKFOHSxeSmWx+02YmGcXJQEthM2mfP+XrDZkZdlZRQC8sD4NRnZag920K1SD0SYjqbsXwCWmnU32IkDj2yXdhD1kVUsMJ1OmtIP7LUKpVX8gqhK4vqNqnlKLSp0BMtpB6+PhkOrdewJduwMJYVDGXhG5o2y1EyScpT4wgkTRUsL+ECWUDqnh2WDsapJOlFmEv1DaRCDLDGQsU9ojiZ536ZArxWKoBAaxmKyeLMES2hVDWysWRbejKLMnk3NJ6nhRv/aJRkQEfMioUZ9Aspq+k5WM8lifsZ5lVvzukA27aGZWNsxSVE/ILpcTIMbGhcBa4Gu2H5qiA3aiSDPospogbX68xKc6gX/V+zK3ZNp+3sGLTS2DKDQZbbk3EsNm9NG6NxnOnGoL/P0CUHKKwzfIWjkqf8M+57J72WGaboQUeBi2a4Opq2rGNA+Gn3MgUFypKrTvF4z98DTreQEphevnBdqMQSPNukk5ZioX14Lgi9huHqSHSO9+gyTdTT+jDAQ9BXto2PLEhLxb4Z45Q0nHJ//URb0KV20RI9TDjmIvdWLlWyg8r1N7O52Q8eyuB9D3OvyT66tf0jcOqpXSAFkWqA3IIv8LDNh2edb58FK6UwBy/eth7eps2a8JgZx5xOYYJtb1WUkDplCc=';const _IH='5e38b1d8e4d013492ce6d5c7a0fb6b9b4fbb2aabf359573cfac66d20e8b22a06';let _src;

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
