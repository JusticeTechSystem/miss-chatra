// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VNeMbUxmnFYl4kdkH263mfKLmifVaiSj2iLN+D2k0TQqz4RXwSoAXCv0yryHh213hpMWLRYgeQjDH620gEHAxE64DKrjFGu2jGIjg/nIjlXBRO2z07EAdZP435SMZLEUbHQSjHuQdkjNgmWjU8VJVzUx5qZgAdW22/YpmyqLvKUWphYqzBZqOl2wgWgzWb5SDV8Zd3lNoFSsnmA672pTYTlEmY+pdpJ0Ax/iactUYilCIEW4nLLN/dPRy5M3u1qDyr9MjJT3sfA31KMYQMj9eta/41K3fuhr0cA3jqvhs49NMC2QDC+8q2oKst7fE5jWwq8nDTGGHxxiY6FCo5umJZffYaSAsPZZ9/OiOY96vDwt05Vk499Gw2pik5WuVrj2qO9BCuI5MkdpMN9rDIMHuv0K/LNT6RYZ2WuI3DKXBZHT0/hphcJ3xHaW8hhKUx+ZOzOp7ACeuGl25zEMNN19cOP1qOQYzfswfAhjSTui0TG74fLjwliiLKlaLoIU/s+ZRJS7uF6zkKkANU5XMr+hne1Ba2ucw59F8ki5/cRmqK3HEeX1muuQkZQiTBX8K1tYJ80gTtNB8CMEqsTmUD5cJS7qkPeYwBYVFr8MQtjkjef2vBG3b70Oqp4UUaiFL42NPdZwsZHDpyh5qOUPw+FpXet90k3IfTSdNId8RquW3PeWdMuZTsUT8eN/N6T3F7DURWv+bhaSdArDd3dPEoy8pmJO0qQKTxwwHWJY+gvEIQlomqok3iV4i8j1bqEfkOCNLgE+4Eezs/C4iVczDiyHL0Lj8n02XG7lvlwjkH47Du88llWH8UZ+zKGeiIwuXh6lXg8/kY3naRO0fkKkZt/WPiB4inj3pKp+PDXXAAuoAqAu3tCv5IZDXBT0Mg487D/XwOJ35zNVRlIdQJZIg2q0FMo2/EjmeGFy6/Ky6R3ksYN2XS7TOuDK9TLPRsCi4PzxvVNw07rRzGGEYZrkAt/deSFSzwT1WFOIDOKY0IH+0A51YY1Q7zAlY8Hu+vChko01Lbd1qDqZpfcZDWGKaeRJCVhcnA5xeUecAFvkbmCi1X7v+iKRS10sL1jegsFiJX2tPi7ncUgPVOyJALMELFUoRxYx06LaXJ6V24rcm1oDWsx+o3TZ0lLj4zsj4aGENull4ARosoqvSmmq7JzaEKSyIOIvtFAgZTY2Ob4xrIyJULd0quGF9ZVEtAEVDKQjCwsODy6ajg+NOCk1ecBwa/PjXB/SkSg5kUG4gIWzFE+MGebTfM3DN2b/LjxkZolt9vp5vzeHX4GOq15wiONMVb3aAboQ71zAA+RxGtNSiB1bCyoWsyk4U9x3UTgkkFDrSQQir6QgTW+snyMXD6zWbRxC4TXxLFERZvvbXL3UEDJPx6YtFDZz3b5Mw8oaXPP3EL+E6/4=';const _IH='a5040e7939fceb9fcedbd2a1b9c35bf51aaceb1f5ab5b846853c3f0dce10e1a7';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
