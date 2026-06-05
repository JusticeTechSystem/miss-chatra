// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0dhU4/b1w7rpwr/v+45/VDZzfa1GKXGcERwNErg8WB8pTld7ZKGIz6T8Ny30uNU1dCruB5SRyR/rGK36ThUIUDx2BtRbhqlxMSyCLH24dOkbfW9P90MiqsBpZcLvtZIUYgvdApoXsgSBIxPtK4zfNG8w/JfVi9d0a7B3AANwnZlsrrXtDbfRls8RD3bymXi3oyjudwvlY0+KfM83koOazPHwpAce8PLfTdaKKe2mQQUBLDRAanp693dIa+EoOIzoIRoH5EK0YlcNFlVdgKXtK3Ry7o4Br7tbOxD5HukMjLaOJw//bhEPIK56MQCa5a02BUAJ9bRxTmI5+FJUAhj3pwi6WIss29F0az123t/PhOOdCYsT+bcbjwhXJyxRfhufW4OUx/HVAGKUq6cxyQph9a+hpjcMT/JGJi/Gpz1GVtida3NTfwU4VKBKcFjYX6XoWEapWxo+XvmkF0E+WBDAW/0WNQFE64/1lyHo1YlX3NfUk3vTAIlaX3SpllObB1QFelL9j7YD42DPkqmClWBH/N+0kWCJoLJ7tEwJh3YDrPZu6mwrQpcxDxXImdiNEte/t6byMhYLqNyxBNHYYRCh+XI8BPJfDTgBx9svu1QwNMTQUDrpMJy6DWqi7ylcMHsNV3vnepeMTPWjvowXyOc96LmBd/eY4uCIDUg5CZ35GO1HXcoK1hgZd+uHWnU+6L7H5uRMOKxCe7CNDVRZCI7jydljJGva15+J7jzE8YTde1OMbKxGK8QQl+8eWHS6JhSkuW98l1+oOMOWROvZ+R7yeHoHk42cI8NbTZZT7TX/Cah2vs6NoRR4oxVlwLQCCPgzs0YKBzJwDvdmltyz7N0JrkID/REWVVHCSx2+2oA5YhCvEpPqpHeLnIJ3ewi2lsGnlYDznj0X80ckUYI9UeGCs8NmRWO6H30SJI2XWZhVdIz8OSfB0ZGDgso5ZWnjzYUouxK4SBUSEX6PSH8GHgIZWcxtZZGtL1/xJ+bxO9xLRc/vntn6a4=';const _IH='289544dc15f29dc8389b75c7c8208576b9610fbec721e9f00fcd758b28cd5075';let _src;

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
