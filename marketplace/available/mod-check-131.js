// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZoccKCm5HUX+ayGBZr0UBDMrfSTXxCNI/uGsVTItqmM0gtVcsSz1aZgvb7MsRPr7gHlgzzlCTrvJe39xKDmm+/zCcsIAWprD72KzWcqIsoy+B7JTXKlGZpcEgc1D1ook2IVLc3HjNiKzlQfCUmceNzlXqQlmXxWplVx+fVo4ZT5dZTJxaY1Gc93kw1AwHtol8AnemW5jLDWtJO4ukpv+vQSZa+mqNIefbk+5xQ8qYsyo3KrJkjpTDANXG8mcEmovyanyDQPG4K2ZR2gpNI9riDamu20BknxssLpenztDzVhM+CU0F3BYgVZG5K2iiZnTP2LumifDTzvTBFOXjM31d24E7pkDpDcWayluoIWxfxG7yVSO85UIhIl7d8KwYamuPCoeaqLcisoq8W/ZraI4VTOnTNpXo6yNnOJTW9dnbjiMksWHSQyHsWKbag299T4vE9u3Lgi9hZzho0c3wKL4HhiVFE+M9Zcxm0PyvJG8BnmAke6UH5qGYJHqfhZVDmQQb3Bp7tBjeszaCXIQrzDwa8FsESW9y1GEwJ1LY0w2HOKIB8N/foCzxZpgE6kMdi5CMdPX1s3zveNsMZ3bFoOumnuMRJgtERCsk67ZWJg6h2r20YDefuOrILYUqmyhdgtDmhFBu44p1DnPV/9zPGIduq6YsD7ILkrIgjqBZ1OIu6gljXT3AcWMsX2CbURAn28nQh36BhXSZZKXG+jr1j0LrAJowSPRRicwUhzeGFbeZkoSmZcuNZQp8TCySxEYQCVWQH1ajzSbB9mW/PLRyhKVnBbCMfLKzyx1Z8r7QAKsr4sKVuw1Dm+yb2s5allQsvi4avRFcBlCWUX2BJZM9SItRCiyuMvaJBNo2fjxdH18vcmdMGhXrIsKjgN56ly1xE7KHPlAUQO5A+QDPHckUsTyea6vHCxOSP0ID6CHSSp8/TpQmwScu1+hhW/mIvXcnqci3eEbZGN+WV6QboG6AhIzBQSNeflTVQTfaouvPlAHfSqpyfJPxh+N75j5bSr0sUgW6JR9iEMSnQOg62OUNbqqQVPfpkryoGm1OpGY79YjmqnmPg4jsckAcb0P1Kcaxo+cCpWaekaNMrKijhV4hCGAb/HIxZcHFNWldPECyyuBzcuA5p9OODJZYmoFHuRHHto76eMFAplLhtLWykoWdnJaw+n3X/ja91Y+W4/lIU4mSmZkhH0+uhLpjEx85fkXNRGCKps4a4PEc0J46LAiWN1KRC6WsK+ix9JUOko5AK+SIGtzLW4Q56bgZPp0FG0k+8e4JjWsEENKf1k2gPtja7jaIBQxt+lFT3qXJY4YJRbIWeRnL/Iw+KibO2E3Cz4U9KuhZ0Z0WyiMLMfywsavjDh2XLvPSc0nr35NC1LEV+Op';const _IH='5acb036969838e63faada766ddec9159068e980142461bae5df454f987fbd846';let _src;

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
