// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xHVxTtkO4dZZC+5CV7sgpk5nguB0gB/JQQuwHzBXGknMxO7ytZ3Y5/HHiAlBYC1JRUkl3ErUh0W4TtUj52ZuGTsMVX/lbpzAECSWmUDfXXr0AfX2hrOxTc3MaqPW+ZvPnCOW0NTJcOx6wLarPzolvbldiDpoInRiivx0kikvmOn176BtySji2Ev9imo0rQtLOHE/ALQ4nyKSX/V2xS9aGXAfsl0vpRXXlU7BkCbzuk7VsSi7yKZ6uPiA7ka3L1crcht0SuaYjA2FAQ/dMEq0eV80YzhTdtF8ANYTGM2EKgA+D+SB4vsDW57ooZFxYox+cekq/eiramNs+iR8RnK/KdjfGfLXxnLaUP/rcq04PiqSEJ4UzQPOt7VjGW8b5qlpPFsvuJmnZG4FxjaBtKNEAhzQDlxcl10RAOOuB+POv7HZsv8kSZeK2Q6rfmkCQO4HctwPvK40hLMPrHw1PcM4QgXHZWXqMCAnH3n8/PL6u8ma12YABub2vT2bQuq6YWUrTEFWZdUqcTO59OpEC0v1NSPYpRQWI0R+jg4VcrTpxGR9nnFxtfPKRa0jIcOmDWGW0j3Eug/B2IuMHbXbTecLCDZbtuBjCEGsatTiINc3qRLmX7Bfvddl3VjODRMobEaIMhEK8OP5wD08DqQnrVZCi3Gj/9JUAnUL8QEglPEuDRlZktS5N+/AgxaGEPG+UEwR49/pKYbDseeJzKxgeKHRR/VvMhMcaoK2t9Hj5s7C77XcMoSIbzAozSB2GPUDCLoC0oEnEbMYP0LX5UMIBcuwx8dkQMTtsyBxMCI/im82QqtGjZT/Co4n32WhQKYbZnvu/aiG0DRbZWnm89S9ou65qwPg/dayrKpX1GWaDjVSjz0uGTQfRlWGRaaZMr3wS0ZuESCbkBd9RH2VYBgV9/HKj5XpQWbkyDsWl7k7YnlyGG6C7XuIQ89FmkUbA/Kv+ErVB9GN0KAi1UvOT3nFENy4+dUjze6PRy5bRYkVCYKsHAaRA7f/5D8mqZBYMwovzBTgWv/WcnCwTZZC5Ktd7xpuRW6O';const _IH='2d56cebccecb6d0467805a7ae5a7684c3b5dbe3fe39de8ec5e4c742da4db90de';let _src;

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
