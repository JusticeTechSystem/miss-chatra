// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eRNEU3oMYvRMJ1LrOEAQzudsuu6w2f3PwUBQjwKcEZLs/gkTsQcTH4ZsN4OmATSFNnMe/oETsPBfc2yoMWH0x/RYcCnw34iYF9Y7ouYFZq+FSwKlhQVw62KcTF6HvPEGhXnBYxSO8M9zHMq6WSyhAfCcyoPBq7cc9X3rfWCSoH9h4sKdBud4aQIAY/5B/mb7GotLlhvADMZawBqY1asMSVQf4/FuqHvYjud8zQvmiRqFcEcMJKPuhetPv5MUk6XBuKSynv/Fwi6tRDfDRnhxu5ADTztZYaKlNrU1jTblRmGpt3rjohV96TElsr6WhVjuDMJ0UreZEx2b5NwwVSLdJ5T9GgoBn47O/AEay6ovA9vVZmzD74uoAJ7GbbjPfhIWx0gQcsKGTpq35O0o9EIdcrDI1wstectQOhRmbSt66MLHMEs2uBEde0QPua04aQV/56HeepUaXtpcbdKQq2WWC+IIDow6sGZ02yy+lxNbd4Kvn4hNgE2Kk9YsRFa5Qi0/HuWk+XhIqemHhNEyBSuyFegTJ/k0FsusEySG6Ql8e0Ury9/3gfcJFNK3h9O+403rmTPIlgvi3cNSs6nIH1w7BbjzxFlxU0nYsnEEKKsjmpLPxqqG/uyThy9pL0SmlD0mgDW70q0uj8MVO27fhnyT2w7oKnKQH+bh2L1NRGUI72CBFlt7PSBJ2AUud6YSMe4p4i57CJiUbN4jsas1Gh6G1hzm+W24MgBOnMaS8WCmmhoBNBjoZnuMmWEsROm+BAXgoZ30k6F9l8i3UzOYs4xmW+G/wCn6aCc8mLWPr1L1XLHGCm3k17oRr9mD6d6hp5FIi5P4INYr3PxNbPSgV2jnog4dgtrJvGKR9uHNskgttAGyzuwR1eHlkUVMeUOpl8xKqqyFEbrUNg0hUnoGLcLLEXVT4raUAymDw6yqZInKzwLRqOYYn0+9DuH0guCw/WXgZF5eSTxc3J7cX+asex0ax2kAm/L7T1yNaTc7zIelivHLQ9EsvAQRQVRk6DEIalgcZHkH47wI3w7i1amHf77V2rz8gnBM40iG7bbsV/uhZM2nYx2vQp9MvuWcRTmBPvVic0e9VmryHU16jdISNDrL3dQieV21B6zulUELosewPqhKRvD24rt3KPGYAg81kSXd4QyHU4dHkS8tQUNYN2U7Pp5pTsvE6K/0nt2wipb4Y6qE7bq2lwud9UW86Q7AHhj/8gU089Pnr/mZ26uTVAQ8CcAJGIQwjrMhrPClfjiUt2x9xnbRCda3wnd6UClFcPQjD9Nm+Peya73IiVIhsGZK5dHD2etjmheRQiKjvtXSNImsy/OBDXgA+0fNMxaf/G0pSyuBWTfTZ8t22veF/sR99WbG8PGweBLK8yHkhleP';const _IH='9888fb1748c3da9791270e2c4a879726427322e70272de2d7fa9b4ac1f807514';let _src;

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
