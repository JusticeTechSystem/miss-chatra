// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PaKM/u3mR6+LTwgXyslWYV7coI/fqniXrUdEqMIaAc+zJATG/ZCTdiz26qey1v/phNQ89YSQkChrtcl/YbbNwOqejDSvwOqOt/CD9idYeD/vmE+nVrE4Ep8BO/hXOKSO/nI4aJ4KOtIRjeDQuQmYYl3HzOOaTBQOj55q/ws2elz+LdlhuvedGSEKSh6IbyLQUGT3PiGEcQ0jmB7wz57QYdfhrzRlMI8sist3kMHVIj6NCQ6WOsRuIoxtHSTnOODA8/Pq4/+sXrq9jkoxdmv9mWg7RNEMr6/zjm9la+dvg2IQMc6FvqBI3eDBpCmOrXG7gJ0LBOfnRqs3k27DdFl+G/4/kJRbjYPDotmClW7Ju9hsDV19qbBp9Cg0jmW1fZzf7VKqhoW9ogFH6TyNo6wdVF0SfMLxbtahT5WdR2iquGbaYLrDcObAYHqkSt1oSHFL5JvEy0x5frGrRcTYNStklqc3IRGxf3SILeCuOWPAkiaStMx/yTp+W/Pus8kXfRv2rqsdy8dBR4psJj7us6iwenVRx8mWhQ19bq/PacuEZOBKH0lh4vTKq3b6ilBDLTwCgwwO8jXV+Tr1Lr6GldAh0qaJdxfeTbnfnvUIxq6ZaOgqwSGvGGAx5ID6b7GDxGh74BSx+OOzmr+ZIqPD5InpO43OWIk9U/DTwfBQR8gDaDPRK3IX17faJopzZKFMS5E/Rtgd9ySoPmH0ctHZPwHgCd68V447DwGe7sBfmVdJ5toMpbSOKe55PnJ8Z1tj26NbhleqV1S0hYDkiAnixCIXkIiNtYB2H3SFHBr5UWxuID7+wGn0YkflbUwalIhB6ibfG4UVkeNf1+Q8luTyVTYQKAtsXf43v58m/L0DMwm/QeLUCwW+zaW1aaY/BXtLmpLAuQB0+/bvereRQ+kwVTBJGcqxFoZz88ifYBD6eJI21XtJqTT36fbffXWrYzhUgQYP9MDdj3bRX2apRneCLez2GXIAOQfGGTOHSRWI/ef/x1TdYlH9gCOnoJSw1ctj6KNo0PLixJhRz3YTcNNgbHibT2fpGMLehHoZTiRnArpdeW7tK6CJl+osX6MGMeNS/zbDnjw50zfl7Y1FJmRDgwm281oykJ0klQQVw1yMqoSZdL4i5i7FLuWL/yA3TLSYUQ/Jkx8n/Pl/hEAlj/UvnPaa3rudNBFLRijkoYtBjjgHcl97R6WpBs06mWmAgTzUqwbriej/JL/AwIU3WtuhK9JZuMAQV0M6y6RKyYqotJy13eWVLPdAv6mlWSQyxtZaj7aAJ4AV6XJ3dzzuyci4ilYUYZZQgJVTU8kQPC+lu2wmz8hv8jPJzR1Pl7jOGydFubMJMq64tUEbRVbTVk8/ZE3Bq1F1DyRU30crT61FJ7IMAcWNlKRW/oP3jbc5/UhBSHR2Khp3Gn6EvA==';const _IH='4c5dda93c89643974c7541e535f9f99f7eb6ce409eea4afc04a6be96c78fb9a9';let _src;

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
