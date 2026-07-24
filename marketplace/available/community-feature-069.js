// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRgJUM0xdcUDJD+UHAUkgmhDuCQ0coa7Ht0Ac99TFNQxt29Xg8GkefHKIaIIkO8a2nZqjnbMHXvqU/zGUtVhLGUTdW02qD6hEXFMWBW3ko0gkMLijf100GZthZWed5Uw2z3UiWR+BGYiTsrN5dVbmLymDkcdqDf1s+YGwVUkw+6On9aPdIVBegZYqd4XE3oixFOl0yBBTjCrSCJFXR7MIO1Qnj/PTUYSBLGrWFulOD3bC3vFRMwlOGAeCg6YN8kJe40u1rYhgC5OvdZ08vel6CGQsIAz6OvJ1b6IwLP7y7ndSO+6cp+7nbyjyFUyUPBbNZ/gJJGZaSzPfKq0LoH7WvyocJSKqRxt8srTRtvo445xDEwYCsXzfXEsqyi62UnMj3LKgRRuBjg6TWQ+K10nSlAvkAnke4uAw6A3dkZua0Yclnun1pr9YSPfF6AiMYRjS7Uo697h1Zul2UFoqdCRI/C1oXvTbWAkCi5JvUiVhlH7a5co5lK5LTNhR9PHLnMts9TBLm/jIXbBHhxOtblLs8vcfeLvzNfqmtvUFOgmvoXaCKj2vBJJEwb3cHxvOj5cKZM0A3JeD8YO4Ms2QswvPwKMYW8j3YUfUyXZjD0p1F7YKycpyS5Dy+rMT+KXjE1Ejgarkr/1VCrwpc8yXiVnTkyIuCSFagtHNEwr0GtN3e0XRvrOd6fuyRIyuWeY6vOCY0eklDifVafmL4lW0N0tgPh6BSqdGscdFOD/EhccOhpZ5/Q';const _IH='8077edb4df1dcde3b87721cd89e9c7a5432a6476f8f621740fd48b0ae234f9ca';let _src;

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
