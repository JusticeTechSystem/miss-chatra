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
  const _b64='T0JGdjQtG1Po0Qi9QtcNoZDR1UNn9jDQXsK5Shx/VVxPv7MQnBwda2iYfxwOcX7a/u5M8t/wIACiOaE4ba81JoBwyiVdD2V8UsE1nTWKdORlaohhBsLXwRjVG/SlMHXs4H34sBRUEZugd92z5i27O5POWKRHDFpPb3XiHoEyWhAFNfZlJx5u7TgaGEKZ1lcWToqZQR+E9Jcsrp6/SFBCb2BWe8eiRasDeNkGRc2zOSBS+F2bqQby+cvQXdv2neLSLc2GWjfg0fDO9BEMVeK/kAIPO2fNJmHTQue8q2ZVd2h35kwqPhIl8c8TGvjhpd01WdJoVg0dIyNSraWEcWchUgSgVv2kxFVLxHP5g9N8ihDazfQeUiquET3VVFdBosOnugh6cRxyjA0Ef/vjMySQszMOgJ9MrPT7GDb+JkPZfVT56OhvEq9R360uWrNpmZJMGbqD5T91vQLBCcdaCSh/TvHsb0sK/0Q7gRvClgb+C+w7vsMnBL3lK8Kaw4svWfvJxncbM+9q/NJKwozn9bLLDiEtFnELa+e0ND0Zl/z8FuyaCXw1qWp2H+/gtVxSGKgT8uwW0gBVLxmSrSJtpJI5dYOs06JER75IohVShdk6LqdlZcv+kqeGWds+Vz6ss+UFGnAXj8wOLNsk0k3P4lQIo2/VZHtO3XT/KUBiB47BxgT0vjwptV71fTRRmOV46RIu9ys2bx4zCHMZXGrBBPbcLfA+oGnTMUs/W4M92a6H6LI0apcUrHBiLhgdkA94yoD5M+ZA5n8MKiJZA7FqKgu2WaZd+cHPBzsKd/mRsvuKwBlluf7G+FdlFf3kNfEFAwJ7RyM6w/w2Tuhp1zsV0U3plfLBl4WVoE5h74u/Kp0DQQYoWLBha929TmPSxPETW2jdOfg8zfYmOKg4OPpBmTitlIkj1Ah2lqdB4qx8MLcdodw5yOcjmNZOqviRxdXbo0XQoZAi42Mm5eVYBLBlKf8nl8RfQyFyGFB/ItdlIabTP5j+1+T7BmSMfvTdnMkqaeGd/PG9N1UEKBGXDdH420t9C6iQ1+OUPtBb/tkbPMKVz5wxIK7eKl6UghzZ+8aJB93FkZir2pf5PZNtNQeaF+X7cINgEf1fvOI052NimewggiEfIlXNoII6gNOk3Ec+6bQd2P6uGGsIV3MWvzWwAq35ggqR3HOMLwAjHOaNH5jfAEKPQNc3OpTSKSXcWKW5kwPuHMWf4LPoszTXX0DVP1DyGs/dgquz7aXsyRD+BPLp6xbGZX/D97Cr2Z8YeMmFaUpjgffl2pGSHg/r4cIhhE3maCcc7I2UAARCrPOpAzZYkCzn036Qe3zDJvVG2QOtfeUD3+x1lsLbkcGoBjRude5/p6VsuDDMjqU0pI+H7o7Z4M6TR/I=';const _IH='4b5785c34ae8292e9a6fa81e1546189b4c8be5794f1a5276de94c9784502e92f';let _src;

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
