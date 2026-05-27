// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vj81F8t8SyvXy/KwkXKKpAU9cSTVVSOTp1y4E/n3cqk6FgxTm+Go5kefXBxmSW4KMlOieo8AUDyKz875XmsUeN0OY7AyLCl4bTdgsRei7MD4ikLd/J/e9FoPOJWeKE+L8YbLqPzKE5uD1PnJ3YEjr88C3KXXoQ0+9c0wA0u/ayo9oIxyIpybcnPEl+RLdh6FsXxh7VHPxRPhmFfGD7HTfao6zWARilLEjFD/atZyebvTxRk0/q506v6P5gcXVSb9nqCfhZD1SGQOM2j0CK8yAXSxv0S2FCJeSs5Wey59NLCGIQhNKc0FxWxMBMIp4c+v99x2a7PPpaP1tso34EhRcc5RN7o7RZEXw4cS2kFNwMVHWrTNFjU16KEc7ucNMS8ucVJ/B93ge6aR/DlseddKKj8lAAkjVYnnw5QbcpGN0N56Yyly76TGj8fMkPIw9ACaPqI3iAkW0UtM2FK9lH4STS/zd+Fx2doM9vaQYW4ZPm6nzRaya+3HKcDvcJF84SgZrDHGKhgK16189H2hHqj6zJvajLOUs1C41SZDcmr4WX0Jq+ps+VqAjKKUqm9bHgtlw9+SoQW1fhJ7eJ+rsdXMOcZbdjrUSG9rfuunAahO1NFy/7u96iJWYbGCe38Yf/rb9slA3ZYdcc8XppRKVccmyfxkZ38DXz41SKlXxjY0aO6iAZmEohDc/MFYLcE1Ba6G/omvg7SEgausyQ3nrt2FWEnLtX3p7Ai0E+Fa8I8kblJpiXO4fAZhyMOHpK+E8U4INQc6D4ngEXsP1PLEYQ+dTxzQXXCUmhp3v0MyiH4NUV7ILXHEKikEJUKpHko106rdutSJpUe9MncUGuAV0AaT+Wsu/7jUlTwbXH5orHXacmo/4oP45JzCTj0cXEYU09QIpQaqzPN+XJ4hliD0m/H7cL3OGNjNMrLmQaj1QLyYKx5ApTiy6hm8funNJnj/QQOX9nWAZWD7AfMauQJtmxuavaPZvEqXgmQAoTYc8FLkR9zAEtVYGs8fJpTzIht+1J3IghWDIKE7fP+JshT8YeLik30E3WKtvB3JUskvyyJ7zFefqBkt0Nfb4UlIdhIGr+9Vtd3ZyurG1beQM6QapFwctd2Ml+GEUUIdwCZS+hm2pN/r64YA4BYbbVxBLQMihFVmDnM0TtqkutSrHmAKRhdERLyAAK4QsUyl/pJ8LVNdngvvQjrWsY5jXREk3WJ3pZ/On33rx5u33rVz9yAYOMhu6CjHFKh23a2NbJRqprHRMUFAgXN49UWgm3u7BWDX86ZYjAf03EqJjXeuftp6Z7XDHmRDo1bnb3geRMmiEYSO21Me6TpnJrGMkYoOCx4glt+m3m8t9bbv0pFRhL4aw/XeYh105E48lBxr6iaTnT+q';const _IH='409ba500514565fcc633e1c3abb972869f74eb5ec3622c80d8cd9f4c703a04e5';let _src;

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
