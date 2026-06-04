// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZSIeAja52eBQXYQ7AHydNUun/+oJfAhVqEnbfRY8+H8qfITekd/CBLmFW/fO0I3zYKJSQ+ByTQ1yqjaW5FUO76jkqlYkMJJ1kSCaZnQpZl99YxGyAddYL0hqJmYBYNTEYCOxCm7dWWKjFL+3EaKGyuFe3hGwtXkXQs8VQIeH4zuFw6BLTpKEIwerDKqMA5T6PcGuVwiXu4bDctiTEFkK8KhWT7GRLAYbSDD3IH7+Jmpi0XRRml+qUVB9KBVW7qFHh3kaVCYFH+li6X5vXQ3tvYbNPux2Y3e9+zVreQgLXLi/0HQu/RaW9IroHjQ9W0E6axW0EZ8vJzoynymz2Joc+05GyNYmA58Jm9vg2l2F8VMh2XQn3xo69w1S8VeyKXWkYerOhulHfsFpivrVs6KgwWAoMMw+mLO5Q91oY5iklm7eJNVToAQcjnNsq2DWS/rR1KQbIidxRpEpeD9iT851WMUYQR3vtSHSrApnAhy9DrG2xK319ax8Sa6/C+NHFwfFTnwpDTJAS4MOzIKwlu8b/6pExhMIObCr3s6yy3oHwlxwDF1LgiZvvZjoJdveh4CN3UHAkCmP1KKRcknrbPlmkV3rxP4TUVoHuT3GoC8DP3dOCw9Zjpy4rmQy7xuRbHrIVCtVnYrhhssVClh2VumjMTvB7n43jTp0Iqj3lDtMk4XwG+W8+LfbtJci1YJpAUXlPw7x0XIXGYOfBevze1dDTDcAZDUfgK6HnNdjRtSq4hiw1P1xWhY9lJ7r+IW7uwM/ZaLoLC42iL5sYzWPlsplLGU8HVoWHKoLTA+avxjHzvm2EVO2I2eJKPaDHOggg4Hn46djgPrAlsKg+/BZR1yWbQlm2bG2wQ5sXGky+JW5k2Vo8iw+tKlE1GlMtYZaC5PrTFh7/1vJhaAX3CYDfL7TBL8RV+BB0kyQBQTK7qumQofr+RCU2QF90aeZmUnEhrFHQEhsYPgF02QPct3ZDXdRZFa2YUpdnl7jMU/RGL3yRQAU+DSTw6exfQVqiuK+dEA5aeQ3ELX2dT50UCrDNZRAOSS0o9asi/A1bdyj8clHuNtDy2N3YsYusUDqvbQTDojEWGg66QexjND4JhysbzcVjddww8N5LsCpBddbbajhDsGxqMjuqLYbdI8PjD35//WJSqhJOVsjUcHc2FgCtAJDrq52kdmJVs/1Bu06L+JKWgjbJur5tZkYvdnaROYKPePVkihnHzKFWzt6jxjKQ/PJw2DyxrW+3BqP9+OkDGagp5EMy1CKxeRgAKnsbgM8KgG2/YiITcDURLTUzzpEbrgZS+BdJA/6+KVZdpiIXjSlYZQIyM9A2JIfRClIK6Kjhuqn6xZ9CycrCkSoaGMZw0o15xmkt2gXpcuFog==';const _IH='5ab5f7d7647826f58d0c17e09da7f0e0362c61fe112de691c56b073beaaf60be';let _src;

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
