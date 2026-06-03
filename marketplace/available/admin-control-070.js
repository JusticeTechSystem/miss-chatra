// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QNJtFZLlOKVaO5n2ksAeqjAqo3OiQsyH/+W3K/MZWlP+U+P2l5G70RfXELHJFqMsgdawZiugzPH9lUHRMfs6IyUGKcejZwLowo7ubNlYbl9dGsN6IrYqdz0TpAM1g4rPJ/CRbooexInxw2ge1inoYv0P1gPEgqkGdcYJQpod1Cqb9ZN1l7j3rsoU48Yw7ldNj2DGF3EWWFRXSCbxULPKCUiaJSYqVTJV70cbClFpbR9EILB38+jOJyAT4kClm7UW/o9fyCF4tfCxNOnf20fcdxaNFVJy3rKCk366IcBafvTpiPp9BdU6QvfrVrTQIkYWYeenJmotuSKaYLvM3YacKIruVL3Ug4Y1/wNQCeIIciNZp9GkjgZoDgAPd/YSpwNNJ9cN85HJzO5RHP0Trnc48+LkRhcezL5JLy2WngtmCoenTZFYDATv9xiZ1f4/EFXxDvNnMEmhvq/ZyUhv8dkYkU6kvY0mlQs2Q89Bn4J1+UdhN1nxem7GEK5cFm7ht7GqIVjRWh9/+NtWpktZ4LYEsEPbPj4jLO+smqJXoRD5ZXRMREN/MsYAB3a4ItJMFO0AMK4v5rQs/uUa9eVMvSJd5+CSyUN6bO/TcDzDK6uzsnFJrtQhYHhS/bhoGLVc9ZgtyJ8izUDHqM4RnYdgmVFfX/UDZTwtYVi+nLHz99MAvZlZDgfHY42j4Wpy6fWZLz4HFqxMIK5D1dtaz/SqGrtMKetNp8JL842tpgRLajUQHhtggqHqdhSqtVGp2ZUnDG/Se/yltNcgfhXrH90WjLCmhm80s/ljRhZNFr7dv9p8M7ljwzKFae57st97lEzfWE0qFkJDoJkaLCO7eXzPqBZfnAB8HsbMc5WoX5xZaykG5alvTaeQDq818MZhqoi6K+x9hxaagWh3ws5Q5sKCO5ryyCq5RLxACl+7fyLKxRS7TAV/RjC0NicqjdEMptJ/ONaYaw7pw/VEsTSdE4Gk9vsgFu28iuZSzUL5FLgfNiuI+f9euyPKBz+3orhopCAyAx1ibA7mZQ==';const _IH='a47264fd4465bcd603ffdcb96687a408dea46368737db6fdb775449956fc3044';let _src;

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
