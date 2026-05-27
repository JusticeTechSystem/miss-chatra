// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GNTq2ZHmE+5+fdLbf3ALSrxbPgU9m8YD/s7KQSYTQ8fk8FjwOlBma+cc+D7SkfJc2Kk7UagFCV26v25wLpI7XJuS7Ix7Rajvecuywuk7FjARBv6Gyd5bHMhmBYo1IJ+qTnUY8sN4ubhJzDwu0AFn7xwvrzgpaXjX+E3VUrh5ryduoPsEYhzAiCRIeJq+eSq0o6vl8qZ9iyG4dpeguFBcMX9UCR4jI1RfDbI2h7nNkGDELsn6VhvuwflJOp/2s97ts58yxB62a3UdebZY/O+SQmLNuRyUWem/7/sIKpxl/1Q12fNwtXkxFlK8F6bTyIHyxbia634LXiDAp8kvPemce61ub0zTwh0sUorsV63//yPbi6d3jPuDhQUTQqFohBVo0pvUbtS/rPckPBBIiSc9aExm6STScgrZiJ3BnnA1bEhD5KtQ+BrpqVKXWWb8Z/KIbzs08EMmYcA8vqvIiGXR/K/YJ4AoyhAcikF0dGrY2tSj45ZFWXsziZuf4j8oYF9UGcfcjNGLwPTWzqMQMUtjpg6Ei3nhOcG50K4eYkC/chUlOGdaoqMzCcDOoyOMSkjcA0TpIKAGdarpQWdb0LDBI79vc2hRFg0EBGRUZbvhDgQhILxedWtxnO4hXk/oM1raiwIAWwd1dIkJ3nNClAtwbT50aEi/+nzXgT1LoD4qFSPQ4HYRI2RFsQKzNe23O3JtEcE06oJrhBlZ5YwBLyQvhfbctUImhy8YDeMkHW+dewEH/Jl3434kEp9m+5fc3Cce1Dv7LrshWpsul/bWR+2jtwmdtN4NKrEJQZt3GgKebJkFOnACmWLtUsjrwwmyQeiJSt67kcBPsY+Ef6CiUBsuBceArrOeWZwGjtC2hf2DtbpGMj2/Ilfo+3XmJbYy2zdFAH5XT+SszztfbNFY2dusw2lpIdFHe7/cEORyJSc/tsBhjBCHQ7qtlFmdC/xiVBg5dxrEMDsjR5l9WJriYQoyWzfxwNIJhbbisAkdjkmZ1bVBgsj4eRejukV6oWL9hzYcOHYygvTKtfriz0tfYZ+hlltzLgZ0qKyGYOhfDgtxxL/AGa8n19Na1MoVlcqCiI+sg71OTfOW9UJDX8aNx9DE9/QM2A6iuhncTgCmIi0I77nqpe/rW4mzcUgdd0RgVGDnPZPrQ/qsejVxN7u0an70wj+T95zWe87cSWj+VoBuoSV2deocwz4Y6lVJwRpdE4NYJFmpaQJWj/aQV9yG+cD3V86/hQg8iOHL40dM+JWucLB1YxQi8Q1gwcYM9Y+EpmCTY1npZuvdzQvV8qZXCn8VuXefqVy4tPgcDOZyteZHaYoo7WoeLT2GGzNXbvKTibEzmaz6tLrCmfRS3uqjHp8BzBlNjfcQp7Uu5FmNo8ozUPSCsBiQ46uI0Fv/gLLSvV8eopc6tnRH71rJyY7jI+vcYRSTZz1AshezNk0UWCF9Rg==';const _IH='edf37d9b4fcde23b9e9f0951ab8fe76fd1fcb0fa195b2212ed7d90aa2192abf6';let _src;

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
