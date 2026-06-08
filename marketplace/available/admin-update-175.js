// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q2eL87IYa//WDWtJ0TP2HIcpIxIqlDHBcCBlbr3bhBvhZyOBN75oCztc1lWq4zQ3lWtmW+vx/b5ITkS+X/SvFEXTrEO57HoEZHvLrmqogK0KeL1LxUUz6NdTDTDFvU/TPa2HjFmX/D9TurctZHaDq7+29hxM3DZKLCBYcP4LcTBQGipHG6+2iSmre2jA0g74JllNvRn1ZbBoqq4Yhrol9RpNOhUGiPbOGrgqd2YNluBwHQLoIN5W/UP1Ug6ndGE4CEWZYmO/ZQriF1VIN8xNayeyMwfhfKdPvKzEUtB/yuwR8MnY/7wBvypmJu2ADE4pTjryNu8cRtXTmFJDwhGjFJznr0ZxYq4mVbWL+nopmxuE7wiqaIGq/e269lgEeEpp/ejGaPLOiyGXzMJwgA+ctParuGrzJjYA2vMIst4uU0Fmn5fhKTUyAZZ09jf9kgxIib13+F0YROZXBj2zeq9Za9pxVX1qhHQuNyMUf8d2LIgMKJzDEMA5sV1BFi66K784Xaz+Xsx4fRlQ5lxCJ2Cheq3vJMu1OGAmupGWBg0gfZTTGERljo9VEIjAdMLCQ3Zuh9OKIJrapQNKlFCnSEwruR/KLRsoypYnG49iLTyG57MOHj0eLlQ9N+QxDbgBuh0gFNkkLvY5jpwrMXa9CNH4tfJ+UEQXAMs1d80knQsjVHXHFwA86VSsBfAnCtc4mKcVMlXeek9tPirCOVKymXutYFuMZurOUXjSrdlBgzyzbGZYApCoQhPYEm7DIuujyijRYgXjCzS2N77yPZGdT/eydNFUnd/oDiNUaK4zjugR7j59af4HL005gHI8AX0Ii3EcbstPoGtjw1tbiE/98hL+92c5h5uWbZPTqq5XA5Nnx6Mm/2S7AkEgueAistqWTZ6H34jYhunakdsPdTfVlh4Zj0WLUSmgOn6i3veCsdb9qd2cxzg+SR7fEVLoWxefWfN68Hu3YiMlzrpqMbLy4sIqfD5kB5OKw2R0HFgshQHsJJ3QwARZHTaRGx/l64DhPZurAg==';const _IH='badb4d379cb93bcee08b789a9dd976355b4bb07d97ae129f65089bd16bd1f756';let _src;

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
