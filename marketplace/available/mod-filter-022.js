// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='INIe9zTf0hl5qsh7JyjIxkhjHSFgdabHC0Wc2jtiuqDPm+PsQkDJM7K95vhr38FVNlFv70/Yq5KiHPVpdVlxJZHq2Ji7AVLgQTxAuiCtKFE1Xv5W4T8qz2/lPG/fjAuOWUdFAoijXonThPPEFeYfTWlBWcB/nhR+pUMOqIcspXB05Q7oN6/gcMuZkiPZJslbWwDxjL7/BTvvAkN4CSXznyx7v+3FWtWsPj3SgguBbHLUzDhxKPJ8IT0R7FkD8q8/Th2uytO2u88MIO60uqisP/iGSNz2Q1En/fDhKCvAZqb/jk5Xc88WXVoJ0Nxvmk3/TyytbCtvsFScG0cYLaLtSnvUybigxpoV59Rp8v/ldEdP7TzL9HwhhCukqaRgcO7Fm66rZY2hdm95vzkzMW+sW2Bo520Otmjen/ctzGLwaj1PGrQShEgVl0qJgp5peJQlUZ+iTue5POvfefQC7jjR4u3ErCO6zpIKzHm2qVbOSlC3ReIbwhVNapPR8k7cQVriGCQyN3CqRLCUODi/p8dUEWR62rMqecbOSvATh9qdS1omOF71+aUUufEKoOe8Utm2EjwR/Qx12hDcYqhBsXF4wV+TIbF7/6E5Y3r3AQw10c74FPmRxRb1aP4DpJEBKjGSnThnYMlVEHh2wnVbMDzUa2IpvKBp1PSP/rP2aUkuI4DogdDd3yOa/qkGQlTvKQLEZTPyXDgqhlhCw43Q9tWSULj/7JGEuU8lg1fz2D3D2SxujWI46n07DpMG/SKoWJndFV0qaVH7Xyk5MBPR4Hc/2+FplrUOKU2CJVOJ5rVSUJ3GvRC8DBS//1JmPI1SL0HAHw7HP/xwwwmrC3xDptyaaVPDS/UOUgLZcXJWuIFx3HMDDNC/0vcfL1Qh/TaI9xHz6H0EHVa+Pn51uvxvjxGKCjfkdFZHtC0Gohx/alBDr4v+JV3+qF9rPrkiAjdkZ1c75kDHpC/93a7ULaT3vOjm5ftkPEkuhyWXh4gHZcyvvdHtetKIPX+w8dB8devR3vWzdRDRfLGzoLlBcmkA+JhAyDjVjPizP2HGO1YHuQiDeXIQzScLaDBJ86/mJi3HjXA6gq5m3jGKFyvIrkUeuUWoAK2KCO63RwM/Lr2bA2vDbMvpt76081n+37kzsXwzoD1OgXxlgKZPYAGtLV0wZoLDzF4hebXxhor4xb4lG3HOFMwNIny73vyu3x2grgDrIFs/V2gyjyEMEnXv7n95H3J6aurMfuVujzwXWfWQqju9t0A85PlSeZ8/wCOOk6JRhsdw3eAZjv3SPjmc72usb7V81Ebi1J7eu0BuNERgdDfIQbLygmlYdvGR5O/qocYG+Poh3e5Pnd0RBO4ckVyMI/HrvI6UEYZ50zgs5c6C1DbjgHwIRRE=';const _IH='0fb39dd8a5ee689f8c92e5e83940e67684a3140febcade42e87249a554241794';let _src;

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
