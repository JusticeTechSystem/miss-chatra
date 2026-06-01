// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:02 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxyoA5y6i9h1FDLFTRR7AGjEJOhzRJw6aUtds/o2RPTkpvoo7Q+4WEX2EPb1AAmrZ5vbNs6VykA4EXHUbYwW3/iQW/F39MIGqfd3dZbXawfV448Rtdqb/YIml6/BOm18vhG2NsN6ghgAsE2zVhtTYQy8cU2qb6BQg4dzRY+DAyGsPvhm/4J4/gc5kFQnq5Fiq9/9Ruy5EgQ7Dk2OUhx4yJVLbC6Cnzd4WHKxEr3eIDNxOqHxDfMZ6+nbZ8FXvN9idIZI8SGJVRo7Jv9XexfCXwCjZzN2P1sCw7RGXEFKNA/JNerVZ2cYYjgstRadqKb7848WMvbe4F8c9dt0kWo8ZJu8yyPg07Pgq7BYSL6ykY6282nYWtk1jBw/R68hQCbO6b+M7NPN4Z78vkP63QMPvauLaZA6RDziSVNuSDD3OpGKM/DMnxI+0wv/4Ar6k1zxt86yh+jqvHvN3mvn6emSFvPqn3Du0Kz6zs5sYwE3WW26eZFFW6qMLfVlqopxVY88tKBJyAU9FB+G7kzKi1xXg7SjkiQ/03Aq+ufrC5yEj7w7epimteKf0SO2/yD7+O23qSrbn1Yvo/DdqBUh9p3ncof1kFVm896GwrkN6iKUt48TLk2XqLk/BrZFhq8JKgPodHPjRI0z5Zc9E3ChTHjfUTxmw4ZtegreMVrT/wQSuPKxXd89+6+7DXSEVW7jPZztYoj8t4ckcM1fi1/oP3cofRY0pBkMWkyDoTHjBLRd3C37ZjpzV1I3ybyBslpco7xOxTYpfDi2NO7HBZem+oaop39MHW4wMsY8ovX0ADcZ/oPR7Jxxb9WlWsJnBDj6A4zYGzmSuGCz6Xj6PpxzxhFimIDgUYoHjebidW02FAbaeHxw1gMQlH3ZkOqcbrGc7MyyxqwU2UlTFj4xHGiI+5KGDGr6fU1hQffI9MAyBsdfAASH40y/J+58Qggw7knhoWGFlF5Cfvofs8Y86NqHybMqz1L3gcqBFcmJdikjbpxNLSmYgbI4brmsvkii2aLAT8Xicpeq+cc9YyzxPhiDyU8NLnzXlQ==';const _IH='1d37a7d361743f48d6566002bd2feef7e405151d7b50e7132d112908f3c15057';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
