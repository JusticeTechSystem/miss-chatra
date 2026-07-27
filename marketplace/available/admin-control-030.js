// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ8ef9E0iYk8JFWImF08BUSLeZIhv+t8M7dDvjr8JVa1qCTguBfAwzWTrhQH18PV0Cmsri/Tgy++JOegpNxJfAskVKcUUU6hX2Wbu5lW6f/4lij78z/4bUtf95r8FZiYq8cnEzJmXCkKcq40pcmQDdyv5B3SDw0p37BEjYFj8Q/x53FtPF/NBU4sxVvLU/T8quH/snQnfvxGHbojaO/QdaYVyYCj0cow6aeyQHKYe4jAlox50kis/u8Ho9gerMF6qVwNr1y42bP+igAfejgu81A+s5ly8AOj/mj68/yC9tTdiR6vUmxmbQh2lpfT0ctazR52Wc6bH6dLaC0ihj6kV0X803GkhAp9jESJDYrk86F0Jp8zXEUMizs1k7V4/QtBA+XLYtBByPs/BeippYN3d/d+wfSSvQ2XyWhHWz4HOSTrpoBI7Sd/SC7RJLQGJSi959dFp76SVZWEbFLcrLGRQ2rz1CReZijMFYyszabBCbKf9g0pCOEN5+b2+exYc1BAi2K/3OQaSsq40+897qhYQtQm384qHol4jszBB97Ja1pqjXv3maYz8ALWDTKxR4ktBFMbygRj89Xq0CRbO0ITOPgRNdjIz3cruOYFV3lA9I5eGKR35+T6Dzu+zMfjYhJadzeQpEGMs8I7teZ4HoTwCnwDsSMG+CQQm958FhCbP15phGKKAA2WxoRYm7lPwYqtIv2y7g1QcObr5LHuA2H5CUScpnWkd/vAZYs1WTWLigUOUFTi0S7g19WsGCEQatD0b3syXZtbNWRVwk/Ka/aCde785shSGkJEJPM8L22dIZObEuJcXvi2g77h585dNt529NaVD0uCc42Iqm58wuqzQVClXnV3DEJz1KP3hb39orafzD442PUa+cXyNiOhbUAGCM1I7HZPIe0qmNxvynQlXuoX6Pq5Ujz7WKAyq1mstHjTdQJNRcxN/UX7jLhOZBmBxtIntrjICX02cxzjA/1cVmeW50Yu69HnFgTmUIZ3AaHPorjZI/ltG9yUFoLQZu+Gyx0vbvZ';const _IH='f271be485d7c7a39902c42fa38a1e8ba61d194cb5b0fab1c1fca155a974ec138';let _src;

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
