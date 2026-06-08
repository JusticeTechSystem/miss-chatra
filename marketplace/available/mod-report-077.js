// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7c76fYMM8ino/76D4sooCuTjbhMBRfq1mnNS5DwnhBApGY38Fzjw9hJMODitzhSEesIHc94K5R8ijbsZaCmSksD13vSuzfhw3tFznkZml8tHAtjCbmmfgb1jg3jEb4LET8O4CONV8CV8Gms7KanFyeFYYpVlhEuJ1Y/vtNbfUE9ILTOjGBO5T76LDx2jGQE/aXB6GDFXh3jLT4gjMdgzxl9eBu4zZia6cmiroaiqIy9v6cGGtvqYA33sLsgpdlrXODF0vkhZbUa1YzAPco/sl0CkLZ9RaPRQBshawmWBPv7EkNC5MAi3DDoVyrz/qrpnpA+IBJunZFQpPOSpv7GWXrOBiw0BzXGMvnUIOOSRYr30K8Mk+mRTItghi2NGCuaCKds0zqhuXZE57G9wTspJ9V7diUP1379rRtv/haQbFE39WqGiZMX5FiZ54zjKHGVVmanG0n3YioIGn07b+vb5ljQMDxu6wvVRVqtBOsCucrBHqNPdVXroT2oKeKZsPlyqf7BufV410zOLAnhDze1H7bAVrnRRN1g6/pE6NRNnDYHXpp7KRvY/LjsfN7imZfhXu6A1TE+58wlI3pElxocTC15yy+TWlLTZmeb7DVSSdTfuYSoLO6Io60cWal15ugCfM49A/nGejamCIfFp/xN5W/5wc9GPd7c/+m1rbs/5eqp8a3FqowLjZWPAsrjOEEOHRNZ6/GdLWuDYEmqVJyeXcAanKq/oEnie7B6M0yJx+/J9i6XZCb8yPpuC7i65YLoRWc9G0k1wYW5QiRdEjqK2Kz0vjLecEugBzLliPGpxiIULbT8MUn6GhqevbN9VKqPwceXPsqxri02HHzZv2VVq/JtctMgambs1qIFWO/cqkIgTK8PXQ2Yh2lXWucehqWh53qNMozjAMiLt3MKnYsnqfqgtlmsjDecLD1sRGO3PMDmJOPZi9y7J+/Wxvlb9qYNHXxRWAK0MxZm2eZKJs0PvUcxsX1tmOXGoHOhP7fK2xRmT76qkymebzjGUTl2RtL6wyt1Zn8SPfxo5mVLKmeZeuMUug851Ua3zgqO0jwFsRwmTpjaBMln/L1LLqVcqSjQctyNmkEZEzngQfVhtTa/TiSCUUQY5W5zd/Umdcev1ADpDcOptBhab15dkW1xsFswwETJA7PMk0pnKjwcfDwp055R84sL7clEqSiddoHWFp3JGz/2/MuUqY8XMmbp90R7Z9mrlqhSk8wPd2e7h4z1AzrlhiyEcnNK8jhWo1IRZTQ8Zz/EI4k+stA5WY+Od5TuGyPX/yi9nggJ1BKACSbZ2M5O9DTeiiJAA7HDDBkew9z5SRq4sKhLeIxRGWBzXqNmXsrNAm3rgQy8Z5g9G0Gfb5/i/zbajPS5mmWm1iSQ4wi6MVVI=';const _IH='76b1c804e73332af01224b6940461084f968012646d785569d936af6c51adeed';let _src;

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
