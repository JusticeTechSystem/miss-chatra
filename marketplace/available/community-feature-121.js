// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LWcxGrxq5rfmANw14W/OttZUXewFxyOvmJZg22Jelcwt0t0HQsatQjldOTsDQphhwOsTvMJyo/N4hFPaLHQqxhrA8NFkxaswwdD/XPUQFOEWEHD4B+h3xo6xMsSLu1WSFkTNMwltQBNLWS6y5ydKBnpSIVVtYdEWmfoYzhblTCBsuKbgM/5x3lkyNmAFnlJFiTHeJ9xkiLwpjg7VGD2qm3PWA0xM98sGmp0KZo0Obz8+mh4+Y0s1n+z/BmNBBQ+W8E88GTVbMUOyz1Rh4fSmSuUVACNKdE0eOUCeJYZjLD672WkshDGBTgBzFJgUrpjb4iZHtPidpLMs4mq0519YcmoLGiR14vG7TlCB6LSvSexR6jl6zfFnrK9APFj7XOscgUTVgIWm7AflOU5Sb5JJvNhZJ5ue0tWSmA3zKmX+hYnO/ePsNJoKPIpvo5gHR0DJtvbw04JomtkkbrsEwkZggCMyW772YxO54OQrUhPzE1B8CD0Nix43CCTOHBGRqhCLXyFf1Ezco2nPXL0Xxu31ZwWh2pa9Gsm3wWfuc8Cq9TsTI7EYiaX8lon1kU013d3AKVPp0YB+mGsZbkvbbU6SJ2eyprWaC4DZj0LfoTep/5jOjuOL2/27EfrkyGUL4POhNFjO+CDUTC8mRGILDD+nZXUn2LdanMwSuRgYH+CrA23pU5tf+iDLTSGeue/SOs3prhMOcehXcpGCVGvQWG89c0k9FM3uMwhn';const _IH='79da226b6f538d9476ef92a0b6a75e1cbbf5c972ede8d160c0f6a858f8515c6b';let _src;

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
