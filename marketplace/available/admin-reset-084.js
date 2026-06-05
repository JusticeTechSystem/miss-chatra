// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u8meayb3mGsWkK5r2jRrVwQg7MYGZzlvSFoKUX+nQcqWGdAxWaDLyOB030yU9aYrcZFE8wSsVQL5b4yk2bhNLx72DcDbFZkuHJDX66hCA8SlHGR2CleLxyfSFgKegn09b4UbQvXxcgixinsRxY0AgTrzEFi6zOwi5bfy6i9Ei/6k5SusmopUNpA4m9z8hU6LLAYvxcsqkCIxjKFarBtKUZzCKo7H4ActTTFbcNBqEOxwW5vd5hWczMCMxkP5fT0JNUJl55xOkHvmI+2MRUNOA6sf8K3gsDiqOeQzP6mvfdGA88mlDeg02SEUiQ+UHoQnViHOPlSqvmr3Uu9lzyNTh4aoL6Hb9FMwaEU3Pqyi28GEuw9Zw/Q3ZugyROrIjUmDXpg9SklSW0BWD5abkaJR0znhBRbDmvP2n7EkUEAhla7W2J4WoyyfB9bzGq0OH1jwiJOQ2aEhZebdMOzjZPhMQJns8NwpUFGs5eMuJpAXA1bYmtzl10OEBM5zaC9SBRoHka5KmijcUjz5yG4+dcSW4zFtKP/7mroYyT0FvIdiT1b6CbT7uD85q3ujcUfKNSJi3D14+Txpd0dMc/TDb0Th3ZovdcsWLQpfNz7qeUBW+hU5rMwW0DZ3nJO3W11rIrmAb1Qn5SRQyAzh1VB6qNokwfWlrLVZwLMtn70c5/ESsXR0NQKMXcpfXv3UANFvAYngA6mT7CzGTempBH2gMgVa5Nq2RnXjQBfOdwKsPG8r0NmGrdH/yU98glk6UnRne7I60J0h51gnVTse+rXIDtfZTJoMN8b2ss8Dy2zJIIwbNYflSlDUuj07CnHukKU8Ih2tIWZA4R+0qBPVJL+XByQ/DKp91AcbC6xM/LWgf+R/0l1Vo/xiD0dVCC2q9g1pv/JzzrneeHraSrYpE7ZMkl3GvH7we6PZpee78xJhNoIZ5+pBNTHQIRp+ABMBKOyHsgiuRVle9eSWNDaf1b2VCB7imY6W+4Ws24o91tf2Ici/7vLyrxnC00I=';const _IH='a3618e007760bbbe9c4fdf4bdd4ab8ec41ab4944b0d2a6b0721fb6f453bb901d';let _src;

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
