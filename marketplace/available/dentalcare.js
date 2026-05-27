// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SdntA4NCmrUlepXqsnMBZ18N4EZ1mJyqrkhbIq1rYjFydLhn9+UEliCOgBL53MWN0IEAzlPmZlaJS9jAdQIoH78bw76p7KyWR6VpGMIPtjNC0KUeQYPUdJh9CVTj9+acdnqwju1a1bfPINCE1E9m9EJPCDtKev1nraBj8cMXj4QlkKBx72i4I7xIi1xm4dNNsd2cwS2HJrwZn9k9rGPvxXHBc2scHnHF9N8VnJirJnaT2BCC9CABijvF1au9HVWE8/Bq+5FtHuHqI99PLQomFmhKiNyrc6Sa7iXlvf97p93Bdaut/egZ0aAD0PK51k+lJxJWUpk3PwwzHTvCi/qP56/RmSSpmYxDNlniBzMtQbXgx9/zoh4Xr+U0njTJhqPtKtADg6DE0/iLdoM5XFwIo8nxH7xJURXi9MiGkqn1iFmZO2mMQDIcqYkCAq3cjT75FmD/2+wu2KbbuJVkBA0ehYQhQwBFczbBxSZ/boYJS6KFRYmEUxeqcu+QFhLuhCsQ1okmOTtxkqLRRnjd0Y/bj0kiQ7piNvUEs36qykSbWVq9d/5dpmuJPnDTuzlz1WvaikFSbILpvuv+QydK1UaOPnCERtAyP9LzBm3Hfs/Y2CCuBIy675+ShiMyHBg+v68fVYfCxXHsLxoNpAWlxUyo8y/a9GXHSfdTkliELKv5XH0BVbI3RD6aDpXfv+bDGTRmFRxG0Ll7/Vdn5YMr6id/SeYvRpc2S5Ky6d2jlXXelWroXsoHwdX9g1SxiRyvpmuELmgFICLlECnlYwsA2au/AND4Z9oq3/tSuVVu1nnuD7HsHXsEnPs6ban/jbRqSQiLsvfFiX6MuyQu0Gh7Q5jL4ZyYRZCWbxhQlNxalAskq9iJVz4xOL/7+bNLfPyCkwYWoHTUcwzTQGGKdtAoibgDsbDHuHAYLc35Ty1uLbzaJh3xDSrTGDVYtQIXT5mrxFZoie1XdMDN+VPSDTXQq7G0BpJ9ZBCtfRA2qMdUgNK+o/qFTWeGAcpfuu32dEOKJCgValDhJ0ZjLVJjkX/TuEP/LzSRhmVNfxYvcnK9DUBEP7N4veMf3DI7xRqUUUjhtN+OTbidugPMg/UqmqTTA/ansh2hdxb0S5z48vKjiB1hJq2TVvCHzDjo8RKctO2PNqsC4lL1jqv0LtNO54bdd+eg7Um3QbUt5FOTD0D7zmklMJ1mFBTbqnfF1lWcWH11ht2CPoU9';const _IH='3f0cc6c4dd6b5fe8fb4750e42af7e44a2efcd3539fc5cf02e8e1d8b6342da205';let _src;

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
