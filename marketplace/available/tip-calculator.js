// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VBw/ypyEErEWXeYera+tlOeE6jVBL4SHBNDMIY1YT7MiOuHODkw20bo+W6ctNcpM7t9efjiAlN2dXqAaOJi9UcJkY0vgY8nHkDke24qTpXfZt9nYEsCBDh0HfVbI6dYe3LANNvz0EvFoHrD38joE1U1vqWbQY8vAyPbG9QGc6UDTH527XATnV9UJCcarTETDLYvAQeVovSNjY3VwOEPUITZ326HMdvLlcSkE8q/W3jfLFdKe1a6qzbvIEDVZFXfjZwiHPdP4nQvb8WY4qv13NeIMsdOXoXz+N2Bwd3YnHDLRZTOLINHmVRlQK+U0z9w2UJdK0VhJx57vjUdxZEaJunGxFUVy+cv4H+GGG5I2rnjYla3dndjZipVQvT+EetE40hXCra40lGFBIyfhYuisy9qHXhr9/ZWOmq2yRyD7mYIM5HdiVkOGiziwos4dfHAsPN1zOiw/ZcDEzl/Lsqz9W6JSyVMtvm3TIDkUdojREWURbkJe2UwmmnkT2agZo27LbKEm2P2+eHpeZ0CDkvFRawzKSQ95jS+v1FRKXL9yoxqH4NNmaV/3c/KU9cHWeNAJn/fxWMP06T3THbOMZlN3x685dyoTuk8oj/Md2CnUn6r28kZ6DFX9l0TTWGMCALFLB0iOcl471we9EnfRGfZt8gQC1GgpEpH1Tw9FULmHwJ3gS/T87uCOpJUUhvlc3BrMQmroHR57rxnJYpkKRfrcTDHmz6kxsRSDDnfyUqaXbOais4ufIgUL8xuLFqfouXA31y0wtUQOu1LQSYVbgKQ6fprPNfPGYWWJf/E8dcDhIocEfU4/5Ko5KMGtTkkGVqvOeOmXrjaj5AHeCsUcxgriarxDt43vq+8zwZO8+w2PmNxVrPFH86r05cDoX8FDg/nUMqxxkGKFoqLfBimqawBryklj0SBzIYAsrNHFzJAQQWw3e6iaXB40Lu2bpjg4RbcFfwpvx4cjy+LfiT25lXEUYuaFQNKsra4Mz3YbTkVQzmSvBc2E+s01o97c6iRjaaqHT31UGWmFoDTbz1XKgLslJEFYVzILYCwTc19xs5Xs20/iH5ZUc/0Ln0GbLx3cBO9vNB/mKarQYnrT9pr474zefvNSGxnCbLglrgvP+Npvg5N6zxV6epjIXOZGBz9MXjWLGDgz0/2hVCWqvbYtPjk/Jq96TDBjypnnx+KxRcmP+cNaqSiipATU2a1Ua9y4vYsoXw34PZQbcHOVcfM9vjqvabkBvE66fpbMmXkf8QpFr9BwU16G+lbLsi5pz5Gg7mWNsPXcAkio0n3zSbCM27u5C0Mm6Dsupb9vf1wbAXhvM7zVudlBWwaRtvCRffFmx+fZn0OTrE0g';const _IH='1ccc1de7971e041e1bba33490789a335c96ef01109b21055962d904f2bb2b07d';let _src;

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
