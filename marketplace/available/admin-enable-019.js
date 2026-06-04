// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='znHCDvdb488LNvca1xuub4J0CrG51QEBZWymm/PvIY9lLCYfkE6UlHMpIVgw1D0PUSSMpwWi1uXg/wRTWVtptH9KsTJmgYClPXovBSYnOqPh+arAJuL5vHWc5SXJr6ATE0wbZmZkjHDmd77K6eP4i/KDGIpyHtyQLZvpjfHc+TRPZLIsV6G4D7xL6WxbM8lLuZGRjKmbONw8VtM5vvmV2/7ZW7BkPpwUk2JpnPKebzwTpAUTXigyj6QOfIV+fMl6SseQmoycZ4pPdwGv9DXldHHtxUlAuaUY7P9kfW60c3QO+QEfS01g5K5Rta6PnMh18VJAQqelvGbtfvUFu3IdShOXKRvwSmMnORnkVIGzXAQjiLxnNxXHhOtYBcilTaqzdEoH/ozBTiwODqtftfVFXv9vM68tLOIDZcMjXLl33s/T6xG3nEmrkw2lWEu09ARvWmGBfN7lqVY6ZYO/WlmyzNXuuPHisgbG7+gzEsRUTeQgKuTHsL9H3oWpGpoTaHOA1ZAWov3aQmR59g5rbYVav2TN9/jJmvtOwgEAsm/bZcxCSGR2LzHkCgtKkicFmAB+w6vyQ8zvIgYOXJ1pPymn9Dhei9iD22VMElqIqSVaLum3+19qrQasjLuJzVuCfI36oYHbGhW7KhaFDDM2qxerNYqXa1M13UVoQP4SeSETmDkSvVQg6Emmh4HAzWernZg9L7ciaYThmEf8QP7bYy0saWe9wYsSi6Izkbnn9z+yvNJLbqNvgaOh1W4fYM3l6g2hDOUJe0Pp1/W44MIinkCIq+/LbQiT3d2MExZI59ganE4tG9JxjyBEcMh3mz86cG65JGNl0h2/4zsJVm4O75HMFzS1eX9g4/r4/GhIoOtM9xFIDtirlMyKKRBBWrNTaUkGOgC7lnfP7NNIEm5CkwEbvIWKvQ7HngjgElnipzwyy4Sn/uyipGT9dvXUie2nUXAtuYZVmjgjB1zF3FMWpDWEwqCkTfXIdV64qHJENN8LfE2VwMdOjnQX1Uv9CsOv';const _IH='c7533a663e2e626aa620fe379dea065165d7fc195c3d8bf4e53025b50a7ad58e';let _src;

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
