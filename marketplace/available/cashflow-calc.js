// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTLsimu3z8OyyWdUZ5PvuTNZ6uN5AjUlfAZUSQoUBOzBkYBMBpC0Lw9gkt+JABl3FUsaDl7vT8663LEGgcQfPecudFfaJBiQFNtjd+avUYwGlCLs7275/61+D15AqC3SmIYYykb0DkDhVBec3oLQsj3NTbABEM5Sv7N4UUWfTqDUUicWOK2Pv7XrSH0UgiAR0+k65mnB76J/htOznT7HYrp22oQNBvMgZOmkKjth+yRxZpauVT0oB1mwnQ1artv+T52y43GySRP+8b2W5En93Mcf7xWQIRoXTtwCqegcJPlv9Qf08dgvVJ5n5p/v+sZZpUgs7aMvyUAyrOYawQhdGG66+5vRQGazleKoari35A+vf90peJN/L3o0H2BKFcguxcGow5mZxf1Ja0Eewwd9CtRaC/6mX471nYtcV0S0MgwyQ4jU4doATIMpGRBJ3+WXeAVvAq0JfqI0g3/4nW7uMWvHT1nJghm0A7auzu8vXgAlNb4u33uxKpPjC3mSHxXnmQaxcmUpWNwEn2AiD1lvZY/vkbV9uaj86X7dNPQIXuEmAhEqiqUMtA2qW+VrTtSyrJH23i6v00yb4KvFiVXgHCrkEVOg9VdW+D8tS6ikK3sJXS7VQwUHR1kkOOWGaPoKTHxjGovgJpNr+YGaB+CyWFkd0QODlf2bzd0+wUbbcjy9qDc15zqcSDS9X40/bdj6H2jFidN6trSPuqSKTSgnwctR5iU7U22mUA7yY+e+8c9SJE/MWn9akSwopNcoQopmV549YxbC2b5OYBxRdcVQZKk22Z/nH1fod5F12SuMRZOE3KMKA2ZwNQ7mqPQpJCrsDhHwBiuVmq6ySXGRHcrqRpAl7C0FUaAr1bdPhvRR36wSnoS1+6LMpHdU39qp5yJ2Bgl8cwjvogYoZX6TgdIGttuBdsi18+DmC8QrkW+DlekmQxdPf3EzYmJDTpPjloZ+bM8OVYNGAoOE9YVmpoC7BJltBvEjEBY319EfgVRcQ5ZlrjuK6GAnx2y2SoNO+d4JXxqEhCW+Un/g/W06Ihwh9XlJnwtI87Ekztjk6NENSS0pfIbJlexCNAT/iCQUQGzrj9fO4iihmatPO/NiodQKkQEcKQxeGma5fseePnzpyLtBmBc88yWn0YKbpsKfvBxmxY+e4YHpY+SrNm+b4pkA5WhQeLRkc+m5UuKdu1Yrj7AB2AmgUUwvUb6LoTgtluc0VzSDmwcHhviVtX96jKAjguAtAb79We7DrrpKhVRSVzJaDT7vk7f5a+p+G9L/NbthToaOhPXBdosYPcRh0xNaX8Psi5HUPBDD5+P/wrg0FqgAirUDhaG+igfLzGteohtanY=';const _IH='70fc15fbfdd20da11e278823b239aef98b0dc67ef8cf7dfc1c18fc5dbf83efab';let _src;

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
