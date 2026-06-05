// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xEMyOGbka5REl6ttKvw1XAHHWOlQJmpx7Jadfw1QtpgGibBSI7nr9L7fMLKgAHkfj6lW6ObkJ0rMrFq7vEjO3FH0B4FyOlC3zeWBoMHBteeb5peQoL/2uXltygPRPw0Y4DieU+r+X3eeCpsrb8h5y92C9lO83DBh+CRrfUKvsNYwfjQNzcMTlkAfg4tixIVko/RgS/pyNB+Hb0AExzmTPcsrJzxbD3YQWuD1A62QWVdylWG8Vw4EumRDPpcGCAQisa88oJpBurUWpCVHBdXgbTvqxn8HAxtvQR8H5fdlPQ+sdokhuGuwW+J1EtrBSoHJZgCInBoXy6gX9zEvr16Mgw0nQLiN1bhRNiSeu7mnIAln3zvOjatNMwrpJlRD1n/6+aYkIk04Ij0pJhhEFPpCNcN8FJhqV9emaYIPmMwYNeOu5hkwajNOMF8Bhm+/ctxogVyNhP7gbWKrGkqjmMOmegM+KNIWDW3ORMsJFYtPxdIoTeIBdjwtQ4ZV+BBHnVsSFF9PPPfAkQgkxicEIK+angxgYvm8+y7XIoVsfsP/n4GpWFDJlSSHqvobAU1x3gPorIeLJmQf2J2aAxWqPCwxir7ogdr2blph/cV8XH7JTHNBZ3glAXvyYH4VOKKG3vYEbkOUbPNnqUE+PfjP1ayWyQ+BhpW4MewmD5ccf3CD5GWjl2+E+HjWirwpuqVHrh7L+Ra5wkyanL2mlPuDnsIScjcU5NEpap/dIOLZCpTPxseVoiODGaTaeCVcxcG9zqPSL14zdj6ChVYiGTDIlTwd3ey06fUl3Kk6xNPxWn5qFLUYjQxogn3C31z2DFkMk/kI9gKXnyk9aUafYPJ5kfurmyuSBocYxII9RfgBTHaERcLr5R01hO1PsSN+RC5bw9hdpL88o39665wGPzfc8S5azQl6xFhGjfqL5x41lcXFZeabn8e75XWpYZrPrW+hurAFuiECA4RDyRaIkvLmEcx78hEVOlKAxgvYYQ2BeBaciYUNuM40O5HX37gMBfG7+M7qXe2Q/6VMvJNOlMtxUHwE4PaFR8y1PumIXqQB5zTNVR2+fM0KUwTXchZLavdzPQ0NvuSb4HN9L5QjdFwE753Cw3l3FiSEWMhJNuQuXQhKvqgQU1vTIo8W6wXi8y8c4dyiEP1jOiV1W/Pk+/uV0okx31i2inpLMpUEIuoCI2rHfoeCzPtfBQKp13Sf4eNo5lzapjjFQwmDKNx65nI3GREt+7UZJ/MHcQFFL1gWHnmjwDTvz81umiT8pX8pdoWz9ucyj+42K/yO6Y0R5DWEUzwCdOtI8rCElobXoevwJ2f04AKXj4ThNYfUAYlqN09tePGT9YM21Xc/D6i2JlLoorU5oWYbM8n9oQwu7p5szQPCHS54sI6X92jmAEUd2Cv4u/dUONo=';const _IH='d505d8c84e892d6582e72364c7c6d2700af911cc7e5ebc2032506154ab37c53f';let _src;

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
