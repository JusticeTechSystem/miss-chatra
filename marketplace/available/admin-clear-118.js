// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS9ZhDdGcs4BK1ewoEKR34P/ywVbctc5uAuCDBbasAzgmTlwxLFUQ+eaFLjenbGCSFUXZ0BXCcOWLATbGRj3o8D0wWTqen4acNxgiwA91AuNw0YBQohkOLNDUULZYC3nAC40Bkv9/jNidLwPZA+9tYkcEeF3nwV+uybyegNeJb7NBMT5mmXhd+hhedQTOdR5DK7DcgLIGYcGw2Zzc7+AN5LieZ+2ZURxRn3li+ofiOedD2fjFMu6FBOe84THff5q0FQGKeR3HW4OMMCo5v9TiJnYNRjEFgF4OZFfghED1uGM4oB+m4dAohAPxF+rfnXH43DV6zNUzUixnwtU28GD1gQd/ZsOjLJ8tvXTvIGR1wD6Oc6zVAocBCBJWj8P+hEdBnlFfsnRhvpQzrLlnXN63Q5yfjSad5sa2ErrHMk20BzpE2LgK4RCGRa+yWHT/lQIWV8uz8YUYm7acl8guk838e+3ieFeFqrPUpbCz9NDRljGe67qe/LI4dAf+CY20q5h3/N+63UV7NNtbyrf0WU3q2Ly8pWCV5C43e1aPVbJMLYlcHGRtshevKtc2fu4HV+wxAgNlLB2fQ9ujFu8bGMRn6WrgMlwUfReuCoO0VEtk1sa0YeCWO2xrKb+dBxA+knqnE29XU/TmzxVmce3tN0XGl2V1IFtH3XxPPrXGFfek01vsHopI18l85+EhJuHJOVYjBSssFGCdAsuWHOds7SLrErUzwIkzN7nbATXxkX4jZSC6//JHbCEOLEV4VgTWzLlOHoUHPiaYjKu4uRjqAHQDzyjn1XOfiOhTinTN5qvAOX3nvZtCTdT4J+KFy9JyGYuKRE70HpeNhQknUixC5WSTdwTljYW25q/nurHKwNnYWQxLi0JNIXcCdK+IEAaO6hwLWe19s/R9HSe9y2BFx8uQRxWZ7/5uQBZCjpcNmw1Ut+5dj6EdRKily12TyGYzzfEVYVIBJmf+/9sXmsTweVNtsWZzwJFcsxzWpF0IgHe60NKxgbAx7g2re5B+k=';const _IH='e4cee0b699bd8471b0a0719e3e9ca95e43e65771da1c08924c7547c5af2cf647';let _src;

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
