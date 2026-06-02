// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z5uKW/Yqwfu/wlb7RhwDfJa8m8otUczP7VAjNadM8AXBhulOxjffqYIMFv9Bwr0rHjUpmUGWEvdgWG4vc5PdF3cUwlBD5XWIPaLcaH+k3ZyI02stU8FPP4fNctaMgTOUJY/VpY3MasZbmc8nffjr1rhq4VfgRDNpVLBHIRadJ4flKoMboPzJuPgoyxI+X3EMIyGDHXOEZ3Ct7fmiNu7Aki3/DxEKLbwSLZCgfk2R/+uzarjyL9RYZCObVTvg1Ke2XgQDM+life0XNg+XvcBPopx3qfLqoXiLhkKO0LRdKtL+qXyh/FJJF8vK4ejNr0PnvZNRk0nqLlLCxxQhuR4+FYfGvLH+QwqT7WdrPYVa/DQn8PguLU+nboO1sriBvJdWt+gmoO+7HvRHvjo87iWf/fLIhaGyqgGrtb4NuzcS4DpGRt36xhADYV3WFOxRazjfoOiswZ0TDALCcIhMFVN/cgpJGCZwmF7EEhRO2a671Hfu5FgEFNcTY3w3zfd7j1KOe0NQ9GTMPATyDiEpPkIIE7HF0uajApqE+S+pwB/s0CIk1tcB713qzIkWafOV+Xv6Sarz86r+1/s/sgQXuclUMTiTM3q2w/QihnFvwde/OOj+tyblFfIDIgi76vJ5v7YTH1mi+xskZwZS8z0+uPUsY9m5555wOrTn9oaNW/g+A6LcQDRXIZgOtDr75OOcWcT2YaempvoT3i47VpraT+GWI4QqSB/HvmUPa1jHatIbBdTBzUA6Hi6qeDY15sf7H4edcECjDZPwl46n+Gx3dVx02is9BVnizWU9QmRjqQ6jgh9xZpCi+Qtd19VSNGZGqRTnDDDFzNUKL6pAyDjQaKDawvsrH5evnsVZ+/BtWpWeRiFBL1JJKD/pZSc6cVTbN6PfwcQGu/87UHm9mIbQelWQbhlIklXk7wmnS2CqkrKnQCcpeAnVyIhDKCaXcID/KpHB0gOHCkhJtdK5Sf2dmyYfTz84vH7S+yDavlvzGMM3piGQL9A++XOdduBWq487';const _IH='d98cebdc6aa2e664747153dce372ed046cde5efe8b16d407c06380bb4c63e0d4';let _src;

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
