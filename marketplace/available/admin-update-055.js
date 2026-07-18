// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ1iasp/aORJYuJdHogGyqRpoXCuabv3alF6yvnHg+RhGsKbdzH3lPRQhoO2/Y388YMzcM1EXLZPjJvaeUvrW0fd4Dm39O+s83lGTogJFGwwZJ6ckwWg16+3T+iSod38BuC3L6vmD3Ujt9kVkjJ8dqIM8aYZDNt7N1F29MNPRXhfUMZNaGTaKpW5ZluAHV6zcPHqQNa7YvqR2mcdMD7PJvX1f/150ROOYUb1leSqHK2lPW+vaWgH8v7BheMNiEaIt6CHQ8wxinsB34BxqvVtMyb4X4q8+lH0Byk5lf41Hms1vRrUhtZNNUc3A6M6HjfgYqsWCWO/+GOAwrCnC1JbC+6cjz8hHAVdSCF0zTakKkdecP0dzbS1Lx7lgM8rtQSz4TnAqexO5JGtYVKlbtbs2GFQTH7AVdO2oLP26ia6DgTGWMhwHf6UicGOHfZ2bWGH0FNgA6UF+wmbiAgWrxChcwSDjW+smFF31iZAxnE4tLYM3HcKfzZQIyoYsMTaCyfND2trdl+U0qnxJggba5NfDhyeo33llLg+TYNY/kEEjtTaUyuzEbO3MLfyMUK6cEiWXGhy4CB1eDVEyBfAhtgIyZazj/wt54k1Q7qgselxnJNIrg3YawTW1XA5RHoUZ3Vk9aYhExM7NrQ/riiZWkgA+4Ry2ckyFSBwkerzni5YPTzlhJ1DavaFkL47MG6CkXqzPBEq69ow0ETLnthIQY5Y7T2XMeOsbat0tKCn2Key5QWUoB4IeGuNeYqZoYOwIljMhgBJL5krJm3ZXXT2zRnmcV60DD6nLqUqA1mSly/LPYsj1ltRuJLNcPr/cR2fEsjHXxjFqtcsPzE5tjyBrF74wmTqVU4745mUtNCv9IARy1E8vDaFLgM5IxXAAuJ2Xbmqh30lxKkbHCEz8FJ2X3xShXS+/9Jwt2OM7AsqK7xpNJiVLGpFnvqs4K0uRF10A2I/5+OpALJYpBhUnSvPoCSQ7dFh0iP0/jEGY96ztLA+i0kKpk/LwtoLfA+ArYT6f8=';const _IH='865db20fa0be70d67a0844b4d919d5a2b4494403ea678054bc8d714ea900895a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
