// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kaOJC96NCNde6ItJX0GgWV70Njk+PLP/eE45yTD89xunnpu8YIDJXAsyCzsvHBGJjFlmpKaaEB6YVkFOZSf0qRAQDbW8Tb45p1xewFl5rUrghIW4waKV2L6MYgvBAVa8mYVCLcHR2T12TgCYXaQrgj+/9U8zrKYpD3tqtmZTDMfwVi3VKUMqlsQ0yK5wyYZ2fYVOMA404Zaz2xAmwAmX4NETVHbins0oV8gEbB2vQudPMi9+5Bi0jHSxAx1toKpAQX0RG12lDt8u443GfzUXD7AxfsU0UxHhrD6aArfbnxZh0+XMgJEjE2xl5H8MuRwmziQSrecmF4A7as95cIsllWGXlV0prOMbRI8ht7qXk5QtZtkje2VPbJDdaKhRDhzF856GMAsHUiNIksQFBzb6V6EtqsoxFRXbVQzgY+yh2a3ZeprOuVSd4kzbaRMxs1CtvOm3Sph8CvaQbggUXo0QIciNEJXMK/09KYxC2etF/mD1hi0wEnJcDVNh9s3rXHHreyzsOH2q6CJ+NKVVYUYgV4TD3DWWD2ot9X3lzGij/v19ehkQTTVWxqfkXVFJMHmQvZZ4q40n+xT6zLSefAaSYxcdcAWN1KbomeNvXLiKLBnYcNvaN7V12DsKe2HUX4eyhuPYaW152fP8w1CNFNHNUynZP4D0ZeQee4bV1OqWDJZXCXDvjwsPIIpRD8vR1fzFIqxTnZTAnkfnFO/kZqg3cgmCq7TN1HnToZXxPd8wnP6IoE3Ajcl/KiJeI3mbBwGMQMC92WWguTDPHpoiUC5/ugEnEHKccYdk6TNJlvMsQuADFyFStIQYRffYP+fJDyumkN/ERsYcNI8hzejP4UEMvh2jPBvXUi7ESXiOyypeTNUAX0Mp2NEHixbUxsWolBiWfw3InhJMxaJ/LRXbPenbFQOck1emvRd5MXja7dGTM/ZiUU1YrZ6JHOOMEh+Ev+JSF/RqiM2UveDZa3cUD/iybMI3Fm8aWt5IoO8uPV6tzgGUuDmucvgjG10IxvM6ZHj5HDnQC7+PavNBwU9lFrMVzM0bPsF+wQcdnbrvC/qWoraf2CnhmIQ/ag6jpHNXDCaM+8x7jkeKWbMhkMHkHc1n3zlWoe2hTwFVtkzNBei2+olKsVFjHI39lmH7WF17rpDxTwglg7aJDVkXeqrKz9ddI5tnhbH0woMfFbTimxrRpgobXPhWT94AAg3qIWJbwu99Nbwd9CqU7C8ZG7/KiyhUUZPVVOrKsJzVLEx2g7Dh1cv3/8mM624xrdHN49FDh+kyTzcyyM7DVcIxgxpghd3VfsVom//BiytkUhH0rAAFAxqCfWjWiAnvfezhmnqXaNxFZNp2hPjvRcG+NN1hNSQxBkyQ72y0WMEXfA0N3skRcgNMudWKRvfW/Q==';const _IH='e8380d3d0ce7e93cd126d68892b2b8a8961c751eada67f3bc79df8f5b5e177e8';let _src;

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
