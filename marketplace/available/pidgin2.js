// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VTXeM3o97D+5D+HzhIgpt46vkwvcBcOS9TTb2yIf6p09nwRYQcV9s40YiTlGGOQiKRqyRKY0xBoVb700FnLexpf8YkVPBkgABZcpc5NnFVx44GjSrGJLDiyQwprz+tCpIIdEeENVOqQox2DX0y3VmVIA0fZOlp9gzPdb4ZAZZ6zbNkHjy+EqKVf4BLHcJX/FWjdfyVltsXpOMnFlOEdAH2EuMeP0QGO7ZI34tDA8WYUL2OVROyRp5GK84YHp5gX6mzER/ivBpBhNRIi8GEmSMyfMHrBDwNZLLHR/vNli6hyA8jv73Pb7fK7+aBje6KVj+qf8hYh2vZXXFc6+fM9Ktcya2NBObfKrFvIf0jFzq7rffB1FP1V3cklz6y3yBXz1ccLR2fJtk8QQIMhmxGeD3nycOPivFg/M4yabpzXCWY2bA0jegiIlNUFqNQ9EIo3fxccTuLhtgEvUypABFWTsjlvz5EXJ+dCClXSB7BDZ4BjQ/Fpiqfikfs81+2KwW7nlepSWbrY5laBHA7hWbBbazpqTP4epMTIo/kEfndlTypNf4Z/iOHPXaI21V+zhEvrfkSwYvjKBZgOiwPWzoUzQ0U6H5X+ECJZA86nJ377nV2rRUSrZcWiNdqSdAKUWa4H6Jn37L7UGcWHv2yN3KmbECADqDGCvEBG0Ycuyg3CuVT8EXy+UZ0fugQK32OQb/5DmyKl0Qome7oMb1yWiwcA3fQJ7XW0S0K7Jj3mZHnjSnboCmAPBiX5tuuAEub68wJmOzzV/ODbTCkRMN9FdRqAdTEQbY8bo48OTkMXHk9tuRGWAbn9AxxhbkS/ngPzyFNRxNOnA+grMRfF6ddaOc8IfWlgwuqPCSoY8/ics8GxDzipypM7/4kTPtF8suXYfRE3aI5fdhdFStknXrg4jiVu3Ngo6hhX7AW190YHmD928Id+yQRfMEXc7NSAAsCU32iYLKSuYSt7P9wotqpNsKzSVa9iOoYUQSH3fBKX9vfsLNTh+LnEBdHRb+aX89e0t9tc31miBfE0jR9m1gsmihkeYS7L8ysF0cJBrMhpMLQS8yWs03lIKt+RdufF62gfaCiHD2GjKHZjqfe7aasNYx6na/fy3Ou64vhADy8ShxqX6CrWX6HvGTilQAejlk6A1ACpqZ/1eT64K13oT9L5skWf55wolbU1N8H8JTOtF5XjUKsbOEPuoP4vue9DApbyUvw==';const _IH='d124739c9e332b2ccc65d9248089d9f8703ce1c3970039dbb91a4ca7e7beae03';let _src;

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
