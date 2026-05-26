// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='crQOTNHPb2HBNly2ktn/MqrgohWTHAiHP9vkEBXiXIapGRlOoSKvl530TQJjoZjXxXCShRp9lH12/B+NFfsOG5lrJTBmHa0u8nkP+PjAr9W/diFBy+C5qNrJE5PRsqV1OCweMpTVEEb3+4hiy2pE8m35GRAoRKr6U4g8m4yyhOI9OuUWiJwLjsKO79tPYnL+2gT82Rd45qOAqjScITteix8320eQJx1YWsnxLxshjpjHDkLrg7R+HFZ7Aw4vrg5VNnpUJCUk5hWPEWrJHVKUr9/9GW3maD4DETgZBZpSleN04k4Hy+Wqf89/MDj8uNQQvUlPzDqTxue/MuF0nFsZIdt61P2j4J40qMorHwSdNlroC7zH9VDLFVOFE+wAlp0UcXOqkvaLkioItV0f1+Vg0vshH4rmbp91YOBwvAY7T8vFQAVCkSLAsBHl1q/ykAv5HB2eHeYAaEKu2MTs/Z672J+g4qBpFasWs0UnNbNAFpjoRJrhAUIyk0HQTK11aloBLRAcEEGLME8+63PVqhCGkq7MClDQPbcueA4yvix7yRnqcwcs/FKxRbtZBISaxDn6KcpAP5U2NEUfd1ONr5T4DA4Fp1ZNHtFLcmefCnB3D4zUz3vtowclqw9GokHPWPOyhetjcTty7OOjH4RLxrQ9YtHqAHomzFh+YSwDFiYUFQgLK8BnkInmNctiPvOcbiWKSakOxidr78GjIpGPc+HZF4qRTk3eQxXrmuHenqprAAO0tASCUaEIqLB1a1cPu6GF2HJOu31yJthJX3MUkakt83/62fGmjCz/7qVf85RUGRKSQ/4zmDr6PDHjQX716Qx+NkRPbG6TuXDycT8JkCdp9oOq6wCJIZX2FMFYSk44zOrKRvQiKAG89x8qaA5L2bBu3S8ch4dflzm/82mxM7qLUX3J9b/5L9MtggV/Sb+1pXriBP0Tq1KQuA0a2Uu2MlJVrlfqab6H+uCOm1ySqw/EiGdN6f0YOPmMOtWGE6JB16tcvOp3p3kbf3dRr7Xi2Q/M/BBYu8wpzl30qkIuw9phiu/YbFm5LDlKyqCpD8rtI3ZG5PGKF0SIZJWJ9HZzXSGgFgHrXT/ZP3RdMKPN66Az9fnPtOAVaS4vJ4zDNpV57fwaWzzTrykKwz3/pF14ktdGmhWSA5m3xjULZmFI2Zdbm0UIA8ilmNCSQiCPtzXgXPf3+VqhVyYFkFlavtHTpFhLQmBogJQuz2UmwcolC0pQdlmW//3DbxBWJtGQDKqPWmV1GHr6rbGny6OTE5KORIeedEhKeOeNoplcChSY+ewd9qnbILhAC06EYRuo+5vALpUJBZL3iXSqn/M4jd051qgNSPT5Zzu0uk+ORCAivLSYjsq2lxIgJ2Wm2z+UP7KY7uHkCFbJRG4YKd8kBb4PIgXNujvUlCjQXYk8YWGt';const _IH='d893865987563783837552e056ea45771fba52748f9d6c633947792b0e65701e';let _src;

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
