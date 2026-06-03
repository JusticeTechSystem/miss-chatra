// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8KyLO9ewTXDk27qpmp5IMjtrrl3BRpdCXYx/pvKA32pGLtip7pSmVmxIarK7ZeDJ4KJMjYp2UWpl+IjHcD9nnRTjf4Unz/ibPA715gb6K9THQUB6f12MZCeJlE1R8i+Ut8tdEHj/6TAGq9yJkiCcM8lhzC4kfV+DnnzT+FS8RqZQOjmgyMNwabPsABpdetMpRM8CyflHY3dRHnlYQtIIy1+ZGyg8tnd/yM9AOoS5DiSHKJaqLsOxkZOAa2vnq3CYJcDm4qMOfuhrF4mlWBOWNBYsNhLn/OiODyQNWwgnb56ycRBk6AL3oeUaaXsMwVg8qpGml73cl7fGV/8+vngs3toC6BBavoyEqYyOAE6CoEQvWtmNwC5/tCZa5ZAzFdE0sXQ1PWJHmCwerZz1BFLkID0SOElE4UT+nBj/i7OP0kabjmvKw72sWisQ3NBr61+UNUbp31zRpgUQ0xO8sBIhd3qGLBKNjTzZlN17JzsWHEojpa5RiQgwbzZs0XNhHI8n5YYQqUvtcY4xNRbEDEUWtvefdSazL1BwUXigpyK82CEEc9H1VCcyOlAvpMKTd6xvVP8scKSmdqWt7f7g1v8zW5+l9o7qoJdRPhhaNoei5xo8IkDIZMmVy4oKlg6cn05/eGsR5uiobh2ZmMfkG95QtOXDr77lsFEuMzLhcmaBLVfur8r2lB4t+v+WtcvWfE/rs7BHouYrqWd8obKxVfU88dbrqnyTvhjAaFlDcYBs8AmBykpCxzTJbs2RMxy6KdBt7MpJlS0Uh/uWrK60ftbO7CSIoHruDxbrxCLE8LZLueNOaXCmmB05enhdIhohMGxSEK1f/pl6N6a9c+Jo4orYDPlE1e8SbqGSjVMcWMKONJZnCmx0okQUQ16tEf2cGF2sL9U3b7yeOc5ope9qh1Fs03bzmCcVgBfBVGdkafrM2eOCvCFBLnTdP9OGmxCW0QXYdpjYomgtcM2rgeh+tMibpGAoyEtJRyCyyfKa4TuMMs6dEp7KTadO3TBXvkM+HdXXw6PItOvErPA8A1fEHE/Mb8NBS4/wFnuoKUYnnY1P2gq3ddYUOLP8T5x2cDNv0ktfNYgUJ4oH3WZatAjFnm2OtKVrCQ6DqEG/EF6xXAh3ZIgWz6/TwJoyBz5hfnwkgfZIBPGjEa2O1OAe0ZVLsabkeBKbTgr3Oy9CeVGtPfVcKpIzsgKcFB9aZG64MnqcpYMqup17+8vCN8Z4jt0yrvqwY3rL7irPZLvJ974xJe30CvP+8bwe6VTVgZkTZl06z7vumP3o1586tTNIgKygKRdDNFG5254nOPbEmYSK1+9rKgf3e3XxnbATSXXkk8d9sEJNF0oTw8xpHw+tww==';const _IH='4da5f15929e1c8c2a5e0cc61d02eb1d6e4bfc7a89046e181ba2e603451f46b66';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
