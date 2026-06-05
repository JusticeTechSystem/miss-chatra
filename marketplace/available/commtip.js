// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BG0yvJY9hkc/7tD2SpZuuB6eXxcdgUpYmL9uLFHFYZ4yMxjt4pq/RSHyObzEX4KLpiNwHqmdsSYWjvE6SVR2Mt1cQfKuhcR5S9wR5/vUSVwvUbo0NWSBta309/nYD1N5tRJiZpyVxI6rsf6XabGQlOSD7u4s2Np0QaXNGPERNQKUFbgOU46jMsx5ya366Pzt3oK8dz1wjU38U9N58FFutIUXvodrboLEoTIivVjijD30PAZxuKTkzz5rOswdfXMV0gIKeKooMoBr3wrl/WrlpzYrMK52SCHw5i59guTydSBx94qCGgyogSExZXg6gEMjWc/nX/dXhnagMXv+JOHn1ZV9FkL6sE7Itrg4tkKvz7q5B7iqYuG8V8aK3oNbJCUl2rS4VoK/JUHrQxshcuxJG7KvdY9dyZ4+8bOEOOmDyG/LLdPTnIZ9dImwqkAZfo7VOfT4w3N8nPkInzln+fDEp8Tp5U8Ybu2tm5/jsyFrqkS537nrHKuGq3LfQVRIXtIdVrpP408hmNatjrAF3yd4OpOVQbP1CMyEmWO6U7NJ0TWOsiQpxHK8pVv+L09LxXpCaTkc/T5a+5JPsTYWcql2Pxz+L5zOhHPm9QRAUTQp1nSdmNVa5Dyza0nEr1i6lbSsCExX64Ghjih2aHTtLDvB8hiYbEiwEyzeHvncxIRgrYahl+DocdHO9eK53TVUnmc/sLtlbHAvMbd/oZdYSHx1CRfMmNMjGK0WOGdKhex2fLyuWt1BsKuF2DfhFJRf3fht+GX+gI+MquQaTjnaBGc8SaAWo1YKuepriYK7waVUWkBsFizyW2ar54k7z21EoOfkCeUqCQ8CP4/VsoZEwKhK3fqH9zOXH6ECS5423pYLNyt6Nkb0DJwfkmFNiFCSZ1tvFAMBoIrNSdcsbU1IzRcxBv1QXhPb7lQU8oUkZbxEO12MStDGnNOibS+pJON7wDGPBjKKGzJGHRKKVbo/JjDstG0Jm9fJoGvXhGCGqdWke0S3HnAut2fcEaGeWNL3UgUERW3zezHIddxqrLnHgA5+whjMZ7HswtbV5gKRiYOROrl5qe7n+dJjgxkaUflCCZ2bpOaRhcl/B+12h2zeIY3LLQ7cgClZ4clIQi0Tr25sKI+7ZDywkKClBqiSFpy3h+tONuHlmlHRnNlPP/du4XFOopPr64OWCg9i0aRsBXsanlD0gf9MvZDefLMx+Fk4dHKoEw==';const _IH='f1a98fc7f37ef89a3a74b1272f26c699d3c328ec45b0f822d111e79187448f0b';let _src;

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
