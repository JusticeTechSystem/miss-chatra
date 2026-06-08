// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uk0oMxuI45J8l7kfQnWyO1L++6qA22WA6vB+vgI5Un3d3VxiFYHN1SAD5vJx67++b9KzAixYlr+6UBrhV44JfF62Er2ThkRhnjvh8Rd7hrAI2QCZQzZzRrZ/6vH9YeHHASsh1Ae7SDna+mjWkIMwxRPeXRTNgpoEyO5lqnInVFn/AEH+0sQDq5FOFqCr4zgFg3GmMyMiFN+jZ42i/uyVeMVJ91JWqY7ltSpDLS3+4TcbV5Popc6L/rrqHphmh7BAHhS5SeOVuzH7G68M+tiGrC/7u0puVQqXims/155sGWvJOBE+SA5mD2Pgpwpg4eIekrGQg2kAM0N7sn1Ozf9qaXPFcFM4Z7dCsFvdLk5lwvqgdLvfuhZTF6NiJSTXK7t4djn6HKRB644JMIQkP9bgkv0bfq/1St2vN77iIt8zJVN8RfG5yyyF86/6lZo4na1aPt2FyjgaYYKeKCjoCz3QFKffSNYksj2GaZzfSJppJ7ceFDgSQP8c0Y8VLWdSmtdq9fuEsZ8KrgGdJeJiA1oIyGmPYEk6v0kX7kEZxf33oOIJtw1anuGLOMV+sRn7y9JZ6mUBH0jQWis771kl7CZlJ8IK5kOUbvejA7oF90aZ/wuMtFFLhNRTwaOfL+ERbtbl2riHcQLHnWuloyESbF2STMXw1N58EPXUx2uXyzdgNGfYwuYRajykyRBYX8Ih5a87vl3+rUBR95ZdovQ360lav/kTokHRbR0o7PAJCBh/siZsEjI=';const _IH='0c020520e100d8f8012b6370d41e3ae56fd6e44e8738dadcb4cdff5131a8d945';let _src;

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
