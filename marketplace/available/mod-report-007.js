// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mBVZQoaYlyEHROZEXfSbye5uBadJba/JMFRL1BIXFDs7NrxqDtr4pZudO5B2Nb80Pid37QHSLzIC39pytKKObJYZz2Mzg2+lslX/QTt3ed4QN8ycQ5uw306jQdnKxI8zPawfYbb7s4GXQGN+pPuDc0kZK0tIk9qrUVoC8aGsRmU4Eo3Mu/uB0VG9AXu6S7aWHayKeTnki6X0uAFHhj7LtSdI4MBC/BK1WqKhWXLh8Hn4qYl53JgFJfAxHDc75P2aXLfFFT0XHVWNtvNE0YwRDx2ngcg6hqRKGu4iwsg3vHL2MQKDLt31SrFtW88e6/cM+uJt/xRXetJd/XgvLyv06CKj25aZ0Oc9bzycQFsEWJqwgGkCqhDH8Ovo1M4bHWcmFyxtQOP1sZC9OzMsvL+NYmK0emr6RyVKXCOiPuxSUsnU6PLDG7mCtuLJbQxmM6qOJoE/gOjdPFX1OoqIQI4XGfXCFV+1PDtnYvNntM4rfn9Y8zKgb4rYzDKWWyeGpQtMu9xrgfcJ/ftWJ6si+bYTF01CMhXY6KlA6IDkYJB7AJAl5UDUE6I/CCgtJR5XmL6xvc/cIIai8IoEcaIc2cXf2mW17fCMhqN0l3ARtKk4xXd47zqkov0ZUBqsYuwGjiU93QDPoz0IQpBHlcHn6QB+cUXKahHW8Zu8j1285qbb9qTN2hzI2ye4huWOwjj1SXqsbOtTSvuXqQuJw2Bggvvwx+sNWnF2cEKVV4OepXT2lCyTW4PB2ESMcNZDUU/PxywGra8w+UQUDtAAKVwrqVznYAIrIDNg5yQrOlU+scSJgV8GdmoZTZx7zxf5Wd0w4TKdo/B+zuqNEUEMjA+lH6r1bGQUMehkvA2DOdkhF4KFVgbf9IKEwvK9+rjXPOSM/YCrJigIyqx1okCVLU5MVBiD6E70bFDRBtNdzyKxjNT4tccy0Y9oe7cO+NxYvcCT0wqWiiJXjKGjS1djXrWLdzotE3G7SlvicpRXAAmLyTw+BEWKKvx9DDChvJCLTVinWHcBJ735xKXiDTC4a4nIZdCrgNplAnfE7wINeN8g22SeyZRjr/MvN9h6ae+y4KsVItv46J1k/0W+VH2DLjSSH6vSKfjlt54FDOx1d2rL5MQJz+tKTvojMT4u8XMW20pdWWPmL0rMqkf8dWuDkxEAeP9XDVACA9UJwT74t4x+ij3fFTVVaScJ/TwQG+scouZnz1fKCvJKe+ClEYPmY1Bwx4nqHaxlGzL8CH1u/G4kvnQcJRHJqpNX0NUOdX+z/YjbX6HJou2wr6UntRqikvc5QWMbKmRtaK0vGknQ2St+hMIHTLR72zWlDghzb5Hyg8yPl5QBnBdMdvL9tk3yXRWNrAJC/bu0IunMkDb+Cfhg/+Le';const _IH='39e1791d04e56f62315db038609920d167ffca525fdc367002efe2add84eb74f';let _src;

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
