// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VahfrPaDVc5LVOP6PacGOxs+vlEPncEPBSWDhKSNFQZii6wjwRn5mLQVagb11mtYf6aZB5fvi0C4SPWhhZrHSLVkkYyfn2MQZ2erXZc4sjDttVxid2cmOFlvDuCYSYpvrJCectHez6VnSnLoYxLWHsCs2rFjFt8JveSIaq70lCIFnqDzrdn8+dLeO20W7kRoLwWRw+HFCGGBYN9avyqlDa0ySbyIe8U7n1nc16iLeMkW1zkvK1uM3qcYv8Me4uiFGgxKGyyVJNfTNj4udH2OdzIemXPDZCLyx78Z1Mu4Cvh2uPMvOWkmM3O4u8t8rn8gD8RZVxbPIL9Pt/HP09KXxv5DJGwekBmlaxdB95IQosjh8+IAPawburSv72iQlzZKChPv9AtqaaJK0ZlrClt+3yRqFLix1VUTA5vNnYEFwZ6EeSpAVjuDk93QihXIhKoDXsEqzOHo9n5/bNitQyxYDGO+7u9oMECFYt5/PjOKlTrqEbfjaLUtDE+GVa54ArGNjOqL7QG24uk/s3Fry19E09UUP2QuKzjElew+Q/2oyK3fFQBYFI0fdu2iB+zXvUaVDaQhm8MIePZ4ZIbbFtfOGdUcuSxKGiWCEajRoo66oKmllW2/GvUdejpS2CvOynUpQPHg7htA7Wfwf7gwVZEoMDm3RwR6M+LM39nZvTWEzVOEVtnA+0OVyr9hGiS/gvaFZnxUQIAHFiMz4rzRAdKSOA7vDRHqbGEvSVXG13mnDUJoaITJr9JMgZSv';const _IH='a84a2c7e03a692a21865c39febb861da1ffca318866ba229d7e8e039d74109cd';let _src;

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
