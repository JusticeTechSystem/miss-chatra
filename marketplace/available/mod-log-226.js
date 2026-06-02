// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MXPbQJVbaQokYiR1MFDRdAgNtYyuvWGRUytn6jzks14hGE4fc/BsUQ0o3MRdq0T02M2Ak8gvlBkWd7FC71sjZDhnwgMSQCnrJfIZ0ofekeaHT1qimcxd0FKw6/p6IHtxLQ1aqwvJPT9DzjIhuck3e2bufCS8tPlH5GsW9nltI/gnR6ayHvPcuedWrPaWh5dF8fYEd6U98MS8A4/3tuXvUfSxgUYjJ+XIAc5Gyzz1l/v5mvijGDdbyDq0c7wmPmH7JlxOhmVo+Bp6KxJPJMxpB2ZTJGvaMFp+R+anfXYweCUkx68rI6gz6gN4VW0htHw5PlFsLChJJT58tAfoMaKxDaJe8PY1S3rZ5h9XijL8s8E96DxQnvTHtRqCnp86z5N5Wp3viQKMgyYflE6lt6VkRSmdGeC4Y0uNtcs3P4XcG/NktCuJsJddsnTUOZqEsephh/DqPeeIAETPYSYX0QcLgzlEHPkZ8ulSuGw6+5I6Y+kJW4VecMWl0arEnxZv4fHk/z0vNIULYzHOqyTbfG6U76fY6jTHBdwXDQGjN4FQ+KRoYxPDVFsZpH+eRo77RNNAQ10pDEklsH4S7SFBIdWzWSxkc7Kj0DCpNncNlKLt+I1iWlq5ZohcFfqOt6WSHUch6yhXLnptbFnBDn+CGSefh+vYhE2RGR4mIPpQVCdoBmTwJArpJVxQbNsr59dLag/cvlsAH+/N02DUQva3qtSxxayEuN8G7Nr3jiMTRBubG2o+ZdgDXkgMr7mK5FMGLeOpXQWLlFGPsVIZxbJKs5+2dbKYC6eWpDsvBLZh4NQZ4JrjElZTqQK8RvKgJb2WG1EV6B/WxqORslXk+BPFF6JJT8MhpEPrCkh/HxKrr0qBscwfspJqfk70mJIuqF4arpys9S/KATLg4+Jof6YNwBeiPivzeH2VMPjvcWhsjRHDKXv4Nwo5NqPx6eQrt+ohb/8PEbtyjotPY9vHoG9qXJhuZTnLHiMQObDvmHcDblagiCzVN6PBqgN1S4fQpTlSVVZAz6SaDoPLhuN5oPd6ia39FpycGL49aoIs+ym3YBR8cguxvV9DL4aSQCtGMdfele24edUBKufnTzI7mjbEUCcxa9L8kU6YX5LLCOeJlMRKPouzm+1iZIrRNWYQ3D7rWVzYod9vC2hTuQbsEDQFZQNNSvodXNEUIkbntCkU6UqdhHqSPcGuEFshjvjE6AAtAVEBoxpI45kDfRWyleru4ZPSNpOm5zKVFZaIl/TU3yLrVqYK7kacK4EQDw8Thvi70HzXePq4yw8fFIaqi4rpr0fJoHOfnSSF0HJaxIXLetJ/V2+QIohPZfRUXyT7oaqwh+b3vkWlBEWbBTG0/w==';const _IH='7f04d895cf4e5ec4cb6c927c9d9681cb40b3ce2bdf5569b608a6919ce8637d61';let _src;

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
