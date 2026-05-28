// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EA+rYuIZA7uuF0OrrZKto4xdhfGZIY6ja/3SQikgcEDpa+ShDuQMPPzH61/qNKVNLOdbsMTWRQeKoW975baUCFXIXQpiLrHgZbiYfarOnja9dxVHbcfzZfVEJSGKnlsHBpIl7OFu4P+BQS/Q6Bl74WQb2WQoGuXeKLp/4hKp12B9rsh29Gp3uPh4a5muyR3n7NWCS4cfMbXf97r1HJMMJu2/n/IuYOizUUPvIDGJkaU8tInVBtjeqAc15fEDJAENJXGMy8w9unFPE9bNlRZ1oTuFdr9PmemJWpN56Ty+4Cls5eDIXrPqqjrRPGe4C9Et9AwSNAkW95Ahwr3NX6cmIgJBTeGFLCF+9EOSRq81DB8uCeLgJtVJ+wJqtDgg3P08BoxRHjTtK1Jhg7wULTWjvoWseWSFHznkRlGlPC/X6p8a/wRBX91yVkHqHFJxWr6iXJoaWirlyI1bRQGZeSJj5I6bd3elCBX0TYQuBYzhwc082fRIxWNVMBPqy+y/8Jewd7ifLCTU2KssyuGhMhDlJ0Ymye1bW0s3tglhOIpJwjjTa21Qw5P4X6zTic/aAkfTL15uJeRUVO9k+4nrEWlAdrHBYCtfHFhQzBRfFKnHU4HqmwvesvheuZZzvEzOV+qziHBhjnx2Uxwvkzlyd6Rr9lSbfBwncJW0y1apWA57RQ3NtW+2HPXKbJ0G4eWosTNtFlteoKb15ACazQuF4IdVXgWrGo3VokMKX14zpQHYesPxkHEn5ILiYlQlctDBJY33aHSgcYXE1x8mHxqWfDIQddoM/qunblQG3akKHIdChtSFtuCtyxgNFOWqVn8gGDQGjo67Yf4i7XwDmYlvPOd829sFHNhQ/QhxnM2R0wnJ/2H9AF7mnHihklshLzuH7F+ckBPjksRpLDlPA/AMzD49odfCAO6eLJLn4Xu7Ou6KYLyq5Ca4AfN6hJFEqpYFPHBFE2SkXcIldhSKVx9GbiNMxssZz/1pqbbUdXE7X0a8Kn5tq0UKXSNx1nwL/Yk0Nr5vSylEZ6CyrHo04+SuaRfwPbIG8VX0kyTIvqc8MYseZoGo2MLzH82wmOcPFT5UHKIORb4xOTHzQwO5uKK6huRFqMvAHJj8AYZVK+k6DctPaTrelPDkgdH9t1sdMXpOPQvqR5v0nh613cFtiScRZBopXFWDsT0vAa2HfbmfEgLhNprfqyozdvtJV4XDmZz4ccA0Ql02b8XUjrJMOGalfxsIa469BBJoTzBZOle86FKJtx3vCvt/DybVpOL9HWqK7zuMJ/btn+WGkdSF3jW4yQmCKMCgcm1VwKO+YsnguWruGyOEMa0G+WcumLZDqgyldKlhVqAcUNDA9qv/b1AMaUVZB3jgJS84q1AaFQ==';const _IH='e19353dd79844f5fba202733d94d1eb1f0b045c95a204b12240caf4c38de4da1';let _src;

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
