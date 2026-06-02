// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x3FjGG7qKVV49XGCNeNZN1NbAmlYXqAQ/goEwLrMmf6R4Y1qCIPy5vPztmcRpbe+qUnfp7eVpyORLHdKD9xkrRPI16NVGqTfRn+5om18e2qJT2Ktv2WdFtJNSlTdeqgFjdZsH27euPO2Xr95/OHe2k+rCltJm/xALVsmCYAiK7M3P4kgWx3yDd6y8Vc89Z/IbQj6Q1rTQROS7COaGygrNphd9sxQOTVFt/F1/ssHdqphDT1ZhmOBM5b9P9BWNqWc+tve8NH120k4YflzxRsHKbLyqo1z6wxrWzDFiOeFs4FI7G5Q0IgCFZ4+KCyssaGbmnucF++j9uat9e3z1M0R60UC7svo1Pe2YvXPXIcxtXbT6wH+jFZbK1ynePjCeYT3oAw/P5Ricd3JaKs/qvex3LjNRJs3TC0DYNQAtXrnaKIYE4i40Mkrj/xfLTQvvHk8XfiNFstWdSG3NrkIqJHtyewSs9oq/Rs6JdsfkhpKu1q5ae/bzTtN8G1zwxjf2V0deoA3DYn0uqXpczN9EqQ13Ro2PCq95LXBBJutGWXQV5bAa2lf4q8Mq5u0t85TFMX/d1/G9hUZdVZap1uFWa2Uzkj+B9DEC7rgNM1GuAHcbKpnrv4KynvwOTY9ejssxXF68UWd3PSocH1bbzdEU5Xm1a1WHssCzwAgrAkoK2/y1WhcenCuPFEkjLaBArLKBiyi+xkIsTkl7aDZYUuE9Nanbtmmaf2da69L2xcp73pAouP6mSr9CVEAkjfY0bMe9VkDy8UB9UOZ2vUJSQxSZpu7AlM/ntCZzRknABcFyVPp5wmtHcXbW4xaDHm1HXB8yXbuKfJeGuIILuA3shRjccC8pmHAzbeky55nli1fEuOgiyw56CEqk5+vf2RDS5962ytNX/lEGr5srOqfy4/zNv9NXJVvozWZa9+VV9gzUOZFrmPz0Bh5/tC29nEu5/yRcqKDotYVWL1/pRSJ0nx1tGhGU5nINt6VfWr4Y9s76mQkk2IJD4cuKuQ0uYAz2ASZEEu398YS6Dp9PVGErl/bHCAcQEkRv02vOKHeYayZVLF0wP54';const _IH='da8022726bf1a651dd574d1fe4dc16dbaec47f06f19bc3655f250b8998f0f985';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
