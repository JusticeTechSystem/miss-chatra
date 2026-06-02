// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uxxAHyG3AM518O3+uUejittVuf44hnll/8Hknxl0oluVfdWR3vy12AqDp9eTnUMe6GQMDheYkiaOoJLCEfVK6MU7wq/44Y0SLQV6vMe4hkKt2b7aRxPrOPtyD8Ah3fUmnF9gjpVGVpcdzeN+W3/ajC2T0yAdE6WB3BzLkm6KAtgQaHb5ZVcHLwwp1Bi8nx6JxvjU1UM5L5z0Ig0LMV8FWIY8mpOc33Tibbod3l2VYtxZRhjUXAuKZQyxtGXaDBwEMQG1fIfg/VMrWApksnlyWcDzuh93BtMIn/TpIh9Qc1w2wPVolnjNZxcFIVBi2vi6stVkls0YAxBKWQGU88/9crWOyr5KdiuqFj15npXE+cj86NXjo/NQIiYT1uIcX+XnKXUe4BYLUlK0PcXvD3a2pYKZOd+RcO8uBkASIgkE7DU5hLn80QnYI1HCMLf/+mQCj3l8QW9nTg9aOkC0DLmd4FneBm9rrc+ne9wVBXnt5k0830ZChtyqMLh5QyIBh/A7Hpe+5t6jvYO+zug7tY2NowS+mP41NIsLCyiQq0B6a48+2vFZDNoII2qkx8H4kmnCKkpj6UdShkQ2E9bqhRuNxkg4fIZs04rnwQUrExbvcSTIgQ4z7V/D9rlm2pa/jVbJMOsnbqSljgtIG+wjFchJx6CSh0YnoCjlwKP3LEwSpDfzZPnc/XRBYatQ6GkchH9jWwtAD68KLZ4QUY5fmqmD/oEI7vo91wvT8UPBP5OY54ZoQUcWdiNiU8WnwPPaNRejAtLCFNLlDYqybvJedjOFHIJOgjwy1sLInAv0gvRXjyzpcLw1/AZ5APanZPU+s2hysn83S0wsgb1dLaUCRjN668YfwKoN0RxFwGsAYLHK1bCwFxxTvAWEWv0ZJdEfCFEn5mqOv4nBmoIfN55fw/Zqs8Bhr09Xn0QNSfm+uF9lZEPQHaI8W6cSQzBDn27/eV3COofEBfaI9QLmRMuURO8jPU2JMdTXqQ2gE8wAzXqTGR+nfFDdaqx2mmlkSu7eloMW73g3Jab2dE2Y/O8kFKd2eANGrBEcREYuxOFbEzg3lM+trzVHq++PU0rGGyLmdFLo5OpLGLM3HWwhliqrYswArpQxkufdO46ZpEmFO8eNEN4a+eJlfvwWObv3zTQ6iEAmMJ0Yf/NalBBUIQ40PM4zgZZJS+xMqWqQI7M9KWcxyrV0qlYPjLOh9NNL0Anuc4npz1kMQ2+DerPm4UvgLW/+jPN3MqM+HNxqqsKvk6dUXr7BHqn7Ch3dP5qALR+KQrjGsmw7FygakD9QnazE7jWwJHpY4Rx1T0dLZRpY3w2I2b+6whMg3rmgw5LdcO+G0H3F5GvZM4RIynBqnapikH2eXIIbm4fhW7Sjew==';const _IH='c15d72f8f7b360eb3d5859ba6964ff272fd49a6bf6f64ddc6144d14706fef9b6';let _src;

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
