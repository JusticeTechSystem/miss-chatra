// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8N76eZAitG6MjcdATnYPa+j4qpD9J7+1zpIbzBOZGOHa/s7uMeVzhOzgZMQ7/a9om1JrrTmjnCSuMQZceyM6YEQt8cPuhFtiP9X4Xb9eUuZPXw0NB8qWiCeUryFkMTfd/XPuAvBvnkTDTvfP92uzcPRNGG53BnG7wExfaRwjo4l4Wqrv3B4o/E/Qqugv4qruFtovMuK2mPw89uUWorz3jH40piwJDmi+BAXm6a1zpEjfqPhAJIgvFGQQIT+iQaskPU/cSNBx132W+w77AvriRVKYazTm0/rCYoLM1SRChjj7lMJwoC0JKk0FtL34rdtiK2xZY5+JqEg3ji2bz5a4dsYbYE220E83ZdoQ8FVTb9zU+xSIET2Tcoz39OeuBltRkYqmikEuP2vINlW0m2e+XEatsDhntdcpgszxOdOkLW4yaMqJa5WogR7xuKnpHptxjSHrWMZK5Qt6qE0BuPPyFZvYCvxtrXEh/BPThjNjWd4JsKNHdt9zTHKRE1yxWmgsQWSY0RJ44424hKUqQjocGdbKjapsq8s5eOTpFco9P869xKE+xW7u+mNapKp62PZrNQ1PkvdBgfZ5K82ScWT81g0m/2dVDE2no6HspyqAzBy75ljt1s7L1VoqXsY+1zBvdJtJe/17QCgI7ZJRG06cbFCAjwjt3lqsezvas4PmUSNGv552b8LiSJoKqvw25i1q+SMPQqTZ7EQAmzU0EOs7LJfFAtthR+W82YVjFfM3n0/itK/XGXtZfTJP3yxnMjmUh0XjpSFREx6DdMI2S53HSrbed2DJdQcz94tqcs3XY9fNtSqI/xqykRR6DL8VDFDlRB63sG7z7rKZ6JmINHEAbvl1mmqUqJCzkhKrP14T8CmDqFKV3xzlFKzWNOcocJzLac96Ybx6qW3c4JZ6oIuEQG/cSJVqQQyX6QT58xW+u0tKfNDlw7GBvU7UUuJ3eDCmXYn3d9eN3yuK5TuD0Ekj0oFvzJ4Um+8pN7vW779qWcWOcuG0AWjDPnlJc4YgAyr1gbZxSGd6qRUhVraUhQa8s2kpELuOroBnV4dyU0YZ9xI2ERiF4ZYjZ/vmdYNFXdtSzcsgOmrlfG3BypsBdFIYkY8vW0P3gqQou3Z/Wvn8V9TOqw0coh/oDP0CITql/Z0a2zM7ZvkdwRmJGCfijzAIkDrWGkoM10XrdrS31H81X/W8FswuzkZg8BoFqPF2pkwQsRl+JcTKa9Gw1V7tqQ0vhy9SryIu/J8bz4=';const _IH='a73018394f42a1ddf0cca5d935bf100999e6eeaf8e049145891fc4af1a32981f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
