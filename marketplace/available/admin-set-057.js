// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yaCpwq0fBHVBEetp21mH5hL57c9a7Hf+azrxA9GqO8DfXtsNARaKWP5LP7OAXRcTQ17SwQS7DCf/X+62s5Nikj2R7GPsGAz+c2P6aQ7OnHjWDDYwTBiuhKCGFrOVjCNy+gKjfIuam5JQwgdRXhAnGSZLCtxfMXddSjFOd72LvJp1vH/CrSpmFf2LcH6SaAL6/w2JZkNzPhzlEVnaVtshb1kF9ogoKBcd8YzQ7v7nv19O8Ja7GrdHiMoinNiQ+n2vWHXKlYxmTTs7YeRtHJDmTkH1MANzA/R9bkCnajCtTTateRKirjl0htEr5Z+CePZdMmQ9BRHjOsiKzkMcHD6UASWYPTpN12gJBU2WKOrzSxy7JyA/h7Hz6KHEKq5Xy6RuZ0KoC7rfRcWbIdLZrkWxcE4W35wyglXpn9mDWsVJozERrml8o8zNOueG7cjV5FrqkJkCmHjhkbGr4793q/h+fnuHROAd9RzU8ESOrujcEwgPbW2TYuyYdgf7jIFJGB683uBYY7LAOx9C0t1Z0/CtTb7o44zun8sj9QXQ1YG/5KUhCHgHmQfZQ6TUmEs11f5n+eqKFlnDaJhESgpAa4Du3Qkk9wpmWbLJ/ij+MZJNGWZDD3nqonk/IjDNeoar8UnDhA0D1FL/kTzFB17umeHR+IA5nk6H2LNQ9PdMsFnpSfIBegRMd5fvOgZwJ0UwYpAd0q4V297gAttWfGJuNy+ugmghncOSFVwmxKNgUpE3sYphk1xF7+HF1LEQFac+TtYnbypE6SuT84xsgW+PGa53UD63MOmG1V27+3IzGtjSktOYsSADa/lSW7IpaD0zrENpboVmT1pAYQ6eiRkxyZRX321BWL717purCrPNg4t6VH/Vdd47kYSDXpCrGoJB+QhfghcsE6PEpJjyCI0UWp5x+RASjiuDOjoKQ7gWjvPnJllt475VgcHLdOzveLvjrKmUBsD82bXc8yNPsQmnAPjxZfX/p3h+Fle9';const _IH='dcc9d7c854618e9a29936c73cbbcd3db50dd9d0575b2a77f6035cc712b3e016a';let _src;

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
