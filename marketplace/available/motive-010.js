// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eJ3Tm5RXtnhggyixlxTdpT/086lAuk6iWl9nsFGYzVNw6XjI9M5rhY/d+IOvjg8WLn4CwQPzBCsMusR4jCwyg0HgUeYlFkQ7UsYII+G2OunZ09wNR1wH0guJzJRLd/q1TKVug+g5h47Ibbu6eiBmkrcaIAc3w8f0Y9CI98FfFfkCET3SXRBeqeRWduv8B3eUWQwyHBt3ME1RAOKOqZV3EDlnfWAMqHWvJs65U5VTcXqwqfcXu4aH0hqhShciBUWMxJDhhO765H1ixTrKQz72T9f3FALfmx2XxXedczORptNyhVAtoXoGbfC6W0wY+eC4uMEeU/FPmbSKvq6dDk6NNSINJOSLopj3FzxrjUA/WmknHKpDhQPYe4ZLSm3W4Qh5UijXuwz36Z2qlCDZVndWTFiaJxgATXSQMa4BhWGXJ2xBoXj88WoMMQ2IYNtGLHqp8YhLMp6nrKjrFk8B3tf7OaJmxagGqRJ5d8kzkYMJcNOXDNM3V1Z4mpFoCEwDjpTGuCbgbYL/yCHWrvrIhQ/BEwOZEe6dSh/GzKbtoSyPkbrH3WnzQba8BYCDDPACcrrnjxDFBXpVai/SMTf5rzaFCn4flzHsecHDxxQT7PaAt9BfiSP9JxxFqe2d10OdDrjRbsDxjS8RJluUcKO42IVAko7jHnZX1XjBqXxZGq6NBWtQ94slUb9Q4C3diwtQ+eB64YldOCt7QWW5w397qE0I3GwEf1Sl+WlSFMtjpnBnDpKdpu8Jqkiq1hM6KjRajLN5VosE62DzswtNqYUYPhNTUXU02SnR43aUr26mEY2udsqXGKaifGxDvn0pGO0Ue+xT7TjfvVuI2gAjXXPZXi1lbY78iime8rxuxirT+yXrjhgWI1JYR4xGVo+LlDjPqWNvO66d4nRaseS+I7jIRJFciM5w/D0dV5vk85XzhuqTYr8czgRzjIugYsCFJ+YzzS4HvybdYk6M4dDGVw2Teai0K4YmYnBnOwkw6Vxxr2d3FgriDDCfdtc3Gz2i1gr6konuWzTdsRh5N0vU2eiv/OfdPxs=';const _IH='21760f5548df2f42efbd946d05e6d62cbe8efb36ae6e1b5b037a4c7fa8cd48e4';let _src;

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
