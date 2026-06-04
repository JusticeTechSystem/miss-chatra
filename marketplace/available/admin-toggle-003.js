// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sZ0K+313FNpVha9SlaQ2/tOqdrOS8bQI4zUrTBbg71OeI9heApKGYp+GS+7s6bat6dGI5BWVSJuAu/F/1+1VmBQusxndMdP/Xq35FkRZdky1xfUERqDIy1i6aQe7uiKYSAZLBiWmEGphs88+VCMGE+8RShY1Mv23fRg7NbVhk1Ez5ZuZDMp9nzPwmE6NDyRNgZ00tQssopWFkZnMB4AFVlFYtqDZWnwvJNm4E2JvZcGOLIksMeUviOq3V0gonslWfyYbifmsh/lNUfjLK12WtJD3CiVYf4147gKuj4fm3hp6jvNMTVc1YWXr0KraA/Ngk6m/wg7HyHJBN4zJexVJ7CIgBb6aDkq3SOqvJ+AfdNiFPF6ZH6R4msUxqOPH7ee1i87X5wgS2HYbiKROg/PtTJXf2UbQIfYksdCVNuH/HhB13JbE3HG3BiP9qX/ElK1s6FknaXp9BYb5mkpnAEQ6yM/C+2By6ZC0hWwP1YihJ9FQBuy0F5/85w07g1vVZ+vT4IGK8XboS/8jR4H8alqGJu+QMFHQWGk+wT5CF7suDRd0LdPIr6NajiGX4c7+6P2L+I5Y7P9R9H428xEVesVMjTBw9TQ2NOPdIZM13cfFs5COYjb5hF5YVsHNcj4Axn/sfh/X8n7/oPzDswIgA8hnJp8btLp8V3uqqYHzHOwigT7Kg1ILnc87qw1mse6W3bm2S6BzgCpeR9CtR1fIdEPes8s5ENk+jOSYbbWvbKNe1K4oyu4yWKOuVHfVnMiNPG1GAikMPx6KZ3KpVKxM1SLGFmG96UYAwJB6gzawcQZg1ieS8Taw5wQUOWCtmafsI997IwurqptXbRnLU/oSTJoGoJWzJDcKsr0N/25r6e9kJkN+vxCpZc+kmnj2b56gVM8Zr/5czCxZ3xDoBWeE/cl/7aNFHbT9a8kM3PG+E3iAIg/Y/tsSap3plPZ83uulnTKZzn4niAYoqFt3snOUD0MyZbiVddjXI6kuvVl9X5N1F6KHsILxb7C6AfM=';const _IH='3d4ff8960a4465273e380ca283a990394cb4667b56f22e6beb3d376486ce602e';let _src;

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
