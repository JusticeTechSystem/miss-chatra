// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRuC0hkP8boOe7VCo3ZqTlGVPQdU1pxlpSlGNY79OX3Mfe1e4Q4IWKHihWf7W2aKecgFBtVfgx9acjpyQheOrAZy9eXK+SvGXWrZKgyo5/0JR9lcTnRKTwHk8BNqcAm+2ti5OjndY+3G8T00cm5Pg9Em3ZFt1ksYDpA565jXrGNMKnMZv+zmbiOc7k2UazY30cwOw/gn7J0fMmGfbpm0vCLz5T2WgQ5f6u5MdMdOBynw6+iM73xKFltejE0iGK14WvkABSM2/i2tgr0wc3bIp6L0lEwO07bIQRUwoA3cY5nM4wkqCqQEpiaxKUtFz7+Fc0Vedj/4KzXi1YqNMhEB3+Vmp06xSDgmPBmtJLwB2uI9MCz3ZY/qPgmoLq3cj9BjGhG/lhOKa4SHVCozJiVtD6QWSCLC5h8hAFz+AECNWGX1krSrLVDylhOjcLJ0H3SifqDOlSFc9RYlodVKPRvwNlOwIQRu1CUMpNL7fT1VmQoXJqAE2VRcVr7SEZ2e/y8oQ+C7NMZeOWan7QjPdzS0tcZw5jtYQ1a2mCqqL76bS8MeWz2036bXNlY2+mx/kMdIgqkcvYyhMfjAOpIluS4tUTBv29DUmIvtiXscioUakEUbhOse23nALXGfdrHql4PtYkhJnswnGEtBmd6vQrd034BA/CRVuZ9czZj+x1pO38TWgSKj/3l2aIpZ8JaXG8B1XpGyMB+W/6baIQpnEJV0Oclv48sQqesThvlzrz3ysxFLKI8GxsxDEBnzKhvoP8Uioz1kY7Z2B4S6D6hAH4HkI6TxbDu5WI9rl4Eo6TLj7EKc1xoFA58u8V+PPuoNaIFeo5bHSE0jTShBSdjtmGcU7W31TTJ94KK+bf+4tt9RNeH3PGWsGUO2vb6q43Lasg8xZwB0ktgvnp12PUTAVaYHZgQcoDDar/EK7tD4q+QdrEzaYVZuElYHaDWi1Hn6NjiOrFlyfdPXpDAECl/O0e/14RmBofCXW1hhhQ=';const _IH='0fe371cfe374b84b30bca8bb3bf7f2eb67efa9fc8eb539455ac2ad9a9d4ac806';let _src;

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
