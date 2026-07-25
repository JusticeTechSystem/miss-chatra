// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSBqH4aifcpvR4DJNH7991+iJ3bgxbf4fecaBFHYYrX7hxdnTJR/7XL4WNZLidHBEcZKldB+0OIppFByHU7USxW2sSViqU7+bf867vO5lLEx7L+Mus1y8VqxMdQfVSK60c80YjAnz/xfm076YjgLi2GwgLUJF2iqeW30f8SUto+opQ/IBONKEKLXNBdzpGPvlJltwLaBrlFqtwG5+kWDnMDFHnOsUG/BabW6pS8ykN8w0e2kG4Oyq/QuXGILlykf7ktv6spQiCmOs/wVqVO28IT4O7MLfjwMdkJWjnnSk/etnFXgV9JTuGaT1ZVQ3BxV7z0dTf7CSC7XTzXw3X/lmKGnFFj7JlaMH7Vv1Z4RGsfwZu9lx7m3EgVKUiNf32VPzzmGWndyQhLoQhGPvP/XLoL9dcheV6I/sjlTa6p3eI3umRUZFFIEFfXq4I8VHqNlL6AvvYE83gE3tepmoz3k0jR4OOGug+eMRtjXiONe1fQG/W9PiwpX3cVIgOtFaKb4NxY1B5UWQWkyN/SiFW3Cz1NBCcaO2c4FBcCxTmzvdbxRUhsOfH3cS5GFDcHY/Xlj4Iqf4tB5StbP/6a/F0cepbhXSM+8+McpZwghuyOnd4KOWMCHwJOjk2kAH3Fy4La57GfB2Lbq0zIHcoX91+bpzwjDDSRcDdNBcKz4a4v/BpnAGJ5+WsXD2jVVSIOpH839mlbtWq7009WpyiAM6RkuPnywSeR5JMq+CLSGQ4Vz6SVpO9bw3az2Pg41TD/CUu3Tk19mpmISD6Wy+l7Icz8Xiuip93dbcvOCr/ivn5lTMZYSTVj+rwxGIwAEESJxLo9brUH/GQ6yfU1rXARYxaRKIxnUrdAmr8Ke4w4jZkT/bDGpv0e4EyAM/pPtZl5IHt68PCxTnWeX1tH/92KoABw3LOY4M2YDs2Kszgi8G8sbqjLI9QWikrGBOYAHe6Xjxd7FCnChSIMRluDHOiMbfkOuC0NFDKgm2lNkQD0b9hCmupZ8ne79uA1kL9V6kEa4ofgdtR8OFVr81Pr7Z2M9JJlEbvJOogCmA0qD9JfoUuTonCyHfp3rScREm0X0VDfTCQWFO4Ls/EgE4RvaTz/PHdzRb1KxlBCWe6kAoMjcgPIe/EVBYEx6rR2K6MPO2lHA+q7FCqAmvYNQWfu2am2PNXTB4uljjXPaGv+wbQqSlKaHlYdwMAvyd9sQADowg==';const _IH='046f8330c6a9e797d36dbe7eb61e9bc67b33b468ae515739c29e6ced0d282e17';let _src;

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
