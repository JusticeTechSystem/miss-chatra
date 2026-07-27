// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSB9A1pRP3w3S7savVRrmm8M4Me+8ZN168n4RFPbXp649efRaaM28yrXM0iCTqgme2Ke2PHqceYCugEMMjv+M1IPhs+q9x51hJia6eHxF2IE+5hhn6gm/Usc+UwTD3goMC5cRYm/wIugI2Bdt0t0EyAvXDMJu29elvHruic/ca4kR5qfZnhp6caBmUK26tbeMH6uC0bHXb8xzB1FAUr+JW0WO/Ij74vmdAr0995qNWHRl++5mov6lB4Psha/rvGcHRYxEbsLetUJGzfYx0lEK5VbzWHPOqXNbKkD4qQOUcYpN5nGAX39a8WsKyUtfB4KIsscoonpmpMZ9B/u6KInsj7td/rdMypHd2x8Tn/pKP7bG9tOmVmIJcdZERuf42/1hILG2/X8HAUoWmCYXWc7m3E6TP0mBDXGtHUdt/jMfiwm2UUgf4pC5MYeawajvrlwWXIG14Fs3DaAyB+biIAPqsgUEX93FxEqjZH9/ri/1bL917hbZlJOa/Too9OIRlQR9g14uxyi6TzmTxX+uaxiM5/tFhkveGfLRmD4B3M95rKEpuL1mnisvhzGTAlEo93KjuilBV6vnd5bl/bn1d0e/A1uHaNf9R7XEJhicegrNbBDUtZBt5mQRPXRgGclVCpiu55fROaAEb3LPv2uRmxblrw1XWOhyPtG/vV8REPTNbge2Rcci3GubptuHWymaMbpLfPoxkgoJD5bXrAEobrAACgpAQWGTIqAlvaISu4K65OHXDxwCnSS8HCVtRmxpAyY9Guiv94270AQOt3iiMhr42G/NQgYHALhOYe';const _IH='de503b7f2d056b6ff23243bd099541ebfb80d35fd14d4fd4387d5c5df5d3ae16';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
