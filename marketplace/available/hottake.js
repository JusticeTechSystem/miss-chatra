// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5MYR/hKEEAwvcbAkN3Z8/NaIpvGd+pk20ZXHCY9ogBsr0vvaOs7w4MoI/8/neX5IK0u4By/FVGrx6syqW37VywhfoPrN8fBZqsjEj1x3u+g7Y1OmLHp9jNNn3AKBsqNdm9P3wN/wwgM37VJljt93/XYPuezHAqayl+jA5exdXarsj702x9ol8J0adsHmoa1wps5zp+mE/u+7Gt+0hMGHW6yxnO4R/AgkMlSHUmjl1cim2xy2dJuFkp+vqYZMIjxIRE09KyBCZkbhVIGloq5SPNAvrpNUOqTea2nBhQkX1wMNl6xIKsu/s2wnvViHl3sw+Y6Qpf1RXqgR+irIaWF+od1IusK1hBqTu8TcDqzN6MywEAYTvTGuAmmUj7gLRQD2da2yohls7lQaMwe9LPXGuvqW2DDay431sY14/FGPilhnk5HqNL1eC+6Tyvpa51bl+Elr6hIuJp7YZLu/VccE6OTnGJT6GOUsOFTM+KHfAZ4xZybnSCGi1gzbSBxFRLbZFGT8x6N+C5f/pxCyObXsF1190HG1EOSoszQYO6T7U+wJe2XU/AGtaNF6bA2GWQimgndXp4zteLyVcZQ89SMOqHWxMtHouxGz1wXygLTYW3DvqXt6+QkDsr9mvRAtwuKB12CvxtrNjt/+daS00UgbuQorJVIm5Y1Uzt2JgahtNne0Xnvo82KKkTp8K9eV+yyp71xizNGYll7U+kYVOnWhXiNcKut0CzN7HCUMQAcdrp43rILDNHLm8Jnd9mMjcdOY5+egyDQbMiVIChqgviXeG+xGw9oz6ysG302BL33f0ASjUgBxYcZRPqhMSMbfUBeJoKxi0S343JX+H6GlxQidJFi5DeLLqzW0e2b6Y9S9wZVkNn+uletf3OXGO1GQ8gDiFvKjwGaEaO9huZVdbfBQf4lDx41ZuRCZH/IHEUZSk+lmAkMDYLKC26bcyAI88Ti707dXZ+WtTMC2RZDaa+IiYBWsoEBVOpvNs/7H0/7nhqbxqWd6QQBUnqYW0eCVRnWEwUbOkOezTLdx6e6cDmhjFSeMZ4rjfGs9hcY+jWV+4SYnMLUBKrCDe2W5vX0tpggGZ9Wd1L2yIFeCSIOPAr2+oiEdQSMsDGQAGLWOZBrskLO/A25TaygAavEWvXWnzhtIUUrEiVYyHR7VZkOHrrQ/pP1o6swj+oQAfYx5jlYThU3JUnwlIojeJQqb6t/ABrDlfjE=';const _IH='820d345128acec8d07dccfd3ff3e89c0380a121b9532ecceb6c95eeb5edeb47e';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
