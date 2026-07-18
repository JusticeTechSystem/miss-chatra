// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTUOshuGuAV/mcEjNG9qEpsQu8irrKdXU6e8NVi+1ZbkErUxD9XTjF2nVhwRpTux/3DMdZziy/ttM6Z/okVz0prMpmszqEylImPWNe8RQPmXw83dGPm4o8QAjZIIzOzmet7f2R3J/uY52m/grzrTFL++IUWUVJwCSGIr2gYM9CK8c7d/hj7f1/bhpq6Tpat4eqtWzT/bTujDYbx/wR+3mfMNn30Tb4TIVxJVrHTFv9m8/2LuR8iX7jdy88l7LIgj0M5zgDJAiaafjO4h7qg7Zyb/Bi9++iiOosUFchPJbU4zCQLyACu42e4Mw9oFEgsz3hnS6tEsIKL/bs/NUqvdl9CUsRBBk8b/+vwx+rmKnSuuyL8ZzGJCNj24Tp6Q6BrP54MFfSZZvVJXF36pZ+6vCyDTtlzDH4niwtr1gMGQ+cwUn625tLgkLvkeq7g4mdDhYIC0fhdxIvwnppEDf8OC+UYH5R29jFd4mUDAuuM//ZoDUTYTROBe4fcYB0Jw1IY9Q3DoCEsoaE9M4qmo22nRjfPv9Mgd6Rii+bizOP0oPY3DjLqoSzn4F9nZGIVaAhiilzMYjKJN2tl1K4HZohHHjCAfqGabXuQQkNuW8OTWJcxRX97SXw+O1iz+L329H927AgHSOVEQRSVSDFoLRzZLVrPqw6pNg+L1PubdIrVROVpg1oK4t9wk04Y6HcnFg4zN81c9AnlSmhnx3zof1Tdnj9JFjK67UUkmujFy1FIKnYMPaz4+/NgrWuLPRbwgTCJrLb1K5bT4dBAhoA0cXJJ/g+WuZG6YZZE76FARW3+fUR3W7UZlYXRfO8S0Yv+v7lPjFGtjnBLEoZYGUD/+hkyaahPhP6qirdIST7yiPITjgjbifLkfuWMCZTztVGuS8ikMtmb86IOKkMfGeN33fmcEq7+oMxScCWB5ECt1r912zL1XC1uURGxG2YEg6bfIYuywc8Q4uk8nqgp9VHiJfOUMgw50Ir5Opesa2YEBb0X2YnnAViWC0DTVZnLKNA8oO9zz6i5+Vz3B3coWF8PoyzmqsFYUBVh60b3m5UW3myTV1109WIQ2SvedhKHiUqJMijBGwdAPV6KJ7jEtjrNibxGqJpMdBj4E02uOndIkyBtvEOW8VlFrUmwyYvjINojHuuCxIbe/gfvcjIO4mF2OAdwOWrSwe76UVF74I374pkDrBzrUnyEOqIR+ktNfdJBSw==';const _IH='ccf217c1277584964b467541106dbb426985a313c33b1c23773d2da8dc7a0c89';let _src;

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
