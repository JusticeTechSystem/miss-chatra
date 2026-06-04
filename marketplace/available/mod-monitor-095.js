// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E7Yq03TZTz242xD/jEs+MPOPnNFcZOeq4aQHc55mXGQfcEpIkZ3gSbBO8DuoJfnV7LNKp3sjEbIT2UlVG/qS74SJae+oTNlOziHVoBNW9FA/bgFnOXAgohxP2cY37RaqsOXJLsWtyk5xHUdm74jbuw95S2N2M34E9qBNlIJhVIeGFnwmc3EAkEqaEkQErdK2qla5hr1Yrw/ttH7Mg20W391p8H2s+dLV2V7qcBoqicVgNKGiO5TTjcLq8xO6kT68bfpb8cOjf0x3vM4l1JPa2nSCJfIfGjNI2ovBLPdlgqTWJLHbOiwISU2E345rBStfNAxu4QOTrrSWG0eJvVY7cPWUiyryfCrsT8XuvXR0mGXmZvo/X1h8Gkp/ZuDhSQ3h4kt1R1ETZ0y11rWiroDkG6MD9Qcj3Df1gVb/L87wj282nik/mPec77o+7x+TJO54xIlBduwTtOcEzhlAATi6F0zVS2Kl9HG3EVEGvPtOQQZHLfRU5hcJt78qWq1tH7qOzEGp8PFxTfSF8Fcyedm1cfEthyELq6571UJQbEs2t4o28A4tXkfqM8Qs3U0BMwKDpjHKnn9BoJFM0cSKA/iIKJkHkPXQW6WcQRGFjJ4xkCS1iVJR4hKQjULqALe8gJgTrSeP0aFgJnckGb919FQPrq/AQJIF/HysSLDlSEVJ3rI5YrfJbAGzy6EfuFja17lpytZS+l/7Xu1AiSTxdyA/BLRuxmwW3K8/TpFViSmvU1SuMa7esISpBp802UDQ/myKRIdgE5pDGcKXwr9Z/Bivk0I1qAlAu215XsfyfhYtzapFTCdT34gOtoteC71U/GqAQpXHkJAFAjnZZYX9u0VNEmEQG4K0Hslax0MOmbUOmixxpV72y8gSkJc+dVa1Z+P+UlNvmVSaVOrzo97ChQn/k6hGw6L5n/40+5b2ECYbmR0aadKKhugBy8Q5vZnq+4xiniV3PQVyJYrJjJLH9Y4ejNEoHTNi7/YzlEsXoIiW0q6WgANFEBemgQC8TBxzgDzhMGXRWbkbr2zaLrBkOSe9H2rs/vcJKijbyCXRmb+DPOPUCwc5nRdMqq/6a6/VzmXgW6WYJ15zjSLg7yM88j5ewqLbpWpGsOWmL26KzBNA17fJBZwRZ5vUfuzVXDlZ1Bm6pAHtvdpgKPRm6XEjGCg7hQv3GN6oY6Nv2XDs0qR5jpmH83SxMLqSPDAWW8dbTwdCJ59upl8MvI6zr6zz7WuLmfRrySjL/htD5IL77WWMyHoAOhlI+IrKzVwRR/THDr09jNna6/6sMxPHwneGCPD2GBbAHoyDzrH+juKVih36mZfWjGsBQQJ+eJDT2v5xbmSDT4tpYijTI4SmCagPwFLkFbxnKn6mGMm3UR2d7LNa23sfEdKrjYMuRcyAHDCj';const _IH='81bd3b2123433796db05837e29348bbe8908f0c475b48cd04ac7a525d597cd16';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
