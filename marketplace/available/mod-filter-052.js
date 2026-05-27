// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tnnQwmKjHHQIjdg+6Iv9xnn3s0EKu9fObGqLJVSvGftbQIkx/PY9kaTnCI1v4djEfDtr2xc/Ohzkm+LxeNdTyoP+ZpsfPBqZQi7eFUzlrYVx2nRdNzgUB4+vAisd15qcHIMfehzaJ8ywEhSEX7yMptwsovk62tPupaXf92qIeDwfB3GRXKIori6CwD5yoSkq0TrGYL59ON4mhk1pOiwecHI8mXorR6qZyQl8tjh9Jg50pWFMVbIcB6LNm7NKzdUyUgtVBxCWOr/XA+EBbcJZ+XpJMkyqR5oktMpGb5qrDoB6wSJQSgOqyZTTcrVaJksBAA2/q/TiIH6i8PnnjLJBkeALTPOOvs/dN21GM3ebZIsowDGv058lQkAh+QfIC7zWY8Wo8a0OvJGI0mS5aOXhUI9qa1mQ0cQKL37xsmQS/4LSHl14QV1kwX6fq6pbFgqmFby3ifwbMMyrNPC39+NARmX5p3yBgdSW/LrQIHbIRG1+zLWsb4VlqWFLCtX4WHJRmjmXTayJE99Zsc7QQdEMKW8Gm3j6lUFF0EKepDeJaA3eBTsBowGPMocXApgsKH3mB60cVknoTtl2KawlUR5R0brZ9HXNUi/IR8HESARtt79uh0ZTZN2t+hzybAKn1/mv6x8vQDWeTba/T3fqCVtzJeDlAWQZge6UCbyj/j+IBPmnDvoSIyEwwnhKIJe3+/DBUOaLKPG8cEh2pjAYdHmkRfsJEtcap7iN6VqcTUQ0+AJ8WStOkubHhavRCEhB/10XXKQ7hFu9YSn0M5AXXalTyKruu02cCaYMLEs8AGOUDMCne/qU19PhtxtteRiH4YaVEhzjF/NkzOqLEpJqaQ0srEZAU6b8mbcnS0pvSrEjmk53afXhaEiIZYq35ZH/mjP+AWtDdVhIjRBgQH1/sF6XFKPtoqbmuBb38O7k2vvyTAqhf+kjeaRGRjGCVMngdSheWauYYK6/Rl+oJECwzA9xSkkQqSb8KGvq8j2I+6DxkLNSTtwSAm60fmUeyphC8lBqpRi/J+Hv+38NVIfQdZ3+BXb8JWgrVmCJL9UaouqdJnoq+sWQy1SnlD9spgY7KuuOjJNykDfLD64XzE4uUoFKa/creUdW5egrXhQ8Q7+N+WzLk41s3QzIOJW5XU/pIzRzMNjeTilZOvBYuotQKFn487lAmTV0e8dzXyWEl/kMNnya730i1YW6m0+1J6PVTTICophHWTBKJO0QFNrWVP42iZUUOAMeulKl3oow8px1zxRQ5Wqx4L5iguCCoPJsut9GGJU9967EpllY3fqFOSp/ItnMWt1hpbz+CeChhVhkrDrBRIRs69Au5kZfbN4o9ym7cv+kvzA1qcgg1Z1e1YmxthS/gihgvASRRpaZSuF+Eg6rCr0=';const _IH='826c58bd3635a5738afc239592b367a350a76be02bcab543016d5d4aa54964c5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
