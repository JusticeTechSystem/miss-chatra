// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSTrbZaNwJPC4X73hEF8gyfieLwrH+ZU6B1ty8nMYKBYNQJDZptACHd/hcLZ2iDiybgzLnU52Hy6aCs7g/AzHqfBy5rVXCIaaZIY7u+UjBZLqA77G9YhXzusYvcj+/Y9RHA329eQPtDyjD7VqJgDDKxDVW3fIxVjB13xldkisQ2ABGK+HP2iY8UMU7ICeD9Xm+aN2Etf5kx8s8bO6n/0Z+DHhjAu1W/TdvFuVMT/MjqVNVL/ERF8M4Q6C0sCCC0OcmI/nWOZq2SLMrI2ZuPKU5qPl27Q9FusoBOWXiRxMwUAEiKtOOaBtGGPutt7iDwB3H5TFoDXI7a1QibrimbT8E5RMkAY0Z9TkBDblTPVjueduc1e9ZhlxPKf5lRgx19Vsp+kPLLj4JfPAJ4cUt7BkwZ/jrrmVmaWTcFBvfjGuahNA0qj1c+q0R1KdZz+GXrjFBypWVf7q7nDJZ1QIeBoPZ7QFMjEbcNNt4BvYomk0eYbDhAYzpLCJuPXGBme4z5pcC2s8NkUruJsbI7EDW3IZQH87woyBnj2yjFdVZO8iKeMpWsgF9203v7QPHBlwxGy+eOan9Yzg9Wj2JFox9qlJg2LBezK6WtK4cK7Sagatvn9UQRpfhYkoQYzTj/LmS9nMpD4fhxHJm125hlAUTeyRcnLOHDNIUUeKt9o7f7e0K0siYtjsfwoDtyN3LPTmyMplQbHKtkc1MTz3Tegpzozsc4nfxHgkVTrUcB/g2eS8+hLIqlQ2JI1qfAsZbC8A8NkbtnMMlcJLt6RpwonPqz8f6zHF30rp5W21HbWHp+mXudarW8Sf7aqi5zX2ujpU1f80KrNycgdkBrila7gT9RebRz3eOvLuPOqM8QGFYWMsfnYFBHijcgqQ1eQ62+LlrtPw8CPo7O6RsinbQRLLRec+3xfOLuMmeYIFomZ8otZVCzPhIFfw71diuY4tmG43dkj1lVvAcmDRDQn4KlYAZk3XVqiFK+LmWXAV+YAPjs9m6Lrtq8lCVRnviRFi8A9QCjsXEStWC+JizWRIAbef++9zk67eE4QjgCI7gPNKwp7v8N5nC9oW8cKd1nhxaYK7EpoZ1vmmZ0TzuJGDG8wm9UAoyznOPFBXqIgnw3mLpuZPlkOXaSg2LYLjamiELv204Np6o5bxwqxpQ09mj/ZKPmB5oMgzBYyPb/qylJdXgM/wQ4ehocxGh2ECp/0Kllf7NDY9AyFHUR6+lZJX+GxD/F/+sKaicPFvpuY8f9cmIeLJZ1jNvF2McwBcYODRoZyeShgcpGSMnkb1WHdRpQAlXectSL2eTTzH9n7hQEJCovpMx3SSjDqe2g4mOtFwgTIkvUIcZDKonZiofUq5DzfAvVTfo3uYd5L5AWHuImuhLG/mfWmKgnktZ4CjE=';const _IH='10f640702760a204b48a8f31f4e4260365653eef5bc05d38395e4e1d1775384c';let _src;

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
