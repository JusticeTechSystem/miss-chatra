// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTYfPINY0zciVbS6/Lcpc1nR+/IaVFdPiFldj3EyoC889aHEgCajeKUORGCoTLPMbEb2GNKMM5U9yIQcO4P79P0zZB+mpTiFNq4SW3PkObk2MSquHNMYixf/6kUHeAk8V4dFXh2/R6SjuWeIqj+3Mqimf8yBamkNf6ZqK/Xdzqacst/suJZAam5KaThUFtu7nACCVX9eqJGqNiCDyLm/DHKvu1tnt2E+51EtTeWCH/NQzUzRXVmx6IX6Ofl4OgdDt+JTR/EL2jJ061z8Bq/ZkmN48Kmc8rvqbYW6SIO4lNiz8ijbjSz9CyZT4JpW9R52prymw938LAthUMheHgnQbtx/n2pl0EF05PRCkUpkNGcojtXYrBbMFWUX5PKOWwv8UT54MeSidrgm/g91AeMEaMZgdttJG81w2mm/CnsebwmMayRXvo4U70W09x3YO8c3U8QTOGDl9VTTEBmzX5/Bd1PnChUsRIYS1GWgNvgDPWboit5C48cJOaHnNal5dEOkS6dXJpGgJnXSQzIlXH1NnIhgkskjRwtw4LSGzHcKnixeQd5nxDeAP0PzALeELoMco0osn4BdlyBTYy5klIdYc2wm15kGAx0fJe4Gvm7sNWI0CaL/SJqyMAIPDOF4j0esw7gLtwrCeB3qVNPK/JNIabFlMRTz13klXAxBiErQyJEl1j5nLbWlagCiQfho3QwL05UwQTxex9EdwWMs/jpGDZ2ajYvYQGC1vvG3XAqH45JripK06cx3P/JJRA=';const _IH='179d0213c559d795774defc50116632dbfc293beff70a21c04f25d363a779697';let _src;

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
