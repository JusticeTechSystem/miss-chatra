// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Un6/tzhpniXs0y7MUQZ6s5weJTc9eUJmxlJ83oa/Z/C8pTtchYrlhoEAHdKjqr03BMw2vFGn6E6C2jF8JEmpChXOs+1vdTRUZKny/7uoq+gUALdDP3zwwVeNypuEZDlvs6ch2TsUiN0k1UWo82aJOEEYMSIKiCpR9byOuM4jaAAUZ3XBVZvJUw6lCvJgOxFQLMkuaEXHUdElNtNIZUp3NBMT/CZ6lLfC1YtyT4wtIsARJVCFjteWchSpW/NJzIFz34xlaTaBZkJsvGRlH2cFjEIWfclaf3aceWGU3faGmn38XJ5qGlEYz230CeE2tnCe8TBhJL0Ghpo1iRlTsWIbUqPT1b4mXQFbMAwNpHfZB95cmvQTNKZ0k6ulKsUT0Ij6bPDYL9LGF/vWfYQn2veLZe6qbt2sicWVeFHbOkaARl3OSZ4u5aVrB0SRPhxv3uUVqENEWENejV5aP8mTiw9y3zmloFO+phatOKQDF70HT10gOMK6DrHyPJ48jA6qBQEJCmLcnEbFfTqBM7PTSP8UjRW5SwL/agX8Pzz86GDDUd5fO/3f7wWsrJsVByBHoeLJ7UbcbYJ4QGI7rAL8/oAU4hHHWF1FPZ56s2thJeCvYd3LqxoVNKMlDy9lYzefUJS9ao0leWsWrJqc/JD03sS1V6jmkk0FHcHH4XntRD2u01sshLtayAs+QGS75VmiXN7HE4rSHpu6lMupE7kPwEoAey3VsEWY76ccSEXckyLKjx0V8kWsNIiXPbRGTBkM8fP2u/A/MZ0sSqgmyewX7ByLMGRXz2SrPwUroumt3FuO8+u0qR7ZwWmjwUVnw/ibno9sNjAxPEksWtUXejqQ8u+UDimknQMs9OyuDJ3tiIy8efh+t1i6+SaGQKQdSG1HPabJRsKzMojdzsjBYPcpqZFclSwSMsTeobFwOXSj5TbrLKgO7WRz8vjuhtZ6GqLq3Xq4UOk3PFdijGB0tOkfM1X9wj/74k8irYK7A8OSXp+SaiG/RhDNQEpPscBhFaIDLlPMsOV0+V5k+PNf2S8F7JmA2pAIHPUVpFQlBKRyn85enmaBVrDubmwEdNFnBNQZf5khKueH2YEPPy7C52rafUi9V4Mt0KvjsUXKC7F7oZWst2/O6Oy+7yjZPaJXjhOeZhsisBqZu+T6FJV2ryjlt8UIfORhUnxihDnNUZYzK4u9E2b/Xpi0hctbvkG6JPQ4ZbH0kOJ6u5vb4h2uYTE5f+H4LCjvF/KBjDSWW2IhkNahqBMC8ASzFd3ymwiQfe+IPWvTcsYng9ekPHD/SJRJYmtzMT27Hi9TP7afjXblnQa54pj7MUH+8eldsUXPYl7c26n0Sq9jOr+Eb9wlMsnY4QpN3002IAHh/Axs+g==';const _IH='7c99d8e2c34cbb73677fe89a2c67b0ab4942e963cd2605acbb5e3f539a421d13';let _src;

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
