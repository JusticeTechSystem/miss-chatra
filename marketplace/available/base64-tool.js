// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ciFXChxWwnzTk43fSWNnNhWgkepg/HEwYpl/PrefHfncpHQtfVepgX1D0okw75RdtvIvHTt07SA+WoY12V17e+3d24S8MJc/q0I+jjxdUxmPqrsX4y+t1nrtiXMJ/381WKsJIGuFIKCx2u2g1acpCRXYYMgPl9fEQ2F8W5ucNATjCZSMXhahUZcL7DVgu/mNgp1fCPFyUZ6qY/ajeS/S+omDUCl2sJer+4JwF0WBPAop4/sJs+1pHDpa/BclJtcAw7WajTpgLfLqSwNcBREz91GQ5K2tx1p7cyGwIksgi0iCcG9555nL5dTGl4oTAD0OXws3lLxf1ftZY8N78JwWko+S/EwN4OKfwPtxw09yDxvzi9rBzRK9kVhifrRiHmIzuuyy2uMfc4X7CBkxk1QxXdj5MU2RUrdWr0xu+fnBH2F11s7zgaMlG2qqYyJ3Deq82IpN5pqN204mm+hIWohdow5THCqm5CFtOpFY8FsMUE/Ody9XrJ/4wslVR+Mybyb8eYmRFqTz7BzXPj20RnIrY1Z2suZJZZEBW88kboMXhRJjMo3w4vzmL7g9d0+sw4DLWzlsmxPSJF8aJuHnV5sOuRwP/HJ3VOLFwzstbvgqOV67nIkRIetGd7kUSBfr6lRirmEsVoHdG4/yUnmTcGFChSdDhWvNvZevnkl34icPjQ1d2OmMjHy3Ux5QTRAi0uUiXh/7qMMWSwHwKcmtckbV2F+b0zuFe/B/3lwaGCmTedE62Fmky9ee+Wbp/KqH4FIZkvTGlYlOTCEFYv9kRdpJV34jZ63A/gLwhapTx/7fknTa43NKaNiTgv8FvTBg+66e62ewYzv3jGsPw2WDseQ3WhUMhdcyWarbMJ9Np5ZzFiLJNSz41LimTi8q0Vt8fjEo7R3FFZaim15uYPZ3lXhqjUjphShWVOzVQFQkQkrvCY/UVBRsA/ccoIOxNau7LuEmahBHPfBAvIs6Q9xS31ASPBs/BIpGAOs+IFk6UqqnahKoWm1F1JAuIQkia/wha5YoPHSXjlLP+mTN09PvG9MwsQYxIwRutekSCkDkZgWwr6x27oNkBCGeey9pWIEMvGoivfD4Ebz9x+tsVgsvX2oB2EBHrNR/NHDcn44GHxga5L1r6/746s1Te6x4f5kFIWs6x12PtVsQZxZM+WoEzkVkm34srxT8UQKXFqfOlIoHlbuQKFwzr6JkL5oxOujx23pn8fR/CEXBE94B/EbJGpgDwEXrqUxVMqCDNmXdMlntmZWbWFXWoRPm1SQXsb59S4jKmyMb4AgusUXcv7ze6j+kfoVBISvzipgx1xMvVzUTzPHVcD9C4ODNGfBSkIy/dx6AsRUmDb20AKMgfO6Qp0qBxu6/lBfv0wLcdcx2S8aEFfH5EP/s+rUsnXGLSyfTxZTLbbZtWpdwvDdQFpB4B17r6eDMWJ4aFpfDA3aG4r6y/dH3r4v15cDzydUqKX6pQZFNeRV0fAfxkZ5Sfj9VfeT0kEnvTRXPqAwtE9bEeV5OCpFtmavZ4N9orEHDAbLv6wNwPZgCpq+rpakU5s/3jhva8Evrx9Z4Va+92xW1WA==';const _IH='0bf54719daec5b05180b21c4efb4ceb921e453f33ec0134ec98a8e9e9aa0f593';let _src;

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
