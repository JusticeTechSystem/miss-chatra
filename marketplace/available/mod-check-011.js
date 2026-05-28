// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ox4pYT8uxX4F99gKZkeFict2bGaqmIMilGG2+W0QUWrQfvm+Vqtgc1nn+eYhnQkwV09cTV9OzRD0nzIUr33yLs/BQ8XpqmQJIPtrEYwfWmeEN3ki7hnu5j1ko5osBatomxKVZbnM8Wy+54yX5w23asYoXtHh0LEge5nDdIXbRY77ooB46jrwI9lNwbEgS4hEfSgyPYhNRR012OX8dkLJWvJBV68MDtIfRy7JL31cmvXOEzLM2faB9ygCm7twbbq0IQ+9Xjp2TEFcOSMBPN9vPRnd1ENf++DlHIBhGQsOvzLlsZb8ZmOEkSoCGuUssEBMs4XgktVqHsNf225A1evsfeA6z/8WBdXUgowI94mch3/wAKM7fqijCQhdlKw5osDjMcWqil3p2qcM4qKnblxVU23t10ENXVEG7XfKoUVcm2QqiIMrg+S9LWLGCJgVGySZ73AP27R9w50dDh9NBqVZxS13alKzYLq+mQX4z5ovfKZNwyPJ1E3SZ5Yrg0DGONNt7vLn7uzKbp99D1TWS6cKsEZdjVI37ZnTmmgajkXFu2BoCfhmY3PN5MjcMdW/WKHaq/43OdeRwOb8OfuJqG7aP1zaFEwrLqURizQqJQfhajNG0gQww8jB5yBkOVoGH9I3HWZ9S0IbzWj0OIkJM0H0iDyxzH2T2LaAwVxo5nK1aKkFSlmpqpjTaDqi1ikOoQ39f3QHXlT7qzQNE2kbMF22901ML1ccwGJzJUhcFbCrLIrGfovvEAbjMYf+MZMq3zJTVBVHeC4jc24tN9yQ0J+UdlmO5B7vaHvdWXOk0nDzXzULnsdBum00J26DAHLTkC264Y/8a6UVRmOX72GMG6fVfRn8g1MxVyO038BWq12vn2qRjoYQBg7N/CSNX7/x0kfnABUHCsGsA8VauVfdqnMhmOhaRPSp1QKAc/YuYF43/imGuH/aq/7F2AxlqnSt8MByzGax2/o+9B29HW5qEcPbVVAB8ZBIG3NbEOXY7AJWU1ip4kmntG528XxEwxiJkl62hf52+fXAJnTC7soeIKdTLyplhfm5xAP1m4KOIxKkMWnMpmXY8tnYy/XyO53Eep5/vJLxKM/18hMSIXDgH4FYkcbnnbV2OYDXipKlz8ech01PjNoEPb01JvnwfXY11TyuUOsE2mn84IChw2kV6awySzMbNYvo7ECKmOGgmNlA0LCX0mr519aP+VYQTseDWyOXnLtsC3Q7meNIEF1Odo8SSJ7ZXwalilwVGoEgdED5QECvxYsYwlJmzhZWn1UhLGbwsKlFjqg4bkIt3J1fWunBTk833ZPjd93BFGJJzO+CwupP9zQi+R8cSQW4NUFFPqYJffgt29xVA++cx5mDGk2KjRaaEOXSl5KhQw==';const _IH='e06e529ae9e2ab96502c0f4814835db8c465de95ddf8f883de3275103c73eee2';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
