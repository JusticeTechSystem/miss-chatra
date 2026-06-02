// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P7jWDfI46uzCPnhVyM6BfiXhhFmOB2sgMk7UhZS0sXf6DgYh3bKLy8sVPRPjzLq4c1zoMBROaPO7kKD7UXLjfWO3ITIQJLo1hlEVufS7PDG+yjlNXPcr2pAfHW+fHuTXhFlWjF1qHA34ekyac7yvlVOTxRG+xrmrZw5gzVOaY1/0V8ttbOmKztZAbK251+O95szo9Sq38M72oC/TNTLEHs4v3mXq/0XNY/qp5QNK+rbZDYFOqJaXRGVtsh/bHkcvdvr70co85JdtBsAlegjM2MNav0FIxDHeu1C2CWWj0nNH99BQVD2t6SqVy74Mb0I2u3//8MQ9cskkm1QyOYJFJnaFmrCNAIoDJmLu2lcsik2sn5cQW4k2pgAF7NPAk/C3sl+xDkKrjgH1SK6efLexPStRgcXLXztUPji+bcjkTTB9vltr6dbnGB+R3AF13hLzaxczs+c1lor7+duRL1wygOCkdYaK33W7pBk3UR3vKRL/zp2dxTvZYb39WsKnnYjPcGc6888cFJMpPIUYGoCZSKApYKYhM6vfXZ/AbpULvS9jvfI/CTasotWOnBBdqw6WgLNF+uo5WAVc1qyjLRdaC4D80k7MahACm20HmjXuOsKUhx0PX4el+gcNTY2xp0bmHh61y/TfR9ZvcZyVWkq8WzFkQIHlYHyozZa7rasf+AvnN/r+ZuuMSThJZm1ZTo9T8HoywGhmyvVG3OBlJD0KHKjv5VQ=';const _IH='4beeb5046b3fc3402b189852885e2946c6842b2a4b9da7881bfcc29fdda86192';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
