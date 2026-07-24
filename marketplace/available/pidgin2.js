// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRmqClDhB0ar0XmfNK2Uz1FNVbUxiHOD1PNj6ESpErX20TS3hb29p+Ej8Fb5jVsKNA0oVUVOZ2wPx15K3JfyqbvbrlANDhfO+nQHxzbaNkdKeofKO61ETGqSjRKM75j3Rxs2BQ26epFRNHOYgSZEO5Xu+42NcA5nZLLqa4nspmEzkpmXFEa2nH1vKD2iOa4Om7yrhqXMk4Yt5nJrjgCcjrQpNAWEtIBu49YyAI68plZBGXMVG6NjkJhGudllpq/apXPGiIGQEeDB0BTWVjbnDbAPTcYDpMhgNP9bsEExlZ6II1pkbVEBp+nyIqM+v1LxIQ+xfCNCw6nW/FE4S9ipjZb6Nq3jRZ7uWQX8OAty5XRUPTm600UwveW8mE26VhPexB9/UO1kUOS+ULfqMA28oEKOlNL8xMTJo+Ojc/G6W8nyULQi2RPZgIu2IXk9rYf5Xz5+m6zs9lnQC/YcEo+VREBFn27cAw9AaC7SyqNPnanrRVlX3Tu6E2+o1GiQ8wK4T6Fip/EXaubgy3rKrMBnbyRArzPAhITk1be/u8AZpyntQHIZwx9SCex3oY+911fRDq4M61c+V42isum6wassE71JmmFgMOD1Mgh/oCx1m3a7ykUFBselYb9fDcb3Fz6xudTIunQrnphQIbWlFhaq/6Gk9oZDDXMppW07tmNVMuJChZGFzG5DphaImFf6hgcsfE0iET5u8E7XUAhrOqtVFpyGBg4Dmt89QZHE/qx9wzESTydOjHN9SXLIjelrK1TynexALoUrp09FfvXX2pgk99UqlczKk/M5jjyYLGdUqrDOvfVjg8Wf9iRo00Q0/53b/HtXt4ecHbBOtUfLUihHbTwDxGDzGxkJADggPrgF4h38Wx+kjgR4s0e+0M/7naSz1tq/ymbqieta2Ahku4yR6+MkPI0K9DUh79EP6uVJSDMBRgXcik0jLlkB8h+yFQmKUvivGqSj+bZXzes3ID6A61spi9PWRZPqIp9QBGXhlDU7vosTjyvzoiA1bDOyUGkmTp5of9KznaMyqD/CtleknTJzrORc92sEB9S3uJQkOkZi+TSUWbVtb1qY9YV6Ogt177FBYT6GFFumCO97Nv02d6GONwS0QylaoT4qoyU/zdvEzEDHviwv5X6xc6mNPTVkfszHyzg7wwDMymbwnsTWwqHHmBR2p92IlmPL6sJCSbVuBfaK0zam0B7MyBGWn9g';const _IH='b9e5c7ab48657aa272e0ac78f2a51b9e33a3824cd0d6bd5ae3f54fdb790fb76f';let _src;

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
