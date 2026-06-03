// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FC4WmkROdl3LHzdCRV+lyaf81LgKoL1YKpoikdsBCisMowcri6Pwp1Xw8cnCDwAVYtmBmrD8MGrujHmnJURtdPd6lRY6raZU5W25aJ8XGi5oMOA4L+Rfz4REFXJCJQc9kp67XnW6U2j+WgHPj0inWIYa6Es3ByFouL2aXmjiYi4vSebUu5sWySy8ldHBbIHVi3HZSx3nhlKJdLEuywIjMLb38cpum3wzml+74qKh9ttmZQ0k8h9+vbkI8u7ZlT2AriR1nOxPwanLLPQH7fr3mSKtL1uZWAnnYVwMgyM0j8hVSAH9zg+KLqSAoYZdY6EZXYp4iK8qtY6FJRMNiNPI7uqQh9qM8Fi7zlsA6ciTxNnghF6aEpGcjmGeU5ORCyMtsGHSzdb7ze+YyNBJCH5GCBARxg6+UA1Wys9vKoHtueJ/OEjIUnUb6zvnssYfO5GkY2jWFw6AAwixYBWVhBQ36p4CHVWeB3DOAX5jgY1EyY9csa8De6gvHma3dW0XMB5onGvXgfmuhxH34n1tNnI7ygb1/E/52V/t9OnkFBnxWHZ0MAbHv3B1kJ+705qA6i5B124YFCXfGowtRmC28sBh/1LJXXcSuIsyFNdJ332B9UGO9uR6y8LoVMblW+UtkKd9X6A7r4B7CMuTdNB+zpst3AeRDOWoldanqYMYhRBITmpqb88FNXZYz6Ru4qkqeiH25ErE4ZBrrzW36DFb5MvczvVFKuPJuUrtJbqG21ENtK2Jc1cxakXjlU9hwg4KqTqOboM3rneq0grg5asDdUofRgkg0laxuhEn395SM9MmIZHGvjcsSMp4LiCnGnDawxqc3xH4zD/B4gUtegeV6FFEx/uRJDAOx8FETRcUnYD++Ir4IKcz2AFshpX05G2gy5BxGsQP7lRcxd1MPkp4VGcOPUHC2bLiulpV+rI/Q6OwRJ5iq0qKUeC0O74EprfNilNGJLw9lbpWmC/1OBSC1t1SplmkIDiofGXaubBHG7DGPw9j67Ma4WIqmYB9BPTvTE2YtfzUecogB/gVdDTLSXYdRXfs3Oh7juq3XWDPcD0kxG29iaDPkkb2UE9yFl+sA+3l15WUVFnpBxrumnSBOM/Eufq23oMFwOFP2tvon60ki4QgbWwHTqc+NruX3SVaDrGXyMNAR5B9suai78HJKnOyKmsDYA9p+B4PkVwIiCkjwd0A9ylX657vLdJa31J89uw=';const _IH='4112009b5278218c9693d56d9ee7d63093e2878b41c46d35e4edcc85670db0ab';let _src;

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
