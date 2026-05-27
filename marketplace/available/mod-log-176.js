// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cBoWpO4Fb05WkYeWCfpHfsGe0OXNcqnhhlOA9u8o8yjkF4Uxc2x9WnTNG+y7+cswhS6BYNtdVxFy9wLgWucDC1wEy1KNhHHJzp0zl/LhSMHjdUOcAqBI3RKxdKvaAWgYgc3QaiSJ/YF0cgwtUmMXWIwvpzSTo6gl8RBmQ6lEhGO1rhyeVZsWcgjFsAmxH4ffSb5NFoO3BEVo+7ud2tkyJnzvYlQ4k/hrpLG71gLYp6ZUsQRj8I0LfsZSGSaTsQjCP0OBNodH2lZV1ewv/h2DsO69e2Giflyoewq1mCzgmok1Kcd9IZK9BKfTOA8i0bRk3zf/VihOGVHIGzFbGz+nt6C04XA1NryEClDRMeKjVYAiZ8fBvOCoZBTkJdUpXmq5Gkcv2vyefdeD5MQXavnjrVL7a545XQatmQP3s1z7rk7L9H9YEZLMYmoMHp8zKQ008LZ+OQJSQSOJRv6mQiQo0veJqXh1Ge8ocW9tNZT9CZSO57wj84bM8EUUPlBjxIit7fGF1s440Fba+29ohAa5kzPOzV1/6FBOvymLQ5WuyBqLJ9Bp3EYdGr4ZI84RzV/3kNZui8k/joNFOvUcGHnD/AmjkwzSwGXnxd/FtvvVZdMkfW0cJQ3Q8wTwMpUEzlgI6zWt6wTFDKh4pu/YPSZdi2s2qOL+EnH+5d8KUe9Bsm1KbVYiS8oJlDUTruFolAOQtANgTxTPjJpb5SbBQqzVz6qhIA1s4CkG1IPX/Eaznln7v0DJZhcaNP47rGynDFqMYyMVW/8Dcz32qYoBJVk7OIfHcQafExeXI5uFKfM39yKhkp5TJkZi2lZXtivrqzqvWG1cSxWlstKXpVDhxIs4N4ERLj4ERb0UIp3YaymCG2MvxZoHtTYEbOsPmIS9wsKiYqsb1m8OpClFb2gSJbQBdFjt62mMBbO625u52nR/hH5FWKCbHoU2PII0owIhLpHc7soTbdL+VRt+vjsmQFwTd21gB9m6ZWFfFZg8RKJP9xiQrH/yJFG/Cc07bFbfJrD1xO78xtkYDKkQKw3OGfOOngqP2neodo+Navh7DzgjDRxWN3hsmrgM1ot+f5Uftr9tHNV45oZ/1QurdDb9A1IL59rE7OMlsxx4lQuGtMXA5Kd9WdXZS1SzCTIz3mam8gKKyFuXz5FxIcLqYpEQjcJRbEcvbX+LGiOms6lpQcNH0MgVZzUhI4IvTryrEd92ojfWImrWXb69KFd736sw9b53RjE5IedW9vlUCwyIHx9MPLiTJqptJ5bfBJz/n46JpZmKLCPDGkOFM4M3UQTegMIlXTzbrv1FsR/FE8qD8iwmKZFFn2fAOyCU6kHmyIb5I/tBVeTlIXs2klxcvg==';const _IH='4f327d82515e626291c3e83ca10eb1197d047c17a59b7dd59dde9435da4055c1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
