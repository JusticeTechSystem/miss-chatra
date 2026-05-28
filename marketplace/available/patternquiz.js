// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WB9Zh03i6YIxnbxn8GbbYW7Rvcg8UP4wXK0oSbtlGAFO7WDD8AOx5XsfQq+Zf/o3iWN2eIZ1BJGNveNOJZlSU15r+pu0FfsgLvyt62nxJIZp7R3hNp+SZMU2K0Ynba4D60cwZjy1f7mZw08EpzB89pvg40A9WwIGvIWbwgcdZp8/wx/FzSq+8VOL0KQYzuOCWLGahz7m27+Xvir94xGNbfrVMkjdgUzSj0PeXsizKxTaUu1YGDHvPtzVnkjn+jr3HvJOajrRUjqBrdzgzl9lgA+fBsN68nNHHy5tg9k/mbY3j1SNVYQNLJzQro7LHj0cAm6dsuh9m/dSYePvUHEe4x/5o8gp+koeiTJQt08lyoWHfBTW4KPrSDGoZNnGxJSwijfErFaVaUhJSn6pRfyK3nmiIMSqkmJBfFdWcVMAuO5AWfSF5Fl+PQZvCGl154vrnNwqJ1/xXm7ggk0Y/M5D+d86H5ooGahpZ/3SL4H2L6znz2jJn+rgXE249fBVfV/l4sZtC2bOTDRNM3Zm/p98fkx/o64l8gCJ9FSxCX8HAt4JkLh1PzcOzIhWmcSr6VJThCNo4Vz7bpQtv8XmeYqTfRXIyE3SdpNmeC1N/dVqUQUPWq6bfBGQ+wXHHUJVXNAECOxVikwU/VrsATlskY0h4mCqpr7yfslNm8NC3PLsZCHmjvWIf0J8saErT+5P+CEyk4JqlkDqwHZ+FfdTEuNvAWVKCx6XFBifbZeMlvyTH1ahKw0WBT9A2oQU50FtrEJhom8jOBKep21qnzA5LndDQcdOsHNBzPrTa1vEMJuM+i2XZY2TIIlk+bXneSHvlDeudegQVgwTE0CWM9hk380XeFV04FYFV2et0NfeXd7bJBh1nfZYhfVbZFkP0wQoa6GIW7UeHcStxaf6yQL0EJMU4aSDgUsdY/NbDgQxVh7SpXlCsPSWAGN4f+r1HdVCLHJbfAHGiZ7eUKZXagmBMJMbgX+SijHPs04CWwh0CWG11d7oYiRipe8fYx4/rglADBwGBuLTpRDAvm++qfWy4d83asRCUq+wp68sAjB73miiCIIHruoYrRtIx3C6jJxtnd6IeyJDsfks1IhB5ph0cm8qswhG+FPnlMBd/DsUXBiOGKMu+TZBHXdbBOEMvpnkN8joItDG5vgE6dW3aDGroiZow6Xrh2+6u9HrqYj/TUZF7AiKDkKSFhRDiVTXaJF0jn7ccPNa97MgkdKy';const _IH='89939b9d35204d1b8d735725e3241dd000294da8635b9fb4fe34b8430a53694b';let _src;

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
