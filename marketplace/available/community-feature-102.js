// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t6CKmtc7PaYdAQnnp8LCEDH05kvgAMkqp5CXetmXqvQXIU5xOuCQ4JmV4aIzrKSpSJ2VOWNB936aL9GI2aD9bVeXTdDmkBsdyZb0v+UboeArkodl8zoGy40CISNpxxh5T+Xiicxo3WgziUIjk6AgMD28zeuz9IrTsBej6ga3tRqJ7KyEsAoLzs86/Q4QzPVdVFlQdCfsKM5bijxyKbgTu62MB1h8azx5OKp4qvhNK2ObZbCQZbc2M71T6XqnKxsKPtdZB0UCD3bmeysvKGV1dMhy8IUkFIOTK8BuLyBKJ8dRVwj4NYw12DEbK2bfEXlwTG5CbJXOQT2n0AeOvShAtqiQ2Lm6hQHkF9MSILDz6PvIDq77estqa8RMLtfXzjrLzz8xuhUI5nm1xKHRvZBBeR7+M2ZQXF6AoEU6Ag+J8bflMbOwd6yA3E59KiOScVvYVaWOiAEXfGK4XuaO6OYFnwKnP54dfh8cqt15oExyIRgY5MWz2nOXTaoOK12VpWu0nEUFXJgD6jrETd054MNYAmMZn7GPBRX6W2xEjbZaBo9SnTg0x5gqePwLZC4l0alMXyA/pKRRbz77Bukl7WO7cVcw4zqDmndp/XUxmXPfJadLe3CE2BoOSaGr2J/OeSwUl1BQkrRz1xmbBUXzlvwOxrlk3yPbUa+/YPKBwqQ7PP6sIiNcizHaA4aQue86Qr9shN6cPSskeqGVayKWXntN0Xjx6ZmoXZrObjGwgRZD+9NlKg8=';const _IH='837f38d2c2a94be3559f8238d02619985635be5219821dd9a19eb789686c5379';let _src;

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
