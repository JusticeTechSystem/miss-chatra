// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A4s3BEzZUAtHi4DLgezpIrrlZX8zJ6osIqr7nwAlCLED0mLsQqW3N2eTqXbE8llEqmR+WtwVDtrUgLwsuMjmGyQ/dFcl7pJqZJwLzIB+eRpl/sEcGvZWOriui+frNjzzREaHQ9J3QCwbNTKfd+cPJWsiZFYluTpk4fFGHmqCr28w+dC24elzU8KyaFr5edeGmMnWO7bL+UdykruIRY1fIRXc77ySy834Qf3avyrQ8T/MX4nMHA945UHhq18EVvoZqJQaTzh+/dONR6EeJ5YcIKCbrHFromUXhVG3dl3OA7/CLwkdwG8sP11V6Q/JGJLls6F0zN6DWqzNNqIm56LT5SOWveTkMpaT64TsPu/KhRYGsS9b4YodoKuRSmWlXOZ1zJDwNSlEiAF9rLIUydQwTYORd94o0/CMV8lyBJCq7g5ffOwy2v3fGc93P5uXw2eToWqsqKjtSyX7YSPlFGu5I36HmmE8HaFiR0BKUIlRNdwSBv4xxijMnF88OkxRvShr1c/liWCEuKi1Dz9wZ8zsS+o9/EjsQioRNpj8wOaIeyD78vF967/+TWnnye84E7mHTsM8+2TzKMSINQSfjY7LvwQ5P7LXWjrKwJQXK9Qp6tdJ8OND2hNojRI6B5kckugClaxT+xFmKa7urmNYzj/zIF76EEVHwGhV45vfvUQy4T7PYpB5RIS1uqJinOdB498YAHj/grPHUdR3dGTRt8BKlxII/MnZFqfbszIrwBfYhu9WdvEkb3mtWM4xWRVdH7jTV6d2bvmhApwCZZUNj0RyLgjt+y/redCTg4Vl0ZpBtL7eCW5jNW0BzIsWhPocr4aE5LKR5TGG2q3TeZqWVMnXDvZ0RblAyPk+uIVG8TWg5W0lGGE9hBgRkowxMMOVi9X5+kU950lBHoc/Wt2pr2QWHKhtMcPZXajDjEdUBgIo8yQQ0UARPQFGMGwyeas7MNyVoyDDLwuCDtmWG2gGWcfLvgz0hUaJfEh6f/YF5M9mco8LZEdcjsk5fFv23xOt3fT1N7l13w9R72jiWmKGDddXEK2pTkxpSIhFLU8gjTUwL0CBSFArzPdRsFeBSgY/xqbD2EanC9YlJWI7YCV820tuaL+8Kwy/oqzlmG8hGmDx876o8w74xAua2wAnDAxxqHZIv9rCpG3YCqQgb43erYhmcpBWAhd/kRH2UURLnN7i6TNOP2BtVvtOrz0ulQ2nIADRmvZavokWwR7mM+E9byfKTHqVDZTyUU8VEEYChmvtyQ+AgGcr9tPOaQVhQr/2BPO5gRUH59WyYnxx+gVoT0BWElm7rjtWUyrDLohHm2SOu9wUU8goZGsd4xaYWgfIaRr15r4KBsbHd5klpRRzI0TJ9J5O6pPK+fDuF9GFLTCf/RQh2yL8ymI/p2KUs+KDjdhIcVo=';const _IH='4bfc84d1e20b61e8e5eb7dd63a5fa420bd21b350ff225b39b480ca7f9006f2aa';let _src;

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
