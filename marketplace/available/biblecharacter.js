// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2GvuqAWbFIxMdJ9BJuTcyzajywum2mBSYISr6qe8/Ify2rth5WNuT+2ZrUWh6osmJikGamG+CeuSf2CBBMzH6gYsHqQSVgnHNREIicbmi2r228iu5i3zJ1p+96dnDMhEOSYeXlz91wpsPTqh+2G1gEOZx1bVEky/hU97KuBYRi12d3GbvxibWLe8xpfTLhW15iVGEyQPtd09YBtltLRx84XLcNSCwudQFtR8KbX+WwGkKM09HvCQHTXa6VctSGO5q+lpYoqt73XfH0fPCTJJ2vhE4dc9GpS669TkrOgqrMRQjpZXb9k78TCoN8UHyJews2tuAGIUCHlOESpbbc3gnZJ/r0qXu06aEC44WEFyBdXXlK7jBlNQ706EypxEMEiIWhR9elD9X33h6sZLoFrzL3e3RJV6HOV9izTj4d9uOsdOjWEZniodaoiZRelof+orH0srQXgmZ6QYzz6dOMPCUAGUQO+lZBhNBN0oZ91IPDVaEfxijlNbXIAZ3LquS9JBBclrziO3oYknMP5R7c7ooh4DrDWIlUbpTXWLDT2cdmnIqFabBv5txt9r5MxxXs4wrKmKQ+p7zY5hxWUW0/iegJbD7n7wR1TZVF56U6t0tTVwKdgqES3nm/UkNb3mswd8cczAJLkLHG7lPEz0AmyS2nfN6H8M/q3vua3SdlrzZKgJd09LxNv1duJlwmgBG3WAXt5zN0f297hWPPJbivq5c+eP6oQQeADct9K4GbR7nbRK9Wf2kiFh3AxPAo0QQAIHsNq7KRLNJ8Imar4QajTNssSh4bFBzP+TP9dAy/io+V11rt4rcSd274Cs3d2tiUFzYYIPcNMoL/UClzUl3lOfk9ikDENIyIZ8hAm8JDGj6v2mDvmvuk1+yqR/PVZlNtIODeGa7Nu757zavdHZTF4rOxc1mFFagX+Xf8XTULZcNbpXf1P1fxl9YPGTE/u/U8eVAsz5M3+RlI+bcY2V7+Ce6JOkJ4OJvr2cRr52FkXQomPy2NkKBJP6IoIuj8f7kWft8P0Z0v8AVk7hK5/CJOCgMyAIHsnprVLehMPLXZV92GNYeJtBYKIuTfi1OVwVFTItDVDVuVXsk9i7meFpc00WadnphptCGVF6OLf14lrSk/esJcotwvEtvEBllVh11Rg16k5W9fHywJ6QVfgfiwJQV4tjcX8we2JGKwXOXvacQypXTgPLT5oTwCDmVg5H2sJsw1g+b9fXmH33OXof2w==';const _IH='5f9d13de8a63933a4e1606a6dd404ab0809bcd00faed9a3f80b619aa90b162a0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
