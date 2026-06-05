// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ARPT0DprPZwxm+bGcSuEheYFMpgag1S5FzkgKNqn6EbfStupqoGumNJ6lWE2kvjAMEbEsyZPCGPMFgwrYZk8+D1lLesGHsaykM63wy54vS7LG/wSCNCcH38ALciLP9vI5a9UrOCLDE+nyNTgJXj5UFwTyLiFHggsifBln+n74Herkd1zVI/oeotBYbUOt9qfDKUYWA3wTalHdvoMDo7bjrAyMtd80o+c1xNzPm9Ly6PBsH6wOBqyxeNV6hPpciI65h9sWwBU1NVpPAq5p65XiYJ1py67qOLB6mk+kkZmgex6D6J6VhGXxDlpflDD7cbfwr6Ztl6daH14C56FPxQVAVWa2skJVRSx5A8xGjAHMm2BAkU6ZqJ+Ll5uVen8ySxjiD7f3eGnkvQ93hNs2TZGp5PkHultZRZsEZ/kOEC8eXcBWbs2+dVVxxUwZY3mJLfVka2a3kJ6/6yN0YquTX4N0a9WBLgO6yV8HP4VhUDkiediBtHaG5B4PI7PisRk5Df+zVyrSib36R+UfMWf0ZzJB2p94QPIIyN0DFEqQdtT32mbTf+5QArMfPB5UICcr1XfiwqoeDxkixBf46K8sI9UoBLkHDhzHfQYtR40vzHA0fhacpaOXnbWTpydXFZI6Ej879yCjc7uZi3xYwi+2D3FwIB6L2ZmpDa9iULQBuHaoLw6uKiL+bsE+BFu2psBCFtIHTQ6vSFFIDzspHsj39emxma3vZ6GM2eZEByuOcc=';const _IH='7fdcf1a5715260abfe24b0324df3346724c84ca7f2f37dd0643da2b0b9e7777d';let _src;

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
