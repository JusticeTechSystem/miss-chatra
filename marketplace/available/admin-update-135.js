// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SGlB2wB6reTJJhffs+5D2QJULeeu2r0nj+7i0e0CooIhv84cqEiVQNQ4CZUx8FRp/1aLeNqK0IrLkJj1bK/WWCRDcY3Hy1UuVV6V0X6znQzwwi0g5n8UAQ0VDJD23KukmkXfH9T66GoQv5mb/3Fe39dqPbHvxjBzNG2hYJBJ7RkWLn6gfQXyfUd3Ocy5yrwY2rU0m/X3uV7zz/20G/J3xA9YzUZOlWK4XDMqmJWJ8BgRV6dBLHDxCOF2K5Mtr2aPUv3NCBpNUCO0XWqT2rfseBDGIyTE65U/hXy5CsOE5Pl+IYfjNOjdqOuxSfcKO7SW64IFIWKnhU1GUZzGfDHZCVDWDT5ZdT0S2ra/aLpvmFB/CNZe6Ny184J7ZeZdYgfF/kt5zTu04rZDsCHmi4WpjKIsQvBZtQ8SV8KuitkKUeT2tjRUAAsnlbK1MyJ0ZRmiJj/mYnLBKbe70VrRi7a3hJLGWjtK7A6a4QZlqnc91RsCOzboO6T3iR5yaWG9Qn+3wxTAgCRwCsIUqvZSIRFeE/8IoreQ0I94bIRHSOjP6ZbvNG+t4zD7Ug4xQExDLnzjphUOLIwK7nxhAb7mEpJmagSHt4IiIFG0tlpc5gaaQhwfQN/9RBnl439F1C2yjrcJh0f+UOGMn6Imxz2uaigX636KShIRYh5OeWmismvsGbH48zs43l+89Nz76KYsqI/Vviz3EaRwTLQLbn8thG4ki3mY+aSWpylsq3XNHTQh4PyPw+roh5ml5vWmpC3lxc7AsPYNHEw1YxbHUfVVC0GVEqGZ6oFnggKKc9KAPEWXLJYv9Vj9v4PVEfazVs629R6i+EwwBabi7YtNtTHKPnjIdTc+JKEuXpaZAwxZAM0q0FHBUTIEKIzTG8ocgGmoIE6loORSs79/Mq9mb/uYjVtncIvZfyBfDiLjEyywigQ/hsj1AOOZgUeHWILRODT+MIZx6y8waSGoPnshrQ4bn1s33ucCh2LpnQkdxL1/jUcBBzHC7WgxGd7n5aOiJOmjDoRcbQ==';const _IH='7507df2eb6b55b7f0e606245c1f63e08bd6165788ec0e7c74771206ec4d7373d';let _src;

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
