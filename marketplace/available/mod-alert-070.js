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
  const _b64='5/ojCzS8Zbgi1smlfRKy+nM2th16NfwCNio3NGU9as83KKSXilT+Qr2p9Kn7fDatj7sx/+Vd6e6ERsdVW423pbTinFgg39iEzZqU8Thiwjl88VbEO/rAxvTZ1NOyGg8LLv68jfgkDTY98e6ZFCx4bU+I13iMdAGE1obQla1ngfXc7/pNUhcqq8PbTX3SOrqb0H9/gIhQWyIYiTX3LJ94UDHFPhYxOoPGT1jWKxENGw6vnAXb9byx2ahbUU/s92mfq+259AGOmkHkisy/VLXgF2oQzZ5Su9IvOCdof++PDMG4nph181BFWQKg8RvQhvYy5tfr76l8piq3nGTohXKicS4kZlphAIR/rIj3+Z+dGg5He009m+MmNCgV0Zxmc9bwLjMt2dEl6OBzP0LONqFBTgsifvW+IzdS04koM/EZakOLEEaR3BqAVejbW6aHMnqKre4yBmk3Y0oUqKbRwL7mG/fmyO7JHjMj0gz/m/zXWeHoPFH2TaRmQHE28pX0YjqgcLF7OkskGMxDVoL6ZTen1Z7H6t9Cog10ZlYIxK395NBVYijCdEMqNVos8THcwqQ2qCc+u9d3lPszRgVYMbdqh+DwZnhvNvOmoHDmN4N2CmYTwiSKrJjiwmPZLYu/v0fRvOJ76r/fwnG7sRP3lqaAJcqJLC+aItDjRmpBler4W64GDq4QI+u0qmHLVrEXgcg13YtQOQ4cQC54DrzgRAaC/npPGlfjBcpz5BOdMjNZpU1noZ65qqgieDarxvMUeI5zem+WxzYIZaq/F77LyH/b4CfhIjGBLmhBIuOAYJRdu19db1gmaX9CZMG2A07OP2z/laWgFLQvxxo9Q07uo7ed5jA0efrkFEv1UUaKMJtJjKD80/kedHKlLOK3u9++VQmWSaNC1xpMM7rgM4rZbg76njeYM6Kmiai5QKrAADOF1hMWKvkvPnmjLqDnEBdpSLbdI3T14AUtsdas5LDmGGVnp3mfAxhnUJ9YIwN48syJsPXNe7HP/ynCMLZtgbbm3Tm4Oip2gj6UviA9zdwSF6wl8oDy7AAQwIYrZWnikRXZF5+citcQHLxySW/LAu/rQJ7xaYf1ce9sMh5YlMOAaXPRyJoQAgkZ8hCBHMfLaV711mrLj9VPOI5rYVfDm2v2dffCl6tmC+Pawcy4L+UDbM0gKcca4ywZ29nty+OlJMAgJLzXyeHorzNMxY1xGgYHngZ9yxV0IG/5dxoYmaHD3lHO+Zm6pSsQrXoerJYQvj2QBhDJbQNwuywCU5VAd1DPnfbyYzXpSQ9H7/3T2IQKL8LsgafXKhkePvvUosPbJJDd+V3V/R6pBg36nFWpvCQNC5HWNRpqEbH1q71aH22cmlhiF8XkbvUIPkyufA==';const _IH='bb71d70ab9c813a81952fde33e187e328670dda09838acf59e14210bf4e27efc';let _src;

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
