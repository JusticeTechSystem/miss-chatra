// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ucujqZ3xn/POvGEDwl5ZY1PEGK/o8Nx9MUbejrK/QnAuNy6SS74FsFhjEY4R+c5TyLd0XeL54GDG4p4H0aUTwt7UH5FBSQvB+IfV4Dxanz9gTNFkX2HqxB9ZRl8/P+VUh4y/uE7h8jlecGBxpBKIC/jaQnBnZVNhXiAHcl7DeKbHKZHhrMTc5+KNo6gr2ODmFWPmZvW3L51BoJIAiRp9UtemDdR3tWB64u1fzO59xGefpOo0AFzhjIzF/d/AHiAz+KCrhZYpIrZFHufaRAtK9RiqmA0CFo6A5RuI1gtywxZuAwhTl8l+P3sjTEbRNTj/AIj06MOZg0YwoYi0czpauspHdHxKCNkm/tBrLqp6103UKaroi5OSpf1bkq5D1SGRfbe9OnJvp1OvE5y7DEqL8PPtSkXxLXnF7HxU7DQ2GALu/7sCrRkvLCGl9QAbpIsrnaohgzXqcav+S0JrLYj1Vt7S5tiwWU5pEFsuDps34I7topdjguSPRHpUqgIK4nhKP4tSUqbHi4sBMsTzEQMDNpLgTvkZzXvbOb7C7rlYp1iNoLuRY87UBz5HK1kQUM3LO5dxQSJ/HR6lV779mM0wvPWoIWVkfCphVHKE/N3ZxG1pcwbUSuYh/7Z4KJUKbgqxZ8vthd4VgAvCXaoe5cecUOWY3OJDy3XBMXkxF01RsK7Twd8n/p2ZKQduM+RON+dp9fzpTxxlqfWncKTlnO7zySjG4J7jPOsIZlJt9SKz3O5BvAuaTO+hPGc1V4QVy1eveB9WmXrjxxs8httN7dwaoXC3WCqhiI+/VG9QyHOG549C06B46xD6KQCJJWKHPdYsJ0LZwSjTZ9/qAJVWJAE83OJWGhahcGJYvVOZsFzMMFThFRHas9QATQaCZ1SMb0q6jR9CFrNQmqZooBzu7BCiwM1X+93trDF0B7OpigZ16x8u9l29QfFid03PEiqycirHIAMZ8ZoaJBgvPcwxOCEzTxm7YwUjuHp+MtNBWkinGYl3TKGKy8oqTvN/o7e5dBtzzWGZbbT/alF4dRwdHMQjqpSUpkXnH9TkCj/BYimaCiS30zYhuEn0kFKsYTxHnqWQG07iYhZddUTckuCvt/FjiB5/SCG6qwkQBEL/Yh4aoRnpn9hZWtzaHEWDWbPLdsND1XsTc3RSjNfnksrQpBQQcVjogVlLuClkh9gtShiwlwWunHHFEpsb30JitgdtddsjbTl0RiWiZEMRNdJ39SdmF57i3GniQFAzJcm5+R3qvA5yqJQk8SHW17PunYip6iquAYI0CTcpb+Esrt+vB+dfN59lXPreYLNZgUZkNnU4jFmDyda9cXBLSESLxWOJLAKASxhHAMJhEOn3m/6q+h0almqQ1uA83RGumObL75ASnVQ4/kytgiChEg==';const _IH='22efe636c797a12dddd39877a26631b48c995300e19757ea491d6e0306f0444c';let _src;

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
