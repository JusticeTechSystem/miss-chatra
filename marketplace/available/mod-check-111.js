// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KNT2TxYr3Hby2OQ9sea4avWxliX38k6MBb0jveHczM4wyDSZ3ePAKn6RQZxIVF97efLYdX5e8Mj1B5HnVRcJRB85g/JqYVtG7k88Zk/14t89CZh0kjFfWCAapu+ETfO5ks6i7Hk7fFmylQG0C4GEXSUT8KX0LzbmkIWtHWh1KNXUcjJpA3711uXCwuh4ZKyPgc4vN/hVPs9fzJebPTgqKrn2u3nd3o48s2VNLlx4lG9j/NcnA33pRauA7whsmVM/JmFC+LlJbjrFy155h2s9Me6mkbyHIYbK4J7bzEGVKLVgKtk1yuLhQ3wegqVmOBzKICP+9mtbkdNmWGaibUXFoOrZYAmrN/m5r2MeBKZy9H5rRyCSO9CDZJupuld1xqrfttLv/SZSXnQCUGxIq8CaCX4XymzYxlMWV5VMFyHyO1zsv36bAHIfUVKATCBj0+GbDviHv8fWO/gtlOInMdbdp1/PRvxDFbQiUFEVBSoT/4KFE9kTGN8/k0SQYorV9RO9jL7rBWYZYca4YV+1E1WGDZiiMj0g9aoDEthTXDfmzfu6X85tC6+LB0PdIkB9iXE05YZGqOOMcpEhoG1zoc7XwAvICvJvB/vVKpWUl8K3pkCBnSsxzxABXNy78nya8MxIYq7o5vw3mpcVVQ8oIU2EBr81jTaAllqRAYL1/QhVkqSgmbvM+/yR5PAgbajCPa4NSvgibE9eTLp5JMWb7PhI3xKmIjkv47ss5XaW8yqS41aQYcyS8yb0RagOPDarWZiK1hS4fxSwv92CP2uPbDcONU63UZneuhFLKSuulahFgxqzrDju+F1l3P7Y4O6BZdUhErO8j8xIpubHSJPWFzZqM3gA8UB4r1jM7gYU6Wz0kFd9Ac+C23P0LcT5IuwMXgaKQhAz1fCYqcrTGXExV+TLPRi4r6Q7JgQtY/3sBmyadd0vHVicSSnV3dYO2yGepSSTtlzhO/ssFBZLVzdR0hzktzgjkeKxgzMofRTdMzRocRp1huNzTYm/X0eRYWZ29itd0Un200eSStXGbcCJntRVNkJhrY1P7lQw1t5jUi8UtDvBF4ajtW6FzrJqDh8eDFE/3e1O3Q2Deyjpcks94CfO//JvTC1izAul6+pNOns3RoHIKKFA6ULgIGCOPlxZ2fPlVEJaH9Ac+a8xHaTqAd7icsX3NGBdWyTRR7PZecsdNV203EsjVGwe/1f+fnRDdFsG4TvhUsekUTLxDhbq/fqDWgr4IjxXiiZ6TWcr+rdAi43dUc2fXUUlBWAb9fItojvMS+8Uk7ibQND2JE01yCsr4shdqmAtIeu7YzeN0jlgRoOujeA7rVcGo3zOzoNbc4L47UFwdlpJtfide8r4/d37onVncuqpl410bT1XSc7z';const _IH='cc2ea428d98e7668a7d318ae6aa45cee2ba85daac33760abfb2b050230499e4f';let _src;

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
