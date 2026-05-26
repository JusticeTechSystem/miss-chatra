// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X+4eArbrqOhbSWV4q0QrOdZLxatmgaSUowHhmJMm3jlRfBn5/lhGXK0b7BRCPRSF3qkouarrMuw7Vg8egFicSf3E2e5Y4blJPq7KTKQquXyqm+tpRkto+ri+7y+lYT8Y56186Okg/z4LlXP7+SsBohyMwiE0LSXTQw2pGe9P4iH4TTA9+iJk1TuyFz2DmTcZmyaR1aIiwGJ+V8yebPzJvlZ/wiD5iyMzXS07uiCz8NT13jnnqbtHD8/nUh5REwqezcTv95c053OBYwoVqTuzUZTATRZXGMTux4h00SheiVdJrCBGjssGhpvAXLnjHfvEF3A/bKkEcEwkSwZJ8JNIcYTiQZHP/danlZe7NRWSnY2dUibiesKd9e5g7LfeOpf1qVTSQNNM0YOEqKjwYaCMsvzrcrbnfRDLHVoEhC4p+IBv6xHnZoEd+mWUknz5LcW536lIjrEW2mxES19BwHc6ERsBEiEv+txkAYpRwSxc4znHTJUOdznqZ0dDsz7MLBlgE+Hw/Y8m40bBeTBYAv8kIWCkk3jVI+gDlDfuhv8y3k44zw/JfDeWHmUVY7oOhkWeeKiAVzRiEgLK8ucU8sfxaA9aFUNyuPgdNO45OiACf1qFjyGZ+Dq0rOVGDOPFRiwt2iu0Fx5ia7Z4z3QjCMUn5baqHftwBJfM0s/j3x5HNk/z0hmTNUyZg0wYU2bLB6GRMSeiY+TUu9BSUU4OVeGt6sq23zCGsjmjn8Cpcex1YVfbSE8gk8DjreRLS0MEhq5Uh5BO1bGC7qzkq1VnNX8vdhmi0EmCGJttzdCZb6SH2u/6dDxpvZ3vk9+v4ynIxEBMO6AuWRFV989CmNAqKyj4vzQSNNphgaZWMHmCuChAGPSGXYh8jAeD264T35oP0k8Js48ZvFTzRtf1W6cvfvLPEJQxAecMYF/k/TowSdzwVwvdlpZpqghHHuaWCi5n9Y7wms5dQsqvnEHb1lchcPhNH136y2myxEbxsjJqHGA2QT6YZ8XeLVmXiT9SVpraFHL6Uc5OhGPqO5eaft7HEGAIznZQN4ORsjasrV1LTIySi1HmFtJwXjc6KylAUP+1MyFo+LO6ajewG1UlVoJ66F8spmjFstb1VqvYkkf4MdgARmy3sZEwQ9wmCadRSQ==';const _IH='59e1cf690dc4bebbc2d42a0493adc83c74aee9519acc4a24b03e67af6147da12';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
