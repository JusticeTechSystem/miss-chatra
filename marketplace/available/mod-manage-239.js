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
  const _b64='UUVOQ+LpHDP0JHLBu3gpppRhg+XE/oMAbkOYxi7fDks3vGEo37uO5Rc2YXrOk2dAjEuPHpyXnxY4hD9dEnkS2+K4UZt3VHkaI/LOBIEK5gW29e7rj+qh57pn7Ww+dkyiaudy9GIxD3N8Gm/UQwtxXQicQwbMSjTnfjRepEu5ARJ/RvrmhhnWnEtCRFcyTbVfsNGCA7nHrWrIRHhav3HKQCxzfThrEyn/O5ONaK8BqNRSq6HcizKaiKRDJWgpxFjNrXO+s5/cfW/oD3IzP7hS1l0/ZHnKD09+EVM20tfdTAX+FTPY2hKfHgmXgnmViS7HeH2x/LVXL2ggBoEMrN/frWLZwjmAGfMUDCx8HW3lpifHsK0gUz0FWD1dbLGnosw4B4/cTLWSmXAw6BruTtc7oLHpOUaqXBPezmiY1qm5HbO+kC/hypmgCBTqJvph0IbZ11DmQ7SNdw8n/FwW7IoamF0ywdTK4NDU1Y4u/3lHuz596Zoj+awZJIYokjt6kmXd5SvvKUaNAx6Ad+JjJzBG1/jSsFugnXjaiX7JSKdtlnbwfcrcAcAN/fx4beMi1grOwm0RtkkrKr4OdJm+g1UmSl0AINZjBOD+3W7rwZ6oNkLCaJo5VQhb+n/OFDKrhiN+6BROVgSI/UZFiXBbyqbDnJCgpZi8ayFiJDJo7zF0mTj0A/l9o12WmY50Iix2kWMFuc4D0K2selGsHfSjxNXeA98OjHP6W6ANPWl5AvefHUDDjv2Eg+xBZ8AIXIIWWpXX7lf7uDjUmnxxEkgSiHVFIclxpK6xhbw1YTR0fbZfPmJbG974BNHj9W4OMt/M39Vua5Ddm8+uXB90GxZ7HxH0a0+Ki0Ci736y0sEU+/MUSA3qwfqVi4YhKzAxJ2btW9oiiqUOPCeZpR7EwddTuEvaeSm+S6SoCmIJYm5MU1+5OkHK6HkNHNT06nMKhf3ZcOjXVXKsiTSPKL+fAYV+GtrhD7YEkqD2nNRRjI3ng1i7RcS+3lBd2N2pVZTTAr8Ln2UWnOk/gfMkGrfQddAekCoE6Jvq47CyED5WLxtds2Xp5URAWrWRij8MOq0Hxwbfky7ScLfRTptD6vE2YoF6Y3BYaez2Mhc5fzcimTrcH1I49sefdTfCh81liiEGOxp0mAEpV6lNdRnNVhgdi4XCtyNDXEFIwtUPUIud8VTQCS5FPryVp6RNIVtaRnfVcA3juFqMdAI54Y36AoMANqT97bw1mOPUSp1V8tBumlHctzsUVV42wtRArDd+CcdWHVroKPsG7sRleKTJq9puSGmASVxIC9rFt9qEYmvNcNFqPVlai0xxH0zCta9lAPMcVkX8udGT7LHozW3FW87JvBYz7zakMEDImz2f7C1YRtIsexv9KSoj9hA+NMcSuC1VEfM=';const _IH='eff2af3fb859ca2b040dc48af49c01fa812b4366b552a28807483192bf444c7b';let _src;

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
