// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7USHjR9ZQru8/4WkKSxMlj8xQ8aJDC6d0ydiiyeId2Ld4YWN2ceKwm2nxiTCJfO+l20Y8tNw47BMNqn16VD6CP+831XHLTTeDyvgliYrPU1HBSQ6+oFVQNr1vMqjbUqDeEyPYaf66t9K2Uy3gQkNnXKqhWEF37BdJUGGELzIuVOV9kpZtO/fS2EkSSnEKcBdjIIzbD5Ug1yHNbEAcb4YeSPjAazvFasGUoZDZCQfIq2py8ZLTtm9b2F7xlc5n/s5M/vDaOKGKXQFZT1j0UhOA6TqiFEGIF2ErsSccc4SC30SCdnQIQ70LXhmGb60IZcG0ROx8G0g51Qw/RtbzU+Kx5EC+SqeyCa9wIpa+2Kcfj1tc0tedliqGbOOhNoKxq0kh/rPe935Uiz6sFzN6fN/whHNCP4B9eNRwFBmuJ16aumO+EfLUi+scE8KmaUWBBEiWYHAmOlebPqCSpn0n5zXvPla4AUS7bN481rY8BvGGq7cAVJvxrrrV0itrbLGqYq+mVCrc0yJT6Y0HzLmItSm2oNxeqspHOaD7FRSQINUPBbggxVFVj2JXe9eFb1jwN+88/X8b4oWMNj9V5Jd92yL3wb5gOvZTSa4NRNiQdS70kApvBZIAieZ1DKceA+Zn6SHT8B0OvfQKfQj9Uh/n52zh76WVIjBbBoWhrkGQpJi7bfWb1GGnh7A2Wj5EB5/3ZYc/TpYtBM6aM8d7vynvhTtRrmg/P7t25ppKndnSV4/t6RKIbCXH55xz0Nr9z+JHft8CRt/eSsvd8N2+FSzTmNqMM/MjKCOt+yMi2mVfLd/c8vAm0LSIeYzHCefzvrHXyFZAG+7NUHC6TFUn92yrEg0/2nwDU+IrrLlKxbae2GEymEyy2wzQFCT3fq8KNP7cRHnSm78/Ai/EAbf0PRLsR0a9dOpyRCdIBFJPHmyV6oZPjaT2RzG2jxqnCaP6BgPczksJDBVNNe72ZzA392TbzL6zJad2wliB5e+L6lhNIXpdJZYKbNLvsPe8MP6LJjFOMK7ImqErqQwdKUoKqDDoUvsIT32TyTsQ7WPGc4pSmFFWdxfEimS2ZHmWFHM/hQiuXZhmAK1dy5oUr5KVE82C3vbsR86/n5Pfnu6dJT3LaiNTf/QiWyrV1qDJ0cYkyvf5TcgAL0aPCayjTCCnj2EIfy5BmhlGuBx4pIIMtIDBnFe5LnHKxDmjwS3IGq0WvCeYhnv2JCgBq78S0pq+/ma9uk07RFMtA0EhsSEsOK9BTYYP4+SMrg0Jqg4buuanukHsmUZMsiy8sHaMPR0BHcjKxE86ic449I7JaAV78EQ3ry5PE97qh7Fi186GkLdyEJ6cKjKowC5GtOuZFfuQKoFtLPvr9FPeRvPtLzsHWXDjK2QT+Fp8V0sgUkPpaotCwOGQ==';const _IH='bdfcbf383a35d5ccd86111f3b7116dea35bc6c4bdd431c9379de9e0d08927005';let _src;

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
