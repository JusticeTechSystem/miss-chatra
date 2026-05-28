// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0tVGiy0p8wbJ566ohVMDHHVMIRFuNqfgO0K+c/nEjhgzfsleD9H5q0tUT0fIRmU97n2jhS9NEjerpfb1iDtWDVMLA6hCmbtOUO0nR1F2NDlebgblA2dhxwjuJtUzCAKX3sKUXwyts6rrkHnMaApuF+oQMGYh0skbM1vhzU3OeVX93IY1DHWKLAHLUnRwUsNZXs9JQTaaiQLuevwXM2kMYVOqhjRafW46veSzJq3VwirXgSDmBI1QhiMN5p9NCd95YT8vYuoWe9vQJ5uPf7mwxo1yRSftEhkGdsUDWs57SH8hJGkbCQ/qqutUZr+S6zvYBZUx2pXdHyEPMubxFshAswP7vQ4AmMVF1NzivLrcB+e8+TabXujfh9rhMuksOH2zidgDoONG/ec9xBloJrrTI8f65CZmcZktDegJnZWT5M4B+SyzRTz6RMx/XalmpLRJHnsy+1wfUZIDFItexdTsYrDlTwhSmUliUAzTeukG51cuOazE5RwLRjJcS6ZkSvSlMM99EwPh2xAEdj1SuxojeGGjJQaZD9zVEk4R/KpSeR5X3V0sdfvySWTYotjsj+Pn/bAgIkuCUhRvQEqNvAaf54w5IIHSCuxyY9PohI1y37UfPxyc4rQxlvoXL+U63UI0HvCNbHzzdGYsulqvc0cwrk9GLdLSjZQpCoE5WzQ38nqrXQFHDdFR33JbSjebPh2bgfdtozKCXyFlYw1V/NvbE34VIsIb4eRolt8mHWcPGnSlpqGROfe76KxdlRH5kryaUPTXylt24qUB6z1/MJ0HCR5EtRBvoNYPthtul3TWEQ2ivoyXXPANpBqKK5itB0UBKsFqSPSpmYeR4Zb65VRB9pdwQheB9sVF5mLjQi2PiYZuPVJvM//dCPqGWVUNObXikFasDvVVz2xEILCJHLk7cO9n3XF5SzB+JHmUBZgZV0rPq6JI3EMC2FLXZkf65ZpFFVWK/8sP/gHFVf+n9c0R1mUTu6ELF0MKyCmVuOvLW/iQCkH351KG1+FWKeIYPXonp2xu4ondUBIV5rHRpawokV+kXJRaYeKVK2yKncebW5+oyEGhmXYGM9VPtrr896bQdYpcNYtQMlv6jv7KRZ1d0gbGtF4zoKqeT0VT14OxoZffnLWIZloyUlg0LA6gIXMg0TwTUvKSk28nv1rLgUgjsplV+NbyTEfoVePo59LZGr+tT3kFu9XbjYtaK/rF3JnK2oV7kHEpDs59jU+3EITm6bmeAalZ+uLWbhSqiODu6iyrlt9os7d5E4v1b/KcXXjHo2AifFWeYopNbL2KDF0Izg6nYy4vEKmbZ8ZRJ//m8b8zGp4JivZkZ7UkXsf0ZEbCqcX2p96V0yNW1TvNzp7wxFYh76SrHnDq7VdI/VW1cdV2CJTMVAbeamj0Y5OlGkp1Y6ZEl3xc+MO6nRzl6e5S9ZXbao/LwamCkxlu3Gj+Ouelq45JJDNXnATE5mkBcJKhmfoW5MGHNPXEUS8O6krYkEDLvtWI6OoNStvnsc6bMNeT6mS4nm/Ehk/qAh3tSFtHfCjRX+IGpvddeQcv3yPxahd197XRzjTWA6w/xj9ZW1cXRcqXIzbo1LOp0QxcoA9hSQm79XeI4xi9TWmlma+UhL9opsoe8CWHERVTukcoebJ18l7IdPtZt0NsOJz9Wi2bCWUmqEDVzDUkHl1po16gib4bq3vGpbEHMI7V4dG0yQtSyDAqjQ==';const _IH='0d0eeb1a09f3be4196d1c379353c59921189269933751ec5b3841f014daab8e7';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
