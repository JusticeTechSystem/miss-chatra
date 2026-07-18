// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS4AZlV8WqqzFRDiF9isSl1bH9CMvF0DYXahwvacF8wzSua07fWLFKib8S7rXdvOJYWZM6Itd2WuyXdl6vxplbt/dUdIP9WpsJCCrhbWrwx904tln42Lf0m4/e2eXdMvM/0o8RhOyyvvwLP2dTjR+mjT1ChyWAJJV5d0uOZiAbZL5e3kX82XNxUnhI9/tuW/nufzdBl2YhY9CSUrSvPU+cHBmVU7M3IQmMWI6KL+yOOi6+pl0i++v1E9Ftkk/3bpDvCd4GQ2V02V1xJ5vPQi8JRrIJWZ6ITBtB5kgUyh8jTHbGdufpeDYT2lsdkBYS1EwQpe623wH2/ip99MYUA5KIw2a6Ama6ODg+7fenk27sBsUEiCA5p77u+yYSLE2EnOsmqGzqWg//uChT3FrhgVOsJ5NJNkjaj+nOfxQbTgCFZBzEb+dmb2GETWBxG7UDaSnYGiQXNtg7/9vpUPjvU4CAKLfNaf6RPCnh/y/hJyDGjnNuYp51iBo7bgEfib4KyJBWjws1J7RJ9dvoDKKEcs7AfCFn4naYdHJjGFbBbHeE1Y65D0iITqQLAxCvyLW7kYSPAOkucodiKy9BpULV62sfxZYgZEDPqG5+VYtjbT8b3tgmk4ZuRNrUNDa10MZmyICvGu+VUn7hq/7Sn0dunThIekhl0zmYWAX9k568WZNN0DkzJweBMpTKOYi1B9vEmrz1U6/18riCW4vt7YehzZAQpebtvJiaruVyFvltSxyjXDM7eV2EIWqmrMWmIK0RqsXk+If8q6/HQwmYSN/rZqVH5h6fnRaF6D3JWv9yxqemcEvS9B+1HzDSdFVwCiWVZKv+kCadlYIya2jPyzM/epoUXEAopbgLZWpUuqhqtMvX+XifinQp6OWPvHm43s9uiNfjP8iPA1hfJ/pBvz7czePr/HcVGeCenzZSh2KLY8/zA7Z/uozfka+JgQIBRR4LBXFTaa4+kZpamdIVpDoZALO/WP6RU8HehwDFBgm9EExLbEaLiOEWZAe8EvMz8RuczJghvnmWsZ+FhdWDgPjYW0/y5LjinxijYNA4LizPVgR9v68bOs7xyWmrGFpaPUOUWkZt+CsD4151zGWd6BkBfOFEuqvJ70DxAhIrxTMF4UgETLjkTpChc6z5DRP0ETaO2ScDcP5FoAe+HNoUBPbRfcpkWTQ0V7ezoolmWn8BibLHkamsJcDWT+6ngeJkhBkr06h9ON1XlWBjwSY2tVaEnbFcObiIsKUQWPAVIZ5YrS9K1urs2svapS0lrM08uSCwP0r+TPqhKAtoUUigS0D+HzCPxKQsCUYb4Ai+mYBDpm7TfI/8FQWRkjmXQsL+y6lMf1BxVG64eajurFCYO/AzqhXa5zNc9shVgX8P37yKPolK5cfQI4VpHj/OL';const _IH='e541c713b6f713ba2b2fd20ce3c354fa9c989f700f88e39b39410bb0f39703f9';let _src;

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
