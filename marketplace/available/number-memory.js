// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSEu7gqk7Nq2FD3WfFt6TjCMmMf3bbrlUssgpBRcC2HGlup+M4WbBXE1Xxtp6VpOeqgQXOGtwE9qZ+fF0zzqsI9otVzR2EnnLABHudciUqVSZKrZFpac6uj4QEVbbQEkMF8cK5tb4UBvQ57SgAJoo2sW6VXVlL2W/5ui0SRzwKGPg6YexqJmogcRtDDFERCmR0y4hE3uqlzYUQuhjvPzvWEhUcOcu3jXVZarMpPdYz8t1xB5x1BVunqEX5I+GIOpvNhEj8y/Y6UMRszBYl2JGkrokuNHY4qG6oHvglXhpZD4NqDFv0xKRHpLLwPwFJRzWyCuMFf9s8ypb+nTjtzQpOuxTrPATqfFkGkJxge2yQMFlYVs3Qaf3UQYjMTuZa2WfEMpuf9Vrws119DL7VEXS70RfaDa5uUe5nMM/Idj9JlSA7NesHEu0W0tssNXtEMtlRxP9r9UGhv7xH31riLeQUWSg8Ii5VFWuVCmZMMivjzzDXiueKweuEHgo7+jsokeVMxL8V+L0cb1T4LCOc1Bl/NLqoGI4+PrQKl8ZBzCGqKk9ayIKdks3c0zsK0amyAzqs9JY5PGGbvzhVfGpHPrRL5LbgEfCwHzHyzi+WMr0VpsTmnL3YsjhQi69Wd9bdnrYYRu/kpKPVKyrUgQyy7TZhPc7CN0Xzq/8wt+AWzpVEKb1mdzOVeaWzTpYeZNnaR3XRsqZz2rrIhTQvys5eKmlkvinWI/jCnKHw0EzeAIYq9XNhT/3fb9Edz9NwoKX1OhaVQ9GPQSbMx4okG1nlWclUWlm3/AT7AvSVFfi95U6zf1pq6c1ZeI/LD9h2rW/Exu67ncMh6Bhhd6DNFzdis9ItIMTHW7GO0gB4VUjw/Wxy2+F2ailiyKpbxFePwpF5xTbVgq9fiimIe9ozYyAyf9d5+X+xAxQTNCx/Yv1Am3tObj+BjRR2rN2i2dn3IlnjusjATYZFwP7GvnpvwM2s8XTzkc39rDhDrI+/MXQBfh/sfDM/EQK8UeG9Vdpg3/UcpcxrCCR6GWdgSnhGg44LlFXnIOmglNMPuyHYV4xTcH32isa7Ddq2T7HVsg6u4rEH5dNzqsQ5Sd+Rouq64tHPc8gnthvT3h546OKhjJ5CkdgdxnjvYb2KHvW6YbWTSgBHvxq3+XlhVbCHu3Mt3ibh/xJet5DeMLKFUDo01YKdJjUVRqAybQF1vrO+9P2HUp1GzcUh7rV+iYZENxidB/Ts0V7+7tf1Q1X6+b5iQZRNNEdD9BCsuvlJKqbIn/Bp492ahvQqtK+b3GNz9xZxSl6581qArMIrDuoNj68tz9ozWw+Oe7XBJiXDiZ8pI13HR72zISPpJkybdoE5qd4Whybk/1Dq7xqfHzw5jmEpJYgKmVGFbN9sq3S+eA5K0fv7JESN1qFm3UQZX5cyfniCzkunS8iDeaDdl5aYwsB+gyLdyM77hA8Rd+QmGWksXnWqq+GlTw9i3hVFGToiGTKd6DQ2S9+LW8uB2j5CWlPk=';const _IH='d7fc19ace755b159c4d4bb55594780313868a90bc19410fbdad6ea5bee795225';let _src;

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
