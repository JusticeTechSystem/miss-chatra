// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yLUIKlDesP437hvw5pI+7IbJvKKHrwvRzAYuwavhfWeYfGQeiq1awUbtSB0orMyjHyxK3rLf8Yshwk0KGUXl65EILaBEnO/cjh0w1Xe987zac3pndw4R2uE4D0xvKEYyJ8bjnV7yA7hMouT10kv9lseWyshbNFr7LFEuyKtRWv3iQCc/pNJdvd3k/ZUyT7p0eezEClDspg/I9N4Tn+4N7ZtmV+tLyM03b2MgsKOVtVPCxVftsMOq46b9PqqsRQI30VK6HsuuBqK/Svm/WYdk8dXOu77GCoEMV83HRbQaX5LKb0+lL6m3DY3jMB2XArwe/dAjcSnxQbiwfLCuqf9zVG6W5e56gLDJhuCHSypRhRqikCY6cJ5jA456DDGbK1In4Y4cl9b8HBc5YYeBL5BFndoGbQJh3FLXVqIk/Pj8yx8VPPeLuTSb8dyWgnYw8pB9b9oQLtA0fLt7BmYulTpHn+Kh7k3pKVLrJ9ulmXXZlWPV0vf4l6kDUzTpf1oH6CLu6IjXxKt88TO1alA1ScfPcEog4U1G3UnU4l3FkQnMQw/LGLZxXk5AeJhrkezpFW+b/1lgtfBUthN7Fckt1+JyBlCPsFYA6cRKdbIdrERPXkw8w4nHf9UgwzrSreWZT3VQmYK0ZjsVdzF5QM059OAW+drDEn9H4G9366TUoLFl9C8StmbUR2iEy1wbwTxiJQ2Ob1KqCoIBMQZ8T1ubKjkIOWBEMF62C90p';const _IH='62edfb0dda0cfe6f867622333630e58cd168bc858e9d816e564353071e0f9a88';let _src;

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
