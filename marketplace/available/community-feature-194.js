// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HBElC9WsgPbqgCAJc1UnHQetww8sw6epx1qZoT553cfAnxx/FjkRR+4R156On7qW7ZDbwpCR/csWKyJPauieUR4byMS7NgDWT83sfTH0vg0PDZByn8wW251L6/vUZpllONCvMU0x54qzRcA8SwvqnNPZM6NK5+AJU7JdD10ioAY8kaDBInJHtcWT6a2ZT5oepnzuZYUbIBWPwyf+Xay0JdfWScx5MLvBtuLUwZ1Zz2/OPF4+fQy9/G0zGKADq/xRtx872XvhuiC3EHwbnVRSfMWdPzXY19HImtnbccIf8m1D2ELefloZwcNaN6y1iv+QGQiSSQBXIEDmBBlW1OZWtHGELOTewKA6PfyYThyewF1/BBydfBvkgslcv+x99pAq2WPCBcadK4LhiLWZYgwQqRRVZ4xH2MF9UYu1yzSUIXhTxSKjej+dZ0VQJ1It574FzUgCBSVigLFoQELip8vOKqYByuHPOJIlb9JTE5sAEqJzx7nSGBw83N2W2F7OqxPM+HwKrhPXcEPTFXG0Z/1lmhYdKScyHb7peAIi5n0LEZi4nly8RGrI+LBOwLa2kTrAD5i1W43hd6SxU7bOHozoBMfKZktwymFK329mFVmxlsrchmNq/6ZQKVUrjicy7lpDL9VWlgmST+qI/b/2IPtGILc02Bu3dT0jKyKSlpD/RWYtyVxg2Bho7gJPH/m9Pg6UHIGYt//lKDX9+MUy1f8yOc00sfqYIczeeNRapULwluIlGJvA65Q=';const _IH='ec5ac9840dfb9c28c2eecf5f05b8ac6b293a91952f06cce9f598ad07327ed2a2';let _src;

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
