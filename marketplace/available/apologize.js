// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRdDYmw20+ovTUYrw8wqm5Hc9qfzEq/aBo0pNJQQD34vkqNWSuUj8PryGYg5NmkjbeWh7LyZHcoGzqUNp942F/YhsdgHF3cRXkvYBlYG5686p8fYhdyF6iDNzULT/4FjUMhPBTQvU7KNGZkDrThFQUImsFZi27TdDtEXVvXmfRgu5k9V0M92SfHpZHMVPRsyvt3iPQgRXdb83DCso2pQ4O8kmLKhfiKzOqHJiUiOxAGqKXW0mEC5rGC0onnmbte8kLw8Qxth4gL9sl73uIaWV88vWJAWKcgjX+Pl+pFTI3kp8OZHh3TWLGuqOgwbEsK+2s6vx79Ua8OODliheSyfS5T/n6ibut7K7HGoBmRXNmfGpt7f3zLqEYgYuytxuCJBbha+rhn7UL/wNGqmjArKSlhItRv3GtRxHngmtqJJTd8O8bDJHP1rSDy9c2mqAY/LP0rq++U2hXpiQzUqAgE2wwkEnT5iB+KCwdJlDfKfUcBcvoBd/s6Ve1km1y1lllBnNn61465pcpudIX4TaYIGa1ogBiz+La2ioTKRlfmCujoeMrwCPiWzK8erjM8HEYxDOGTGSWmHluvVxGkYDLEAhAqd1L7wH9j/s/tnIuFsWzgcLeVcA4x83i5xmUt0ggzTZgLjvUDub2SaGIr94nDR6ceYHThSe5mb3FE4qJZrI3QGDb0ozfvkhh5WCE95E1fKnmARZNqJR2DxlNCRNf6SbfSGQH4ueNCPLlVr4iRfjJ9Z9tUnvKkMgBZoCFBuJpgqQdesKy5DWl4W0iW7wdMd38JiBaYSo7B+3WLFjBcF/+arA981dUO4szNsMeIfMuSkbMd8yKup1MDn596l4ozEVHg9JcrHd2WS8QAzwxZg296/AzieKCyKmq6+lR0oFshqKIBAPsU3fP+c9RLK4B2cDvFbA+vTznZeO9bNh8MPlVShoNIM56uMiFOh1k5CWZ3RQCQhSW8pdyhfCVcWHwD4D6ASmT46BlZUrdNrPJ9sD2aqXE+8RCftK/trmS0ToiayL1EK9+ttBTJDKbRS58C6Z3EWuiIKcxZETtDipkruk56mx72npeUPe6xKkLIwYnW1RV5ylTRK+MfWNImI0Qd1o8b0jG3Y1WKAqjmK6HV4CEAjYgNeEWaiaE0LeMz+beJtUMOwVaX3/bD4kBZXfflv7BaUD9NLg/cQ1aWo+K7MuQAB7sstUHTXMw6cCeY8ZSe50ccCfMi';const _IH='fc1148b2bb0b7be02751295c0d90d66fa8a8433a1e2fefe46d5aadcdb53919a1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
