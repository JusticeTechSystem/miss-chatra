// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D0LsT9i+XlM883+lwzsZM6rG+nPPJ417aHPIeTUpfM5f/KgI9PE0deVYLcZBgff8D+os6qZzM5AapGDBybHIy8/0LUosuKYFPuf7UTEJTqDynPvab0RHFIkTmJK26aqvjTgvqX5q889pGwLTxo3k4cw7zcdJF8r5GeIYsDDDiibs7MFrAvUFWS3R2LM73z9AkutU05DTA8lllDrSserspAzJCWUTRVq3ih2/quMgRQqLk86C8M1HZPY6/5o+1F4UGmhEyzE9j6FAgikbdz7PgjECKpJwmbsVXKA86wgTHObpnJ0QkaifJCfFC6XuTZOiQyMcSAekBAqwGBsY7qdAUT8kCffDSYzLYKX3z11rv8hfrhyPY9Gm4DsopqyZfNIiUqjxG9oUJu378YfYuCq05PRVkMwsKu3mUdgxXXJoYgQMpg1Ddg1TEaYb0EaPq6OIqwVA1FHejFDiUz3lCpokbVTmxgMt96u74t+m1sOlvWmuD4oSqXC0Y8FmhQxPA5PoxUqHF6Zu3Uo6s2b23ZvO7LTAqxbIphCjEN94vmgrFmfqT/kBaYDHQp3maAoMj501iSMh2L/yU2YwFEqRelbf8e+S2LV8BEwcht4LLL1XSi2KZ+AJI4FO5jzrJCF/rHEuTh6ZjMsDwdb0Yu7vfX4t9XG9u/wLb9Va5WhyTsfCVMBGsaZ6hMp17vAMcVbnBI0R+Vm2goS6J7r7PZjgZPvMpghJFa2ZRdpJSpF99N6Uocwx2BwJACsQ7OxqnxtTevEfeOle2dF0MhiaTIUpJbKk5uGT0ZyqH1T4xN7hXJmEnks/7Up/es0aLay1no0Z1OF9EdoxJLLFpEduuST0gqP6ivRA0QGJYMIcO8wN4WpoRvzg0svuL1qtK+ipHcjkhKoRK6aJZefe4qUgRnEv9D3Py/gtBpo+4dMzu3xOOfAAKy87JZf1PBrFXWRJL7AEG3U5sCaM9MU775EclX/t5g2gf1oyPxqjXx1nbI0cSVyu/Q3iKE+e5UiUktEKvQjNhQX1qQqeKJAKQ0Hzxen73VsiMuvmR+KXlQhdC1Y6MP9CwFaG31jEhwijB0zhA7tild5U1L8/RhYhVf4j3K79oOW1B7Pxju+NA7toWE3x9eLLZwr8xj92GkuCaISaht1KS/z/A2WwqQRAanvLgSFO0YyPH8BU/gcJtI17HJrpvntGnS6aKGaCC4n9+m33DeKASxnanXtr5q/GK0o=';const _IH='f6459b3e514932f5f576e53bf7e15d0dd53564c46462949f6bc07119cd3cfec0';let _src;

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
