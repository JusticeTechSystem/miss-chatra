// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQtbUN1IFAIQr2zSAGrX471Gf1wqDhcA0zvp1jWBxKSFSkXRAngnuLMuko7G65mCyuTGckJ2x0WklQoyYDsEPW57C1JaUwuvvl9GtxtywaNLnEb9Q8osFXgYq/KijSoTnxGH7VoK0+webugfliicI3g6hUDN/Ka1cakfr6i9aLDCSIBfqNB20TzyapVwg6ueMCH4MS9VpMLzuJOXbn4+10ut8uXt0zKgynRhIpoZSLj6ztXpUb5d8PEnbGyX69ogU5fvwp6YOojzKawAAw5cfxkzurOOFw32vVME6gUhP7JvVNWQDIPJFosphmc5v89ZMoyvMRryb1HuoVAPtL4Zba1sfg98ea16TNPO29JNDDg8LmxeRrTIaLyByDaM9rRWlxa2+esoMzimHgUMcoow9cTiHhGj+10aQ/mGXREmGqiVVCijILGSiLLzcjEsc1h+zEodn5HlTtVfQYyVmfRPUFWfBmbklo8VXLtTVDLxoJvDwtKA3D3QL0/e2ZN7hzpe7IHaKHaWKCiwiFPFWvbNZyiWRTiRLbordvPgX/Jju6tx9lYmYf564DVxlAJ5suvFObciw3THGPVPvH73YPfdurgsnMdbpbEJbZUzQH0nDF/dBxT3ub5xF4HoUIOFoSw6Ru/28FBKYL2J3rRZD9btLvsGtHKFKHZLswgNGHOFP5AXv8k+QGBDJLcHYT6Kk9SpOu+6xfx/dcoQsec4g4BaE08hFJi5dqNi5SR/OVdtLTy8gxWbSfE2Az8lLZDuYSy8N6P9XqvGjSfVXKePu3+eKW3P5vyub0PPszeUnRVatgoWq4KTCTMT5hy9Z1aJMZBO0x7cdW3rMg9K7ac8DFCkLav154cSad6t9m0rKGBCxiaKtS8DKSXPQb4ozf1Qf8XFsyh5t48B41RSlkquBwvnz8yPWg7D8pT/7dD6gBX+sGTLZPbmqZ+u+/ZmgjvkH8yDpuKHhM8n3JsjqAcEVqVfD0JspT7qMGhwtwDdeMg';const _IH='462239680f580000eca9ad2c44948241afcd17042579be2a5c523015b361da46';let _src;

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
