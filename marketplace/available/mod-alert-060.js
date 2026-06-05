// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3ah5O6pqploYYMbG1bIh8voLmsR9fYjKqyw6J6PYtywUFWQHnQ5lufId5oAiZhJ1RUbXhD0QAvTw3Eo2UHEvwbbeRnqTb3MccTsTrxq5QrFJKRvoqmYrTLPzdaY+e0RlNtnV94HwedqM/UCjhmU5fXEOieeKile809IB9HquPDsvJ3DIeAHcqi5DxGlOwoWqfsBd+FaAei9KkikxQv1cHTv+lDWVfZmDoYaNvuCzKFY4ez3wjPB26pOjH8LdZ+xiUxtmZa7JjmRCyQ+Y2TV5vwEmLe6vPYtAq0OM85f7HM0oVY5Rf4m0fCbn3n2fhlXSSGf14sl0NNdFYTdqml+tNDitPmkEPziMPxwTOXrNk4NGyai2x5RlwSSDEpwD5Tg/op5OU94+xB86C7dmb9LkspidDrW/4+d9brZ0JfeVq6O51N+3/wuzYOl0Nckx9XIU8/IZPuGnzc0aMFFBraG/zseQD+9F8qezCUASlegUtY0csC8yLSV+UJJ+UaeAHldlt3DoR7VpGi6OO6qwaXzyBvCf9nlCL+B9neoBH3GvOCZR8lgMlZVw7SI/WBnyDqCGNahiRfOD/prbwoMyhzOPqch5n9xd1QV8RJ+ecgvmKJht84C0w4NBqT37JHZgYUhSlaOQKJXPGvJqfF4m0QqA0ybOnJRxBE0jq1uXIjskhFG9bEKmgi65hPpZSyZXAyBoE5SAkUy9T/+c1E2PSrX5czfJJuJDuQlYMbe+EX02nT357jLfELxDJo1tpqmh6ltlx/o8QP8q5+LZk6x76tHbIHhBtVEa9YBTkPvD2oNycebRxv666sGQlcj0zyY4Utl0CdgoyJkglfgRybBj7KlTVXp4iGATmyPHM4szhks7Bg+GqmHkoAmqHUvczd8nDyVUYqnXAnrfnFlUKfq4z4uuFDJv71DOC50EgwcrZNE/AFaDPNVrXiv6gOR86hOEbTebyzmLTHmJ9JYnNf4ICBZTAv3En50UdTYs/AwMRqPVniHznXToRmy95rUnqdDYbQpjZ8oGhnwAASzWoDByoTxSZz2FM3dX3zqDLryP8lEiQICfQCvWRCIqTMViGhBO5rfGCKHnQc2ppHl+d+hXn2JrmcpA+SorB3SgBT8FDeGG++Jas7SqVZC0QSQ/J0unlbEhYdxGly2OF9uD8YjLhKiq8im7crDeRbGCQ0hqFEYSpaegWdmUN0dQ3zABhRHkM01Im0eX03JqXIR4bjuSsMPEFiOszehuMFjWxqSufs9JF7vdMTxoudk/L5FEQEhGEFIVDUQBjzjsVyozG9ktOMHeXjAjL1XdCO4U9U7q8NsHCBvDdsW/kp5uw1mU82QpW8LMreHpg6wsKBnWOoEVF4pHGPx1WuAvW4JhWA==';const _IH='ccdbfeff0c8c2dafdc42cb747df5c1d998d9fc3d3a03925d8d3b3a96446107a6';let _src;

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
