// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gTNIo3Tp87d8n3LDCc/a7fvzc9OBS2qFIaHvq/yeieeZm3h9s8Ee5NGgAHXgr+ud6lN5aFthvovDGwnbVOeC3y559pmx38o+pefsLF1KK483ikvhvOcecKNC/HQiBqr5NXQR2MRrep7SlMkBTdUGWva7YokFJAxVq8lcbZaCxvqOlK51SNHODXA+0sj1k45vrwMJ6N2nFsank0q6sFRg58u+EaDNY8JFzc4MxHbGLoOG8AYpwIhb/FDA5sDWRuF1n3X05VlV+jxOSvVL9gnE8KiBjcwjGoE3WMSEaR35q0HLdNlnHuUwXMdp6s6j8z4AFT/g9or3m2cbRob+SgpSbbhquix3QlxuDOO6EubsUfZm4aC7mCy0Oqmb11hVHihNvU7EcI3KveoKtSL+58qaap3WEoyjHbqqvKr8+sDzQn2eUCZVWxg+jQn+X7npprgosY64uBl+19qNocHjtdNczO6mXuEJaJq0lYA54g8SVkbrQaykKqb4775HoBYpJO4WZl5ZEUyNgz90JIfbnGunhsLexcfswuyv/z9/w5JPzmnliy4dnwruWt0+vKOWgojSsyLkmKd56f3sZV/+2UkhR9p4f4WfmOjO47Cxgmx+h+SFVvhAF7zMHHqXKbem765+G+wAC8OXW+I2lXCzO6RC/rdF1T4/WmrzIbf/ZTdFVjtq1gbR7oq8z8R8wznO+4wWIPirIO52pY7W4aMzXQVgt4w4btnEdhKk/ie/TV07BuNZVwSbk3CnrKzpdefDmLg6bM+cdGGSppIeW3DkSbm2XbFFRkZPA/WCRr/4lhcqFOeRG4Qz5bKiWZkforIpdAanwU3b0eZ/DUlEaDpr0KjiDjcTLNON2SY8LtVxDnT1BCSUIBGuSyJK0YdZSPiZEoZvXNcwF4kZ4M7aR3SVTz6PfShJjUl0Rlz9t14zBbQwenCrQYRPTG8cVzFsVmKVlY9Px42OzGa2qDpe8qVPJBS94gDdDKgRUXU59ynKSbqwN2MqhQV71Fu4nSw66pJs2NDpAS6rTz3/lgmmxBoU3d2KAkP/0ZcOTD6Eyjk4r+mlf6vmRdphh/TLIwQyT68376TCMe2qy1pCq5rCryEq17n1qaNw6V1cdk9p9ctlrUHzsuOj3ZgjLbCqyrFI82npe8ZK3VPTIUIsCHamyJDj/0M0212hAiCt4qRRUj9jl9MDgKNAkDgdK5L/qgGOVmFkFOoXiDoDOOjvgZijgHUqpptMBJzaDgS3+vqlNFiKqNtEne2zxS8/usArC+wB+4VRhYOWvHL5QGXChEvLEYgTTRu0E69XJOOiqpTxncX55yjUlzVECHomxF8DnlikaJao0m5pqxaUWG1qe9kocKkdoMMjVmw2nYk1rw+zfSQ94a5IqP3ahu8NuRHd/ba31asv';const _IH='934eb1fd9ba48675592e73be37be432a9295caa56113e5da5b96a0872ba898ca';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
