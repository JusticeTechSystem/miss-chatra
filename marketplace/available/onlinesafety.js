// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ5P9bllhIrC/4dU4QA4XshbrLDq4JT887VUBzNnFKNZLvWElHyzZL0mnmXliTZaX+Z/KJAvdb7guexl4j8QagPcMpuuhoVmXFeB1w9LkupEmZ3kalw+8oJMf4ma2zH/jgFwkNNKCSNgMSxBMKPGCm7YzXBoxXhLXadVjl43K3SOIAOnR1rCCXEqRe6YKLG8SdC8K85taoR/Tg4sjBZ7O6t4UxWofY3n8WThjDCCxY0m4JexGGJRUGZb8mCXmyN8WabTZ0LUzrjwfwG03McGHdVS8FD5cmMbDMLhi5FOgFYyZc+9ZNrlhOa9WQi4r3wy3RAGdLyTLMyoVUX6XBP9fA0l9t0vq5NF+4vePJa0ekl5TGw9LVTHQqZ3wXYXP9sYlfVB+NIMRjWFf4Pasb7cRcQfKyECJFcPIxba/NiX9fEdkE7t3uGr6v5cJNybv01LX/mKT5My4UW7+MeT3YLI/SyKjBHvkZO8Sn+uFciw2Vt+Fkv3JMW3tBZ2VFm8aVsl//WVxYCiMmseUqRFuX53oFHI6SmVsAuq2FMdN47aTpnee88Ks+5Q4lPT2merabF6WIKmHuXhUfUP4LAjzguUyL6gNTVBum6KzIggxhWttXkNOFnNuXIpEyQjrvH3gPX5D71s0U2umpc5nQn2CwJyGvEJ8VnLq2Ux7JZZwTKtF+8Cyi0YI3Lx86v063Bm7s9aQ/gL9PMotLsAed1Y7vnD8TAD2tzHnkITVhzE2y2epJYI1FL/TdorlMVEqRrfmseGzi+vViMvwwqFSdIZQjm/3AZb3ffhGDmgFhB7HLVmaQubkwo2kssEH5L9qvR09KJhfeLZaeAPwWyt9/KN2y8XVl3reuykRUpi+jqi2StMLALYtufohqY5tOmuuvXs+eqbPCO8L6ZPtwfhI8MtjE4aMSs8cqgsxZG04x6V7jQ2zuoBl3yWJjIKRtydVJdhYjbJxgqx1XQX5shwAGvBJuYSKPHmgyo94cMWo/VM6M+h3YaMK6CfGDS2/F23xr8BX9ObL6KfsxKfx87x3Q/JXIAqHeqyPKSAuQIxu28zdqFSswA3QVYFzuygySku7mW2hM+yHFjWA0+euIB9tCPz1VHo9jt1U06cL/ln90dekLTzl+4Yo5LtWhPbvJW+QM0CaCw3ADFmoZebtmXx8PrOxE8tdXy6afQAYBFyXEUAhWkDyyFWRaXkX2rP+XADypsJZHclZT7pb0bZiXVvjo=';const _IH='7749ec80d9b29bf23fe696d7c8ecb7a0a0b718030d297e69bc804bb2e311c8ea';let _src;

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
