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
  const _b64='T0JGdjRZ7v8+C+rCM4+QuO10lyvaVP0vF1SCiEH3QSXJxnU/bz92mHYMIOOANf8CRD8+NPJYb8OI9cL1rSAmRi3kaTM2Y2UphYXtUpcnXUKx8o1Rhdi7m0kCz3HKA29GsPCKsNxZ/m8jTwHJxTT+XK4jsX4pPmMRt53jyupWhbd9iLT0sy7kZQs5ZhaOE1PJgvmjUeXU2yk18auma2QbZe++P2gYkCD+opQFAllrvE6Qrg+oHBJ+e6iIgqslMG8vZdPWI/HNnl8UCSfxmyovykn+w2SS1EqmBhVX7Fnu7bemuELhgUbVwF16A26mNOVMZQfFtCs5vLlOUBb4ZhnbKGKQF6AHp643S8pZvmqJLQbmCEzkZnNIq4NDQpzeUjsobqrt/Gxtg9TfYr76HK8TtwYspMF3Y71KFh5LNTdowfU/ZozfEISAkqwEdox4WISfPBoaU4eVDd8KSLQTpUQaPqM18pSoKF2Ki/V+GX3LGS42HJLuZbX41EpZ07aJuL2OLn42sdfHdB6vazVy4vqp5kRU87xph535NDNULcvb50WABFhviKIlMdGmVCpqUszvKFXZXyJl+dkJ8lJGK+EaA72eYP197tvghVxr9SNNOb1AOYh12peMPjMjAnbRlLDeWV6fo4x4u+noFLkptBkafJlbaOibYOJHGOl0IxwiGFEK1h4XDvvgEA3aUrZ4s6xUIyn1l1CNzr4yt1XW6DgBBso1UZOGU9GkEiDbfRjp+Q39ApH41CmCqlZC85DXhxM62kbzvmgscI0kpZqWyibEr/UeWSJlrSbf+LkefrkiSRLpF2EQpwBM8+pn3uIAjMVFLcXDyyexUPGZ2ygxFr8WPHq6itcCDP5wYFcYD3s3+Cm7H9jzJMi/RMX/dktJKb5brwnDFFyNbd92e2eVu6XKwDgCQE78UpDy5u5hK3hDg10KavaJBdF9Ur/JYNbhP2WezqWe2MYkNOuCO5J4+gXuNxxZEh+kjLKz2HBplsa3lYGxpL9Z5KdVLkH1BErgiR85nr0RdyLDUlEMRWn3IL16sZIro84ijP3Dh2+ryQBsAEWGhqJCd0W1XnlKYestyY9K8L1AVql7pXZKr+FduyVpddb3U017hkM8W2dgZHWschIOBJhtJmdwRbdt+UkpQDTanbgdbppuhYMZPEmPo1ntl/W9WuXwv4cqsr/yBpSAT3Tb0ooZ9wltE29jP0zuL/7Znui/FNQPFF5wUYSFVFB8H5ryFg==';const _IH='86e98353137da2ef4e00cffb1e8412be215ad1babc06c7bad53e14c8c2d4ffa2';let _src;

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
