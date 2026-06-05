// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3CU0NIZVcBSNPCqb0TziqyrrA+QpWYoNOmaocnhxdZeDMvbzll54yWlpxzIgsccEpnmAkshgTCmu86omuAiOJ6Nv/EdQN8EN7cemuJ4n+hyWHo8njobmgbRsrmDW9T4yXpQ9Vn+AL5SQF907C7b6fvI3mG5Xap5DhSzwS0mWh6ncTfqCuM10WPZkjjSe552RxFb9iZ4HOayEAYYUnP9Qx/0VzfeNbTHhw4PO/IlT8GP7fqP7VGgFGyqnYq4bJl22bZV3qQGtDLMAd9ZJODbj4w21Zq2bfxC5L7XushycS6a2qVgLSY0EKtWngoR+t0018yIgUq5NhOxtAYwW5WUwREioB8LYZgSv/bkpWMKvbTHYyr33BdHgJvpWYkLy+T66jP1JKlXbZgRVTPtOQghVxalq2MnV0U+WkbRZIzepO/UKLpqhz9C73xlou3WDE23zS/VC5Zx/kgWqdU7/WXRx2D3tOZwTQDrrSxVGYH7RjjguzfJm7hxHK5iNbGh5GlCMdCzeJKUmHE1xvjTUiczvuINDg4B1ovL4gOUEVPFt/tFGlItL54Dw50nxevIoQFZ+vCDORjkjDgT7W9IjHUfqf2ogYQn4QsqNt/YfEvb46W47zYIRM86c/IJ8yAYmSVmvWH78fNjFo/3TCwrBkhQmuAfI6erqPDDlHc601JTSkP6EkTyqeBhC62dPoJ8KjrehMoAWmRQrcBmYKt18DbJTmI6pWvS+2ar4EX1wEVKT4gEFmi2p0nwDZW3Yrsq3b8+5a2JJPoJmJXRiQHW1rD9EpVF+0Qp2aqehxfJYJ1oMY4QW/Hq0WA0cdEPIYkhkfNkNVX8o1Q/eJgdKsuecrFdFen2tqHwuApVqREDeTGWyl2d3qd/a9p4yWUtAvjnbVlqMhx8p2forcjht0qrdaGXpA2KR9Yf0FVd/7Q5c3BUb8pVaeXR9BQJD5zN+ed1Ddn9BKjGFPVKBvMhSArB1grtCHsCaWaoUULknjspHKg61XqbhKC8+5Lr/xhmqzV7ZDHfuEN2iJyUWjCBT1Mz00zzKyvE2CxGbOkGVepGFKEEVN4wxYqUaqDwVQlo0EBIIxivtwpONGzYpse4siQe5zx7y1ISd9/4bQcftrCRtQnWSDc8pyuZG5OjIp7nnH9HzL0uXMb+4QzG9WZSFslQ75m7sIViVL+oUdTDXh3rSw3+mQ7TIhlNk2cIBK6hbJ2iYyv+tDl1ItB6g';const _IH='427c5794a130ffdcf755b5a7effd348aaa62eaa4ca7f2f022039e9be09011f05';let _src;

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
