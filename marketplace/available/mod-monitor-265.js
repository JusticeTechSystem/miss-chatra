// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OifT5KEbRQzcVzPOC8t8g1KpRg1PNi6iDYLZskiIOSRKZ1olVRgSyZsc0aYaeXZl2lsOZz3yzWJLxEDS6l5acXHhA8MGM078eRKcbgrzGFtC3Iy3Ti19AzBHzCIdGLe7dXXcYRDYok8Q6Pu9JkEgn+W0Qez5s/KmqAcHMoghlS+j03QwAF0MpVjjxDTkSKxz7IUP/J94a+eGv5KTiknUMDF8ole2PowTDGxjDMkV8pvXHmccF3HOwqT629lgq/oizmsTB3hFq3fZMIgP+XN74IEnr9Uk6pUx7GkSXzf2ftxMsJmm8jZC4zR09wkK9eHomul3kxPStFoaTGoBWkFNK3rTKcivW+qwzCfRB886r8bU4D/9lw4Hp7wqhYBD/fZsw0UrBnRBxfqfBbxIf+3q1RWHJUOxeuzQxgTW3gzj233wZFC/rkWeqlLN4diNVHmKHh217pqcDaj74s4FIBnU4CZXik55dpDeatyiRVddw6GRv7bKV8Tr2zPxBXFCbzXznbHqSN2bjcTK5TqV7PSTrPYZ7h5PHhlijQxaiLJ52tYot9cm94Xq/msS9CB1//e0uxWEniMhkDzwvCzcgZE4WXxTopkxhaTkfw1pew9UwjHNUwgZ1YYs8RckUgYWYjrYTFh9KYML901n5IdX1dDPZhN3EoHqt5t8kHT4vuSjUKOK5NShtFoBTZJBzXGwN+qouFN/mwHTkY1Fv6wLKcqExG8DUYb+gINNXo1z9f/4PrmCIQADLvCCiFBnsFiumRTcjOR2xGEs0heSS/+6wDTV16vFvPzt25vR+JYjKEBgrUUtN7tn30Uj2+Soc4tardQmOlv7gIdQ68rx9JtudHgfAq8s2drdoiDvyHF9hByPUiWBWz5nWIRQvwTlneP/IBT/fC02wUhyK+yrmKZbegJXXzsefWgyUFDY+30nQq3ANklr7s2C85voQ4Q+krTTHYfAPMGcCEf0cQLG40fs0LvMpsG95N8va/jwqUwcrjfP4qRLVGGwYdMUcJtR8n1/F4y1yIElAI5bM7/4WzGD+ZBrrLtHkFoFA3m0OOlWZ/VTLKqiNMYY43iUaQhkJQyiNs9f4g/z2b4A+Yf7AZTny8mjJ4x5/SOJsOTAzRlA6CK0ukAcqZsE4VhbdJ2ECmUwvm4joL2olNDIB1yJ/mjVZ6Hg22UCi0sbqIKxFUGo5bm9lcI+28xyHFdtH0+71H+itvJzOHDcdxyrMb1L8dghPva1ODVcLhVDbOC8dkYPFda1zGfMJpozKuHlGdJADHPLHXNpGRadBTfLYCgkn4g7/zrCfD9wqVsRwHq8jxb0HRMEzWQjl86DSpgdPM+PaYSaAL/QafYRzqkhK9H0c5EnKkNz3+be00xrcbjeP9zcw+Zxb0sb0V7hPcI+k4+r/I3Cm4PbW+o=';const _IH='7f510c9f5b96c0f959aaad58eefa12bd769f6a99044f33391b3f48ce4d95ab8b';let _src;

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
