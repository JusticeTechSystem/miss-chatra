// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pD9wSD+Dxb/N38z8gpio6IpodmCTKi8rBFocWYmlEJO7QkIbMUP9k2LlnHByR77/niWYAoW03Ke284MzHEEWFvlw+cIaQsgPZxgF1JSspNByygMy05AQLdA3Yf6qYp9wUiMRgpzbrmrYkNmvJhc+GFlgJ26onxVpA4hYIfq3gXPtWzkny4MZlEErlv+EDNt43YgcWJ0aKRsSq+MkSHRWdrBqG5X3luFEcGJDzuJMHOpNCKCiUvfVZrgZfEmYGoQltGbGTQp+I3UAxgwsR8+UMZXgn0cOQxt2G1k9GmoNV8KUyJycix6rPR6CpOy9XHgfVMuTv5nIRLEXxZHjd+tarHgzSCDz/amoNZ6nPW20gxEc3MAYhF0itN3lJVnMTKc06jmkFLzM0f2bmy2iL0gimYlkDKhFRBvsNeEPfvPCrNrse4ZJq05XOn1aNxwogM3mTjpfW05pH0VjNNl7VlymWcxn+7yzHeIMYyspaSDNYqpHFu3M0MJ5J0KihpkYFqPd3Wo7OrxlopiDUYDvF0EHh+xlG4wonzWCUzNBXdT51l0j7k1tDg0qREju/F0N7CmfYiNGYdV56PorLkkejVt+VGEDlwYcaZOFAWCfZbsiMs7azYEk8cGLVILP/iOLnDdItSMViStKiiZLHYBnXKE1vgPPByn+wVyrK0odprgs0CxHWZ+dtaSmP5G6RVXOe/YjDLfZCh+d/wPqj7VHrgJKWl4BhnVlIZUD+g==';const _IH='371d784487c11225c1fa7f0e67b94542bd278427b62124a2b2ceab2fc582fac9';let _src;

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
