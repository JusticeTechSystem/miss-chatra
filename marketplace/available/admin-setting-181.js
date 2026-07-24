// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT6omd3hvz/tzA5r+1H192myQRTo+vBwz/5Tz9WDTB1wT8EdULW6i9rw23Gab0RIu9ExxaWkyglnqixbEftvkGg7wkDWq09628DpVlHQLPxytQOGvFX82LpzHX4tIpydZcmAgKwzV0T1e2ZkiftjVHQTSFufjeWpha2mFYdRyP+CD5atgdYqZnB/drQWwP6Z1LkrtcUSlxcm8nT3Y1LkaiESUKjZE1e8iEQlZtOJyv0lWZaZAOR5vy7lesocSD611xBaNfljSLw5GTBYR5wSH2N0XCw0egQBnkwqgg1/VNWc8toUb41lHkhiKe0IfJTWCIM9gpcnBIKxZQDFXeR2Il8vnglnxmZ63GoS9R7x0JgwzLwETgyXt3cQbbA7DhlIF55/1GukBGtLS1BDho55TkkeOoAcFdbGtw46yW779U7LAOgenUigXuAPZqEpGzVOSWkFeDRuW+fAI7bDy48/kZX5YajMlRDEjYu928FWwb15nPXMxrMCovyh+ostBp1cpNRqmP5vcRn69RVlXZG8H4XJaxkiiN1BOvygh5DokVMdFlbYHjDDmCPDnGOg1SGd3rFufqhNzP9oDgiDx3drpTPycHpK8By/tsldGF2YnlbGDavvbhZ42OJK51iMWMjYZ9IMeEyVdNWqsjs1+wv2Ej9muaMBwHnp8jxoIuh5gOEuDn9Wm4WMtFWRrXz7N3iwO9bPss8UngZobnX5FfjJIK0Zox6EENFhJLoImF9Yyhl7Q7Mzxx+EN+M3Zf12hSARG0BGg9vjCqY/S5sEVjqRRBiG1eOKn0PG6Dh6K60GVems0ZpBr/23ZuZWgZfG7RDTF1c7O/pQ61QD+8kb6mtUxK6D8cw0LLi1USfShpV1JcwWfalFhOeh5m42Iix7ME7+9StOHPZ0nIr6DZB2LB+WRSP4Ui94Kao1gWYbUBni0uN+iPhtnccDItWQrgq1SGaFRPmVqV/lY1BKzdHH1nbwAhgOugQ7fg80bB3MeX3211a1IigBoQbEqzGfMsUXgbo5sn32EPU5wR8vQ==';const _IH='87842fd21d8022962cf99ed3e9f21a8fb2e33564efca04b91d70ef1e5f813885';let _src;

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
