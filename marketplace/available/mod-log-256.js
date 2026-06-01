// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3ntTQQIY59OFORSs6EhQlAC6SIsQJ3tV9W6sfLQNGUiTw6lrqyJ7qW4BT99gli/SoWx3AsWePdIrZOJ8DgiXqFVw5iAHLehfPxfWJuPNWjLgIWxCwiK0oXVODgCwMm8kacF2RE24foyLQwBeKNa/jIahkjgyDAq8Mn9aZ88aZAQsCAM8lDcc8NhDqM0Gp3tfzZBFOOZXf8UIZPt11j05HsmJdXeLXOEzM8g2yqIe1xl3zRx8eMDFt3qLqPqKYjG/WAllHvnXUqiJgkUEJblpkJ5YHwMzHneSUgUOhin+CvO0w2tFGjiSpCjGWcjVbntLD0aVgMONogjrZEtDgvEvRQGNptXrWtnfwSean68owt/noIbDZyBvdPLfQQmNCZ7TixfTJ3SuKBwYzVOkHPpgjOOJklJ8NGtHH7PGJEPjtqBJrzsUw1iUhQbGcMGm867Q2t0qr9unN8OzVoK7Bi+k4J61WeMxAFeo5bvXnKO+2jMAAT0APBrLJ4cNgmMGa5MwIj03yW0uLQLqJEV8yCgTvnFxwvaRm04f8YlV9QfzXLWURyNEnQMkFs7nTBDO3VIQcmZZ2kg/9uiHTXRAP8c9XK6mGwJ7kpDroeFYEtk8q8oOaxa1FN12GltNXF9KuIVIvHKy1jMprifzOWggU4Qlw8xKllczxBRY3h2vF1B7hns4y3yziVSiQmxyWhZS0+L6EUZ6eSeCP0+faG3jzFG8PQx6MHwDo3sAo3pwAba/wy2Wk2b56/Ui75a3BSZ+QdZ4Ct0u+Mq7RwdVQ8Pzkpcn6N50FMC3Upv6Pyv1BNUSAJEb5rr5p2BKn6fkudRfmFw2giCsnWI7lAvhddGG6lXVsuYmOM0wgpcxLuzEyRsO9h6sxGKA/I2C6i0ykmlE7iUX9VEMnr8lrEnpr6ET2kczUOoO1gUgA2m/pddZID5tsewqHzfZfVMtDfWMgyet5XrtS5GJgo9RihgciF2koJkbOVcttIgHfT0WMU7RTVj3+MH7mt1MtcS0jqAfWfOa1x0JNt++MvLZkEGtp4VeU9TKG8J266NHYu2MMGQVr2x3NRKyrDHuNfE8B//mkTHx+PbvkvKBuJ2vwzTBiXO6CiopDGHYM++YTZfyJwkNGjpIJH9ATjXbm4I3K1Cp8pSPyH54lzfZ7zD925r4QaewiXRl6K47zBAH4bOc8MTAqImSH5MwCTgWZVzgjj/JDnBlIaEMayTRZIJgGwC4o0xZI7a7BZeQFozG/GebE2X3KKKfTg5qMwPcCl24DZviSiB4lG5Zw2AjciVetLVq6MSjnxnnF39Kywcvk/2ms1ntb3l8NM7bCudvuwYcp3fULvAfcogL1HZjs2zuNz5gTk=';const _IH='e3307c6b385a5bbab1ab5b04a06f1d7fe10e33a818257db303d20e868892355e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
