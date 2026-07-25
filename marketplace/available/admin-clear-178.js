// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRTqOs/jE/zcD/ThApJRwdl9lDJ7pR6u2aQHRrMV2/C0XlB6A062Rfw/K9BJPXaMTWqBU7oo+Yue0STh6ly8EaxKURh7DMcbFzTQTTzxHnpSBWM1bUQQLV49t5Bc9Y5HJGbdlX2lIud1TC9/56gA+8oOLOSayTkWqI2ksYmwAk7RH9sHXYtGxfg8ULUlswTyQE+30WQceTOhRSy5Bprvo+ZeaCX56e4juDRT8EGWgLkJsmimwbd5kZqK08O0r46RY4N7VDWp09Mla0p3PscFV5YqslzjE71TAe2YhB41KFM3jPukKDs6bQPEkz4maLjFIJjWck+hxHpQFFc9xso+8uBGQoyFnCeed8ZsA0En5pasVUm7LTFyIVTE2hwCmuR9CxFMQLpYB5k2yskVwscNiltyk3leS4zaYh5R5gFecMh4YpSJnERS48EnJoV+92CFfMmxXajOZbPkv+tEu7pUQWc42hcenAgehCD67d9cMCST4PjpsXz9ZkijL4wnnt/TnVWuMZlEVQHldS0e/pyMeHqySrKl0MjX2Wujou2r3vKUhvEM/W0dV5pswunxPyIvpasqjsZrkIeSNkAeNYXttN7AB4RVhquiyQttHC7Ii7jSEDSCCzP3Ui5fzwM9CMqzkklBvUEI36fUQ7qjerp6qY3NGiGrpEdzcf6wp3sdWDXTw+6W4hqr9XohvGSGTGe/kClRLnu/TuUWZ/v1MR0nzEhsqKE/Lte8dTffSzFlrg91rZveZOg5NEsLzdaWB0yavUOD5lgyZLMI5ogmpiOUfJcCqe1IOfIo9C45lfN7m6fIEnom4fcHwH4CZ2NEvCE8ATrwCyczZ8X5khy4iT1Lz+28jevq3/sFQRquVvlNh5AQe8oA5sOPBhVjV8UwcgMm7w3ztJ4hmap4FRrv5IwsaqebA6o+xRuD9xg9hu2B7/fHa14yb2C/PEHMRC8uIj0J8v0AiLLHI6WPkjn5aV7SRpDd8Y10YeR00nQAMiyjx7JnL58NY7VNQoAyqc=';const _IH='557c6a7ed9019ccc7e46d8212a2480df8e7deee45df79a4944c388aa3f90cffa';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
