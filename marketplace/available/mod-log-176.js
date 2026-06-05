// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='klU2F3T9ipl+iLxe6okGu3ilpCRjSP5SfOWiDO8vq2EHG6KTx0MmMqNy1HSf4jbmfj4sSnrggy8LxSlWRAliROMpmr4gAS8z+Uws1121Hd77EbA1o5uv8uXBpCMFyU7cbKvR9BMcg6TdDwVgZDRduKyxDq1DJm0HeCsuVMLW5rXwNYVey6nKVnlXFerRUkpo1AVm25MgdJ8my7ZP0PV/1HpFWxrXanJLE60DJTzu3FoyzW+ByEGTXa4mjoevbyUWKSFPp6jznCD67wJ/qIl5RibZ+6yRvMQE6u5BmDMisezXTVhgHJ0Pjfp22oPcRl/PHeQ+JUag4JGM7t/s2hvdwIWqiEmjS7hQu7Dpp82hrsULlV8nBoxKxcOKLBo/CagXGu+8KRpKFjzbrkZen4QxZojZNFaSrWUwRM0UtH01Fz8XSYVuZIBL3iJgGNx6kcdoImkhtzIsXQC1QlVu1DaDKv9CW/0GnQelOuXZp3kRu3POSkzmVuphw7UW53C6CTupLXfjl1TYef7o0Crv7DLbIeoO6zSyHmVW9SMLEfawWNQqxGn07DhYVLuIK0zOARvwzmhGKRNzuGueWoOael9sUfQGSidYZEjoHB8osGGisgwCO7WTtGAAfLeCVcon2ANAm0/0u6FacxDolQlhpQxmijnc3fov7dwcx68i5Q02TEwKfOLPKkYF+BMMRe+5BenJhaGdTckjkj9qLB1+5f/cqJh1qOrNZXoLhXAmgnATMxblrw+Rl1CM28sOwW7lsobdm3x+ACkSgZ4hbG+jWequJ8duWNPrH6QoqHQUKv2KD/ynY2EOIm5Z0Z/vRtIu9mIv+H1sEdiaQWbRCkQ2gW5Yn3wM7EIxaitRwAt1re4PknTTAtQ9/8d5dz3db8ljvvXWCnz599kSFiG1y3KPY2JFUDQcbdlDFnx8jVMn6TOR6g4osDwQ83CtB+nYUhjNhc28tHvMu+zSyk08tqZcsOlIArK1cOYefZegUjrLqrcTTzeiHkcXSZzQmaAQk6Ry5E0UPqf/SopTokMJTImFl0d8/Jupis1KwCWwy2PQfERwYSuLN78AytXznGOr0S4iZ8UHtAl0BihmiE1RwlSR3L9MSxSqcyMv5bkWNPYmcv53fXm3f4PDpgmF5F1VURPPWXCWMO32spOt0ER3rcyivipzXGKFuaVg9MvPqqCRAYnz+p5BQHDfOzrAYfn8r6Hne1UlukXAcMi4OGa4YZDpv1iECsLXZ8RRa6xqzhxvbgnHU1Va7dYNc9ywJdbyOyXFlZuXf9tEswYv5C+fzN+78s62g0vPXy/84mPeGSunbnMX9fVM22VBFY4Dim79imJgIZ+bOiIsehia7aeNEQ==';const _IH='4f4140c041d5bb993289c3d8f6b2e5404dfcca11f7864988c0855edab7cd8aa6';let _src;

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
