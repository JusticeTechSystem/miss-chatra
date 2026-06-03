// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4MoOId1hM1uyFetkzHqn0aHXV059PFCKzbdDOH2m2Ejd/fAp1xoSn8QxIU+A5aF+JHC8YOMqHiiETd9QARELPsXeyiNP57KI9PceQzitB0L05hxM/1ggleLL9U+HWwryHLwrNghIzgmLDIaUreV1ruSB/OrAH1O4Ykf12erf+XEYWGzBb0wbi8vSMksS39IK39Lg/iWPVyfl9K4P5UP06xyTerhLmxOEr0enBWQhwCXrLftj8MCa5XLymFH9m70nMSa8fGYq3LpGkAoMWPU2i0fIC6FGx37yatS373VlpvSfGP0DcErtUsIgoC7HWeo96XyOeYe3V859OsI3bzn7DW228k/vexDTYM0gUMfb+BwJBxEFunnckv94WH+3Diigq/OWiPSecRTl1K2yEV6B6r0ZzWH81sjrZ2EdX8TdSM4zIalcKWW3Gp9sqw5I6XTnOpBZWffGylvgdWte0Vp1LNdoIuYBDHpBmZhpNnDvcSIQZgp60VTCZQ52NzxxXcYN6rgFXvoLBQ6NemOJqo3p8cx0vqFpwYfSFXhVNUh0au1LPL2L6t8YIKL4N5x7ER4Detu29OaocP3uokjWfVwSHOEk9+S5EQQzcshEaQtc+pL4/zlnBmRHODTSf6kqRk4HzFZm4JdNXTeMgk45UgkR0drgip/bURIHAPmh/TjosPY4u1eyhUZN4cjmKCJbzZgNQX+dZly7Uj2ASAP1rXlkkDt+BpAxKJjhMurMB0rGaw==';const _IH='e94bc7445b26e82b2f1e1844cbf6db2bdd04727eb4047801abb5b6662291b9ca';let _src;

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
