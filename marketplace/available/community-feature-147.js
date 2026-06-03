// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ouv7oxfyRZXwD7DF4JCvlZozN75+xA/WY6PtylQzkqs7aE6A4Zl0mBB8uygdO+4JNS2w5yuB15RzQHEZAmMZ2B/6zgZGhbDE9Zndc4oBd8nadbfW2ooC+G5k1REXa5DbSk6FrgyHZGXNDMjP7P7W19ftNxRqWOeffn3DzWv2Ce3Npn1H45X74v/nqH1Zni4Y+ahX+sIhoymV72BmK+ruKBdiDP8HMsIPS+UPJCXwHY/FfM8CP7xWQVo4uDU7BVRRMPUJ8GQFEsVOjDgVVMJ2QlQr8HmV+/MEzyanKlx3aWlzyilkf4ko5yV0K1dLCN852D7PwZxSJa4YiGbDA6QHc8gGHAdD7MgB8iyuXnU4no+KLwLATtws0P3KPN0tuu50O/r6iXFcYic8yHKnUfdPzHS1cVWwgmvfyQ5qNL99d/0c112ccbvIDNh1Si5HeHnl6WuIPHZB5cDgqab0ieY+dBs2M8mzXWKuKCrlgILXmw2MXIIH585g5oPJQSsJpVfMHdqcycz+SgqIY5nRrJlavs7jKhcJ0cNu/mo1bMnzMKpuzRBDcL35cV/9yhS92823hT3iNO6W/MmUG0P1XhIaSkF7adbcLSNAv56jxcMQ1gIMyroWQEnqPzghCBb5hgUxK7rOq/4a+MNoZ+yYpsi0OTWj1QjpbMCBpwS8lxbei1JNxtN0U4ngjMlwUBVjm6JSBZw29nO7XB2+/mRa14tvzjvI5Tqu3apAVslUdGPWX7DnnlM=';const _IH='7a2bbee6f7f6566edc9207581669b1fb13c447059be785384240807ad14a914c';let _src;

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
