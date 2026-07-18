// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRJLF7f1AIEBoaXjrinfHpQGrTgqAj+wZKvt+nA94Bh7ygsTrS+1HA8I3aHfotheb7C1feS2lfC3rCiWuQuBBlnIDhZxh+2c4igQ5R38oqB+bC4VeFhusg/C9vradA5rrwcTqSNvEYbNUvsvWyBGPla25uZh22eeWyJkp8pgTcO+ja0wbiCUyAnhO4Ti5MDALax4C4am2OMrsYe9ktHFax6snOFrOjY+H7cCcQNFy2EBLUPJlKpMSfnDPM1Whg9bY6L5gpM+kmttZkdwIPMCllHv0Uhf0MMa4pEuzBN+xbJQpUACtV6hzCgg3Ufq07jokOyWeK/5z5CeqA/KKLLZAWoGhoh7WupgJBn8QQEElpIanEj0mT+HwGF27+nTXZCQ5bJv1V64OLpzBiEFxDQFsQetWu6k24DkvCK99wLVd3z9LB2OwrxlasTxGKlS4Tmwx+0WQsCxd7JZOkghkmV3+9hUeCqThGtGg9IofRyRcAW5clKmanXzmg7QfKoSXjAue6beEltsNIRTz2rhcglHiRMFbVAWraR7X8ePiUwz4s5+khiKf3m5oC/LRljLpTO819/5WDeSJgl7tqJDBooeaU2vodPij+7/lQUcEYTV/+4endK0hgSJdbLSmfoxWHGzMR+sFob2oni68xH8WXWttp02zDfvBNYq/l8ZpFro0wuM+SseMA6PcFrcm5NA4kv1z8ixtx/1/87X6yi8NPUEVj3EaJ56/m8r3KPdx4JOfX/36+V5zDbr7CfPDP8bhAVIRBDycLARl5rhpqYxzMsATdjC95VeBrB4XZHrz4PVRLYYHiLZJdja92DVuQB1SUj/UNZ/0w+QcdIku+/BvbzgmimhK+oAKVtY0CKgg6IccTZICB04rZmVzhl6U+gBPNI8xPJhQ+/wpErr0qhtrxTrH5EilLWKTRcyGdiE/jBn9sR+JL+FsyZOqcOjp4Tm4jIro0kouDTX6J2imakcUT/CQ2KKXEmzXfwQFQDLlydZpi++qVVIhq1kwZ/+OfBsXPca2tz0Jo41zXyjrEIthfne3ycRWHF1rrIvckLcnpuC78w9tAh/PvfWmVaysW+65ak4POFFLjyfPBx6XmCBP7A7HahgQYotfPpK26XVTb2B9PBATRzQx29yuxtdBS6jShOvL7qbhDPpfZtzhXNX7IgJW+PuOPHlAHYDlkdFI6CYmVniTmXWBypFluew81/KdT0VTc7jSuAEaOjl4k=';const _IH='b13506b517bf73f7eddf396c4a877e90a2617e8bebd8b22726ff28c915c28bca';let _src;

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
