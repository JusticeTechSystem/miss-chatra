// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTk6IceyKhi1kKWA2oj+4vAGRWwDOD8glScUgufFaw62c1TrxhR3su5lWsFAhJzttUEfyAC0QNPMhzY6XQyGFOV8+TbyigP/2kMm242kEJEkuTtao1HtRj5//cBjDYsDtLVeKg72lHo5Sd6k5RXOKARLJecw4Od6udgFXQSqahuWw3hC2PFyK18SqgFaWuDM7DLo7en1USwGJDLdmQXC3/A54iiKz+F5/3ioqb9QrApIDJ4WfvXEuawUBIlqK7PMsV2FUtMU0u1WmeeHw/2nX5OIJ5BlKkk5g2mhmuSg/ADjuU1LBmf9Kmx68EPN9P02fmHtKXvaGsqVmVFCD3kgpmxJJv8sTvp0fMkNXWInCMAFR6MjBGy7ImJr3wqcJ9Zw9yF9IOnhfO9rYdqBbcMVAwOUk3lZ0BNU31oJ3BknX7ZQkiSzyDZ4/12ACE0zBpWqutbruVuJkZ+EFPmlv1vvz9w57lnbbNbVnL9BvwfnOuVgi9SHUgJObzGnoGuVBP/hJlIvDQMhWQ8X8S3ygZPCzianyDRAY7VuebWYjTacg+gUsso/Ecw0kTzLcCIZgv9MJm4bF6z3+kbJPFFOcF0f4V1fTxLFFvKk6eLXd05VW8nxDB0vn0N5j0yR6HrhyIrQog4YY9ItEE2OUw62HdrMhVWZqKn8iUzk0Q4nuyN4ocGgJWy4/AaxFnSf/0a2/chj6gaB8XspEPhkSOh0KSFKZVKhcvAmsxD3ud72B8k2hoEi/ZhGU4ytDVXKtoZS0arNbjAuvnTqO9vu7dnyfifHFsoRzbWmdT6R8Fu/xsjrL9mbIwrspxzMoMga986n4/ahT+OhfsAWTyCD8w9AofsKjYCwxDZow4578ZBzDQ+cewlQJxZPq8cP9HlRjMEqQXvdXzbfLK17SSn/mxtZ5F7I2OqPHMeKUir85b36E+fFvT5wK3UGTAEWee7grfLvlBUqKIoHxG66mPNxy86LI5PuiFz6tgoxyezdT5S5fmeBHLcAOey1ZKCnbpqMsEcUjeMQyNumS3SgJ+H1dzWLwxvZI0JdW3az5rpr62PDRsYR5wO26O9YKNPA1Ecl3z7owg7EBnKlIZ1CtwQ9qIovVdL6DeE9ING5QYYcqajL0PVZJ8yNvub9fMxz2QfGjOoLtz6KI5GGDOphgtU7/MA1lWgj0gi+aIrd7eo8XuPug1vUQUknHh8KJzCZ05IbKzfFxXPPUogypzaT6G1NJMUsRgLbMxmK6Qqyq2HZhGoGltyfj9/Q6JZdKM4yxLInZ5uLEoRFZVWcBgEzg660jfhoUSlB+h0dP6xPxa9t6dyv5SP2joqlnGPYEjHeu7i+9n/wEwIlqINUXXuh+c5Tli2O/yi19YV6wCGv5feSWxO/OGQ8vD8vnH2ndSw';const _IH='71b33b70d4877b97585178b86818bc3fb0fbee5cbee0bbb325cac4107d2cf4c4';let _src;

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
