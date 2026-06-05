// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VeCd5gc5aCz/yUIgoq0m1Lu3FEeb38hEs22hLBY8YTXqf5A19M9LEaJ7dPmGyeWbMH8jPtYedG6uLVgEFDv/oKg0/fqaSM6x5h0Nn1XY8JB7IG16TSS89HhIpRQ/YcX02sQOWzySab0PnWakCFQXF7mSZxx5nq9epZCMoe8VvPGnX2f9v9RvRVxoMy8n+vT0omlHNDs0FwMJOjGZ6rS3KZ7oZ/RwsFVLjFGEe7taQ6uUdi2c5vp6ht0tHKiYYb5CpoMZ2PpmKao6TBJM81CQHqGUon2E/zdd3KkSab2hpuN2qEUdZp93eOrHJF40BsITENhZa89rC7oof+SB8wjewCwhiXLXMSTKmG1NQaV64cfACcLGqoAVOKD/cHiAX4zlwWpJfJbirsp9zqZt/r3sGTf2wAJJwA+GVs26Vn9cbym9aeVPuCh9z77nosnBFv/r7DwXOsdra14GtTlrTREDWDCNypKodsJoz7hXzG6F9n9iR8hGYDV1CbK47dR3tsF/87RIthtpWhNTDoy0kGXjLZf6/zqy1ab0+6hvKgD3muhpSqyZ1i/IQpKSZy83udHygMafNQpB+Mfg+YbwmMbcO3/jQzn2GamEGQ5a2B6rZZKSpun2ZQe1ZresUo772LTMy6othkwJp3Id8amfWA7xqxl5642FL8m3m62+rjCYvMC1epo0gxYR2NcqgPnStrxkTGS5qOPxAF+xClBPFIAhyuUeri1jdg==';const _IH='39e2383535980ec3efa941d8c93b528d588f8b3eb90798342e9f57c9ee23d1c4';let _src;

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
