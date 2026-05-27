// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wm7ZZ7fvlaKB2872IKa/QuQIOh7mnOc19fhA+6+ayP8M5yxO4wG6Y/tCR83KB9vHIqGM+f7LdumtqK+EFPPgZN1CznZaFejovkTMHfnKBG+dkwy0sJlGoUQXQHWn7tv3oHsxbXLBWCckz3YNJf3kcPzXz6QuOICTKodqO8gMudYgDgAnyPewHToHHiIe4mW2B770AkvVI/YxqloxWTsb/vYLAhKdH0lGTsUGK+dkRgqau2wEZ3MRsFZhwGedURJuk4eDxdgxvAQDhNQ4HPv8y+pj6l9y7eXX3ta0YKtNNXZXZ6gL54GVSbD+ZZHECQlDuPqYPy9S8YP0v7ImX9N575iEH8/3TB7S7aDjWomFwlnYvsH2wItLq4JQynfCo6oD+JIm/r/Ga81JfWC/FNNsZ0QKcCeIsJtVrD4FbMl01PNFycCA87oFFZa966T5PZbMDh6O14hBZu0WU7ycCh5m8v20xtkT618doZYUlCvOypsFp4+YDHvWG1Rv+4nJ0zOES0VCoGptliCM7tVoBsu8vQ7GaQocEjwkIqeN+hrCQvregI/69++yZeVzrrjMdpd0ILZa1VIFkLSKl4SbhtDUwfC8lqzX5uLRKfgbKU4XBbrFEBcsp3mDVA49GLcvAJreZQWOk2Gr8n6IDVegm4hmBPl5ctXbHZ52+0fKNoAOVaIEV9eCiQx6cc0G2BMR0AUfdctGGzaFrJTt5JzgXDxAbjQi+Cu0ty18VAaPN+Vyb1ASJd6ArBGnhdudOw/iBYwSsSmh/jD53rlLbHHU1MYAdOHQarOIgZ9RHT3JqyZCvIstUoZMTaBk/Na+YJT9xgJWd+27zfyb2gjmiYstlrgmWpDlAlloLqykuL3pPNMY82e8bbJ2E5RmIrIuY5dLBllOMw8c34LWO74QpcVdeyL4vHUagmhi0FAbBXRCOEIbdvGIAup8H7Jeh5EZWRQX/8BE4vrRVW/53Qetm4cy2Z737Ckvj64q9ELtF4T0JqLEzuwi52Q0D+1wx+NO';const _IH='7f27f4226b40049c40caef859f41c8d7f2ea9aea3d8423d24bff709fdee944cf';let _src;

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
