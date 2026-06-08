// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I3QzCuFa1xzMSsqY9oB4hgaCQ8yr5xs1XgvyRG/npTdG7dzbLdhWbntoVYCu2zf9V7p/UYXV1qvzdbAS24g6UARnT+3Ue4dEC5/RJNEEaOyWbn4DtXuc8xGrU6S56weRB8E74x6esRTgIw/9bRVXhwidLZgH/gDM7JdoQem4XG57zIuXtvTnsELblwVwoYOvCO/GmqH3mq6BH3HmbhWz11Nnrw/rgJCugcMjQOUU7IdjWOqIMYf0QrVfkRSZVBe7qE722w5chR+MzrQc6rGN6o8rwLKB4X6hl1/xQIcO24sX7WzSgXhw9TnseCSh5ZJmuNBraoZWbVt1/EF0pJIjb3v8dqbvgnuINKRvw55+W0S9r5Ue+1QLT2y3qMD9HETQm49uSbnjEAAbMa+isOQFf+EHqKw1YaxOY+jpi/Fx2tGVCv9Ua+IX/KDsLYFjUJBNoaL2eOou0mUnbBoMUzOiC7ZXMQzmZeJ5LQ/77Ht4O0gWO8Ad3Kd6PUVGORHVEJbIOsGPVTXCyvVchyNlplzFlTYpm6SyAiZdkIsDJoaD6N6TbokR1iJTykvu/VwVaTrLR/V1KLEGCXxW17Mfw/11uehBKLsG8UcTPEJkzNiaeVo1xZb+YvASkMVLEl3XvNzoQmj2QiitoY8QCz5lXbn0rs9RfN4LorJByuHJ5kOcOkkqnZZL01Ei4ujevW5d/GU=';const _IH='748c32850b10b4f8587e2047eae20415672ab499462b35e089cf04a6d8fa56ed';let _src;

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
