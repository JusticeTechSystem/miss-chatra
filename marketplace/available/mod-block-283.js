// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='muWmHPL86OIiVk9M0sbQqcwy2bGHQMw7JD5/6FeWBsKmhvlDztY5ArnJYiOTcOZd9T6PiRWlsaXFOxILQo20DmuQgIJbiD8wZ7t+VoMdZ6Nx4d5Rxfdh0xGIxxPDyYLTzu5SQfkqhbtPjQ8uN48tZmJWzgLYVs5vq6GLe3oyihhlH7z4vJNlg68LjHM8E9Q7jv6Oi3ZJVv/5jqQ/yMBF1PBoprBFVihuoUpmsQTzt6FVViMwjxW1dY4QgttOBISpSHMg7Y4PWBzxQ3M4m9l8C4M1KBmGdmh7hWG2VqnEXKJ5BWI7qAVZS4QBXhHBeOe/qlA1jQ9DUJG8tDLohebdemNLwXADfaxQrYyBg+QXOvzGlGzmTqnwdUG+ko+1+QcL/mf4aEMM05e79Y4A+vinertonB7eV6/+Xfm4XoWPeUGf6JYsegBu3H3R/xyXrJ2wwvokFZLDPNVQjNgdGwI4d+0vQ67f5BENtd/CgGE8wCW7KqAqEXRh3gNdYgoL6QkkCMdiXTqdn1TaqV2pc/zoc24gI8fBZfea3nfj5Ek4zLIKoWjlxLkvAtJ7dGsYSpz+d+j7edOsS2zJq0EpHf8s+B7G8vcRUIRR7W8gUEIR+TZo+cPI6b6Q0YJ0TiVmIH+SN4IjMQugSkmRpdsWPilaPwlKQT/PKZ/tXKUgI8pXQyiGz88WaWBLKiKw6XW6bxhg50kR6B1G4R3126udTXGJpQFtrX2ObwIMTx1Prt+2X9soEDHJBkDqsDto9n4qnKDd6x6/cbApxO3ZvbmDkl1pik41KyOWhd1UmXFST94Bn51UEsXDZtPf5Uji0cYRez6TCpQPS5KEEtKCbVqyEjMY8LUiTxKBm0DR8MuZ5SOxR0d0UR6oNtsdVKBz0Y/eaZ9Wohj8M+LWQTg7BEcY2kCNm44hSmArYC9I0hH5A020ZsjWfxBU8UCJLcXh9lmvBHCdB+Fy+okkzb8wHia9A7z16fEWmZAjF1WeCwrmTEhiT1OzfoUjpucEfIsIRcSzSCAFynkENx4WYuxXIrBtjTOyym2WuhP/GTE+uMPBogwVV1pjDJKgcUZM24xh0m8/jA6ct/O7YsN4rKHi3z5+YfEE5WkLzmjAqDQY/hKqORxNFNNSo2CRJIQerhCmU4dAb1en3vDBCqMTzNgnFZlJfdxPNJA8laI8CQxPeyNkoulxq65ktJkZHkKIpRFA7wlL0HniGHpxAHJ6ht4eqdQj00rxLC3I4bPBNZImqyVIP64pbbIUNRsW2gtwMZ/14mePZn3i48rYfrgPqctnIPN4rs2+OB4kdIps/giHqb53jzJ0oB/L2kdDkfX2K1n/ay79ddQR+6jtG1sVFYBSDaIbXXjURXWMCPsxUsgpQg173MbF';const _IH='8501fcc9c7a0c0528740fc09b222008195fdc9297ba37de6a946052a7abe64ef';let _src;

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
