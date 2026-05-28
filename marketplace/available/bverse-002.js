// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MjCBep06Zq/47JRi1I3ILXxonEh7aQ0EDIsmRpEJWm6BDKWC/fACUn2JM9P0RfDEiZMgZcFFgcTfNXadrvsr4jv09Z7l9U//AZciYPrHP9x7x9sX+ZQcwCPVWYKvhElHaI1RGDp6Oxi2vPVlZHsvYrSuYs6Z6DFCjC3I6UOa8yDsq6uF5Nm70a41n81anyg8/wQwbTuFDKWOjbDq8tzYDuKcKtfX/bxgj7TnsIFN4HYvqlcasNcoN6IRwj59FeWJDImhn5QnRn7x8Ibe/Yaz7WafHcG6z6laz2RBQB/5ASg+Qx2okLvP0yvESJ9j0m8Hp07S7atw7BpKHgGO8RGhcP2XO7wE1jO5zAzdHEVxTB59CegxulBnP4wW8vh/JJu3TnDRNbenuijCk+m0haqBm7Hw976AC3jbOP74nGY4ZM7NbJe+1lSkoRYTR6PvJrs58Z8+kXWCkWdV2iLaLjE48cgC1EJDWl+ANuCu5So7pmBqaCyRfUHJG3EibaSNjokCveBbIL8gu6eJdDBnC0O5X2DqrLYLRaiyJts6bSGxpt30z0Tsc6363qnPRWa3rYK89Us9G7XABEtbJsaQdpO+uZg66y2TMFZbu64XGJ31IXgw3MpAU2LsqWyZxix2BbGO2uariykLT6Jokk5MUilj';const _IH='3662a25cf74f24a0fe3c51f989a0fad1ab2aae25bc5ed6b30770aacf3b6f018f';let _src;

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
