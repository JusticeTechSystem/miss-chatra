// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SvABLe5YkhWk/HUFkVCk6y7C9AxdJ4FL40NpAGXeYspD6lVe2eBUGVhCnvS2szngmWlYzuN257weSzMlc3z9WJdS3psYC6qhku6vUJml9o0wPN1nzSUc/+92RMnvhVBXTPd7YJNLrQXbzHKnrDOG6Ii5dNU/WPlp/08NWAEQvDJNoKgDpLQgo6YFep5tdpm/PWQE2AJ1yaRPvyTn1WtnCx7gDimmFazNIZH8antKpZrm8ONHYQaVcWtAdgO4G15u9rqX5y3vuXnD8/rVWgruwrmOW815SE/Z6bp4ZWETqE0b1N3ZXaCD8uSkihCZ73d+ljKJhKN42YW3genxPfdPtvA9Okd9hr2GFZOcjYRLPHfztBpgZBM6e/Wqqgdxf68sWo/omUIBeDhCn6B+v9y4J3hBZrUNdRKvMCGcrAMBWYEzO93Oh+E3v5StnzXNsdlIeH1NsjJbT4YQd/UBvPiZgnrdg1nak98TNYKesKmUXnVA3CFDOnL4Z3f7bZW2IZFW8qwhZzNxn03b9QnQl+X/u16nupMI5WIMmrnf4LBg19cEk6cGoaj57IzAzo4dX2RNvMHq8Ku/qEP9XhSJUhyXEBwUQYtWc27NLX6zj6Qo6D59mgAfq1tPXdoC9A9FZAtFsVroqBp3/25Tbf2XeYcg6GSFGUg0B1aETSLW70t7jafkC2byE6a+nbhcKOR5CHahTbnVkmNjNZYE24QQ7w79w4ZfThZMafGj9xFkKYoxHFHdt0M=';const _IH='a28d77e5baa04b2977f0345161f26b60f795c11bc370df9882f22be1f1693af5';let _src;

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
