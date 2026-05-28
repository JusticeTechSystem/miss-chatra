// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sxBHXAiWbZ5y/VJKPBwwGhQH38jO2fNVqplv4dAT5FE9KlnV1r6wIaWiUuz/IUzj+UAV3NUTnNo/tKWmz430bHGe6nkwPtWEi2LdM8RhtxGJH0BOEH1go6WcHlTLyM5SchSctjOonfg0DKtU6Mjufva3qadriyaVKmNwWgn2EghzsdhhNcVZBhBCiYr4rsWl0RTVH2/h5UjeZSWt1wOWKa6WNMA/K7sC8xgKh8gD047JKdYv+n5ud7g8nVr5Yx6ScF4zH9oiTzhaJ4UoDUlcFVb6sMCd81cHFtqrwylLuU/BPOOyH8LEe4zbfVwylw5RHkLnKElvipCDye1+NaDG0lLw9uti+TIrcxR4m1xqugBGshf7Tt8Iw1xXz5JhvTv70O6pChFTLzLV4FD2YxkYzWe/NGnnSlHfFkGyFDd49zSDgx2y9gvtsxfRBT6We4rHc5AslArVsBOZVmCT8BzLw6sVthbJtOV1UIpTUuvm4Cz7n5wPuS6uHCpTjvZxJ6iiGvO/mMbfjsgGxDg7QXRwEIizSobhYfK6Bu05eJ7KMLNHQGTblMp3h8zK8t9tYTsJy72BySfrWtiJWNsJSJSWEV11lWGOj+mlz8eqQXKiskG/bwXIc5E6e+nDFmffJF2htrfcdlMZwr/0lsGz4QkG4RaPEiKxNid32HlmRYYPuHwjMGm1s4vgY5Ak0n1RcZy/3ryEGHrCEFBtJQ+cnQc89PFClPxCzkhqnyU0nt3h4er+O9Czyc2bBdBTMsI+UnbVNDOxCNe34uPVZQiL+TmW7Fy6tyQ1kcEVPP8Niv4mxGj/C7PAGU6w4CF29sREjgu3TOBTWZVm6ykgXN1Rp52MaMRjKpdfshlBPcPv7jdbrr0RAFu5KlMDywbIzI4F2I97d3ogbAh/nVVgAf/RlDuzIq3OcxmHbzj5mHUhDkuTxqUehRqlftcAL05oNNvZzFiEpu4o1VV+ApNmddAQcWGATPsOadSYAvunvN7J2UFQnJCkOTRBwhZ5zp+p4i3z7fMR7qBbdq55Ss9D78hRUoC8T0MMXVJcBssioiE1RJu7n51A3Pko8HS+w/XDmGBl0m6f/s0RMchDeIt4rGZQAvLBv7P8oF29TxFcoWtAeQsXB5QnxIWCqzfu4wpglaZSsJdOBghH5HT/CC67KeQICTlszO7uoNWDO4v8te07OkXDnyyK+1WGus6ikIJnZIPVTKJaM1ghfKoBNUvbHOWz1ewbfKXmhFyzDMEGw/V9jl8CdJuvN4OdSb9pHA76W9TzO5iTcylUW7xJ1OpUSbvpj/ZsEoAEvsN/rmNI/meolJenxUW+/g8Fszo6A1bp1R/S0f6NzQTyJ4U+zs5sO40NeiLuKTL8y7Qtd7hNEdWjXgEVZyJ5ib9sSYBMNA==';const _IH='61e581e3c2e50a3ee0782a3689f89f4177524611b35835edde7f5dc9c5718c41';let _src;

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
