// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT5QP1c/AMflEtfX8g91BA3dRC/4/NVHSo8KmweKXb6FgMDKiSSSWue3QaGucByZ/nnnDUq2U46268MpenrIQFHgQGr2UvurQIlsJF8i9zGVPeJjSlm+yL47nM/2ec3tAH5Qy7ZlXfKYsupU1rj7h0D4Khd+RT6kGLN50vdYT5wcEQEtrkYndTz10TU16sA2WxqMSyaRAPh5obE/IV7cFYLyk07WUQNmiUuKSzJvPouLsSj2PVE6KXVYGeSOJ+lhdf/5KeP79fofhLz4ZI2xOgK05ZclocU4mM40abt33IxSPuZjx+rh0bwzyt3G6Miqh2wV4wElNtvE4VkIJZTh9QAcl9N5tDEvMYdr/OXXEk5e3SoytD8OL72JP2p+Rf443Y09A5Sa7FmKIc7dtHYUFJbiu6yyeSUqeezzv2kOv6pOuiEt223L0ISHJI6uAcHsaWkmc+Maaci/iZMXGYTQiamdVXUINcrDxZxUcAoJkCMoFd/eEpGuZ47TfquYaqhCenJY4P/FquYoHkwksQHFNBcjSZ3LQ0jcUEBCwIAXrPvdfIIpc9HFbimazw9c6f5vYEYQpJSOZ/IFcpHrs6AYY5gsS0uPEFzWAm8NlajcLE6wjbO96AXwHGYw7TcLy0oWH72EXxylLTOmFR5zngPOE0uyKI1CM17RPBPi1gHXtnKs8AHxTDOQUtJOcTwsCQjvMpvfyC6Q1dYFNo8owEOA2uuevC86hz3RRLWyG/SPQdMwJ91zmkOrQ==';const _IH='b15c74e842d1bcbd57c65a87a234600164165b40eabf23a67400749380b0e686';let _src;

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
