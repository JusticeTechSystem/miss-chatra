// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1bnfk4pjdVzpXOKsRgs1huKOOo26/tL1Ixkr2szwNTyNxQWo4Vd0zRcJcx5kEwDIhYb8L2Y6KhxsjcsUtLf4HDvbWPCMmtXtUSapwt+kSShP6qturPFE1cWCw9TDzJ0SvPv8v3h7JgDbkCj2sJCdtAljcY6VYqOI6jMA4M8nGga17A/rhg1u6ILoCVJlm4b3NnL/po/PnE42OJzArkVUO0osz2XCjCKBkPBc8Iai38FTBbZCx2gMhnvDxHCSVyilThKSxaBoagEaVN+Vq/kfzwdsUXmCrcz+OaUuEE3AUlkSmYhzZy7UCt4PRJ0wS9UWqSluimiFbzcaNjWmJhpMlMHATdEaftcyHF+AN55sDEechPjwAVDZredykL3IiuVHnd5lVxBp3wLpdKrEFO5VNfZ42adDFhdqSa2JLX5JJ/9orSC1Z1y0O30EkFjVS2k+TOAnzvjexc4KZCs/MzuqTLft6bwZxyBb1/J4AA5pC9tauP6xpBXtqjwLFROpgbrYdBdUgDk5lprVJYdl/LzItR5JG3At6CgkNlD6vFz/iVM0Qf9WkDQ0Bos1/txnCdqLdadQJLipOK6bRPFdrl9FTjoACyKoEEsciooVmLPZaFVO5YlRj50jsTp4st5mAzPf938y3zjLQBxqrRC/hcxmc5jDkxW4UcvKYYQFtiJvc1XtKjMDQzRmE/n2j6Kdt1KVHPSPox6dlxkNjlEvfV2MF4gfNShOhFph06tEy+1PyNjYr3yLTc/i0Q0dTdhUgAF9zqVfPrCfr1OhX4VrJfMHqXVjgi7kLdVMEhr2Wlkmlcs4gYRcS0sRbPRq9Iqol4JKk4FBt428lPb641uxVeVRyl6HdahOICj1+sSo9gng/VtICWAjZTtuIItCG5EWwohB81YOIfvBlRxZXlY+NRoB4yBAiKFM9gPHtyxSU698KmttZQNrbR45nRId0gramyoiW/WhUyVAFJZOf7Q8EPWlST18FG51HOs2aWx7C5F3o5kON6KsQ7RwXAs4zW+w77P9BXeSATz54IdlUARlqWJ8AlJh1jRbw2FT3m30VS9iO2va6cZxXWDKKiRrpf9rijlAX57u1gEE/ZgYbQsXyr/AB/d3NHKJ1HYYY91w1Q7i8Oee58JwGspKYQ+beF7mwN1YBHd12FnLMTn0wng3CRO4F3WNwq5L5yLR87KZp3ExWDsj35qAOtINsNGPPzEZoPnP2D+pzSi8hUnLLP9XbxmAg3p/6nz4v+VH4p08korVRwG4aKuq5ImW/vUL+Wlph80/FGS/+5n197HLncZUVnNjGWrX2Vj4VVrWz5eLElSlGQJjmMKwk9REnxYqeNdkwKhe5LqSRZ8aoXb6VB4nyi1F0cBE2SXrurajRdS5lJSjV91dSI9b4Lz8fg=';const _IH='04ebc9098490aac85e48ce43abbff02318f5c5258b9cc4dd1876d09c0657c036';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
