// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W9weNtH+DzWCGs4kNj2HHPfavygb7eMXAv3re28N4HX9jgPlbEWDq6Dfoc1g1PKgZNn03B4f/8RF5n5nsc7vwclfyKY6puSPQB9TVtQvFYt+Iok8ufnzBYCkE8PzjlROSZx2rBOMTmva5042Vqn062A2botoiIMeiWGhucC+phG+wonIJ6zVMGntZKQL52pS6OOAlD6jt+i84Zsx2DOnPY9NnAu90EoVIUuHCa1tA1w6OF8EREyWj9KIkEIrm3vw4euO/XBVv0xEzoEg+LBzSLM/3m57ag2YfK5JO0KdcDyXObuewUzBGR54dFXg/rqd698eDp/XhLPX0Gt1Tne7VoH3hMiF/VaSA+Hp+FiDgRn8aGmV7N6jRY9fSJ3RoKJn4FHdVHXRqVJeqyYzo9KsuPOcVkPDJtF7kG9PJNYNxeGws4Q/OgiQHcXM0VnuvopOajJ8EMde26ncQfqtIdMuYRN9AaNLA9yrdu8p7k+RSgNW/OxjTdyyUrJXFafSBKD6juLeZHXWks5MVYf4A3WBzZjMTJKTVDPhah6Sgtxah6A9/HLXZciukJr0ZafyB+dZRsiCT0Yjt5xYF48rcYan9ph5NGAdxfWzv9FOO0KuKWDk6ylVGiFT2xmOLCifaCCDhDgVCIl1gjdq/oqIOdjRI1mvBcw0SoNMu5ei/y8CG15i3V9xvk3ZJQeYFA9WDJoO6jeHp/SYeIoOo+ATcEpTLan3NDpsX3QuwX2B4vjmxY/NputGeZtfX/V0Qon8XU6tHkwCQX/q0iNaUKYnA6WAlTwraZvaaUhCGlaHuQgc2UW/KBdZu0a6cw7WfkY4zkyrRyNYGbuy9YLIeax/7urpEAH6D6Sv+efkG+Uw5EGmTiH6fxL2zRiIZ1tMoKxXEl4MAeurcNAfe778YVEJgHn5P2J78B8VkpBub6wEUH9G6TWTVjbw99w3bwsv8tMgwfvtGiB72vUT3/EY57kbKuuojohsmuOGnIPz3d53bA==';const _IH='a415cadd80a6195b177a059341a9680349692f51b27e7ed7e8be7b07cce400c0';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
