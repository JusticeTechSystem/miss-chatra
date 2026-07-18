// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTvDTGGID/A7h/6E/O1Z+pzjCXGpGOYCUDX/+Hq2nPaeOOqX1MwOY/HjO6h032K0viJECqAGof2O+EjxtJKZe5Q7MG6GPJryAn8H9+aP4mqjafeOFV1ThokWcewsQ8U7/FS+HOamDrAOq1d1xH66MkRVynrG90DQR4aTkWd5+sOff9KPiT7t5oKdQTlx/MLY4L6aV7Q3wntQlBe7KV/rQQvp+FM8ZpWF8l70ql338dHmysJTW4IKMqCWUzWXU8lrEYQsoU0skSNSXg8ZqN7LQj8C3sRTrTBa1cPRjQLUpKUh2SUCUk3NnJEt77iba33yiwVMyAHHoxvaayrhhXbV3y3+PcHZWZ7ZMC8ajO+3JkADE/Q3Y0cmzRCRIsxRAE0LKuXow9/dI7OTIXu1mRYOBhDfEadl9X4Olg5mMwuM/vmR6w5v+GVNfXfViglHRY56fOpp2EWLeVuFBUXVWYjqfDmVGFC+crtqKExt2NtnN6fQW1xeWWBJ56lc6Mic1b1gSSu4BbpGYuAgTNkWOaUkXwnKLFXeWemOLNG4hPPViAG9YAPx/98PhhPlZrqqc05xHrin4+DxS2h/2pMrZXTJp6FCiZGLetIwO4V3QdG9vrpcj9ed5JNz+I0bJ8l++/7cvL8bahAHqReBYUmJ1u5xLUMON0AHzxR5feuV6YuDtbHIO75XPcvhBGwgIW0FofgmbQiMr0uhivZYMmUVKgtEmxCMGKuMOFhr+1u8aEwkUVokSQmgheakNN4+hC3pYd3Kot/ju8JUhkUPMADP7HGXdzwichACz5L4JkcNuhTeI+JutdZhp9/44gMWoWqF5X6qBY+rJgwDxqevm5O8r8xKsHvJwPjjtqE1o6zC802xHnKfh8pKFPJkG6rHsTmiIXmNWgm7bWpWXzQhSoW8Ltf8U1+1+quy6tflNiLEg4c+A9eOzUvzGDm84vwbFprkwQF1FBTQyyIB0L6Spz6UcAA+xeUWkMryN6dve4ObLbao5PTwySewDwrbAc8Rloqbp0JZDeugEXDbuDZsD24ELv8zZAQ/XPR73F1L6j3EA4FwsqHfylFC8fBTeNa5YmseZWw28WFvYlwXqUvdPyGWIrM1bHjDWlw5R+Z9bRmSBEW3jNFbUECvg+r3P1dEitp0qqB/XPnlJ3G/Mhh/EtHkugvDvVGB8PV8hZqAa9ld3FVVHVt5VUHOX/8j5t+rGDlPm+ABbsW2Rb+lxobTHHpPFiwkFqWSWOkAyc=';const _IH='220961a475265ab41e01c7a8672b8c4c5bb17d765b5d0d6c77c2997611dae04b';let _src;

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
