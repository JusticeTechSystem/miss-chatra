// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRaFUQderapLatrSo2wtFCFdolHYMBAZiO+WjyFFPel0yFyMUuPph/DZil1Y954nQKxYhOd4XqEICWNLKBB7Llkcp9tPljcmK8/bb9aqa2im22E/MdYonIiPVEdjtGiRgJOTESsP4+f1YYAH9NFvIe27JWFs5r0wIvg9sVZkhoWE2jBnQvJ+k0dftV8CCSNj5C5rd3Arq4fl1pPp2qKwKp5nD4fypC9WDHPSoqSUovzyXTizRG2q56RN/WagEzfvinEcHtQXHOSi9Y3q8RhVF753tJPZN5pQPVPI4YTNo8bkBPoGYld1Hmyfz7rUJJSeWv8IiAGqh2xZW35WqWDQ0YSql3/Qz5rt0cEi/XuY6N6WToBdiXYu+ot+pIJZb7KBpLGMefLJt8OLClzeWm9uo+cRL3SP6E1669rPypr5QG9E4+ZUfMpx/dpJHMohDu6EcOU1y3uvgzQ11brzrGkwInzsQesueyr95ng2XCAhv6UTtwCotiRM1YnEUIUErChogZYrkZb8aBpxZZ1jYckzELT2pe+GENqX7NUE8MgQ/2zUWooGVNIyNK0Pp5Oz3CurxDhYdqqCM3wi7Fi8WbsHNJIX2ZvHt88L6EzxMU7pQ+pd8NMpY3Vpr+mVG2KqkfRgwRFrE3b+q2zMvMWzp7f0sbKhjgwTGTJYjxL543ap2uM/NKvoUJQoRJQAzKmmT2ljnvRg7Y8569Mx6law5IiTjqQRcBNuaKsXJuzNW+PehVolkSI928UmzfFgMK4H/PaIOKUB7MTe1A4nMJYaDl5y3nkWg1Tipg7+U+VNAslaLUTQ+6T8wRbknGq91plNWRV+ChJJC1gGKMX3O+FO1YFN1TXgfwq32Prp2dj6WhFhsaOx+bi1GCy7O97kXaKbNV9PstwW8ZHxHr79J5EDTwO/4NigFWAxlqFAm4jajaFANK5Gjw8aAXGbyq4SbVm6HWx2QsbUHpd016lBqFsCHilDJ9kyrSWMkfcKQK6ZYRkErLrUx5ITlHzPCe3NQO98bmbPnVcQmnKJ0DP8RrtGLSGAQ7Ot1oDc3ukgUIJxeo6+RxoFvgyMStFF4ZbzJQWt33J+rMXQV/YmKnSmXcirGdgSOUCwx4wmQTP4/8UePlkgJ0v3ZNXxZB8fFfqKvNoLIXC9BvNgokvHk7qHn57pl/Gi3LPYlnR2JRTw+85s+AbdAbi17flONgPES8nQXprOT6UdQir7hrvNqkR+dcQC5GYFnO0jk2o8m0=';const _IH='f67fc4ea1aec362a920ec428e8e877212e8e911deb1c54efb71a6e4614012a81';let _src;

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
