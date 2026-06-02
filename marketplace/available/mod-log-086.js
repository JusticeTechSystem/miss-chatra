// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Syxwfb7zxoLzzBFebwek2TtXUzkq3WH/zrscEVK0H2UPLGr5Nw1/eSS4M5pHBBhdUF537oAWRL9lrkcR79V0KeKtANmHhj7ZfLtBg/XbIwsmFI2/5xsBLgKBU28mYuwC+2cLWD8BTyxq2xfAdGKS1jzcPd5kDB6cYlKcswzZFoNHL6sDSFbikzloZAQ/6JK3p+hr3Ws89/tT5Mr0MNjK1wVxMxyXfHhtUofsFyo38gY0PZlHfn5UnVZpBS6zw85+0b5R/vvuHq8SlR6Slp6bb8eZ3dbgzhoi1EBcdny1BJJcHcU01u8AfdWA3JlddcVmDRCmHZsJooP1Yg+SaSmGWhTpkBZ0iWGrMZLFTddsNjatDe1bppkOpIlXdk2ZwdF6hEVBLNYncCmVrgllXt/fsuO9/8biuRkxZ6Tc2BCwcUPp5QXVszJumfKFIpajAuPsGiCV7mQS17m76wuUSaVi4iJNnhgL3o3VuezZN4ZrFE25Y8d47t/e2G1S7HvgZMT71YTo+fYzcOZP/45XqJ/dND464xf3ZzQ563nBr6jUFco5P+Yw+/7OGrBkVjSSoNsAeLTBApD3oPokJmNWvc2DxyqeYcvYkx1K6EwUxhw18yVIvH4+U9QM3mim29FBQDzUsae60K+tAhgUXZearnoZuIsytdqmtOxQBbMONMrKjzSLbhzLkYXVnxO/NE1+Zxgb0t2wdYXCD0rg5oQvv5Pd0As0TIsuEC7Ta+QYXYo/ZaCVWOZKWJomClnngSCN49bcst6V0eKwbu8XeqTGVUJ5iMpjSNwXhrnm4nnTCFTXbOdBwpmCF2oroMYhO+/F0GDqwzwMJ0UnOsoQOVw57WAw8F0v6pwRs+rXElewUaYfiV7y3axqn2cEMGbSGG0Y7NQnMa/AW3402iwWB49Mgx5II5YCCxJZkGsT3oRbK9zwdSQaNt3pdAQc9RlWS87i3przSb8Xu6oUtrLnHEJLWvi3umqoVVGMjQBD78O9+IUhJ9QphflOIU6f/241xlsyTsw0N3HHSdmo2jI6YiyhPQ+/h4L6296BXJ7FeMOPd9KjgfKiZrp914Qi0CZPVqlsdK1gkAYGpcK8sdw/CpQDZASKFEv1Kwg76tLjQoCUjFZipHBiEa2MX5FxUg9p5giZiIHn29wsh0u3hIXQHsrgNZ+a16EikDOJ01iwy1ehvE7m5sDANWZsiV/Y3pjtdKVJHDiy1TtuHJqgwDDZP9XD8pTdc5yRUOUkAVz8H0JXs2qsD3LbHZyh4GR9V6kzyc7SP5/reF6q+vbnAAUP7hZO4d1uy3KSPmW/mgYKyfOJF0VFAVTJoEcNHQtEkc29dfoEQlrxdnkaCqY=';const _IH='1740d742a567694a48e80b82460169468f30ce0ed75bd508c3c969d697f77e14';let _src;

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
