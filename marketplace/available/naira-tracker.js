// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ddPUTWbHIS0Jr2eBFFKvLOZTkTHwlz4msEcQ5YuuzNM9t65AF+hAtgbMo1N36hNOrXxog2TXvheOvAoKBO+csGbfZp5x9nwB5ce2FQ4sVmLLrhutbzgow1CszmlcMCMOUz9a+tprE53cjWHmmChsNB/HwlVn4SvXIg8k0dGua/OHjp6hy1en8TIMVrVYDjNpD0nfFCZvB1WWR0+kDFK0s6EpIqFhJ1++DKG432QJPb0QfNoMGHTlVGbTSvosngfp6Q7IzfOQvpI/NBJ8mZKjv8BK/FYRzeM2VUFjumd+V5tlio2ujt/9hzB+ervIRZu2Zqm2fWTgHoBf4Ck/ePkfrndFHk0HUU8W7nK66Eumwvme/4lVlxMHD8OKoaPcqa0yS9H/IKWR9G8DVTELSHAV5BnNoeThYr4Tb2U4pZCrN3xvtoM8e6aZCVFPun4qz/Mh9VWyRg5D8jlOaFwCnxa/AL82A/9NMclHJ1aXvRtMEhAhdUjsuuIes4uEASKGhmGxefON045rgWvQfOagFdw8e49if1J6M676rl1pTInhlcRmedZ5db6ijwPcUXprRk7SSBxjkqk+HERPpQ==';const _IH='aff06423c9a63e79c77c2bb3121f028d3e8b84b1317db42aae3985c6ec68d558';let _src;

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
