// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTNgHvIrV7U8kPLEauhtJmn0hurmgvpdG+qFojL446GovuAOI10NpPGp8v+zpjyhYHSucKJCK+n7AOyc99R0YHGSoUGMcFQ33BdRT5xPXDBkGy8qUI/eaU8zvd3NYP7CgIkh5cXp3FCNrzb1PCZ8NyZcice29v4EuRU1PGUtWmBn+bfT6MPnpb0Y1sdHn0F7+nOJm+Qq4sXl0AdOwIe+780QKbWoskQLosVRV6YTaf5Pd0qzXsoWSBjR4CVuzUcmQrarLtpZGGOgiXps7f9t+KkJQfZ7RGKgdlo7Uy5y00h2WuJWKbRBVAtTepbO2/nivDM8sAVWRUXzAepeZ5v0PriDjlSwsngJaKzgffQ7L9kbNYpZ2TeEBma+KdoAh2eAmDsqMDbMuuDAiAq04bCAwDJ25jtcYFXNwuNHGZoM7QO/vAMo7VpPJDOEPIDsWO++OleEb+krtqzS5BPwSbDCdnPWDbk0qlI/LBEymIn5NCewkfMq+Vu3PVNh+2iiNlWyINPGo+Rt3D5aojPfqqmg2Ks7KoYkhbAgxM5FIwfSeL1TJsIoK9O/QIjztkSyM14HymXQ/m7V5Q0hSP2lrHp/DifGLq6XuUkZVkMw9i3IdC+dKh8EBGfgGu2y1ym5HRJZAdYHDJJ+euLdMN5P/QiQAG1juN3AEoBA60skEhc56nByJj/JpNKG0yk5rQDu8TGxAyy0PVevj3sz28VsOxS6w1rahib887Q963m8x9CKWAC3Zm7C1NwKH7tWXSfd9d7+WdLLunX4eNoKuOv/q3j+K8CJPySwwVJdg+Rdo+LkyDzFd4OyUxEhwr37nHwjbbuoqZ2iP9r1oDxD/KJ3azkrIPMJuY+4r76mMZnGHwWdpR8z/b/jrAhNX/S4eHbMLEdAN9mhSpoEj4h5d6LO9QRhLJSPrWiQ28MYMKn9GatMAsXljzBB64XKl4g4TQKId63Edw3rDE7rmHWRnf27Ho9KtQbHPlch5vyuteJL/Tpk+49VlSHvxO3KMWp4oYSibLWA1U/gdk1bI5lilptEvfLDZ7J7fU1B09Rf7EM1+ZLKMsFKgWh3CYqczJ1r8J0eobGVRKDLc9qaDLV1JOa9c9pFHN2jIlvMsu8FG4sLdtSrJqQ34DKlCXdRO2j2NEJnxgGu74bprrSgLSEHOyLErmzbZ2/tw4CPPnuGTeKhSVF8v2rDro9AL6N8kfXtq619e9+3sZf9fTvf5bL/57jRw1aLKKvpkHC3rrykVXthPhNCwrL+JyaSXNAMYTvFAyNk6X6twxiaYQw6yJ5NC5YIB6uqyb/X29TFcE9NnkPWSXamGu2izH0d9NxzWSLcXFneaHFNgg0Y6lPfmIWbmqrCy905fHmxEo/G/sD/yP9';const _IH='82086422bd34610f8fe9368019fd84cc52e5435ffb73853212037d0a2b659ff9';let _src;

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
