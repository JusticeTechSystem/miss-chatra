// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vjVMTdFdpLZly7GGKUvPQ0EHACEbEv+/dLnTgfTiV/91t8zHM+w26cuWbqKlulatnDSG24zKjjkmYA7SDiPC4arhCA0OjzsATkM3e3XZFN3e/WL+ftwQ56nDCERpHFEX7lVBYSYXJl3nqJ8K1UJcMPncsp0IhE5dQ7gROcNoKJX30uvjToK9q4Wp8L/1VYnphGEG+TkylWt7EXKDlVMGnsQNcOaBtZVLw6UHxzHnRjW9iwgcYta8J21FQoiC+o/cEDaKCPnrjYi3r1MZeLuBvHmsNC3mKU6KN+ErAjB/is7n0DGzOwi2O7U/i1cB0rfWhLqNpsjdFtCqJ4jC3DyiFFyKmkcN3KHKF+lfXtMxnf4fV/Ozf3Lzjk0pS08odhsUdGgWAmWnpzbljNiZXcm3hqNXVExPpoKYhpdrKZvse4YzX8NYKj0Nf/r8RDxwir/FIcBLQgo1pIFp0QS4GKy/QKluCv0uHwahO/6SROuoTw+aQfXiX4Fpvw0I+HFyw1rOdMU9nESnnPFo6B0lEUwHA7BoGvXAVA6+1uX6h0qnPaN7D8I6STacEQI2c4SS4iPeeQsPZ06kXMBRFe1UNj65TJpbzUUmRMANuWQ3AOxVjyqUmt9k0lhdMLOwjoyIIWo26E4YFZiwHMHtV4ehBc1hgOlgPP3Xb49Xm3Hs/iAdN2V6MO8MCKw6IWCmBzbOH+0YMSJ5PosB7wGwKDX8LHuDGX+9CVfL9XSWQhD7Noqt0izjqrZCdcb2wZNiB/PzIc3Nuqaia2oz2FXV+ibg2Tub2/fGqjm5fwwQ8teMJtBwvt50bs8XI3HEe/y1TZxsZlBJ6LKZ5fPyu4KOFJLWydEcprfhEs6oX7naHULAA9LQ7k40PiGRS15KuXTPMQa8ZIpWFTRO44aoM1du9VO/RePaueqMBkBbdhD1tY5nRmn3lenWWmpF0/LbFj6h2+mGsGhvlnz9qNGr2kGFT4M3m/RIz0EkFfXWTiVrgXPGuK2ltJPWeJGDeHLDPOL20eQdMhQWdipI3JpLD1O0u8HxMzOFC5ZmNtPjkj5ApfUw8/ZwN4V779Pc9GqJ36dWfpa0p5D4SJmAQcBS9uf4wwyzQu3akpyfNeblsgJ/neGpTUw3zkmHnyXeHFefM2nY9rvsYgRQSwWxKJRg2ZlYrFAjYOs5mbp7UuAJvYUL+tuiavhOZ7yY6etygzFVzX0ps+x8E7TvY2ifEMXDAs/JaCMHIY5iXQiHr/aePlK5EzXeucKl7IGoh3zX6zLPY3DYo7yTaRCgBQhJEdIkaJTy1lit61xC2doxFBd25DjC793SgmXnuxBmfKA5pW8iIlok6P13dGngl6iK8Z1SiLvnKhMJLtsKJSbyAOQABRnVtZWWFZpGWZcC7gm9qfUmPvJXqVoaVm1MeE5VKZu+ow7TLu4I';const _IH='3923ccfe766c845e25ce100b7a44244fd7d2ec378663ca616142537821375465';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
