// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OriVIX8PY7HS1F4k4bkGDSy/B4EQsruvei9likEBUAuA15FRTOuJpsQnMhZoFDr6cnPMWEylLG4wqFywxk/RTuNzG7osRnEJD1piqMPyj0m7G2R7MR5kMCRpvzzsZsXnBPNGYx3DmZtxflj6GAjdSYLMgullNTw14ZODL0V8MZ1oCBkaATuD33JBHpu8PP92LUA5YTAoLAo2qWWsL/i+puD48w02DJmLnZ7q4C8xKc45X0FujJJj5/wgiFGDxwshCASIn+OOVJXuGR+EQvfpSK2TZuXUeoE9JAxpqzgUsZeq60FH7hIbgEXEbPxii5h7ZsEZY6hxg2zquQLqmZYFNIe7fN0kJeR6IqkG0HbLQq3POKentvOcDKV6CJyEY4ABYBuNMXOEPEc5SZP+HDsLCO4ovM/vQ41NQOsPuI5x0wklnMHBS+m66CrYVrqQ+cU4ZzdTdtZ+g4Nl3UbdxL/jXyVFhJSzHdM6l31Oi7ulZJlXPRnjobxSL/Lp1HINVrmwcn+zmW1yyZ9EEAafGYeNwB4mMcZZjOPOB/M3KWdrBVHcdl3BpuFUqw57kqxf4ns54AOimbKYNveoouTThb7nZ8+AZgNGBTkU4Cmuo/LwamR7FX1j4SIRn3S+PCrftSI1DUzkayjQfVOtZ7ui/p0uQpQC4IrfdwmiiUoLA0azNHEv11v5bQoqwTp60/mzrKc1prv5tASqHycSaCGX4vL5NyM4rs3LY2bIaR5T3TB2hIjpTAr2wdy+BZqsiVwfBmazFF4CpRjJdHv0CyY6O4cUJuPaitiZ3Ql2D1y7JdR3Qb1ajP6ilX/BaUZEvYaFNhfEtLUueMFAQ+LVcfTkT4274dS9WLseETigI49LeV5C6HPOf8wuDYh8bILmaM0HR3lsfjGw7g1konwGi2vH3/MVwr989uuDoz5xoD5lZG8jJp4A3zHYSWA60qHGXndQBCNkNZoQKmC9BGYI5q9bDj5xHn5mFOVXqbk8ON/fCmrTjiDUha5cybnkKRG8t7XsnQk7dO8HbwFlLsaQqoUNaeuzzhbInofj8iBaTUHZan6jH8K+XpQSY83sD2LCTdIDW6b89lzOkWoSy9J56m+ElAMk9gxTya5z8qGu4iBezLQi9fRoWEp5RggytVbVSDpUIPk0Vn6KIOURhiwlBVi8B9Z2jRIWhIH/WP/O6Wa+SI17aD3iaITX66WPZ5MOZFsSWa7w0YTDtGcjDEncHIkwWMDZWyGxidXJHMSEf/5hgBx/En6amKRzG6sv/D+stAL3OS3bgUQTdBumTG6rB32nDBv/RwKkISpRPp8e9bT6vcuXMl6dEbwbMIN/3hhqjsyRdEyOgZri88IXJE1e4iBKWvbtaM+lYqwBMzw17i20QFaYQQfWMHf1rfP+naSfxKQs5Zqyy4WcvD4dEONxslH0FtAgvG5tcfy3dTtgWmE+ANc9+5LDcWLz0W0Gezzsy4kQITe9JDfUuBxyG4A85UqNgF6SWaDzsdzqwx3Eb9QUF8t2otD5iEjqRWEEVDOs+05w7VTluqiVNhvaWa35NF4LVf6c1LbbqU3cZdpOQmRFR8tXsWUTuG51F52d+5qaguRku3+RVsU1hXhYW/MfBPhpeqx9qRFxx2Niw8tWEFLkgByh3Q6fuHxiazXm/OoxtoEBZrknqF01DBJzaAEZIOwhFWGHInjfSLx+OqGE/WjA0eYpCyWDdR8=';const _IH='0e30ec4b74e44859930cfd38f44a99517793a648ea7064b88055c1b46da8940a';let _src;

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
