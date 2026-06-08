// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1v05Uab4iRSB0dxgE3Y5INDoYg/H+y9peDqzCujyI9CQbY/+cqRHDQtEVvNmO2fn2b9OlTa4C8HJCJJnIqpZkJVZo0vx0cQs/GK0XLFTtnOGRTkyaYxRNYWXulJJy6YpQ7RQBr9muMO94R560IjNgNHIbUTAEsBWFBOyKMHJEjFPy8UxJDoT0lgR2Wa/a2OIwGTHqOG4IAmN3VmzVymvLptJ6k+o1T5QYon7aBYQJsg67R04FYLsziwI+SHCiQtuq2ALRG8nnNJwfijyZt5gUWHWxUrGnvERFyk00YV+lpKMGg5KzLFciTG6CC3OdV5F7ZLA0XwN0e4ogODid/ncP1NOO7g0lBrEZX4DdRJvObWGFsJDxUWtJDh52FzO4WYiyBDRwT8urdAnQIJsG4g8vpQ8etASN+cmujjJ3GxvJbZWjEWNRIRL4bQ8VL1oplJEcf2FH3nxbMtB2sbPytfoEw8qQ6dDEtcB5X4eB2WhlMBnEt7qoqScmCFY2egGZubWN+HAkeViOHT8RtPq6VtcHRjumuwNxRFono9nqaoLBpnjrck2kkcfQWJsSmQcw0ytk1cW9H2wpNmP/bP4D9G7Tr7QlcZ43yc2EtKHBkWavHC9h08hFSgJGwetv4MNw+M4/H21zcO7bZ0Cd1JMMQ/774I/UoTxReVHED5xRCMFAHkYJhN5yT8Z5al00gMvVre2PxsXfArscSTRZu38w4tZtZEzorLeQImvkGw+5QeRvKq0H8Ee/izZMKAuojGRQDgOEl26wQtryvBHIriODh7+Yi7/dfmTRFi2CpJb3LZJA+WcYPRQTfAcN01ILE9y6jo0qAzN4+0iCImrt01pmJzXYo9sats/xCtRrUWLFv4xgH3WQ/gm26hbSKo7gbh91vh89uJBqmTSFMwv5bbnP37+cJDcqCOMr20QWYQe6akCWEO0IjdIMyCDD3LuRyVZ1/83/bob3ThP14NqaJBUmciOM3shvFClwUmM8fyK5Z5+gxF6plyEXrj/yHSo3gE4LonpVdh4aUBvJES0b7/5d2+t86OAV117HzpI4PeSbU4ZWyif53cvsp4hEuWeBEughyXPE34wEdzpvOqHBpqnIPLDBwgVWNpQXXlUgJiIT1o/GnIecqolSpee1jOvzAJt25fU8S3Ds6TqLOAJqLfkvML8RvMwXi0B9X9CzYs1j1CG1s8Akk25DBOOPuvY6Hs8F+i0j2IjoNgHYlagRLVmuuuOK7D24437CskR2ZhfOE6sqzYopa2W5SIYos8tDPzObcXoqtmrXJAcrY1pvveKj7Pqh8sy+gOf77t2mprv68OUdK3iFi2ovWMQtrg61KulVYMq7RDowzgKWqhnpvoCaQ0FGtOzfwPR6KYtoNAAmGOu2laZdpygNU9dzQ==';const _IH='5e963cfb8a821810d86f5ff599bfe677526bfcf41deb4011272274ded47241d9';let _src;

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
