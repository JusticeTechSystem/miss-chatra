// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSTucAl9RRitiWgwbHyF7QvOGFXkuJWCcPtDMyTi3Gs5Rq9EAWsL2koadg3eyrBW3KSi4+j/qKhU0EJa3hJUnvR2HWJCQPINJ83UWmVrsFniIlP6Mi4RosfuHMtUhko9tBl79hwV0lnEGRMj6iHxnlZcRqTZovBQY9+gYG6eZHWwkmj3ZOfiI8ycKbeVmpwALUOMltimwcBtBzKKjysVxmOxr3kZaDv4eHfdVSLTpyDSOr5l4LFmmeUaWmj/QhxfDzTLbXMfpTQ8KR2KjnVNYKM0B3kxGRP8wLyOEgyooZfiz0dC24+WX0HL+mm4C3a+mMo1NTGT3Ot1fHFLwA7PR45oAADG7hSKIPjWHZslb4bQ9N+a1yT45dDumO9/HVpwxmBpEcWfv0zMPiFBrZO22NhJ/Xhwz8lheTeMCiasllj956eAIamoQ8LZnIK+16x9L+Ev4HVU8zaW6+tRVX0YvN9BidoBT/lpBXF7zeAVyIGvktSZAnbwSH69HNh6dPRZW78Z765nBMy8Sa+/mcpvdH1ytR/erUVgAHr09/dgns4fg+i22590EIUybAqSdHnZYT1IK9E1eqr3xB9FkymONoSaDjzqTB01BmTef8O6x9SeDyZ2QILE4MxSCwGUTIAmLyV+6aoXyCHUeljbnurkC2O4/ijb0JAb1EYw96INX+p+w8WKoYKYHo4yiOmnNBXsHZZZrQLxG632S+c84U7WJlTnedFArBZIrmciGpBjQLMisCBhCKr4XERBAhxOD8w3oM+bK11W/bcTR3DyFZ3yemoHbGgUeXl/C5KHFg9JLdDyDRXOGa4Ao5DE0PBQaWQTClcQxGSY1EHFcWffRb6qxBKW2BAQaMlUxhkqhJr8Wtlup6h0oIqxqWTErD435x1nqtIx4G5R5KUXqZ8/eV7qnzbPSe+tZQqiRQA06BJi7PwC9mUEo30cqgSqVBZjqQyDKaPqz2fS9YMGck6nbZtrRUalNSiMy/ys6dlcgigzNFlWINYKy2neI44PvXzJruyF4quAEyUWPwNBT65vD1mOTlgCNXlS/8hRyM+2wfdQQ/q/jtUH+KvaimNT0HnFh2m2zqlFHwt3Idpw+XXxMewg7l14ZkgS8kYoCTZCPrtbRt2WbJIU3LLlnwyiVSEaFcz3YCh9HGmKI3/a6E1m2dGebxLscdFWZzwza2GAtHwCcXpA0CR1w/tukWkZGDx2WJfZBdjj4HDsq1fvs8nLgYf4EdgcyYV1G3YayaBNZwkYP5tLxwPtKr7Oy0XkpjpURMrRZ+oPbpsueNuhL5ktodvEznND+e6McMTkfgiQf82EjHMrXthyF3q/89jnFM2rRN/3fqu3Dwj3enkSWAkbxOUEMVIiaYkYlTzt8y0bwjSb1s=';const _IH='4271b2610c8a85ee5405c20c68d03b3a86a0e2aa57561b5174fa56f9981c3d1b';let _src;

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
