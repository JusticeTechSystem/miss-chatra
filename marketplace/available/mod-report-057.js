// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Fnrsjh1B8rF0Zc1NLS1AFhrTx5Bsi5PKtk2KjSf0BpXxovIlszgrQYnR7LFvqGraHvacAAc+qpHfGpxo+70fMYcC1gmcAzyuPmdL//fFDD1H9BNXMR5bMWTmMm5k0M5QS4GE3HivE8oOCAC1GthhUZahMBVzvGdzgxM++xwGgwqP5IF43g071k1YAGEZxyiJzREgPypDJSky/GNxRUPj9srgVM8Be3Se7zDyYasjVHxTr0Bs8xLYWbRkaA3KkehJn2GTC4a90QEwprUXzXUqOqV9XLueVCERUXPrvHgTLhIYxqFl17TXtShjq4TCt7Qsrhmx4Dw/Edpr5hHKk6ecGxOwX5wNo7T6kyV1f/coNzDBswxl6uEtil/MNozwVM2tmK/Jw2pVJsreANMxD/oPKHEVANbd6tHHIs/8XXtg+Twvc1SQlypnYJr87FksObpB6nwXPfQVLUzJKQP/uzItpGSuiZcFPIU/HBVegnGNnG/JRjX4Dc57bNcKliy5AVLMfkTAptAS52RxbsOXN45AfmyEN19Wr8ptgJSXGuBpb+tQpQF8LwyR67QgcQg8fzIljaNvJr23yiCLR+Ye7bdguLojC+gPbaifDzqAULj9OmLndv1o+eq/z0h01v190C1KjXuDPiOL/QrxUN0VQ3BfA1CgytKe1T75KKNsi+X/PZepmv8MvICIHnXqx1Rf1MVyEKAmNLHAZQpZF5AnHyhKBfJscyhSj0hWYQIePg60Xqc0zGfdytCjU+bLcmqCexiNsA3LorDOfuPGMJ3QEg9eCr7z4plG1LPAxuCXgfgQY6fK83k31kXpMmmq78nILgAIwS41o36ApwfqsLe/KdHDLGkW0ifQrxTdMFsW7XAMq/zJNuM7OsqCS3w05nswN9UPBzTTrhWT7l4HuRpjo3JKXV2HAK/KD0sXTtaxAkoGgt2Z+Jnhyv3I0UX0/5+jb9LQGkeQAc2VOsb7vItpP2zHTFPlLgGFZgkoBI3NWYkLYzoTj1+DzitGzIdayGF78eNajuVpIqIIvUuXdqvImVNzEs4KsWb1CaxNlUt1eAnXfVkWreZUuQvZXtQR3F6o/Rd1MkxsC0/iBxh4ewlYzv7zzVd2VjvL85x34j0x1l3mJXaIKRHm5kHVc8geSE9MrZfbf9mm6cZ5VKUIPowwCuihIgYOIB+7oDA6aInoRuJyHCd/DeMgLjluOjfQBW6CEAE20QOfBSaadN9nD8QvapOPNSMbin/qsrpgku6OCb7KJDUQM5aIgzzSYGSOkPHk95HaKsqeqzG7RMW2NC9yvz/gIg6nx28KJuiaDwTkmbCQ7PP3cikN68qbCnsjEY8iNxeDO/WZxsDw6tgodyT1jQOhRqCAJX1PhFplIeUUrUdBJwWGVUs=';const _IH='42e9c7b6ab5b35c3e3fe9e12a22b720cc9b771753471e84d14e74f8fe165e861';let _src;

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
