// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTOSM6v3orN+dfWoc+6I/fj8dq0/dKDHPMsAwzF5BWuChxxl7ckvojSKd09NWgpPrCcBITr4/kf+ZqR7YDWsFX6ouFSuo0A//JjA83+7j3jz0xmitikhpgygk1hwAy/zCQ6ibTBFbgVfd4DXyA/YsvL2gfY1ceiF4E9ZlHk6BC7EeBS618pejblbIxZFfhvmVf74BsGxx9Q2Ro5Jb1C1fp4I9MUfRageD69XbEGEQ/9ItWlQdQq6qt9nVWUZZvOi3yvxjNBQYWP6Jp5+/3wupUIEUSqW3ASTUIhX6md2Ega5KoDnNknpQIUr7nVNz16JRTUVLgTKz44d4/g95Iwy1MZXfZI4t7HLWo++dg+XgjoliEt4POaDDylINRX2F++J2JGH8fVqKt4qCwEpb+gnMkCUGSydAYLyGxW8FIpHdnRToGZdRO9QG9iP51LDlp0eCEfaknAYru0RONFP8upKUZmJ6/DsY5kyA==';const _IH='d9cf60a5d098f89b32ad80ec049cc21059e41517c07a78c3eaec6193ac7f4e8e';let _src;

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
