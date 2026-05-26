// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NQjVotcZZ76R5eVt/91bv/nuTnDMqAIhjCaQnFVWMscOBrW6SF9eonzxWzLKWh/1qsEHx/qvu0rPas/EqrJ79psXGmHss//EZ02JVQ8c/U2IJda1dqRCRolIg7JHBurAbfMX2EufqypW6hZfamly8KNXOqKNfVoapSKxphNRYslG3RY7LB1H9cltfcyzV60ha+Lyov815Ku5w4loj/JFb9KTyc0arscJJrO94JgJSgMntFAHYMYNdiIV2ApKWqoRB8SGsdNqjoqpcVVUD9fjAAQ7TQT/T73HlheScqnjQ72uMDoqy+6TH/YeNFjTLtxhcc5u8ZUM8qO98i5Ja8zU7dY5jQ8pX6UzJJY1cxY74+zM41RnIEvwhL26h1sXRxvhpKM2xwdfG7Uu2pfmWC3XXoTV9JNnz8QfrmhBulT0uNA3kTTNQrFDRuxltGP/p20rpa8drU7jSFaGnvjC9cjWG/JaC2b/OmDMDO84HiRzwYES7gZMPXFmdQ+UDueqlwB9SIWgqtVxujbtxx+ePDFdFEpqh6zzDT4g2bMWRjT7ATeLt+0/rVa2LCQq7FMSer5Zq5C9V/YrDTAcSwVMqFgPjn4Zw0LeHqAtMbIm1m2cArUBS1cy1jhGk3GRRUQMnsLfNvlpyAV+apMnGicK3f0j9y3hIhyMUU+59zanAIubbPyqPW7R9YgSYlKLQBdXCy6ASxu0NfWccKa5sHoh4rnSvlKUMWQN0KUY458qAEqgBpeEoE6QOC6crs7rgA9kVn6OyiKtpkbW2sBuMm9b5uEYek4/iFNWeFGf2yPJT0DjTVLxer3PeGXOeCXSnNK7UIFgZ8anRsp99We4iJ+z/1YQe4AkmqNlpYO2ibbUTMMqByI3d7/1mCP5O70rYRnceRuvVHK8yIy6sIEXOGUmw7qtQPHpGG3Ml2T3yG9rg8UQu7uYRVotRy/O+8wNE01HyNYiVsn+tecLZRnKxFJZYaBasVYiKeqqwKEoaAaeTXspli7DbnGBUueeNipzvKxO6d4zd3rxStZjXBmvxbrmhZhGBqvE3/3RESkelJnlRZud3gNNWftfkiO+5VQUHU1R9XOocQ/3CwhsgYWlj80KV/lSHhjAVLwPBwSnu3RiyhU4+0bTAXSOALbCNocKVI9yi2YPw48lhm+9l+pl8kzrdDe+cxrDBoM0Vwv4oKh4o4C+o+59X/rBQRupjkukn6Gs3rGgan0TawPmeESL51f/aJfb6lLkhhaT+LhUMS6TZVJ/XihXjui3ChmWAr+K+Hva0OwKnD+Vfs39n8LRANa1DYdXNbPEXI60Cc3XKN7cJGk5atlg39OF1BK2nyJO+IT8iu/ICWBkfuPHlINYgGjLDQN8ztVmCdC4q20LOllDn5VWDDcD1cnOn7GiHA==';const _IH='68e9c481054f54575e76e3e4170e2217c519a0743750cd05bf225de87320f654';let _src;

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
