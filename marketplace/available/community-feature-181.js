// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z0AsC70mTWpIhPVrNk/kipdg7SX8QiI8F8qzE13ykzlu8BHX1jcMOP75vhHZqwife5UNv0K6xHbiKn6DwD9wvhCcC0yT0jHGCxdKREBUQ5La643cn8JwRhNbx3mrM8+qEediavbK/IS0EPp1CvI3pwuYG0Y1RvhJ8dPRcsxraxoFJV4xp8aQ2fSxzX1UuJyalCC/fd9Td/A7taN59dkRwcgvV5UA/YbB6PjRkCBzJE9vBmRXbgI5nnOaZCijj3OZAl6RRzYo8GyOvq9mWb3OGvXKm/mD75gUOBcH4O/JAVVGhRlfKeF5tvE/7/J3TLqad8FvXZnIsNgmcnugCWyLDRCPE8ungKuUiNeZ0SRbAJmlSdnpRICCez2wCMa9u+RzkofIzl8psrJJnHtujDqLRm2btUWYkW0K/6jZnqmaHKi4bkx+XOnW9gteaatT3YF4jcMF2MsWFiUQDs2VMJWg+BZYhqpUbxuE4iYmdOy+9oe39V9pv+SrMxnj8kyg36H0AJpfr8um+i1AdpvQfEkn9OtJnwGO1yhquQdNaBuCDQuGFDGkQnQDSyKpG90xi37mrKua+rXN3F1ZLQN1KEvEuLpSdDasIeyPYBieLq+I+bfVvUNFbxrc5UpCzSgjNi8xvxueev7xwdpHHB75n5+Narsn+qyK0AuWQue1ufO71U8Hecv/8ZHP82Z4kEGttOI5HoclS/UMMGzinoyANjEsephsPkFdH32b';const _IH='38f6f3367af812d416ae37da4ec28781d7a9063cfa24091995c4341fe49264db';let _src;

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
