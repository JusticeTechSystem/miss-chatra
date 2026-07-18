// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQmDHwY93o77OLVq1JCm7f/9wK4Vundz0r59XRkZtA1O2Uda8Oc8tMeEpYEg/h3oG62Dkoysrsq2qBF9L2JHXkPIDlJZNRxSQze222ox/aGGAA/AxPTNOtKMvsvL07d757l+gpDHd5Sj+/QyuvIsh3NnHG6016rTjptCFnwHS9q0ZNEe04gqKeQ6Nhucag7qXN9BSV9BWgTg3Ej0HX3LAkuPJunus0g18IJNZDzbKaXnaCKxRcW0DYqeCJopcsvEWJDaaXNBK9FH+yIOxHJoA9XMQlqV8XbPmGFm9zdJhOi0CtFU9PEAnftAlPOhYXam8YPZ/ZRizPDjRuU0aoeMcfuzKcPz08j7EWsbcdePozvF7/6AlynptgllwlcdB9ay3u1rrWykKSCsjFVqi/zO23Mb6RHXDmVBXBRPB96BugPKkHQhqDnU0WQ6ao+TJdbHZV5NhSgkQBGyJh/G47p2ZDmdfKU8ijpaDsMrVvVklBsIXs0bNMhGR9155rf/MgLnFFOClQutS3R6cb9XiG53PR/hPKvbu25oL8+XMllfyxdWJugzfHWI6LsVpEXk7SiE8gDbBDYbvf5wIAPoEbkMo0IOHHiq9jHcSPIDHrnx78M5DFE06WhsvkwVwZ1t4C4u3qGZPV3EAkidTIGJYZgG394/v6PCio7SWWS+YCMMRQOpzNjMjps77BW4HDDEahsILoI2XRlK7dyJ4wcjHfuetGgTcoj3PawLYY9S5eaQkfNhCtlKdnAEhkSFo4=';const _IH='b7c42f3e80d04fda32725174dfa30fe5196cb57c63f0684485b6919921898d65';let _src;

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
