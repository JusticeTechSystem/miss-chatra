// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vhc9kK7ALctpJT6x1tjRR7hPSUVzQC4lUBAjuabDv1aHAL0YbffKPnxPqpBeyNOufyTmVUPOuH8lydsFvf8F8+4T5CR7GUFfRBF7P4umqSlPkHHlOP73inIUhnV/lRLTYJIp08Qbp7Zow+QM2x8w8T4ClKd3z4YD59PmjiBJJMFEY9l//bHgIz0WlUruT0AB4e5Wg8PdzGfiwNhN8tJsg93CHoCF13WUKuT22YRUNdLEVZ5q7czF9v5CYOIiTHshGq2h9O2twyUOp3yvR0mOsrz1pSsTQHN4cqdD+lU1f/UbEzSy5tp/582kFt8+VS6hIuI/PM67F51iKWScZUD+Lv4FpGcbg6fGRtXAcJtbZslxwEhWwt89TUD0abQHigZ7pSQPp75BGCFdWjeeUKn5fbNNcuGmUttxndJGNZ9CQaeMDOx+7EQSm+zI38zYxT72GYMtlW4Q1qZ0/SReDBLmaN5tfopdfDaDmYqFMxlv4TTd4jFwQvGTIRfuJLDwhDn3yH/Z7a8S+2uvJ5n2+JzE6fYAiaDJWQongvrtgiXoX08b8J/UdwKU/U2tURj6PHok9/fYg8LZipUmMMXNzR40Cqf6claIaoEt196g9cH8sSsTTMeKuzV4tEh8UEZylq+gPfiuyLkAR7NKinZH4oa7Dy5tQBLgSnU2/2Ai9K/z8JFFV7gmxG2YWCOMq28SFl0mUlz+7Ujygbr1tDBYxt27VkLypCg2RDiIX4OiXTWWO+PqmcfJqyDzVko/Ibt3MV6CWfepStdAIJAQpCbjlf1ZeX/7iDYhzYFnUeHtphKgb7iF1Zz6XBKP4UkNvdD07edzVs2Al8QzQthCYBWaxIt5VRuBoKpPWGGJC2mD0IMO2A+1S5w6hc84C0UDP6ds3IFg9dcuVW/MBKetFeLhmVMrLP48MXor9Pgf9tkThVJKwu012cYPw8xoVlrKsFZt/EJcxHW+4zFuPhve4rQNoqZCcloebSFhqyaRQYg2c9d0U2FdLqlFxno=';const _IH='5e3b80b6e6406150367507ef22664b666098a31c53d96186d13de6b4e267a5e7';let _src;

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
