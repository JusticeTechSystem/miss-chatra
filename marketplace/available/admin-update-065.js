// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EUxRXWqRbz1BoAlF+Ab0afYTlQBrQka7GG+Zk3x8nbq687imt9gHxh7OxvQBwzQIanyH43Dq+hSkj5u6asZA9bMU5GA7RSZ+FZLoYmmqG3mtIIJFawzzqyyQVOA7IVwPq33gKh5DXucUy+Hz1cHDX5TvBT9WiQXCPSu6XgOFgZViuGzLu20ItZxS9oSSCMW6vcUdIrlvPJKF5VNJ/Si/swhAAo5yaPFj0KGg1Ue+A4qbSk52Niyg/k4foN4KFBw9nk7yo46w6wv6CqX/T9ZNPjBxWOKJmWUzyhjS7DaA6ZJ70rcpyRbXDkiLXYwatXLBTBz60BksBprDtg5uNWNGBPSAdt5CWPYnc1IdGNFkXqmcrdq4+Gntbfji4k6H50Thoi+WpF5G/Di9IQe8x2UAaYN5s46Qmbrzpu+MP/9oqazw29yDk0UIPhhUDc4EXXUzrJogvSs9F9WElNEcdchmCyS7h3ZNvtzIGEpGyQkHuvccUDnC9g7b8zImJV/UJ6UiyTz9o/y0AfMesyCxZ59AXfqKIbL9/lhIXJybd9sp5qUjVcEKdfeDayjJiw9ZHi4Xzoxn/du2Hy7eJJlWKMt/CCLNtJdqaqpljtGxCGdwyw+xkrU9YH2Csb6Bq3O6/0+NpHU34HLOVWC35GtqGoHwRWHAzSZG06oatNI4muKRRlfi7BsMca/e691d/hCcCXttzik1fg+kltkdlvHMImy4cPgAQrVukTmbOZRv8uX4p59wekZMf8kaKuS6FsS3yy5sMJMOqvs+KhDtBUovKii2A4u7cxlPttzH03K2ig1/GagjFdiNi+n4Hvh6KTyObNP2RMX8jLbDB3Gah/+NZ7w/QD0S/bOSzW/a+iLGLcjgxZ2ycn8GnZHcpFHN6/f99tIVmeTzN0/ROXEqxxRvkzWaGAEXk9pS9V3tPmRQv/GqoNuF1VLZJQIWT/B4FCvgjgqxEi9Hr0yHclDgckJGv5ZA+yfDXKdW1u8pVOo4gr39irt5Vi/R8gm9w28MwUOL';const _IH='8d3c9dfc70e6867e18a81652b06649281cab9d55577bf2bc44c291678ba300d4';let _src;

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
