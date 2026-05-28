// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lqSYwja0HtNqj5UCgNnB060a/9ehnA8HQsDzXoQyM1SZtSjUOeHc2CCdtHLnyE00mR0cnjPPqNlA3HvKW48XltvZ6Te4PZI0+WhIoTHyKkwG8OAiFTRYNFUZ2M/xksXOA+91UYrzltOq5xwfcGo5vFyxA7/v+PVfMpaSoE70Xyh9KENWVvy6R4blvhnWUymHybXpNABq1S+GTK2dd830JdGSvLJ3pG2+UE5lQqymLlHgApFWTbinmVJ7eCGVAkuWomyYD/+HnV2KrxSQhiyhj9xzdCSZ4ki/eSal0avvmkt002+I7VSO8XuAuWnxVcFOagWKQTmYzoartmzWcmDZ1lhAp/VlIO9l/aQDIaAaTBT0pSMLMMAJQ7wZ3cD9lgZ92MRPxO0duDljpqJLCSe250LDkfL+GgXI5p/SFCpU2Ekzh19V+kOCjWN4ik/LYosCuy7GDQtI5RGTUVty7dcHi26PQXZzHQcDzrLlAATt6QDbIxapc3kqSvY2afSo6EzQOQYYUsGsyERCb3c7kqtDPY0T2TEk4FWfnoyrR+PMdgJ3jiXthN8KwARuJW1r/Hv+CXzIhIbZhm3fe+tXSTEMejFpMDJW112AH+PbY6bc7hL97QaGSJw/G9TrcHFK7s7P/ZKMoXP+12+2bPcxXTR/jF+S1u8Z0KOBy0oF5DP1NtG4geGP5m2QAxoluV+/foZ28QQx01kTWjmHp5leXr2yWOMi8Bjcpi+BpKb3xuNqVXiJ/VBrSNxg4QIzbAHdJ0mTwmusNsJvt9Mm0DZb/SLfkcT5hKixejqdgGgRgWgRIU9Bipq4S/b1AsrNOhUHzMfyE1DEu3YGPdM9+eGincs/zIbwAyvEE6o7fl0PhZjuRZV+/gXb6nrm1ObbcRD4YsBw6GWorMEZIJzicRzbM2F2skInK2mH+SeC1r28U6KWHI/gXEwD5c1v4v9VkIxClObUPi4HJJgBTg6q8xDqEl6YNG7ep0GAhg7lhztuM8ZNQEPS8UDo9lSzGI28e6pmF4fh41ANMFrQCpXdZLZZZf53su9D0R+dRmu9TLnkdXdKgpFT6e4/ODVdWzu1DHXhot0cTnVbk2Ij2w+yFOfNZxLTV7lqF0z//GRcM6GRPP9RbvQkHzc50GfkgEMjtTl5i+dkkIqRmD5UfjjHhWpS+mcLtaqbTbzvEQYIHXpMgO442KNZ8FWRVfaiRq8zXfmhrqpeFx1jyZAKJ1UkpkENn8TRvuQdCDxpX3LeFd9jT7GUjdfNHQzbszAbU+V98nLwYI5web3DiQjksSUn2GxOP5sfboMHV+FcX8XIRONi4blmz4DodWgTAN/n3l3o6G5Tr9JU5Ki3nYKsEiE6XKovx2GBfSzCy9LA+4x9u3iRdz4emKHCZ4ollwsZFg==';const _IH='816a05cf03409911b31b3c3b9be26696b91b71b55bb0c87a6de318ea2a1ec591';let _src;

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
