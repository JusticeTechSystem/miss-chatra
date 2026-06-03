// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6ofwcCehaRurN2kK9XhPq3XwoyFcrLhL2BY42hzDtZB1N4ps7At0g2ydvh882aN0pZ0offp1hBcMdMhCpe/5W17ZBTo72n5mhqMHqsExcU/t2FHP7j3JpBXSOI5uFsqYhdos97Xw03n1Tdef1Vg2wuN/KJiV1QTV23Sv5bbC+au0PWcbXJVZHbsCPJgzXS7gl8q5UWkR6vFy4aOwHTGpVlSLf/nj1iwvAxM7bsa9fjKPY3zAL1UPPDtMMJY3GnjTrs3MlHVckIwDidcPHpQpn7LMBtsvIK6twhnCjIvNOcTrEOy16br9iIMBG7W3Gpmf8MOXCF9m9bpEgidtyv2Gt+kvrZIABFBuzhRAVPtFX3sazKOn6M9/cGfMghond1MZcNmsY3HP85Seu282KRvSYlPjrgJJNXHHYxLGAUCCxQ6vOKWrcB7wuXzmSwhIitWLew6wkwf1Xm5MHSJByy1uYO8UZQRZM+eZ+FflqHQxM/8JXMwDdn3TLouloY8l7p4n2m8cFyXbwkBtOG8ZkgrW67vTG1ZGgH387HG93yv649ldmace9J20G7rQJzhHY4x0OVdY/NScKsa/ehfj/kvsxHQd11VOldY8Az42DN9E02Dt2tdg7MpCpsr8Ys5oCxnT/76SuS61+Kmo6IvqjGbrHTpHlyeLLfX3r6qSFe2sXREt0LG75JSlTVRa4Trii+2OAxn3YT3nmPpyODU4sVIRl1wEmVnllU+JFJbctzA+pTE73Q==';const _IH='ae35dbf16e1d2e24e25d027ebb108241dc17893eddf33ec274faaa90382882bc';let _src;

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
