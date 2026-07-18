// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSqzIGLDuiC/ab6U4P8NAfHBRamjpWwfcLbN8IGqs6iSqU4xCAGl8zdfgUn/UiqvSulTMWIE9Hl9+Sy9VmYXlCBOtArTvXPAC0CyZoycXwfmOQs2wT9CWXuL/pjuDUE7oIfkvfTAQq0vQxPHhtigqVVwS8BQdXBevSEx9hOMu8nheMXu3/9ooUfUB/ehYDDjUoxnRFzIphlRiIHyKVArgFdWmYZAoycRnbKcrjR7g49GtrUj4+IPPcqvUCQ15l1nd8r7MnBgEKVswEhtmb07u1uua9y50rQXIwjFIGn9Q812/0YJrgN+rFd+KBvfwAicPfvN8prbToUjde/BjwFUpEP7q0m08aWZCokLuTZzzoYifDA7UMnI3tbO4t2hj0/U1kC1sEFAjEoS0AR7PFKO7euvH7syK8O+vjb9yi+nSBslEZt9TrImjBmls5J3napqsu1i6W5o8x7hGcfEr2syQZ32wRZHB9QCTjb/ZIIpffygWU5qocXdXvh1lTivpTqV+SN1Dt/4tM+uzmBXT4lTgUfqavz8EH9ADITVTTpsMLdiBmbIa9A573G1reU2vXk6kRtJ5dooc6SzHXwH0yjctx67DGKZz4S1y10+J/5xi/zq5z4eI1p+mm6jef/4tGYibuRGP52hgxxO4zgszVJaoXedGrFMKfZklT6vJLfxbVsP6iaQ/6AXHLc6lTexIUcKnJzMgLT83KWkzNQNyCplL91nSBz4lIAjxvdw4oU4VhBlSRsfjb32EbgecihBloGQfs56uSdptfYLNqnR9hP9W0PajC+WF4xflFBhI2O/gDgCGIWr08UQh9nvb+kKpfb7WY3t0VtlcI82EL2kbeoZKGAQ3O8SAGrTsawEkYEnCRTnuI2FBotoBRqG7IvT2PwyoU0O4nR7tZKYlUPPwo5SMDq0FHpu5pu9JYBqnZuES1MOepWJ8ECKDJYWzaahO7l0oOGAqFRdW0yrZHvP8mMXdZsZwxjR8M01QNDPAnT3CBMFfJKQNk6ss4IHlzgqxiIi+i6H9RM/vZ3F7dMypHd4CfmGPk=';const _IH='22820ae5402d014af6cc1b309d1a4139cf81dae6da2e06bd263c044a520df925';let _src;

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
