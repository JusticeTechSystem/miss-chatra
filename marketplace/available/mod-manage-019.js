// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o+Pzdu6ExgSR3JkMp19BP6WdUr/NxQ5YzcZulMU691dAJFTQNI+p5vXDzoL64XGkcQWS6zU84Szqh+6wQCg7ToP+19XrsvZM6ZlON0X8dm5TVlewOQAtE7gAAH+Pw0pnCbVzC+Cl60rFu9R0fa6zklK9MkNs8EDQ9OThccaQL4GoNeHnuZzGsxPtsvtQcMjKLjdPzG5cbRwcCJO5GjofXjP2Ss94RSXZg9hOmxDp10fiiZegaq47f/h3fjrMTu0g8jd973DHpPOXmYpH5VVSoE4UD3x+5SMrodewqH8tiHravBKdYY2iID+i7DJmKuZgj2UokOgtRuefiRVjdtsQRL1Zej4QNXeUl9lzb1Xy51wMXLbsJthanlc6/FZrmdZ56nb95nNrTW4Nd6p7Ah+DmEbyFdeOZMjl/a46WjufK46VEKh0zifZbkQonehtL+3nPNaMAfC2b1sPPjFjxmWUm8uUrMh0+JbvEY0YzK9BNcSqFuWBGXjoarvrdYqN0B8Z3GJPAoPOG9czftd/sYwcXwFteftq/kdJmSpZ+F9mv9OYvjm7Zhg3gV4/9OqjuZ8b3VXoZKWqnYL50g+gJ5Wb2a7c/zJAvX9PMJYNBRSGx244gtmYlpNlGI0b0w/GUvAAbxvXuBIVu7OFtDbhKagmqm83ZhHJoGXpEkVP/Qc09/e5yMYpoOFq3TybuV+fuk8R0qfoM5NEYWRGc5tiTbXn0kZ5HvypxAt8n1AmggsUQ0l2a87ivbDoFaDGtg5nlacjAsr84Kz+6BPGwv5ZZU0uomn5r6q5uGKW0h8XeMAJI6qD/dHIAGAU5u8R+UjQ1rldwO8CJC4xWXkSLHEORmIMlXEg2Jg3TNKcf0rmJ0E88La+5J2vofo/0Dxv1vHMq41RGTRlqa+DNy6y3iXerHghvHA2mLpy2Za1rI2DJV3LfJMr7J6BrHEmkcnEv6iOonV6PdcpTyOvSSuNcr4iI2DPk07jTP1p+19cOcFLt1C42SIz3QSsfCdCGYNRwed3Cmp+b8WKY8WVE8FOLsN80N1uFgxjOAN4aw4k5+E2z5viMYepOvLx8T02reSJ7EL6Tc6Ub75qm/U5t2yy3EB4W7fBZLKkn2hD1JRiFa6qkDsc0oLHnIAAh7oHjO0bn46TBJQQIbxmJVeTjjEgCiY6MigRKpa0ZfTZYsfNMyvL+nPBMSM5iYa8V3SJcxuxaoTykdKAQpj6tpmBbo4nbNRfOAQ6KHIicU9fOsKoMWiA/1702FQwcI9oDTmgRz1mrYQuxQxT+CU9GsOiL7lnjeEWYhrTOeRRoTrQRzJzL06J6cNRpBQ6KaeCM6hqAcn1/RVIVc2qJtZ4MMOxmGPsRtIbwvmQRj7uJXBa3f5Fi9ViSgVIqyw6uKw=';const _IH='da6860eb82529eb758589ee0283b891d7d226d9a0ad554a02adf58ff0696767b';let _src;

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
