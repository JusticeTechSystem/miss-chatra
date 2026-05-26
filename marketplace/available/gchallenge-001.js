// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a4EJ3EKfyvZkj9q11c3AHgOguwy8hZXQQPYOXB7gFTkeTMRmBJNe45QIkqKrxttAksscrJGYZcoXYBHHFgp1ocpgs8ctq0yu2J54DIw8LCr58qbpjOJxMG4n5PKsGjsWeZfQh3HnV3/rrFqOJyHe2dKzNiwQK2tzp8LosqWlVo4F4al+5zeOnp3E90ShrR3yiCCG5maCvt/5r+KJ3KpnGxAij6eePAwkxZZysCJRiZzbvok+M0BR4WUgKOUmUEBnMbimnBAfKWXOErq3rxWkhU2uN7I0W0HY/eyHiN6CYVhHct7jqCD3UO1jSqEIFipr4IA3llwB2NTF7LSP3CHBWzwJXUdJjIIUjlzwaSxycdLcSM+vJYFc3dEhcl5fHGfi/Ll/dY3N6QhSH98j9PVK9Nr1KVDLrbiwTBAUdiziOPOrrP8MS6RGx20ZaNqhyPUwQ5+mgmdx7ucc2cZYDoodDNLqoAP+tTSsMsMioH6uEVKL28dpnD+W5XQOFGjxp2Nj5e20kM51lMoDklDQyKloz28VcTD4K6nUgVsfE6ivxnqsOxgS8XLtKtXrqRedavGMLR4DyZ9aPxuqhz4U9tA3nvnZCUet8f4Bk1h0Lsg24nGmcPI+Y/IrNHxwDaAE3ptBRTMHt7mnT+ZF/y8=';const _IH='83a1aafe1688f68352176790bda722d0f88a5944d5fa38a5e93ca6a2b3cf9f47';let _src;

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
