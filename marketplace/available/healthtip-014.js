// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LDCMnZ9yqxXHTwvbn9/C1OdZyU+ISH1xMJ/R9MQgDnOThK/izojkLwrO38GQichb+at+p8Aq0Bu10y4e869AcWloLSXYbA4zch1Ze5ZjZhUrlbBXQxJaVqbvuaZCC6aP5pLOVM0AieMeNialtI/no2dB5JfrkEeh+No01ALwqPu/3GoCDQHK5BhuaFuQvRvATfyeJ26Ka7ndq6GxVZFuJkVXmYWXgXMqaWZ4yxKRvSPxEnUQYZVyUVzCIhiBoEqxqF6D4PbAwX79RUIwqcYvsvLa0wsbmyGC4pVdIF3kidQcr5ETOYF58P9ft2nCs9cEmbx3n2VkNTg1HGfgBa3TvMPPmA84/ed+X0g9k4Gg0L8oPFxJtPUo90kzl6uIAHtswUKAM1U2NApIAEopqnZn3nb+4uWCQWQQ/OL0JKGzI8RSZqlvBiFgvbFEFEaAi9EzVxIng9MR/ZGkL8+vQt3H5LEY8s13AZo/XMhOxJCPgpuUv6+9C4GyAThNgkSlns8zv/iQNmcqb30O603bO8t6yp/V+CvKThK2V9O2F4H90WanrbMosZu7B/FiL1prQZJGcqkopbYDJEzV/9fp1ZRJITrEuljYmBPCco9HzUpyeZcyKBCsPi3wHxS7Ea+aCovSxt/+B082gUX0RW9mCUJtlVQmESuZgCt9le6RMxEpvjNcvn62j7eu3de8NH3LOnmR0P2V5/fBwWSnCUHWOMj18M8guR/60g3XuHixoBEuMbdmIIRb943DkzLpy5ksG7sZB27q2CYHDRZzuUIU57NGNIZkbIKJBKrKIiYUo36JdPrIxn4XqedikkTtZhTqbiC/QZvLOq4Z3GYD3kl5GfdYoeOy3EkyBQ2MafCojeLLxOEFvARcnrIPMAiW/QxVsWkSihiaIzlKPrxJSy2yo/NE7gf8lAVnr4othj1tB65MneA/uzko/UHuJNfNPW8=';const _IH='778b57f7ebe458560ae4bbab30205748b094e2cacbc8bf689c620ceecdddc220';let _src;

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
