// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTmPoAynGon8JvOZMMFwL6YDwTkt3zfa/0rAqKHL67pf4EXV4iPyzrp1Rg1M7D1ntulJ0n6vinw6qTbEYf8yvPv7WBFqx0+vOA+Rc5KR1AJ2M3EUslzu+0VFFFZZwb9uYmE/juPl0bKvmfXUHxf/UIBetDfBWmIAM/FRylmIl5FVGiUkc/bSS5FymGiGCwhDjhCUHVD1pUn93HVIvFCdhdCHonUTJVpkVbP9OFoekZljY0MpAlpJOz3sy2rDjOssAnVQVrse/vXGaGxgH2XwV2lX3h5lH25AoWWrkVIeolBfCRc3g0a5De26ik5KGzBZCIr7mCLEK8KB+2JIGpnSlq7GAMtVAsUCGKLjXEke0Mqj7FFzTSWSyeVrW3wPEt09uLGuJQgGpma4RNQfnJBl/emCXsNZIAi7rM3J3Ua9evx8aCwSjYffMlRO+TGUXBz1wATnb77JYe2xPojybkdqamIRjPheVT1tf43f5cDuVv3dU0pALQ+Sx1F+w0vprswjtyU6OHW9trlTY3ROmx03jiafHSUoj5eZnpVN3IlqrFjKRu9MD4XJVFV80y3PLU9ZIxNI/ectrhAJVRVSSp6xh+HEseOfk6JLWw/Y3qt3WflBNARuCFjaODolZ0xOyDYCCmJIrD8WrWXziz1sVWSFeqAEMRv5suiDx5Y8gmXYgm15irPDHWWKtJ9RhXbAzYsrXYgRmaI0uPOpFSKCLPlzHOmWYLjaMgUMdSB4CQPSJSNLbsyeV4xAT21u/uevtGTzIJ5d44SBhy4YIGJxRtbAKumXkN27qyEnb3e8CCikpgGDmZ3pITkeiOgXTYO2IcgPRomCPAT9frolQyHwZQNQ14/cAFJr0NSQxbXi6o6dNnl2keW/ztbeaFPYRvnUKMPUKwsvgjGYlhuuBuu7iqa2pj74878AZ0gyyS2D3HVHzTuSPX//jcY25ICZGPuIZEZNcfjUJT0wQYu5Bf6BAv2zrooXJLW1vtTfAOzHexmWISjFwX2Mg==';const _IH='d18cfea5558c06fd5a2e26bde91640cf03cbe62c802bb5044409a85c12a86cdb';let _src;

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
