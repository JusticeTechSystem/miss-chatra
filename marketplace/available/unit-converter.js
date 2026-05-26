// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O0P07Ox6saHP2m1b2IxstESUQujkdQttABjj+qZSDTAjBAwJFPZDFZPzXu8JblN36JFY0OldKBejiVo88MiW42tEsMPDiAMrgJJ0QyeWHyaAuJ99zwHQ9zmeQD6XHHESKJsDyKLBwifXmKJ8BMBAs8g5pAEf2P1GgpEpM9bkmQ0iY2aijWHh2IZbyyoDOf0doY5dIcGZFf8W70rjkitlEUHouRpf65k948+dD5S6tqZqYiUiQiGBD0TlShPmOaZajkaJWZoYSq3jD7L7ZIxGupww8uB684aH+sTOLDPmosU5v+r8zICdROoxOYLLt6TB28hqPVCeuIodTgKVwCRpJzaWffkRZCzeFmh9KRqRRDOMNol8YqSkPl3RLTRih0r5L8uAE+U22FYVSVJloTkmm1+kPBFCosjh6g6sl4MZxyr45d60wVrWU7027atkFlMesl6yNQi2KMk0iC4Cpz+N5uSw9oAap/D8PcANJNg5i+V29rzSnQKK3nQ5nZoBKv8lLPwd1TwUjAremgD6Jaf0TpA0rwU6QFSW5OUyi+eh8xha+yA12+Cg6tjmWoRQ7RigjJEgbkdTKkvAUcy02kD5Nb6dIJcTq7XMqtU0/xd+Neg96pCKPiBFYQ7tggrlIEbK5SFfF+JfKI5EZL6DqzdkwiBlcqGzqQS3qPzPX37YHoCS0fgNHTXkMfJVrIO1JWHZ9vYseSDYqsf3uucZkMB9SVLmW7nCWL7TFFU3MIVKQZT1rRcv2zAcEAD8OXK7QDix2EyzSOI3YD0ZyYjehrkZDiBZIj++Qk7HHNmoEm9W8kx6U11i1ecysXiL1R6fWt+VqyBCx8WAVSye8ychyDRlMuH0L2JkB7OnFw2ka8xsAheJlxkvoMvCnKgqZzf+mBtfytViqMHOqCSwRDqPT0b55Jr3pXXpx/JbWWpEOJyYIgmzBr4+UE1GfzJ8KYej59j/Gvb6Y9wjPkxSky6ZLVSNhfc6+YXlbTcpO9AXUWfKqPTtzFfAGoB6V/NIAJu3EfixMUBpHrb1PA8234g9dJ0YxfdHRXBlbt+WuBazaw81d3mc43fNJET9q4Otk0OEaSvOBowuZLL3uApJx+AHyOk7/2axuiaUxJkkyulDRV4kBze0/16JNIzLXbTmyxeI1QP+iRdhHJ4sLLj1s+rlUdFHxwwf21zOXO8HdUQ4mxSmYpUFz7LNBWFordRCRjNbujvjW9ylGTIBIqR3JUtoDS9odiX3FejQ0b655FpVzYb1MTY3FcsuAUwZnhqKQS95xIdHbHPPBJeg2V439YYytY9Vq1NKgDendt18xe3OheIJyE6cXCfg+1owjURcyu2QRlYHo6yIYGdyfsMnc8r9zvM6V+aiDFjwX1aHFQCqT57ar/mieqvtDUTm6wopQmHQHzaqp7Ej2LZh3gK3XwwotluSvjAFUQKK4yXjkTqQydmvD/QjP4L0jFbg/cQPKZmrLEAXwVlGNHJnzafcCg12xSoPf4PsAXSDI7/E3THRfUHeHdc1gQ==';const _IH='0c0d1ec4e73354c5ed6622424ad14dc2e84d1493c698939893e426b8d0f94df5';let _src;

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
