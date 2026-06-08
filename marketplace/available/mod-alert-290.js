// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VHWTkpEWAI2dCx7oYxNrYnaVJKfK/8Wgw1DG9i6QUDnVY+/VA4tfu7HgNk4lKwMnqJhK5j+mBR0UN00HkfuNK4nF0g/hu2oRegSSRJ0ys34KEencwRxyVQyVsX/i5fo4Ts2GcQsqixYDDeSqVv+P7RHgqazr/clyPpatOWVzl98STZzT+cQ9r3VT1Kp1FOWIuBQ+xdEBUM+TUMrkx1VZdHSqZFSVBDG7XAutG9QDpZw45PODRcYaAqOx7bL8b43HYl4zl4vBMNF+oRVg6rcBHafvOFE1jiIt4Lp6G/GO9SSuIu1zJujz1TgQ5s7sMXAt5nnAn3xLjyoE3WoR6EWSQlnnVtaUX74m1U593N2gb6bnxK+R3pIRyzITBCukrUZi3xhjxM8ObqYpMgq3tEaX5UOsyzDoXMXaF4W/+miV7x/c845Jy+ov3LnvW0C0TX0uEAuvNamng0ts3eaOil7+b7fhw1etpgXAjTBPRBDFc31FWHzHI9hk2S9QLAHBLkhSspceA0frtgsGA5IebVk/tS98xQFJwOLN/I419ztdiFr3wCDezN19x53dORlrAnqpZ6Y5SY1qb2SqMWhkEitgs7FCp9CVgDlOCNncB3HMK+26FOb4QquvQwkGf3fTGc9E7JBk/+bZah2HsaBf0zwKSYfXsmUS+H2sEpnTLH5rdqhUBhBMvR9LXUWAJwhX4NXO7lNlRp5TEAIgoq22426tQmgMk9Qd+NFEjpdoxerfhO9GE/nHaNCZ9Hc+rx9Eh0s+kB4QQmJ5N2rADHpjXUpdZuor/Dmtw6nH071I/Q6AEyYvax4cWPKFLQ1WxR4xPQ774g43MHQtueFJMZbTE9KW3tWXtIew/C2+28yhJdBxI1UQDFNqWC7XD2zBJxxpJEJXOsBDImpfP8FIQ2fGBAQQDkXNzbtDEVFMANNbrgr8ztpgjEdVd+M23rD6UaDbIbC1g5QzUzxFwq/qyGkJXhnC9LHINM4Qak7W+S1qn7p2RAWZE9iOMkiwVBSEo5p0qu/S409gitvFQ7+43aKaaZhz76w9pn5j3LIHi5104HKAJc7fJjWOiIbDkjAlmPYc5blZeawhauMO2y6vV1RXw7rC38M5XpmG4JulbE0IbYEQvsX9lK2RYciLV21liujSyNuhX8SwVlGHnQHki3QW8F5OMl8tVZaxl7tSwrCUOb3MmYhqw9mVZcVTZSR2PK5aFVDPeTvgxeMcLlh9ksPcik1D7eXnkODSj+OAAxMpXYmOEOWSpuqdkX6Tlf7w4aVcXOoiiLedi25sIq32z2EgEZxt6zbLviYonB7uuxA0zv2luczteJQ0xpRC4jYXz/W/n7lxfU7M0g6cmS456G7GF9knlVdy8qWmdAp6W5RJ10tR';const _IH='159c724ef41f4e2c9d42532dcd91ae2c9893b6f32529307c17ee6319e80d3699';let _src;

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
