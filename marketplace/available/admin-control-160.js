// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='APYUbG6P3BoLAnhR+O+lUnyBnkhQV46dMBrvZMUugzXxSDpXkSQ720sJe+PB726GVssaNjttGSlAk+mKjACfeXxqRRVSQYAfj3dm8VPy2AYLTm/jgVtzkgv4dtjlFSDC8ETs0i+zjMXHy/JGO/3Kn5ea0v9fzaJRr7Mv5zoZlP9sEKDT49kI/aFIOTgYWyTYoLQvlUrfD83iWMiB9Q7fAmgQX7G3gd8NZ1NpPLyB3K3rp2fK3clqdCJBt6KVPmOSP3YsCPuoKoZOv73/vXEtlJyJQXOvUWFLu3qN65dReexssRmOO4ij4oKzCy1sijjRwP2uyhIjTcDYRjN++UK8VeHx5EQADqAoqLe6x5AWhu5Kx9lXxARzLIjKRrgx5hlWWnaYUizWeX/TozIuAtGxdRa2KlczC/OXPAGJrEHjoBn6ZVOsVFAjprA/44f+Iclji8kJuBKAGq2IcV5Xy5zYgV8y6RGBQMwm1MnogHFrPyf+vHqZm/YyF8MOW17dsC0VdObHEvTc4jSn1FltKAX6uGAMeUEyp8DNRzc3i9TbQ7jNB0lfokyec49d2i3DhRxnVbOocyuj2dxUJl7yZSLnPZLHZhEFOQ63/ioFp3iN1fIkZDM+QhAzU5GbusceAPRHjuTM2p6tqp8xO9JiF7zL3/lTDmyg26vpsHUp7WTb1kBHFzqkW0EH1m4ZpRni/XM6N03GPOposfAWLGzcw/4pbp/1Zt8t5mw2kIhE9lHGlkZbvqqzrAWJZk9TVM58/4uSmOxQB2ugI0KgZGq+cBkZmBjHrRtRDnv+zdjMAQvC0cCCz2sAv4oDIe9KXvznJroFtAChP2zl8PQG2daioEs0ZWlYGtp+Y+adbS3qYCeVptbR3p4X31riXy7GzqO5sJCgP1PTMsTtyH91a6gu4j1gToI5h/l2gmdFhhakoOUxLNNx6jAnZeJNn78J3SpR8xNo3UhpOpfLn6rRIHMSjdWzAAlfn1a0Elo7BSWQs4cn5nVXb9HwCwB2VkEWnN8FeX9u98ObQJPPnSc=';const _IH='593d45e0082d93878deed7fa102dbb2c4d121123932e514c03e3aed5f33047f5';let _src;

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
