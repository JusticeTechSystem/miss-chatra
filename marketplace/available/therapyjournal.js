// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k/9fxtvCHotCRhMh7wjVHbKG0i8RZtEksIzamhJ9vtlAIDb1vzLtIqBugoDCtJJlFttvYGRvaVA6AYS1KcTAam/r0h0QjlE1TjzLdHbc89yztE56fcRBlOVi21d8S+SX8ljCxVkm8EVPGp9vWXNsMsLSr3elQaaJhXROX+kHNjV1IofNYTdNKxicmvTUQaCWDOge6gdBUemNyWOv40gt5ZdQQ/jjFrx3sjpgbZApd157vKGqHkznz/x5MK0z7eHb7V7fADTa1TkJIUA/aptbZ/3gXPnzVkNj1SglvgvyKz2BzbN8SEFHBtAckraUd1cEx+EOrqoyb00ZtW4/ACwU/pBcqkrWi8eXldJ1NvCgC2ensZ7hBJKlMfu35ddZo+iXVLEKnBHAgQWskP0Q29VUBYBmPyqeA8FV6jEiTGvlKOp4z884hXp3hUuDlgesi1+tkVA48YOAhwLOldEfoijJrP6+HGkXbBB7lCwJpNdyb0duEHxI4WUk+KHZKE9dLQ9wXcJ6zy6JyFlKoZ16dSPE3APYc9tnqJFdG4pBak9fm/y2+foyN2cwK/m41iMkHSAN7HBLLPR/MFqp5Zhj6VxqWg3dVqx0L9PdFiGHn+BguJtJwS7GyUJbpB4TKCSS4IpJk55DQqg/c6Az33Tg76otEwleHH8MlPU+/mBTbPCe+YcQ1jYBNG0xatGfPd/p479MXlOiQV+H8/Bc/rRRnUPWX1oTfK/buQ5X5idkmjCuSMmamPYayhQeSrS4gF3KV42Y/NjU2sRqybIz0PcE/DUjkOb+guyAGrvif7rRFqIpLsqK0nAim2116e0f8k8lwsY7KSrEJqs+Ngqz2WqY7W+J1bSETqKYZBWzRCuiqCf86nNjLwqimo3DCyIsvrdl6n+d8yiyok9Yl2yNlLZvpWAoMVOelZW3iSWac8+IztlWATqzwWujPfehUXs3ecAvi/1GN/yRYcwkUuZWLmkAsgWOFfMP2PwPYCulVpbrAfy7h9i5HMShXrYSTLZ1+npRU0S3C76bSR2pR7yj2rO9kjo5sI7MIvrfiL00b7Ibc0tjymmR4v+uo9AFOaY6SXgrVYG0gVNNDWyco0OcZp6HhhT1Zg3z0hWwlK3YQ8r64OW1J3krpHlvPNUCVkaA5VkXpJaBaE1ebrxCm/SAL7T7Xzq0ILOhelM8hPZXQ5hda8vgmm9H/PWnPnEbrnhirVNzkpiE7x0TPC7iqETG1IcIrUONtFg=';const _IH='b867f3a476f9400e48eca6c3451f49b716210710496525eed3135384dc06bafa';let _src;

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
