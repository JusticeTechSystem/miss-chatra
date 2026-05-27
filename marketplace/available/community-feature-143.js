// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xxd9s5QmpmdTbchvpqFvJ5gt9iV0liR3E5lHH/1trWv+TQhtmvuSlNOiGnGsRtzta34y7AsCBP+jP7zkuZVUnlCkjelv/EKJMjfgXFVhQJmuDBoi2nXdiw56qPnZ5HpexHSeYFI59SsheBTS7M6ButCFXeWU3+ibEw0jFE/X6qDTmgiRQGpyAzzTIXIgj9GDUzb8KvzAIddAdH3gCW/nYdEdq6ZIpSJ4A7bTqoQqbBWAx/VBHtRdIqHXQwdjseo1/F/Bs74DPrSO0azS2XjJOFcmUAYHWA109/k7jfvPHicy+2w0M74uTu3KXpu/8BXcdHw+50FgZlEvWKYA9EEovYVkesMzKkhsadl7MPtxdmDNBff6xiTdK9gL8/8P5hiqKmEi5ZqfGLz/jLTm8BFIkiCllQHWrWwThSopXi3IytPFt0uuB8Y6l4DHdHCvkJNmZWwlyt6sTkDxLKMScX0cjyeaNvHIZopfgPT6Jp/pllo21RO3ImT2XfEpRdm5QVqYSYz+hKU+yS6F23owkGvF5NYMy4Du5GpeF91e6o8C3ZslvPDGDPsyBra2E/WP3FpSYM7blcMTlL5mxEagUd1CtVgHonFMOM0WF0bnWlJSs5MW3u6pwnQ1lOen2B0WVHEbL8Csg9SGNnZmQAgW4LVn+PlBkhMG0Hbzy/dnlf6k2UC53ZLE+SBfZrjYgDy5ohnX0EKMIqa3vyCVf1WvWwi2qhWFSk0GmKaZCE54JLo=';const _IH='d2657452efd961ff93a83c061b06722dda20325fdcf7e4281b0f0263e16c25cd';let _src;

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
