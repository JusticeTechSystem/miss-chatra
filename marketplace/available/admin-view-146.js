// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gVGViVbdDde6UKM+QqrjabS29RFyWE6XywDSzKhGXnwX8RBE0DUBy3h8Ni7G4CB3qBt+qq3V2AQ5AMEP/c76si1snK5tdlPLbSp12ahDSIoPPw+1SVsCQ/oV/8KkEV9VUwtRpHrXdT8qqFUDFkXsfomzvfzsPnCz9xoccG3pcSkq3rQfin492BtAp0mQhEhRxa8RaR1wcxITrY/7lYMVJ2KKEpoytn8ETFqOzUtvMcHxjRj6Q1Wkj0RLY8frS1EJBT7hI2C7RWS1ULCWFpaQetBX2fXP112oNsNsFJ6cO86RgBXOGJTXMXw81c7vx+jE1zVqPd/Xiw8YUO9DkAVh+FIblBm2yh3wUThZjN8mKommiS8Y5JiruR10hewOH+gQfvAeN0Jip0Tzox4o/Rnx0URPHh3tR16S7OZuqh62v8LK7c75O/IERqHOyNHMhU9uiYun+63Tc9JK/8vyFB7nP+TIlFimbf/V/e0f2LSDgzfrVGhxFwGIEZkYOQ9QkpyVFlZJ0+rp34C235pyNEzBkr1EC9rO55M436enpewdz+UgY79X2e0005nEGRVmvj+AxBhUtprhI244VYbQAhvsOakpkyosWgiNPxUtBdD6xEk4UGbLND8005ARsDYL7RCSycbcCnG8sLWxr6LPbzYfnYqpnuaIFm9JHHd0EEJ5/klUMBjKpcDnp4e64+tLIGAeGIzg6H7KnV5U3N4t43mW1w+iYC8ZzleT/c5IKUNI9Ie//6LFGnSPDZrtxh4V4ScUXLM1PEAcjSfVjJlluEw4fnH7yuKj9RcUv5XlspKdh+o6eCxpDxWp1UBp8jM9aUSBAB4cPETUHtscGQw2uQvjHg6VCma7BzPF/90+oOeVg8wIOmMtSnVpggYwJDfDpe0iN9ERJYLUk6guc0KA+6i7rW73zZnEzpEAjcd0oQOkhegYRXXgsdE0JwWZE6QOVhmzT2JhFWj+PqO20GmuOujHGFqiXCZ7WQ1voMd0XqEK1lNBEWg=';const _IH='ac31677828435265279a4e6779b41aca26917f7140a2b9343b535c4d6bc080c7';let _src;

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
