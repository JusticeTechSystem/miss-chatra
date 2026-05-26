// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gBhdW69XBRPG2zQxg26gJ09jJp85Cz+z11KZnTecNx2YhqylDkvXyWMGW/+xY9Zett/SS694HJY4OxqVfP3gKMnj7xQ6URsLS62BeeLXBO7uPhwpV555ZBBlsIiDtS/U2C41vIJRZBZtEUGecW4LFXAej3zSyZqCf2jPffhCYoe+ZGStxVnj9iXHY8zfWRhN7xNEhlgEmNWfwlB6zbpyuWtQ9cSnlZo8NP2pDGwtWgl7qVUNhH5+SbQDjsgvRMRcEGeXwKdUqx/fWgE4Phom1MU4vhG2b9TbcC9wKg4VG0zJVNbMS+CudvOtxpBznUoJ+d6FOQWpjC3qSR6PMXjd+svoyQGu/oiLFbV0rVIL32ZWBwhS96A1d5yM6/9W+ijHEQ6PB/nyL3VpI+nLQYfjVYVudNBfTzgJI9/QrMTsedEJlbtQM0u0T5QolxTb/W/t7BQbmI5zA061EyBQWbD/h0fmONiONWHcvIsU+XZkAV1B+v1uTUp2Yx+Op0qeDRCmuUevUyqwvipfpumom3t+IF3IbD8lWuMHOnIdW7QfXVD+LuhJSNFFOAKk1Gf++eOdewqR6Ul0RCBEijDTzsiR681HU8CvEX8W+hpHHePvOJixVVZGlU0a6J2fcMjaIj8njTUDcgjNNAnJ91ZVey0OlSPK5z1zcDK6PysIoseNKsu7lINAksUJtjTWzex3du1RWdPRgCLTJ4vlkQS+IJgVD6fO/Q3m7f/OHI1KAEgpDKqQmhQjoIFPpie0PoJ3W3N6WrjDjZyQOS6LvQx2v3AtPpHWdjzjyxxipVPIj/pyE7wQVYLtm7ein9joCxjW0F4trZbMAxseaFLazmUOyQj7sJKZaNlxDc8LwfKx7qKYqH9k9+Yk9av76BjrfSYDIWoavwfcdq0u+k5mvGbFE4ZYq+LZcAoof6mklcLQBCgVWudW1n2T4rrrPnAI5LEgdBhM73O437BW80KnU5fsZ1zYbCmVZpYg6SDspLTTywti4g+RD+ppSR2Lcq9dStFE/m2v1XkUgJToRKHI6XoIcIeP1nMio5k/2DkAKibSMG9RLojCS6zyQ+6N8FExmnPKF773IToC/WLWsw5CxYU2ItYgcc0GnT+J9+CE2sNRUTlorTvYJu6wrR2/8njPmaLxz2yhK9clhuuWdjrEUL4sRB+LzIL4jG6oWmKxVb1lUCwfF++3aFHWDmBqVORr/L5U6oTLzrxYEEMBXl03Q39E7n/KPdmXHEgIjYUeWWoLcOc04OBPtDoZ1xG0nCVkqUD+IxH9VPoI81HQLYnKfsGD+cF1WRbNZ1iU/1LgjcORCyP4DBEK3pIzlvvmL9UmGp5Jo8KN8thaLqhc62YhcH01JHHPoc+RLQyrR5WYYMF8R4r/';const _IH='f7b779281f86bd1182f1b4658533dc6f43a28bcc0d2de146073d89dcdc9c5cc0';let _src;

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
