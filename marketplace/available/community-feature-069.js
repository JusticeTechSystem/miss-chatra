// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSDn3sAcF42M5M7wFejeBVTne9LrLCSJ67G21PcD7Va85CazQz6M+577YaV9WqasRtDE6OsHO1s+o/VIa9aQro+B9rsuqVrgMTEQQD016cduz2fOLobxVyRf0udTAP2wT31I4KsivvXQK1DZCBSnrYebL9RxnqCrxSeXGqUR6Oq+F8b0AqmT22KXFeN4MB9eMgqLET1PqfcjJlKDz3wAhOnxxsJWzr8O9uh94Fa18LwArZL6isIrqN7V3jrRglQn0d+8Ap3NIOZolwBbR729/QbDFH44FUkSLEaolwCb7jQabQ/rxhCV2HH0uDbYCnA2b2W31Qs4B9EfRcdIs/JmOdXfrzJRXISiR5IUT2jQTotb+ATuBx91LbwjL2qqsD7+njSqEAr62yj53D4qcLaocJuOBW4GByUbeseCiiDAlRiBKrwGGKwViZvUdQ4yP9M7EZK1IyvlhHT01OgAqKvWMb/mBbs9xPBOurnw1h3ZiiMTqlf9TbdFMW2S+7KoSEAneVeRlHXvobetvGeuvkot/ZNzHo0bfzGZ84FdkP6DRS5uGl4+VmtmKp5QQ/XgCPKMBhQXO8ru0rV8F3n0OGzD/c45z91yQO0xzn89cm780Q8J8QgJ39Gt/7t8UKeAQdVWWdI4Y4Uj+aw58pkX/djur+r2pPxEbXHVPV33VB4lFqaZ+2h20WjOoY71hEJTZugt/ZjTRCXX/wdSSkwpb6S4fBcHsomcB3aABJG2Fi1zAkxMPSe';const _IH='0ecaea03341df501dbf574af2a635ff12e9a81c7bcb3b02343ae7f1fb22ea069';let _src;

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
