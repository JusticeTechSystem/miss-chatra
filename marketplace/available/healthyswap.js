// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS5tWDgV0d1xuoWfov8YYmBYnBZFyAyrTLFK8srC9F60EYYRZkPA+wI8agL3dpfbr8IXA5DOpZNNIjp135M4LiuZa8FOnIH/V4JzVg4AIPWLOz/WrGdi20t+a1jmAx/3BkXCPBzVpG8bqlxbs0VqbyAU2hnOvusvLHotIvQPw2445itU4U71lVnhmtg9iBf6CMbwJ42EGbUHCAMZRfqEhRRlL6uDsy5AAGrjYwoinmmeuLXeLA47ihK8BpNZGKAF8IaqNSO4jKpgyBSknK4jZOQRbIvs1Dff7hv6Sa2xxQz4UelqyigigsT3JI+u4L+5GnH64Io5FyN+uYtJr7wffB7YJ6w4y7euovKJiuLpcQFEsZ8DjEzRDnfonuX/ZY8Y/Bkefz3WHhdo2gxyrA7g1ED/3pCVcopn19kFDVFA1qM5m/6pNVi5DK7v/om/VFgxNXM3lpVuVotRLSnDblmHfaU/zX9+TyDl7DvY1I/xXvdi9Xaw7A0eR2XwW7akFpQbmXicEAvoe+qEdaXW6Zt7D/Ph1US28n4nhIBpGBkxF7vwP5olS9t//SPKoRL+YpqlE6qU/bz7PdBkAFZBjwGmpFhPlCAOGCZcHTBXPTZXrBHDBH1Cdze23+a5J5bv6C2KT4Op191zwOIz1jwTupC2gzj/LcW7/M2BXDNhnB96OnNex3vIrDIZeQdvSrUuJAuVGBCPYpwBFhT7qLUGHbmQW8OR0m4dWUFmaZDXz3TCPTFFB9qxDDF2+0KdAuyVwaJ2+FIwppRZdqjBS5QShhxjJBuGWbZmADvcfdjvhuX/l7/ZJt2jHqPbNSHcgoG3D406lQtjFPO4M9u3AtEIsjRoB3ihAIXyqyY+Z8cUxd5UWYellpIqwuxTVXFHPWcxV9Y8r8GBTHzalAUGMjjByNAhmr8YdPXr/WFK1aL8YhKkAsZ3kE3wNXAb1VaSb8lu/lPRY1gpkLScAvSc/PWKhRH+low3Jl3rLLwUJSea/RmPJsvMAhtmPcrDcw5tTCT/gYYMfzl/XvcUp5UzdXShUFMp11ZU81MdE0h128CuLXBWLouKI3h0VJcmd73vpqRYAguQYeb57G3DlZKObs0S75aXmIUACsEI4aee0EjtELe99MvXyTVnQYWZzSXSpB/aN5T7d3mjWfhqE6g0nkfF+aIvWOPzPsuBO61O3gxlJbxpGx5YTAY92EYBs3q6sB7o0UeKyC3Bxc=';const _IH='dfc02032c17c7f697b1fde20cb0621aeedf70caa5d6d4c855bc409cc34d1cec4';let _src;

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
