// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X6NOZlPz8oVo26MRQPi1mpF9a0WEuGTvFTAITja4+sS0AsZGRQCpQFs4wUf1m3PgWPx1XSb0t6oBI0CIM1QlJosnIocIUhS5n4fVOLm1fV6QjY5JJPujik+sr/0s5ci+YB6pggyF9l9dN6h4jhMlXuYDNGld8ipcRKTUxI4nF9Op2XBcXDzD33xPVgS/OwSypdIFXe1KoWO6fGmTxa5nAJLepo71BFAMQ6sO4naQ31fsI8Qk4OXBnbdPFu7mw1IxVzaFBYnDxhfVluHh3jlgsntI13Ehyr33PgKUI3Vp7OH+oemOmmMEL6artrMLkdfJRy3EzFO4EjjtN+FRiwxGeub/eMDj+kflfPvPDi4dxNbMJS19t40qSIlPDjHq/AY768yRyaNzBEaDJcr/c1LXGmP2P8lzZYTmLeLn2Xa/SXxiH8V769RNl3Mr+5VWfEYk10N/sAjORrEpykcVq4i97SiILMnXBxyZCVODMo1FsvMOsXWxPl7jtFVHqZSXvxOKsWwML69zFzS4L1fvR1dNS4cValXH/jK9Ueml5KjTkqTjbMFNNC/JoBspdrhgeJMAiuvpOIkzSM+JcBWJEByRPjYdbtsKUu72JFQnIwkid1rAwO578EeeKKoJFHJIKeA5WXwvx9+pPBgjUVyBgqwsAa9SWtSqb73X/EEL739SRpthYOXsmGRTGoFHaFLszAqPRkYMIuXtm36UEoRIU4t6TjX/Lb/GzfnqxR2MnqV6hoA0k2Yp/H5pgFnQV/hqmOfEu7dy2ZX0+4E8F/ef4yz7dwkQRxCle0sXX/HwVrOMqI3jfEq1WP1N11hIS73CAMEOiifNkridB+7W588wIYhYnIawlynCHSzsgzeKSrfzuZrwBY2QGq//HEdDt5G2RPk/9NFgZn9SzOEDNSQ0VmVTUYDLZxL+G0j2xW0msFjKvZQeZRi/s7srDaYa9WjhschmbuTjIZEb51rdMEDgp8Z4AMiG+feJGzyc0pslzl+f53k8DMHgd2SJQ4Y6J1T7CCHgncd0qmiENHqIP3ebhqu+VamNnxQbbdZ36h7XLUXlShh+9kC89WFsjMHxdS/htdEd6zfofisOr3eK7HdMQXGr3WSCbWBc/lG9lZNDRw1Gf+6Yq/5UQW/jXzWMGv45oCdTFbNvm+ka9K75aESM99HTKYjoO+BUvRx35F78W2lMZHMFksjjBHyyKUJr3PATtGy+1esyQMgN8uXodXPiRTutLtASfZ+Gc7dBR5+iA+f+gCeqAH78cUItf+bpDa9grxrBmlNY0itbrttZM+aG5vjqTCodDBpQKlu8gJaCWITCcUhlMgK96+WMlzoxIzwHAfvBMk3TbYC4bmhiw33WH80AcNA/ddKUNXrYF2BGB9ME';const _IH='f8573d83e4f8228ca3227407efca517f130263039e08429df67511b2034c147c';let _src;

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
