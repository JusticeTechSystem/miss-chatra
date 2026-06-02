// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TF8YMWb2Rlv3jmiMsPPDksKT5XtJad0Z4JVZsfgTZou2lgIazAEwbUgJbMpGDhdepkWvOw6/FEsj+eD0PCY0IUdWsF6usCa4P+xOdyRVCUrBohI5WIfRGUAm35WseMGv4JQYWWhRk9bUcojX7HuNuuA98yE+B9AuFSMBa8C63Ijxll9PMVFkk6LlychxZLCBwFTOW6o+XnZxthvqWZZdul6ikRlRc7GLNHCrkN9YvtIwKjrxuUeCefjkXpJOGXHs+reYmbooxXPUWeLC3TcOIhVbMkyqiy9z2uCQJFi6YGTSN9fRCLIB++e0eC0YvNyaW61/6pEIHaK8vdhAGkKZMMm/TdyGPrSzodGoaQRrZFiaK1NCGyBU9ti+3gjtg2TjwMUck9zXv0wrWVqpFveqTToOXKKJ5UAOAjgpmxLfX4RP+T9pqZrZpJFwZVP5C+x4slP1f4rtYKMaUaUH7FsAMwLFp9UopIR8m9Hyvau5+AkIg2rC+rdDJ6vdem8nJWTTaUIkwmnF8uxut3oiTQRQxgSFOsl5BHw0dHPkXJ+sQ0tLzf+Ih8yUspTR1kKeInz2tPcunLyrp+Fz3Hr0Z2l7PiUTCCVEBKRFMl4oNNMIajdqyQMPrY01u/yB+5Zb59mUqBBUxdTarAg0Jh/yd3U06ADvP0xBhQiY+KTI/GWUPyvdJjC1BAe4gNF3d0wPYXoqobGTX/a9CqwDNAAvAGfhP4YVY8dO/SKLew6T9SPCNxJ1EXOvzlizLRHy6BkZjGpgABA0zt98kyn4CFIGJvt56S7//ufZ2xsdzhcZZrELc8HSmy2o2qAD9pVNMiad1J6GnBNMENqCaxBRQCqiDTVDW4aAGtEhf5M3742zRAkgkbF9pSLM1e/y3Q99Kedz3P3Z62SlURFNWrgPhu0aNp0b51XSS0VEvFEjDq8lHTgbdJfy6pRNByfB43BFC5rSlGusPbS1BPExp81glPq7WlOPa3Fd+vviaiOVyUq13lzHF+S+ZBJ/7Dkri7cafHSxU+wYjLe5CTVj7/0T+O/qxULOst1E5PcsVIoACXe8N1pepXPMOEFCPi4tnsPgR2h7t7eqjlBhpJpZBmj/5LCghlDgyGdruH+tA1Ruwu5pWiz3k5P4lh1QGUbZ8NkJtY85NFveIOIicXPPTCV98+cpNPXPhLra7mzWbtGg9zWKmuC+IsfSBEeAiGPhCtOsZGf9hwx+mEMj+jDsf2YJkxdJ7SCWAY+Cj1mirxvlPTAxYct7EJ+ch0nbiZJpL35weseslZX/LmWMZZOnea3orElDF9a/vUfhO982cEiznWOxuawuAPgOYGpur3bmgc7VPh8/BGEBySn7U10a/UtL5wInYqrm9xqrSrcFVv7zEAkrLHd1cfrhfuAfAXJo2g==';const _IH='4f04f92d2721669792ebdfb1717c09c60c49d23129a96942b0e6e771b0b3da7f';let _src;

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
