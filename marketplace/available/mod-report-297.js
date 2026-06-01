// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyxtyjmjKpVuRZL/PzT6BWGFB/BmviNraGdXIw6GLOiB/dU/LSjTX8r3Ytbr3eT935T6YgtH1RckQtwIcYzEc9YvSyoetkJQZ/mAOCFQTclEeX4oPoerwxokhso4TuUilIP6HBBt3c/yFTBeeX00g4C2HcmpX0vNG/9Hbc8A+kLp9G4XQVdwvREfPOJwYvEN03smm9JuCUCzqZDCm5RtTGeGf+CyUJXxgbg/e04UN/5RhdDdHY1p9LjGW9l1I/GvnH2JfbNYBTSh5CP2ivpDwaJEjQ/9kl5br6vx7j44NMpVf6fohGtS68DgmyywuH/+ll6x6KiISp/SBbeS7hFi/uopDPli6gG3Zbo6MZxW5mfNozxdOiU+TrE8RdqxJUrC++/++9iUfQQp8V0oYgnPQg4DrIzkVAAZDVjopHWC2v8XqUKYxzQkaPODhOmrfbp4YuqQmnncvvTG82KmkPgxa0o1o0pkS3Jh8EVPMFsRSq4s0cbS+x7SxXPvE03W4oYU7SUZUgICqTjFYZAxqEIPqMBgYb6ZSDr8d+9hG+f0GYYdbLcTZGgjA15xbtVV7H2+zY3vMfwYzuKwfwiH4c649WCjL7/8x9i7fnd9lZXXo4VdZj6enkzbDwzKxrpQ0ROSqYv/tm4fzXfMAnZymuQtDrnIAtarWN0n+wxf9akadkXzQutFhcFhToFDYewQDhRVQE171DUfwdGUsKzFqTykQFgLMlECu1MKRfp7R1wpO+0JHFUN8vio/TcA6Lwx28SGJdyt/PvYDTdDrh0xTWbaf93T1W/F2RHGYq7XUZHZde+rMgi0kDFb/hptuRVMURPaFyeN8PcFPyf69rbUr//k5VpnicEd2rqceg52l1aYan/BcLyIQwO7IYcICPE6v+FqM5PTocavDvWvyOcb85YWfcW71i+pZCkA27zFu945EJRBy22fnSSIFRXXyb7DMdkQ4gWXRqNLdQLyLoLsQi2UbbnoSBB6Wh0t40v6CgYauJm1gaV2Aodz1g7VZtO45sHEBElaWFdFvlrFgB7RILcoHq0uTl/+ml5p5OqrH6WBYbuwIDWBP3Vwz1+WC338opgCnFJt/m+ajTwSE5ca7fh1hnSgF2K4EqqcR7dXt3+h6cgw5ly/lWWlXQD+kIU2KruvXUFXejcngJ3zgzBHCPXpkqfPf7h58D/xk5YsWfXR0UUp1o3niAQxe4oj6LH2a0FOKD5zZ7MXd2D34dG3Ii5djS9VkT7cfrc/1Iw3ZFZhJaWGwb17CK3O2XcYeHjPK1EDmw1JblaVMG+4+amKKfD1UvGYHISclwV/4oyFIPJBgKbddE5g6MnIBgVvQ70K5FhPsUgHk2mM3FKfyMUwPV8Xa+Rj1FRzw8VJwgD2A0wIt9bNbiFJUqaBFC0=';const _IH='eff577c22cad2c8b72f9f552056b7cc88fbd6c54a80808180bd946198bc99ecf';let _src;

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
