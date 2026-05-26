// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e01UqrSthA7cY9xvyXEieTxmTlgfnkpZuH1mZxb0aX1LuU9/gNP+fEMhMKFUF/Ke9jM3XyMSvY9V6imCg5R0zlcU2GFM5ENqnpbNVA8MTxVOwoUEPLi2mCabkV2pE6Tvu2UtcCXri99ImwICRWMKSlwYksDjZYgf/2sff+r3en/RdP3TbaGfbSZpKhgG8qmf8ZlwdUb9hsFyAgKhLQX86/VZLC7KBf/exLncVTq9yDnJVq3oCRZO0QwvE8KUtMrTtvDL+bkMn4o6iiq+PswozTffXUgY7cNGuCuwc5+WY6+qbwhrD04yZ0Wl8rzbzk0LjfkVpxCHRoR/Et0d+s3zNOZt8mAinm4jfJoeEMzLhZcKI5soidezZsIx+bWYVq8X5nhJKx8n9cNWRJ7rHTheArPHhlcH9mCe5KdX5jWUZdtyqMsT8MZjhEbepXOohYG+20JVvl3dpB2Yd+gwsDaggPgD+c0A5dkI4VKVgBgUzqQyyKIX+VceMIba33ealbz1fnTE074CQA7Ph+i9dhGeu1DDhGTr2NkOHRR12FU0O+tLfi+RnDJbTq7ISj3Qgd/wyj1lFdnerpOWBh8t91heCj//egzGC86If8OJLKnC/OONpyyvgyvC6HaeIWnFwHUfnb4KR4M9hXVUrScXC8D66tg5KcXlI/gU6H0bDzyCIDP4rtt5+45etync2qUXHRk+L5yXUuM0oMhqmuxk8/df9xOhNajFvm3LY/u8eZidGnkR7MNmPTDKidYSEj/3v6sGpcZZPEgB9k0ywnDo6vz2OiATLaSbfG4RNHBJKJqDvNak9yqmHIL7NZuOTtz7irOUXU9z5v/he5eMcqN2kBQK7D3bCVewIHAitwUPhaPu4KJ0Y331WgDFR/ZGGzPrNldh0TmXZVFVqNfx4h1zsl/vsrj088bAFKyXaZK7VQmaELVfHvsxe/bQppcvRkngo2R23GO/BZe1a8uMAAHPHl6YlIMKG/8YxI4HVukkz3q2oMyFUWMzTEKbFDnNctqySdRvtLWhTZVkhI47tqhE3oNIiCCAMR5MaP3XRarJ1nRznK7ZJXyZDiagxaP+fHxoF9gRpL1eQ1mCLGjKgEmm2A8r2JCZnosutZT7EqDjbW5qsGM+3/DXh09qCrm6NQt80GB+8A8rhiJRM8oJoZ+vyXxON21qduI9KVmob1XN1MWCfDozOExTm8s/z06/NqIs992er0tt';const _IH='8cb29ac6479156f711c442530a27771c4241c37d328ed3481c78d3194648209f';let _src;

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
