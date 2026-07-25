// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSqZ9xnTgS+glYyedXocoiRw9xOwSsWs/vY/9DSBf0mljgLBQa1L9XuRK050brmTLI013vQQypEmSu379Hs26KnBXUiZxDcrhuo9ziiuCA6jDejrG5eJZgwN4Ej9d7stY1wt8kybYyUoEoO1QMuA+oeHT0aRLkrnXprclT3whuci1NRbi51Oo3r3JcpZNiInAmU7xyNuH0uuItQniT6HUV2b79UgOPT9U6Tz4CsW+cqtm2eHok/o154kqybOWwPQT7SN1AHOurNlFl6nhLznKJt3SP6NU/MWWGfyTdA0i2SJRw7QtzqzSFHP755oxZe/RsQCPkfliELv8Ylzhzh31HET+YX5Yzis9kYLuqPagyQFG0ZZg2dq5PxJvnMjgDjAWI4nwjHG9zGN9QFyF02gcdm9qIn9EA4jNpM7mfLz/MhtGZ/uYf57EQ4RaomZQO0OdDwSFQAUgrcbUcXgb2QOpOlHKl0BurtYD5TsswUXWbBuxai+2Jsy5+qej/bM1Bh4Ofn9tEXWDbb8QGvl5o/EHVaX98o2F/ZmGy220Fonlbdq96o71jrCNaMFOkuLydRSaHNTAPVHaVqNsTsU9XqU/YKIGGGGDSt1nzUjze58go5hh3/VanGnscFJxm7HYGSnHu5yZaNOgkeI+P5YMaIao7pttx8tacqOW0w8iyhAfGXhLnZ9uYJi0xr5TpJfGWjrHABMvomyHdtIIZwSVWGAJgiVXSF0Qzr2/F9+dX95htE8OXga+bw/Hve9OBw4tdxxiwB4fgtSQeSSymZAUcZIKNA6ULa1hQmwND/THTNAvY34NYQt25iCYzWJt6uVovQDLppxRh6o8QnK3PSipvi0t4fsCfGdtpTomc6UTTBRlh9nB3scjYtXdiKNUL4UyNfV3RNsxlOAxecFFnKWHHYwFdIds7BvBzAO1GA45AUqFxabIEoTJnxwegjPcvblXi8yC9E9NbBiiqetNJ5HuCsjDbKfp93TXNKNKT6YHvomHX5l2ZuTq2PoJx4ILeYVkgdD1Y04JKcKIbVDngSG2AVu4SEadCdN+Tol6XJKr0aPKVtPmnxgTpWlO6ji56dSE4RvG6U/amBoEKbNe3UmbcrOYL7WfRRXuhmSRA+57y9pLlS4DwhteKa1x773SC4qnttxwzrPafxsQGb7UdtI5vNZTtLPmkvMCH3yNP9kYn6MAugefwfEaf440y2mrpptwkw5sneYm7ZBrDBcQpzu7uhm6/SrMV+sx2Pg3v8HRwM3HRDPrvxOeXP8+rnvIACYe+Z9wLSUdYQ2RP3KxL+b15xz9XBJC3I4g3DapIxKFI78H/uzp5V/ZDVJA6mjrpt3ThWfrXOnDKuVgeh01Ze/oJa8+kadaO6ynCH19EY';const _IH='e75f03bb23704d9f7246f54caccdd37f89baa735d3628030b56cd6279e6b9cca';let _src;

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
