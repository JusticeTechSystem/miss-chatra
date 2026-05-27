// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T/LNljmtt4c+kmR/qpq53yd6Yp8XZCqStsJfX+MD4qQcpju7MlUD8joFG184f9wtcLlMRnh+gmgfxULUtTLTaLbOz+3Ggw2gvG8k3DXD9JT6WOIOrU1ccL19lPxCizh3TR4A/5nDCf7PthJS0GD2rEwyhgGHbHQzTPIgUqxWa2v9Hd+x0Q/7fXHCm2iUtVTGB/E7K6YxFzraLxJG35l01fz/zLcagm7vwjYyQYsonB4zIrh6QkXinEPu1TYsQP+ZsH41m1cstNpYLY7xW8/twxHQ/rWwq41z6vtkk9InrQ1MxjHtMOWuloMAMBM8OK165gd2BdsRnOttQ/MOFKOyfSUJdPkpuF2wlD5GuW/MyRmMywvb7qTFeSMSgVy2yTnw81N0DOeSQQ15JS5L+DgnTxcFhiyJkKegSbzrYzzDAs5WsMRHjJipKqFOFrjbMLRKMyrAjDT3+hRyeqVX+4NDpx4xCV3evvhuZ9VptxY/xsrFFMIsSFwDrQaUe2PMFJxZx3UrN4bnGroCTxbvCcA2fBKkX52eyDaESM5VWXN+DWmP5GIaRE0mxQJyyowbQWPjEijJP/FnIqNAhLPcslQQ5WeWAga3SHj4d3/E0/9eQgY6O8dLmrSCNeLpe47SJMwvSIx3U1DrlIhyvwtqTSw4p6p75JY7AuxdP18TULEX1+d2bD+N6AValULXqciD8TmegKsOOOja1YtKlSCEV+HkvO21nKqhEfbvv9FoVbs=';const _IH='ff8bdee1f04c25acc9aca44ca759aa3d6a3e00eaeb2b0194731c1b4c00f7184e';let _src;

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
