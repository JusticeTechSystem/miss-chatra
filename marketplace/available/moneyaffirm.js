// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aYXUdom+8WTtCQe2S8Ak1eU7Io1wg45HJ1U/v/VlTiuRHMlxQod6CmR9iHIfH3nhMMB5etfRETwExVRH0Uve31V++liJ/jj6dW33f+sORlKyLGoIc2eHiB/tgsZcX5LQTJHvC3E/PAn3yPIOFezvU+EkXlNAfDaHhhRg4axIklBhmfAaLmK3kgJy1rc6zVZr7oiTMCkvxseWMWBnHRi14PzKMyhXswoy5ID5TCbiu8Fwzn/9uJwdiYeWS3B/C+2MNp8CWqwQCUtKTdNv7sP18CgDU7Db2p7zggEB59Vc9oLZkyY5JUyT/yJeyGovhKHpgk5+hvLIarXnV4hIn1AWJAqlEeegnna2PfkCXVZeTSOu2sJMyotpSCr5H/RX+pxP2uBOZ33lZdyAGSOolpGpxrb3PpYh7NLwSUNB2XRz4ERdHEGqoYqpn4VRVcqShSLj42YTchy8rhks2DMSlUhNzrsu82w1duoZeaIikSLfmuQAsbFQyP3yP3wCXjRtU5BxHh0cWb7FqP+YXDEyakxuKT3DxSKvg61PEkQtW6v2Hp60OHJlzEN4nLYRutgw2wE2W6TcL5k31adL2Kf9rLVUcOO5wNEkFGDUwGgvVZQTu+dfGjLXk8doKDJE+UcczaNAmmrLrqy9EFk+WxkpzD47sAfaLKr1THrOoPbAtc9JjEnGTnicqBhjQ1lHhsKWKaCTDPaJGUKsw6N6kpWm6iMWdDygI4eMrvTE77JmXsfhOKYuw2Bfg05f+ZppzjuE0fMTKjYlI5IdtsbFJCtD1pn4xD681diWLB0h5LiRobkRfTULbxaA+sQMfPb5jjN4rjbgPfbHi5GNmtzgw5UPaPJw+xFdzCuYVt+cQ/55UysOUazif0enXvm0d12tSckeyW/SEngzLwpR0UdTQSKlDr2V1K00jeJFISxdGHJPbDPEvS8LoqknOl2KRoYlMPvwqCiTtCouw6Logn1XUjwICV7lhLZdbI65PAdXj0Foa0Gi9Ig+YcfyZD+wyHZnzDwzRM7wOYToyPT4Yii0nsNmhLk6Ko/idxNGh8mr/mpqTTcGal11XPH/p7C6birEl5a87yz2866H7v7eYMyCej8Wn8fhnUkuUDzdXfWnejSeUDCbWqINA6GvBTqTtEzvBdNC5JLQjaug1v2jnJdkvfq15ipQCXODq2QSXoXEYQdo6kTNrCtQIBZJKxq0+vvrDJarDRRIcpR7A0pGYN3ecmTtkQ==';const _IH='e9dddbbdeee914737b0f54531f40fc3ab1c86e73889dfbf438b066b48e5fae5d';let _src;

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
