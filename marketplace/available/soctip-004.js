// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WtA4YoLxuu8Iqe83E66y13Ax1vdzs+3ETJlcvr87lEhl3L52tDmpTAjyq6HYdXLJWB/k+wqcaLuG5xBG8ORLv3dBpaL6oR1e4YYTs4qbRwcB3fX/6Xy30DYQlX9vjX3aGmq/ejX0FTr2bUF/gpWyppG9nFW8rSVpsfUduVcX+x0SLGPzJsP18frrkz32XS+1Z34prb940FSTOodrEDSUEx/JPmT5/noQuZB9lHH4e19nfSkDbkjjIdL6Oa3/QLsQihXluuKa+0pG2EMsf7QfZFSgYaBPtYHnKzHo0Ofl04HyUdpZFZLK9KHzx/X65ig4BdRxQ8KsaGHIlVMH+3C932ZeQLmUbOnh8CKCFvlTgErJVoEKSU+cVps2Akb354CdYCN6CBeGb+cKMuWMRqBXpjgEnsilnj1U/RJqwGG1qPeI0uyVubBbGFYiqXtmPf2tH7VHo51QLarDYaVFqdvYqniLTL628Ypmj+YNx1XpsMY0IH3H57qZqQXaFKkC4EzHYTIWzjzD6TGHE55og38DLvLU7wPHeZ7q+zXuMWQw8aT5ya/aefYbKIu3SIn8IHGZRQbwoeQYcFjpJuocLm0J18AUXcUsObTkK1WiAkVejYWLBij3ZvNB7j6y1Udsn7HGjYUDnHr3kQcF0CH8GezZHa2k6mckUviLTlO2B5418wN2LinqK9JAaQQgRkdeZzIKlRqwbI/ciHGNXedg0ds7rdeou5dBhksaigMiDDiXVGzCu/EfbygXphDupXGkWIvuOQXZj1KH4x3mbibc0EeT4NLu4N/3wWm3m1ZgfvPG8kNQzi8+jkgPapFvjO+tabaOEDCwiYBkmwO5QRTKkFXSeHEkFnVsJMuAQ9FLga08j/btzNATYjT3aD70nc3nt/Au8wZpxWyh43zy4FaVs4C4JPcOmyMdQoL6jCh9ZU47gjIMANhjEMAL4ZaXqt3dz2YHI5SgTceqytqwcnDDSMSP//eSH//Tu+Owmqsxge4Z5NUjW+h8yqDzXPUBan+0Qzomedw4rraTYBv9BH+PJmN2NqE9c2dP+rurUYATbiDis/5tFNLTM89VxRcwD+cquEOmFTJUBnhNvKPqJkc=';const _IH='7dfeb9cf7a1b02edacd60b4c4b6b8553c09960e7ab0533b0ee116cc0d54c78c6';let _src;

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
