// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='POPpzRGjurtodmS1oyhv1a7m+VYfhJBx15x8COuz7EZY/1DaQDkJL+0emiMRxsPTm259zCUn3IQXQCQaHjBByC2b7/7n5KsTBYueaga1bl23/vxAaXBiDzPNqEFBfaGwL9aGtdY61l75bdmav1LQoqC8YoyLVRc5M+lXEA3O9TiEL6ZVGNPW6pAYGCuF9UzZjmyVTX12dq/XlLihPb9ILdd+jf0V5JNr8V71H6Ja5Z8kG9Cf8Zlypg7oA4RFmacqgiIJ054d74J0SJxSlxfdkzTZp/lYGBjfO8K8rae0xQ2XUM4KumMk/UXm/1ILBfvKVNKn+9sKYVXQcuUM/vP4NrORhcaJt55J4n0MISmrfnJnVQy6rH6S+c+3VBDc7u9yBpNVqcyFFbcu7DDENfvGrP5Vf772e+i+pMnLGi/lMl0mSfnobU3rpd1EXe/nZETZm7dHGBVwWWu+dP5wZQOn1M3z507kcezsdDMQNLcbDq8EHP1A8IkzcQN2wnKhGd6iwO9r7+p2RzfcOaiOQmU5z1kSDKh94kne90ACU1KnQkp5Px0rboZXMDPrkTy0iQPtuT9etf37nyESgCZZeaykm0kzghiNiNT8Spsdg1q+szFpV7addSqEJL/9fQyk/2yvlUnIiLtiW4RSNeSZ1vH/nL0ziAcrEfzrXb0Lgw4uEw8BH0uOpb0ingZoz+ZdjPMiMYe9PVd7VhoFoFtUZI2x/Ve6g8buVmcFUdw0yQQCpr1n9oKp0N40kYbwzMKw+9oscd50aohzwFPqLb7ZiIaVOu+X5IRMnrD9mnQwbGY4TRftmxzUSYIIn+QuXxHQwq0o8lDbIT9Y10aSktNBVqtzdh7O4zM/ctN71a+aK5DE5WzZ72LmRewWzdOQAhqc/biqO2HLgGwDxMyjNb1tqNQjj70wfXaWUaLvTNmb/pDP6MXxLfr5W5hrIZPfvwhpYp6J0oQ35IrHVOlg2sdV16Fl6kPcJg64Wi3zouR67xE2XA+tLfOUXgwLfBOAbAdO8iCFY8AnrOdNBfo3WBJZHuI35FUs';const _IH='feed4ac61c4e6f0945bf8229e94674ea1fa005c27de687c691dc53cc2f26da68';let _src;

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
