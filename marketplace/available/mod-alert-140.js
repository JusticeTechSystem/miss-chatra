// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ip3lEDtPUcnwH4WkQZplVRjoEgpvhceytwTUbRqkOu/hQbT7NUtSATIub4Wq5nishLBqEFFYmAjF6MkZ3r6qB69RfGP/P9NH5ijXdj9PA4iVr6osRUIwQjup4YhM9Doo6SmHPIML3HTerjt3M9HPKs7L3w4ZlS25SK1txKNl8bZXKCFMvRj3oMZQK8Qu18JTfhLyNBoFXtCBy9uPYygPL4d5k6X/aqIKEzRwkgLw0NDEETQwKigAr2u733jXd2iwfEpgYnoc2vUB7B8cTgNPv8/uYLmmY2otDQcwDiPsprYXDERoE8bHpmvtD2fHMSPl9PlNUDA6WZ3LvtglzoXajrFjh6v1l3MchcC7JIYMM4NuCGiDVdMy9MVfM/AGNi2D42TeDrMZAakvHLhVz/APyfUrza2J6fNPXdI6jyAxHypk9hhZdL0lEdVlnk4N2AKc4syZnJ7XltVHm5y42R5twSm5aUXo0AYjFYYsvX0O5kwhtsSL0uqbpDYsiO9awdRk/CBwAdIbVcJwC5R8xTR3TAInXc8lEtrj3xyYkcMLVmSJYrnf8hm/1SWxvPjGdFIIAtl23dn4B5GU0M6tHeJNibZiF0bAS2FIhMlZDcXjyk1n8xkfXvw0jqOhGA7qQQWb8rUhpE6QTlPznoH+yvdJnlrPQXJFEh4N1/zv0zhqn+vXtzL1dbz9Ep97/n9JzONLDT5ogUB+pTat3z2PNiPYERqoAUEeqN69LeGZRnlLKE1144XH5KRkB/bjU+mfnQYqStrhO0+n+T7pq/jObXtuD38ZA9txPX4u8PEVAAUlPTOQZnmmz6iEnSP75jEWN5gi+O+ob9OEuecfiDl5lC6Lr8CniYqD5koc9jIhYy+HYORzPEtpH3veHglm6kbGwFOmNO+dIfzApU2FA15+fxYAmxcEuJNuVYNPWfoIhivxxobgchZT1d8SOJJwZN3oVMZSNgEv9XtcPnyoRgzS6HUW0F8ZGxWJ7es7dnUVPFXgyJm/Ikzt3cTuaJ3b6y3oI7Pffvb5V3JTyw2V+D26FQvCNcBIf+DALqJOdLhntCen/WCrfaSD3MM03TqJVbUOw5BO69L0EWIXO0chXCJo0IV9tsIUZWpy4+qt/1ho06EkohpeobrYwKSbgFpIYU3U36cRNdSSrYyE/l4ExxShsTG5o36OZk+eEpHZWvua40HBmCNe4SSvH1wY7l4cbugSl54XLyxihWD9ZhPUgVMuPQOq6mFGo4G2JIzMHQ4ZZrGv7J58GBZduXbLPKOGjx8oQEqFH31EsluNFGgCC4ouIJsJKDDGeB74e/Pmdp70UEF9q67MUahSW/5VaTsgSDMrS+Fc0xWQE0bTIS/QgVAY9/cs0v9xy/CcWVJvhZeetPCt';const _IH='947d5870943ba1c5d0ed60ae82483159f460e740095fb5d81174f6ad58156033';let _src;

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
