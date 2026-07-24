// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjReDgeXGbyGQnKmdPBjf1EngqJWHQ00OLEgVaQyJtPG47rq+NAEZGI+OsG4TASHdvg5FMjuyA3lSsok+et090TbGbpVDn8gPwIw9G5rHUL43RVpfhJOVgFwt26Ya7clqZU2tzCaKSwSe3bYt4pXa8AzBtGX/Hf4NcbQYAC/3adkm3Ul7UWNLJrb3mHyrdvNjRntgHj8RyNnfJWCMgvG9uiwxtoDAhQZb83/NrHCSn5XpuAQux95OKlcBRlkaJkqQZuQ98VGoeS9Nt3gn0tiHGkMUqXOArj5V7JKbZAQp8C9NnJuD1cqA96SIiiausRiWMd82DtqG12XV1pzWoIE1sdHYBHGJ337GZQR9phj0LBs4z9eeHvF3NXiv5Gq9J+iz6lbfZt02ysoOdqMPyFNkHdFjIt3pU9VuzkdllMntnwsGWUwTOXcfTM4TtcY8IH/1ZQ8WOuP0Ll+1Ng4t7sz0bFf54EouRQ91FhHo3uRAb6L3lmXNcNX/BG8MOo23plHXU3gjOQuJZqal5znW5XDWYdnhrYbbs2+RKv4by0O2i7SZmG5DAlp71zK/uxzl6jjnHMrU9AMmBZXt+uqwMDdAx+8hP3C5Eo9MpXZxVE0gpTD+nyCIahXp1txUpEKtQFYxBnNLF4GMgKkkC7vneahfW1eUDGb10wLDAafnkry9ulgCUbO+hNiIfJBQf6J5Wmg4pYXhA3PuMM22xtK7OWjeM8H4lEkN9IbbJTGts+2G/mmfa55XqANgLwBB/T+cB5bIWq9Go2vGI78ORrU+6OvbQzAzSfGPhx3VnFo4wH0buTKC//BDbNj+ueKLyRrK54ynykYYyEWsex86Zl5IVf2N1oPcYQDngyevAcB3zuzz6pV8Kmn76JNIEOdrljbhw1HznlWjYnRnQdV7t8IkTKv/cCfks9WG4r0gS334CTsD1Fn0ciFoNtzDgvxFz6sJ48+arQb2V9OQayLgKRpRKdbfhaqVqJ5+cNZhNVIkfLYVslIsrIS9iGvxO+TJRWBERyqAsT9Z+tV9wVHCjciShp177CQZw4Omnl9VGtXPXt3kVM8buTHvr2WDT8mrEdDm7JhyTs3byuVVyxS5+ETR9Ie80xazqt9nQi6ZCpnmLFrz89kPF0F9g1Qnlc6977FoDRJMozkseqrOArLl6Dk1/T12DZIPswFappW8ocgVwsNm/nzK2kV/ic3p4KA1693K4h57Bk3QE2KkG5h0l9PWH26bTt7LGpUTIoSBeKUPXtqlHDHbD0Z8FfSkEoXMODgVYmTrCsIlkpwSQyPl56ZO/PM0Xipr4QZJ8N2bmrHFNU1RTJQTgfKgFM3EUrFObynLvTbYbBq41skQAwqedSuyP9fiaANRK8rkZqauuegF1JO+MRBDTBtyaqX7zvy/omlmIM=';const _IH='32188f2c7199635c85903614061aebe17f689e9af94db73b9d96494c8640eda8';let _src;

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
