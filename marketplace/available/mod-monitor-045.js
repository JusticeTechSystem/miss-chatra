// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YTzSZvHvPa9y8NIS3XccIKVHRf39b8HVT0sAR1ssU/lSLQC0AzbBem+2gsXVgqgymhRaLkDJ+rQ6KYnVvff2PfZzl8aKLAxWURRXH9qrn3VJtbQ6sQcAh18JeQHKuKVlf7AjjApjBuKFHwNjtBT/PMnPf/qQT8bs6oC1EwmfMIpkiia4pTBuH1f73VzYYwDaGqlpmaAJ6dstHdWRFs4i9WS9UUN+7KZ0Jz9mvDtkn7Y0wWm/uVV3cvr7L3i8Y59K3r5xQQ8jJ91MJs1lycw1pG0ihUGIc9yL6jGyMtODA3KSnv1GQz+kmhFNLlJkr9pbb6QvP1sI4ot/ckxyYD07klDtOLhSoYO38a0/FVDkiySUZCtw687ZEgy9APesvrQo4+aJVyQipV4UWbsbJOIy/UgpmzUpa1rvZB7uJsqqUImfIg4GTeEFW04T1mXmimMBglVbxawuMBCpIVhd9y7yXJi1XM32L4S8mEgwL5XuukVL9Vb0xews/RF7W+dQe2tlsLy5Oa5ESMN0h0J4c0l7qwj3Zz20pw+sliXL6Sm+udXyL9xCPCoBrY6fa829H6TjpfNK/as6cLSS4pXgBTabLkWLoWZn0iFcHRfWLukr+nWVtjdDiYJPJ/+ef1ZPDnUFn1tExVEYgFRCr857cHiCWhoPfNPpjtWh4fec8VJcVuuH8IawYFlL432oFmhE/1ZcIaG4gOKoSX0TjT2wjBW4kmtFkAKBSU2YcPpdFiWJHwFWXruWh+OtZO4aycJlI7BbnTKPxiPhk4hXCTwY9XR0A1/qK5AmzkAq58ULoBoYsOqa08XJtGA0SQctuJWn+2PDrgjYkqKKd6VHsC77m0WFnO+LPeWvxFC4nac/QBbD79mviF8Mh+rZGsHJswZsT9ynoQn2NdKWAj1DTZswkQ1FA7QDJSXDUfM6mLmkedUhL4iDiAjq47p0A5MYPFTMctQAhkcIR0BXGJzLL0gkXjwU0MfEOkMLNt0E0o3y3ja76drWGhXiJx3lg5yqNqGsv+bXkcCyuHLDZ4mgeRHc1ymC+M4YRff08dNZG63J6x+iQNMAIcNWkTEQ05fufxrqk35E1MgYWwwVw30vb2Tr4Q6wKk4myFfsBo1jWi4hvOFqWrFL1Or4710MMxw8xjmKnMSEB2jFiaXcjfOm9nLhS8R0FAk31EUt2M2FKPtTTBVuNye8GF+SBXqbIZ843TBxNRUFV/cf/T6gyG8x3TkPNShSRo8+2srfhVv1DzE1VYAYC3CTEV8ze6PINCiOKTVKcFQgHMaGfKhkdcmMlojHcGEId6fE2pJDew4qsEGlMy6j9Zt1byvV4kY8Dl7M58mKC+QCqvbM+B38Gj5sPTHDf99X0/IzgfaQCInNlkFNrD3hiVIJHRq4gGtQrke/LeXg';const _IH='189e69511b86f1c76e33929b57e0b534b46304f6560633d3f1bfd5df1ea622ac';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
