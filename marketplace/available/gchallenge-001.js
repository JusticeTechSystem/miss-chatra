// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TjtiT5Lk4RqXi4WEMEUXwL4xtSbZX3iOYOcTWcr/26JBLhKyXlkJiEW+RmmL735FtMASCkp00nHNdot0rczYiIHVNmm2gKPdiDJzneflQn6jg6z0I2biBKy9cIdI2vEl/XrEs+tg2fbNB2W4XQkLSMK4SMF1GcTMzAv4B7PVgjGBnU69xSH6SZzQJ48t7pIDnR1geW5+baxWgcUo0iy1WSbPyWyyeHGWCgcWHdDpn3tLumdXMU89xOtiGFwnX1oIXgVvbiB9iUez+L31GoLub8fTTRhFlCuRkHzhIC1jIVwdyb63ZDIPJbuZl5gc5c/hno0PH/G6+cu2kCxXHFY6iMAuSrao5gHGCGzfXyXxNQXFNFK1egbq4JIl3ieGPfTar/Cy2waUNn9+qJVjCjEyPso1o6jmEt1dG5XEt48vGKxcHxTC5rHfpoN/O2Z0ILkjPMIPkFOcCVnPyuCYG33emd7HVQw8a6CuT0vzywnqecHdlmifKVBgIim9YDVqj1TRjnKRK64UWFxOfkRl9upPcl+4RM4bYM+bg5M2j9y+CwyxphNcYsLbQFVyjIVUvbp/kyDvxLSiZ4W/OsTQ1vyr4xULhf7JYAdty2pAQCUzK+CB3W1JD58QifEiFRSTwUvylEh8Nud27vKJ6co=';const _IH='6f2da7171253b4d5c8f6f444fc47624ac237f56cfea85bcb282af6ac3b4caf0f';let _src;

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
