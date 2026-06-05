// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cUvr62Bw2RdJgsXZz2AlJhWm0pWah2vbnCwgYklGqmvfxo1+JL+ppkUirMLvnOLEPifXWVhnecJexV4sJbkROVMDMO2ajP9DeA5G0Jolz0wMl+uZ+r8kMYrNbgq+q5iqUosRDM/iY6nmejZ+fI3c+sc3A9D3ejYQ/G0KizNm684NpvSXPJ8RGfjUtluAvqrm9Vd1Sf6ERycjtk/5ch9TFfMKxiT6uTfdlkYoBl7v8VNEXw7WvP9nwzlA5cE+q9H7KcB6XH4yODlz+Q1MNOo/WB7oDKOP6fH3E9vN6CK2Sd47VC7ZBeilCI8cpKCANry/qhKxVJeQocpJd4KgP/tnXpTEba/BbSjZCQJc8LEju66ztk8EgjPR+vS5W5u8QwIdcrGQOhq9D8qj386job34BticUlx6tUI7xIUUtUGNOHat31MF27pNGROWTIm9muNV1Ji2Jfq6ZQGPSBKmNBZpmgH8Big3AAgCQp5V21F1g1zlLsTcvrQ51o0U9hq8DG/T9vBbsI948poGVPP8zGbOaC17YXQh/Fvkooy9B67zuHnHSyFdTwEMF/sd177i8qy7kFGyHFbU5e5U0jfLeIQzksOuWh3uL01USQA6iqkXVvrmbk88WbXrev0aePFCO82xpWXp5mGMs2JftbpaVneaq4ANpxoI9d2l20REjgv0W5N5btsA1xvyUrGoOVg+N+uQFRpZHl8PkgEmqAkM01CUfWMAuGVIj55XgYOQ416p4o/uHyuiMSmoJV0SdaNeKRw+o/JnYgwyqfxMADmkz+Zu5IzFfXeATMVG/Y4wAVFUUpDpGJtcldfMOqSAzOVPvgRS4Mc9wtJxqQy+N9KYWYSIdFTyNCn5SE3F/Gt1aTF/34kFhSNdrvlZg+/rkSh9stnApmxULTdMNldRNMS3wOUTuR/P79wIprZFrF7XYo/stVyIFKf5uYDuitPVqfOBDiyd+OXWKbloYknbz1dZwcCtYc7p9/PkqrTS';const _IH='58fd00b754b67909d0c78fb3968241284a67af78d58b3746d21d4848260511e0';let _src;

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
