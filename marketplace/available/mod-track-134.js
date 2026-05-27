// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='geNCOtYOwktw0dj6fJvq/krBCMc+vE+xJHe1RwSeIn1QvnvP4r5KvdbjIWNoquYu8/SFHzMFiz4ZVnSTPyUjng7vLcjiragwTAmeY2KMAGH9BfLMvdcAtZLFHlhFVEXVB4IokP9TRyL2DK8YzwzNozveb5kL1+QA88/QNszOipHn9fuWT41Np0qxjT1MCIVoGFSUZTgFzuUS6kiEcvWd7lO8Vt2v2TYl0c6LtYYzFQGms5Rf9XnmzNKKY9tO/MHmlfkiiocRrtZTd8mmCfQcMvlxYjAwZXc4cteVv5Eb4aa5jovkl1+GHBVFNUWJRVt+NlCaBiQJIH+92dFwcEgm/rJKvT8YyuoZjrOFvPIvYOwYivoLJ+rQLRWBxmiSABXIGDfDxBgNXQnOgzv0NwIJ4gGC/QZXfAmbcDp5kxEEknoE6vunraQ22NPbQuEEOVXm80YNLNp1aJZFOzo+wyi/4tzT65KiisaEyfNGX+xzfYRrv+nTUQ1ZC8EQWmqEEIUqgUwJxZqRyrgWLaywbsQET5NVBFWrESaoCCWuJAxVX4rcGKS0SOu9Dr7Py5P29LEVGYLgHROsoreuPAiFf8UVsDFpLHr4g/hd/KESxb3e1tj6KNxQTVe7PUOR3pOkK1L21oswuXK9uGrRUrCbQ4MQCNAsDuuRbKo1oMmF3VUjMwjIGx0SwchNjuNp+IpKafoYin6ScF2YDowDyOhRmpuppNzJN/Qez+vsk9Q6+G6D36iAlL/oXWbT61L49PzVls0UbQjpxH8/yzu5LLHgOuvHsWQ4HDKmEdjLXROLLAHAzTn/TvF2bm/HwfVYSneAUUi2UA/IlgleylBC6pwdeIORsscEhzeQ1ik57gMD2nzJHJWLtn+1KXn3+3jiWJCVoqMICU18SVvtpOS5Dpabt0G9lQ6IVcauwkKjw1D5JfjF/3UOTDLyyb3vMlvhZjm9gaAH2j9npAWYKkWvRRMY9ViuYDKCObu6V7NNGR0oCO2PWZ+D61pohMw53fRJx+okYVlfpIzCi3k/c7ULPYsZB1VVg5b0n7iub9dnQCs9gqKhDU3KuW4lP8O8Bl2xctNC2J5qe+LXRIJx40r3ditLhQ2nRryn06DhpkXh/uy0TwC24TV8yWG/LVCQS3n+ayTueRqElgUyflV1K8c4yIfHAGEyPIqQo3xQbU7Lc2lwBwa/GeD5lCal8jcGWN0E4Nn/DuHx2JKGah0l/VCZIxaxJK+8HAAaezl1FaSc52OkqDRH0u5sSDekxK1HPJblUj+HePZErY20k6bx+KyU+92tnzC+gCDmlXmd3/t/DiNv3WzVmQ4qBGUPUCIv6yxZ3hsHT73N5/9t5rfsM3wtJnYeV5cPmtrED6cW+93gANDR3zqO';const _IH='22c2e5efd3236400c4b9abc1f4c58581918738c077a17e26893a589c2c9566aa';let _src;

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
