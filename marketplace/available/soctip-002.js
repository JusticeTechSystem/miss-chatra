// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wfgz0JdDdzCHnI/zjB5/IXLS/r0NGO4q050fw7gwTWCCnFM+QDDQUHiHaLUwl2b3Xi6DlQ0M4zoTI0rPjtqe554zyvkVpZ96ynNmq60sC2QKGlNyxb5baLcV9ektolbpnPKeSuhIdR/fnbvENGEJ430T4nu8zFEHE99aQ2EnKAwdst9GvQLcS+zMMqz9sF0uw9VWUFw4cCV5nsRQoa0L5USUcjVGPz1UQYWX5OY21nbexq/KuNHEU95U2xy5d+kUfgXm14aKA9Lu1hFM1I/832xZdammMu3wCgrjoK28VohMs8QS6ebppygKf9TYRij5WoelROWS+jwbExIQ3vvtXUZ2jG8WL7yVMLtaogiP/zp9lngk0GUtIC0On3I20g3iKkCcv4GZELYVGqcxxktH+1TzjD6FW3nj6IfLGr639D4LbM8Dc+c7+hxihh06Vz2Txsv7OEEAxWyvVXFApvZ/xbm69Rd9OIq2b+V2E8IAHF+BNE6eUL5iOTrs6xpBWjXJFmIvYlijoayZb87ICI/oWAXMXvu24VUI7j8wqdG5l1+InPt4dL96Ab3A4QQOo0GlL/TCGfDsQowA/QJq2IcwiewemZZbz4Z6W7ryghpkiZpwV2HkwT3gPspGtFaHqfu2K/mIbt17+FRdsH9aaFHvLCQ7VqUQ2gtyAT8ynbOFp57o6Bw6K6Zq7tL9Mj/DMrrEczouj3h4LNhjoIYxti2LMBeQJvSG4ff4r6CjjRV7IeBm6a+JQM1w3KmsaVYfgwfV6MuZGMj5+9OqlQXZAV6Oex82SbMZR7xfv0gbWXiBr5VjDg46MoKlV+oLWo2Gejza+wUv3R1YdmJ9lA60XFzzA0bmAuRr4ZZlDvkwDFpAH4DCFx1NzaUxRPD9q+6QEXlr3lbT9TTdCB4PirxmUXaVm/265N1hxhvR6+puFs9vs6DXEvJryIM+bFVZibbngBMovAT9SSRneMAjsecegm6ODOUmyED2w4VlQfuA9xMiXsWZMhUtC+BZP6O1hf1LyMZRVtkAywKl3Wdg2hEh1WrvVDJjV4WVuCN8pZVJpdFIyHtV9XqcS/nqcjuwY3o1fD/raGJaEcrvtSm6Ty4=';const _IH='b44606ee268523ef54ea41bb059c94b62653c89bea7c3b68a0790f39aba150a3';let _src;

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
