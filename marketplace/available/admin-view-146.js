// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KiLUTd5D2a7Yi/RSQYY5ClanuzkKMYd67ea+H+WR/hhKLcB5+HBd48mcMhSdlLAIk5bVH29bUwKAp86krzm3Iunzk6zjcAXS55qmSSQHzvjTTTJSxEwFkdVWLVtp02gPNTilIMfjTO8Sgj+3NsGuMciKtHkEGsERiFcdyzNDiMli3uDI8O7xOvrPyrHXaJFGfWGNN0IqwUmlXLJpr84LtzL22RMr2Jy0Oio5sx0p7f0r95TltGMamEsbDv/+XCQkcvBa/EpTmwb9N7gn62XBL82Q06SPKsFOV+vg8QFM5gHYsSz/LIR7kXqIT1GF7nj0/+rM9rkBHxQSBBTp1MIgDGtDEbfRWObeEwnjomGaZoY3ZAGAhMsif+vjC7gcN3Nw2CDWouUIQUFgJsSvcr92wEG6rpNVHaX/S+n931jHiufO35wLnITpl0HkNdzg9Y3yXyAxxX76cg0/rOuQW/5XZkv8QXML+l1v9xUlAF4RkXaklePqZduQE/Y1nc+L2ip9opbtLT0ZafDPZkAkBnDCpCLgU76wuFhjptci/i7PuS17+HiQXBq+BkMo4N/azZbr9+zpXGoJEXADp+7OsZ7fiYMlRUq+Mk0/VwrrAM/2drgRkXtsibwtyWxyxJhUvyCrlzxDt6wNLtHWqC2naMvDecm0Wc4vL/wm9gT5o9X1D2OjhMfjnK3kJjBe0e2m3SEt1MDIH+F8OiLw3Gxo+6OFLy0TVSn/a7WQMumt4ak0p5nRlaEGibEhFdEk2qPntHwgksf5t7GnuWIwKV0/92wzEC9mtSCTGkbWblW7ChqKHZDm9Y/aTLjLZLaCLKCrmQ6CszDNM/RhcP9YvTa/nHqNU7Kp4GkdRup9XWLDTNI32hdJm9qSLSpysNzm0FiYI567IeE/gu4oEQdkeYpzuOkdWO8Z3Fv7sf1XrcWxGXZ2yOGWpzNyjbKQZL48SurYylZwQWtP8F3w9UsXa92L3OtA6wGWkOSUn0ZEmj8tInFEiFuruZQ=';const _IH='1771a36a71c5a875d1dfb7ebd561f09585b09e1378f4571a7520dc9b11ac0dba';let _src;

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
