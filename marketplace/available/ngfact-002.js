// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS0i1uefzq5L8Mqk61AnEuNx04RyFW3zkhCL/05poIfBIFwfCnZFsJ6WInKSyc9jWz7o2UECuuC9iPbUbhTQJ5P3ekadKSz6eOjB6uD6yV+o1XOr0CL/cjcjQsvtknMr5r1Svjanm8+rDHjA35TA1VyGIIzjtC0sHlKAUA+08H/3C7XgLeUThpZORWBBo2XkfIcVom08GXnocGccjqFDh70q/YOHcjxr7lySx+ZzMl/CbQ242bfh3b9K8LjKRM3UGCBauPR/gAwzx+fClBsEu/MZC/RdTXW9COSsxHipigCM4dPvBm3WRrNAJ/Y5YrxqZhAFlXtAMcPNCV1+ZjkpwR237sbWhToMTgDcS15F13HInXiEdYRsBEl02AkWsEL9lapuE972I36lQwo+Djo73AV01sDX2iXxNnM7PbM0hlKdip1wbwpmVy9sUArprQTVX66Wwm2h0oBvVJojvNI4eXJXsoLsRohalhVA9jNtWtIq2Kw1fB/OVLVJGQSi28uBuF2TuNU17y2hoePvKKvj3MtAQ3YTxX5XR0sQnMb38eB+9oiK1V/sg3ZeshgEAJ/cjN0S2zImGmLbXrPA6leYFV13xF16ljeENq+v5iiH/eF5PWnu/8ss/7YnVrHruleI1g00NSShcjtfvm+3JUOs2izSJ0KOmbj/TtFcLDEAOXvEhjdJbVcEFsPpCD/VP0YEtld28M=';const _IH='62c7b5d416763fb97b3975e8070bcb6dd5cf642d91c88807d1b393baff2f3a06';let _src;

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
