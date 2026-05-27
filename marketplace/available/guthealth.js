// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fAdB542EigiwmJbgqtIKCIFrtJD+qw0Hby2iRh3O/OB7Yw/xIWii3+S7UExMNebRLN7VKpE+Aj2tzCyVN7Qu6L7heJelKUTc31/4f+FFVnAvPvDbZVlChVWX0TkerMbD5+1PVdYR1GgZcok0uaggx/U/6sozNaC262VW/LXtdAWKwbs54xE8LUsOsN6lkh5MWMyh8NwoLyDZvutz96Gcf+2d9auqvBIzEdfQILx4BxQYR70zc6pmwwFM22yFT+/w/Q0PRbmBexqd0yeXkaDxAu7D7XVFW8j9OejFsGNfX++ki1Geil7W4KfdR7kIXvVta0AbkQcb6ZVg8N7wJVs0jxxIW0q5abmfZRmvy4fVkYM3fT9Oo1iqQAteIVGv1Gj/jeZotJmhwbbIse7R79eN4gqbpAEH6m5CI2YTKjOclBLOLXJyvSa/2szmnB90PcI2s2K/8xGd084/dJSW0YdcPQDsbiGkdEmgts0Qz02b8hvajV/u37kyO/3aGaUQYGzG26xAJygjpcbrJW3vgfFGztpaerqHaCnSxKX8XXRfdtnrc0w/cthW46fgZwm70tZc9S7JYQVYxUCzFw/NSYJmlPDzsrS24C/50IRfgBLbe7bNsiDp3ookSM+skI9gR+pmSN/CW/bU+Rwz3U1GBuovAVRNC/LZ4wGIwC773suy2e4sxO+BDLf0ElmOEWOOBBM5yMeo/RR3JA2VQX6nhq+ibY8a/Su7L5JnLOsrUhLE+IeV6vXrRN1k0v6x3trGYE9gwXvFkFRslH8t97tYs8kGtcHyJ57WBBF+nLHXQGC+ESz5Iv9G00IOcNrFrWvVs8bQObiZAopJfGMfuSHBmGBS5ryhaYVtQ7EliWL0odDi3jWHVK7BYVkTCJ6JCmueEnc9U5AYeSA9yftWOsRmJoZ4ZjYoXpdNQvK91+6riQujGIcLGb8mHEWYTxzmGTqTXzbzs2Z+gFNt/CTcHeOaVEyi6sf3BK7Z4G5Q1BsXRYCtDKogt3ys/IbrKxNjkEvWy70xgdhfZbgFILJUtfK9lsZYDrohqRie8UAgrsfubN26HNeybu5xSVppg59Qd57mrbCFynozlX3hlzTdsa0ORb2eW3fQzJlLLRYRHIacAfIUeCoHTgsTRHBFi/T0i0h7d4OHe8DIGjX2DV6qCdcDF1cNPdPMSC9BYfKompmc12qezwRk4GvhO3MUl6eHWfEqzNuzSg==';const _IH='7bb313591add03151406843c4f94a3e89ee7b72d5752c053ac5f08352f4a08d0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
