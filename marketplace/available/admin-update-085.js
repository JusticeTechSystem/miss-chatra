// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IyAO+ZXZfjYHSxBRIp+5a+9M4/AWsQsk9rA/Hb8I+mlp2QlHdqv0NQ3O3DRjBixYPm/2Y3gGy1kG4N5x3rNET8syO4No3GlOpnVi1oiVg7B4QODYAmPR5oMttXzIv6aWy1bX04NoT8ygwx1wfmMnoWSA9/Ck3ou9qyqtsNTqa1m9rTyJyEn3QPXIkInFBGb3AXkxQM+JbsBnKaUMOqn3s3c4618vVS1z8MyZFH4I25tvo0l+A51oHKU1H8M3lJi4av0xiW6refuOH3FxvXtNJBPbzSWx69sYPkOSZdU4dnvP15us8q3DOtq3uGfYGFEyilQ1PbsvvmC35haDLRs1GGEs9YARpirO8iPu+kfaG5onWa5vmvlQwBC0cIUHpzClkxHYCdn17kaaIDojoUq93LvNCafyGMHAagqCUSGPPyN1pn0iHKe+0Ff15pajB1e0FVhfnFk4RPX9TXUiwEbD+bytNb1wOpfzzVnp0RI7B8azaXvh6yXpWN0TIh3I7V/UWvstqqOl7yt7qiHqnAFvnnNKUfkxjxrbW082zlr/ZKG6Iq91uxnnCrL+KDjgT8oC5bN2tsN6b4zL3LgXj7AyOBNEzLM+pj3/ngbyT5nRzAv54gG8FNShPPy2vkl4c+tdlpck6qFEL5hLyAOOzTwpHLVZAav84+0XAlx3EKlQSjXgr05gRwNyJe2jkd8tridy1kci0rrGhhPyji+O/k2rvbbqxfB56ycZpA/tk+yRun/7ft5/ODihj0ouqd2Y0bWBy3LxTkVuRtDxtp5F4x0exx9u/I1bucj669b2+BmhsT9UP9v460WwRoE9uXnyVWLO5ARfbcm0R2ldJQZ6cMu7WpSpZlXIuX9O/+titorIW0QN9VVmOeNIZddYvhbxTQ8FvP/5RVdgGjjmoyJyP1ucDUkafq3oCWW3dcs7bbde1gIQw6i+nwaJuK7QfXrtFvfIHFw2RDyifHS4Wv1eDOEFA5Cie+vafcqbuIs7bjX2J6seyZizT7lTgK08xQeQ';const _IH='dece30da2dd946d7d9a59d4bf477bec37e4da2dc9f73d532e6350abf6c6ab8a6';let _src;

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
