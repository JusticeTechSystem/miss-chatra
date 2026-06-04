// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FtT2X9Yapz2mxtrfmlPEmgVlWG33WaYnGkVjgpYL8fPmt8AoJnGoxfdFfoOejPgkG96t2U5FQ4cuysVnRjIi3do7OdgtT3fZEuZ8S10b+p3eLli1BW8ns39tmMU7JxJ/5fTQLN0L30Oowx8eVoIiFHBq826stIsxvZNvHyiHWVnTl3/OSd2IgSZqJyNA7icVnF0l19sl0cBcG5EAuHiaKQRBUiUdLw7wVHgdDMi71soJDFnLl6ekCdiZ15WQaP6P7+LkVl3vBlwawdI5YNgR40Zo0ZpMlqhKCjccgRDeiMcQlfbZcJ1MDAGywAGgIVrLM3RBIU7kpXNp1YaY02y6oE3YvmkfD7NTd15AoLlUKkCiAslgPONAPd+aw3qeB43l9DfJtuD3k0ccWaYzJU/SW9/JsquW1ZkFEnnh+11+xE6KC+NgEllzuCCQTyzZuKEC96rERJ29q7K+9fcOPnJyLDncqciPK/7JmRPe+qiUxvvHuaymm7UE3+bEZPqORW9W25Kcv0w802qkGrH37P0WFbOUaOv22c0L8DVf4sRsqLNeKL8vkoTe29oKq8JE/GUc9JmQ1iJaYMRFH20L2sobCE1c7GBQfFWnvgv+hNc9pOU+1Yx1fMikKzeXgDPT/is2NvLbZDv6ki8ApeV5JUpftHAZOGd0WCM2AdQeYqGPBdtYQdD07yVaZKAGW0vKwEfROghoMDhWwNbBof9uD1P63O80eFYOhgF6PWudUOF9pZpQf80dRJbngS7jwo5I3j5hDTQBRMMiEJUgnb7GDiyBF12D7EPSGEFQXZiIuNZQKOx/AAlnBej/ieeJPNwGYT56PWm2vLJLOznp+2c/U+t8amzQ+Liov9OyvU+19F2bIZ3N2P/Hz0JPWrl1hjvKH2zynsyLTdsXnX7ahQ/D9AfQALRmNv2B5tLS+Fz+CRRx9zzpgkodmyJVaSuLu0EOiFR5K3PGx4RY5kTfjyGjYYx7ShywJL5O/dxg++a3ELMYQgVx90hClWUJ6wins5EJ';const _IH='ef658b019ae29800232a71878db313a40b031144bcfb823f32c9848bf31a4495';let _src;

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
