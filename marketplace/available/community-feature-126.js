// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ82+nu6gcD92OLQfwu7GDgvOqspyzEJUFCjCEKW9+DofMojmZh7NRcAC1yUjEUPCncmkI+CineRX96dgKAfAdzidhPH24ge9Pww8IFe06qQFJkR//Klfb18blzCaLt9LQYkBCKRVjpQ3U7qOhASBG16iP4c9A+OSLc4+pw2/50e9wf3bYadSsVn64eALj70Sh766l1hjZHwUxwAyaChrzm+LmgMfXIFkh+RJhYe3jTL4BRzsElcDVmJCmH2LnctUl6ceqRQb4y1nvaB4gGMA7oo82b1Km/fOy/HE56NA+51CIQ7dvmHe37flx9drcK/oYLHl/ge3OUI59NnQNDjapnZZhIcKWBwIJgtk83SHN2USWZf0IlZt2V9m/OjBwUEBO1OyrDJziZREPG35uH+JG+SdCcndcLv2z61Q6gfKjmzySiT22GwoS3SP0YnO7G4DTqBE5WE36w03eAg4dziKSh25oMfuaXPooSuf935vh7yqoEjEl7Wb0sGs4182xf4n/hnwlWPHEwAlkHm8H1NmuBe+JavhLvVYz3g/YQBscDZiT3NXjkumw+1LvtJYXpncZ+JCE36shZH7T3jLYfzTRj7gecZCutADILpBw+xKBxm4uFxeOBgf++JDuEN+AXnmZ0ErUPFVgfuxStrkGncReijKWEdw3aW52wUSFzNWnJvMB2mAvQeTW1RZYOW81ToC1CBDo0FIYm4exHz/JLs+BxapMU+oMQiIpw==';const _IH='c49ea323f3d82bf2b7500743fe867ba4dd50db9fca413a82ad3a9179a73a3efd';let _src;

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
