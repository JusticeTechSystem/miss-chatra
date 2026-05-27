// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WlEaW6rzLNLBrQ4TzAfXGgVBMv6RSV2dm3K8c1FbQUGN/dP8aEk9G3Ti+GTP32C8XDl+thJQ2JnOSi2l94OTXDVNpPmAWolT7wP8RjIc/43MOMwhSJXsckR+WNw8YCPTwiW+O5LYoYSd1E9FaykGS04eqOvyjUDCt0Ec518YmK4F5yepS0+3c5XAU4W9b2Udp2aHTtczTPw2mbMSEk7oxV7mgXhyyc/tS9kQkXR81ZOULXuWBFYovm5u6qc0QLRgSEG9qR4dWQBKfBClu1toYo/L8HXj+zYFj4/UrSgIOg1WluXDKOvRNdGu2n4ohGzOSmpBDiwNJxItJh+Fjo4sLEVLV8DQb/Iw9wlWJGtgyYjPRux9VYZRduubvrE3f0DEgwwxFiBncxyGjlxllfA6v1Spv0+i8vytkZNVGruyEFegpOfnHyF0nuJZQBNgwwUhDZrcB6NG8PkVe4SIymzoVNT9k5v9S5gcF6ROtPgtwqUgjnefXDAWqdsFXCoKuirzCY5yEaawAqWcZh+/zRf9HSqweqhIPtj666g6+hX1zt0zDfhAfjshl4GctvcTJs5QEAuOBC7kMap8O/Ti+r7N+9w3NfSQnRRpX/Qm36cuKNA0Et9LpA1rSbLZ88C5epwclSbC6b/NXHmRfK2R4Y9qz24Of+FYDEXr5GAal4fPZ0bavhhOFIQae+KMfe6Ogs1rIcrNCv3BA3VThl3ZVeeTRNUsbw/kt2B1CZeWNo1YdzH/UQ26PrQ8+pm+k1pq06+MNvmQuDqNykgvpOl9sq1ubRAungglOtYCliPGNv/GRZoWOcE8xd/LJB83laDvlp/vPphSDAhISBA0nwKBuTFCZgctUXm/cEyyTHgUrJ9Aac1BKSecMeEI9Y9/UBR5B3LEQH9ILGwTLV6R77i9CgBkRD06mqum7czC3kLtRYvNCk7gPthVewQmlpvPkfsNiU5D/mnEbrwa+RDOKnT5aVj6XcA534FBrvEzHhPsqsBdOu4oevAOIXliRN/EJo6A';const _IH='6cd6b329a5f583f074a999dba9119b94b16415e96cb703a59fef68bcab30ff82';let _src;

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
