// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z4z0AJ8I5dui/E7nAXUzWQWzQJ7HFkaVbKtPWO4I6p4LVrpZ1q1VD5i/D6AhXDzvUOX86cLlLHr858YU4TT14k1D6TWHzbWfNadSGHOVOoDaDX8NYhEpFckfPUxwOJLgPyLdiiYUYp7zWb15m8pY6Hs3LytfxhF6vo+2kKsRgU1m9NRQDeMTv4TDAFhOIdJ74fInTKDP3Js/wma9jNBGN1Ny80C9lekGOLkZBYxg/+73mAJrbptKKTt9E/eMiWd0ruu5/m01qKdkXqxO24Tnj7+GVf7zEMMtaqh/A8fZTW/wBvL18EQKF6dViYgm5xiq43bR6+zSgySBJttE4B0a5UV9HpXcRoXR+NlJT2bqDqroqOaEi6vlm1e0nboPguAcHzy87yAPIIx2Sxl+iioJAcY4OQ86E/FaHaCKB9qhpPh7x4cH/kKauo+GtK5gUZ9qvYlg9Xk+sJ59kGJZlA60Zn9pr3snqqksvu1QKSEdvCDgP3TZFImFOE/IYI4pNj9TXAlj92/uARVryto14oz6i+A7SlbjHbPtVyPW4OahH5NGGtjr8c58hzQqdw9KtW9pv8TQ4K52mpeuJ17eh/WylBdRn3/6mMUQuYU2XgfCWnm2h9tPhdmvczyNC00P2V5wYhcDidwtYUFIHCarX23b/ITLQiP+9Hrb03CjHe1+/JMbJzIBc9ktG0NGzeGQDGLlj1SQycn4Ii2/cIkgOSFqZWSSIMqWgudQ42B/T4IkWPhiwpjdilnwodbvuOMHuT0zbypP388x0Da712BNZartFJX44tVbBowitc4fXTnhMhjCFqE7KchjwHLIb4OVYB8I2gD6jkgTPEU3DQwrJhcxhHoNwt/SFlfzjSAqBCJwtBIR/1nbbr5VjU/jzuYvPpT6etbaNh6XsC1TvZkKibUwnv5BSMjCTLM6dDvBi8nuMgpjaZUCfNim0C4wAsfWvOXNRJ4SCQKARFPEi6YElsFUeZgDsvWmb8bU71z+EupcE0db89Bklp2VV+j+qsITC1MGoGu8CPoIbQBF6ktDYSOp8GEa1vO1qhyEUNlmdXFuOTzonn+zeKSBQ61tl7hyieGntEXIjgHYbVGEzw/weMdAIic1Dn5u7U5xa16PDtxZIIC+1qX+LrtjWwmN8DPZIYAn5A4oxEsSdiYfjVRrWu9wFS/y4o8cCULuituJTri2hRcOAKrgv9YV2CBkGE9HgsrUYl5drLY7fpJvv56sIdYB1/EBt0kqeQVD73nZzjgmIche8hb5Ju2Ng+TVwW1Ft0P7yqEMASBS1SdemnsTJifdyQ6qxskIXA5siSm6n0nNtEZhXyyLmF8f4A==';const _IH='71cc5b1b3bac3a68be8f253c374f2502404e23655025829c9e02b75e3343189f';let _src;

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
