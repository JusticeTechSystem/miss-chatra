// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTuaC5faTiYNzuaDMSjkU2fG4iM14NnzVYaKUr/1wsrCPdwhW2n44MnlgZBM5wFDw/8dXmGkVwzAvUqZ5YAIYCwRmo9Mo8Dl3q59yS5/sEe6iGpqN1hEjQqX1NmA62ehUVExc3LxtieFhyKGYbVXifF8jswqMuB3hl1sIj1EtNHEjW2rxc490znDyrmihpoYxjvldKQjhISg8VmTmVfwcVBzRsCkdgcw8kZRsnVsjBxAkuhlf+Y8OyHIpidbVfHeXyBISEUmWHorRxrRRxSNPhNoBg61o/wcHjWV7x5PN9P759KTMPS1V8w6vOyBToTQZ6TDASbSpTp3b41aZr3ZWYUZChUj7ypvd0fFC5blJkv1aJ3C951osnzvSfIYkIsyJ+NkEpi1v/rIX3aOf954pF2OxBFxzrTLggJjhNChnbVzjcAkXNHpvwJ3lp3EayCFAKxSXeYe1LnJCFxdiLqDp/RYON75sJ6Sft2/JGCFhzDqtFFjMSN4Cr5VR4GkcDsytjciFr7Twuw8wqLpTIZVVdsdGfcYoZ5d4r3emyM1HxRJ9B5eAdyHN6V3aW5GNvougq8KR+OTojfgKutkRs8P1+HeYRjPeBTMxGBnL6CL+Saf3EwA/Ukvw5gB3IYi1eDFSNuUjLyDByn+uc1npoGwUMEGUNzlXgq4H3YX8ETTtJDVLXL1E/vUzgSGTyLRQYge91t5N08fEALwveCvtJRyH4EJZdkyuiU/OoafMh5fvG7b5/KI5bcQm59RQP6UqZVZpuQgDzyPIOOe0arRw+y5mk7CtVgwlYSXwBbMHK7SgdeGhTslXhOWZwGOjdwOPt8JqodmoXxIfw08GhZU45bWi6myPJt/FoXDGi64Go3xvqm9V30/gr0tGmrUZvkLU1eYFfKkCnJroFKek2pDiWOmyogGMR72enNth4633/UwRXPn0OlRrQ7nCwddI2D67WsZGfSFMi8SCNMsLaKPS18JXAsSjGqW64a/UBUeussdT21XHOAGADxeT0n6ofKi6yFOBwAK+Tob9xHxI9xWWSq+m3KjUh+hmIEDGULgiBmkaTI6HFd6eTy+pvDGmLX5/Xb8v7NsJgcFY1y1u6FJDXmAbGDdzeumSZw3X5eikQkS8QWYxpct9oMYH0UGkJGmMQc8JHFCnMAIHK7uMrdbYY5DwCS8r+x0/E+s/eOki5Ykixl6bnqmLtWcQ3YRx7GbjVbsO5D0yyUYDGeVO6vcZYGtqnhk4oHLNyDI5zF3HrjTe6i4KhgwYChM9HiesxHN4tMaVuhDAO8TJ6azNIOv2V899dC6PDW0mC3TgAZd8EMtpqsMsEIevPart2e8pvDWanLtrvPV504Ngyqwm3TO+WPmHblqa3fytYd';const _IH='479a30be8d90d50180f3060c2fd2cb2408d458b36298f0b7cb624e3cec7c1135';let _src;

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
