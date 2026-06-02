// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VIwpjJdBmN3FFWUUmSwYPZsm6H8LTD84qTdxA+rKtFIirpfGWkh8TOgVV/XSZpHFeA5fhWYqlcQKCcRW08s7uh//ucOYY5j+GgNu5OO2yVbkW2heDRw9CrXg4oKqzoBmfJ353XgWdPdZ5znb4WBxTwBPx8LnOrOzwIiqci1THVtMDx8YWNIGKXHAMtpZnO+BsJk/sRvMG3+L8RWutmPB30kk768K6+yFU6WzyfhUOH7Qr0NjlyxHNKgKYDQSReZiVrVVivnV3t2fg72cCH4+OMNp05p7fQm8AcsfbZCLYKjUncTk5JHMf3VwpKUGRQFJ1izq3RAlycZQZYKteLsxoxc67qKfzF6VKen9oQmUkJAEMzDo+PdUL5vEJwBxb6zsvKZVV4CRViCLWNcCeAlOW+dX0bONCXMATCFp5im3oVf8uXaIHU9dKZMya5dUIpx+2rvTQlu3anWLFopt8qBrDiWyuVb0mNb+PW7YdVFk25HC3Nrz8CdU3BjZgOXUvUFQGeaUpOVYaxPbjFEZllPgfKvHS35/DYL8noZPzhdFyo/l1lAMZgrP6oKK/1O1fob6a5Tn5XhVs+bg8y/s6yL3fXxdMxvzGeeLkyI2lXbIXi/yxfYxVdEiJqavCtC/0bkq1QtF29iOJGAhm56ei618IRwUB8kh9Gp31cAdqxBuLWCXSGVCb18sdvqnzXZPwYmeQT5UaRFT4cB1H//6XJZVzxl+xnnuWSL6b2o65EA2xn2cqMNMU6xbsl7LbOvT7PwTXPwMxjzibSu2gEPf9uDBqniUkmAnT7M4lSbjrsqTcp+OtsrxqFM9++GIqbprfSXRR57yHW2J1B0e4K/GxKwM4bvZ1qQ7FC1+gWEUZTVCGr3N+XF0BP+TkjMf0AFbyLR2RMBEi1yYyo4NmlYziWQcKVz2lV4hBd9vE9/Y7UzLYEANW5s4FD4zSQL11nc1r0VqwDajfc6/8ShOAzdYLnbvHYqzSVlDRN4nIa2V1IUQDSR9A5I/54kqUQ4=';const _IH='1fd2585172d448a2666c55cc7323558c93ebd91a1dfd6038b165dd784c31b12d';let _src;

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
