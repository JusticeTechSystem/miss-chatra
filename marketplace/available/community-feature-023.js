// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQFzx+t7L0uxvM0/K2UzGxwQSofv690dOecOcNuImNfRYK2RCsulr/+jB2Mf8YM8ib7+acXHc7Q6I+Fad0ZqM1J7QT4mxBGJ+8wg6bhHFefSmy2POk7/Rb7cCybXK6Nc2RYQh3NeePQH4QFdQAw7QWeAOJk9mzdath5g3zeCRKXvZxcYdApXPYfigfU5FE0iEndSYZy8o/yozo15oLBF19hcpOpr6pzTZi/eA/vaRpxmkJNyLtCVkIrcA8tK7Z6+lGup+Zjw5L67cfYiPlPe5ke0LD6YOi2lMsMz/VY7dlqNjCB9NoAOEQdvjdkanatzLAESuMb6gt59nSAeAIPLWYnVgBAFyEh10/hH5Kyjg4NsC+/x9hYuWqj+MeefxoS8qib4ywIo4WRbFkmdQxcCSKDTg09bsAJtpGweGvBmzRWablbrSKTTS4fyTACMbZkyrMR0BkrAwbcqpsH6W7A1oFyCQjkykM0Y0m40Dbc8ZrKfxLU2Tc+iAhJ9qHzCmgB7BtPAfCCIXfc3/Wd0Ih5sN73koY/OnMaD41kRFqy2Q6TS4r9req3KwQxrB4sjW1r14V+7SZSOn5cG0oi15Y2plFgjanSphWZtQCIh4JCGR6YTQ7RBzAFtrrbajj72cZvgAGuAr+1jWS7hBzau2qwyBlwQskqMN0ZY5E3uTQZwwGVN5MSoi94iyVin9m0Njorw9fQU4QGaLyHtPCUAyl/s2evexRmP/M9o/ut';const _IH='bc83d73abf1fe919751e8705cd1d72eb278a7d9c9018ed066023300ced1a830b';let _src;

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
