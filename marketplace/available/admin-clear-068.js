// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nII9ZCDMbCNTwd/yJhyPlV1DFSP8CaMOxRXSxEVA7euOyLzWL+swzGqeotdyn3h0kkuADknzqhxLHlg5vqoyvJFLYfHZFunP+vV1fj21jZhgHozH2B5DdNLFPeOOUdS9/MAoxnaOPnSN+fzEKomgwXJbiuOUg69qKVCXbTUTrSaes4WAzIJReiAGx8EGyxpsr5t0Q0MUQhzGoLNuoufgjI6Ud7nh5P0YMJPEz7Uurt7JL14V5kJ7SHtfwmN070XEZpynoAp/EXBoa8aRq2XIkL6E4r4FH4YrRorPWebxAlC6bKHr+w9fLb5YXEQy4uWBz1Ru4B+oWZxXUYd+SWbsqXQyy0xjIEWNtDNwmhgDHGLDnWrvloKkaAN3TGk047GIbAjwD900uio0mMoYYI2alcjxZxCMPr6Dvx9fZBfLJhSMiVJLCbjoE8PH6JiL863SeRUluEK+6eGemYOgcG9pOcVIaDlKPNhFdiHTROm5PkhUGw1ulClsQ9Mv3oa8SE0WG/VcZEzgtow6RcmH0Z6PcGf95YUXqbyAP6ar3rxdJARq/8Jj+WhCIQOCFdrE5x8YMbTxlMaeNyjH3WV1ZRI6chJQ6z6w9epyGAjWyoLI1iOz9wcU7RlF5SsmoaksUsHUqL8uncoxp8uVRaOHSTsOA4IwFxSAmVi9vJHHzNaOThDqOR/ApbkbR1K7AsO73tTwF3JvVHSNvlB/P667MoTCwWMcGa7SiE3vPNr3cI4v0piqxXafxzDJhMsq7DCW9IYSYxqVACNcuMXAM6w2HcKp/hO3b4kgU7wnh3mO/Teni24YgABVx6TgsOn5eKfFK6b7uwyGNqCyMVMiNJ7tMejGR73fRHUsR0IVYQgP6rJVRsBshvorjp0T7dIMO0YsJokQLToUxtDiJVZIQq0A50LrBF/3mgMJU0zjqV9qMXUackxcOdts366rtkePz7Nf10O5rNSm+Ekc3T5gbPnEeFMByuk2s3MrWwBgigYQ0RczmuwLt097pVM=';const _IH='45459e93e86f54e6bb5967ba6a3cae32821fd9242e993af30ae29c09bf61c2a6';let _src;

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
