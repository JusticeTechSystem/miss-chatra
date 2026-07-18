// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTVruhTQnl/6ym55qwWKkAGR0+EMv3j1wTdnwyA7EY8uD1u89qSnQKLmfNS0P9+H2LJp3RNZOujYVXn4rYUZwnVE9SADcT7tFQieGV8M7SQ9zSvQoZbJhKxlWPnfubKuCxMBzQyVqGIVHH3zRx+mgHOwbyfxymmdoDesfEoFMAJE52ylXj9BPZIpXWf8cdYYslINUYF38xqLT0xZZXNh9guJI8TTwPHe1j6axxH39sLeCoS0FtND+4ffsUASw8/Jmtx65qUr0BKHvq7lBD5xAIBjDqaRyzM9q2r+ISmrd68+D7JSiTBEmBEc35r+U6M1cf86+N41dAW1uz99tKgW0C564AaOpuWc+paJvPiRPWaXkxH3Zy7RwzWAN8RX1FLQuu6J7cghHwer3WlL8KtHLaEfguyQrruvULSn3yr0S9Qm3vQ3dnkqyH1Y3DkIbg44jQ53lfO1AAUpq0lIXR6ojQ9AfjfTCYE8gk/5W1J5/HCNgjVuC0gs8YSFSmSrpFwFIghWoF8R2Ar78IGnsv+qOEhBTQQF0nUENr9QXHfAXx70MF7M1JoPZvWTJyIvLy3KzAmrSaznrtyAm0iwvwPloKHpzhj/P1TYAMQimeS2Q4nMXmNy7kyXx44WokfQqJ29o2eM7oopqpjh9+5R3HiWL32RhmEIqgs2XJQqfW8+xXKAu3sDKIb2bx1iAGWK5OAX7fLCp5mriP+cky0GlNZpYk/tNayFWep3qIwxQ4r3PIDVJfZNqHWZ5xbSjjWJ0vl03DRREtETXL/ShUgUeEYBpdOQ4HCUqPUdhBVEfzoH3JxAXIKkWBIt+U2+1KIPbhPLwg+g+lgXAPEh8kNIDD6eksgZ/pzdqO0c46Ra/p7JPSK4mduFQE/E9A/wmrX0TMCOIhG57zZyv/kcRCdjGjWKqo3DqwioguqoPwZIGVyZpQtfiaPIHGQUaEgNjviWLFwa8wjZ5TkkQfkdjkzBpelEKouqkZeCEMsLQbvRV5dMWBQVzZ6RZfxPqzjDq2Tx1F5DpKgyeUhfkFWeRURQgSccTCr24EPsrFq45BqxPSqK8aDVtTeDXGxM3OTUs3MCTXepbFgiCFqZWP2wcaqwAQuACGng/5ojj0z2wu+vIHHcK8xfN8YqyZKL24+sUSXF/p7Ax14ERkHuAsr+NLjrkTalEKklcuMQdP57I46/wcjUupF5Di8fcneAi3kbRzGqDv2suPNKG+N1A==';const _IH='2dbac5bffdc8a55c41340544d096c263a24ad2bf168394d235bc8b368e134edd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
