// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR8yCGoSb/D+FxSWPERz2mm5xKpEbaEC65m01if2kyo6VoTe/x7ka9Ydg5Bv7pg0MUL0qUweJ4OH5Zlvztsle7biOXZYkM6c0Z0/dp7E3jKzXnOZUmYrB3Wvc644RD7wjzjLvcEoQK8kRBUGP1CtnxFPy8H5hlXlDzKatiM3pketB7BfyluQw7N1gip7Maqkv44Qo42ii0WfDSgu130JirH6OVsIYlQUIoyQzympi8b7DJT7yZMPN6szKvPlzgVGZjJ0SOrQE9G8uqLtzr8uei+L+YrfKllegpvvti8GqLVYZANqrBqVoy6cj785UJEGDxIWrh76oY2tMY2sHpkwHcZwdUnZ50Af6brtGwU4tzprPyYqLAcbnUqg533S/yYPruXWeT6aynEPbHUabLPQkjTEZEY5Rr/DsuVJ38o24CSWkOiIMq5+CpqlC5dKT213GYLIW6pFu2ystOQoIukB8WCUeYkG/OkrOX955KDbsBFmvftlcYDzmIrhJhuzdUp5bIhDPlLVLvAVPSmlkegPb/GnHkbVuzNiRjOBOokBCgXZ/AsO/zwHYps5iHPHanC/H3wGXJH+jACXRTJ1jT8O9IyOrvWrcHpQwr22usHxCvW/xUm+JQZwk5g7Da07ol1y8+J7d32PB0tri6AvvGlXHQ5txhIf4NEI1veoHESUH6Rqa7oes9MDtz+zTaRJABK0Z9oCDTEr+QIGBitDruYD1PNBJQbH33Bh8zsA9gnBoNxrbGv+jt4MBMhjH4AllXBMB4zSLnQzxG+b86CRIzEOa2JcLHOmm2+BwLgcdS0kU0fVuzb2jmQNzjH5B1cJM2NIkPHJTW+srtvPY/JPB45v9j1RjFfgFr6TggCmU4DXHvKI9US9F/3ct9iluXXwr90fJxnE3Rp9T2dzPO/BhXR2to9rIHrtUB5ojiUvUSHVx0HsHchJR4G0HGuR37DHKCKG4o+24yBR4smqsNrklPEoQYMTnI7kWOHfLm9UGQO6A3JFpwmebifzQjujjiyd7eLqBk/631IfTFYGkVPA2F5FlLKi9AvScfEsbncEhooAdILBfK06PUk1H4TsHsDs5FGUGJjuWGiCnnJLo2IYYj202yX4HTdN83zWP4mEIbFlSrTWgDhBOdYK0mZBXc8h3CjVt2fDVrUqeSA54p1SeeniEKzBKwFMobbUAX0z/019SJj47W5QXPsw0ateuW1xdzRDviLbAO30TeMxzscV2l96qmNL7xMPFsbIVizH0lNrq4EzUbrTmCOiP6LzQXwz7VItBQq3/69FLH9nBi26HpMMNTz3LdStqMAOWfawa3joKFgGozeO35rLduZeu+f6itS+BL06xLlKJeZkD8QQpUo4LH9x6DbfmTbbw==';const _IH='00f6dbaf8562098c8b786cb291b246951048456d11dcad6b2441c369008f6af3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
