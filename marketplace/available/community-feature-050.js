// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSHtRhuLzA8X0VZKgCsJgloeg01HgAZJ6pHaFisRhyp7gYQQteahwaYFbT3acxR+42G+sUdDrWyx//XEOBWpjMcabKbyOWUX0v7kL9bVCmBSHvJdV6jrG007RZP6QlzK1ujCjhLM2a94rka+QD0rPBenKt22CsFi/SntzWB6TN7Jy0rg0SmbfUPW9ocH88PX801+pk4aTbWD8MTrKwDiWqlaFXWN7OS6zbuYwMHl1de8qUzrX8mgBRJZlq9hg1xBehEWFAbRX8K8C5gns268Y9JYF+iwq+gzZBqUQY46aG2PuwVOvUJNujWWU0BuQaqFl7yfqZ6Mr8GlGIAMIpBDnED2xS9GwBb0IIPNQ+FJX9Ba3BdrcTOSZrM7X0fNaSGwZcNyiU3gbMAqG5CYLGVqefEmI2qkfkssbG6gQ9dEAx0XrY6xxqFyojUQhxMdrzLaeKzYwaSpqVuruE8mDsy7DYDfy6mNkmQQS8WjEsOG4EOVjaJ6nEQWONYEwvSoekWWfUIVNl+nQP5LpbFqz6L+moA8rAOMcFSzUFBN8MxgNjGfPlOONRbz5KvpKNCc1CvrQrPfWgkJvXXE0zGT2GiroHvm23xtWQ8XIgEyluEAGas/wstvQSx3OUXHujfq818WxzBWs6wiOh6MlfQ2Ti9js8xk+1WqlAbnY+EoG2Q24bLExxMCu2vglZ4C84w/UZZKvUoMu2WZvtPQxRYn97Z/KBoL5eizjCUVduriMQMQNvLaWc7';const _IH='ffd1ddcccd71ec9e3a8b7e03f147c13a69954cd96c03afe56a5364c394be402b';let _src;

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
