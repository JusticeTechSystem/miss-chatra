// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/PZpe73l8iv37POXgCZ/FUvUgUeNhFO0Hl2zPDtbHgBDmPW4zZqpkDDzX6paaSKjf/m2lrANK1DYKhoFYRnviBAZkuO1UHQOJ6hBCtW1Qbn4ycmhOhKm6LSZ91aL9lZa4gV+ll3pHtzBwvDlQP9lCTjKgNAe0rBHQ9hfDYS7rNO2UsiUuXtzrBUJpVHyE/hrOVaNc3CMEx/Xx2PnZ68OtZTK0AQbjUPT7fr+JexmgYgoRlgq2EtbTwwHo+FdfmXSRlxjtZ1LlnKCNzd/nnWgP1U2fEFcOzjSw614NKqrt5cy3fkPYSIeHKQeptBXFWhALjhsaib54uShov6Ay9DpSzdSSh2T7zAMQI5+FfwnY45MYz74RiC2NjDuLxTQyc8YdXAEMwaejUrqoc9YTswvLMNbaPHCbDqXFFiS1QryB89VWXYZjHecYerD5EPL+QzRgrWaMEVZGa4oT9s2+av0oaqZcxVWngYGyu9S9Opp+MovYJ4/0wmzuMdIgzZI0rLRLbP2NUUSnM9VgMCIda+gIHfD2TnL1ywWSIy/M1aRnBTC1Ct6/ro90ZhEKfjtwc2q5aKm0yNuMcwA0XdjmD2Ytc94gdvO2FLAn+HWxViLLLlEd4AhHX324n+QNhvaqgVGVofTLCoDDF9XshqajrL719G/s014KEAKgdWF7DLQ5GE/Nb35ShOe0z1PCMB5wMRzVKqyGtLkA69UWRJgmpG6Dj0Tkx7dzP5knNo2V2PviKIGFUQkeYTKKir4Tm8F3vAOHv/flfaKr9xtE0mDGRkQjbIayqa5VRrri1lXwRQyElvRRHir3lcgym4GXWaz0TPLncg6sJLabm+0MvfC3Gbcjq24XET1ICM3JAoHaLRv7bSGzub2q85Gfkg37ERLoCH3gfiWMVy+qqZdGE7AyBvU5GGT33G12EG6nD0yuC7bevFKtvO2R8xd2Ne//DSRVfC52bjmT7WYUu9N+ElKvrqR10iR/Hig3r63E0drCR2h/LxERp8/pxe6hunGWFsvoqFejzHgLEjEpiK7CnkmsM/GbYJPMMT1hPMED6RKiL0H1mhgBl5aJISJK7a4bipgiyzoB6wm55qTx6cDnFColiSU6UZBapJnWTKtDyfvalXEjomQHbylgZf7xS9jtftvLlplzeGB62FiZx8aMBxjuBDQ2yeQp0fLVC9GDjShpDVxfysjHU5EXgt0KoxMwxP3qvkIdnkYZv0=';const _IH='e9c9845855b87a57a81f7ccb2b2dea2fc384e27c5451a3512ca86f58222969ad';let _src;

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
