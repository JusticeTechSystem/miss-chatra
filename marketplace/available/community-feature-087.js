// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CecYbrs7NjZ1jEYLpMUGXBYYkLriPumJaNMl+xrr4UaC6XZWQh2ZheLidypSX4oVwS1QCcngpi1grEyiNzpinLtTphj+Y/wIcAIiHEymT50aCiFhmv7Qt0V6SI6mBhibF666BcvVv9i9QEQi7S/hc17ip/IYtqoMLx4jz/3QgKxZJ9IHMkRZoXFg24Qf6iWFdO/LxnvCi55L8cG5YdNusB5wqpHQBoPLrLv4ccH5HjN2bCTBSJd90vceJIUOnhei4PY9JI0W5yRoKV2lhV96Dp6NzjIsU0zqjkMnNsbhnTseoUNuE1vHDZyz2PHrR4PaIlG9qA5pShQrcocNMgJFNk6mu20sauj5Q5EVpbQRVhHJ7x8zvTtNMsPTAwg8I5FFBZslH+i0l3rStuVExbkmUskWpNvH6k1JvSx7pk2xgM70A1rsSngnY9CEtGqO4FM3O6GieHoh1VdeDbxiljDmlZiVCpiya8XjMZDUalavCcKUGUhAVJ6AhNF1Yuj1/64xcVmk/1ZSesjpR+WaXsfcDfcQ06CptxC7vZc8P4vgaNj3CfWzgcsh4zXlgbqP0a5TtMA2DH9FiBEThp3oz8iaJqmc+25U5JxLZlop4JRIoCh0UWxhzdRs12TU3/2tq7MTaBX2nqQ6IDHJuGI+XnlpsuFw26ynLr/X3NU8k7+Cuul3Sk2NhQf9zQ4cyjQB/fbfsxV9YwV+Vb4//87sZfIZ378zE+Ham/8hHrtVPhmkwQ==';const _IH='d2a436d764e251e210becc127fe3c3bdb04a2146b32151975a3a9a466747c80d';let _src;

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
