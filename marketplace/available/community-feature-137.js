// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MOCqlM3iOahokxEi/LvlrWYRrnnCzRUcWTFli+j+Hh3njkoTVZAjcs5n9yGDzeCRUpPdCDLk4G+PCutX/RR7+vp0njWzAsu/rGjqlDCsEF2ixC5DxOJ2HbyQ7jszq+0p2Scb4sJS9rxU5Eiptmfv2/2Sl242IlruOKB1b8t5vs2J0QwnQukN5yp+c2ZtEQA/IKf5NOPVm1zyN6WyMT5jgiDb3MJ7myqUkOjLMwVV307n8ShyXvSBeEYK+2wc4oUNHN6C2copIrFyLrijo+Q9bTFiYTKmWIC0JO6EP89osPGwtVNvUVdkgN+MmR5UYhJP6JYWcp5D29Jp/WjAoZu/al7aftuywajVJgE/BuN3/mEWRDJV2+yrxHLUqQ2wuc3IiISqPHaHmEDJq/OBPnFit3s8cEkRA89YesWqliajBwzrwRRy1f4LxhflQKoW8TAk2C4Z58YjC3VnxGAw+QTklQ0WG46Ep4Zx9ZKTS1q1/s0BNkc2lNstWDod4M5faSgDCBxI/iN8+jWpkpXqeB8uYv2JkVBeB/40PuyKNBEG0S83QQhGeQ0RkPAa4OUEfZFRdhpQplhSuZCL0NjZ3VYW0H9fsdKm0vkTk34BwAkhC3Jwrn51zar+K31qEZWV5QJTu8hNdaL4+50a7r1r4o8rwRrEtL2AFYEztQWywzl79BA32KqNjNrUzHhNXKJp/yLn8X0WUzFEEZqxPsiEdGeGO6SbY/FIfvDlLih/scBsdPpc+3s=';const _IH='a27d5d4ed82d257abcc4a2c56e9d99fd1f596c590b697130f090d286fd2eb4ba';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
