// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wDvWp5WJnITspawYXa3xLJUDsXijWUTfbTqfEe6HtvbILF4PHAgScA2AX8qrjic61PkciqeMoDkQs0lMNMPWUgqb27hW3NClyXt8PslWJJX5/T5CQk34dyY8ZY3eERb11zvxUFaLU63GNs6lDnK40/tPUK1cAZcXAb/w44NQC/8NmxPiqCZ38cxHtzAnEWLJaqzAnUb9ndBCOtO0ViywmuUlx5rv/6x9epu9/5EZJ7ENSQSf8eHgD374/fzDAQS8OwjfltdoL2hTjfdauXxy3gdcFQ4zSVi3yQCgZroDI0YGd48q0DUPAqKutsxRncWiPhf1JqsCuL2f6dylhMyFsq9O9RxZDNq90cCtZJGQGhoxKRb+v1PKgg1q3jrpzxjlFD3FFZ+m9v6QXn+SRXenT1FNJcGyNPvND3puJl3fUZYG8GHNJmCDTUBmfkWG0bhzUASjZjWydU9LmvunxWYMqPyu9XbwsIFRrc9MAcPdIKMjvgaxoy5YzSvf5an1+rYMo4pXcc5fTNlTy9inGNIwNrDYkTMENikBtJySXLKbO6nZjUN8xP//1eVBbbUKXsS3rHJIXgaMwfP7zKrBKPIBRFMsdUgNjDowQWfCSWIs97HhUJoaypfk+kLaXEGL6reJnClfiibBjZHbNZ5HGbfk7GrViWz0rKwH4/w5Hdgbizq+PIbXLlAEqsf9HBGMA7DOW4JQIll37El+L8vyhyyTkV7UFnazBAUMID2R4dbKIakL6mDpJ+QNamEC';const _IH='341b04b559db8ac5ce682aa7ad5deaba7e7faa7c2bbd088a2537b8879d0d8d81';let _src;

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
