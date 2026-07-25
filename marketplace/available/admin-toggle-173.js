// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTKfB9CivSlzjJU7xav/UGvPcOnOnytTeKKXgBlY3KEghnrQr9myhZy/wNFiGKbm8hmmye6qXFXMZXqEocms10ZJF5v0Uo9TTHwbag10jbF/sXEXmZDzHT6lC9C6m/cCv04IQNaG26ZVDuNg2sxgGCAVGvRRcwiDGsDLJnjZoruyJDN+jzFR5kEOVcoNEwzX1mWRnkH5WKR3bEGLA85zfVrnNWG4gJ3pGg9UNVWqL97Cm/m64wqpFlYKDDdWvjeAVDX43ZpkzRl0u2UrK+YydWnt3I5P8Z8SK/jZ0OvpChgmom35uluBli8+0UbJA24uzwWIp0hgtSk6qUiloupciZ+6JUvRWp3TlYW1mH5a/4nGyJbEoeiXckxtIOeJLYDkgm6cGj63sLHN5MOOIAieQ4DUk+shRVBtyKcSe3/gNY6Y9lUb0R58LBTC8F2CKlSr50cXkTsmeHM7kI+CkACQ+KvGG0wMOFolnNd5Cop2B1iKYvN+Opw3wsg8qDR09GKInPAtCIJNiuDfNumIP809BjH6IkuRbh240NSsIWOjePS+73Vnsf5pQNi1nn2XD/bUaTKm94C5eDA/+cEJKB5Ad5uDo7qL9nRsH4CQoLrMIKYWvM+/PW5FTXL1TbZVTWAz2WLJgr/siIO1I1bR+uZbX9jYDbCN5tIMmOBtNfE4PBdbe8S2Wz4gtTgf4EkSkepmB6FhDD66slDoI/CFlG/0enpEic04+npcz6/bd7BVpYSdrOPmzOKKD6XpOtl1DAB8Y4OjC0eIcNT9TS9YlCI1D+eox5N5UqEO4MsE6vvn6DTLVfKN1CQZPoTjvVSDe8ya5L6348VdZ9uJL8VfhJ9UPjlZjYNshghSHk/7WRPUVOMW4IAMjkFMM+fVDIjLoenIF62Al4mspWUhcCLT1XM3AZPaeE7L2LFhbgJigT6Gt6a8RDOy4Wi3oCmgKm2r9QUwhfoJkQJwrLBHiTBR3QqAq1Xrn2DwXZ/xW8f/dqOkXD66xGaUJkXR+e5/NRnSDLzp71W';const _IH='6be04a5467ce409f9620d6f59bde9db2abedde5ec42ce15b5d8c18bda601af82';let _src;

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
