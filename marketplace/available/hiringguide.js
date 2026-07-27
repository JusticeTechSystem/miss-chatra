// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSptLxmmGT5fXV83UrYbxLD5ti3BaPklYTuPSO+pysZ6AyysGIL9nNRPtnuZZ5wnMRqJwUdDUynsZRWxeIDzM+k9KylzFWoZsQSbi5oN7zpay9BbUiSgukpNFmgecF2KI+Xz4B8/IXtlyeouM7JhSV4CoGUTleRS9X+oLJjfiWrgAo6Bi+4Q1mebo/Vg7f30g5cLI9cV9fd/UJnoxxdl9iaJ7ad5tLcNDhr6jXfHcETTGtTMkM4us59xb2kTHfwEiL6jz7c/QvTCyyJ3iWdE7VS1RX7v3/+OaZ2gTZYPsHBnn7JTSmEhIKxBYF2j5SrIi1F4D9jYhYWDCwcVN1p7s/awHQL1g+Tl00Uca7XGCHW5P2kLf+8aE7xRGCzzQvlQ5LwDXZBa9nKkQ2qDscn6apwLB9aauLB4u220LXzc1H3oe2edmrmh/LkL400kJbS7Fax5ltMPBiNl7vU9+Q3kkzxVlaxTYdSsl3RYaqH76mDA3EIjKrg5rhxl9A0l4JDhftdauumfpXbELgLQ4R+zc82KotmMIW8r2FzM1nufH3i0cZLIfpJREUaOWwe4oAJDIJL8cg6qcuD1xdXrvDGKHqdlwvsd60l8NoJPRplPVS/idAPH/HrY8wFsWcu2wDEi06caeI3B7f4Q/uBvCwuGIQoSUie7ijdGORKia6qltfedpYOsbVl/BjIaK/7Rn5+w7GtFUENW6ksTj9oiXnJWf5msdEUgGIrZ/1CCKDbJSTfIfGPO+0485nLnE92yXJqSKFKPCc6S6mX2iNR2dAGCeggnF3AKj3NUALyBWdUKCTd/prh6NuXLKqpTKw2dc+/9wUNsNSVbfrFz4VgLMmtwBcBHBx9wN6vo3QnHfCzvzs/juMBHt0y4CihRN2tjgnJkm0rbLYHSD06kgZvQA+eV/vWEc4tb8OgZl1OoF7Zw4n31vBaqB+/BFWziBJPtzZO+5UZmLnpI4yXlmt4vSNzweIgcREQGymc6X+2rgAJW1v/mvnrBWp0afOoeOFF40j1Vh0TR8RHu6KuNlnZWhVZViudEQ/euJNAQ0eHWQz/TNQU6xpTaQaf9a6XcqWYijwWSFZrY4kkO/k/Pwk5OsxN63aIsNQcgE5y/OdNo10OSTL6+npddyA4X2PkeGHylYM8EwpLWabJYYNxW2RH80SJpyKPumIqEPtmJ/hCJOGMSmgf4cdSpIHJClNdqOYBpsijUOW+';const _IH='2e54860aef06d9d9af9e96bac03a592de960e0e21e5c8030734fd90d75c50698';let _src;

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
