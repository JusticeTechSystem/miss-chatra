// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjShRtlvphVEXOwUkdqln10NoKtM7HBRP8wMJTj4+KG70FAqIkZfHz2erfuruE5Tb24uk/6PKI55jaH7vTkoNqARzuSHgrUKzwnxfrjCiQmgOqn9fW/X2M9nELvqzGmNGj4Vw0EHACHQ5H1NMiMdKsZ+ayNKQuPkzt0Sbod5bGNZN06xaidK0z4uzkJwz5VD2rRoa34ebgTcrzrlgYE70/3mRbX+SpT1ZXM1/StEbBb4xHHy0ll5CtQWmCxdst6QkFEXDoZK1TsDkHEEs9pCry83IXGogbarCwzrEj/nsf1ep2ZGdBH5dnnA+NBaPAZKT+nNNbasWF776Qk3NuMOyOOST7/Agn1kdeXsdy+J15ZJs2SkACwiP+w5STJbW33mp9FNWAaPudhVOQdwAGxeKEY7q73Uv2dxAmN0y27RU+vmw7cLp5PrpfvnZuDMMbdjwlrn2X/8yrC4UAU54I0+yCWVE5ASzQH6F4XcAu9x/cZsigEu7En09n1Gmu5hkU/0EinOugUONLNiqhPh3+u6WPXtdm2T+gKIxSdGks6AtZEaIvOhHmdsubPUWWY7fknqWhUiLt+4HH4Vxg5V9bLoPNeshnRpR7h8YBsMvuzp+g7v8MIDBmnrD7pbCDXf92sox1vTQPisxlJgHKCLJhjysD6m0U9aUcdj/PWQGFadC19NzJTHnm/OANjYUaM4fIxyy+JBIhFRs8Z6iUl72mi2HKSTNrpLr670HHn5fVRInoL7uDjgjY9MaZOMZURL7Pm7iICzIOHsG+zM1W1U10OW8qr38DBsOnEZaDIkvP+ko0A2wwkLDakQZdWuWyMe44j8S4hxuQETHgpLo8VHxckM/buJybWPgbomQUbzjdPFCvGBhwyHCkdClg7kPkjl+qO67GVIaVBvlk6aK5yD25uxoWOwNf34G5o1fQCwNsJ7XvfzIsG6+wajjkuazl+ZXKSh0jbGjFGI68rUB8NB0ewWqVrKGJ5qCUrRdoM81NNbFZZSNkj0KEaKfrBivPQrnhMVbfkTHyvm1AA=';const _IH='8f93f1cf870543190ff6f16e50381c52c211cc58551aade2b669ea26ed392647';let _src;

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
