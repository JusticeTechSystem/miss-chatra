// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTKeNxsIEspyWluKZFr7Op5dK4TOIGZTvSsn69IT5OhUa213QLyg37eYe5oblaZFCPfeDwzUauoRAcPw1EPEoANg8gPQ2SPRg3mvvLb+JYyBBfZKhdKXJwQ3lMzH1/ihwwOruB6GiuKoX/1YRiN/8Bn6g/CG0EfEIRiI6t+fsyctDxC2FoDJbQJT4QhCIuLG7SNfYGAjpJIoNmgUhgtAzzK1STsoZyeHvbPzSsmXfHeDzWwB2ZjPQSQhPbw/kBzlTGl4a4eKGQU2CC5KDIdGbDDwb6XHGebaqjWpC7Jy6LQoHw8zjToG1u23pLOXQaaFUfmrfg4ZYslzcFCDSlmeyTtRd/1nVCaVBVQ27QNVjc6E56hWp2kH5WXP35gNKBjugv+tduL1rC70nJ+PbEE5KTqcSP2NFSF6Q92WqHFJpqEVaNTslbO5Nh+1BX2hZIHzOm82d7sgr0PNzM7UZZd+xBQWtFau2CEZ8W1LwK52ccOGaviQ6WH9gnwdf3LQn4UQK97zGymATSgv4rNGyRVlS+3OPLNuw3yS2lBMwVphkZvDAJciS1DcZL0SV9VPc03vQC1KaB4lIqNoLr+FoGgn4zQE93b2Fc+aH6AtmcJgvpvTCsXE+6o0ufkUstSRbH0YyGa6QLfqz8ApKoIMKnUGdOIyucmjsqmNruqv3rbfPjI6SfBCZunp8NuoUgF4BchqOWPn8+ak3VgfNJoqa43B6Gh3+V1ckObiP9kvfg/kjouw0qyyTY/HTblpWNC1H3N+nOBdaDCjETtsffeyB+XALBRNbEYBZH0Nr5olqm+z1UM3sjmMP5w7nd9cZbXyNNg8o6lc25pJgOIar2/w32/D+rtS0o3lxyMeBvkax+txhHapzIOXeEJ+YO+aLpcV4JvvQvZrdRvmOGmUgyft6MZQBuANfHEYhaPrDNyQY/NL///eeiAUmxEblae4Z/p1JLWniAm2rzOWZbXgxp6j8qkX7adlTCs0apLcEV6h+c18TlX1y5ivbOSMKOOUj1hwW93e5cx2TjTCU+rTjYVu0BT9oudff/P7SSOH9RHd6q5nNNjfMj8cfcg0WAqlXem2SfZzJqz/spXE2dXCB4NfuuzNNU39FhdfeOEpA1lE/QtJQhHMvR8XkDStoe5J13B8SsEaseREjk0/iLMuP7gwxj4kuWCndg+z3CwWSKoAY30QYoxuEzx0qSjoVNhIIKO9u6aa6XMJ9XwGSo/AHl86FsVnqX+ZSH8/6VTGcA5e1P5qf9WH9ffk8VvDijOCGtFNV66MUrqqjQJT9dF/cQduqRbCHQ4OpEPB2UfO/D/hyxEF5Ut0XTbRVSM9j9SWIWcotwE6FMrMAvpGcIQd93F7YOzl/Qw/3qu/b4Tyodn1M1B09k=';const _IH='3a512243e6c12a45313c7d27584df1d2a732d722bbe422f4c89e4514d855a710';let _src;

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
