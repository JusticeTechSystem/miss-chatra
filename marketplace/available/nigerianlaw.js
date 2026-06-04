// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+mp5e5ywIsqyap/E8EItRtqD61usx7nQWmnNcEMP6H5TIxcCkquqBr5zCTeDQVi2nJf3gdNpJmzjlyziyLIoIe6002pWLSw85BgjxFqmh20dK0HgDsMLO82wjDLeVdxQc+nfyPxn7WHv3soaPVa0nbOJCsKB3VObtp5DDJ9QErOl6SQ4e1QndFRrbnqQn7kulT2sqDG3GsZPs9GH8+TvncdD+laeHY66gTEAcF6PCl2gmjtwrCsBNtZx5Yd4PDCjhzzOol4PTByc8uaMZlwe71SDdFKtdYhQo84reaTJwHohFf/OvgPdoccHzZ9yduB8iI6jvbgl8kC9ZqV9WK7W+Xcl9bMIFe/x9gotdGKHV4MWU8YgDnhEPCJ5KyEdhRSCY7B/EBa2b4vXDJu4QOcQ9mOKonxso1Opt8zFO2fEgGMkWbMWA8gIHmGyWpR4G2nAy0p+8LOwK0IU6zR1oZQ7GaEU3Pjzt1Fmm8sGTItpomk4BoRtY6WjrHp7u4YMev2kcu0E2NX5qjYro+LR+CcmUzbSNFClwqFyukbGvzc+6VbJZOvCodxmZchZMKVIoF5loh4phXrkhDmvlhZPj6ITXLcrGv14+NS1r8ThDdUXx0z8I9IUzm7PzQzXvJfMIKu563xvQaAkS+rrk10CtByef2j7TaU7CCwnjofz9tzuG6e9/B4BzsqMBrVAO6LGNmgLr4P71hENQ2V/VlbK+iEKDIqK3kblMO28a/cRrs1ns1CNg86sW8R5ooIZB1fcGp8H1j3gFFArwY1jFeu3Y9qCs5+/bjXoDC77qE6pqsNtNxKboyUDuycu72h/BMYuLlaupa3BROUX1Z1BqQgFy3wkDtKe1PF53oTGhwRIpQCxO3ANwMabO0Ssdt6xeat82E912HcKFh+QX63RVAmhwH4eHR5kXoyjDEy8naVUz9kNHpejPd9tZ3RZxwymBuBW0r/VZ683WFDlD3tLRtHLrJIjr/XS8J0hvlPbiSMxoWwY0ofs/GjHIXEWbHQoy07dLvieMUYIPVOotaQdJdZeVpRdelH8CdmDcIJT8Kfr0qwjPT7jvD65WxSAGVkyUqpry3BnZcIaqsxuKvacnGkRmKFj0gVIOTLbXnYD4uD8HaAYsGjgJn+qSuttE/qK2cJdHvl4B0Ev/myBb0LuBgCusjNZ/lDdP/Jxd7JarjQD4/UcdKnlTRv0rpCjbKSnGIr6EteU2REWQ0ORaLLeSw==';const _IH='8ea9f8f13d3d0adf7e5ff998e9a23bd1e4aa841dc2eea0020fb5071213b96bc7';let _src;

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
