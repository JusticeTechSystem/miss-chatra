// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3eMyJnngbcaPmHLZHdO+qCMNXQL94nRXw0DQano7eDBaFXV3+0m7aXbWs+jtuCsQoWgxgOeIlqjopurnIsbfWEeItYm0ODYGyuJ5Lvo3L/fsRix/vnD8wEy9q3L7sxbg4G++hRxWyVGqGnNnTBgEHtxMioKTxKiyvI5hClO+TVyS8v92umnpFOCs5GP45i2WITmaMl5Dqc5gqrPpABuOYiMbeMpQseWe+9+L/uUPeZ3V+4349wm5xtEFkLLl9n2vLZACK4mHGT/e6hNqB4P/t1RbWdjZ+XsVF1tVY7WwJGmzTY+aSqRT1jl9DY+OmPcRuXKoxxf/wgQ5xmP9oe7F9vOXS2bPfuEn9TEEAsOZD15Qvb9QE2tOBFvtIZWbn/SPcVe5Z7wf9QRs/v1g3FOIuUq44gD/WwPTpD6nQ9utOihYp0TtzRRPwuIG5td5mlg3q69v6ZTIKafsgXwwfcqSAc5/dQ03rkNO2cBkvxTk4txyGA0FuVeRtPdWjhd9c+hvZTfESA4qlLXoqtZ9ywwiq+DHHh2ZbD2CHQQz0GssbrGsOejBQrZej5lKcpgdPvw1bPYUSsmx3aqLtWmZ1WU/uSf6H4vz67fSbBrLl/tooFmKQZaOsoQ59DdbgNoycXzQ9i7UbWnRf2g9v/MmFJXeCzluvTRIx3TFcdTEnuCHtg7dcPd0AOFFRb32DPoeouY9mNm9W8T0vjJNsHWeqR1HcQmO5y4FOPgQ26oDsn6csP6zWiYRPsN6ekfIYlQ1IeAlOiaYhKk1opPEMb9s5JRbHaf1KqCDjKabiT4xK6s26w0jsGMHKB/fRNN7cD/MWQA7FN1h5Qdycgu/rGDVC/swy+onLqf0sCEpp8vD7B9+4yl7gSRdXtqYokaIiS2hIcGcFAnp3GfEvaMEaj3uDGfCFNg0pKjKQGIrAlBQFO/fY1C1R77KOnvJ2vm8bw7JeqcFLE4yHMKUP9x+rU3XvKSxFvZT8hcpqML/pxz4JtNvXFVApYUHeSvwpSZxvD+gset0z3lFMHU6w7CxEWMrXRXFtbk5+HHlY+70oi53zSNI4uZ7+++6tN8llFYSx/JxpISixQLhTaKe2asTkEu192oAwHyj13zsx+SUVPyVomzgSzixS+K3100vUEeoptGFphJSwlOoiUHGePaG311uiznRukqBYNzfauPvLBMShQ5WHm/G4Ax65FwhdRzgisQxRSDH1v2G8g==';const _IH='9d89820fb9e75f972c7e7f0cdd835a6a94991e5350894eeb9dc46f91b7bc8dbf';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
