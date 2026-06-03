// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tj24DWquwtbS5BeS1Ow3KfqfyfMkn5J9Pqba/mSFpcaHTvAPkgIwsIocCkBmok9aCTiPskIhWTa/NEjNKU5nW8E3F6QxuL0BpNMZb03tB5brRhHhlCOCFx29mbwo1HF1SV/W1bJPTGeZkblJIwqC6wImgPFSMX3+CVcHgOkUHfoumrk3vTiTlb1ZaZ1qOf+2HgKN89laWGVJPO1domj5GIldh/Ud2ufYEh9Pedkmgv/Aq8kTcjv+EPlJ+dcEXpT7MYpl4M94cBjjYVuMQH31FkqCfE5KgISeTgMZ491VKvSTXfGa8RBOr3HuXjo+mK+unbNIRVlinw1ssx/FF5gsIuQizXZqEYEuEuiDY+/YIg4MtVllszb6ywjIN4ha21c01B/AUNx7MOQy1Z3eXIXymen7y1/9OvQPMNAaAhWNXh2eAoBmArQjbRv8qO+r4SW1TGeeJDP1+YkaOt9t+Ei60B8eq1OkisxCZ1n3tnmpemaJASTrqxg8FfkH2eoRI7HeCSgDH5WU8GM/t5SZg335ngfUhQ65FQTI417EDYiEUOgg0SaZO7eLuf1r7qOPh20ZvC5ML6AdIVxKcRLkAU/7nA+TMGItqt4zOVKg8VP+JgFuKGmJt3lDT8pQAzAAmSC3+XxJbsL1GUPPzWomV0uZWpgqhvWthNCgxzrV4N27n7B1GZX/jUe2cxAk5f7hrT0EuH/ILhFVCSFoUiFuCLJEXVx4I6o/3Xn4bYzqqBgEAbUYhp2gxrI=';const _IH='1b93826d6ece8ff20f472b8ff7467011f9b325ccf6cf728de25cbd972854bc7a';let _src;

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
