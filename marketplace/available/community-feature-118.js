// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j3RI7yq7DqyhIZhBD/v8ZoaoqJ6Hg4Exedu7uHfmnwypNRStJgZKG4Shg5h66K3i8ZbXWJoJOJHJwpSRpXv8WtxZhkiCNbCD92jylICfjsKs0xBsI9gJD+i4uQ23q/CWLLbFEQGZ1Om7JSt93ZB6XYBeR3rG+O0pMF5VylX6h6oLN0c+Ag+d1E37N8vlhi/ovJegsYVmXwUYiYxsJMRZ+6FimAo95cseWverOLOvowqOTmXKq5xCRWxqThpB84p6c90zKkfkcFq6Tb6Z8/VzdZwYk0WD/N4otwUASWIQCTmB7IyyWdRY1lx3HXrXVpqlUzQwtokM6vUB4qi06OQ3+TeXWM0y+9r80dyh6N3l7suSIMmRobOt0DJ8ulpvnNV0vOkq/UUEWEVjpt88vqBA9k+uIsE4KHsGNDM5EK4PHY00RjReB2H5qSgOLULIWpA+DZvvDUO5ysjaUjNkVhPu4cRYlb9nqn/RYMs8weiJxks0jRyegLkAdBjwY7TK2yqXKcBglv6O+YQ1IWd8KBa6xScfcSWLoswY2AHgGV9QXciOrQpjSyZ7kRnGmIJvD/MTNrmUysd+L4hKGMCqT/DNxE72dyEE6i4Jzpjn69jklZPbGjMK/6ImzDuMLRkXC41Xb7153oaYRgaP5rg9juD6KCGLfHRvCuDZqcZZlJ+0xXWNq+WaHBO3YRHRMwtQo6Qh++xWnHPnOcepDaYGLOqXp4h99EKGxUdGKbaiZ8E=';const _IH='69481503e7434a34ea4b525455cc7ebb1978702422ddf49a8a5e6b4ee3f47232';let _src;

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
