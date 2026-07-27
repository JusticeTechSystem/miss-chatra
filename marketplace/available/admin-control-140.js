// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRGV1pm235lPe8ioq+UHwrW6Km0mK7nkr+YcWGSRzT5eZEAIxCl4640vniVeiz32bmy8dIpkdtLVkP6FzLISblM8LQN/C0cPnrasLgNRSWkpcZccvB3YbokxlopInytOpcrnwe4ul60RcyK+6LiU92JXtv1tFCB9zHSM5PdDu82BooAY6giiEeHhYn4JyXF+4Y+C1UjnBNnJ63cHCy4FT5dVdmE0de6WPL/6JrjX0y7FSuDmnL1zrP/WuAJV2ltr0eS+MSdaZgrpRL0Fwa/5+w7wRGha0yURHaVjz0D+wz5Q9mQUgn+MbSbGXjGcJiWIswg8Pu0lnUq/lcgSdfkwWdMZh3YfmzoyChkScXWXmbub7+i7WE0UQ+ZCie1D6WlCCCS1CCakFWuqPmnV8z/TxEcFqMMwCJA2U64oqhODtu3sZoz9zHeT6WlK9+hmEUdnfqnC3tA1HwNtQpQdJ2FkZbBAb5i/XfGJFBp/wQDjU/kfbqsijz544yFiR6vrOjeoXG3YhGXHF9dBNclna/pYeHDq8TJe4BFMBeVN6GvXTYistVMF7REXNrPiQoj5/dJnlZWxfNUfTSQPxvz21/96pY/oS11/p3HA52PglIQZCinyJrv8hiWYUB64HSwnISavT7HZfaCG3nLV3PI5Gon+OXw/7VGR4KPnC4cfiUSMHNEIOWf3KjshdZMReaPrOBbrcMECRJ1LqVv/ddtWmPmiEZQ4ENXjZcsDGr61Hwox29hquVkIoknQEZfMSfvqp9ao/P/k46WstWOwolQ+0zJVMqKYVHijFFoVdqg+6CbYXZSYNRysaZdrflDWgw/KYgwRGnrwPAM2wMJzwHXcYZK3mEQ4d+nSDuTVankPoYYhS8EeYAV0w3Rb1AocUncd5C6TP8i73qnBRJptISeU86GlYvANd3Q3pttaH4eJ8tYhRXnpeihJVpddVkzsjmdCQdBUL60Z1IkSAD4sMxUaE69x3PlkUWdctZnBeuRGhpmw5KF+hKACX+CfKAdn7HAPKPZ061YwEI6WautNw==';const _IH='492b3682dd59737d2a6c0d98426eaff82af014451955f9fb44fc6e325b1d4978';let _src;

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
