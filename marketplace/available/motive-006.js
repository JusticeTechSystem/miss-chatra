// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dEWxUBCiYkGpix34EeGAPX/7EAAahHHOByZY8kQRIPTWbvXNw191TG5rtqklYa5PNeyw3rdrnkOSveEqkQUl8uuOhJOy5dBfvismAFxJiBMXHuK0wMyceu40H1ZtNw76t18UX4P0JxIAXNy4byKZ4Jv8nd89Vo4mNMrMpOoM6Gujle79BMXgZ0fzRi7QTypq8Pqs27ltpkWd/JoNwXPNnmeb/vBkE17jZy8+Se2/CfHp+BJts99hReEVR0f8bgtBoLamqyR6cc67oJLPIP41tlW8MzfYoBY2S7ELZKjwJw9A+X9Gc0Gw9cQQeFpfj/hXng9fzEeg9o9Iohttp0xkioO3ASIHIAUjg2ajdHs0KR1gvWyrIDfc4rOuf/QntNKenEYznArZCPdyCkg2USBzHSt2XiSvaxaOD3Yeq/BVjBz7MWN3aUAtsQyGSE/Stk0BQSs6UN1ClgDjRMGMLYLrSTcOtCNg5fnzYiYi+5CU7ld9oB6BNmSIuRoY66p5h1XuHYNfOfaOAix2lK/K/jeiGipk2nF8Zn6dHgqk+EC6Gm00GoJ/FhXKv4FbXgGw5WENqA2Kh14U3u1ly/5k8G6HikADADXA19QgM1gUlW+mZTTe+0x4ZRwwLcXgOlDNHBIL8rTYTLrfab5GQD8TrYz/P1iJ0QEKtd0exI8mHPlOn41E+F0SX306ufVVdfTY9ilgbYfDKnkwvJgd1iSP6cMkbNC4HvrdbJREEz/zbQM3ms6b3FyA4OwS12W0M5aaF9/b7DvPFWw140L6q2CoAzIzn+t+Og/aNws54hB8/eShNCeEWzNpJskAEy3TyEnUdWskHs4lkGiZRNU5RTvSLKug6pXH0OyakbNXjbjVaAPmFygt93aSn3GxpBme4BiTrybBc95X7GIoYouP+0ajFXCiHgUVLO/Ygu2NilHHr+uWsi5lkbdLMGzuhlm+cz5gouhiA3bEiYt2EVtRls/U6cB08RA+qYixgn0aQLB4HW1IjDWZWOJyMfmq2Vw75BSIa46jdZsHt5X4Wu2P/mrDaBo=';const _IH='cb8386d2df1158a0b96bb5653d6b65534d56d0aca5f1b30a40486447bf710d35';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
