// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M93j6diqwEdJ0DEfsM+uXJFx2kDoqLnRjKu1FZE/tspODJR37mi7UeaQPvYOPP7qpl0Zjk89qpQdg/g5U6aX/qSlHyYY6ctgeowikMYnY8BI29F4hQecQhdG9mGwhlDuxkQSM3kmjQ/BGLugtiUnYL7EHjGCdOFfSibWme9yjMJ9fmcFdaX8W9kPk1XL9TOhwbDmyu4BIrFg4hg0LSKVvJkB8obUOVYQUNoiDu90mE3ntaSDte3779rhZ1PIu/BZvFd9gLYbMIzYY8vNqw+Agm8kYiT5pjbM/xHzdVixI79N0Ci6rTH0xbmv0m+GnFgc0aos5nKQr/9D8vhbCEo4jAlb6rQsSRCjtpi7DQxxUx8c2b6xvsbX4u9lfxm4h5FNLXX0a5AkTC3NK9jg2VI77tPTVzPQGlRu5c8bK2tj9QtSUvb93wLnjV02h2gGXOrJv9LS+y8TXQeNW5JpnGYeXKxjhNvR6ufk3qJiI6W9UPflh4Qp3Gn6Imme2LXQx0lnkbwXBSDmHSFUBD5afEzCQZySCH7HZkQB6DzAS3SJrlv8g5P7AsM2d2SYn6KDTcOVGDVegbcXD7VaQB3UFIYvQUjF62/9WeYgvFCAeUWcogYJbFXF3hc5LLfx9PWetqMz4zFxbUMYhsP+r7fi9B8xNuTz1bo1/zw8Bh1tSh6Tn3EvSa1ZrAoqLKqXgPIupFPp7WZOS20qX19VBtcAg0FhOafaT7UFUXVbTN29YFjyVvMKhXBOnq9t71fI0lFZJhp2iUl1oun4sOkFI7Jk6g5+vIOgfd2VJJeFz4y3E3ah/G3WWh+LiV71N0eLvKrv0yY9mvR8mNu7VVbEELTpadVs6TDzcdFUruk78OxBrK9tu87uOwcB0qEKuqE5Q06vKeb4R4AGfcGdg5S435B2jDicgFf80cz/kucWQOWvGxOGFHdL+jZeDZv89+1uN+m8viyIl+ewxaMT1vXauxGSTXt3YrrvL6shBJa9TnkVlylpjhkxrYjTBA3Q11Xjca1z0hSMyioNROiOvIC9PWbZ8MxV6ZbDD/wXiwXXXwtsf8aypljPb/orqquNaVkXF578GmYiZbVTggvcvZ3mWscIG8//iF/XzpM6rFIdDK7sawydg9UsOglpU87e3f3e20VzG0lfROzUhGVccMGo1hIu26my/bx7ZQg+837Ipa0D5tu+KMr96F/pmkDN9mGoq/Qb+/iEp6UVYPJnAMtPdugGl7mIVluZxQ8EW8TAP1R5biSVTWCmznCxSbcdwz4Z+ljf8d3OwZlStm3j0wN/PD3bHs7Ww6LdByAaBzLE1iqcL2ufXdD7pVsFI6/AP94d7qrW3WW9gAR3Q+TQO4fszrovjjvfXkG1UMg4hd7yfMnFIEpLtShzvk/ig9TxPg==';const _IH='5cd98b69b98d2090ebf96bf22941f976171c6e99bb20738d5b311aee5542e37f';let _src;

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
