// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y1aMDZwXf6Cw22pzCNCNu+VQJfZHT6mggTtK8ggub/+E3z2QKU5gkDSc7ooMruevK2sQ7+MSoS/evhZR9dhiZuhkvcn7ck6pw7dU3TJf22ZYMPfScd63qeVCqRmaF3pvluNh/0m4bYKiseshJGuK/KRjb1QMloUSxwFsVhDAO/BJ/9x4RC2/HUXtk+dmnoY3TKIU4awptkqTA1VUs5tV0leKs7yo/4KiVJoF3ue2IKIyYrOK29pTcSwQnMUmj/ImGC+AAs/eWyV4LW126qL6Sp18/OGfo3Vdlm25bX43Vaf6TcnW2WRfVsbvqguRmbXsVcexcYsPkEgwsHkuKzOm864nzkmQKiNvNDGTUf+OOn1toin9exWCtF6JstVwILjaaGzGC98FQUbrI3J0p7/9iUKJCAFhu70aT9sgA5dwIkmzt2nazSckSv3Bc49z/S5zchpPSXT/4Aa+0lJzmfZKuU8LKELfksDIQc7QtqoNOzDMKq3HZfP9O1rxkxo3wgUAOydItAdPLti1llXI/RaxWkZzhWxo1W6+xiOvLdZNEPJl23Un6cXFXBaghUkXzyZljQ1ycxFLIndhGZ3dcfvjVgZKYXK7zDEQogcjGKgXvyiJdlcWk//xTHakXiSnsagx4FuMYAHGt343MAxPurs4n6Hvb5wEiy3Zz7/f7tKjNna2gyhgrlAoRDzhCVrXbRNos1D5LvJqump24dX34sLX5QdkywwgHEVEKK4sRiaXme8rQkC4vt9wL2ZDjgiYGfeG+GKKmkYGX4ezdQmAaMpCzXDxGIts8gjKxZjd/TCgzjwqvZQSophH9BkPmIKENo9VShuGP+Jp4099kstaVRcuf2e+Ts+MxzAANhKjujlBLoDFZ9jq6nZAE0MHDYkXUVavj9hFsHfy8sS7SuTYaX/HnrrfsAVR321DtxaFWB7JE2adZQ85BRAw+Jk57XtvHqsjbuGVoU1ptGFkPK2i8weDquB65igdT1Y2U6ARCPSA5guHk9dJ6Q+4q8lB4+rKIA7brik9dwTcklQi6myD24MRN9D+KJPiJu0euX6dBQ5puBGvwCucsxew+R1SOtzXbgdThiiepaiY+5Wp3MmJhBqN+Ff/8o7dVLByJsVI2u07Xq33ZgTyxtGzDT6H84AY1oGlWDXP1b8r9agyH7Ln1Ha+kytjTgO2f0F8zI8nyIYt7ylC/NoSTTh6JXYNIv2bwUQj7t/fkWiJds+MYcjbJx8=';const _IH='e0fd63c6fe8e633f07b903f8f4fb1536f021cc22e460603856a983134b4ac9c6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
