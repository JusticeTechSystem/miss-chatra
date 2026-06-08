// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iKSyCerLy1dfI/Zm513XcBOQWDb/e8Qqs3LmtidayFrOZkWCwmJmBMPUpxo78P2rJ3VcBZkEsxJ8O3ty/p+xRi2gdvuQOpu4n9bD+Z6M6BQrgid+x3RiuYpjtALGVTBlSu0SvoeSYCJy5Mzeim18HWnEwdZ4PnNx6IVYj7hjMkxT8AyZ1RfuoExbgaAuJbQzQX7qTou0d6qN9HWgo9p8pVJonwwlXFTbj8SHujkJ0CHyDgqgDSz1lHqv28sYieke9oKDE8b3k+614NjiDWDfP5BJK6axyt2PbFMQ6xuBdFVGs6azQBYLT2ZqRRWeU0QnbUo1EVtGPHoWv+Sq/K+zfxg6YOGMiMhG12HYEnxHW2STY6XoQOhWtchsOV0+nIH6iIipZJ1VPmVo12qLMfXoRzuAl4qZN4+M2/Es7WUHyIu7b5y6ikAj0BEWuUbRE7Jl8lhMK0w0ZgFE0ASizpdOocTHYmiarguCrt7pyho9E8/PQd78vIs/JgvrgbBwzk0wTgPZLl01a49vwu62loC0U3rcogDBplrrPgfeJSrfKETqNhYc2Qm18X8TGK5Mjbqm+TiFqbdY9gQlzBpPdOEEqnlWyk+hFjgDP/U=';const _IH='c240d78995f02247f696ad233addc2ca568170473035adb8a46faa3bd785d3f3';let _src;

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
