// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/cQg124j4kYjX6S/UZwqJZcy/og4x78ruzTuq4atJOK6+KowggL0n3upZRZjaneck06xEYevtJvNvoNd3dwhkHbR91DwWg36ziBtQACesJ+/2/qL7OPLoRgIiYnj/SYc4BO1eUOLou61etLrvSbtblWCEYnI+FMfeMt4zIEM9I4yqrmz6ssRO4MnNeGi6qDhiQkc8dwSQyPLlyIIFsmeuFr6Uc8d+/TN8uDQBu1IjsJ/XRv1XV7AAxLuvZ9a1o7MHCxtRwo2yMfiEMiDJXz/DPAZmLCp5Nck9Q78Hx/iCG0kDgen6l/cMg3HZ9KOi8wkvcgJz6cCpqZvQ1ZcWJBKItqrbtZhYwiVMxDyiZfESKSgBhIa5auUcaNBjq/gPutzC542DKCnUfUeqB7Mho6ELbKNRI1NUOkD4lnY/Vj6weoP9DirWWV0qNKvw9ATpEcNX+9W5AafEerQCEEfozmLzByh8P+cVt4Izjf/FTX9KI7NyV5pskS/M051to4GZU3zbtvYlYqV7f2HSLqwWTkzlNP30DJGLmwgjY+Bk/P5wj3ueKlloE22zbqXMqE+pX88fJ/Tv+Huan+gJMxuxQFxhowEJXztDdo0Ww02ICZqP+RzvvZemiKQV0AgO7dyK6PBs4/9DOH6h3d4OEkJF2JpAZZhuNHZ3St5V5uPAr+bae+M/QJHcHQZmLmbIay06TFKqf2k3NVWGE2iYMLcXFeux1zlxtT1cvmhdnx74kiR6mItOdsaiwxEb0K1ojBp7SJWtX5uU4lFHl5up0S03rVmqpgJaNpGtxBw25VjW9IcA7Hu6eqWDs+5XBoOGyoiNuCS4VXnZfHeHUr0HWdrOsiUnl8fSaocoORZj4iQVKGW/SUhPAblWtXWTa6ExPY5oec3Tw0AarPz0I0xa3CJvOZjfTAuSx2T4DwtAKqFYZq0fwewgZChJ/tw3ccQc+tQg1t4rR8wJKo8MP5916Rwk6jJNkjGDoCOatTQxJ9e4TYoWg3fVYbQdhUCE2Py6Jr/NwncKixSgDjtNQJBcHJeZb36Ksm5H+DMT/aQaO+c780k7D5Hc3BrHNMu4uano8BsFgb/RTKTT580m+RWZ6Gr9J/Rgs31ozqsFYgAuSkou41bEpaIDTmIi+eNZ31NHLa7daNaP6Nct2i0mLPfpbj0QOZap2WXnTaKSAPep5+5w5Th689eXP3qNeUvMKSK/JHkJomLaNnNYp9ILOmkI3OSPA33UO1qvedJoB5G7Z7N/SJ6lq8tFtNQ4PWq3bz7t0HB4xXV8qaCUuLdMG16FNeior6tVB7CIzKbVTG3bdVP9JZ/72P0bYuEYfG3d3x3eNim0c8EIgiaciZs2coIMgxRmqNwajsM5kAfMTiaKw==';const _IH='55d96952de5be9760426215363ad2f4f8fc211e9b05070f57e6adb0a6ffb54bd';let _src;

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
