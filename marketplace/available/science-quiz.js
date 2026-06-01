// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzR5ICCxEDXf8T287piUrscwjJ//YxXBQeA3kcgPLLWqxM64LevTzVtp88G6r4DhUGiu5pM2OO8m9pBcwES1flHwCExhngaYbET/TR4QRaBhzDVJ9JGVJQSNHIVAVbUWG+bMeLzDKYCVMJCjU9kdGqR3tyQNI9zD2hbX8CtI21CjYdyrE31cMLSN2/NDcvgaAvE9i+n8Vha9ErDf8Qs9WNJfcM8H6sUck4nY1+dnz8Z+h9WGbXyKuoYBwsvBjOpnNsiLESX/LdqHqDdn+SlFuM/E3kgRvjJTRWk61pgJOQNQGPegTJiIGhND0GjOLw0ecRDOpZBK4Wt1JmhxNnIgLXtHUihQX60wLu624uYZKEvpy8tAMbevzA8bhOAgAW8Aq4Dj/bGav5aztd0l2TsDFPtY6qIHXmS3LjUIqW2yPpac3TnViEM87rXu/OL5UzyIyax7GRtsg39pazSxENfjx8vyXFVKyW41tbOHk4bmNPFYJWTmF5hFUItjhB86JQzQKv+L1nsCk0txF1glXLXZH7I7ttLORFEwXC1PYueXGPykz5DnEntFJeFSzA6/IbhDXhMSDwGqenG4qvo7A1/12Kfbx8GOwcnjlgczmmFgfBm809PePCVTDscUc7pyDXmhtIBTl8NeXbRvb2UD+jWhDlaiz94eSPCBcLZ1/CU6RjMqTw3cJz5xPhyWaAaTRJG/4QtfmI4CvliDOnNrMEdOiiufYR21UzUrMV5Yz78YyY++9uXUfPJGx7J8JML4BvRiz/IgbsHpX+zVmbnRp2EMJhHeev1fuqxUrDGRXxcD0wMw5hvWVA5tn0IGFu56x4X0PPaX2y+qiv0qqczYbqaM/hd6BStGxmVAUWeSlSyP6m+tCVwV6ebSKOdmw5ojugx3/2pydvBuYu768NfURqCqZebXmS6L5Wf78CpPeD4SagrsutdyQxx9yZbG2YOFu4l8tac3hNVQhTolB3XCf7tyyCqUjZxgqevdH+1giejVLZz4k4kiJErqf7kfh3rXt55TlDxpradbyujqZ3J2eRNR/IX09QCJgPwsaf4XmTHrtrh3oJeclObYn6S2WTcbfFMxb4vMu5IqgdKYiY5AByMFRXYCx/+v1yF8i6mTWfjAPUnHL/lFNWdd0ohrjmwBvNwBhwUY8/2DCcHyF6BOVdqRumFq+5NOUAAEIci+oRb+U5IJ4S2a+XbniqvMZ7Re3Wzw/sXrZRaJlv7dQUO1Qu+q/anYBK1zAI/2zGnCzDc6Dt7m6d72SGo5pm/9Y8OOXIiEaJusgvWDvL8qYOoE/2o8gdz0TF5AoOXF14nDDmJ9dPpfu7hS6vC+TGAYITf9bcgPK+hLGe73wVp6NP2aLvs5nSSmmIC8Vm7fAkqIsjM5hHgNZRD27UqoTdoC9zdd9PQECazxSfKIVU2q1WGST2UHyD4wwpopsO6VS1gs5RVTjiw=';const _IH='5b282403a8afe077e024eb93224355cbbee6450cd7781dcd6864a99f1dee340f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
