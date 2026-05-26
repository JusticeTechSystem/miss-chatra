// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PbYBPrwZtDu6BiYVtYKJO788GN3MvZ5elZuOao9sFyE2119zBK0LDnA+NDkQUu7r/PcSf/aadONQk1rPz07LVcKSoV0XRUnk5wY+u36bf7ssL4oVH8/Vn1CIttBF2Yr/FhiPK4SfR5cplt0OfKwlzAuUri0yISjgbBXAcKwHlcFxdJkc6/O+svzmY5ZGiXdDPy8CKkxKvmfwqLST7HJZ7UzeoOcs354Eu+sIcYszw+xQatSsIZIinTidhxDyY2d0HRqX8OCo9Waw2qdKx6tUqH9Rm4/tvk6a7+WSA73KIOMwgT9JEq6ncDm9BX5hSsjA91k7OXupuDOeE/9fGLHiPXct8zJhdPs6esM3notW+qrSpMiGmoJiTGn7nopTvbzWOxrQSw6aaFBEaje0FZKVdDF1kecq0tNFokw8lmNMgPoandCvN2pao7LgIkmB8M2KYkb+0c5OO0D+Q69kgkbIZ3pdr6dXaB3J2DzdzSahRKK7riUpAfMLHa+kOkTtcF1Jsplt28BHNVw+pRT9tLI30JBCDH1Ft7uvhekyoBw0px9G7MU1zMl8+yImrBzdVzM6Cg5714oDtvUnmdmxlX2BaAayYw6IuuFsSQLTwllFepuDyj+1b5kEOULcK4wAedB2+1N6n2Vin17X3gQXpRo9bnpmEpJxDCvBnLKb8aNA0hhy2OYzNFGjGxKyMGygDXYsjwyU8ohORLJAvv29uY96CUb4gUJYXDKoDU8yljEzCdvDQ3U5TAFVQD7H67R33IbF33fY3ACGzYz53Y0PAYu/Jq7p/RnvFTo1Zw/yWc7d5yCnpAkCr/cM5gbL2isUHjOQCLXikosHLOHH/z/tPaynkJ4ZM1YU0a6/eJHBQOLIM85yjMQnA95LHgeBvq012qW9F0/XfVAicyEDEKqQHdP5WiYbRsmXgLJpV5E1Ju+xzXSKpOLFgOumLv1FfUBaWYYY/W5hZTByoZtaueeqMD5nUI/Piaq+h4nN6bPIVSqi3Y9gGAvFj9qf1F7B9L0cJsCmGVALi1RUALacFnqCnsXCbZIlfJqxlDlb57I6G8guE9cT4qWeH1m0xJ0AhHW2EoxU0XDjYBfuk3ZCwyvsLgdE6iEHeZX4frEBj3YZH1INqfc1ETK6Edg3Jh52BddsngRNr2WXWpvu5JRd0jlb4qFANc+hfhgBXIm/NNK3FNts7/5sYQp+jHxWnyjBuTCiECiVA7TfJwN2S1IkCtYq+CZXoK1EyibXrxJU9INf2QEvmi8Vawry0VHsNcSMHk4O/UQIl0uLZBneYIJX/pQOBmupSTgSbRfpfdSX0AxwkaFVt47yxyVXsThkh7edG5ssn3xuai8Afzajd5dAxdjgtWnOWze65lFpKSuu4RbRO0RPyKnUQU94ZKbyBNfkEhEpK8LxhmlBEtAmDzrWhXzJiPEKXJjT/9vg2PA9qMg+6RN8D1FKoL4aFmegbopGjlzau1Sb2S8moe5qRHeW1fbgixRiRhT62bnR0oTcE5Gy6XPHm0uLmuU786DopVE2jkZZJpTzw909Vo6r2Z+/2LLU13+hUHuV30He9Fbkn4gi/dMcp/w5LvSzD9RWWvQNjokJa6EQgg8Y395GqU6Hx08r37nFEnOeh14u2KA+xSXgac1tg8J3OIXBuJyrxEnV1Kjd/FQECI7kw9zTik9YEvS1inLcWr/L5DPBlavRb0TJmpxoVjg/Z4ppZkbqWf6Ru/z59mI4K2VBhisCTlGP0tqtunbga8fAUha7DeM4DzhZ40davdPIuLDevd6vq3ATXDD/8yiI0aQsNQU=';const _IH='1f7edef2767626204dbf14122966cfda85cfea3d7ddc922cb94657cbba87d820';let _src;

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
