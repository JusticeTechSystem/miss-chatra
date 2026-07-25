// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSUvLGIlk1KIqukLlZs6Odovrs8OEVVQ7m6C/Z2V1o1RKX/ZDzASu3ssgqkwPcz7QDeJehsZQOa6znHRmdXY1flNXNi4pPa9dUn1IVrLPRm60z+F5ifw2nR2YJTO/kdBXg2e8A0yil42MQqiSqXjmEKnS1LlIaVfqFQDQQK03CfnK9rzWMl5gWMv67MaDSwt+PvTBrLw4PuJFvx3mvqtP0KjwiXwP+gsvf0OfX7E5bBtNpdtS7G+XjfoyALDlnU1dUcARZDttOPDgYaR+1qxXaXzK3PAXU9pJuHtS0QixsZhs4LmLF/j/dmO5C5TvAncPujRgsKWyZz3BZONMJtPtFvk7x03SJvCMDrL0XSnAQq0VmCSO2xRuqh7bJlUcGfnZI4w6AlwSVi8Cp7V1C3D16HZktqmS6A/3hndVG4s4lcl0Bwd8uS/AqWa0Ty6vJPwvJhiFS28kLzYK68jUOLq0pjwgRHcr3mvtXjwhZTsb64yPv4jDAAPPE8MMbEsjVkqLEGO/Cl+9Y2KiEDMtZ0Tf932sl5H1Sj+9m9+YVRWuDRuXg0oEZT8LZfJA0ilp5WeLiXlRsvuAcEYUoBCkigaZzqpEYN+xbx6w+Md6MAMwfXq/KJ3tIL2AAH/ykFlJn3nQdnBvlXQfrTRtwk6TeLd+p1CJIjXMLcNX7BtUSPOY+/vwUVZFPsyAzSfzx5wK4GNp84sE3yc6FBxiHOOlYEn3Q/wNm0663/ZT2UMnVAfV69PEJ6JCvUVoQkGa1j/gBN08G2wdESu0JtsVcD9Lz+AR7DwDtBUZHmIQ5yFLFLbEdGZuZGYipLhOVWO2TFtCi03e0zIkeEL2IPfPM/UjXAmBgDWdunJMfHV+TW6EKoRMgOuJhXgBq+p8QKE6uoIO487rWXY2J+0jaDX3PnL+4U7UB+eN7BL6hfJ4NodtYXjYbOPJv3aqHd5TkIZNYQUDMviyVa5onrzxddj4Wt4J3tAwSBJGPxWejWi1zheDh2FM/wJu/EhXUKR1LnpZTDYrkhU2MAE/WmV/rv1BZUvI6+jinEMnlyf7nQJCkempvnyWoiqGb3zr9XeaV/oK5txTCPy1cMWRVD9nklw+7CaBNk1HyahXF6mV5GvQ2G1L8iQau3MDjJEG8maVx5tumdH598DfXQvsByL4xD/ZFIbIu4uhzD1VFnUDIASyBFSDIgmriDjMwiXAb54Kywyw7fxQ/akESOkq6UgiHZJPW8nRHGK2yJfM9/WW5Z55vAVA9JmnHflDTRH1ujwofJDgL/SFvSWpz+wqrCPS1g+aMa1BVkXoUZ4rVbcfoP9IMtgO5XicqdRmyXoyLGmBbPCHINFz9E7tHoFtd44CoZj4OHCfGEZWfqGDB04yNfKSV3OMILZb0=';const _IH='3a3df9b8236ebd1d4bcb23aea59701af313787226d3b66ca3ccf5ac4b0558f96';let _src;

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
