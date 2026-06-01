// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2ydF9/PzFNwM0VjWfvDTA83zdkoEsMS9DLzKaxPVhyB+x2LHL2yoIbVZPFjLHHcHyb1l3UZ3akoIr56pI26sG+XwMDAjLgTO98Vkv8WwXxeiD3kz9ga/o7DKbRiR3QRbhqGVrqXqAHWYHX5qgA5nWNGn5k7Nvv1nlPusNBPuEfTFa6YxAWPbmjhhwLEaTfAbMoTcPeRfDqzoQEQlXWwEOlPG8GJ/XLdRhdED8mO1vUKXeug6SDQOtqkMVCtvJyvv0USP4ocwvmH/+0lgmMZM3p07VI4WviEZ5/xl5xblNGmaQDf1lPKZmdS9SQArYNIoEo1ohaKrZAdz2ArWJzRM8pRbfeD7fWes4xKH5GkOtLOQpfsTpZIKQ5H6Jenld2bNhEGqx5A9v0RNglo8mFruHovhLSmS4XzOaXcTESOsGBuiK4vE/wYpaOpcPBHh2kJYNsiVmR3GY8uxnGR++EAwDV5v4DOzt1G1pdDGL8VyZAalPBd7pyRTPr5JaKfcF+j0dGkRXVs6m5/5XpSJst+0g3yesL1ZTEoaUjKKE4N4KLCekTTKvy7U0aEk9Y4pkqnV9MParcmlqnyeuQRVQ==';const _IH='a56dae07506d1e72efe2e32103e708e0807a024aad3077dd6dbc60e6171865dc';let _src;

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
