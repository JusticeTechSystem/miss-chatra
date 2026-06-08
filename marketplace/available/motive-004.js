// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JleX3wourO+OXtMB0aAd73+AQ3fuUWrluDL/N8MEoJCC7uFucf1/9WFis7zyL8BPqAAZ+/AWUhM0lP2S6DQnOHWmyXC2N3VvZ+d6W9Cx5Y+o5GzsPKiITsQD9KtYoZMJE87diEygIFou51SWbyivPIheYMy0upLhgLAhaP7wtx8Kxg3pi0HdjzsqxxmwgRGkGqB6X+xSENi4W7qUn2jJYXzPZ2S0Y9ri0j1n7C9ZFZ6/WmnSSvPYPZtIT8w0T+flPXkVNg+uYhv/CG+WsjqjU541IghSqJoCJ8xZbfsnzsDsaZIakiOGZb135grxHmHroRTer+By5cJcmuHOsALMBz2p4frotyh+0LZgLv7FNkaEvg/pqJh2TvlX6jdblaCVyQ6eg/zgTVBCUw/Buv0dhVyXGGJO7CS2Nf319Ivif1cZIek6UkxiIXQyIQBKuRD2uBLNPpJlPJ3Jt9iZnmYxwitvn+XGWvl9jsQzJP5jEII73SbI6EEhIDLOdPj93eo3OjsWEGISfcw/ujkiIMQSx5l10enYY8uJhEdtsL7u2ZPL7+HsYEmYTlvkJBaszXjVYFYJAdYm0qhiaCS1LrKjOG5bGA4zQXPRDpm4rn+kefWcL/LkDWbMFPpqMMm8Xbv2d/4gsUVOmeI0V2/h/YhXUoCJe8IMgq72UR+x4HPDQ6hcq88Pam4YnXzMTRrkl+EQpqqMNDkOL5noDcSoDrsPzG5ywoTfBmaKp46d3ILyiaklj4N47VDd9ZYJdRvEQQWsW6MO6nUKzH5eGd5zQBrIY6iIrp8eoe8Lvns/uthooPTo/W/cG4TNWlDhHYWEd5Sofsnzrhza/DcBHQgfxrJYsuwjKox6RuDqEEr+xF7yb/G3OuViLwwKBdrqZUaoDS7BKUwlDrkyqpkrAMB3mr1bFegrbS04yvuREwF2jXi/2ImJLAGhEwUEY+F0fTrPMzENh7l/wTgw8OED19yrMA6PVbVeK790FzDt322GBy95bYQ4x5X34BDAkhl9g6Y2VyVTmaYematosL3+4trLk1w=';const _IH='2d03568b0b2698639988a753a4bc12a7ad3e5b14b57ba8b0e5f5c2368815ddca';let _src;

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
