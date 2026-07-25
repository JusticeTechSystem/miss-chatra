// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRbzNt5n2oZ64V8ll8insfmDnsOZc+eD3Y5irc3L/nK3xtBw9N+1I6xvhAbVdUAy1lbZS1vhLh+lOfLwliGyf71pMzAw7DThV01NO1bGALuBWmD+FEkQry01SqIvQw47TzckxQY6ELI5uCy7c6KHkw3/zQmzLlH4vOlH7suoVAfHDRT1Wz1w83h1QhoYkG1R4fXJVvpPUjRQNfU0mmzy6K/WtIGjCFnCKSeERxnxhoBFSZP/pBowzAAIq7RYMzewDmWcTDZeJWmmdYzW1aYfFHgPCdub+sA0BmkhRJTr8sw3vFI2XtE088jdkbj0fc8l5P6qbENT7SxYCTnVFQSMbD8BwSGndQO1Yr2SiyXnvrP8oCWxLIlx40sxDWnQnt5NEdud308p13UEusCULnMlqypou6hivD+rqs+ZS8lfENn9Pb55dhO35vLJCx2lYuLGhjFZvKFJADDR5nihAFRFeYCwEatz18LYGSfx7q6omk0lIxKDvhw84bMruE7OFDWOv5pa6Wpuj70wxgOAbdKegOV07uGLp05CIjQpRNlJ9BPuV76JPDwDvymkFjxjwA1Q0mRCSTD+Px4f29ZLODSNXY0leJKp/d5ay8uiTjtlURRsfDINn9Q0gbW9HeZIj/3rgO76KM24cDBsAzIqX7PzjBRZWqMvjUm+fM1uH4LJIW3OMw3HoBrtGsRPcxE0bbIYijrGdTgbfO2s2zs5MkHDbxsGvI784vv4I4fOisxK6yWq3Ht';const _IH='bc2cbcde44d651d26f9785f3936c69f8bea9aa837ae2cc4ae4b3e9a29f16f573';let _src;

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
