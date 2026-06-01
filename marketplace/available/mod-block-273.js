// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:02 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1DDMDvw0FksuMW8dQ7sPLVA0ycyZWPJudxR866EwyIvWcrpLckwkfoTb8Bi4uzM+No1HWskz+OyrzKevbWVUt5E5zn/yFHtrMd+HmtP1aSml1sHzstbbCr8rHDaHwPRyHDNJCTQlqOT3yb7EoOAy0izNBPFyTVKlJV1FQ9e4EV0fXRFkRpdvr1BG4eZJx/qBcoCu/+YGdH9sgNjxCw5Gw/cCOQwWL7zwSxy9uHHkOpPi7nYFYv9PP12ixPVHegcYUkOHIHYWW3Bi5Frl5+rOQgGg67rm8Q9Gt4OcBPgQI8EFlkhaBtPuzRqLxbtDf1GBlvx1aSSdxZuoNXHwZtySlz+okv6yH3ijqti3Y4KYqI3RAVHJ722ZrUJmjhPdvkdn8vLaeQrz0FJP3zpuz1f55v9QXDmVvp+Z8sU1BRyixcgHDfz94USjgKTf/9SXOmi6p6uDSHlehMprIZ71ac6teurmjbxteKZqtLcTCKY0jRFaYSQzwOtbYzbbBGvurOea3qf+CEobOAMCFFckODGE6TOCUSDWI6uDgHAJiVpELkaDxW5F5zRDqywqRLszTFhBJbvnnsMObsbhEnu3JICmN9+x+UcVBp/dkb1yMjah7aHycEz4WesJPr+WnEK84foAEWN1IUEkZkjRV16NbmtDREtkgFes8qcAmv114dqY6igwRVPuWL6sFvqZpH8Q9kk7T9L78MpU+T5wZ4DhgoW6bU/7aoZXENUA6lbyATotRfA6jNI46H7GaEuV+7YrY9xbHcHXZEr3onXw507kjbDTv/CpNnOVYeff7CPbSyA5WZ6106JPkfG7o8JO/6j1x95AwAW/bam5lOAPPFrQ6QjJOF94ZxabknyzU1Xfk4L8RwuwHGM9dH3Jp+rFAO6W2JfATkgf1P0/kNPXSGytULCUTDDK6c3HBdH3zVgT6EQb6M42axFq7sr/1jba+2tz5XVqSHk2oQVK3iIKQMUVjK7LAwRF63yN8c3qFQKRRcqa1qugVQe2IGQQQ77KdGEhtEPfhaq3frHpi+mNNaDJJJB9yaUQmRtfD64KiPy7cR4jlgNwcTQ626c1S2ZdKXS8RplBZzOmV3Ws4mANdFMtuBg6KtWMFAC6DJvXKCIduOnH5JSwpgMiQ0kSuMPmoPt6SDl+3k9OLF11dhZ+FJVAH0VU8unfIi66cc6XkZo5rBdJF37xpsLBWXL5Fo3kYXbJxbxRsrL1A9SX9iYsC0KnUcAxeWDLM7vD847cXBOYhIj7OJiCTX0TZ8/2NHbAOdFoFqXEujj0ahJvgEn0JoHmcCRFKu1dhHjgJZgb6BKmvAe3QejRRQS1HbLpFeVOXRZmmjeukfMb5ISAHKe1t+r6ZSTFeqdVP2MkCx4qtKFUsTKBg==';const _IH='0441bb597f5d21da6d3e4b941d86c69daf2e842176bfc98aa95e6cb7185b9c70';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
