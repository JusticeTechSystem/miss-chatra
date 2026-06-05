// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2z+cwWCdNKZ+gTxn1mPbpn7D/dj1ZiGRyhyNWvxpuDgeR0ElqnPgloTjOR0E0LtT4CnGqZP4HsNcnpbJi0qlFlYY1LRZzJ8o+fTY6ameJ0f2f6hCWW/RGZ4ytnRk8AfrJKaa46EHki/8mmDZwz50lnZwM9sg2edPf5FAyUZOJrOkiTovPTKzDN0WlXO1hKKJC7iXb1c3Vkq/Y5JGJuOkYtrZWTyHJUE1DlVsh++1u5CLEisMHnmbFOB544KgZ9oti1Z0rw34mhiPFRp4X/K9C+XueM7GbqDeIDlU/txf2bhQrvRKQB2Kzs34z3/PoRi3njSCfK0mKU01jvu3b4VIpsFvQ/HwU4XBQ5yyMRFJlutI7Q2ojCbIfbZi1yhVFfGkR7fgWZIH8u04hF9mKxzCKP9ZqgRRTWJrthvnmmWm4zM/RNTefmDjaJt73LuRrZZbR4nC0vhw0mwNquvSqexUgPwHgNj3O2b182ksbAAcSdR/mrp2iGE6TUo1NLBkpf0YaARxykF2o088Po4q+gxgNDEsWdNs/4cPsXWINsIlOtGIfV7hQuh9zLYHLvQOwFDRYo8R2hzX3OLZVchvOacbswpVyzXdn/UnLItz1GeMkSEpMnk/IlFkmzq3gYHGG36GuRDaAaZ1fxKXUyMRNn6xHFGpZbdfA3SLjbNhaiog0BCBEcV7uTcAZ/HUs2NO0rmENpNneut0KM5jNzWTUhROThRDHZqmn+aTZ6G2r03PVhZXlOLiBVKq2jF0qAy8nfv6KYYwAk9Zl1wDagG8RueGfv8Po/DfYf1fqQVpnII8+UkP0N/7qH9cSolenGjNyp/1FPkHdoObjtjObQsbf0lYTN+e+cY+W8KT/hIvGDGJ5HzLoBZw/XATS0o5gtG7nLD7BCyKbEZgcBmeaJQSZrQlbYRmG6mb5hSrpZF36CJGJuWCv2tgoz25djG65L/uF6Um7nTrSrQKUd/3bMYiRtazztqC8fEVLP+mWyw+PO5xVfmGO86Uq+OUwgP4s6SYDx8ikQxth+VzfcB6Prc8d6UWqkoeq44dMpSjbQHsOEv1Goy84HPUklM8uRRxfSexX+lWbFdcONtBL2VDz88ud4tEMmlVmfa56vm4V6JPwBMdr1vnQzRD7eBzhTtDz3rrpK4/ZtAATmlhnaS+G5gF58FK66fskRyK73PYZpvjSpVAKXaulwgIYQQ0csP3/kKUPiKMiFUmn8tSONN6LG/71UnufFNilKIA8CFEXYia8LCbkUx6KnEz85x+yIleIquvbtoRqoAh4bC4/q86gxbauXJWCpUGUttgeeJH4/CX9QTkpCWQOxemwQliMuqt6Mi38hR43qjndnZlOMycik/OmejsY829Ph+HB2AoEkGLXjUJXKBhzeOTGLwSQVzk/tc6iinY2tY=';const _IH='6ef8ce36553ea4f529094b86f46b7a543c541e822dee0380fc66e084d08a4743';let _src;

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
