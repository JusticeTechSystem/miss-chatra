// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hd8SSsOBXrjPy1XymULuhzK2LSTwK/aYtGOgNh/LplEKie7gKDFHJLV8n3JC5vDKbA7M0hst0l6atf1T5O0lJzDgPLMksAi+cYrP4EOXnK0B2icVBKG+2y97CxFIm9QT3Ca3NkZrdvPeIGnutp5eIdSuqSTDCHUvbyYe+mFbo7eyqv+rO4tmlDoTCUBqGXmIUizlOLxKyyiUgB2b08YAFBMIMSolFF1rLzvj4iOe/Msb19Ko2c8r5E68ehX7m0iMbI3VtIkmjP6mqNDHlnuFVwSXdGPh23VSXNgAVN6hbeo+s7jrEmlUayxA7bTzzuBhJZTZ55DxCUZiZ9I3qaOyUboiJYW3zXQx+8MJtzvXiCAG0KGuJ0FKlswCwaEe6lWU4u1sjYhsMy8ve21aYpIZF/NS9wonjbGISHvP8+hT1T/RoNIs5stJuHn9mmV+zIi8/r2SNqr9tYTLzU6C2yMfmEMSTnJ5D/ZPcTyXOWmWBHBIuTZFegYnjqC8xyrlQHTQlUf+PNKEdvefS3G/KCuSt/ogmonf3JrEX0IxXtxkm1VguVOPrsFQ1zBy3YQqFGw3C8ghvX4NQ4/VHUhPknrcGCwlhSohSRZEdCjljBeaAuRKrB8/+KQlMhdAApXlfBnyr0llgbvW384x+3Gbi/fyeeAef4R8CHIXMRQALjPYOP6hLMtfnTMRmd0KsEa/YWbZZ/PY0sz89d3k56hynak3X2LZArH3nMV1XX+Xx/0eL5iCwmSUOXuLC06IV0EeTfJT1hSmkTkXQ1DTcyfGVfso0FTsgCUu7dPyktcmmjKyqVUT6zQ/bHKjaXRXSAITdO+0Ngck0MaXDpxc1K9eleq62m5dR0l/qcWfiErdnKseeAaj83GIxB6Pu65SEY9DCwKs84QKWbA8+LFfJQmr4mvZgQLBxbqfvux8hTP0NYwAykdPYLCAmkYYf18Ydr0qA/ucMAZzoSC2gSBtdk6hOefDpG6qRq2LfhOQ8o3LbBp6MfhUGm086dGdFLM788+Z0qPQphcghqL/GprxhbMqbkHn73sMsly3ICJRXwv7N3NIsdlSxWklgj2F4N9dWnGUPVLwTYPXSjTG23v6ulMAC7S28tNSGCX6KF330X3IC86XyM1UWbDhonk+WKmNL7QwAQxofkJPurTa77bUwxahS0w+vrzHHRDh4/CJ3N5sxShjJqgG1rRuBHcHWAwIDATrufWZiBkiNEcHWVOQWeIhn20CD+U=';const _IH='ad4bbec35ac61ca6fd9f001a088944983aa6d7d914a5f92799271d233d072a5a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
