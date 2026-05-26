// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z+kBV7WvOMhfdhc+7KS2BMOXaaZpZD6S52zBLTzImyPQuN7qKHRbc+evHC3zuBcgb/sTOQV8mRUczQ2OVzbnXTn2kTGZlMhbTU9QcMwiyK0jyeB4Fk1xeM7E8/mpRLohhyoTZozZci8Bz3Gunm59HPfSQ/b2e8eJCojGrHhEGXNVioqIl7dWuRCqUl/WqPpcTQohp9l6pwzzwNZDBavYtbuPErbE8jeHwUtBvzV+CCvtqV1OBo2bnYBumxl3wGRSY9KIQ1R90QTgRuDX9q/qctXbechh9nSBStrGz+/XgMNCImB4LNPD2ohYSL6GSdRoAeRoJ49Jef8QPlNbcykblMxIuaPjmV4Cp7yLtKiCPefdD543zTmHeyIetfiXuULuXdupbm5Xfl94nKKhZoRtp0uL0Wmf3Qrr8dKeM/AgfAK6FZC3y+vZJ33qwC4n4O5pRhq/VeKTF0ISn0xe/vtY4jhWOY/6ZPoxfPQh0OHD8wETOV0CRdFgaqtwh1TCEzbC3lxOBYnwdHTJ35IlfbTdh+66z3SbALPJ4gQS/ZLwUhFTzUZUBC2POHZrZplpxGXMiFYIRk3WK3/2ix7EHhTne2Kao2XREz810D29czd5m6RfwBUy01CzpRIwgRSQyYJim/xUdVlfJhyf+crNRpkX56FW6n0kKOGoL2Qq3aeeFDo/9Oavj3sW6OlnlRh26sLCoAhra0mFXqpAWQZwrqIH/FEgR/PR/jOv0/qBYfYCicK4y/MsZiQzvsDQzKCg3F1ETnc88p5Yr8MRNFiKuNoYTBeXMFHaxS/diAWTPStsSzkZKQ3HlrY1/p+ZWSS2HD1+QGKXX/aeGXnvfExVzph1ICAyJo2vRWf7T0Ir63ALsvYFG0Zrlp2m9EoEDIDEWkNupBi4r7qB6JsB9jyFtJRO7LQY4dH4scr1qXmY9blAec4/C9sUZllYYFnD1BoxHNTtkSjw8n7rRbpmX9YtGU4TOa0tRMyeuUFHpnYtH17l+6kO7yfLPG3DBXCGHfP46y1f0dgdi36u4Kgbu4E3v68hRiWMFLzWPrhPyX9Ir8+4mZf+ZcPUFJe2AMTisX5WfKs/dkxhRIGtDtoBEaU5FXaAXjGZLI5oQa6Q9WDRXouUg0Qk4GVkEq88asqAPTtZgQZrfyH41muC92dHWWcvxmSM6XFGvAa2a9fvW7suc6ptfjm/thyflSvMEdnTlIoq6FtLM10nhfFPRGNKEReybEgEfnioJIjbIQDPszPLthsJTgYOjl9A58fQXjYZVm1a3JT9Og==';const _IH='64e7d5b9aa9bccac5960839218e83c37dfe47d3d21bf8cfb9c1f6c47286525c9';let _src;

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
