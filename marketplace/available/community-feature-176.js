// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I25s9sBseX5yQlL/+N1VbPnfBKQrZJ7Ss2E5izyxMcf9Y13wESCQSRzPpqekCNZEShrvVYjGUzGoAWAj8VyDQXv7si2+BbdwFW3+L22xulLoaQNtb1nrh/r2TkUonim6e+GDW8qpCcXtOjlJNzLqoYvc7oblIqYI7m6s6FCZ9wsKgwk9D1aFYgVMQVynAZ+rfWCsFb1Zl2g+uBLmZQNcGiOzBsHzpiMVqZO6SDGyqCDKPC5TpjbA2LyWNHn+e84117yoFDQZE0zN+VhY/CMVyOC30UYHCbN7+11eAm0T9rN5EFYx4R16gb09zgcLddy23R48YbP6KyLWJm3sX2TWUlsnTK93zeiCk6DKF5a6mYrzJesMR4OqpcgZTvdowF+8tvw+vimiigAwIopVI1beDfmwyMGTQIbkWwP5+1RKyP+RSPJA4WXFa76o4HAjTG/2qFH74M7hufq8Fy0WfKBd4Y4XvJSv7BRiEB8NhBnAjrORc6eGQRxLLHAhdl72xB8cYmsc7AztUZgnI417IvYmhz6hhwmI1I11K6fhUuAy6N1LQlMY3jFE/aVAZOYuV9+UQMadlrcpHFsHHXtosVZrZxDNCijuVYzGALNGp96i1roYN27zYZ0e4xE7Er9MzCydLFi/hrikWF7hR2Ut07+tUAf4ZP+5IWNvutTKitRBpVUcCWpE+RhZQsbYX28xQolI+EngvULpgNNiwjLDBwxBcYEY9KMJfmht';const _IH='40e44976a78ec8e88ff5552faa4ad2001c009bcebc9a6d84a06f93a1382302c4';let _src;

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
