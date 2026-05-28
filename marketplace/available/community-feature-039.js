// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w177nho/0bZFPd5A5OMcYjA6Vz0ncvS2SHRwSUZePkbjmADAmwmHb4sONwaAlPLa0JNuwDnsEJaBnXkCfp7jHlNdmM4pzQm6QPvLPx0U03uNinmk12piachghJTLb/Nkq1tCiCA3gnmSsWJMi3FC5OABWzwZXDSzxs7eHFVx7LTYQkuOtujlIPdhp/RsMuaJuiAMm2zON+ar5ZksIVGu7Uk7ogEvvozPdOTTzhdEIlGRwOT9ldkCwQelWnJXyxttnlYLTqVGwtUDfjpKIpP300/oKgZ0JImZBnJEH408ifPqrjWeyMddUze2dXwbo+zYDDRAA8nBFrNTsOSsAB62HuCAM9B8KSuzQBaYKbShfNtbeIxzCDS+GUo6XkCUTvXywA5x7yUrI8JZ64/aMmPMMhzoSH5pw8UF57E9woljDP103wRhAUHH9rX9ioBfCV3HfTbku8SK+naOT3V6Fd8ReVHH+OANBIm9pKLSUzL3pbt7NPX11DZ3A6VNZufXbuPoQ9RIHaBKUUw/HIsYfIe/7vMclHsfTDDD5fmA1b1Bk3Q+DvRcPiroIryOPzaHvCp/uUAx19+KaVpEs9V6pBCO7LLjPhmdBbIh9FPh1S7dOGDe4xkLHePxJbLyBGzODs0L/xuWy5GjFHBCxjm/fxSFqufZ1o5gL9L0IFGJubjVOzZ5uO0EcQYOvMJcIe9xt3lif5XOxmGuVCmsgfXC3FHUgIiGd8juKQDeKS4Dz5Hg+TUtQA==';const _IH='250ccca55eddff83ce22d3b70da155063e908a325a97adbcff303a1e89cc404b';let _src;

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
