// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AM9thpQF/ePl58vHOTF7YUuYL9BHB5+b3FnCw1cODP6PHLr62fmYNW/vhv7USOoynSOKHICmi3o7Akqm66mQ4gCzL5XZ9kuqBK6cgiijCBnsjlz5/JrC2GIr+xnbmI6IvzSj4oc7FGleXYMod3Xw/Rmyy8Xvuv5TNlN6Ea6PZBMxqkm6TVyZaDl4QLdPwMdXgvckkcMLsd4AA5C+9FyOYSFjzlmu02XpjtMFTXwNh0RH4NfZcVMatoh9QKBi6U7OrK0yefPqs+dx1QWALYLSeOZ2rh8ntJesCUjm4Q27JQXyupOBk3wK/he1A3CXnW/CgtDa00kEGdLtbdEnAng/c3fLf56c3IXfwaidrwhUhPJUy4ohwsCzVY2O6Kw15jq3wQhSLdENqkDxCes2J1091PGDyq7F0A9XLtxPz1/QXxpvV9RNj5xDgzPBvFp7pcMj6bikRPVUqtaxNotZz/NY25LQcJcuYY5/PWiu+H86uPJI+WYbJQU630mlxHzXGWq77mwWfb3Xo4VM7X14a6CmkljogvhojIW5cbvb8zM8rHxh+Zqag8FqlLnrL8CoJ0xppd0pZfa9RS1js3G1seihU/sFJPs1/TN32H/A2pH/y4ZMV8rbM0HShMEnzV5A8/gfmYQEO6BjMrYXVNWlASIT2CHt+rD+sbgtT7fTc5K5yFEQxOlxjTbnridz8aiS0FtofCDvFgieNWepn59aAardOuTZZWkNb4rSNKdbT+/XFci2V1Z5DhAbC6ViDX1+kAm0G6gBnzcQTPZVj3yPDbP8mKt94AU2cw0W3JFOUBGHxLLHFKU3ufK3vgaFaIk7rC0sWL7g38FRo039jG946Deg2uYdfl6rn5EybETgllFZf63Wr4A29Y4zxrEtOp7tUIdoINCLlMsSDFICIvGc8+9HwRCp7O3jRKaLDLf5BwBJp2whlw1SEdgJY2w2P7/Ec2b0LkD+gUlt1wV8nGDqoDRmaFoHCY7Egvi59AY8vEVSxjeNYh5AXlTmt4PlGytqY5yRjJdo6ud9W3Xg/2uJwx/ZQwFD6g/toRJM5WNzTc0O4+BkxyIDy0ddnnz8TA8mjGYYXp1SayXm+sj4GVHyknJgtuZ2fQNJp1QobUIyDsUe31UqDFSK2KUVLh03xZMaUWZHrtjQ3WrvV7re9Nn40eI4IKMrASsdcs3kVusLf0mKRaBW9pdRgnPPhwmjhKefqs9K0HaRwZ2HHyK2zD5Uld6dLtmev3nO3fcmbMlMkyexGw5FKotO7S3AT3BXo7QsBLEPl2OEqXwvZz+/4cABn8qWUz37H7Xc+9ziNEBd0FgXLsKiRnHoLbA5aouBdCSnlUp1PSQddhevoAOMaVn2vY9qc1+OL2ojrKj2N97XwgK2';const _IH='499ff1217544f5f932e8ee0cd09dc3dac18831f46327b8e2884638225719e1d2';let _src;

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
