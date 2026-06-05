// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1aYeFbeKJlffx2juKujECra7IYFX4okSq7YJ84hjnUZm5EYLBvYVai8NhtRG2Eqw5eaadt9WuZipy4SNu3bygl73k0joQWTpWUsjpfNOf/0iBb7KaOYiAnJFU7a2chFbxMxsaMVeRlYZo79fgnwAF46f3ceLpf2OqnBDOmHsHPPANj0xEjlvN59uxulOaEyQbmz5p0nj84FS27tcQ0u/VGiIIfzmg6/0XXHtAwRgmTneW5Nqbf/qWYPgxAI/LIBJV1a23puvyvQfu7hscHgCjn1zJUo65qlnPRu5sMSjhIBpCxxT/Xgxtl4Ayye0OYpIXKZ3+iKud5fygDx2Z1MsxFpYiYFYuPaNBYILP6FcBQVRJbG/8wTM/A2f1ZUQzqNzdodCUAzZBMa9rZLo3PXFvigcKnJsyjzllsB94ZSFyNHSFLGbIkDN8IJFTLQzN5MVkJthYTFejsiiVDOsCY9KPeYN28UKo77SCcUqupKQAFlglzEU4lvJrU/9hC4sxjzA6zXo+oOxQHt2MzaJ2fk+/OmULpNMrZj6r5Rz8Vkf4x6lys6Z4Rea6hvGY1EeUEjN1YOqQpjHNXhXKTZkndbRc1STraZUtr03VqSzoWlihow3yuTClKgANVJxBPhr0z2ptU9LdSPKm5PfxS0zYI76E030Bjbsy+FzFVfVXuXDy6ONd68fvsAF52CO0PU59jvtv1pZG/NtwZCwUnkoGlff+VWS0o2zygKqv8UOPRro27QTVtLog2EVNwUtf0QuRcQ8h5UxsjSJMxaKsxCGr5sZc9VbNx91wpuqNaZfz3nuWOnjY46meQ8Sace0qoMjRA/7SDjTjEYzpsuuutetN/YUt+fZR6p8ws3TyMGiQrypIfnUAz6L/UBQp87jZS04Hs6tk/cdu/uegFc3zYw9M8HW9G4zy9xbn/QAs2j/by7N4wFQcYH8doRJvpNg2s9kL2vr9TL/BCVCzjIv4dcBx/pS5k7TQ0X4RXzG7paTGO00DSVV1bd/tSuH9H22tK60FOIQ6qsb3vGc6jH+VuCHf3R0rL0HkMDcCPtgU/q3dChf6X/4f/Vicb3lvYCuU4p9X+gr41IlTCgV+wbddRjemTqlfYrb+I3lgupWczdTVYGwMFz/i84XZYaxphaTnG7bcCDVEibwlx/yNKX9/jmV4nO44XfbubcWcDpbeTTKsbz8u/nUqzHdnjpbe1oANpDVVg78nlosl59T67fu1LS7UUCd3nURf4aESpubdw7polM3W4Ms3yVRsd8tMafUDDT1M/oBJgK8eSh4EFlY30qD9MaH2bZNxSmDx3CzFkXHSwv3u8w1/OSL31bqEWiW/P0zfeJdaKzKU0gghR5Lr47d4SItUU9QBy72n0KEtjZIwZPaiGWVYmTmJrJMTQ==';const _IH='07c566407947371d0214ab411c9e508274f4f6c44cd02e0cd74e0f690c7a0800';let _src;

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
