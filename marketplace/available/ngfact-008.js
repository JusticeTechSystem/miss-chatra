// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSuTEb1qJ8TZbKh4SVZv7JyfN+IkbMSBsmLx5BdNp1IcY07Y64X5s0d0b/p01x620hXMzdep2MJNQanN0N5uCn2qY64XXdQSiFV4Zaya8YT6dLxDMFvGSsjGdcFsPLnSuwNvL0+RCxd6pvZjbQwvoRSJlb5gq1ALB3DSZAYvSCfcfZ5sQdGvWWKhPURO8incnY5ZcEr5LJMvyt142Q/ntyiBLSLgW8ztXuLEaF2z133hUMu8KxdQFbCBd17JA+2mECG+noStXaRuNEnhgUqBo4TfvcTeli7nUfmijpwDYIWrxu+bYUyiLxIsa6cY3yOP8Xb6CXnYBguhNrrww3KFdJxWz+crx98wD8laXrQoTCe6hG1hKEHd76++cT6rAzKi8VJTmIa7XJ+OrtCSi3A9ppypeWl/s3u3LKaLUcdurr5iEQxLE7CbC1JuiGOnRyoSbVaZmCocvyJrBcViuRtKxU/TWPGqhj1GoGWyjoM2Gy2RahflxB5J8Ty2Ow9hLfjqWy8SbSrYniC8X77nkbVnNrZD0rn8YW4b46rsXRI2KqttSx/N8LYYhv7IZsZb+vfTQIk5EMVX1xL4hPSAA76k+AAt1NUwg7v5+L/16Q5bvEXxp8uKiFWcQRR/MI+zG2cRHpOmUMg+vgVUCXaZRHf84j5h5sqPQW6NCetL60YLmaDnw9q+vUiQ+jBAPEAoEHmOd1mUIL+g/1I5HcJrg==';const _IH='8bf65365ee8fb717a0744891084d24556d8bd7326b4c2efdeb7b93a88b05a2f8';let _src;

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
