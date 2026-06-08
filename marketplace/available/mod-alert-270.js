// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l8lJ3DKxTcA55+TGrKcXIGfIbufQu792AvVAACoFJfK9z4APrNx1lb9HUZtnZm8uFE9a1PAEwxe5dN6vVmvEqw4KcuKt6UOuQi9ejIizQbGnbxTAxVeWRWaBrDaQFjuCEYT9xqYLwXroZWXiwVrs40iq5pDA0kMtelLYRYdgsGTe0pBSplFDVAWpVisHRbwjpz2d7h2ogJY6/NS/rxX7XtAomVrGrMiUeXlunMPJM4qA5/D+N8Y9i5Eu6LoawsSrxgZ/pvfSd+G6+EqH1NOb5aoo+N2ZPtpo9z+sXZNalpLHc0d1bom1+CkDRj6LiqXlY+tsVFqHmqGikapDzrkmN7SQ2rKm2mKYBINIGzFkjGIUwdH15xZGlzSVE5V/vLzoFLoC7Vuqy2XnNnL3/eXW210hR77aD4IaTxiSrkS6hlc+zIucJDSXnRi+W81/a2PSSHjMYT4fkkcSNWAWBY05ujj6rrE7tj1YvEBZAldhBT+vT3CGe4GqEbirpmMHHFTc2qcD3+YU/oWzMoHZooz5u1f6WRE6wjlMYAknDk3kPhvMWQNiTQfpBT7q8hugFa9edciHgIKlBKZ0Ji9FmENx6cbj6/QObrW8GpuVqxR7dpeuYzprjfQmWmytSGEtmxF1eGcz0NLvY8NZy4xgpqIq/5/fVMS90adO/JKT2XXno4OkYaeSfYAIlQ3XiO2NmBiiBxqiXT+oaViZ3/3Mamc0gz3EC0jCzTYEVHWHhNbCWkdLK/+2YKR7egciGu5x5D9D9V4GQGEHQWklCsxqADxAQX3GukBONGS2a61B6wDW/sOLEunQMaUmhuSP9F2ZexdIneI94doLqiQ38Z0W/TRWjZh6VUfpTiLbhvwcYnaAnahSFogGuPGJQQJQvCcthzQ2FvVVS292z0JM9bUa2cLRl/XSV04cnnD1TNr9HQxIAz1u78CzADVZYv5ZGpUBlBRJz3N17Uh3sQeDDv//oL+rf63sHo9XdgdSPK8hS8G6xii4QdLankywHlYpuk8H6mjKkH8jhEEwLJt9zNjWPtFtMVgU72TcpGfCy7zptEZHSr7Zs/BguXYWx7w5m8Fqk+dGmSq/wYmq0m12V9p397sot9r28pfX+eXtY6fFVaoP6V47KrKKa0+6bKxi33GAVmwlyIySP9IAMgpfnD5inedEu3XHaBXyMQCzHM2KrWLhTPf440w9ZP9UJvHb3CIdx3VedFhh29v1jJrvVbbEx+T7hJHKM3bUS9kcZjGyowzuyhVqXW7yrbyqlclXObiGKAV6zTy4mUnq9RDF/ZB09zhAkuC6SF92b6TVYgoxTsUF4p2nObNgKlFDqJrus9oq+2H7vaMaCq7aWIFbbL4m3+HugF5fXMEZxZk2Dq7PhhYP';const _IH='6b6110801339e635172429f31950aeafe5828f3c3a0a6ca85c89695ea70c852d';let _src;

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
