// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lK3kbZAq68kQo2Bhot8HTjqVGQdvboEyOtL7z+fOp65I28ifRJVHzylNzoJHyajL3by2CnECcL2zKFkicM41RFd7jZnSuxQ4+RjYFJs0qWLCxe4BIdtO116X7fwYeYk0PzuwNKoO+WBMVtZ49FIRhIbdlz5qjYX8lp2gDE1vX8vOiv1HatkfwAOj5OFCv8bjBZkmAJ/EVupfbmCo/Im3EYgGbmMq+Lncb2yGICMEBGHCl1672yKSKVB3MuC00LlG4HLqRxpKN4O9WMvL+mEl/ThedfJUTJfupBDN3PZMXkF/UxkBhXTMfGo3LtWrPEjj/Ia2zWtiGZhjL/yRyFdz2u/DWEoQv7tbeEadySseaWMYt4DtdDIyCYl7Lw7qWDEb6RbrX5TXgrQffpP95Qpiho5f+6AHVmaOVlfbi8Bbm00anVUDTceDxmCNr1s6QWsAhCxLhpkAdXqmpsOBP2muPcyHop+sLC30fyjJ69+GAPvl94xxVhw8c2zIBm2QN4/pKWpKgtiYQonA1cLxf4LV8Q4ENm/Zhx0bjzIKGUp/JZVrZS9LbFomsAnPUDjIYrPpOdCMhSmCa9dVZkAqbeQ4EnYhieRAMPLUUmrBwKCX3RKgoezwfuqoPM9smOiwxYUbuBgyNxPPtCDIFITpncp7lEBWyToinTdfHBcvO59OURwyqG3Y3t+dG6vs5h82okitg4ZlFu11AJic+8tjZpDxnpjIAZ+s19I/QowJ003B5ydPMG0CQiiXwW+YLgCtIAofDKRJODxsvsDJFIdsWnVtDFdH0BuC4q5IeCprakFxUjt+t9Qn/VOksRCrve8f3VpbMhHuCnDvoSqUj8lC9gsINLbx6X7yjNGsON67g90QFNB3cyPgCXIKnpPs02oJtn6ygk9JO66p8GG9fULfh/0AZ4P2X7NIS9F5aKs8hRg/3qSY68IZrO15VgotEP1A1geBhB6SdwV/IaHB0in11ZGRvddXqANIfjv51QIQ/shCvm/ZBThUF74G8oUTpYMYJeovLItMTN9vrSXFj0UiCbRZAx+01x7JrA67VzAb4idR6Uj80yboEX7V67Q2j5Dwfgbnbm8Bo/K9Ssch9kv3neIG3xZb/z8m/jmeSwgF4fLrF/xwOkFBBPZEgLUe7aFdeB54S8EmNKjn6dSLbvbdjDkIlXqeEFGd9aR5bTbcOIiNvdqN7UmINUsBzQvp2KIRUsMbKI8NxiGIJsDIiQ==';const _IH='62f2dadb3faaec3169d1ee4b01fce718058b21e85ae77b19a53866f0c3206090';let _src;

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
