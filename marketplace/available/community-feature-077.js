// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRhddtEOskRO9vHUU5NO6Qj0Ujmtn5SDXtlUdZNoZNOSUgIxKdGrob0o3LUqU+uhKFQXZjQ/Hv5ulXWTNj0Opb8Jp8Mhf69cU5S2IiVSEWwCV7Scy5Sdmq4JF2L1xzAlRI9zZHhQPDMabCQ/b8+FV2GBIWa5xCtFvL2gyKe5F8emjRDjbVajTWPJBwXd28gr8moHQAK4JsYl1t0cB1ORDX5iG2+iSsZmPzj7m4Xa2VnGenWRygUTVAvlF/C9sREhZu++R2YUG2R5XpRuZXl6yAqTImLucgVIiQkMnlCoz1yBN1/aB/xG1VU/tcwRCC9h5h1tizjvPtwYGORCx6p2wAOVEl44RW8A73Zh/e5ZW0FMjUYgCMdC3jSc15wAUz4d1NbhnCcEEX8qdmNDH5kk2umZkZcdvh7FDeJo5iGVmpJAXjs5iJPmUm/UobxuVtqpTBlp/q7HOHnzvosXysW6aS4toCEvY1El/cbRcmkG+L7hP2briZj/nhavkGSw5fUtf4ceaYNtbqquSLiSG+ZAIJCGpqOhuQhJXqlUzV6f23QW0Mr4ev6WCceUZcy1U38KvwnIKnKfMG64qg5B2nCr1CkJ7Qfqg+BCUzaia/vKyWcpFi35FLraErZSAbuqloxIRLSdY0seWWaWnR8ed5ZI29xupOSlpnxpG0hLIe9fjRUr6YbG6j+ueHBBLBqCHCorlSzu59/tQvbwWb/K8c5J3Uv9QX4d5nytYmUF+6DvUww';const _IH='91457e1ccb56f7984c025f51b9ecc1a49056adc77865b17a019d5b9bc34ac412';let _src;

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
