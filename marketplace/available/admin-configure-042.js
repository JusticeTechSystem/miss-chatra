// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTqVVX75MUtCM6riHQRuQ8Q1YlX4Tpsm7Y96XeFBTS83JWCKZyzvARNMzSAbF6ni46I1TNq95tOO3FeczpdlFi5iAO/qgiXWnO+8Wx+oLrG2OzsH2i2cFq5uILtuV26PGh7GQ4oJ1sD48v90QZUrT3DiEvqGVx6SHfCn/o9Tdunf9GQVmNHZxslLrLsld8A/4pwHDwThvSuN0BOnsro/y5GarhaehuP3RloYlmfwBMYYr7Tt4D2kd8N/Thi1U8K9oo+I3cdyohuVFJ5hZUrznhAyEezSuGFUqRiVT3pREVGjMeoV8a1R5140/0aWLSe4r/bBg7iMjcZ6eQBW1YXMY+6hptXHUPIjac16xAn1qLBBztUzqnkD1Hm+CPEFOWFVbTuVfyy+LLjevkUjzIwxIwUeVs31K0A5Ef2dlmITafcVzwtTnE7zs13KRCXxmKybl7AtGuYAI6QE1E6a+mVZUqOvJaJWf0hGP6F+jGn2eNawtC/QOgUyf0xRp7nCEKxdFxAY3V/YdH2MsrW3jMn9tT4SDukUbKUhPkLpwk/GHjQdE4DkxPuhdOeCubZtJAln4aMEgDmWLR222Yb7gHtzdxCtAN+aRPVfXXUOjjpNQ5KtVpVrx9hlz8cBqnIwwt39M72IKnQBgIf/AJsi4jFhtlJkFJz2b/fuxuxvSh5sUcAGsiOlZragGfxIWafg2ZxxZg+VFKtGJQRwh8p3J9P6FrWALz47eJqd4zpa0UV3Yppz/FWytGLeREOilDzQqoNrSS1OczdWP3C6V2M9uwNS4I97QJ6xXglCpLf3A3VMRpUqK4P0tPwZO4HBqSZfiXqh4N9m6TsvxNRM+QQpxCOoyMSnZWSq8xoLnWenTORLR0QIYQjQjXbfKc0xGeLeBhP0sueN/tczj8BB5Ojy1SO5QCobGiGagDQekNkLFqpJ7tF+pcgKoFrlF2l3mjRJQ8wlszAnxVJSLpBVEnpTcFLWuhXIrhDcBhStRzO8PVsuB7xDviPuMeOkm7cT09E2524whjfBW7q1tSg+ztPFMqN5SvOw6U=';const _IH='16164f36418f0b0d34817f0b45114d2db7ac7d4d15c715e79f02b37c5415f77c';let _src;

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
