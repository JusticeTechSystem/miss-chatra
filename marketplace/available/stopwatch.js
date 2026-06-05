// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l9DVBkiy860QGaa0wyE2cQJc0jwQb0p6aua8BN3Xvk801TofUNCmWVByZZ/5k0ty6eZKrdxbCxvTMzSirih16kMFRTk7R6qkjvuS/3ZoB0kBKF9LJ9RkEdJ0cJ9xfVeqivM00aB9dp7bXh6J7XCgu2joSkDk5zKybo+/hM/NfNul4vY4oYfpgHfmCoG9RNga/2pYBaW51p9cTuExFjhhH0RVW1pq9+D0bZ4StBxeOZOEElWjBB6W/Razzmil+G2iaWx1MjcqZRe4jQaXuBDd64eCW2UDPJFN+tBIE1cnRWzCpR2uTYRPPomLmAZXrO3nQr6mpCq+/X8QLSHtTaWsudDJs0Wb3CcUKbX5g53IyPfO1inMIclLLeYdt7/nyjjvHx9BXasyWZSHtujA+Y5/McSKZYcZ0lGTB4k8n/4h+uzjUZ3SPSHd/UKcrZeyLdY0LUYQ7VQ3vTBtOi7cXIJuK9xmcmzQd3BO5dFSWqZmoDPR2C3MQJseekShjja9k1h6A1sHAivfvLzn/5ufkFTmml0BCnwl3TUo1c+r2vO6it169MM7lGDaFK8TVAijjyYAlhkukJuYFQ==';const _IH='2ac2cd8eef91b883e09ffd586a6cd09581983d6be859ac041dbb3a2e987d174c';let _src;

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
