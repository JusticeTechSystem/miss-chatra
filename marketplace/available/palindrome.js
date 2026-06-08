// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='srOootYz9o5tKjYBUzLu3EWFdnelz2yfvYnLrJILTGR0aLluconZ+vcSV+/qo2oOXefZQsLewG4Xosr1QA7+HfyLvvzwwHtc4v6SkwGRkRPC7r3f1ntkfj98Vxex29SuqCRl0C3oGpo+M3vMA3ObcN4Y072m/65BmdV7bAma1qoLCvDT0bf1QWv2xLVIFjej0EzgF+0zdNP8kQr8HZiJ8uCTIwaudfcecs4dHDO/L813b96VTypyrSzbWVMWoY1v1eK8vSH3t1ZUuRp3lycaH0LRn6B23EKDidDduSwO7DNDpm93i3dyclyRPiEwj0BCxEjqvQkKAZJW65rcbq9/YW4GHcqhpwVUfHt0dXhepkAlzqLvOwuObumGUhGa1PUt33aEgNU7npLCVk5vfw/Pp9c2bUsSeyq9kNvj3BPhMD9kw2Uhktu4Y9o1jfixT0kXL76OA4mCZp+OC/UYVNQLmZY0Thq4SdFOgOiK0TChPiV2WkGELspefan8L2O95E9MNKKkBt9vCAYv+6UBywMAEiqXsXVORscXBYgQoZOqPUuS40p/V9hRE/qoNlrHp6m7J7j45ue3UBfjRRexoH5fXLjLV9syLQvxjG12o5ONBWZIz/8OEMY5xAlJia815Gus/V3++WGvE7LkZU5YQuk/pMNQWfD7T8T7289QP7nQS2ko7DQ6kNwhkHoZ5W2lgPzicdPJFW1wjtpYzr36to8a8BiyB5Zl41NXtUylgD0wQu0k2Hnzwdw5qfoIjUYOgON5yMK0XDhRHLa4U/qKr4F9zIJqVw2kZnJ61CYgKoDiXbFmQNi9HHTuEtF0ndZUucsGtKr3BWy1ARftx44jww9GgdsABo27uiO8gwSE6q41U4sCpBszVpypmGSSiF45nNkBpd5OS0al8WU1xQULc1GeH7aRjwkJsXKMQZGzGydg6jOF5supUR8FoYw6ngodr+ON1g==';const _IH='c2bf8744c3bd47754b379f25e1d781fb65e828cdc7fa06f46ac32ec8a98e8db6';let _src;

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
