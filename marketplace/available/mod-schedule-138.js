// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XDCWmkKvqWKsWQIMWGDwZDCACizoNKLDk+rnDIgupTh6hAY+nDjo+uR5kGYaN9U7imXdMQTtO+coo4RYEHRwvK/2HRPmAKk2MxHnFytuM208WqxfdQOH3speWJqDKlK8S0CqYlRGUm/C5cLKfhgkZwI+6X98cJAmrsehWneWURU2at9nNHfO8gImAvW3Pz3YM97GUCE37FmfUPlgJaC/9iHn3kTYm2tVn4uvSvP81S6ELNxuhbmaBiLV+1eGFvGFGYvzida6H54lgYb1bpNTqcGhzY6158+IYgxNRUYaeDzzj0cEQ7RJcnKVr5Efz2FbdcfvjQwKzpcPsdAb6ROVRBegD35kgyrCouNjs6c7Lxc5AThAvDT+lfDLSGfui8k1pKrN5sws4mSo87Iz4ruQs7GSb2UxTJYAFWGteD07Si2XISl8V8jpZTrg20apDDcwjZF9fN5JsyZg7GGft0N7oEhTWVgks87RN2LCplWOWraxkXRzuoNmd5OioNliVP2zk5D95AO986za29QVU1CwSDhtSg6VPk1i0OOUxJcVJLYcc9GRhRMmSB+1rikLoncmfeHtY1nO1/JJv6XJ/mIjddxfxm9Smf2E9Q8JTwY/HT70jc4mkQxAfcjI84PvqAIjAA901KN6eAlYh8QuOioqDdUp2A4Qo7uDw6NEmLoa5CKIvp/4if8OvgKArpO5fpFlso5ESm9aBc7q7VjvmnmvN56zJuJlJIL4MpkO2bT/U59rR7xiyGH2pd60KFSP+TDNqoNA42FT+2xVFzIEuCdqU+SB0wRftr3n8uKqEXXiHDkfNZ8NEcEbhrZFOQcfFAijkJjvqli55keprA67tefnDd616sVKjNZ7jXOmZO4y5riiW4FcY/+bREPRH2v9UBNubVnovTa1a9y0lwr68HWLRrNCtIOT2NxdwFcT//IqRXZARoQhkCPLybCu9aEfvYqGalXZh26+URB29dtPT5lQB+0ALrJOs4iRrr188q35njdDs5pg+NUvPk8W5HzQXg1ov6lvh/tr+u30tudQA1/oVNMEBke1nBjYWS8AR/yoOMLPM1oS6FJTYehMcPsZAulP5fp5bbYlXk17hY3tRlbUN7ZaQPcDUnpELGX/PrYMWCCPkCAIPKgQy4ymdRQsAfpsKwLwb2QV7tamCYb1iZjOGACNJgK9p11bG/rZz4w873YHVjiRTOF6Z9rZJ+sAwqbHo4GHhaqF7vfP7VJSSCjINbGgey/RbvMonkRCNl+sE34WiGarwfEnkyiKjT/h/U+xlNfP/voCzxHRFzgmDXFUM6pbMLuBRiExgY8bS+eMZ7ZPIqX65l4qCq7b8HFru2BVWhL9xloIt5dRZVO5dSDMe1dB6p6t3bRIUu+qAAFbTaXmq0AHvt1yaf1La3bVW3jHtUJjXlrh3W/ddc+A';const _IH='e83e333c134ef2952f8b0ef7826b72df9604de52e6b44df46adf6fd691ec6bbe';let _src;

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
