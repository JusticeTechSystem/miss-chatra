// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OGGGJK15+W1Wk2tsqE9quRRiKHjPdjxqVl2st30Zm5y31i4aideZ2KzxCfRzvMetyT1gvV9CUjjRn8nVIRS4b5JCa7IFVhA/UNNlvO199GaRHxF+zOkXdvfjSTGOQkfNTVG45YgEEXdTOCBUwOyn3ZHO6fC1HVg+J+qev0OF6mnr8zn13ExI468IkruhAbuoBDrX8yC5VzmogRiBUvPOkJs+e96cg17kzF1W+2mno0S1esG3hpphkfs/USA8a1eHXzig5D1yrrAE0htxWBlkzYDyUB21h/92irjHeIHgjck5MRAhE9Pa7uqlKJqvAXB4C+Zh5KO9ADe2iVssTUyUp/Ya5uMNu6KtdG4tCQwFnUcZWefjjh7cBUVyFw2mQwt7VSjxlhie+2YCdvIUX+aoXeudJCTLLtrPpV1vjAzLriQZY3kty4ZAAZRqFMQn2JufD89ouEr9trHSHQAc/HDxMuTkRnZJfmn44YiZQduQDXzGSK+8f/wbV1owlWvOSGjKlz+AjSoM8NNNKn8f+kmYzwWBTD3zY2sc/3vkbWDj7ozXMRENSx4kTx40dzD3SS9CfzGnU4Pts3gybDl2Y4BonCTnQUdSWdZ584NfXGnJD1T2hrogFhrLK2qb9XTQy/EIoxHUs8q1S+s1UoDfrcKH/+9kaPXFw3x3y09JcTeltVGQaV4ip9IBLq9y+pNKYoTbgeQy9Vh7AcMmvoIBDSdOAZlXGL3Wd2jqPZctTP5Cphltz8oUWHadbGAX8ZloRNUgASZHPIUmNbK8Ds+jh5Hn94moWb6fvDBql4Z9v05f+GhfjI1P7ke0W+cVkymMgS1/p46wK35TvC/OY6A4VrVmIhBvYQjsOIQXemlDpI3OKSTHRQ/oUPwZPK/RUzwaQ6sw/S0FExvE2M8MorOnBQoGPpmC2G6tRk8ZpgkRFy9ueVZRueA5KC/vkWaTa6Y7qDw3XZgc0LRhjOm3M9mcR1kd+M60xlilnbaA5AoabUu4Su1izqUAfcpm6EtT3o+K4qWuae0IEcAueuUTp+He9IyPyLeHrcLIDHyp9KDPGc3QQe+IITi7MlVOBf2ZLtRJ9ueyTKnPdoJZHK2tXCotfYLekNJbpJoMZ3w8iRB3PJkoUrZTiwT7nJl5C1U02CzIb+YVNXRrctZYxssW9tCG+n5EHaXDRH/qipHnUyALV1YWBk2DGnmzRfQ4S1qOcivtv0akp476cBlT5/+oIxQF7Xl5YC6FiF5dR95hf9KfG2EwtrPR+XtpMEnQ2Wp/7qNpdnd1smPZ9kUoTSFKx1O8UWwg0fQbPTUKvaulI4QvJcN5EM6vPJxf3DM8hZGwM9Ev4fMpCg7DQjTIxHbT3lfIHG4x2izqhjtihF1jy0wlm+mUkx0Euq5y4lYZ4BJxwhon5DN/hqAO8tIY5RBE/ORR86/bIoiQxDyPsAMTGjc3PfzzHUD1DqK0+7iMCx/FmZ9aai70+vUXGl2BgHb4/660jxcs0VzfFGYjCxOMq8US1qu4HMEfZtK8zdC+p1mBKLbDUsTxIkkktyw4OfZkex6yK5JbNjGCR8aLY/KsojQjHMgtXCws/qhpWJLXPch2rnJAZjhNnwiJkvaBABgD438RqkbQsrrNV3jXgj22duxHI5uZpHBCnwjsyOcu9JrLnjmrgX41JdFf+We4sIaUIzeO6AjbiTO42TUwJZG6zdJTUYxRqKqeIKHIvN+Wr7l8+riCwWIzQTN9BbkIoUzgb/JfBpZx3q3QkTBUDhhXy4lMxb5+xka45xAzWoYkE9vi501xIzV1zZ7sdhFN+bCXFA==';const _IH='b41a0511b7bd4c2d75d4243c03fdcb6727ecbad6bed601589ac4096db817ced6';let _src;

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
