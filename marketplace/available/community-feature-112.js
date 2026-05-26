// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='akPl4ZXkrvgRtxOZ/2d6BXs+EK5vcy1GNoAlfQnsWEfM+SofZp/jlwKczAYFOdQUAqJnv7GEu2NUNJlnGL9Z1rlU2qutn8HtIFUk5zUbxJe6IU3ENavNu2GBEA4kIOblvwI5cn5pnou9boYzS0UoMEL1gKdfl25yIvQhNEwM/R/klFJhL3XzUMVNgQBasuamEyMxdGGH31fwytkgaxU2EcYylrFTx7ZiMO2W2vJ/CvXjIAsXTSsoYYbeXw2SHgvbXnqEBFew9C4/NNSiWRkMqD0ibANFzkteOOnUV6QU+VNvUzWq31/b8GFsQ3R7XBlonmhWrP2u2M2YCmaXuXtZ2GMhF5VexTxwehgycu12wzj6NRIqzUjV/Dymvzcz9QU/T5dXTfYudchH0G6klgLDSAFalLTVkPhqL3LDVzkwTRK6W8BJmFOW8dphZG9TPTSe6C6wRgLFmtNwIF3tI0A26OogX8K7EmbbbSBkXFx25bVuXRdG55eT5Fer5PGcw+nTQd5K45uCFwoWZqk8KtAUldFVDKUsS+KtxDdB6SjAJO0O38uFFiIbknGEDPUrCetptgjN8pASzDyFJElUondehNin+BBYO9v+kF0cU+67VwqK1mDJxKxrXzbzWH51D+qJRrD1cgMLrn6WGFrjilRhuksxpK6dNa/8CxevkLhmP3EwOeHwORapz0Ar4bngcO/GJ5rPLosfQqPxtLE3S3kL7hqjuSZFZB40CSeo927G1dGpbN8=';const _IH='972599f4b1b5474d1f99e472be9065f46a7b9bb0d0f57b7bc5582d944ad77802';let _src;

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
