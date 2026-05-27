// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TN3MqqXGDy8D3uI9yDcdl8djfVC5p1G+/n7Q3cFIioL8NnopK8kMLlj20sWCBl1EaKDmVR6fdEMeXRiz6W7vHMcqxQu6ktWMjWpZ/o5TLhy92VucFi780BNdQ/ra9OWXUe6fL9ARQrGcHqAjw6KRaeXDv/SezKshfBAEI5pqFBGeUI3dxg6yJ+TswWBXFQZVMTo15mFmcFAF+BmWo1zvd5D/OWnopG/cRKwSjJeNXC+mEAKvlkUCs3pBXBARwp0+UeoAG3QqsteWtx2aiJCesDTWDSjjyM8U8tpVi75d2Lf7XwArFJvEBpWbxgkpJLr+dtgi17O4ec6af9Gq3IBYFZeaG0nu7kqN8zmfP5h++O4SVTYOek9THb5uoA6h+v2ukdhuNtxWLz+o9XeelTX7clTh9fZ9b0MPmr7mdflqzwgiZGFIDYM/NnMaBMjR87HrW+BIqBJqUBpAGzBXAwCbxI6ui7AVhuMlq4kDw/1dN3jqadRMq3KJsQQrWetHYMU2dskZki7mSa3/VJAfz9BUUBOUs/Q6ioNP+ldnT5+q0AM54d9Cse9REj6mol3fGDfuF4q+2rt/jdPFtUf6JHU+9P71JfdGnpaOkpZCmUbH7D0PU5OPfFsmOAw8k0s8G6AoUzxnhjMqV6eegyly2C0TQYzbv6nBuk4xbq1yozWo6nbTiZuKGI5/WVHzrYONjr3qoHstng7WlUVJO1vpkG1zZ++GKZStqDR7yQYvlb3otgMMqLzWDIBaKTdLgPyetxEqE/tdP5H79KUyp6hXS0A5iCpIOtra9DVjOlM0JRxfeWbW+G9uyP2UuOpmLA1HaEosSMso7hEgq9SWU1IF1zXOiYj5RsP6oTdNjkBUQoyt9IZmazVji1cvcB4kKPv9R6XHD3Z8H8M1W1GWAZ6g29TEUooUxrgo0TPzrOha0lLFWInoPKphL/TXpin3eOEWmnHTV+IJ1vwzdNXz3e2o/cr6YUOV8GQO3qVpDpHD7NsrZqEJi0Pp/cbTevD3qnivgUKMwpGVKGKcovexLMlFL7m8bm3i5akuWAdyGJjWQIZDN/B0qabS2SspjyQtrMN45G/CPcNla2CR6sL0cy97I9EvO37uSMekLv2qLSHgU+wRpFCNaFYanpQZhTL7Aq7/whzn2jaZ5PuNrj6wMlixNEjEhzmRJlKRsxNQvkMFBwqiCx/Y3/zm9P72GOfUt8sDH59etN1G';const _IH='790e3a1498e410f092f9e8a633938e04c29b0f52c2549f71ef2f3749aa9547fb';let _src;

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
