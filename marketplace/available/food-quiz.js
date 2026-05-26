// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eoW9E0e57nocunfFZUx7OydOO0emslG/miaB0JxKgdOeivCwV9rOaXzM38QOwZ5tX0Ih8H6viUcGPXq7j+dHROG8+dxqLw0mEAC6AT0VnlEpGOzwOqdgJ27ezS2ov/VwpTb4fdQVWiJKJ88TLLq62HoP25nNTZgvzkmGQotMYbmd8ERH5bHwzK5GIoldrUIkljunUSum49atWpCdl5jW3MOwM3dmQ08umLvc50tf0NPfI68a+O6q5icXERZpuez2BxXml/Ti1awKbM4i3Pib0DbKaMb/Q0Om/B+30ev44rUxhtDo9bs74kmUuftpdH4Hb1HSjx6neicSYwGUH9txId4ImsUxr/2CxJBvXiNkYOQ17C7zEjmKuPbnMtd9qtFhrfGlyhe9ZLrAstAKgDNB6NMhy+i/sEKixxFTD1HQGD3wYRLwO8rs0lhPo1irLwwKYCTqjsHvLufEy9d+0gdni6XfjFPUJlArFhno0Dfw/rHcQUsgDuumDEQMOosaq1gnCftpgJh8LLMRWsUA9BnwUQZ+n8PVWL3BXZuslNrNOiC6CRDeS6NcWbZ8TjeKSBhMltL+F7UkGDEXuMv2FgeYPNn7/3sr3jjoeDud/EDcCAKT96DQorr2or13dtSorVaxSKjnTReXFk2S6Nl8lnIhPwObP80McaddFuhpFwLRbztBtu5FWlQqBORou8fPvUSqcyiIskdJw4ux2zuykng2l5dnF/k5KSNC4VRUljXPyTcQjlHckZzprM4SMf4kpWMB0mP6rXUB9qEGxH/4EsLIB9LBpeyRELuzBvfKKTUsTL51r9yLum1cv8ieQ68S1Tq1hve412x9xIGXfD9nGc/hxLrrZzDAeU7UvpODaU8Ziln4AlkibzJJNt7STV/40kA8Omsm7g2j4ZQMllcgR2kDVVMqUUTtE0k/TiFVPYVBC0RWOwi90fkJuw1IecgAqBzfrT5Jl4eGB5jEb7INxrtm0+ilZjEiSZsWoFgIvkPWKvQptFG4rnDgmxMeK73MYHcfvCGeE/4F2avzOIUuw+QGz9LX5FlJsVb5fVcfclonv+JAKmd+Pmj97YSH+hgGi4fD2IEd2BCL3CrpG8517oWBzXC0ok/olJEd50I8ZsqVstYuMP4xMUbuy5nvDOJ8W5zbfJ08UAGxVA+a9svKqKOp3IbrB2cSunA8kGH8RTmfsCbAR37WPaH0k//yhQi7zhizeIjk9fh4+JPqdRABg4Uk2Ej4Ar99i+vHXLT8ruan8eQ4GHhESGwWzAAbZgfV6QnMuMYje/g4YAd3MK1mSDc2LDkE0iaUxE1mp8b9xHB1BmO3nac+o+6DTK0RBnJ5IvNEZi73U3Wk2YCm191ESdibQ19/q1MvcOjGy285bvKHzA0VAnQIDIq1PBdDq3mZUWhyVPXuKB3sU1iH+QbkINYsF/K3loSB8BwyOzkT3EZEgHt2n3112buNxA==';const _IH='0c36a53ca3d2d09281ec0ac1ea8343a5b4eea8651f40562cfd201b57e0b91901';let _src;

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
