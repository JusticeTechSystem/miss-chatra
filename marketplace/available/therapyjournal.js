// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR/PX/I7kyWPcYKxISA7+zLzXejXYWvfpKxdE7hnBdLO+DJpWU/jTaqet9j66cZ+/McaSKycFbvil/+mu91UHh0nV9tlPUGPWsDKXae9N8cHSMDWFLiPoPV5YM0Cgw3DGTkd4N6xFGPwdCkTDwvrKwHLoHt19XdQc++8rbpgsAFahme0N/vigu4FlnispZki3hEo0JOFwSTb3rDqQVEFSoOX3A+yVkXaoCHPVUu5F4SsVTn0vdZk31Zr2LFn7uk42iOmmjHQ9hK5AabZfU3pjMkr39BSM3OkISnoSOi5XSuAT2XGkrzmBD9uZPCeUEC0+5kq56HekU5L77HvL62mb29dQyGQy0kLya+FIijTfCYUpitqYqGdlhSraDsGMC4BuQX3dLcKjEZPFHpx7o6rP0Pg0CgApp9ZLG7rP0FeqHbeHDpsj/fSsMhnU3zPZqgYcgdJzUzMsoUY8GIaT6d4ryvxvwQ5+9eCyzRPhAv9btYh/pJAj7HrXcl/0odrA8wazN4EJVUCrniGCw2g5K+O5c2YrIrxCj/YqsnElV5Z2e4vGaIqAPuu5N5c4MjtqQQrjEohGCTD7D9dV8aF9wQjyFvfJzZQrES1BClwAiTg663h8p230zPGszn0bceVmr//P7joB6WjnLNtIO3ZzcU1XRf6IlF1NdajcmJh8EkYN0dyYxG34nuTt3wmSZ0MLtHssiIeLu4IPYur71mUnv/d4q+Q+Hcekqpbssu/86/5iHK0y1R2iwjNC+i59A9OC3nY1Owb/iZl5osSgvYcJormzEJVb2XDHsrOfS21rq6VnNpDD99+W/wdv2Skg3dB1czMS2dXCLDqtBopX5ZUjJn1jCx5fjBAN5JWkD4nW37wOLu7W0tVPePn3TDL7bbCCqMm6007LfOaa7S0G7W/YeniwPdGEHRe07/rmRgiaBA+/bfbxJiu7i051KymtxMpPlQS5aR1UAts95jKOBMOYj/Di+VX+KJZwqVOCpClleEW50hGo3SLsZZLLVmV1kfDyw8yGSYHQH9HjdKkdGvgr13FpDdUMwGoQ15s3DpvHqG7ZCtrWCKZ06lGj3ZOuzW/+GaGaJrBxfzKoeJzNNID7g+rmBHPJkL1sHDPwA9q5/shJnYbd3t4KeL8hUeYIDshiVTdZxc/Bfv1jja8BQwnfkAGH3KYs2FmpeM+N11tuDYkbCqNEQvV6RCviZdbSYqOYAYZev1k54pRCbRlYpS18aFjRv5ZA==';const _IH='1ca7fa99873fdf52208ef3c339b642c598bba4e02ab1500e72dad5cd2509843b';let _src;

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
