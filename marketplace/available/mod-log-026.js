// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D7T8/TAeUVtCQWsYoiBnTWwgCBzZiXQWdCO5HXGVBrJySVBROi42VZXS1n7curPyFq8sct2aBeiRNuYLDqN/9vVpVmRNX0X/STh1jvBxNq6rGYfMRRgAWzuLFY/PC7oRWlv44R6ib+nUVJJT3d762n1e3yHpD/SOSaJIRayYa3fHnS6vh/eEavHtDrvKVL/L3PLowHFGTCDC/RYcmpCmVJFSKLO0LDkT5jeOUGXo/A6ij0YBo0pEZl7yjXOb7s1LxGUXuuykZ1cFWou7CHIN3CFR6exvf6sufv60Ee6qo3U7NI7zuzoHOwgAtRMMNmPaFETIgZQqv+hUqbHKMkIWHyGsKNEUz1fixOZkwnEN+Tj9qRUeo9b3OTu9kdHHY6y3jPccJyylRP5GkQtwkOcNa3D4ptAtRbqpwX0VwyyfA49TB3z8/Pn7AiTBXPJaat14JTikESu+kZ44BuCCRd12AuFAKk2u4nn1ic311z6rF22N+BHGU/3GctgV4vWgvWME+tOyhDawR+95DXV/+wgdqaY1L3tVrJLt1P0vwWKOJO71elY1zbbovOBsmt5IT5Zu9yZW2CEMTCP0al/otIcD81poEFzX2DsapNF7ZE0EKa0oXi6hC1rG658gdT69YNcvQF9Rau7RclN8pJZkRC4AkwBu250qjz/8Vo8VLRZ4RhFGzkqO0I/fo657ijNisDw27uDDypNTyw1vp7Q/oDRedXeI+CV+/pwJyax77lFo/PqaxYJBWzjnABRmiNV2Gr3Zp0m4EeAUvvb1MkDMVZRAHac75AP+cd9gV3zq9xrS5MuIMgLRO4Tnou1vXdEOQ6l+SxfSnsXVWK8ElJIvYmq3tRxgwlnQ813nr6QjBtkS8B2vw7UTcdW7IBI2bfq7VZMtwj5TKW4BjFktH5CPqkjnw3jgEgBk7177IWtxx3ElMtXYyfa8ggQx3+CFGtXXpfXDWoncJe11HVh8S+lyPL9KagKPda3Mn5Q++lDGM0t/476Y5o9GE4gRDsrq3kUa1kFJkzqLsn7AT/NeYj2rcKkjz6CYLnbbCB4e21THpD4zdJ/g8AUrFmB4jpuJZxIUQE/gBO4RuFma9i7bOitQe8jDaY5V44bgmB6LBG2jfbzs1GPYO+60d1nOsq1voGuBiPFPyz/H+/lpEsv4uM4THjk+euxxH22NzvBFL1LDkyncpXd7qjbvK8ggZqxNydu2p3u6XYP22GKj1km67XC3xzOlWh/lkr+OLWFOvhBuU6qvjp2cKZKuCan+g4dx3A+YJs8zSDLBk5jxmo8anTH2MB4JzLfkVQ9W1yzLOW065GzwqfErXg6HYKMw3v3rmuXxj1YPyRi3NsM=';const _IH='ffe54147f512d1fc5df072a52606a311f512265d4ab1c1d783d0bafd28d50052';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
