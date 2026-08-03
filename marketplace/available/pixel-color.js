// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQWnBhL6UGOCTqbnkVGYzw3yP33wyEEA8pbQVfVWUcX2SlSuUSLyTCeGa4mRkBDaheav3CUIqZO40u+sPx9mZ+tHLQOd5jMFmxAz4Xb5nIAPuz6XTcBvjF7E0QEa7Sk5qR44YzAUxKyFqMY/u/FUV7nhyFZJHUbS4sQtnHb5BVp/ePoudrZfMx8g46gNXcOrGZAlLZcbbO7P888wJ1sUJia6dZn7NpRPi+UucLYUVStH9eIaB+AHqVA5HIj+jvOX3NTkKhlkCZ9PSZ0b6zcOmLh09B6Qa/k8RVXqgSz1h0zz7sbcAqbuaw0q6zPqVgM3RiKQutHngD2xOk1QmCcxQy+X3/99Idb3BggAmAWOrNTC8rGp4PQ1fPv9wBEIqz3+oZrYeCk/n8fS/jbwW1sLmUvW58JqVv1Zn54MvKGzGvmTkNEPsc+jRGJhnvjqXGwercO+ZLxqnPCvw+abFNteUTfrZ0gG6OU9iiA+vNinefeGAVcj/dJGnDWbjena69/61tLGPJKK2/5ZFraSV6lQwdQvobP/I0W0YTovGC5WgKIAXfopSRhffOPOAMskoFww0DK2amvIjEulyT1erhnI9I1xjjJ4DWYF3XoRkwOtZirTho2hB0hSph0Oma4kdUNaLOFqkOoz4TSMuADo0AmMtSRU8bBil1Iu8o3gRRsd5zfIYWADxIoTs5EMFeF/s/VWbNs98zypFbHnWgMZuXdAQ9m2UDo60mXfYx5lJ0G7JG1miCoiLjUu61OtGApiJXq964m9o5RtOlJ1nCqkD3WDoSvvPMaKmAk//aSU/rDBlHemY2b5TCKCvy5+tzdGHRted6PZ0SM1lZpCz3EuNkeGHOCMX4FgcjZ5Rpt+MZFUYt97sA+BlrWf48pZVvbzzvGadCL1WRZhZoYoU1OcIRnXi5WimhMwhBVs9l+0crvzb6bAl2PZqU5SxYOmB+uMH9R7zCpf7BXQjMM4z6TjXB7WApKyGTN+FnPurPmQd4Z9a60jBaluDOvI/9DCr7i/t+OvtzTMX7c7vnvAk9NiWARiM+gJb0+Hsb/6ktwXXFaYJMJsAC+IkWApG85tzk5ZU+MPNGdodlSkyrTkh2SX5skmEJF/qQZQ8VMX552FosORiQUd/Y7IMZk5zcMuw/czzCXI69aRhEkxXUsZ4ZpA/HwiryG8ZWjG0Zwod5MdXGOS1mhhQSaeQVeP//3xTWn867h6SHcY6A7OPjbCyPzLR+CMauCIvqFFK64EqDUfxkowg8UUJ5xgBmP0ar7B2lqniQzz0OmzQppErJMbk/vq6iaf1PbuKTNJlKTlpQ3yeZX8gaCfYPheS4WlH25C/PVpUgvJMBDVS4Dw9FuyphywNa2u5YS8ZzjA+Jp1y3BhZ4TX9IvIr6pRagDLGNYvSDnUhF8wiMecJHB4uROuc3k1Fms3gU52CgRcuac6fOgr3SRkg9PTFTQn0fw4K5gvpKrCmN/G+ZWHrp6xk7dCG8txKcX0cEERzqp9J2yFnOPrH/yyYhyWG0IOopH63fyjAVRbNZcfONFK0Z8BVNuQzQgpp6AwTXJBRZS2PrAkJZP2PLUtb9j/ZX5n1ZipvfLD6Mbig0wwzu8PEercS/uDCETnDKccj7V2a0eUWIrduDZBKRp3CDE0yCSLV4x65P5L825PtV/UJCaPQRv2Oid3JZwvMGI88hQR66nne3pDaYkflyxeADJZg==';const _IH='208eb17ad4aadfc32ca6bcff2921cdeb4cb7cfaa68bd396f2e97fa059cde420e';let _src;

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
