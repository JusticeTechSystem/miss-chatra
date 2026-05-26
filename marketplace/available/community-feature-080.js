// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z4eqgeyhaGI1J7edAGhb0sAqEfWtx50Grk9Ld+6CCFAGDEbHNOWAkpMy0UH0PJnNILFooSBQjUx1xafiCU9di/DVpHK3GrqqWdFtfz4i7Q5/8xf9N4Y7UDUmRSIv3bylLZCEM3t1NwfRiG8z24pcc78Zko2SNx5UwVBucYKtbiHa4f3yvA72ymSfmwdrSlE8fAWiYeSUSFoxon6+4BZJujDB9srUsohOAHxqqlYWUaX8QVDjM7/MLx/1r6AqxKJ+0tgpg8tCVjvQuFBSTmzb5AWxLCrhkPmym5ylBFsCtqU2gJeznfF7ZjmXMPeAQ7uK/fc39zBDsa5XB+n+MY8CIDS70aNlS2j6nzNRTS6whuIAcUHIT3HCbjPwbuLVZjc/CKeqCGz5cAuMgu00pemt0jD5HkLcQNuxY9VbNPddXgQVF84a5UJ12Bx4yKrpgefYpjsBKWdgHbKBakuqSbIemrLdHKzJwBpX8O6TiNH8cNa6U3NzNMu0p2BGRZvrdLHmIPpU2IOMS8HXRIIhoZPRheVK0ilCHzv/8Vb61nQDbSDuVNtw8JifufJi93Nxg727RvHJJ7eGiO6eq0bOmxzTKsSnpolPzKkEjSxWfctJll0ZS8Ip1E27a6GuFuhHv3wCYcRWzkAM/gDAypst3cv5RkcJ1ZfQdrpxK22k9fvMY8hdacce8OFq+Eg6ermb2pF20SrShuMqK9sPcxwC0K0qoWYzjejjugwZBNp4u+3ghhBtVsk4mPg=';const _IH='7620c83af1d93aaec14c7a85d0bed1f3101cf5a44ca89f889f278d9337a79f76';let _src;

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
