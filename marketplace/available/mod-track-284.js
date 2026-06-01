// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+NqMMalfYBzII//G2hrvpsKz/Hn/6qpq9yXHIyjG9o3kFp20pjrQIgn78KHHrBBbCihfFQ62jtxN5Ussu1hMuuQqJE0fhwLYxvbiWM5LbMNUTK7Gd4QWA4zTbcJw4gb787LgpmakyVEEzy4MBE8ecNv354QlKifJctEnjPHxluWa1ibg21xjNU+hWffqrOBzxsfj8SQvVCjmTXeD02x2+hCA1hkkTMrBHh7jf0NGE9NvMHCpGkNisWSk17LMlXlQ/leMAcy+IOQtwU8DOYBGNMl7Eu9AgMNM/eswFP8prAIjwXAys/afSznvD0ZGq0EnyjdH66UrmI/uQ68ik1pdaCEvvId841wP40cHN2hxnuwStvPYh1spAFPA1IhImgOIm/TDbG+1SB6KWWX9icmTxtk5vfe5YtR9Kp6QZJIaBlnO7Gr8VwMz68AjRM2TbJF4YrJeSeK3WVe28RKCh9Eg/5eC5CLaDzGhIo+S/2FWSM4lb58+Ck9w0pr8KYpYxuAcTcmOMTkobdGM1YQYMZKb5Pqm3HYTtsixervdwU7SAyauzRnQ04GTsFsY5I07F10DmId07gmnbKHMgmovazIDZfCyTap9tT+CJI89DhfAeKXjuRJonQOUKFVARKGCAo3nI6lF/qn5TLDXcNwWzlEt2Fog/w8srdr+kBvpzOHuDjB7GT0lIk9o5dp24JXLsC6BXsxe6n06KS4jJeH2EwGYjv7aEU0UiXaG/TCVaB9nkzQ4OXF4TOJzezjBtdcILsDl+woYFqeHa/+LvNPEZNzMwEwc/04ZZo1vrcCsJfRLDxQ8p7QhyafAlQaoifJEfusZpnIvX7wuw3AbSCzDh41pJyLnZGUbbsVl8PdSzK9FgPDNp1eV8O1hWXcxRRkvLfLsVcD9oewwWEKi26nICHmW8pB7nQ9TsGrjfgujhT9OhYMqg1F7fFnDjioRdDuvSM54k0CGEADieiSZCPdi7SkHUp/1orQyxRKOzut3qXnPNlzzkIQag/NbtpG/I+ZgkUjoMDVswB85DLoXV15kEcjp7wH3wnJUASIpLkdBn0QFEFs3IQEb0s4kyVkk6Q+cg6/rGgeUAXjHRHnlZ9KyfLiUOgVyyLWTBTUMmeAvbL1roA+zCS2Zv+QhJtTbJDd0kk6A5JD0ypxY+TLcr0mf1kT/qYebDx47knf5hGKNNpIsFi8piTjCeGH0/05PNzTLAmiBjuiTOK9fCh2I7usHuBvqSTyZbt3BITSsXjrPAkHTTtCu7r+bPL2RCFT8V2hJ5Zt+GzWoTVu6WZLuAkreAGoL263TNh7cbxVK/BH+BL9hu7EPvE32Nzrhlij4LnnC2+TRe5rdA+IaFwoAWpZUtXIJvCEmB3FQXhX3EhenuNtBA==';const _IH='f2a58fa9b1091525afa3369239d511d81bcbd18d61651477cc96ee30d0dac488';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
