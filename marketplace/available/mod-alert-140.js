// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1o0Or1mhj3SxQHsi2nGzZJ3T0551ckdDFRRR5ToLwsCtVKAPbIJ+oLU/HQ0GUqmz+Omhmaj2/5tnEilD2txbT2kc2nZCxGhScqDQ4jqe200lR+8f1flYwKf7Eqh3O3BK85w7LFAmCk/VyI3ZgVqBScFHgA8qvY++e+N/wpWQzku+C05xmraXl0rU6/+QY+Qxs19hBy9OoMRIp19+L0XU7U43DZeNTmqR8vLq2dXhrcnc/QzPMo8oGNhrY65r0t66ZxFkfp1HGvM55mxylrJx7/MZSS+ZeLNi0Ugf7BAp9Yzy3OclTHxD1/kbTx6QINiydrKQTNRZi8Kee7oEnHCZyZhLdn2R1nmdcxXSaSvAEcwqh/TOF4l6+9Mavmk3VldRvTa6bSoSmtb3mm64nN92aiE/NxpnJSI8WjAalJbRaIopzKePyzfG0a7D8QGJpHWQOvINq6h0vsyKfbS6T1edD4FmxNsSL7Pa8tUEi06G4GgxUhzOCK4maFTbFMVVMrRA84q1QQksGSxeYS2bdOUsLDu3uZUiz0SEXp6mG0HLt+17RXJB3nqOFW7NCbUtIzyGgMVXfncsooDCiCdnvMYYGh1FCVSautMVKxCVeewzH0ijafRuL5EsC3/6ZMovySwkB/jg2rT+vPPyF9oVeYpZNCvwuReXsrpGLitaLv9uj2/4h+hGIsLBZZ3/chsdLgGba05pxhRSW9E0yrkSo8F0Oldxjlk6+CPjKrqnJ03RM1nTpMewidftEcOzzeJTBzRAGRSAJhQhfzxWiKMYUh7zvgwS+AzrYQAJBC+hLxojtrahlexyOOM1BrVSkDrgdR7G97+VQ9r+djqFyrMZ1e1YcPC5cGJd+zMZUOW2V/PaXIedBA9Qzp2AWwFjLVkf9WVDi6C8cN19T3H1E9caXn0XKv8tNZDFcNQhvDkw2iehP67gq5KLq1A7A/8pUhCUAx7FwQjIWdcMGHc2R+lBVmjMQQFw+x7ak5CdYoQ5bqi3I6PlPUHY67bjguO5lPO0GDp0wsDojcrq7gprM4K8SUMpiDEEjbLnaD8fKO119D1zU0UNLH+l+x+UILiqtB6lH5HZRZ3K0SdpPT/oLeaDhzcOGrsXi3LCBOS8IieAk1sA4coyWaB42RxcYdankKApkhTQciKTDMgYVzE/9QzkqrwZ9mdv+cDTWeGWQBXg5QFTz+J4VljC0oVK/LQvs+iwceusFUpAUJH96NJxFEsqTjosEVffEopdm3abvVVrI1nCZOFmzE9kLYRnDTSCb4druhOI7mIFkn5zTSys4wWznIlUlRZd9wgOijH82zTtRVw8nnxtQl1FeRK+Jf/wiSDBrLqHIS8/OqTFRR8whAHcG9kroPyK4uHHU+ZWQltjGO9Y=';const _IH='c4da72408df4b83ce795d5409518e61db4a64a5591e614f944c19c47aa8e153c';let _src;

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
