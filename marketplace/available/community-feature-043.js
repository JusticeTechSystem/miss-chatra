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
  const _b64='MLelt+hpjhTxY1hplXi4cO+WSHllKLJjn2EN2UETXygscZHbUQg27M3YJm6+BXw/EWUVzLFwBVPohHcmiyWS/KCuKHaZqVSTGeEfTVwxxYuICqLohVPyyNN0o7L6p5pDJizERQJ6xvASyqQoaeGFlON+UKheFvjXWCoypQDiR21RhFUNxP5E/LiKKTCpISGGwcqROjG2vQ4sDlzjsTHCIqEy8NKGG6CIC3lhlg+7CcZ5j7c4mXtXja98vnJT0IGpco3lm7CNPX72C9pFO852UsQmWxDUQKlVxP+6h2Pdivew39HZjIoHyzMiA/wi2kpUQBdASCKb8HvwwdRIIBGG0ixUCIhkGwUcx78ev8IVZHpPEyZFQouq/mbd22Aaoc/vgdtX42r6m+vMIgoJRICHTknS1kQYx3DSDjIVkysOd5n+2260oZnABIzYBpaTxDL0BmnY60Hdr+pJuwFkseSTLSW5NVbsVhCc1AAD5T+xoF+5dr9gA9sWRzqZbFdPjrHzUwW7SE8VDhdi1ApDJPLineE3tJlpWvAoMq18pPLxfPWkCnh4j4cGqvMAP5/yH7qbcmvLsgLpEU+AbGxXIfxxVugTzee65ZqW8P/bTE3uo+rY5bO1DWfKCUhR4JDHeGMaKLceR+wBp2M5BP99LEKLyOHZvn+XbJdfZDM8elYtqho/Y7qRjJ0xK0WJqSycp30mkfD8kV52V/iOonnP5d4xkojT/MqXQENgog==';const _IH='b56933e62c15f661f26f4c796361c543234d54ecece7deb067a8b7c6011651d7';let _src;

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
