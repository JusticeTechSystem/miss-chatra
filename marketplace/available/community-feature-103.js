// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQcSSB+uWf+uLBmWovawcqni1bQ+EcK3mJNF/Q8GUnXQukI6IEXJ5ULt7Fx+qQyEqJQNTBAiZLPGkKKBUKd1G6OR69KWbTfcW7lcdCnder0+rP2grDnN4Q8sUdGyOYUUhcJ37jTJSZmn0RBeD4mN43z314v75LB3nz+vmV5ND45xGBGMuSJfQfg5JdG0hY8i9Sp2CJVecpZAWJz6OnOH7mMqkLKQT8fxytbX0etn/bKpcjgolrR6YeNHLCzBGqxMZJuGR4ofHaQ4V7Rd3A6NP37kh+W4ZIvfCT6McKLC0wcBCC4VCIQgtR+nytMShQ7qogHqOfsroeHz55xoucP7oW0KiyXKCk8uJMh6//DSsPnw0oWEvi2ENjB9e7UVIMQLFSqXqvOhIjFrTTP1jvjhV/8f1T3F5nq4PKiZclza1mLH+36HH5tgHlHo+Z713GvVZ6/8pVtcHUxiTcrdjnFhvnf7z2ZOQ05L9SgpU44jyHmUfYHNMzpL538aKXiwPwGVNxfKqVBt0s565MbhT6HLMZv/of0QjNdHCAA0m3I9kW+u+TLk7/WtnT+FgfhT0fzmTyv1IT1QxTFFWPBK2sjLnydDxltNausBJbg1N2+1OpJhQxYe2nD9Bu2/VkA2MBs62qRHUz/Ug4do0Y0JlFpC3mDRzCaPcsl/AnWyfBuKnwESk+sCcXiFSsNmyf9QJ2Oufv0t4+1oZSImlijkQ4KnQikjOdjBCBnmW8Y';const _IH='cb208ee556611c32c41d60a92bb733c8baccb3f67d5df14959aaa1d84f739a66';let _src;

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
