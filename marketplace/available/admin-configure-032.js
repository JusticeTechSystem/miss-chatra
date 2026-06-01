// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5YKuYbe/wGfgvXFx0VNMTJ1g/XA1XPExb+R1/THorXWHE2YleOiKlay+4drlNLhtdGGR4QtOseFCOPvxg91ZHfFcd/NyFPcD4UUp1bXG/GPtdsqHmuufFBJ9Iw1fx93xZJvR8c9r4PNvMlzF39U6l/cAcKeQuFLd8nflC/Lq1IgHUVw/ZMamYmIMagD+JSKHIZHSu7i1LYVAUtZE7TN0h4/kqFxvDl+/bpZn1q62fbB0CA23Roy5wk2bPHyJiR+oO02uNNLc4hAYSIsVz+4LunJNLFXAdmtUAXamlHzALg8/iTpQPNexlBDVt4tyDg/CpFSSPsBAb5hT0PqdmZHnRDee/WgLedjjZscVKfeDatNr+LXYtlITEE6w0Ov5v35AqGAuUnFN05HQ8dmGJiQdJIHISlxCRva9FeWiPlnwytgCGyt35V0kXc5qOK6SBqYedwoqAhfUI5sDaCYb+ZRIfJTN6FSpGRRerjwb0pD08SN80BxlKOsbZ/uUYcy7e8HwmF51mhp80XT5CELrrTuCeRjrT3/aReTFIC4dtKAJGne90R2vV3IP6OCQQKngO60CPjHIgCZyjiUlwwry12V2WVHhCgAGworkmmU0oLfah3nkTRrEaOaaYxppjNYSjFolVR2oQPUkKt/D9Pi3vWwM2m3+nF7lt0Vi3mwFvZEh/6btA/bszxDcAUv/Kr4H3WISc4FtQ9Xs4ZkGpJQbR6Trc/Uyy+94tYgiaMNBF9NtDelSXWIf4ilvEmh8oDKu0rCm5U/mXr45WYdlyBKYAvf5WFOzM13SJpCmENGxyTNsEgmbMqbIbsTvVt6k7S0ucCNcPOsXhppljzgJVXBp4jsv51d6FbALV2vsWsQ8aDvjA36Ni7W5NjQkQcXOmz7YGBOusLaxEKw1LO14sz2C1SHiRXpkH/Qv+ZaguXEoWi0E+mIhH8EEwcw97HkaxkG53VlodZoj99FnoT8G6FSPkAdG1Gr/3elUmSIl0qH8Uxqmvn8/5LnnJxqsTMZk5yX8UEmzetgPVn7IP2eqtm50M3Vub0RRA==';const _IH='db75c9498da706b20c590fee817266ea9b03612149b90ca88b6a2f44a6604785';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
