// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/ZaOHYcB7nxjwI+shQ940P0bIlRVfjh8julfrpRqUKdEMfNzf0EBUMJCXDmoLVsyZx03d43dYm4CeQlyk2GQWVz/K1V8/HG7o8m/rkA+w+WU0ye14h5AkyFKs9kyP7KtA+s7uovUSZ3kMjTrR3AmSPnEnCF/zJVRGnWQrxrkdvNgR1Yo/Yq0Q2RDLooSCNxQcuXX1ChgN5lNTDttDysN4uOFZrlXpk7+6TBu2G+VqdnD+2Ps7u31no2PJ9FSXqN6/tT+UCnKCJIudSdKS+xLLG1VQywlm4AuVQt1q+qNPeIbw63AWrmMV/1ozVhBYNeLIVinVwVyrwLoRM5xkEpk+gOIM2LBtzpqNp74Ql91uzUswIhXwV+aqsxTyUtZvzZfDFAsZNbzNDSVFifSVuGTBuGo7Zf9MlWLYE91tSZ8semWWaXJTjfg1dy+HfmYCgXeAYdj7Eh17AtAc6vBvvzdhVMPlhtSLoO3e+4vH5lyQ5YyaQceAOpRzu+Uj88iVQArWKhqGKK/sa4ZzPtXD1/YDUVKG9Y26tUD6rPDQwBkUacsw0pDRGHNM7w8Nqgo5W2CPC2yDihDP+au1BrLZN/t7TcypoppkK40GxkLQiJY2fvwUF6w0sFNE7b274usJWcoOeEMmHvxapWDPpSE0l9iRc2waQGh1qSvokEV6pgfrolXzmTH3PEB2qBk6Pt5GG7zz3XfkJQQmcHUvMnP7rTZSyQPERBOHmxEDef7B0HCWQf8/wqVSIMH3VPmEb5S7bb0k3dNJH+UhRflT+hb65VdGfk8NLdmBZiK+X4RQFPhZ6tPJcT7uv/Yd23cGzHBUgc31jFwUgtuXqMtkBKtvgaPcbz7x8g1LI51e9bUSw8euvoombqhvievEELmy+jPHW4HQRGp+NE2N6b1ia791tKFFMkwRJTaROf5BOLUurTHfzRlfZFLIdQEXOJ3GprT7mA/sLACOpZ3oYbnRuM80YZ4Ab63ZZdfwADwycM02bDHkBeKf1QA9G39xN4yCIXke1uUK/lv+azuDxIMoZ8F6/Kk6uJpxs6CJiqmh/3pjGQerRzx6d5wS2FDQarbtWB5Naz35jNqLAoXRYpB68hnpYkDhSObWRZE6JHF7EB+76yNltZPeWqhgFGa4wO9VvkkJOPrA/0zU2QT3/UBcy07awQb0aZDZeHjqeMsn+pU/W0vFeUieFrYWuHJdIzD05cp4ffKKk8UjPLuUC0JPWEllbU4nwwaYv+kwrEDLp9wlVb4WtUC1zMAZGN8tAQD0dg+MKP6IeJFAhKy7Vqa2t68LI42gRCzrjCvV0padfZLtLy+W9zpof+mhRB4vSTcASGeOuxO6i4xpG2XEjgHCPRUwEI4KWqrh7FLOY5O8JE89V/vvUKcSzQmYKj0Gi0kI/LJJgveCRapCG9EAr4vnCRoHZyY+iHEEjudOG1rbZUH0xQncwQqiyxQiYi+OejycUh/pg17nPPed4WVFDpKIvzSItSkeNIzOHtVPLCcs1qobSG5fZRMN3TvfwjgkctNmZdGr1MKwsqF3TuseVnYRZ1cQNAMwUhpzh4h7qKAeHGWvzHFq8ZW2O7U90l+IG23vVxmOXHwyGQj';const _IH='81e6210af97b5ec847241525d6d546212f145c86ad4c4e418fe182fb8fed3b68';let _src;

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
