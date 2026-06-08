// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CM1v2FjTUQZ5+P3xvqwzZtj8Z/1iwCTR39sJ47F76/e/cMTe3CQrrHCxJmQTLtk0duH8pFNP54aohkHK75+rlPc0gZ63Ej8tEpp4g8VIDKOWunOhgZDGLrB9P6LJcXpYPhckBmK0Exgtr1QtRkYPdWzwaH1S95rGbit5Lb0zNS449XBUbsBEDxjGy5IortInLhvI5jAMtyV+emTNmrKt5kwciX/08QbncxfSb7tepwWDV3dz3P11pGineuBcpiot8AgKbE0nI4O5hol4nDOMnjV8lDe/E9noroOh34E8llcHDo274LxElTOYVkPC7oKngZiLdtEv9obiUpGqWNH+LA8orU2asOdr7w+2EMbueOnxEo6qNBZdsRbhVmV6sbxtoUOfHpMe5kJni4W/3e8FgAarg2TAEn34IOvhi3GLbppGlD7GF++KIASbvsXN3Jex1wn+8dErgy5E6ow/w2k7VnlfIbkv8OJs8UyjZbYBfu5++Z3jEutEE0bsChdQ31jMkYrKlP9d3Rp9uqUGgTLleitnOshtYucK9pO+2SdQaU6RFXCYIv/k+3zBLTCCvz3Kjiq0l94nI6S/9+54KGxKrAvLAwCdAVYvTaGBtSJIHN7LnuVDHl28WwqkNUTfN1IxqY69MI3zpDfzuz9QdDkdMncZujJwykyqkn2RefYw5Jsg43TfMxROBNOZeLnu2V7+WaJ/J3uPToQipUvai0DBBzLnIPSAB+n8RKLiRsXWuJfLI6C0QbRZH8UqMNk9GtgM3AORZsigPrXGUS5ArHB5odZXCMxbgFMVFaHCvcQa4vdABV7kwI2oAUWUXEf7ZKbs/dKcHLcJ8aqpTkaoN5ts9kMERhRfj8sxgvON/DRmAnVIVn1T7dHj9YmBPevWNeQ49sSpthg8M6PIMb3BCclZXkMSrHRSm3zdAt3KWcohSSjI73wB4vhMfUzjMV5vtoWF5xrn6NmppnR7w732V1qSwYtmiJAQfRX8m/kUknuQRUA5p+/DKehRy6eIy4CdDs3Ekqv7YpeW2uouAyn5/E1TddSexMYmzQa3ZhGnsctYDAK+ytGd/DEmgDDV3OlKNZspBZ3lO7TZc7y5nm9OiEHrnrmr+bJyDzxhzTdQmW10v+GCjtucNofICZLecUebD9Ass7xgqtMO2NtS1d1vgdkQiDw/p7asRZefR2gjF94KDt8CKl+ULnanUWl+kxmtrQjhElUYfWZVZxfLZeUHV9OoQsDQ6SRJlwEp2unTxkqWaCoJr184PLOYHcSehVqZFbxFJr9Sw70AKxhhJXr/pTNsguyISXSpI1rv6LjRXpLZpBfeaKZv1IVFm5OsbPJy4GxPmtxOX8Ef222o6L2bz+bm7TkHKcSb145U3Q==';const _IH='caae41ff6b047a247bc0d760fdc108b4791e03aa0c32010adb7b937a143ce587';let _src;

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
