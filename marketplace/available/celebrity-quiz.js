// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h3QsxTDzoT51TehVoCMQvSwugc10UUM615ulslyCBJymPq43Y+jZfhgpRNMF1lA0TDvOu8gVHN8wFs9ASOvms3lYVRfj9eg3jY5K6we8Io5gdM/luq6a7IjrGQZTo5Vw2bacePDhqQ1a2Lv3D4e12PIrjxAkOTLrNsnWFPG80Ns04NK28H1yrsqfq2Ipd7UyxAcx4S0MynQ0Ekn4xqYmC7e8Py/X1Lc5BERqKLA34fdopKaz88hmR9GbFAiMOT+j3YpDKibuMfT3PtF+KP6LBb6RqlO9WU9rAW0WUcvJOW3dcsU4/uZAK1WUBGp8X3U2519JfWE48ehvqFNjVbk4FM31ZxycM80G55rIkB/qId5ytTMV46H/s9OG1HV1k0O7FvCrj83snQXYDy+R6SqRnQdpfTim1CJ6qSdZ6DWBhaJjTXhvBnO4yWyBp36eQEpj6zr/W+fWiAmOlV7E20XXCJyGAjN8E7iUUxDHhTwEXuTTozG+xu0yAnYRwcQyOpvN0PZGQwC3HQM4EseNuVGw3ilfiSFEIE8vaN1aB2VYdU2FY0qCrkqK4AqdmdsRMIGVXby8kIBtgzITWJXEpNpZhixD53532TAlKGCvckMGv1LgoNpNIbkO9TKFwY8hVkbtN8sGdfwQjjFk65WZ399ILpC8AILcRbFl7kwaPUxo0U6IgxV9djwek6XTLErRuHiw/mOJPqiywWFYDuQ6KqGtnQPXVem8njpGppG+nOMH3d/dwZVmyIRZoA0XWYn5RVK3l0LbXtiSkEGXGVIQptGiB4qFRGXCzNNA9Q5YPnFEk2YyeybJEC2wHlaJL9wUTil1LVCJRNTxz7x9OEieAdA4ixRf0gU5t6NbkSDVrebpzXeNwd/ND1In1r1EJkYLGPD5GyxokqQmp/pNFeb/4l/9eVoohfOvLdXmNmyGLiZQYBLjxVsiqKAR5Z0CSbJHks1uRU7TsoasONuj/NNj6ie7lDwhSqUBIh4bN+YRZ9CpSSFGDDB6LbupVbPpi4YW9lJX+MEuDy3acFCLNf1qzmymDXg6fAdrNtXkvdkiCZplM+vvrbeOdNia2DaOhEBlNGL9RLJ+0mfl+XxRPYdkLe98BkAz9hNQVJY8co7BWcYgjJiTlHwmxKvsotwY4BOyE9JAUOSwToZ96s2iHGdDnMvdkMwXZ5TFi/POB9HVa4AJFYJpcDGUsgO/5BYpd33e4MjktV5qtfxTAiT4qeo+3Uo0pl5a2NTXtiamWDEkXHYgZZOK4ziNW1u/fAWE7GIP2bcP6HV8pjD1R6DoZOk2Qsm5dDOFQthZ10Yh4PP8uI+NTuNBazLafay7sj8v/Z+Rjm5ithz9iD2J3DldJSVFVh5BW8HMU01MswPM0yVu77k5Md3EXGJ+biqZuD9wZTfGDmB9mQcg6vBR3PcDEMMM3aE4XQlk9FbYMy5jDhdl1Bwnjp0=';const _IH='20a7bb1d52e99e75b1f4d2bf2769d0dbaed59e9bcfbb9461ceb294b57dc219c0';let _src;

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
