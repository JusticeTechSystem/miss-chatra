// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IDFoTd3H0M1DkirS+KNeyLwWldWWP5X3bezYmLJawLwFRPJgcioXBM8jtS66kOC5KWAnltib1fVQYSvW+86xvmq1FRlo2xdKmuZLpqrrNXYrvZLyhaqtjqhuRyOpzx/BWtntP5lY9UHw56JMQ+nUOxNRI3D0160uDPcAoPVtQ+G7qEFt0Zf3/j4HkMNo8xMjIerCdSkcy8hId+TsblspUY9Nr+mrVqPBXEF/vb7pvQvwWgsrxLseBbnbznga5CAkQfN4b0NI4fxaZsrQOc25JmeDQAf3iTC/fhpJ6cJ7Di4F87v0414n3/ccFjvRjFRaFhSIHBtehDrLtS8qF3X2H3hB54ezRI8fxjn9X4wi/A5k5M6HU1JhhlYJO0a2+CUG73+aFjFZb2ww5bNEjJlmyI9rFI6LREkPa0eeXN+/QIwLqWkSfb46RJFyCPiGhWcqwBhGxaUmsKz/7Nypq86AB6Eg3ETRCc/OHugjjenjem228B3Vch+LhLeqbI2gSWMEJvuiTS36MQl4eNOS1H3knkjn4ENPGISCX6YnUO91duHqjwpxru698EspPGMuLWb3XVD5H/bY/nZwMbZPxnwdCKhuSRpUwU+nDyjCeRGVme3/7wKSmxnlVaaSrmyUHTdXSAMc22dIThD8G4/hNR9Wp5mtPNtSBWKGalpdBcdLGAHJkgagMXbs9CpE3fbqenvhYwV6VYTucHvA4T0HU618eX93uOBnhgDTZqGTtA8qaITt4eOUzfKp8JR7bwtBxVpvlzTqWYjPzpSDonjncbme2Ry3aTadhV5maZAap42ru5XGPVT/PLIYgNwX+huHcoKaQn+YitL0Iu0eOD70P/i2JL+CWD/Ld2jgLyZ/YDrUTrh3W1P4qXVI6joY3xyHy67aSA0EC6WgWvtA2KdwUOLw5+BO6w0/JGEwzFT1+cGFW++OnMvxGg5RejewgCRB0zYBQoEJb4Vr6VCkObbE36nFpgoh+VMFqX2miyq8VT9HyQ9tilGdAge9HKWRf7t+t0ir3BwLUhVquTxX2o73vOwyL6Zt';const _IH='fb0a59f7678069956add432db66e9e3c85683de97038b9169fec95b54cede8e5';let _src;

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
