// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8Sr1o+PlxBukNXAzmhO6in0cDIwZ5EuQbQ8ByN5QsIQsmg9LFqhvtdRQEIiroqzqueA4HSsIa2P+ri+dV5wIYAopClpK4Al2uCw1EYQO5x1ZX3nepuecnC8aMMydutmF8ZBYe5IrsxXKd6TB5lDi/3ecjyjjuYSjeAPzE5L/G5r/XnImA7EU5A2Wl6ZG7EDxd/UAA95sfLvHFPaBRD5F83budNV+uUNbJyUJQVlhceOqtCl7lElTD5aVA9EtVo45UBIuWRpQ3EzXYRdZbBVkhpBmEgQEzGlkb354Ca47t3z+gA3akKXcnoHBrLPjPq//rmTrKxkMHQFDDjMRTkE+z3/8cEZ2hBiYxS39PCvoVesGBcK5BCRa+GpSZOGXe7jUv6RqLCsJCW1nMauKjWvFYlBK7MU1xV0jCIhn8cZEBBm/XceBZgrazk9d+Cmim/UbMCPOb7fmQ23IkxyUW5vamnfiJzplLljb4yL3H0MV/l9O98CMPYlsJ5NMkMDjrRPS5SN5Adlc63VKK/y8Ta0aWM6sQ8zWv6LFM10+DJhnmVg/swpBHvDgUn/hqhJBsNGb0DJJqiYSmUSCfWiKPMk7DtkUJVS5JjfaPnTgrGjEg2b+i0PEmY7K3WJT7zHbLMq5Jk5sBAVyydQvjTm3B8Hn0jgIJKxVswcRO9nrtbK6ckgbfE9F23atxoy6E5omzzwbNHuU+Z1fuTixDEkMp9zndur24r1tYXEi/LTle0gx67uXkVzZWkyNEQ963NaE+baigUslVaj2QE84JivF/RXJpd+icVaCBl+o5FdvKhiikHb+lfsX/1H2L+bmrnkabZ7saK6QNC/fJlUAcb8Lt6BkwrAlzYWozQ+5oTEI6UYbUuYDycxdmvA2xLq6G4DTROJbUQPrsD2Br8TIT0ExgJdIFF7/6pl3MAWOfBIxCASHKnqjpvH443Chy+RgLgGfJPvQXcHL5T94gpiT/npmM+Ao8ANMG+P9H0MIOvO1H/WPE66H9iIlnpIe53sygfBHiHOYlUzcVz9qG5wQotBywBQMsARtgM1dUK6u4NxxtsouT9bqe2MVx2o8xV/glTJm7aqo8iF8qvyBt1DvNjcRpPDLIulnXjwNBCRCAs59qbbpJauSrdkAsmEgMKh2tenpY+60jL8gxwX96Dfw9mSTwbSq8Wf4A2NpOv70yT/8JGyaP+qnzfQG7HAvBFndBugVDfeHux1mBru+7Tl0VK8RXoeTb3lqfceBAaCu09Zmji58RPkyUQUbW9uwsTtRoFeHazMu1VY8mWyEtTfiBe0LSQXOD68uxbdi6LMUArBhPObdVnw+ArwvAevK3PIYZ0zxcxTaR8AoWXn/NI4UKtbZswwR2KEVyTe3w90l45ika7iQ6gGnXtGMmKEjhwYBWV4W21B3pEct6mm6E6Pr4Jja4tRS+KPv9Jo7OnzhX68Gqb9nd7XgaFWkkAP309ZmJ2YWVgYkOguW2bvGO9Q75sogdbGNsjNHEtRvHg6dGOhZT1cCYp5pQWBgMuSKgIGGKbpivZn4s3GC3oXzWiGX6Fn/KhO/VEOkU0Oc95jMrxrCNECC/PnzeqD6swZBYV1zd/bz5Wt+ikxAPHwLfmS7axJj38yOW4b00SB9oS4sYzg8X47+WFXlQ/cfZzfVL7cLBYAoU66KHtWX6qxC';const _IH='72241bc31c5a53bac77cd668e0c157c9cb29f8f4adb6f9bb017473adc4e5f624';let _src;

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
