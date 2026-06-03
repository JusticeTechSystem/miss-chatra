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
  const _b64='/N4HrXcwdawPtzzYhQ6NuW+Xe8YfbXxzU90nS2ILx/699GK3ffW3YdQg4/cNZ9Rs2fS/eu6CHvCz2T7/+kVPabwF4bFEEZeOuGP5x0aAK4ZRcXg9klzkuzQa8L5XrrTczSD7YSxQOCzY0LLZNLMqv03RbjIcu2/G9lFTc+6e6yJoWE4fhtSFwW/AwvyrjXrFx4cAGjr8+p1vWXdnpbu83oLH9JhjBqCtoprpgLqnjunmtNUwAf7YSBE+foHdLMuLkOsmqUPhRZEdDnUHfOcuJoOMjJjoYXOQXxRW7CXajwrPSvXu4JSbWl3/NoHxxlbgGnPYfE0wmhbegom3Z/jsIUIiPdSIf6uKy1LP+PQdoSt72mt8grponWloD/DSeXZ9MuBkRilUr7yqEjX6ymCSX6vbpFXZU2P3hcMXGgTRoBEjFfKAWsgRJ0Q1DS+Dy5pRjG/OHOnhZQr9LOswoFRzMPx5DT3AvJkHUpdnYb+Xy24Us0ci8hFtnP4Djpir/9PshU0mdp7AjSaLgdIZBl+ygyMhCOZwGwS41Zdc81rn4l55cZe7i7QPgTKBZdT0RiB3czx4C0aUBtCDwQsh9DraxhXFQa00+wonWcOFem7B/AGoout/LEdxfOsBn1nGXqW8xKb/Ic2wPsb4t2CG5+VlMABTx9Rb5BJtOB0O5cUhkQQbE8Va3wie6I6tyTymKVICBWuLM6fel2NlCTVRxyFV8lheHRmmMVpLvLZtahUL181FvDUwO+dIT581KZirUd0o/ym03vjYAiNp8e82RU+AUZdaR1Woy75qx00TITTO5AEIdfdacmgGgW6ls/QH/h32nUrFuzRHkt0+KLz2LREudbIy8varsNSAH1nxAgsY9z9c1jAdGC8QzoXmi6NteDYeFuQUQcUsieU5Xnd3VCAuILtqz5HxDKacTfw8qETVIx/xvbZ1P+AHsJDGY16ATmROTIDntjxjUVm3lQRExcf4HszE/cum9zsS1oy1OIgEA8gevbErc+vcSUljm7Pzw+tD2SYWYm9J+5TqE8v/J7mdok5mryRBEnLjiOKsXQ0MVJIItwrH03imhFjmEtMHwKEZGqagXhlRzK7i1yofnj+zq2ADiENxbd1ZYz5BnWE8UZaekkKZ26BML5MWQ6h/zvt4vWBybyEuVnGd2Fi0lrV6uxhqeRkmF/iwZaFqXzuJ5J5yYsg77HIGg8YmJBtUT5Gyxd2NjuKEKaH4GttQa4Cq3fqqXeeIcual1RNWcaysHfIH3mAfb5rHPuBWfNm+6PTeFOg3LhOH2EBRE7WIgr8KqNTfGmmF4TYW6uxevz5fli8CqXVtyBkdpxmIWcq1xcZCpsX9lvIx/+DVIwDghVXh72U+XEP6Dmq3TpnMg1pt';const _IH='0e26ddb3e8e205e3d3eb9ff7eff2ff2f6f08026683526ac005a7caec744f8540';let _src;

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
