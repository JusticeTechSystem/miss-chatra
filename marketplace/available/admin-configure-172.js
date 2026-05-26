// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I7x6AW4otfdUjZe+/uq7lGsXKsYjp/aH0rwUTk6bQiMvXT7ICdoX3DL36v9iEMpb/YWh+ZZHnpLgpsnzhZsGY/pDLfY4O/SHsBgJ+JvzAro4ijWS8Hdww+9vJrjOUFD7R4ZJslSQQ/3wqwu7MSx8+w7CnHHCKsJGIOOIBPKmWxLHOAA+tGXBZR3cq43gdsl295rpJwUBOYrrjZtGhkzjniYcngyYc5+4mu4obNYjvKl2sq5NthVB9gA1sWCZ5gLcBnRlpcKfcRWRB8xJUyRoB5TcLB9hHMPspdZE00fvjUzwH7xopwRtY2oSpWY0H0cPV4RARhDpSh6QgrHGoV20djHVqjxtmuPD96ZKEPu/xLz6gpYcxR4UGAPUtgANvIAfHgEUr0awfrXBEh2gDPBOhBrdFMUr6cH5HLsiqEDlzlD0txpMTG6QxMHg99ZHrFKbznQecICbC18VHOOsd8ga3VXFEk4Y3hlAGcRZca48dReWH54jwEM5mPYucw9GZpZvZ8fWYnK4pbayCQF3FGRi6YfDcBA2oI/fXgU9baRiLNBBNDq37Z2TbNutu/5OLDEIsIR/xjYehauEh+zPvgFznAaGihRKAfv6MdWUO0pKkNhMWiREqhElaRCESwvs77vzAUeXaI6937L1e73EBxqJRYJ7nneNoNmQqD0RTxqLpUfVpHMAwhvTaZHAEz/WOOig5QZrli0gh1Q2dHnKZBf5omNXYN+ESXtuNNCHAhNoR/sgS/zzHv8QB0hK/vNvThFIp46x7z8NmtRSWgp5pVlqmj89LRl84oMGbAe5LCS7/fgo6aHdiajgbnpcLcvjzG6cDsctnwAaU1ntLY16i4k5Dv1GUQwxHqpdcNFf0QKfh8xQvQJtl3uoFXUwbG0zV11kFuw7Ptiz9qx0VZvrQ18r0Y7cYQjRBM6EUsR5hCjqQCyqWLRL4M8JRI2PbyzY54YYJgTHyx1P9gNNDLZUMhlQkV32KfDOyfGHG0HM5BdP/kAunEAlHIUdgOoPJiuTgzHFaZ8ER8btyUoI5jODFiwP0b6ok1j8HA==';const _IH='309507e9de5368bb1ca1ab1c4aba6632d72cb23ba84f0fc26b519eecca70e5b7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
