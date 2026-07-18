// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSCV0iAaMnrJl+bDivuS4S0V/TLq7mnovJ8XnwC+pVIDBRdqzavVQzTrrXSjWNln/alqLwnoRdB6QZ+BzD+zyJVU2KzCiKMgQLIGL4smZS6B3S/vvmcko8a0FAwvoDgwyxS4UBTD5dl0Q1qAAzilh+B/gMMEqTlcnSt/mdrcfjk3KsSGPmZMPp88pUB+RJkvkMjANbUO8FBeLyyR6gncleBLESeU9xyaQy2CaW+CUPRhnIXxcyslYqPGGRSdHLnArhlZ4ouL0yyrbrXBpadeJuMI6lI8GGDfRpiZxT+U3q/64SD5eTLdXGGzkBvz0dcIv/AMmHpOcHDIOWlckgtUsKBrr9fpaMCrVSvoRSLGCUJw6L3VLul73GZL38v/TTdvod8vAE4Km+1udop10EM5cEu7nRs0a3Kgf8QGfi90rKdcCwvOrtN9S+QBC9nK1t9Nr+55NnLZt8I60jPZ0fobIjv8AyHTNJzGNEsyjSq13vj1DtaIXn31fsh0B43/Dav85zEPUXWx0Fb6o7uO+2x12IO9yPQBPpzxL1PSppAnELTX6raphY5D67qONYtYNPlMXxmYQdBvaYuBzf1T5rjPv5iYtZcSGGt3CrJrTbeGDh4+zhBW/vVVdYhxZuqggybYBU3BDQ9XDB8fnRqRqzCLbMdsKSJoVvaB0y+aoN2GsDhxB+A/XhwnnWn8GwqEiyHg2sawAxFzjyy1LW0fv9oC2AXD1h5lYeFtVsDC62Rg9/sZuhCaIChsLlQOjkt/u7kD+KMQ2pGUCQyP9RbcvsbqG2TckuuGIHXq5dQh56Emv07BVSyPlGQYE/btwoAu/DfD3+kO8V0hCCp9K8JakZhxc49Vyp64ZGf/PHO0tZYqmaSOXGfyqQRSItDgVV8dF+Wav3D3qTtVxAng9lfFnjkXFeSnAN0WaJcvf8OHFw/gFe9xqAYnNnUtGBlKV+skfAN3saL1vqDblAwfa04B3Hh6uR21rIl2qTMDjp3rRcuUO6tGqtlCWjLUWVdiqAV3/NfkxbQ/qY7JAGvOmHx2suUeKwnpXvh6ajn0iaBcEoLv9nSDGjT7KgEpa0VDssoQuk1Wfknkrq/Oz9B5hLv+Yt8Y9mla5uCowLAdu9Yu5tcIT3/tMcwjuEZS4UBN45JcyPQT067K/e4lwN3tdsnJ4yFS/ksKsahApJwiNTjC3r7fvuwS6orQY/MCyEyJefMzCij';const _IH='89f0bfade3a469b466546f74ea31dfcb7691be501bbe0cef1d4e1852a93b9766';let _src;

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
