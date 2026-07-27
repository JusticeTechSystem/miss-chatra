// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSOXHLaAVqOjEwPxzg7ysvcFIdxdb6YQH8vaNWELJg9vtZE96+SMQms+3lT55MyJdgfvHHVnHy/H/SJmbM8cVSlFdovJAIaU4kg1XWvxgwPth+NXlt5WPcaXeZPkVQlTgGndVIi19WPRioopKnztNwpBibPgOZdHLe2Cg+jdJ9/jOVkJ/MoOSBaMBBuIdyauymr/oSWtH+xkmIQpz06OOPFOtqnUyZjX/v3p9k74OD5n07kzbsJzIKLcQGJqKc+ln8hhPesShHO/CWbLZXICeW6V1qL5iCNZVjyKY1evnxn76fK6exA4Pg7DqaAGgE1leM7LZ6vl89CbGtHDIiULFRNr17JIUptfJCZOWRTKRVlEJfVkC+tKsPGyOSDZgPfBywb+UR7zOVZN7sJhT468zzRbFUraUU6Z6pvm6soiEpTN/tcL0J8Ug2cyupx7cqwV/XpL+ZhKRRSR+yrho2fvTRIXyirP5lck1zoVL6MEiBz+GWnpA+mBu2zBwMzMmKj9tSn5+eCPYivdrniLCDAzUEZac/0dFCUWQC9Nl8h7VW9+tjOkJ3Izm9f8y1X8cyqdabncIWjl919P/aaeNasXkrvw6ihucAt207qzVqzNxZPP50TcqUbmXrKms+ChZZz9j35c58ZKavo5c3NuCFfming/exVa/DspYlfWjzqnLNyEByp759lo3pu3C9Y9Bf/SnDBrNdND/jJWQ0y1e6ZFUHXStErf8laWrA=';const _IH='fa39f549037978ff376c69339f978218534eb86b16e9fc4d02d9af1733f2ef5b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
