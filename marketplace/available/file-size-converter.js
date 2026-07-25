// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSkwLuu6AO+OouOlQxDmSbr09moszp88xiPNvIZGkaBvn4wLJneu5ZrvOyh2sniX7j2KfUX+kXUBUtCTcz6wUyYKxFvfwVy7w5cIxeSnyS9r3+XYazKk09fS1ZsJaoWVMvkW0IPK6itsZZbdq8p+y1sgSmx2eIzLHBN+wazecv16QBMgBlFB2qlKigOp6v6lo5m67uQVnVlJqHCjmuCSzSS2pQQlw4sCzq20o+0kjfromfuA1V07pJrYqS9XbIrHgz5UZ+hH3pKoGJlrUMh9n8kzRDlPFfxQhcWORJ1C4Ku2p3xVzQZqThN3kztOeCCJF9OnLVqHykxRA32J5v5euDzhF0cYWjvQKy0NP7ABq4g09insEmjvpcvbz2k0jWwJ4s20qsejiTkJLbr6t6aCRovisA//hhWWJoNi+SMvNNEow20bmQahhXHABymYWa4jvAI1dv7ekDWIYmTWs4hsDld7pSIRbOZYCmoabCo/dC09Zd14DXRff7kvvqxrHAGRxicg2cguQs5Us4OjvlJ/AMt6Rs4mJTQmE4HO0eH2qimetESdjPnhdWdE2sV7/6eQ06KI/tBLRNRHDUdXd7egVvYnOr47io6CTARdgd3mohIZC1ePc4i+P++abo9GEtaRCHCWSyBiQx/3uhXwNhPzW4Zwlje8p33d4gK1AAoKc1c+PxiA7rew9sqVYhlLUxwss1yCB+gZjjnd+dImrJdT0USoJryfeXT/w1vmPdZ7J/BFBWy0nySrP2WbZ+AIPBDCUNEVPBxVEOnj07lvBiNhepzxnkWw5alZiTTfhiMzjOyIMK3NiPjK61Jv6l4LeC1mLynyjrrenp7YpWZ/gyLwz0o4r/duHF9nFIOUIwkNydGsi4aHuvLj3DVgMM51YYSCkw+p0zavBjfoP/7am1QZvUtp25meCn2S3fkQnWnKArjZollo4SpZcDB9Qo/pbBcLvCyIo2NfEECc+syQBt0xZAO7MnCXU27FEMkwjBngv2Ln2ffT632tesYcasrz0Jn8I9wA2xf61DHisVOeVl3hsgskDzf9c9genXXxRWlQFU8fBR/8KHnp9OBOSfQ/YYzYfa2i7RepH5WfO7JfuqcXa1V8k3y3w0QXPys18APxmXISvZKpd8fE7KlxFkprzaWyiE3h06eC+cvei/1j2g1wGVrhZfjhqUjtgKMPtMVdxUkmB7Qb8j+Br1dMRZRIUS+fmo7qOTbN5BpfvU2ZJPYK65oSyQBLyATqgTz1rHd4iAVLEhv34Ks+taWTW0hCs3H7faEeq9aZOWcWaoKAF1/YyB85BtdBFZn1k4e1EPyTT9GOFaJe3pok2W1a35z2puJBn12BT9MekpjvCcGnUdvGCTT6US/qVLi+lb9B/oOhXXFs64Fpz3BHqE2JmiRB86Zc3hYxQqH40S2ep3s1GEW1f18JDIWkqdL8BnhVYBT4GPahtDmdqSgMLJnegjeURXdcBhbA2WtrK71jvujmCGWxC0yXWJWh5t3STuVcIvCmHu6hl5RXnqWPoVNAV58yMJ0a+prA30qDFj1JJvHt26Yk3TqB0LgPFWw/pMdeBnH1Q24X1AVDH9rFlflR8fTDa1toENtaWJi2RK6vpfNsz6sM8BDkNa9a4BHUnSHeoG0fMhP31WfifikeaUr4CSHYq6r0pVX+QikYtJROCKzhH4cQ3dpV7V3tBGwmzLnAZfE6e/KLJxiOmEDBeeRnGmDadB+VNsZKBws+otLR+dUhfUIXKHHKNmKZjT6eo9tBBS96X7+RzrPSoVfeUcQyw7ZHaGllw+RgTpCt0k0R9MtnzCYcpHtiPNLcHVcru+1pX6h8Whskbhv';const _IH='83a3f553efb7a8c549b46f66b08bb86b58eb3b145bc7bd6ae559ed5bdc3d4f83';let _src;

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
