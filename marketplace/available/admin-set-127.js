// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UCY39evO8Efo0cHldxgwi6zjQipmwJDiSlnxDCDHogSd/iTkF9R1MAjbVAIpwIXiSRHDH/sqePfM5zSQ1yow7PWhSLHclA5Yo3v9Gmg62R7p2bdk0u3TlTG33cYQuWLcFiSPGfUwWuV713OmlgL5aR89UcZ6jOtMum8Zlo9o5BNYnn+81a5Hmiva0ydD5GdZ4JQcKbYIIRRaRZgAduSnjE5IZeePZwR66HvI8K8zYF3cAeMpyO7iDZYSbLGw91ngqTW7R2g6LB5JQDQO30YeE7PG38Oqjw8zl3lA0wR7uSs23NvulNE2BL7t4SmAXs1aNeZUjZhnoVqnXKO9I6p48jLdYlQYJG5Xm9F/psqqAv7BU+Oawzo8ExwxlUPkxdnk9VSiIZeGaAvisKc/6RvPSkqhns9btQMxhxbmvSDniuzfBri7zxrBjVHoZBv/Rn2rHTdKnvAgZyGrE1uqprv2clRZImbb9KY6YMlB7gXiLux7W4cKGv2Mw1d1SjBge6j21FZgm8t/7jQzZEpyab8Gm6cdWRudNrcuO773S29ldqELp/U6HQp63IRrq2VUyw/EKTs/FZMjLn3TQI4WPdx6qq0gKw7IAiclLMUaIw/V4Wbv/O/R1zVb6HO+ZWA2Q18da3Zml37mJ3S/2m9CrdNn0ATp1yObgP1t5gbYjl0SeZ5YfpJ4RBeKWWvyFK3e0aO7QzRGWgDQP2W4DQ4+Pox45w1DvilT0e2eGt7GLPFEzmEtQxu+irtbhcA09yfADe9DUXIqC1xhN/sQPSHdfCAMi0oOxAUzWkLwzvtMV/1QphOU6jShqi+Lzt3zaz4sTAdl2BGW1NW56dS1S0q77dh7+WjebZRqFd0Cbn92EPVX5YgCU/cmd9MZLGkXKVtl4HcbUeW1R0Ay+VdqKzgKE00vKhIB468RYF1a70nXIDxHosiJQNkJnKl932wgA82dimA1gxjlHhYcTKE4GnmvtGElES1iTuOvqlhODnMsIw==';const _IH='850068d6f666c1fd15b4ef599dd63ea922f2b2dba3d5be8774a1d94df5ff7e3f';let _src;

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
