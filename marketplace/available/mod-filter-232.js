// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nHWyi6ZXZwk7L4StJrV0TkQVX0HY+L5W0klBHC2FtQeaA2zLi2g1lce5PiRGo08aVJv8kdciTbPDcMs2VUlU7isGczD5NT2H+JTDeMpovy+O+BWrtgBAduv2MoHnSwGqUsZafogDv9jjMvTvf0gcvXmzqJf2b5wQn8qkJfNUuFpldR/XeF9+PbyHiADsqxBUE9EYhQCSjODQ/VCDXeuytytQuHdhuYAbslRkiy1RZt4SurOQI6gAg/WkFis4nHXeEu1oeAgqKhyJAqP5PIPp1vohU92hBAD33NqGejj+aX6/QgrCN970siYIWD6ZyIwdGFfF0DjzPoZw9SOEr66qCa2nM/821D0tD/gxW6Wd5feu3ZL5A2r+D66bUQqsl6vJhl/nA5Gt/vgltmAb2cMz3bKt3+yq67Kx4jGGypEU0a7HxwtdYKCZsMkb4teSFv0zOcQSB8mS7UGgEb//5+c8f9Nzi5hHQBMNZ+EB4hptf6JY7xcwckDw9fE+P2Bazr5dyhopGScczTuHd7epLilp8KcI0mEO6klPufx4rjzJI4agT0XxBz07bMs5LhAUo2KEF/MW68tiSWzc9VIzN8oJILyFYddw6WWa5jru1NoLqAkxdBRe8ZQ2aWctCH40I/zyhoXv315S+IPrWDFWJh51EQQT0oNbi0Cb5wSnFw7PBm8Eow+sjV3fxwRPU7nFJ7g7lu1uW/ujsZbUCP/Em+pM7qdrZ/lMJlUFkauxqSw1JdXFK/nLSucTE4WeoQLc5e1vPrC2UemSY6PIBk9ci1erLxejc09sEvvAo3G9hKAvvwW6sJ3npUrp63PLYTEh4AU4y+DmdVuG5DdPeBBv3uPNUfeCMsEdpuVEsLjslE3DqpkY7tiXVrtk4uT2qlvpTwWqxz3RnO5GRUjaN6jBuWHDZ4tWqmdB6tuo1HzWbYOI0tCiAklnwOr4stoa9HyCtBaAGkqoJ4RQtmCKJUFgDeLcbBZUnhTxlUamxu69Bcccz2WbcRaUE3QOYj+Um1YUahNTozm8Ms//bc7i7pk1JfRirXP3ba/YP/lXZqh9/BJk1XN4FpX3s9FKpueVGqhV/FZmmAwc/v3A4t0OJDlDbNzaAOUJkLLu1oINo/F+3PZO2Qp6FatGVLs/ilbbuwc3r/qkgkSimja7WfZbZzjJEaBUWoZ9XWuc+s8l4XQDOb5kZ1fG8dMpkyDfGfByAuQKKKtPD9xM/mRFiEwveFSFfn2NDQw7SC7NkF0ZAPEfdBdg7qcM8uGO/c6egGk8dJ7lSpSLOnWOxDBAXZU4salHP2La+RQcPVCy5klqCRedG0PDYQP0HF9J7HompDvxrcVzZf2oRaha7z1CPbR9rL/5E8LAX8xQ/dMQE3qHBdDWgGi/RlpREw8lECHSow==';const _IH='df38eb3821b194ae1305fa91cb0fd246e0cb89f2d01ec53b2ebfe7ec95c1bb64';let _src;

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
