// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRGgBgKyKl/PNGUEBHIUZspPVsjJlvQrueuRpmc8ddjrDxJYFDqT/YLAFYKctWbAF1yemB0sdeQSlDLDpuKzNH3qKYXl6WIQvQB5xm1AyHlhZOX1Y+pvHrHwCvRLF/u8gB+jVTie732mTpMble0eqlo3jkRUQ6pWV7RZIMzB66Arb0Gwm0/NMD/2vsq3TFB38AD9BJ4SU+6MIPaQ/p4nS5TDd62NaJyaKOsyaFxtmG3Gn72cR5FIEjgALAmZbrlo8WiBRT18+cLH2lgjSUwantmHS+CaCic+zaQuqqe+LQuBKJSZpbmJ8YieRyl8ZBzOxtPXo0Bw0xYwMji0bZKNWCU38JEq2wz3U3SyCAbft7CMi1UJz5a4NFS7O4AaJk5B1wkYJgVyV0QeaxKuaO2oGgQuBQaOaQZbPFIH1gqA0nsXCIuoDw+x10o8Qj5OqdLjXbF0PM/RUd1hpk4vFYSpHEI46AQf9y6H0MjA1yboHqgu3PCL2UDjhkhs6FhuOzjZrOVTBM57rsBT6tKZo0Ljuy3R68ETuOcxURVMtzUSp+AQ37fcuVymOIB0T2swMVl+4lZlyRYVhVEBd4CwokGSPOMiv6gA+F0alu9ovl2Qm2/S5K0KmRFNqfmrvfOQsFeWL4ehAw6oLOkWx2ATnl17L77f+tNvH7C2uSf3F2Ai0X+Rw6Is0q1CjnxOUyhPYSB/ixgDisT+woT9ozYh6riTIjsTFbbDjxHxMwaBtp+71RFLGdCSoMLWh2Rvzehj0FqMx05Do85hP8CVz5H0u7IGm74CY6fJ1QGp8RebrjwlQ3BjsZjiMFX7ztl0w2EEM29TDxLbZFTQvYR2raE9ZfbnrM+wleSWf6lJuk9BqJrqObW10Xnk51OHs3d+UYG4glwjWnG6Z0agVv1f4ZYbev2BgmxSEeL2Gu+Fl//m+D8wz+ftLwGeBm5nJ2x5zNKLab5csbG1UeB9xvw+qix+HC7VKZeUMnLLCEpnoREecbJenaU+vX/MN0Z0zzHYJZQW5IDJgvTcq/soHvkjd3ub6oat9zPBpRmZB0WtcxArMLpUVDpTMC/0xGAG6Ljbg7vGxJsSYQV7Ok2dkbs5XxoqrX1rRujaAao22VAMCZd7xn+a1T6HzAGBrETfi4070u9tWuKUDYKBU5lhuZlTK77ar33uiWNLRVHxzTWb772vkzH1TbIaNkn62ntN+n9sJ9Ok97L2sUgSBorWgYx2s8Zj33U';const _IH='b04880072d0aae5f078a907173cbf7cf765db52f34ac8d4f549a8ca42d49aa08';let _src;

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
