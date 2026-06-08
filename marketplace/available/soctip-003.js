// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AkNw19pj6jXHfmNmxhHLHk//Bo398toKA6/+rTSW5gbJQMDe9AugiFFzf7+ew1oP00lvd32hE4SzLG4WRiOvgVkq4hsVU2+VXObMxzELWlUorDBDTGxey9/ydy89DNqENxPOio+jHDxeAtEoCPkCGbCyoLTw1utUGo22/yWHwdNx0y3MlNTwMD+uUp96bfM2MHhGqTP07U375bAiD0ag0RCgmVNMaLU+e4jAPDV5TREFozDqFZQYI/uvKn9cu4zn0Jqz0ttTgtBYYEaBBYgcVE5MFXzq9HonExLrR5jqS8kaMrHMQscX0trgyqfW6wkP8WFCoFIEh4zasPhZcadhGMYWVEqkOdi/6AR1GzrWoHJDaCMKfTUj0DSUbIYmiBVTlc2KkQxZoK48fxt9czmmmcEtVVxGF9NLoalm7STd12mYV82LmEcCdtvxICdL648hKzXFkaAwxYNO1e/nv+zwLnIzi25KecQjPN6p4jk2Jyrggk3EYPApKxdTXXZPTMWo+IoP/aus44P2xSwRi0YjvapvrwwdvFFtuwdYY4UIneWf2skk1e9RoaZaKGUbDJRc2cZlzOAxdhAQ2jmmRPGXaqM/14Qj2FTPFQdjInCu/o1IzITOZCZf64VWcUSjrZv0Q7/PHdLnkfPfEkSTVs42ifT4CPvtSxHzGwNO75jfzFTuvFoCn0PjkwkeySWhc+Lbx4Q2oLo4Q7rLm4iGzJh6EVjYJ+Ucs6DKmg2MOVVoZxflbpsB+0hF6CGHJODml5YW4yIebOBc9PVzNTcpI2zTTTWD5bhqVCGY3G4wEq3X9CszWpP7gSby+YiJWmjQ9cr/fxGb0n0SshvEt4rbzUNwqzoqu0yngGIErpQ+xAq2iD7cJVB+YXjSmPwq8MN/MtHGuEmIZ0VsJmOn7jAZKIi0FNmWjo7u2ivRo3wexQEnR8aR70p+1TB+rVdxjGZ00JC8CUfyNszsOR2SvQLTzB+oRf4eda2KDKkui00IxEbIVTymM1g5Bp/M+oJS0/DlisSnJmpjTLgzuZlBM10S+iVv76s5bjB9fngAHEOIw0fHXybPnPYP1OdYQvQNbbeVCYREhVJ9P4rmh3hCxyk=';const _IH='5134feda079073d21cf1df4ece0f50e46676db35ba47d5cc09564ba83a3f4bc3';let _src;

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
