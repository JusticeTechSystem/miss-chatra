// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oyIzcpsheHeZQEUwbK42ddTWTrVYpnMWYgDKCPqkj0hica0+Ngqmc8hZVeXdq+xXjEjGU6NEfYzmKvJBT0fiuVAcZiNtrHV68LZwVUzi0VTlCPqhmPg2+jHzz0GvMFh6H+MrdDE/a4+23Jp/yFo+FhMWJYzUpIOC6Br780yzAoseIJVzuNCcBWmvHQ5OAN0FafpH2VJbdff3t1BScwNvymzmZDjFPTiRKkzv+Yfzu390Eovnz2DHkyfDoGaYkSMpseI0XKK0WIfpePHjCeURlU+acLlU8QLhdCUEGukaGMEIKXaJrZ2V5tyNDtgmuUeZQpU6qlo3wlKvWqzdhCMB/ACokX3mhktQiITZdJD+ZDTbovadzhb7WcBBWxcs1fTGTHLYnjpq5pcYhLjn8uhAjtVaByvxjedd+zJ6wFkfAELEoQPpnWHP0mTSLXwOiD4g4pUO+KzC2bmVxL561kXwGq9AgROkAtL8XhWaCCjhoVYRJqEXbDJLZUED5nYkUYHr5GC6xAmJYoy/xXllivE8+HaVvm4bn7RXu3JKFIo0dvrq7witFyp75x29ejv0hhv8jIiQqJPLLF1KmWjZXqGkLJs4WheGy/WKq3X4bQSP7nSCwohyIgAd6jVwk8jwSGAtTxinBJLfJyummCQt0uc4onuQTybhpZhdYjcW0xvtnnIlEdablQmAR/d3UKQyUG3IfzbycJTWXBXYSF6U9sDp';const _IH='12e8e5457a31db8f87c02f0ac4c999970e9fd43ebf08419856cfeb2603ae3a41';let _src;

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
