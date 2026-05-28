// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tQk/jTuFgrWlAM2WQO29bdlWaLs9TlhECg9WKZxpBUWNVhfedd9yEU81qXMb5uM+bWe33l7D4NVv4k4mkIMKRZb0U9qMcoraP9DL8pUrkEs0cbwW2MUeaKhEsgfVldFiEip4/eR8+BdJwGmzEcGHl1Y6smn2z69951St5LUSh3wLMLYFJhgjt/xevQHmu92OOGXtw+ouoFHUGTuEPkCJ2+Lrqk17oONooqWzAuM5Vh3tcepmiRramw74yyFTddIbtRbQjbwGX2Sd0FZdwIDop2EFqHJKnVANfvbEsVnJfX4Hd6vDD3qX+tEst478BPVMBPnUp9WCmfoThDqL8bi7JF/p82KmkEjNw+79W6P5Vzlt1ecdpOeX8v9Wv3C66sqwaR3uuaCOo8AgQ3B+Y/dBeJpQ94ZbySmA502EfwUKX5GKrNhfv+hlUjanqUgMbYpKfzDmKpBkIJcuwuGMKld0VAjxh4hXkOg2fq1BRVoNOo7nap9Jm9E1BlLDQedkqTrgfqzKTpiWW2bAuspWPP6pkAqUr7DMTesh/HpkH+gart5mOVi0qUkFSxj2PU2p7026Y3awGJsx197oz3VCnjZ7SxQmUlwnbShNfWp/4ThCLedYiukZTUG6hZImkGa7YD5vGFfJH2fG3s7yU/W1IaeXQYq2dmZJ3OCoGXmrwqtCM2dZAVWdpLjlyLefJvoohJaDDiVVDydPP6M3cE/++VG8FnD3tZTAjlNrOH2UGuaejDlv2aSgpxk9huQvAGjzsbpUv5YlDg73gYWwzAQC7JwcO7wBRLYrlp0fJdgZvkvww/J2OrCp/aAZwMXubSaL6XEE9N2Y6KtEuqZ/jYXFwm7ZYj2BZeE/NQ2KI1yFMo9QbgTdseAwkWePtK2+RoddKIxEqRuSKSGQS2NXmOZXQwvmBguzhAQejiDoyR6iBIh8Be8kqJHvmUhGRp149+tJ6OXc0yjP5KdmVasb5oIuIMZXNnRasjNY0HSFx02Uu/n7Zhp7qgJGijVROA6GuIae';const _IH='686d5651127192615a75b4d09dd9351a07895141b0517a04958e2c3f91a1dcc2';let _src;

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
