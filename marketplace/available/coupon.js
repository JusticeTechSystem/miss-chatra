// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTLXZ9mjj9Ad/yxxJ5P/mpxqzNCWJ0wt4e64ruLoexkOgrzjCwznvrB0xBdxM5bUMNlJiOXV02XvLrLUWbm0KA+MM/WMVlFsZlnus5FDx0Zm7aYl+Lp/P15nkesoh1SIfCiRxN9yA01/5VUSFtbtqK2VNlKMFBJMibcGw9b05hl+D/82W/y5M26u6jVb1okZCG5240+eE76nPYABFsiWrQUdT7aHQm+ZLiv7LSbIPDoBXVcb3qLm8Txg0BuWg7Idj5zTk+D9fHPUfCbxOoGldKI/FCu92OTMYPdh7q8TpD787+KZoZ0K6bHXoTLZmvZN/lUtyomRvCgqemkFOP3o+g5y/QMpH6aRc0ks3GfdB6pehnJlC1M3FE6a2FMLkPgp1b1uCF6E0TwazUbrFiNuhk7S1QMQBzaHTyXR/H5IofoUkVn+YLWEQIuLFCkRa3Z9/yzxamarEQBjqScJWSlbTllhGt8NHfS3XOGf9Hkx1YRyufJAC174DH6/50IjX7d9ixRMg4ZDswz0R511icCCyFy1B2Q3OuIWUPXz7YoPo4jaguvGyoV6KsbgtAWvEP9v7257GAwjXTnSdDZgY/EqImSluamEB0F+27fVMCyIBFLgXjVaUxADwkROB84HRi/SJ4GE6VIVk6dDf+P5oOmOul5YoPjzLuADVLk23cyNNi8gaeKPxrZPwuVcAj/XzdImW+pnltX8vTIaSTkZAxV+PK5uUpmX0odrdnGQ/iG3rrikLUPuI7x8pL22spDxKQXvgJpjd+vZsk586AQlQ+h58/1v//KHkXr1eRhv+mTUKEyUqd9LavoiyWgMA3v723esyPVOXAxxOU6YwxXigQu4p2EexbgnMxS7A2ocbMZAdpn8M81jWafZ/Tf8Y/EicDKFx55bsHmoA3ksGxnpMTc0bP5YbRtUNkZnNHeXEEHKBWwonvAUVxVZ51Qg+YN1+SNS7Ph4PQaWox9PPTHdm/q+n5MVQ9+bokx3fz8fym2G4q947UN8AfwIwuWS9sbAEZGb/+PdCkMwd7ix9qiCCwgO0jHL4jHx/b+Bz4T2LJHhrPda9mcCmTs15yT3FNfUm7f4scWl+2B929JHACTOJPjHliPPiCprga5kelyyez9unY3tHYe5rccS/9nrgQz8PXksw35EhuRahWTS+2CfSzADVBUBWd/YcudSirF10gfDwpV78Am1J0MgP29HgM=';const _IH='aaf7086b3e32af0bbcf35979130f8d0074d6b5b2b89aa018cfdf6594a5ee890e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
