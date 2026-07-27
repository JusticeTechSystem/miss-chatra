// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRrcVx44e6YiDf/a9CaPJsGtjqSDGiw7T8ySFHoyOrFVjn2ya0+e6RtVjLYQ8Mx2uSGWu2kPolDyUBxhXAaakv/AyhMtkEVUy9KCITA7JqqGptlmIhmuZPrYaqbr73M8StB9Mt5nD43e7WuOj53i82XRI7y7bjJiFcAgCgA8Jd0ErYVOY+G5qmujzAlL2GbWMLPPWZrL5mbnaIC1yYYiPkyGo1ycpfqsomfmMObCcE9H+bgFHAZ8Au3uOdSRNkKtEz6n+BhDYvJEGiP7ojVhXmIFtMeKaOPYLq0ehSf6vx29Af4i4eNifw4kC3R9lutbgMQM74DorGrN40KazR1bBOWEmaW4jBUcXBUo/uU8yk+TJttCsW3wQYeV/LuLwpfx/eqGGMYiXiylbraDWe1JjC3VEGba/WM4Mo5FCxjN2YPGCrlxPCBK0WSvbGhJwFcoqpJEeRlTvyycP41fLO1Nrre+wYuJQ/A678ggNaDjHBuLaK2yv+ee5Vogn8yKOd6XB1Q61ZSWyLZ1isN9Ayiis/KezLSacrO8VYQg+ndrrtGf+HZX7yB9rIMF5GZuOA25el5pLg5F9WqBIf714j3T3LVFTHjb/ONFp3deKdeEMH2fVvfbdQmk5d8zwEa7Twp4uId9RBzyr1IahyQ3/aI6rzxP6Sn2o7JjldsY5tS08ydFtsjVdRqET2c7go2/fs+Ulefb2w2X9vLD3gV/2bpATTP67kUXqxrHlzbhP6OYr6Xw5AuiDuThUNUADQqzZMC2XR28M9PXKjFpQz+htyq1R7dfd7CmE2nqtZo4gF+IHxjBSl/4G6zxKilO4WArrY6j+/LfbKLdiPgcS9OTqmYDdbu4EXmeKn5xTC5MqRUcuQHDdkp7vyNg6yYFrUqnWVQGYrkMiJYR6LkHJ99X9t5meMH/8XqNHKcIh9+GgYQYK6YI18+B/gVZJoDGuJQkQTyWYeRSki1R+bGLCGuyI4ogmY2YERKuxqExp2d/tjSRYU8YdnExfBEfEnG3gXJHBcXooXxVHlnbpH7yo4EBgYhs5L8POMZEx+Ubph+hChOquOMB5E6ZbRPCv0MzkRLKHIoSQIyTe9iiJB0LDyTw4eH+Jl8q0rjuZF3e7KKXmMdnixyijqHwTrsEosiCm/L24W2oaUorW8gZncC46M3CWFLiDeCOp0cpjlIJkkmFyUCnAN9JvHAo6yiEuinTTQ2G2fHSTbAJ1FrqWMvZ4Tb+/A2veAVOtQeJQh9elbNggCdTgmzbjBoAy5kPR2zu7/OOsNKooRll6Lck4ef6FOi5e59GHXg0qqjLPI8qjF6+t3PtAEx9nlh44Lb/411a94ufVFX5LqAA5WXFC2gHeZZYg/WAPddcZhecYiq5LwNEJxldRBJI99rIwG5L5ZDBGTOq7z8shUPCBkQKnP7';const _IH='7829bf3f5e80aab5318ae87551b0c5dcba4b1619d8091a3ee98b05b33e395761';let _src;

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
