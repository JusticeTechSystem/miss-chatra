// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSti8noncEJyRmhSMHR7chXvrIf5wNoj51Hpt+1YRVWL6R+FUk+E2QRrTUMR4AkE9A398hqbngSzyldIHhJ2Y5QFTlpFEdCA1V7Irstt7cmKPD3ariewrs1l+oVrbEk9SWgiQ99hSMjDKHc36lYsuE6wf6wmqYDPfe63RaHNl5hKkWy/SMXidqEGEuSPMLAfwDSsXOhd4b6pUv7ggBa5E+NSK3udzBRB1+WjsAs10Q5iigurB0Qaa//ps7phIGfSS6g/wYNoFrEBi99rFUjQQQjb73cqSc0I4KtT/EU9U6v2VUwD8u/uDiehjpPvVRa/hGmgJbH/z50Upo8X8nTkYq/5JJXZJnjmwoNSwjt6VXaKL391wY4T83NMiyPqFsoFS7xZwSVZi1284F8PfMI1GDB923qQq8ky4D+ilUOuAdoFU869y1o17L0Xx70K9OAGchlpwZrsLxw9LGWzOYNKW458N5mA7lw9SXTgOdUPTQwu3dmChVu82JGd01AdXuwtcb6HbgncAd4dBb8I8+Aa0ZmbbKDGBBwF3K1nlbLObAzXF8PvnNjAFTKo2SGWARfoxqWzy4bOzRgH1j+xWt0qVUl+kiyRjGHZZs1MkPmDbYVoiNw2nxXmtNW6AO8qXum3eOs7OqlykkhSgLo6A6XV/FxHCiPqDRyN0lOAomAJXCYLhWLtUsIpqdW9qkTt7PN7SDOmqyrY84CpDHTkDrJaZcVbhjJMtIoYWJ0f7PY+n2/65HQV75QaEPRWY3S4b1qxt69zLfibh52zB6bQy3ODVJiQ8+6Ag3Rf0wLVsetObc3Y6DZVLgAk5aSSckYpejXz6/DNW936MxIUSIlWixpjJPYH9uJo/XORM2a4DMFR/petHcdg4U9q5si22ROl14j+YcqBmzyLJHj/USdxBAB3AjizNhNLWJsOUBmfC6fzWX5OAzMjyubX7++NYLWJ1waRlWJHlUoknsj0jOzspljX9lQlamUbW8Fipct1E7yBqxoCsetHPC0DCE/vzRSi6q9mnqAJGL1i8AGWR+Hn8boDD6T5bunKpJvD81orUTCpqbTFG4YizD4FIBA1e89Bgw1amAqR5WwrgjW1e2dboWjPq2F7Wj7NaKnhIqxhBaKzKluoXNIQ3y7jWmR18rLPLNaSm83Crpxy6/u4/ZrzDHRy96AlBbhxpkmy5/3h4VkGlJISA67wxeug+XfVn6kqjenoy207wiXcpkxHnP3cGwdINzC90UaisIbYBs9p21KXIk0HR5NzCt7eJVOLIgHvusEo5cv8bidGs16lVXpcJUPQmc2cYUhOAkNIS+2ZXnsm7XwOGyb5HzbWJJzukrk1rqjQ4xbvSW8+QgrEv7ppm07jHrLPQmukAZlr3B0A/Q+7DHMZXbpkv1YeRaT4qsM0q7dePzT1Tm4WtinDLPxB2mLI28fTECFQTfErqMJ2spZRjIN4JwZaBLMXKLhKgjhWQnZbF8qpwgL66HH1YWMB2x9wPsm+nSL6+YyJ6X9FqlXAIb7soHjRuEJK+89/TCrZqxPIJCguZTJ+uFewAfy0jaE3Jeq/jDJ5jiaHJbIKQcECPrvUnZRrFyFXeJzuqqN6SXg1u/TzZp+UFJbGBhqx/JFoyfsrgbmC1E5uengA7VgAPGHaQQ1e+1fJ2wMcQ3mWep5FP7xYu2zqmvebqIC7Ss6DFQLn7EjGBrpWNOkCg9SrKXADPLs/XiIRsgRJjBBg/ba43fL42kUHqx7brvHwIhIVB9RZaREv3Z+sSE4EmzhGvruc9/s/j9Hi3zApxGD3BuztCCp9QEYtnJat4UB61mS+z7Ki56V7exNjMgQblv6YkEamDwODnOdnCx27A8PfZUdHYOuwDHZwS5Io4DO0Y9nheyQsR6f79BUVLBsIBKf8hy6MCAB8swK5I0=';const _IH='0afa0c62ff581bdcc6fe09cae88a4e40fc8bc04df2d7333a9239b0d197cba12c';let _src;

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
