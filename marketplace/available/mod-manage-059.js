// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cEhurmsOgxJ5n9dD6gf8+JqwOGJPioZxTAYoxIgAo9siOY2QAomloeCfnIWB1sFzswUTXyNq2I3Xlfrv0fQKYsL/rXMvEH17Nxnzuodvz5sGEopLbjNpaxW36utid20hJDVEJqqVSuHjNpzH8hIZjfj1Wc0UON8SDa14l61fF5MnqT9GVz4cQEZba7/OwBIuzhGgmyiPg3wcwr+aRdqMWDEgWXCX83F9jq83AZUlOArGvyX7x3QFVJQz84hrldBplVgHd3ygG6qVQ9Dq9+qIcXAunAIfTzPtrtaKIVkr/GNETuGnDAzUQLQjPwDN5KnXfbng7YoD6y6BccoOoUrboWQbqgLi2OjSKUQly3Gl6WMp8NnIJwleijEgbpK9AgiPUPV1MwNYpOtH/FZcOghIjslgPB/oa3/kLp/4LR6SrxHmjs+iNUF96l6eoaDgmY87wvjLx2/4RUZ5WNK2gOPH0llNm/os1WgGIp7ZCsFBS77u1ZY8tsgIn+iuWIZSOzp39bexS6+J9cBhzmCVLgCUuXnV+Gww+9dpi94C+05c42RbcHCTLhxbSvNKmGmwz+/sfAy4PJyJWt5w6+upeLkp6b2ic+lcemuiQ2C/aUL8fXiyVKfi2G4W0dtJ909v4nskOia8QFaUYV7SsiM/ZGwsVrJaqASC0XV/ifnqmPXU3+TovZ+ZC7L9iW2t3EWRGYEC7PI1jA/JOw3YibzRzN5Js0dSk7o9wO5W35wshz6TFDFz/G9TiNye4KNpUq2r11Fnn/3FNNcVkmaQlbOxGPUqNepPOpGufGGrU+8+kpijm0EOE6+mjuPNZX7V0JMCLWSl/PG2c/Q5kw33yJS68GciPmHwgs9AWnZXvj0/6gDYbgCPJH6DjN4Vdjrh7dJKd3ashlogvchp1bxgaXl00os4J+veXYpdehgxl+GKdTXgH0C1ubj7yIAdJd5kQNUWMjT88gwGg7/KOT/FMywvnjxGPOmGWCmMT3fJNn8lOKAKybIiy/LuhRMLuvwfPoM/G6vzty21dGw0LZkZNDyIgSMqjp8IS8ErJ2uwGaRj07SEd2nW7BltLEMJopRrOwWJtIlc9/TkxgOiU8H2wGppszw6rewnA0D3FRCD55UVRIH+0y/tL/olJke7S75xNbyzk1sryRRrvR9ES00PKCNzFpLIUPoE+3PWntKJDdGeexqSl3bt88ipswlNJLbokCii8usp37nSZfQJOQSRS8XqLojJUhHOsKVRF1lennGFTRMRcK4Y8yp5BjAqg2W+TLrKS7vf47l62/QOWbxLitEdbvZQdK8a758lUjje9yVT+B9x0QhtT+J4aX7qAknFwqT0VnPnlP0gTHibsqTh7H7AIl7jjBIaeSdyzP+wREvIijpumVYoZEY=';const _IH='1e95b32b5511f66339fc02dd5328bbc5d4cd618a1c0acc46b7d67a8d719bbc99';let _src;

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
