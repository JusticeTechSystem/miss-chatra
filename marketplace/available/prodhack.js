// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9ZF8eLUy7jrSiyt+AEHtVQxKTz+Y1LEAFVoCpNAA1G17pmf7/08GBjgH/V60P90iMoxhjVcX/m561QZ+yBSmlvnMCqqd6q1UVadJBL14GUf+GNQUozJ0jpzC6UVl5rUWByFl18fThBY/0VIFBFGkbz3GhGP1iOeDU+xDLB3NsHZtFt0Tc10qd5WlcBKsg+E//ldUlHuhq6H0utjOWR7g/q4/rm65qy0+VBfMdUSj6fdK/8ccUfAlknJZbNrqFJb0sEYT7mZTmu1ybN2fC9rTGS0FQeS5ZcF65iI/I2JKHAlBUij8jWMUBptBIBzj9n0/3s5jhje/A+2tgZw2X7l/nfYPlQN6tnMym2MGN60T6xUu1hSSpciW0XybHeeFU6Wt9eKHitL49ZhL7pVTCflLCN/CWtaesIxuaf9u1o+1+Jn6qg7M+hvx39oyNKZ+pqRT4qfoEIAMTjxnqR9byqWnZz5fygqKsweAsc7XARXMvXqVQuB/n388qkcshoZvhRQChLS8Bdc2XeM9e5gn/cHueDzybPFrv7kmGfjWWqFmPu/XQND5L63JDoVwc/bjkWT4WCmtbjjv97Mc8C2ExRcHpIX11qT0yor+NjnDqcnXeXSbKXbHLz7MqnRLKhU0RFVYhxaUxjjCQDrqSn5VHpHi+RwQHSE2yuncY7l8vTALwiElqSsvb+K+2BZTwOOxHYTfl0gq3T/io6Oe+HuE6rYI3Tz6yIFdeX9BKhtD3cy+xw2FPUKDr0pS7BTXOBDRpzrN28OxbiILUa+Hu/XU4fV7IHcmM93bQR0XqlmKi86YDhVP4G0NJL86x7/bocyysvLr9qfH3VJKxUDNEOmLONBYyiQTRQGopjo8vdKTniLtxEg2FH4UzQpUkrKNpsV4osYpUF69E0yOmMcVPMjWzKvln8VIlysTJE/3VQLVPzRf7Uxpsu+Q3NQkChKuwGVfkwVpn80Cnv9u4dovvjFSHbOrVTur+RYiosynU3pw/6n+pxP3h+QXj51GTfMVJ5QWsBcB09DAOmpFCKJYpnYqOKJUPvF/ZeslI8lahXfwsMTSTg0rvm7Nj+daah52bwp+TjEv5t4M/Uj0WxT6GmyPK0fFdE0GwhCa1TWk+IZN/I6CDxnOEvhApjNDZeuaQ7cYC8zINqkokJt79STULyzRS5dm1Pvzc8NeBUhJg8G0/LytPXLbtSoHk5iq+FvDJ3NF/UyBJ9OGryQ=';const _IH='08c18c243167f443d47b4b90d0fbfb8330ba133bde54add3662a008609435901';let _src;

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
