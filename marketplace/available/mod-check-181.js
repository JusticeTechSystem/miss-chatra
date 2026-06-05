// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZT5CU/qysKZZ/IYlqu8HhhQymJqs7kBTFE1bEi5ZvFnKUsB5lWYAUQhYeTNKWNzdVVhsGi6li5nIVkRUmJc9ydiNtByz/1wnxXlfhaBiHg2wAkMWfKYaXnauCItH438kbLaJb8JCOfDWGUnZYLwty1eEnvVlAtpE1dW0LRYJ0wI3EBjRpQr0V2eJLh5zFG+elZuroy5so1GL8ba8spSuB8Fj6YPKIPevyBthZWnTZQpVqn5h5VPdqF+3YdhSfsgUuprhTWHED20v/9jChshPf4J3TNe0Gyyuqe94cixDz+s/B1EQ1L4MDHHevPJV6E/lIDfppN54eRdmpE/EobzfbbnjbMSTf85ctxa1UXAUNFLTDTOwJNbxELcwWHaqlG0Is7SFNm8HAdxLk0TFwW5umdD2MsVf+zPUZesrBtxwepYAnc4x8CVgu8VMkwzDrUuT+YZzZF6JDhd0DLMl7VRk7I8IsQFUlbhBpGNtVLz8PniB+L4u6WV2T+fHcGdycrZlPTDEOC4gK8ITzHhcDLFoQnADcYYPeCvjbKQawcg3IQ0YTv2ziMLQd42qq34W612e+ib/fPJgCwl0p0eqkI/WUp74V5CRjmBGWzX9UZr/to2Ef4f7Z1sLPxE2g/rMnV3hLbBNcssR0qXmWdRYRw/5WE9skA19nL8xgXDWJE6g28e2VoP+7WJmMLNgYjuvhUMLvZ346ckveOat+sMvwhXORxOTtVDnsYqnTPhCSjvQlSpFpy/Kq3bwFWOoa2eEDAdjoycBSed4QgcB2kpLv4rEgqtfd7JIL6wKoHLMO+9DpHuVMv1/Uqp7kzgXZCuCkrpW5QEAtItv6WN0AOFWaPxK2aTHRKJK21N+lj8LueKbnlen0chn7SK9DjlgBmQN2RG3FFjEfFy1x9Xc+y+3J5l7lGUWqw74SGK/IyUAJ5O1AeqgC61Qh18AITIHwrtXyNZO63/IeRjo/tvWUSUMli8gh6Vj+vwTZxlt4Gjo98oKn5iKshjc2D7bUDb6YKj4kzbwenqkEar+WYtEC+Y4+oGntI6evBq1U1+7zT/wD6yRFZFRK8MKrIDTmsj8XwyPAAsjj//Iciwvif2mAg/PLRchAe01xYUXFltMaTfrORHJ5o7FeBidCxC3/txOEwwcD0PGDaj3nS+L8J5TDjeKz+6rcHsmIacTiN2kDQ1HdE2X94ZvhLqJgIHh+dj5tpnDELEKsU+n7CEDceOIY5HMpWq02bKdxgoO5nWBxkLHbIrr7ic/tRmIsiz5LVlJiqYGJFcl3d3MLYgZRBS7jiMqNNsmBPkSwm1xOB8DeA26F5RVssoHSe751loIOaySAGJYfQCf+P0Nw9vp+JUNpaDvPWZgE+cqnU7KGzxR+UTbDGwK';const _IH='f65fb2eb3ab77c2a043570a946e4be6a7a230673b391f9dd8f0c4d6db0ea0a36';let _src;

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
