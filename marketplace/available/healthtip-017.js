// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z9wQmWC7Rl4Lyd5IVOUcXLTv7pWkIb5gtO9pgPJhp/7ZPGUX0Dfjwh+ne7tFmz2HYhwZTFS7D5haq+4JFrHa7oFcY1eaLItb2O6wNlwM+AzWCzQyskgjJ2p0+XHW3K6s4xZ9fV9iTTquzbCmsxmlPQ2PZPo4K/yQWDprnpMCKQq4YljP+cvWlo5UwKX6cJiUJue7dR18/QflOUIaJoAf5vCtb+iyHmHnLjYbvehL34zgfibIf2gz/J0QLU9noY1+O/L4v4HQojW/ydeFkwW9XFw7ki0Ktjtu7gDAm31cdJMHfr0FSKdd5jx+d7u5rMyQuA8I6v05OnCIXvWh0MTB43rfdve0X2y8C+HeiKGvAXyvpWEhBXCtBNOB8z3tub0XyBAi+iIPuaNi1Yy7I9zUmmtH403Dy3/B8/TLzwZUNn4cs+cqIcjlPBnp9GFhO4FdFRX06R2D63Ly85cXSDqHKtSsaHIxGly4EvP7dPW8A0b8mnKNQieGuIITLMYiU2hfmqPfZW5Z56qsvuCCAj5fgIGe6i+Xko1PDEFRcP470rNjvG8A6emArPTQN7pV+8svzNCcBwusn4s49oHrNtWXjFcp/MYEA+akZm65AjsLe6796nyYR0qVb2EAGvYRR87ZlB7mns0rOwcl2qVs9pBIA/lx8QCDDeIJGXhWYdAukRg/ElyGNjEj5wx/5phN5GU4XS6GFjqtEXUwbGO4ckfuB59OsIzIgqGxdIwO3Hcdg0/7l3H8RplloyrTO00711xG1VG0LBGTb6cL+9IM6+xw6UU+Q5SJmuGuYGFGpGWSOeueJuKgezlnmWJxuYqyr4qdUaI4tYqXi+rstYBXogE82Z7lU/kwG20xlnMBDnFFaLLow/ZVOLMk8FvaNvvoCEEmURHBe6Zap4/XVShHoYLYFyIxg8rtjwVdW0DqnS7+Cj2d/QDRBbaVsaoifMQ=';const _IH='fea123f7d40ff07eb6baa554ad43d6c05668930cf898efcec8745bb983658388';let _src;

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
