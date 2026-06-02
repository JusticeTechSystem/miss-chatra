// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BRnmD2la1LKQwMWUh9Wfw9fuVJz+U4cEck6gafTy0bxfiLVKwgxUQu5FadgdhfT3VJ7NBjNb4Cx6LhVYr+0zWw5g9Hz/VwwWZI6ZXrTzZsIifVy+RCVM679ochFSUAj/1joTLAhuPIOx0ggqO7QDAqP5DN//xa7fSyH6PdCS+VEpxWWerr3VJjZU6kdTe8/sdU/FyBCbaecHD9bxL3mX0HvgjliOdvdml5BaHPCok0J0LpzV5PViJJh849NwtoxPwdE+wgtuXDu1k3/iE9UO0fTeXlVzgRhynSYkonxeMDBe45YgODV7jSV+KwT8s6gYKGRWxZyz+kMFRBDP8vP6hQ5k7HYbHUTFJDCRorD+J+MAPymixkPlbmlojdDMs2rvN2A1lWFErUBjIwnWtAY8EEjsbl3vR7j9rtOm7fkUvuinkSKOUl6D8nRT68XPkTdwN+i4TxuUs943XH2UYFXFjjoKODV1GzoE8+rA3MqEacmmc7vRnujewTpCqC2zTq56Iha4kd/udP5y2rCA2xxVS1Tz4KM93EJBsVndlBLOKfOwR9yhgnvjYGz/iXmp9J+3jDgfBmeY9yTHLliYfByjV3/9d6vyfuBHBWnwEJGuldeYyzyPqz6xV6Ntd9Hr/J4sHGPF6yEhqd9qHzxPKBMiVG0VQ99YGnV4ZPGzp4B01n3fFy6qhXZ/odXbtktYgcTs74NoJ6SbNJ+jhdcPwAnaI+vIxgWZ6H1enr/5yhS95cAbDCP/qlQ4rcF1I69HuO9l7eujEV80VwmEpaOHKBRZgKXn7muhXuH4rEas61nxTrzIBc/TeemlRTs5LILeGQivqKH+0wQdtm2nskiDUE+kSB1sRh7LhZYue5YyNoEP7ThnjXOGLJknsHEKwhx74CIAvfykDki1k+POKeXHa5WU8hPPBbcL8bflBcmejBN7lwU2ycTZKNdFv6SNA5a9tjbCD6H+zYp371PHkywj9zEnIOfSXmfTKJAffI2vl6ciWsKVDpZGXt7zrUsu4dNVS2KLlxFEgp/C7oNypMUse8iVD+5Ryl0aVvMOHx7OFysMbwbF5AGfmlrHeDwhjji1b+kTE6dTGn/FjwaJOqQqXOpnB1BQSSiaPUdId6lShzbINih8rcqLLWIFyYHF1Z6EF8Dr0zAiiFLH3Dz5ljpTO76Ek91mdYxlWICHZM6qKfJwaOZumYP7BuK5a3j2ACJ6mwmDbpS8Hz/EFdIFBM+8XNM9A5yJ01TsKFHbPh09ECfU5SNTc0qZ9WFZS98d2IHQO3eDofwdylP4qOB7UrULrCo3+kiNv7wtvDwDsOB44V3sW634TC3Kogofo3ry4vZ8nRVTbNz00aGFcpS6I6GXA8N32ajlwOj3kkwgdA==';const _IH='599f9613c1ae5234061ac9431eb7ffe0d2bd77b9a1f70f1b90130eec3360f901';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
