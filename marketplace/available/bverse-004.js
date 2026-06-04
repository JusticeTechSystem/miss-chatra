// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bFPnaQqk6RPoOouFXlyjeGyaZ80ap8LVRxnqwxD/feP8i3Ph7BDRFhkZhGsAe+kP/SJMEMynzd7+PB1gIs0iwSSaxvAx4hRI0krxHqTYnDR/qnggNU8U1IC9ZAa4+cChUoJ9MfMcKQbhJxSK01Kt6Bk6qQSFE1xmdlKsEvrGaVZbfLU8wP7WZYn8FbepsyMh2i26Jsm5soJwtO5Sv9dKvfcovNl9sedp/u4ecsllERUnTjbwi7Gf5SRWdgfX62vK66zFCAZ1Z0UtCV/6yIpEvFSQj/SOm+ZlyGB+ZwFtVWoxnZDFKaQg23/EoH94UI5GtSSrVjLJbChzGkG2nyRNPdeJxkaisDZW93qSOwicG4KPmBHR3tKiJQELYv4tzlLuPwnYGWQy5DOXJsCm/fygA9N6gJVy/HIGrcLvaf6fHaX5lYDYI+UWEM2w6N8PlhYLMtlo3NneJUxfg/fWz+/vOU9ZpzPia15m+EBRwh2RYUQvLzhkhxN2qsOQPXJ5nYgUvd2oUMiT6RxRH06MX0TBvt+w5JKLSGEP+VveOSLpE+ZbpsxxHU2Q6Zqu2frPmz+hgSxa/UF/J5n9tZlOcuOFS48AH3A8CYPhB0YYbITLxi7nWODOpBwTdzZG/lvEusPv3dtqtPMTgo2OrCJOgS7THG3utM+9NpStrwpbRgHCj7oyK5j0iA==';const _IH='8b68481928e4b8ac3c417e749e47aa8c3a8e9de4f475cba3b265c8b1181ababb';let _src;

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
