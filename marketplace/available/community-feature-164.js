// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8rQWcHRR0hJGU5WzmkWl3IinEb4pTDym+W0LPnuAiwu7B3oQZuiIV5iQ+V3giGFBUhWL4HzMoOtMWRVTfjSaGrL3OoNzePfqTToKOdzEHVLSS6dHC6NCboN4up0JmP6biTRJILJuPHbd26qphL0NuwjICmMwBvHj38Xqgun6sUNTQUIqzznbK9iLiB/iVCV04m8OFAPXtXZMLU5Ii8UBFMfOsgM7vK+ivGo9wuIYCXdpDX8TO7er00VUcFBtLFswJ5EVtz6wrqDzFgRuQCLuJRkQm5KG3TTIUt/nXkBN5qod6+qv5eBvF9AMwiK0chxH7WGOXRNvwbZ4XNw4ChAnwRfCHQuaRn3epTxpzvMx/LRBod6XK6QoqF17pStp+nHFEABnwvRSswVzG+T62zRkxYolU92jkoejBot4JLrqi4H9hle1brfml+0w1rgLsRCZGgXFy5HXVZ/v3fRikX9wpFDNdSTv00tIbudA6e+M19+ORwinz5zTpI4j1CDMaYEvOoHF5b2/mLjWvg18EciuocFF9+iKEHbHocB6RKrOH9E/ilR3Qxi3RnYHGmC6LT/eykHVRS5qeDlx0kVeBAlOfa0INFIgkKyZUU+t4Bi9zlet27Rmg3kLHJfYna1CSkdP0RTq9k96t/swj6vbRarT0R9tgsCKRxsCxeGVBmwpZmcHZ4gAadrjkZt7uM+MoAs6TRZ858hZlCgn9RuxkpMkI8Y06vabvHtNT29qX2f7UJh7l3/67y0=';const _IH='33f29853a9404a54de8cc69f6c3afda9fd21570e1556ce1e141a4ccf9950cf5b';let _src;

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
