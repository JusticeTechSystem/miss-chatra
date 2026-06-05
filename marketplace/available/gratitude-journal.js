// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A00ZbHHUDJ0DlQp7Gmfa6LLqSCLZQqJQrZQhpHanMwq/0bI99dJDh3agCifqrAvY0p82stp6FnQJiEZUEYZDcwdpKwa2mTjXRL1B18poRanUOgvEGPT5a69bAa51TjHajTs25FAGCKns7UOoyWKto9ys4uZxZbDS8CfmYOnIWv9v1vlg8X6vbJw0IusZoTnzlIOc9yv/kMdhsE9S9ADsQP8dsQ09UU066xmRctcITK02qlZ4D3/liPIF4yMV+qq3l/aK1Ay55TPZj4/jekn2rIY8W5b/yjiNi+3AEFw08Oz+5a1Zufol9hgTdn0DW1b+jr5o7Onsk7X3TofaEL6ipAP6SKFnkxH2p4k8CyRWm+n6cjyAmjzY8631yXqLUxHYbmXFMcooxFS+adneJ93GLJg/pVn4+GDBK6uijUG0SFGTSW1ajuDWcRPXggDc1uOyJz63gAjeyu6ud+IDXed/0JkYn42t9Ud9ykfEamtWV9EglwG3Xhx7XZWzW3BHNamCs2mGTfwM9pEySp4jHTE5B1Hr+Mxwn5kt4B+pJrmfCjg7FXkEQ2mu/IuSo+4HwlWrWp3k/huxdKROl1Jg2VENirpYuZB5n8a3E49PB4+8XE1hI+F9kn4ZUUQQfGzFvI0BDt0pU0uXYO3UM6wXX4iieQVHC7HfAhrhX+W87P6utO/mgPZTqGDl8ZGgS2nWEFL1dXzcN+eVQxw6Z31cf97UwlJH9AjE6e0AWX2JJp29tTVnqwnUWfUK8qUqdB6U/M5dNbnF+HXTLfH7DTTldo1WymkBVLSI17UbTjGZmib2cHNt+sCpPIED93iV4igEG0wHObfSpj2h11IBQvQKvDjyiUWHKbNPC9aAEuL2zXGu5XnnUOe2lZl5tZREMV0LhjoqEiAewPtR6sogjSn3ViShLB3BvXsbrsEXrH6w6AW1mrOHJGhcazJCqTrgjX6RRBs77JZyTIThXK7q0Pafu5OCvnLWQKihbX/n+xmHLRmH5UQ2pCETqPYhlkfbTlStoTqKDwKYYrqNne7Y4lIwF7shp55u5yyinYcb0Bh/xKy+/Q3WwdYcAFIi/Uav16wMHu4AjB65+5AuBkt5uujWk6OvxP/FkYdAkyTlpIesLxmXJojEx5u8cenxLLknytFtj0zk4tIEp0Yml1P769zZb6b20f6bRFR8CKlxGtQjn1/9e0bDHT1iTVzj0OnPmlRXMFhZofL1wipvoQc30DUk9h33DkfweUCRtWTujGEt2TZKZNR/T+PAwjfXSdvVgAmDVlAcQfwNGIx943hm6TpJxTOxc9Q8eB+d0gaN2VwLURx1RzkTjI/CgtTWhvq6GgfESc4YsdLhZe4Fxt4UMTlVHUSF1bxTEG/PgnI/cAmwC6d67mxX/0FHxuxz6FHASAJBxc5/ENbjc7LWs0IExnLEwSGeapZkqdGHUhQGgG3VbfZ6nZ++li783TQQcIiGb93XfRGctKvpEu22oYJowNQRo9oeGMA3Fjt0deh2q0Dba4rQ5VwQCt/Dm3fuE3s7VQIg1qAUfhMHgPBdQTLDFUWxJxMxknsbO8OC7gHZ9JPAFpGSUyyKZMkvSmEvDpo3KKWGbf1VK6BgYCF9zckVBywCVQVSId4Fcel3JiiZlDzj9mAymKkAYiLzFqYeEwTucV14c5Aedk3XpDwa+eTz2IpdJF0W9fijApYlr0aQxZliYe9KFZY0zl05CB+Y3PkuGgi2x8+Hx/Nw5DZ05w3c709C1ki5JcoElIVef5y5oopbxwVOMh5MxRFoShtm047061jevyh5x5KXdZ9ho639MjJYmqiujQlT4g==';const _IH='fd4a84b968cf51e59fd8f08815f46f84c572c55a9b10d10abbbbc2638115fbf4';let _src;

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
