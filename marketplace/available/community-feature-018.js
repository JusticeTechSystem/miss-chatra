// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTVxEbn76SWbYUevOI4bvg1TK68k+0DzoViinFc9P1FsteQAk6rg0l3vhYDVBwdDxb7NpuJwXkzpL+m0FNw18M8VPrjvyvhaNsQ0SLCiPWSk7aecCGReHcdNECXl5puHc9MMbwTeyXEav6QJaeIwMwIRxldV+6062dUzJldm2RD/5RO7sfj/YfIiSyI2aPLHX5CTgdhJ/tkdQuMRin2B+ekSbuh7xTWnzzdpaPp9Qf5gWsHDZcjWmOC6nglalDXfIKnJVHzCLUDAxDckcMwe5Q07i3IepFNGMVv5fK+gbZYAT+9j7C7DMtlkN1B4R+IpIbU1AKf/+XGUCf15DgVR4Rxe2BBmEoZPBai2TKz2svHs/EGCDzKCe+V+byph3jmKrtojdis7pivtWQUEY2PGu6wVaZOWb9Gx3Bz2Wwbl1FsoHbH1c3yty6lAL0/BgxSq+dGckDdZYwY/qUZDS15OsNWZAOdUSab5/i30kXOZ74A7GOB1TGWdI1Zw/luUkU7/lfUoUvpZ2VXRHs0BCMGLXkfmn08xm0TqWXwMje41VgC5Hqqzetg1wxxlJSjfANegnyz58qWZPiKkMsbtfCabVK1QmCEE7FU6KlE/Oz0WfzHpv54Gp1iWrHuaqFN3d3w10yH+h7Mg+yJDn1H2dE7HQQOEqnKvUe+0kGwuupR74qxp0KRQu39DRcuk6uS7EjIjpRNTDQAjVq/5pub9+dWRgATGyAcIZ+5pd1f';const _IH='bcedb45ba482154c9e73553a9535643df17fb3f348ffeb8800d50875cedd8b2e';let _src;

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
