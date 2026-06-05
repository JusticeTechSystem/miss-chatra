// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AI7jSX6etMorT83lJuNBqOLT0ybbHnFCEtrrvEWQBYmESlmwZq2+za5zk7rlpOZoBalMOqW4y7T6naqmwC6RbFPPifyEmDWfAYp2txaZ1bdZIirR9f3W8nbIZfjXN1aWX6bmwY3BsvvtJKiSzV4PPk8YdyLMg8Bb8lx2G0klSiudt2O0tFYrKmNWfiLXQCcYW17F8NO+Bm8l4v+30UAFVlF5xIdFZrO0ck6zra904jkevw6sbWYsIGhnn6R2o+N0BzxUDseJSD18WZ7pFjqXeTzvmrUih1BZJZ/QZVba873LqlPgcHS0UXFsr1Oy3kDyVNCIEPPEtLRSZh+TGIEy0AkxrQ/OU0eYOc6wPp6Yn3CWBOe0FrXwvUj/Q2K2BAK0N81c/3oCmhyjYHFNVyrgn2W9GXe2f1+ohcAR/jPi7HVz9b7XTCqKVwdTCLA0wqhEX9GVY+tgF6QEPVpkOXKt7Pbu55McXSiKwTgUEmyMl2oBFPtTOzVvsxIhbFPgjfxLcLpS2axxBPbWQA3QLXsY2d0PjNlOj0OP834wxG9LqQtqROEm4D9l9jN5261ya1vk8phYse06eyV5UNGqejN4mPbMZOsapD3HErNvsQ3teGfFUFLqB3mOuWPAAivzFMNaKbWg9FpzjNFLBb/5eLaEoATMAZHapFa8A0BDeykAGLHSI4chMg6ALdozuyiSDic9udKR7Rx+AyzHBmifd7CZEHsIa+4erF/y9GREfLM1Khsn/KqEybgP751D/bkjHRq1wc27FRZUS5N33lTVZRbgMSsD8LHXMmg5SrOrgfaZGmCtKmR4pYQmrTjeIcr9Ub5Y+r3CXf8dPL7/hsWpx1IExY0i/6WC/mwve/rd2EGJOU+s5fMUBkX53bALbxzkC/445FjXHJtJkINTwO6DfkPsIPUN9pjVFeAHvfbnLzK/tz0/MblPu58ptwo5YR6Ig4VSoRBHaIGV0nWwngsQOxredHmVhXZUta5+YdLPgr3ox/hGwi5Nx7fEHMOwP990jaj3CzA/ZULnDVnINObp2dJh4f5aoEFLD3md4NisjH07xthndfgEZhOGhluqXyVqKv6A21wwzBf58GK8l6d1ZdouGjp5+cvv+BnzkJlUVS3NsyGTTzkssrqfML2XQ08yC1m8Z/7fYLTI7qciGnIPEdOuGoMzBqubyKObs9gQY5EkF4DV3gyEnZ4BNrctPgALAX+GHhppVLFnEMoPXfPCrQS7UDyiahMK75LeioPpmc4Y3IxHfpaaatPA7ggDnkeIFLdLnmhmPx5ZLNo9eV1+N3NETbZ1xTUalEY2kR9rV0p7/+Kt/CfnAA9yqxWN+KontYXk2CwU6bCoqUTOZQ==';const _IH='29d79421fd0f1f842ee57a5466321b8f366664819d8c2abeafe7797d33a9ef09';let _src;

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
