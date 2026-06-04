// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zbOogBWK7OqbW+fEY0/uwEqhmb7rm1zwA57D6vfgotmH6Ha9Cis/N4XxDRjF6bZtGRENBKmXez/DkBY/k6UcSsSc6sALSDpA7ruClufmTAEyJq9aLT7GeU1nBNuDzkOOvcSa+778LKJTW7tG4fKDPGXDSNXZjvlwTMXERIf8TrT6w/Bqpjx7JrcrMGBMEUFe9dAkTe0UWNa20PV9Johdx86jbA1F4+bM6RC8Z5FZybo2Ny3d9Fwc0yl6LfglistXIOURFt3qdXJPhhnB4egtDIxADrpZb8buBijU97HL4rwoDLOpHzaGlb6cN8iPQpPfYR1JmP0eqZqayge4ZyDYbiwIBXwgmMPPEiWf+oWDfb9BZnhdrDW7O7xKNAdFswxgQfqn1RS7GjSrU2ipt+xou2fN/eE0EhK7NJbbVQqj0Pxv+PcbCzYW9XUL6r+/+Nbgtxj6UeLJA93SKRKCl3ymaNI/a3SbCt3yW2iddQ9mU7cbKdsn4TFR5zaI99n0Bgu+8vOmwF6KhYf2b2c42CQ5z10NUsNA7lai2GFH4lel5855pcT9LQYzGAxPUw4JG621bYv9aSDORqY+zt1P04mV/dRVlTePzL6VDDMRUGvwCpz/3IAV9gp4utR2Rb3BMLNcdSoAne4gzWa17ml8bh3eqm5SXOLF4Z9Nvv2fIPDl/uRiPAjRchCI3cJfThxlh1Q8CdTE4jvB4B2wdO1Zu74xhEk+BXrMlKTtQ4fbL/jWVRGikLcXsj2WlXPNLAKNpBf4NhCRC8PhM9tT9PWJDMxD23VOdh4XfQhfXhgaYcwnSltbovg/MBBz7k0gsQ9w8IFGwdVH2Urre7ejpQ1W6H5n1MFCmMeg05CV0yLEYRGOq0fI0p7PiudBh8IYJ0wJTdIUICQbM2+V1PH2vr3ZFMsi/CvcIUjD+qft1Pwquz3uKyWAbNMkYzeSqf48RUW+6Wl8/j9EBFpB+IH8at3UPKiaMCZk04LFL/Ah+LpgsgCS0Ft/0x74plfVkd7S177/Qdn1nE7gsD/EDofRSGULnHMc/8gSbAdZy7QxIbaKvljdO42xJGjQXnjaz85mlR+xeqz5HYeCuBsjd145MChyPcMDYA/ICq/8qGN+VcSsH8NWqBAM1ymcfQNPcnsSfSXnIi+00Q1AMErUdtW+z3x2N0L8TTVjy2iHdQGul8BtdyDu3mF7xL5XfATwgCr8Auj1r6pQFLgb';const _IH='a8226c5d065edca9aa4175935220161b95d48eaea79119242bab533e231821da';let _src;

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
