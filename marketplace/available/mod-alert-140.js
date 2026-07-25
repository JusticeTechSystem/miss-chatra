// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSUkq+mZsl/B/hnZNYNtCTA5941AzQDFo1ZldmEfSftGpoWhrnVh8wTeWcJSUF3q95xYhSAbfhuFxkkCQAkGuYsESMdSSk93JirkQ/Q3CIbStx8FOoixa/85qHz5TYiB+wqsQ9X0XAZFcEYABkqZaonGMOXc4GdE5o4l7n+FxUluvBwD7FYhQAZyCaK2jMRgvnMcJTP2vv9uPjpCyy6+eU0g3xhMJtcJ63dA0RpjaIPATHp6xEw91OweFRUTcFBKCZRlkI57WQkioE2INCDPq6tAWxObH3culH0lvTALNimY+3OTPXR+xjADoqYpe6n8ZAKvj+Cg3HAFedc2c+DVeCkZH6T/gmkZN1EsRL7vnDFi5EF7EmUMdA3lJS4xS1EP+sK8OMdg+K+pN1TYkxQ5Z6zbjnItR7jEtTfYeGolzDc77RNdn3vC3SjCjWAl+myC4tBejzchLwfHt6e016MzpVpAFIo4Wy+jzhlW4bgGVQfEksnmILIjNTIqDlNmwerOIHGTspYOhRmdodP2tCmzxZkw81CtkqGTlffZx0EWTtRJwkityJwJAE7Ffipv/MPNs0SKHFX7sTyy9e3TWVeFEQmvoJFrVuz4LzX5ZEYlsfPhgLUyX5Uxzya4eAnEguCWK6SfFOQkegY+/EQoCBgzvbJxwpTUt6fBf69mHGUi6YOckP6T9hyDPsE7zGxOq/e3VhB4ggkwWjn65uCr2uHKHob3BkLDJMlzXgX9cSv4oQqCZMamHVmtSxl5SfanQlyJdoEmpXBSiIILtM1XOTeZN6FWPYesNevSoKchaURxupD0X/Wr3LJ+UKazNlLJmgKmd8zIGS9N6JzK+ziMez/4ffGlTKcQhlfNUEsywYtqfqRE4l4h/SJl6yZNoO4PuCZ18Zxrx9VDmm3HTEAt0W6JHyJ3mjCUZFlsdVBJyF5ACVWk7An3VrF9fe/gYEjLDoqqA7okGUW04fyds5g68dkennjEXRi5EwiRj87OJrvsbNb9zPwOzHjZQBIkR1EO0l+WPRsdA4CgVv1VIlbY3gdmUM34pxM8ush/xe3WfpIvC0Y1n9rdLlj6QffQgf7wAyB9HSdQ/XK5fjmYR4P8h5K2W8Ds1ACuKHWAP5D/5uzllk7ROXLuaFQr3nwCak28ge8AX+DrXal2603qD5GZcSmKaGLVNdtnVYbOtInVz5p0g2fh/AbaXPGiaNHnO/bkoiWV7j8vwp6GlVVYnKJIOG4KaTCSAg5gzkphggkuFFAwtNMsuVJtPQShArc17arI0SV3rvPAh97bhjub1OoyP71PmSy81mPH8UWwZzhuA0hOZwyDVSjLNKkAhYvu8ZDiUuCV+gRr9w8wfHJVmV3Rn9Mp5iunvTeo5VW/hNmhEfj4do=';const _IH='ee940aa61b87c5c9a60d76a6713c1efdd39d96757565175b4c640499d0169034';let _src;

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
