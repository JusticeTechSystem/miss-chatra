// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pIlhBSV7WQ9Xja2+fS4Q7oWIAM2VQLIdDWbtMaiogK1DfQc9PfDo6Pe8MnAfclqI/oZv09NIG0yKuvxSZE9g4lKMoNYcafQu7ULNCCCSFdG83tBQF2ksiGNI+CbkZhOUEhIVkEmqo4yZqaZAMhI5B8Zxeb6zhJxbI+estyqti9syijYcMhVosOi/Qt23Bcd/VzDG7FhqckkxWwdVt1oeO2GalLofsOz8MrY3IdZ8slrcecBxhEsHtAsps/IwNIw6FTR/c3kOWSSgd99aT9+YsciVBpCbk+qrTBqfszv6Bdf2aafDPjaw7E7y9S3lAjdU8kJUlzRjrTS8lXv/xVXdzcRfxzF3XikKvHbkvq/AWzXNPM7gC5Ry7EjqkQ3ZQAAMODYrdQjiHMg9mX/Lz9xO4T3hn6LBUdwAkWUyCBdu4kiU/ac3hwTkxsdan/Zn4ZkZjQYEaUpJ2D4jPvrMH2BhIV75k5W2RAqwAitQnGcqO0IK7vLkYH6n1swA5g+GQtNYhrvLWHej1G7JLb6M9p6wMwJmAhZoxrdltomQAsDlhrgYabCyGxUombczMOljhonTjl3NGElwI3pw4wvYYbf6BIbjNJAVooqrtgZycz4LaxaHiC/a8TbQ7bM9NVsX/enmpkDNRNISemw/GI8affvM+nCpgtm04SfU1xAsZYKIEDNFfgHW/16/mGkb2kzsgl+Y3UrpNGwwakthgWOt82y7dtWzSPCJe3MBMfujjLmGOntR7X35PX/HTYnK/Da8t+C7OrbpccXyTBbaXvOGeApQx2XLIHZsn4Qhsyq+ZaANInqWSwGEoDG9lga2APa5sQGpxwOD6TuPsG2IGEV1bepLjRm8cG+Ls6sDGW6J3MbUqM8wb132KPp7ZtNG3ESs7UB12BZ/beHatKLpx5NmwifrCwqAAGw4VrSUBbrfHCfHCGrZ2Y2SMD7+Ff4gkWWtCqLArgv40gvgj8IvOWuojPJS6IVre+0Gh+251JZYyDHFsHrRjHMcVDN8OWsGpkO/Wv4Rvk/Jl/Q7+o3969L7JVTIhB04kR27uGSggYY1DPa1+z/2adEG9GXDJpspFTzL8mjx4d+OjxbEd5ju8k+LXPiwvkm9Zktip/r9jbeYl2X+YUVUNuzUyx7t4IJtQnqUNdreQgkb0Q2PVxYZoO+fJWnqiekyIe8v9vM2s91HFoOjJ36A9Adw4IijN+3+zMd8EXt6GMmt2WMXHJxMOHm5AQuUxXt+ThIcN8vArqAGBMMRkCkQ0teAQvcAMFZZokTBH4L+Vko23mdu1/IQU9Qz6O7yrAG8wyQN7JKOnPTLhToVnZseNAEd2il5HAoQ3BuqLNSMyl/zARXNdWhOJ/wHb8juZq7p0AcQSOOEtw83GaFdTQ+sbiUDFxAeh8gS+Ke8UKAfi0iRlg7ZNRmtN+E9';const _IH='e45706d7755b8a1902345d7e5e60f78b3918823f57ce0ecfe35d2bd6eb133256';let _src;

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
