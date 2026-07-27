// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQOCKwSV3KIZsJJNgFNDfEAVbTTMqRpiGu1ccOS1drIm+DQom4EsnTSpTR+JkXG3aAE9/k7CHtu3XuzKdqjruiEFmCbcsGB0BaISGjEMDi1q7XgR0byxq+wbrAWd5/cJPbPhLLAlx8HA743UmZqmeTSYujnfkO+lLICKtl680E86THpUqkunXfu7cIqY7IJyqT8dWPit8Qbs2wjbx13Or5tiFi+yerTIM1JksFe+WIOtCIEBcpKKIGcogCXjkkp+jt1ODxDVhQvDGP85tVs5WwwQdSO5KEYKRlvxjUvtAEe/HOifcSbRXVxOY+nuuDZSbsFhAV+JmNaJdePHd3D6GdfZJsr/G7EOZ7PvokmanD84QgR59IjYz/Ii2VZNwT5r19Kiq++/OKFCS9Qvu+VnfmWuqScFRbMn5VNSXrQPhlPY7SOBdk5k++fY3kIRR4C2ER7JuZRiWIA2UIDXDMmZExK4UyFRWPczHhaBWp2QtGx0VAHgc6ZTW2lq74Fh8LMMADoeWorqiEacuEMDZ23EXrjxU4/5cgZ1yH/o2XQvnUfWTIY3x8ryszx0gH6tlGF4mOtM1KuL0Q8wV/IUeawHAh9YLwJVgLoYmhWcC0jaiisz/CGhZQ+08RZKmiICdCa/5ZrqrgvqIc/upYwEaIs6GsIwep+wA0FfWPgdDZZW25fAF6m2Fd+WxThrbN7ENTopSREyrIe+kwmtxs6ya5f/v33MEOtwtMdseSaC7hyIgBuNrfO164VPBDRWsHNLSiUm313aIf+HkmUunRZ/6e3LaFjAqf7kq9DJnEeSG+lEQ59zNyEbSJxaASjterVMZXEN8j0kN2krK5uwgJzqr+V7itM+fNGIl3hNM+kmSf+tkRI1o/qXNmPOJQSHXnfoLCmHYR/N2MZJHuuk+H/NIYdcvU52Ra9kG37T5gAPayC1ghHAk+5QOpY4q+SLO5boLz8POzP+kgSSryp/ovvPALtxcWh71XVGuB/t5JP9L2vCQovDH+k+BomGWFxXH4ND3k=';const _IH='fa372a760c366807edd608673d7f7c143349c8de14a4285fb19d4ddae39fbac4';let _src;

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
