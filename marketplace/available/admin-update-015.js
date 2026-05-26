// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oo4j/NCzN86ANP/wzMcYXlRbMZ+vOP3ZbgOpN56kSOH1qTFGycPoCaE5lyI7MiwDVrSNrHSluf5K/XDmZiIAVWpzcsfceSq9dL7CPrWF4cReTtibIAkXgdDVKHR+d/MjJf0p9Kx+rre4dzRs92ZadjDFGgcREDvk+3Te6YwtCDhKP/Oaz0IOLIF63e6CwTNEEG+B2HncxqLvs0YLAfAfZKAf7NLLns/yfW58vsWsCabbqi5TGEe6SDPWCF5M9IBk7HB5Ca8PAEHylVW7VA1Ge2SGgjGEAK9ORucYq7+2QOAy0RoRPFq/l1KZptQzfkAeB4zrbCSGRa92yoyCtrSvag/rdtb93wAKV+QFeWaajf2is8BlBLuYN+z8UzGijT9+UfwAC//n+vicUn7dxsTguIlXzPF40gNDadhFr+00wITL+azYQmAf1FuD+YU110sA3nx+LSkLwLScK3MwOqEZnpLaqILQppyL6PBF47gnIted3MxG+7BcU+nXBcQAUvbaO4bzzVkaUh5rVVpmbY7vqe7B2UDaZRdz4AuyqPrZiKDLErDjJ9txsurkwENMadvvg5bvgKrkaoa00XsWLGRD7uvjeS+nwDr2t+k5eGVZbXC9c0Czb4XyRSrmbI/PzIRWQsRYUoVoQn5d/ULVcd+AfGrgqTBfMt1YxD5y1+AXiGdeIWht9k/mL41UDHi6UgMOfRk+HXvKfnrNl8My6xjvoOqZSPcVRniVbtSIGzEB6WS1arXc2z5BraPtILsLo06F5FhKMFBeFG0dDRPTM2YuOVE4L5p8ia4on0NYyN/N0WLGk8xku/7rmPEnIVpll2yPOlnLBxUzTXYdL4X04cHdnFDGQ2Buen2Hv1WgrcBA09IbYFwaD7/EnrtyhH0ASzW/ocwtRmpyOuB072y0RtYtz2X16wRqO2TlYR/uXnVUOm4mTehwXKhHOW9ZenzGLPEORg/C2c7n4Llw62PqzzxvCwFWKUFttTIZjK8JM3Km8a8FZVBtYbGmMibJ15ML';const _IH='2144b532d26dc1d056197c1af75503579d27e36a2235c8b0dda88adb88a1b155';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
