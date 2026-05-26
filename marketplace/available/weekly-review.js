// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:31:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zxW8b8CfzQt6wjicdT11xvaEQe7wdzWpYNv2LhjFIAgK0B7hJwNy+k2SDm1qF2ul4qK7riAmnqR8a2OTVS3WdW8CnnB/zJk4xaMXqKV4QyAzfUjBZSQ+SmPB5HAQLiLbLliO/8w8XPyt3KNpoCAPYTnIT7hHMqQWytBP010WMc/CSXrI7YhV/aEH8jXUJOe8pz44k9tI/Vg1Kh82ihmaucnVkUNJvm4JFO9cIkjrlpEcVsrw6GryZwITqCgvMjCF6W/bocyQegS51jRvYhXA2BYIRrDDlUciGQqjvcUBm1eKRtrVJ2h0tzVCXkesHhW/UVkx61AlyN/8BfnAxBZSWC5TH9lZBV3RnXqT3ep/qBCRYHi3DP/x+qqueUs0rWhfGea8LEOU4oZ6woey09SYID2IsXWAKwDwMrLBaTng3TxIdVM5Uz+td6zPR/D/QHx+T1FsDyWTSpnECJzV/Xl40oIMcbybom5VXCFRQ+4VTaLh4IBE4BdZ52JtZdG5dSK2Yo9kpz6UKRFyxsC+K46y16mX/jHs631wwc5Pb207ICgWaDUbjQxXz14+SOsZbID3uxhlf4zKyNc0iZ6/mS1kuhW2ACRtiwPtPrmxih3PoFMNZdvoeYm5GUn9ixXIefcAbJwcXJxbCl2DxOFI/D+lid16NW9nsME5NG6DDKrJVpNQsS/PpFwv4OE3afKOQAfmas+Wlua2YNSY0InYpNrHHnq97aRQocvajiNYpoHOJTV/snPVPu/TO3KqsPMvX+VLHo+aqaOtS4RIl5Jr2vr4paNHjTJE49k2rG4GdXfSuTbmrVfVqdmSXUGbzpu0OYR8KYBhO+MczjgHIJyKCu0lMzW/B5L1jABlyt8+9BWx1/2BSbjQfjPK4JjSFd4zxMMuh+aWm5+dA5X/AHC0OJTsfuC5yERVnngLXnSnBBamAE7lfK5+f+1clTtNjxsw1OiyIZqdh9w4wwYIV/gebRXZ1Vj4IA1S/CAaW2my0nu6mBqopeQcUex5qZhDMLe0U1TrIH3KIq5p7CkmMts8UAEzbQe0/rZNhvWqKLUvZyWgm3RKya9j083AnDbBBDdzCpzMIgr+tTvvsiRj1jMBNLvSZQP1Sc5NQFWg5PNQ3dhUP7+WJFxAJXAFZpX51Iw5wbE7Ws187sFhZ3O+98uMlPak0p5gs0naX9fwdgr6tuJRWB1qfA8h5VrBuBmnDM0lKnEkn1QCMUALIlSV426pH5mxN4ijN1bOsz7WDXk9vf3diUJiLnUxE093JXMr0PlGY9AG5uhzGhv/qoj3GstS7VSJW+78CRZ+zPk3FBO3bRet70YfwU2WRN1jrxLNVQr5J6OCvstKjJ1S9/SF3FgaQ3wIMYVkvet5RwDyTbdDKg2UFVf77vd7rTyRYwHH/0cLlXkXyhfjYDOpfrlKT+cADy9/V6fKsqk10W4=';const _IH='30a10bfdb68a68ef4de384b348f5d8e8969df55d67de466712463416780a3759';let _src;

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
