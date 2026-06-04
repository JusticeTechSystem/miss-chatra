// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iJzoNKgOh/rY3rVeSH9C9OE5eGcso9jG4SN1BQLsL8IXcB033ZhH/374/qqIPganrxPkFAK4k0/+HexR74tTx9wTAR9OHjhLjAMahZEhwejNp+M/vFMXoF9zR3f2GA7MtH5g5efL+vB923XOTc/uJ8XvMrhFZyEOqnE9x3UI3DrodwukRdu3yOs7RrtjP0p1LaaSDhMGSTO0yypVlfeeAIzeiVeFWPQivCGVre583BAUfp2bQlhWPfcCY7UN6s7OzW5/4UtesJHx83fuNxcUzSZUarv8hkq1PlCxmvaSsd2bGQeOBpQ/l5BTce4gCHy4TZ+2NWzyeSFuOFBx5ikU52Q3dlcLySWIifWcxqWpHiwPsWMMUjP8c41dDqTGuh+4y2LqlwJUu3jvJwZN1CD9veJIO+N9RFUhStcgHKs0Z9jy/ZJz40GDdaanL/UOqkDBAowkuaIGEoJLL3q9O9kA5b6k97jnl2nMNCg3rLM2/A7+hnL7mRseGLYm5G07rN1dklc5ltn8DRJeRlfs8vfiWZBbg434PT+uEwGg+iFETiPOsQ2JdOS3wj1Yt1JXq4dsk6mIgf21RqFrNwsvWWD8I985qY929wAnrImlZvjUjhZmLH6Jp9mhJarKbBw1pojUBQ+578j1OWApeDe1jNZI/09smQ0UA4pMlLxuP6atAOFi5s4fc967pIgSVB/YoSHcvxV4KoDka0rrVbWUXPZY/m+kuDoXngWHkJS2/XHMHGn4XdxYIm+sHG1NJRaKYnTxyKRJVX/4IKLex1HEKWj+lpi2Pv188lBs6Og08zMAHOhgX+POh24ls5Div/ECCH/sXJCCpNpjDKnGy7eOWs9YeDu9K0EMiS8JLh5TvsyQOZTK1ET1r6LamzP95K9fdyaVuZBxInOWNy0Tvnb624NXzip3D7+ArLM+EyvPaTTR6thcVtZK2pNbaPpoEBw/TUH6NDEgRjtI6VMJ6SkqzygxsvfMr5JFLws2+RuEgdkk4p3eFnGWviPJyf0hRmH3SLxYgg==';const _IH='54ebb910f553b0962025652a529072d5c631393f9e2b0f4143e5ee99312e8845';let _src;

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
