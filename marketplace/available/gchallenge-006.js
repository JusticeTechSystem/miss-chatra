// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Sxwxrwmyz7DGzs8bV9f8tcjgAPWxoCp+kESPNtUxlkTEbbqZdqMiC82DrXUu151RWZjUCHCRM28pGrn6jYbyvz49PLWj5YwVKACT4Ioy0fUSxHu7N7/IEk1YUaTI8YK5qceYWRgndFPF2JpJ3Gtha76FMBx6BqLAkyjleuqSVhd6nsmxrr1tU/R9XnQX7mXj4n19bXHSxoixi6peKou5WRAOThsD8kgRFvH+uqOW3yOv7cv+gsen41D3S6IKmrEe3yVi1M339w3utgJzdpRtoWiUGEa6GM1lI54/mO9YIo6Jb+BVGOrnKF8+1HgBagyZgqK6qOLOzfippI0oym0PbCQlhI5rKJF+kNqVfm7IWSvsDVflXH01g1pSHBakzCXk6RPF5KZ++GnxEwtBpTradQJW02kOY2BTlnkXMcMuZBqc+tA8ifSJM6iec8r1oZhZotLAHHcuAl7Xs1jq256xGiSA2Vyy4y/6RKVP5CibL1+7Si2kOP5Pi+t4aN1uapkYtloE0Fy1epwQvoEQzUvSjoWJq3F6+FVpkmt68XOmKKjLWg6WUrwNRnLrjIkTXRjtIEUG7A8mM8oqULmGTJnwPms2vE2nQI7C3U16s5gWZDUv+CeZ7/bY';const _IH='00098fd42f06ad9bbf52597694aeca3dd24c3ce4f3cc46389c783a07bc50cce1';let _src;

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
