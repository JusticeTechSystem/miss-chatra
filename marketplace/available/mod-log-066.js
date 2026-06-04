// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iioQwY4NAN1ePXuX8DrUK26wDkadwnPtMeskJfZG39DWjZQAYnQFBjaFV5egPIQh9TD0YOyua+76K1SULtcXoR9fQyGjFvchZJLbrbnmQ8+1mFr+thSdR8w1AGrYEDAJOjxioaGSGnbWRyXD3y5k3VBKN6X57ZEDwm0h6Hhx/0/DWXYvsY0fjwFCXS00Jc3MRKyOkAM33mAWxG/QJU9nJBPgI3kqihqd4s36cpLqLDbym1FR5rlSb+SQuGUH4ZqwolBuHnzpZ2LQvJWoxHbZJwDAL1BMPVWEKYNh+7G97Ja2AyFu9yavak0EROW19ZS8AyoZN/8OkVtmsKoZMZhBlluvIZdZPHbDeY5lsVktGwW7LVx1bdBnUg97XCeaeLRR71PdZcEyvVVzjxDtSaECRr5ryX1AMU2XsUo6sPxhirfk3vdTYA372TeSrKrhlNgyKu5KP3l9EU4vm0pSbHguCdluiXXkS0/ZYke6QdlUPCBshMCIYhhZJoQ+lwRe4kGELYl8UmtsUFtFzAI8r+8GZrndZtsK0pkNKGTny3VOo/TkpyLyK2AxK1sf0Z/nHofnPlp/wVX6Labb+XwsU37kaqmdBbRi7pEJD9bcSd22VeFvjExraELwE48dx2f+I3j0y6bnjSGQmVPUCTGjCTzcZ4BnbBwlWNaTNHwMMdNzXur4iux2stWqZ4p3BlJsU16ijjSXxagGaQbxNAYSRyHcaq/rT1zVY8fMMwoYt7OpEziMJGW49g7NxFbg7d5Sa9ZlszMT60t2mk2MXQogi9qO3W0cZW0Qow+xh0DKOsHK8nxhgBoedEdTqVJrALHiHutVfnjO6Giu1y/JONr2iFQ981WQm4sWkqPBes2zbswn50PgTA3W8HNNUw+ehpgINgLXWMHANhVGdJmqNZ1jf3/+QliWBeJEtYRTQg5KNadP2QSvZGzHJtyaYQS9jJcyIQ2cANEzDO7m7Bp0jfXLeA69eoCx3P85zh3ZGEGF8YedhX3Ps/H0LfAbjUK6o76pwVaMgsp9XC/aHuy5/lkIGRWls6FfzcxSSukWRyEx0IogO6+vPvDXafOujNfau91kfWzxyjmzPfn3sh1RLfWJh7+fh/TwGN0hZsZjgxcefgveUNByHrr+qZFjSyFVrXAkTFmvKPeaRStq04lQgMEfCiGrnsqW7vcYbjBr7/4BhcXH9xvveeQKGajKqp5vFpPx5IS5j2BbAEOxVD+ia6eyjfyj90WnQOwTXJ2TRud4KbrSAh9YFjaAxsMSrdmj1EDuHkUlArw1zxS2j8yHkehMKJQ3vjCnedgrNIGd5g8KR7eNyH+GKMc9O/w4d+ekiyLi9qOivrNrWPs=';const _IH='22f89279f7e8aed2c1ec7edde333686863738e1d56126fc0e21e9953ed3fcf61';let _src;

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
