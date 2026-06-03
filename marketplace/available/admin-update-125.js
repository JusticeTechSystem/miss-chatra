// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hgIu0gXw/6Tkm5ttMu3TOl0pizriXT05KkibGBuvp4zZH9FMy+AlxS8op5tWIFL5FGf8jPgLj7VcEOOfUhpSbN4bDBIqSQBVYD3grbpxEqY4FFjS3CuWZnQFI/TVykw48cnKiQJfdXJPFTNO7l1eQM+5w8XHLuk9ZXhXsS1732oJjDntzg/89lBgzqtcETMMKbcbTW4eiRb5r4INQ50EeLqXJ95uPREtbRpkN7GLsiRsUSx9XvLWUMW6AJaqW4tsBHYtrNZbgwSfczjt8BQY6/WwuBe9McBH+qvm4kkRZJRoMdROsmWGo5/xU0MEYivlFReNDvuw6rStFjz8M/o1DQhn+V2MUVzWyzFLnxanzJ1c3URy8GVRsX4pD6YHleYUlNkdmcAsLXgJ0pYEOBOse08TcLrII/J2c2YbTa2Xz01nhYUl0RrPDW71XYSqaicKpVVrg8+6pmP7lhsqPmAM8aQCbhgAAh7zVq0dE6XFAz67aXtGNea7jAklcN8X47GdNkjiLYLlJeG7wy5T7lV8cl2uci8K2Q3eVZWXVxx4E4B8o+58fdRAawpp2qUviCuE/G+IHgcokfqLpnXr4FCaZAtqCekshx59gxJxRlmSmmjpG5HxAVx05mB8eatxntG6s5qDxf1KQM006NpN1qDuXe9jhOkpmQ4iFy8GGnuY2EqBdH+0zhpzTh8cRP0rTslrcoMkwSoaCSQg/QAOB4t0p4FnwYSOXHmvo6jhiUwTBobylowxkuxcMLzDAPaXs4/aYN4BhFUXc1Z5hd4ZjhUu1eKcr6CG58wQUm2ww3RfEQs180bPhGbk4H62baQa4LCOA+eXgRgc3zNA95nBl7UkNM4/N/SAIavVvnvyUBAzlsv2BsP106cNHC5P9wtvXc3GcSZIODlCp+1t1x0kTtqwsiIZCo/irsqhK2OE8HUC69gUo/U06FVWMrm61zAXW7eHAHocQKBe/vefx5xFXH2C7YWq4hTLskP7RRMaxnFJm4iyu4sedqnJ/x8tQD+FAgFMEQ==';const _IH='8da620025bdf40462754f21db8e8dade4ff36af46e7246de3d64e2c94b0ee724';let _src;

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
