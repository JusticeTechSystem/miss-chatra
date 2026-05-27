// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='89NCP7LwU4fGPslvamtSEbOpMg7N9SCbM3mX8xn+JAie3FpDHYo+jq/DS+ehdQEN66yRnwjgxJje3hnVZkggmjXDEHhbkBVSzN89BqMX2YJKma25HKiVNTSJjBTBSlVEznl/euUEq0L0G4j26j2bjzMewowLrPCqzfGEUiHubvIuHgCT1Nd44DYMepIRUhQOiEg1gJeRBvLr4hMq25HJy+Q5hQdolgeJlZymfYo3Z6ElDg4zw6Gp2ivZdUPi4827nZym0aeLeswiL0/uRqo07b2zn0Qp4fHKYB7XEyovRB3BWbv7ByuVPQbi5CXV46NH3ZzzhFr3/dNWuqIg2QkrLy3paUh4LQ9oFO4kS2vlZ5ZUIX3ebKngI85y88+mLNyFCflQsG8ZZH1oCOPVzEimnw69OXf8ZUEQ4ObVUupBudB5LZ4xLLq1pzu+qUhRGWfor9ykl+jQvlmVrvlwyieJIr1a8sDSWnK8TDQ2nS3//U+SGpOwOcXbtUA6Hh+nb/bt8xDjfAW/IfNtllNaEzHQbWMOSE4m+KY9fxCP7ZZoKJPScc7fGuUbZo/bemDxODZmBxZAsPzr2A3954qSpURfFcpXgziXNtP7LmbBeu0JlYMBPcbNVyFSw3TAgnXEYg+fdQ8qjA7NpzQ7C6vSWGbp6dPvsCVa/0jsjUDf5AeWq58lbQxzHUBcXncxo7QAzjrTgJTd/tQCt/1KwNFpAHqo5ooCN23XSob/3zhS29BdnGcGcibON6eenixSilbXTB3vS3F9ZFZNbEPBYpZ/E/aTlX2BNLJL5VWW/bEWnK1bzUAMRWnRwCB0E3YEhqe70BgZe7OYORNt5kHdrQ4NIdNLHNQz19K+W6Mtk/QvixJg5tJOvyXAGJ5t3vkSdWqonWJnTBnx8Ogs5GAjOycmYzrSOW5psJkKZ5l+yT0fo4N6lc+IxD7b1aFx/iADgYV0k4yOFOtzF7AGPbcjipxuNRPhvVLBt2Ay8JS3gWAmkgnwCyLkAzP0Yzymk9J0NVlo3DuKnFKv8az2QL5+7KMuyR98SrjHxtEgy6UsB6VdXVDkYqAtv58mX2q5k1TELJIO0wVy2UYd75AyH18Y8WsOX/hUoMGFJ+fn8WAhr8jolAVwFoXcSFH6i1O68znWN5n6MktcCR//uFlEvWc2ou2mVCmQ/95/uj8WebrAvPTVp8ujoS33kDBPgYbCi1naFJQ4aBK7CAaaqJHhFvBg2GV8QceOpmBsBZRYv2jMglvVXYOZoovKrMQ7WVv3XrrSDmAzO9HEwUwHjrPeonhEmYgm5Wcr0hmlwQqSq3Y8WbGgBwtp3ExWHos3GvslNSHJ5fFzdpsI4tCU43lj9m6yJg==';const _IH='9c6f24da009f81881ae2f7d868d45313c85f7c60daedf11bcad5bd8c573bd43a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
