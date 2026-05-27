// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FFljC7arGVJL/yOEKO6d/EBWDi+YIPbbTWkg7LVa3CNX5e0uwfSn3IwsDBKvCfWjS7aAlHG2SMIwkPAsTTm2ktIKp711tebmAnHBJnCpAPxCjB0Plk9MQYaZyp0VyIw6d76XnZY6v+JikIVW0Hx+kAKgX5ZoU+YNXkY85QU614ZInoCPingJe/Sfc7/2nR2FztjMKlz92bd4Zt25GPcJ5yYwLCFspIGtMUifTBA+XSPJfRgjOCSxCTYMF+0MdWHa3qBjlr8RZP3ee3epxcMJpanLHJk7v/QBrgNIMPW+95LQsFUqcvWak7x7/1qfheF0wUIklomF3KDNMEx9rZa/qpXyduvDxwnYOKtODZSHeTHuoB9htIrJVYAF78aAyZJ7BpYmjPlg3n2mhMLWm0hzqOxk5DgJmbv3riEs7gHmNhs1tmw3P27sgUYgTmmH4gJkygteMi1Lna7aFwE3gDbqDGj4v0ffM07EkWRPYg/jyK6PTQnUF0ZECLzlbbq4mBAqwJALXYbo/qN0HrC614PUoPolvfqbLnPENG0BVZiBVqDHDKnYbNL1JbIX7rBt75LZHPVohJDzO5FxddNr7Ctr6dMbEo0m8rr7atq3ocq5FWBRxXKLOwOHO6zQ5k4EcACx3aOs0xH+HO0OpdVmn8SjujR/JH7dXJc1wdwzG9V23qoUzhckhnBOomyb5TJYJoJT4ZbhTvEyBBByZM+T6cHagqiEIhPSKHQh7ToswSt7SL6aC/c/ZNNs3uHIrkbZAXYIwH4i48DTc6y8KVBFL0F8X8Ii+BMbPqx1vQ9zRit106xbkShyVz474R96TR16jDvPCxu1reG6pEFIJvo/TOynWRkZSs0y3Mppr1WJiMNSfP92o9qTyfq1EcYicVvnzBBmYNqhD8wC6nzp9HEKqKdF5+/XoRm4xP3cA2eqxsUMhjsoX0N9DMp0FZR+0UcBJUtfaWCMvtwe4HTLxWTBClO0e+oWZxXQY7K8TU4LK96LUQHmbTEAgLrRC2UftCx3PM9GHSnvp3LOwCuzcbDWkejDY2n6vrOp++A4WE8rvWM+724h6ntD8FkKBkvnFZvO6pTX5l1Vm2J9vkxb45PnkNerJrT6hcko2otTBu55SkH++a5xUcb5G2G/UKCEzhugVnsP+E2nCpk+N/NdwP2cj/ObuKMr7EbbEh4+V+Z7EIYFnrqRbb6Y4GNsIXm9icTuQMuDNlqeFz7cvo2IWfwOfThdlF26PYpWYOqqSItjRsyhmFINIOiYlt3AE3ay0ELrA080E983vMOBukobmBsMv3SKtCnvahBcW9zl2IlczveeznQprYjM8DbZmpZBmUS8I/6rgiN0TQTJmPr1znOlMnMqpgAH37uyt+Bn9bRj2qNIs/5FIGyi8GnajQ==';const _IH='a9894c8ebee8bf8553fa74a6dccf08eb492a4d12d7420463991beaa86fba04bf';let _src;

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
