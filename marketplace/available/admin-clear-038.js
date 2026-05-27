// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0XuXKyouaHlM/dW97DGGqgv6bIiB/Xasu4S2aVT92MPw+X3CZ5IEMVej6Y4xF6tdhFKUsoOSZlPvDGf+48dH9qNmLeNL1I6/0y3ej/Polu8v75v3evr10lKv6WNZQmAClsuEfze455kPZopNN4wdMaD1tDUt+mU8TRh96zK6NzGlyusyOc1ZCJX0bpVs/XglL+/pqkiRQlPo2CKcdM+BXyxfWFh8BFAJhLCq0PJPOF7TI+MAH2vDj+miCJya5QZ8tpt4U7WmQq59fNZSZVLtD9PesI9UXGkJWxmFGyg/6gSod8/ZZBHr8tmGH6ho1L4OMzkfrwbnIgMnJ2FmkUJ5oGFRvzcK73C3JlnpsD+ZpKlvnXtS4jIfBCfQl2yFHgGQDWLbZHIrDJh7wLWL/Aur1jfAofsgaP8CY+0cDh5fYg480Ef6iyefFMIcXaT0KHuQ8oKW1DsllnNcwMHfUDFMUQVT0+kgSILT5qgR+zaueZCc2xfu4rq+Y+0ovZ7+7PFCSN+F+OWhUWHf3jcSYFk4jcHGnU8pCU2hUQxHEZyZ9kNxTgPmdGjug+24fs95iuCkMWRVYi8x7V6ILZrkGJqaSwnwE0boF6rdp3D349qvJy2m03x7ZF6WTQg8iSvSPHoNOAdNvOifiF1YmFK6ayPTS2/xnJgJSXH8AjnB72wKOfFv72BqVvuzJvrfV7t4CJDyelj65MZ9BPWjUvGy8XilqaC6BJBC3igj4lRXsaewxbqAnjxLVupVyjJg99hfqVJKVrUoADaTQDkvEMBOcLAKcy408pKWgd6fiOZXFBRZdvVv35AHB1pIQwpwewnm1qrruCd3LkSOfvhE4ELodcmNdw5AUrl2SeC9DYbfvQM7Tblw9+qxhUmFx8yX6aR7tETx0MxC02manLtJ4S5ZS39S7AkrNVSJgMd0d7UHp5ZIA0h+3DYqc91kTMckP4rILO8kxdZWsqfI21lEy+VAELYAQeEF7LC1WxOufkIOCECmYrhEoho1cto=';const _IH='e34eb85b778321447ef0963bb6228efaeae9fae2d889c876a13b04177b6109d1';let _src;

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
