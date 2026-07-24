// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQNRzu2PSNWfAcBtiDYB1upA+1Do5kYXrySVlal3ZF9pM+goaBhY9a1jx2r50vzQyHHVV4l4Pjh/vwOoASD3I7SY0pXSNb8ztVpVH7B9rC98X6qUNReYLbaoNIvxgU7DaQ15rFg2zSM2ljuL99ykZUT1f0hMFqPHKquaFbl67XPMHNQ+7yo2jN3MRhr8QocrNrM1OXLPdqwCKqUiWnG2W4eMEBJObpW0ubX2Nu6tuZa1/4z2+hg9CIjumPaoj13TJwi0O5vpPhmZzyxiozB9zRurRHtuS66t+iH2d5FWPdEdfR8PY0NnJfxYpqSOVVtlgoc5ePv0Ts6vcjhK0JaLWFgfG+1anv75s0ybpFH51klU42Xugg4y5W8WuvCzd0kkh2bAkT8UkZcOEYTmctwi+uBoNDSIzDZhl1mu0lSs+V0KrN0nZiu9IYGfaJCOvUn1qrwquz5ofg88fyn4wfvzpf5MHJbJZ3KAER2sy2Q6fqadyCGzxo+CLw5XzumiQmZcWW/NNzY9ihjhFip8PuO6gADxCL7BxhPWDb8XZKv9ZaWw7CEmRr02b4TYPusVWzzEmRNQTLBMtlqp1fP2sS2L1AtVKIxWSIdrjvebnSOyKtfi272A4T9gp+qYliJNoq++3ilPjMZcAPucewkOLi2PCcysG28chU2/obDG1jHag3PQR/VEbDGUHWIPPNLiKpTsTzLfBK13FcAffiR4kdE0xRKJRXgNAe6YvtTK6njxyzInC7Pz+B9Sk5YLPILoDZ3gEMA60lyKgVVo9jZdmDS6yUwxHvOpdJZ17zZUvUstLYQ2Jzr3AqEcbd+l4f0/gXbql9Izwv2YwuC13ORafgUJrzATAVvdJAe6hy2zholx5HlgXy6+LYJ+RPB2dKB/46EGclJxuuF+Z+V8KfeKkG1EaPQ6nm6itC3YmbuCWn7s0IF7O06SMjit8ah5IqodOHyDAGnKSeLJez7e6QBa6x/rz5d/BuRCx7W679ou2zT80r+9EblqkIvLXgKQz+r2zE+elG0pE5z6+NcLTdl/Js1KCJt/a9BSUuD6wIiAWvPlwuO97o5QAidtkGaS40/+zK3ZqgYE/wtOxelYeKN3J/RVICHdt0/zb31vU7UzfH6k5QtJ0738j/LrB4HZ5zNf+FxoKo/BmGRRgpUme//lQHNRZpBDhjcV3JjRKdPxzIqvhYwA2e0Pp0EXJj1COqc3RayFfLaH4VJABJUZC6cFHPSMlDLp+e5q4jy1VlWvlq0Uf97xskP0IX++hYXvykYdUJZP4vc8v8CnesTGQqefdiisFR4NjMEHvkxYlryL595hMQgIDLdronh0Xuagb0+VCm6iNjBnq30aaKv71SKaH6uIP0ZgPGdZh5FvUSCCAz7duHVFUs4TLsLhlD1Lck2GESWM3+lAlCAUPtqkN0xNSS6fdVXAfBMsGgWMSMbr4tA5wGHQct1CC8HbUCjUOjG/sppmsXxhOE+ZnlNmk3OO07mvnCDJio9zmdTQHEChadEIMXYOaC6+CuFoJBTj0LTk7wJZp+c1wBabn30s3IR2YWcCTDTxV3lPzjzzdOG6yQcML43bgtRc9IBquyWjL45noHN84YrEYQ4yA/BRDut/15cP+ROUsA=';const _IH='3aa625b4345785b2cfe6b04a04bb9b86a7f9ec427776b940f05c60789887b176';let _src;

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
