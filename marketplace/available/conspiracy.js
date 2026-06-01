// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3cNuDamoJYTE9z6FaT2XfsDATfWhDFuo5yHRCdvnW14WH7u4kCl0zHK2E17MeE1DwhWXAl2K24chyPRl0whyeHxGPH8OgE7akL/k6PidePppiVb2RZ5MIiHrRI6obg5RrKyOrIZiOA7TdawnQxaX03r55MHaRO+s6ezD4skiPbBgnyhT1iKNFGGzNIbjalGGRy0YTJPM19RFDiyy6X/3GI4XqjA+IulxAgNsIGZlh8UjomVip3Rq8lSbYU8jyLuZ4tTPlj5k5PTf0e+RPS6ZMXoW1m8EmPyxFgvJZqhitf+q7u/DhCRcA0ozrnTY6jDyi/n8SJgTk2P7tF14ioLL0M2i7gfFszYzI0Efgtszo8U/A6aZVczuCgFK2aMZj0NDq8ASU1RoII230GAhEuKua5CyTm+HfCO8yePHRt12hdxJ1l31wT/YPgakH7yeAiRQGF6gR12sgfsniZ6jnWhKxr4MMm9r92YxjAY1CpkPghlNk5GR6k1nQ9u01Gz6ZAKxwRUvYAbklt5lSe10BPZYgiUO8nccfjwbg+nI6hDZORMUCQ6cllNap7CTvhLxaMkrM5Vebh97asTSLyUWKbHhqcurV+QZYGizkDPT5JSnF+46QE3gEkGddWDws6aK5lSorjowJJoIocrs3PaqjLkcqWtlQ++XxKXFG0od8o279rR4bFGFVNUKZhyyPSYdpuRvSlw1LfRZGYx3NCODNqzdOVuSkwB9i7deQUcnRzdgYx5YzVbNMNV5zclxW9PzTgZ3Km+GGWZzOZriLm9piLdMHv8dobRPnr3Y8gSshsH2nUKfyS5F7oqe7OgKUDPUydin2rUpxFsZyMLZSvHRrQC5H340OD1MJFZC+PPnBCo8ZIkXUKYT8aIkwQL9Y5wI8R7ehcgh+JVwWj5aR6FtcwNwFliA2SYIg65vr0tR3UuAlVAyV1yK85oAy8m4T3aORpaOHZjU6EQiHWwiHzdh3BwS2sPFgFK9ugIi29bEHI0Q/t6hvrXOdjTgb6GnIpdKGb6p7I/+BRTGDfTsUTV4fhwVoK8lj9BMK+5oTyM535xQkx9iCvN0Rv1NuQezvmPD/BdRUc19qCmCasjGG3MmYMn2Rz7taLmQqmHO3n1RuvAHqwij28Ihr3vI517R5aDHwgfGDhtFEx1jebHgE4lBdRzCNSaRHF+UcWhJvi7+V2EAfyQmlYAryf5K02BjdB525SUG71m9Ds=';const _IH='414c25c49f893cf6e985af608197e955c69bea46930a229c997547bdaf93cf13';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
