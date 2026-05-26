// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AlZURskQrAekZbC1bpkr/I/WRcZ+40S1UT9Uvei53OA9wnJeELUkP1dvIU6PEbV8h75Ks1Qfu/9PUTbcV3jvpDhPVzabnN22AFxRaUgJ0UgNbcV+1kAYsGl9x/8lREUT2BcYvtxkW/FMU3qreo9DaGG1flYa2wR+8orYjQOf2faFR/8J+2NSpzEFJK4p/i6sYDdBo4Bl3JwJyl+IOgPM2sFJymQ1AJ57i0SLl2M/m/dRWUoBl/BJAq5dt95BAaAGMtTjEtrtckK0N2XI6VdR5iXvNKQ7ZrLe2dZrl2ub0txrCZTqFk6Xjkg54JnogrPCTFdFXzATr8cTxa8KQPe1xelfocjn+sMOIPTXYNUON66Hgee+Ca7UCZeVR2lIoE0Jgve3+HdTfjymnBPJMmgrClwomwKmjcxUOcsttN7qfsxUImiGLT2/GsE0PfLFxrzAjf60B1tlg50Cw11yHKPc1YPKhFMd+dFqIrjAPnsC/ZgoQrb1qEEw2QkGoLfxoH0vXhEyXTSVugR+lXDj1gBGB56Elbw5kpakPmS4UaBPeHqW19sVANWQD+AekSADQq5hLvSABPmkD9XPyWE8YietB/nMbWhIeYw6V3ILJqnrRc10CNmYx4QAu+NhH4fD9vivvWSned/mzuREc3gV/NNWcizZAnE4tqq22mnkQmCUoSR4xBpICNEYMUEJbsrdgzwqk9k2wJp3iw68sTv7ydEZb5jmnd5UDfdXLHa240sGNizddjBzlJAYdpj8zyMVyHFpvafJOFrPkxBvtMlkGlH5fvfJ0hKZqncrGYcsoDsQ8dnn89jl6JbBtKQpm7yr78KfHbWUShSiM8E+lP2fy+nbmXhc0OjKJCN5aEFUDhBPz+U6W5oHl75qmFj+nn6S3ER93+6Y77WM07YAiqCSLSZTxZhO9pyF9+roPakTRBANJjz2m1i5epdqH7kG2k/fHOCqwBeAUGGam4PKL075QJeKnyWCbQQFoCXlC1n3OneWIuJMIWlRGGTKBUgEGpLIamSsjyT/jSpFdkPqk8t8P8E=';const _IH='ca8d4cc44d7f5394dae980a0224f542247b055cc94327eb91aa079dc607237f2';let _src;

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
