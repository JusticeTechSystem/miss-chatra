// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EN69KGgwndMf8ljjj/gCCDohAPYddXZs3HkDnXpQAK1nx5LJl1DXnOuBNozVejjm1+/EyXxiq59vpdwVE19edNYXTqkCm+XXxx7bVkjDmFte8VqmmBt/21eCY8F4KrNfWLPk7XNBmkA84NRnLSh6nK4m+yf9A2O8y50QcmvYpYiNRLpIw/TyGyilJFzruE5tQid+0QtGwvNf+yWRSL6zr7AgEKd08x62tB+NITQ26vQ4gflE0t3cpwE/g3fcpKRfWR6u87elOYEoFw5kmmEealMZOk6oflOSGaq/pMommEEuJPizxfoBHoGDLvOUB8IPETqTW3s4gLvlvZxGLBeRarcVV++0keml7wmaln7ASH38v9Quknf+rn6Tvxj4kNZqAeIzUMeMV4OPPs7fsFIH3OnvnWpnZ885byAVNS4QufalS44I4tOc3fqm+6nB5iwYVtXrba/bCuQ5rcr2+qeFAzYmXkRj20rsUBHQkK9R3FWa1AvSpH6Lqiu0qhBYil7KruY7NGI8/FuErabXFMikK6Hhj8IAXhPncD4S1kAWmiXjjiLGXOqKUnzRm44Or63RwBjGDdw9yolalnyH6KwBwQqH2D6Efs+wRkID7tG7PWFQqOi7JVYay4Z9ZOpmygpuFSJURzYERgizkkZdiRxtjjZdfiHmA1pk6PeCNqk6rTofrr29LZtOG6GlF0yXRZNnZPklbm/KW+KQ0lpcPNbcJKxYxsV8nihtCXu2TRP6a29mhS672DxfT4IxixXJHgK2HSBOTDNPZyjlDIiJUB7RZYepN+1Qp0jNPdXi+E+7DfAIEKB9oP49gaEVmfi5YoKgNPkPxCUna3zFPUjAoh6l0NKiD/O4ynzFbY9kXyDfgYimpoZAvNFutYcKjzk5ML7qSjBrRrwVuBND0PDa1OJQZJtEqQxub1gfzIHkGUl7sh/cf/nPQqsU4FlvoFqxcbUxz1FJGT4flow8I+/Prsg1b6gd7Xe/PV1mGZz6O5uCFueW2aZmKyHBTGAReGI666H1tQ==';const _IH='fee8f9af2b75e1c458a1d9ec0ce7f70425c156c46a851283a3f9b3b40ba404e6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
