// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSRgsCY2t3TJNseHR7r9JuRHPVCLr1Ls4Q02IgaXibGF2iLY/DrHx+wm9IKIE7S2cir49lcx7xnCEKM0EVCaYv6escH3qpcSATKYtw9QQEO8YaSBwzPNKDhm4kEiqvajBiMvDjof+J9wh9U683t/js5B+k0epwpPdkuxQBkAhFFtDeBMFZt8rBGZsPKhN/N3Ct2udeKadDEyNPPlA1CFtOsgh2pUHlLGDBUFG5h4K11T7IOrl5nQu5v6UmVIesjqonF7sHCqzt+FMJ41vzQofWvHvokbFoA1Ekv8a0p29ZhsbqyHrcZYohYXS3XDEHQJHDO3L+I9RYPudC8gfvCf1hsBYm1BR5RYG9K1XTKN7fFfqlVmlRf8lmiC5uLL59n7UiKGzFdaEj5hd7SXoTZx/BJ/rkpx4sZaQ9DQlrbaKrp8r7WyLgvsNOKFYkTm5f4XBD9vipgMA/Wbj8QHPnMe9TREki0ui6nNki9nnHMt910ym2dVCc6346P8avlWLTw7RrVooSod8viATeAtyELVdXUEwt4K4xk6UYAdkfN+ZbdhM5vnZql1bq/i/2gSZIipqc8jTHPyWryMUJEaEHFGXOxG/LjVKE4MvpX9YXSR3xLUBdZmM0lrkJ7d2x5PpsXNChOz2fW2q5PQ2IYra3BXigt/amBu7iPVXS6VpwlF+NQOedvbLzgd/Wb6vy2tzD9pp4yCZAreBOhqRCy6yCJ4kkj3/fNw/1V7+txiBt93Y1qvjcavzyZYrMPDx1P3Nw/8CZS+el+tnlAjB8BINZy7EVL/7po/ufDW3ptYACjAYd+1ZYX2AfKcU+VFRNA45GPKBR0Hj3VZqdBa/0JWY1qRqhOga7v4W1y4e7TfUiNhVStrAQeCbmjJfd7zblNbF2TmFSdQYPKNudeJo0wi8mSoO0MaoAGWFnNIaGBtyDtXKH6z6qbffzA8lTfkahZzkHiTd4ChBxMVXnucQpP32WS3ZivhWzVD6oTYL92KO/f0urCo6MLKzGMRmGHVhtGR7TvzAhHw2NgESPpI/domjcEN4NQHX/NqAkRhs7s7xYhcildQJMNBEyMPlzuMcRr40ddOz7N5NFAyP76KKQPTrM2sfrTBrKVh7ehnE37Rh3LiYPfmFV0YhPiHUeSh/psEUpDOLtJxF6BjGJReIhtskXiMNMDY8srW43ySuGHn0ov1003v+jvqekZnACy9z3DhY0krHg70ZUIEKkRsgxxTDkX0hrjKKGt46LVVH0tNl4fYMOYpJZnFk4PaG+SL/HiXN6UcCcg8OTO05EBF59vCiGfTCyVb32nXNlaf1gPGt+Kwd/A38iZbPrni/N2ZAf+HQuIWkk7yo8hBZ8mHlX5HlM9dGb56F3jVf0H2QIK';const _IH='d27155e9e3d9e898451d7442a8c8b343bfa92c75e03b55166350522a50955996';let _src;

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
