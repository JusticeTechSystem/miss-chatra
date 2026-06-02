// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rUZrn7xEF3EFRIm4rxbW+6ZESe/ZmENhq3lH3/FjsVTK9CmKZqmXEIwCTXzJqlQqeFOcwFYdS+lEYWreXd6Ihfr+ER0Aq7k7r/gU7GA3ybwIoV+vn6DufT+aW2Qg99ddQGKlwZ14pRhMT+RyDKlporeL2drw8tHl7KtDXf56f5+rDKCDf4dlzW/RxjDLReIE3A1xSDc0YEjLBSR9MpkMo/v66viamvLgjmXanjueIuQEB5zI+Dr08DxHj/mTyON672huycftYFdMGgPe3JUSY7cgbsE5eKculCE6VMzTVjuIDCsGDPas+7GbM74E96pSjkIuKEV2nxW98KpIdw353XwcyHGX76177AYvRHonJMhl4KjQJwDLFemOlZC8v4RufD9yHH8wQOHJ0QNzsnd0CjMOo8ifIAMup6ffBq2Cz5kfUeIFGQgwLYpMKN4pcUECynXpXQ/nkE6eXp97Ll7mst6gN/GKMJ3dBjKwxn+lYNSXWhcQwm5tAGs/pGYFVpeWf3DVhXgNHLJRwy4DiXk2q7QNxpvHENUatg8D2ZEvycRaxefo5AFkiIbfqxA/PkH4K3pRF0xJMdptpfjouL0T7Jx67Y6t72qHL1GEK8Tx1I0LODBS6OuqNSSSKD+M1+vYs4f9iy1n5b8mMja8317hnrekhR8pgheOVQQHRg8IIjpeltH8oI/cg/ZZO47shUup3Qi6H8v3pA+C8I8=';const _IH='25d36026fb25d1a31cd9690be34cd1813c84971dd02dfa96edcd7fa5bcbbdfd5';let _src;

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
