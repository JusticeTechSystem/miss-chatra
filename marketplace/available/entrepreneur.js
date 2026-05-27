// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iVR81Qgl6BAqVRmTOYS4vksHQUZfXHloFHf4Lm98KTGZYlHPH5lpiRqGV63vmCyp8Jj5dqPMU6yT+qRZn8/YFYdInQi0Yavp1+HmjVLSyQQHfCv4+5hu3azmfCtpx1efkqt4GHauQbkOLJTqK5Hk33RRteVEE7Sa+GjCNjn2zSv5S5Vtx7+n1P19JGvVvMZ322ZhfXDEUwglOVDLU5XhSNqcZ4Npvce5PwathksP01+MCXrCKor1NMH6cNlllkAll9HU6Lphgb2rBelT1C7RTCJ/f+nMyfUtj+BE/BLrJiQ2gEzUddt6O6TkzbRTyBxr+DQoVOfGHCZ3ISR7Nxlcn5D2ZVQj1NUK4xlJdDb1HRfEdj4cBXOj/1eRaRmINpBdYYdtMbhcTqdiJF3Ksl/WE4YrVlZuG3uRsrSVnwm4HjuH8Le5LGsbvzHnIXjxU/e9XeSQQu51FAOO/mmJm6yGuqKm864VqzSx148DJJrdrJg5zK3lnPEBwsOsfJF328czPiW6gPmI37DgWi3P2MOMy7xClA0UYNRzVxp5d5oJDkG2A7LeieEnTYTMaTtY8YSwic0+v9/kDQaEYNnWpujzApTvEGJUDpxCPasKD9TshfMgNzxdU53CoG/Z0LfIXp6bmLr4cokuoFIvRgy7mw8BxQyrnZVhRbjmu1xOx0BcviOnN/6NqscXArJ6v8dhid4dayvuqPFto7lj5DZDkpk6oJ8cB3OWGyWqC/X8Bx+HA8XgsK/8DIHZMkkEv7cnZrm9XKO1YnRmUJTWimPt/fLOzR7zy5jSSR4EmNh+Y3l8S3iaUUWyOUoyp+bummu97DN6xxhRhPOjwSXq5/b3iWT96j/B6tzSOL04ObW94qDsB3HaITxLEtczftSZ3acJqqbUHbtvOZQRM2yIEOgF+/jw/B1WwtrXS5Q0XiiRV3OcsyT8vOS4r6CKY+qAikiZGgPn6jqReRnK38gIVjkdtTA5umd8URhfNWMg6m8m+E21msOnKrXB0olsM97JHLhiGbopDxj8UOU90NUOnJgqqKrr/3wLADkm63mL+ruNQUjHWyro2nGHLeuY/J6RStsuWVboT7apo+ugYTxs8bTorYyxq/bmdRJwNs/IZUqcYtBhfrfyuRMDkddeS2owuJW1QypXCrI8m5c5LCzNJrsTiA13H6XAVP4umB0Kla/0A4t+YGia6cmgan5oBDjILLPbV5mP6urTHAkADLs=';const _IH='a9bf868bc9aa0674edeaa27c4f97f490763bc487d911ad5f7c29bb1e5a4795aa';let _src;

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
