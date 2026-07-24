// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRLxDPUs0ofOD3yBygmkNdNYR8uFDSoHNID4EEotdLoDQ24uH8AoEXdk1AfoRFVlTUTv6dflxClUG3Udp8GJ/E4/ZXIff3JUJNaOGirAy+PtFhl+v2wqOzSrYjcadIxCOZHnyXPKrDaBwuqEz1bJHPxM8QL9YCcoxvvUdus7JKhbrrkawCZGLW/oy1jye4HsBBHTnA+uwnKsS60DnNT9GspUUTAz0RijFNPyWsKNOI933ek1Z73y2uSHL+rz31hDxAAcXLEKaHTSRYlcdz7QPMBC6MNI8n9WydrOZvJR5QtIS+LZXT8tErpP9RXbtX7A5Ou5USwxEStFb4v6B+CGExmEyVn4WtL2Mp53+w2nC72BZ6gKZJQMLaDCH+G41Q/XY20MpKBm7HmwLTCD/0opvPCxtKs8UzwxUmUgEUE8SNnRFgEP52DbHJDpALMGuJcWBhxcIwGY6hwD6ceoCXTe2UO1m2gFpqCrwj4Lrlbpg7IZgt5gU1HL04NWq2YXmfrSrQq0cRo6C2Zs3bekru8BZT6L9O5MKdUPn4K39DuGk1xDay18pZEQq+Q5CwMq5OXdE3HnCjB8R/Ei6SIy7Cgl0MvKW+nN3GqoQiYZWsRYBVdysaTS4XW8GxcHXmBmeuUlT1/474miw7bcJm+kgyQkbJaa9vVRVwWkA5Wa+1uKJywxAfudZZ9lIO622STT3lyZX5TW+AEJGhIHz8t8IQ8ZyJ2zpa3a6rHx7Px5XArAkAfEDINfxbNtg==';const _IH='976abd90c55df488af2cb818802c68a6b99ad9fe0816893ad953ff81888684cf';let _src;

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
