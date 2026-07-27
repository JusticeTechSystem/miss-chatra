// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRxH9zqjck3E/wM0rf1XtvpuOslMGkZpXq1DVgFoaXu7Fi8v/P6tLJslozHHqE2WV7/NthCj1vZZccuPjANe2/SsqXOGwNPxfbNhnMgwHquRbNiONup1PYAneiTOSYBunUv3EWiY13T/gHOqOjiNetNzDYpPj0bwv8LfAjGtAUM3pKKUGN5yj4AYtnHWOR0AZk2tvkTF77f8BbLSOHNPF8Q+LNt8bzae1/AnBFzV1e71wa9+Uy8OmOXeLrNdgBR7VQ/xZmsXbCuopnr6GiJSUkXxhw6wtAJFEnTuTUm9M5qT0JDjAHDz1bmd5r1OdAJaRT1x3cKUFR+v+P9pdP1CbiNCZLvqtvBRpDIqYI1aoYLEfdNLPC+23mA3pdjX2/cIHspDvmmmGUNCicw2vpvVoUyH2mYklCaJBEgah2OxUmK3W57KjcJrKyrrz+tgF0lDuMy84D1sTfeKAXpbpx+CgQkYXE0N8FT/2AUUNHtXHpJs+qaRvt+VU/a19vDqvWM0jgyS5i+u0C6l/fhxCUQmWJOnLha03N1QJrSYJ7OCiYqnY9B24zRFinugh7TSE4TYX8bWTcCVvRDierJPqS3tyvwfmqeoyii8J/oiaJ9T1mh8CGKVb3c2TfKbb/k1xM1n/OynY/2Qb9IzjzyOnbceEpwcEQ34xtUQzdoxvL6LUPk8YpXvUsGywSXsfs3tfBp8M6ajSsW2kWcVW+u+Sew2TBLMeOFGuBCdunPzJ5mh3YsgddVGCI5HkP6kYFpP0Bou3mprDS2pWQE6EoLS0etedZYnb6JwSyCnXUJ6niqw8UkqKje3JQzw3p0TyZuaDp5KB87i+ZGce/ITLkYltbXLq5NgEagz13ceZCwrGvcwKFcEGPqnb2GaT+3O40CYwLk92EgVcK1wD5KkN2ez26TVAqz6jZW/9OIszCMM916WRNvf1u4ioTyKbFwLH78GD1XhFkEh6EZeV7cE7xVJTCdXEH6edzWzfqDUbUnq1w7F4daU1l076+bwUkUj8lBJA65l2p7tt/aJZ9LkF7YTIT6pqieqPvS69N3hIdkyohpVca5agyAkRCfdKipm4uUUoWwljNKrNwZoUVGiV2qxkVrveUgymv3X/9XmNH5KfZ9vGBD8CdjABQT1Un9v9RzPWpeWkUIyik02bUUyyetgWIY0q7QMxizhDrDpSf+XOmpS3i15EfGcd3gOympIxFk2MMak+wd+E3DGtJ6ATqp/zXXBCpA79VaOTmw4Gvy4AfNFY1Gkje0rCPT8RWjPFhI2QBXG3+ypFzKu1E1+tSKSxJvhgN5RvtKYnfW46p9jVgkvKtWWhMH9cqi+kxXre0oOAcoOxMAKzOegly91dGxFEilxx1WFn4J/I4G9p5KoDgj090=';const _IH='ad92db6c405b34bf9696445d2cbd2301917b4685f70fee049e69a6d1e26e6fd2';let _src;

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
