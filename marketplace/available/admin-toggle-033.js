// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTDk+p/GW25z2izDPXDpT5ot54xE9UFsYzRq5aGskHU/7ezuoY2iuYv+ROqopma/STfvVECS2vChV1PEolpa+zStLAZpzAe/W60iM6OwE07cBvWG92rN+8TU7+Kc1kbvi1gGAvjZpP9bqA3gJvB8IaC4R7KfV/sFyn/echR1NlnQwpf/eLBYc/tZNdevZ2hyvOctiNya1xql/149VI6ipfvdktKDHWCFD0U3WziH46R/QXh8k2KQqAz2QUA/RBtMRcBonH9t6CLHJpM4x4fJooprJaOgRX68QsfklDbhDhUUBIK3igwBxJfG+ZeIMdegqnCh0SZFzPXTrQ63ZLEE2hRifgvmj/3OlZBZkKwJry7puL9N3wwmv3hE+U1aevb6sqYIikS3Zl8FyAVLU41zCzcsbzuJJFZnl/8vqxlvVxNmDiMEZQOJo1FUa6aCsABy8+25VpAQNr8+ar9QtZ0pzcm+lbyBg9om0VF6vcG7mhGa4b34dtmgYwpHZ1srRatY/DqjOGmTDOe98lnPKxL04ud/9rjO+WS8EKjCdzlv1eVI7jKuk8N2rXp/ESlS8MlDVlKU4rGyItPY0mAWdlmAdd9xscpKUjrkWBndkeBX3wDiYFzPBRDVDmVAUlqRTnOISFC9zLNBjlpftnzt3OKV4nimglZZMFmAJLVAdM/KFDpozJRAGFD7Z5m7lrcqVWaVCD1f7IN5uD6rVNbDXY3yhkYLgaLUaONDecAPZocMYEGpJIbmRiV6DLNuwtNq6oj71TiKtCxGCNPSd24Q/ljBXBJEInlbEAkHHcQVlBL+3Yr5EPO1XN7Ai7uQf6U5LRqBt973nWfK635hFmS6BoAEq3MZHhEpfEI+uDQf7cCxDE4ooDVbP1qy4/HxGmhBYMbucWur2eKPNzy/GClUx8YAGQ7iIRrtYjBXDsKavoaa+CmtWl1m4CUSBBshuJ/71vV8Ut/0T04h+vTx4n0S6C0r7EUgpCEVMOJ2r9QM7ugCabiu60cXMOQRQlC4OqWjKc=';const _IH='79970fd2c6b066f88653b6902abfadc493b21024a77b9af7f1693dd138e356b2';let _src;

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
