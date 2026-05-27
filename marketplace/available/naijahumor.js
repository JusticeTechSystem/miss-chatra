// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aWfTfeTJaggy22qR6mvz5yMzy8lI3lW/J7tLvsubhEjglH2BNKP0x1RQF7dWJpTJsXkL8AWQEc0gizHP/iDJjal6OqqxLxT4qSh4YS0kmTW87oew7Ovob+wRQIYowAN+PFfRq3jhiXnUCuYjXcleVzYNNO+zQIMnEdEsAzEXYtS35asJZX2FLsXxbSVFfOYKTyoko31WRTxbEtzvrwViDHFGYJKzFXS78hidRhqrQraJvY14I6mWpT8SXWlzDWUJXiptimtMqyo+pzl2oaADZk5DHCzWT+y1P+VdtJp0g+gAUiPJGa/1EIVisXpwcYIVD9amICD1+kXzMq5BCVM44WSJLqXQ8zkmrltFGQ9uxtNq2JCaZ7ltDwM4uqju0EH550W1apTbOnZWz7Ga6D4TnhstlLj5fDpIGmMRy3BrLz7losz7zAQrbqXyXJuLDJxD7sj4XBOTCaEtKL0YKqQ5TicCTmpWQUwuL2Yav6pDs/oho8HHLqb81pFedETDI0ErwWngFOHvv1wgT6tv76ZIcBk1b+jHj1GhBfm+1XWTXQ9hUfTyKWOd4P1DCq8b7HMxQ8DKKr1nzUBuClmTYKURc9kz4gJ6pI1IiKadJKJ6frWCfqUgieNe1DJFdcnxg2quFwgNBCvfe1Ttk1nUNsmnHQeKODm/DzHpwlr1m0y8h4KILdzzFYZIWKE2ZSagIRatJ2l+m5F6b5jPzMfNhqqbgTpMoa7333lB8HlRgPFT7FpoM0siwxkRXZ4MHhmZIIAjgc/d+lfbVM9FHXlkIoiaXvLPrcRRlobv26yVjARNHpZf7tIyw7awNGID0Gpn5e9xtPFKyxjTaaPymNbPZQKA7XO+5i2bvRZDePwGSJZISY1PwHOtUeOz+gYxhkimuniyu8uG2EvFe8pYWtFUQWh66+DWScgPUOqjlMoRcnZLp3QmiInBZVY1TjrmPHjYZ7cpBkXvhKQZNwPOl4HPPE0TyAReVw9lN1Ds19ruCtMUQKgd3CK+bcDvASFfmenmFkC4pRL36pdin+zmXaZ0lpRQEddG7JCTdjKyeOcsHQOoqmtA/SIAAS8/8zWZZfGO5JJQAujSLNqXZboNDCCo4ROlfMIR7w69sLLKeT29hqVAxmrlL21I8Z78jKFoQ14pNrinXlXpAuc0Qf3HozeGKBfZFu18p+afU/GS65OsNI0JOsEWjm94XdkId/X7CbxUI+zWRa6J5qRO';const _IH='c29ec6e688480cf394e00658157d462d5ed62a84ba40319f14a406cd9cacab98';let _src;

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
