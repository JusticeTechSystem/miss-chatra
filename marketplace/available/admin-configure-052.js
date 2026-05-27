// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8AqBvZZo6ecjbrYzu1BRmdV4acBfgdQkK4c40UNTALhoT2bP8tZRMUSTDhHCxUMFSAcvqgSZcBsPiE4vk7M8cAnZdV9O6QiMe5nflZH09LGGOH9QVV4rBwCfPKYm0XFCfe28zoOg7WnJ7COOJdogmQj5MEMbIE9G7B0+aCQMzZ9ivil/QYwcsgeSWzft9aSATMKiGEGYHICgRqBtqjh8W0e9xCU7a4DqdIfYXevb3f3ve1w2BwQux3cuEIPF5yk+7ugkOz0T2crAP/MipR4Z0TTN4Q1gJ+xKJjCzI3vGDBF3PMR/1M2Bx6yq4dKFe9yU/TS6RfYqIP/dncQ8lKSHc4G1b1yxjCu8i6D8hUKgkr+nSo48ADYKLAvcZkPPdeX4OgOcgAgakmot+8rg81xoCe3cG1MdycxrbN7gw1funXQ7QZh3vUragRo+3egxkl+tpXGEiAAtKrBX7eig63GvjVhZFnwnVC2KHEm+UKrJAK3+Sp1GhxWNuhjgjYxmZSXnSc7ex79m/xchFgrFfiKy2XSy9D93ZDHBn/R5peU0h4BERfezfftA8qIfKm+v5n9UOGjPyTHgdeR7ule/4XwvdeFQ+xXm5E4YMtaLcmVJeTllNOc1g7OCNtYXAo96aKEDvPp56yXZp/Mxl1h3ki7Keww7w00fpok/MKrW46eKT2GtPdFmHI4K52bS9kho/8LJNDkKNiKqKK7vfUpLIQuWPn1FUO44YRgcLO1VN5TofP4yDwJ9Fpth++uZz76zZcXAKIijL7asx8I1J/486gj6oIJ1WUo5Q0CyastqHHw3lIhEVsS6Qm9c2b5mKjYbNbHDPIDgOGacL7uay96X6faFs05+Nv1+jJLj67FOTb2YP8P0mhQV9mihgGgzUjGorJT+xLn9u/dDXEC3jZYGZ/0dDgodNY2wILQO9vqRWwPDaE1t2V4YlyyZ9sq+oYu2OZzRiQvoAJrhwsvmZDu0eqVtZPgB0+zXKLchUfxxyuqQrLcSPQAZwrBSvb/yMQVPRbYM6LGkxJKbSQd3NRGaZ8BCbqtP';const _IH='ce9502d2e314c8fa9561adebd15800fc5764cbe665575b1ab3a3a164edddab1a';let _src;

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
