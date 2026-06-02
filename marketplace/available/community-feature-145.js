// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r2ZNfceohlEt7NHimReNnD/NHCcWOjUL/Moc6bE225cYWmCs2vnbejxC5pQuKShYsGivDTXq/OWGN/mCJrYVZ5VK9AEmB8HsVVENc09D2ndj6wTLcTH+EqXgV2OiU3INMJwS61cyT5afJtlUD+XkKNxWD92skpXhenDOT0Sr8/t/bRfMjryM/mpITx8zRqn5vzzDLEKwvgVuH1OjAGrhNtaOv2BQdCauYvEMc9x7pLwNpKFHEuQc3rGJvD1dkeyCToOEUIYLbIvr+BeO44ZsRlKZC7lWYT13OFjWboE2OEOCGZom6lEe+wcwDx/qsvcvzWiweOd3AWWisnghc9E2YtlOvBmAfrFBxmp6wm2CwPIOMzQaf13baBq3Kt/Bsuwbuh+SW7JcZkqvSocqtLuS18ZG3b3s9xHBKeLKPAXFTBs69Lz7rrGqqvcTFogp4s/o4iGbgzuJls8MwqvAot5aeJue5bJm3hSOAHXNA+07jOmPmA+l6H3YbCmEmlSPIet0pPI14DYFbNfwfRT8MOCyBhO2GE9CU7hXAAoKbGUZD9G+NgOtB/oMiMswFueKkSrC6sBDeSPbfPl7Ob0n5GNYZ2A1tvm0qKryqY9ZbHojCuAsc7Jva/fBxkm7IlgKKc3sOP060w2KAJPLvYgKPPtbdYFY4F3CdixRKDDjpCQ3OpmsAWR0uSV0ciFjVLth7I/7Vdy5JM6tdk3s97E7e9WEprUg0fKxWMtffJebfE1ahnGNvWi6yANlhBj0';const _IH='3c02a7239f7885f56bcee80fe23e43f3aaf1c3620d1930462e2af7c66fcf04bf';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
