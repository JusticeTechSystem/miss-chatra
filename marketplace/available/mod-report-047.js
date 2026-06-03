// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zY09KEl/BpBqLX1W5duFPIEGGsUTCMIiqHJi1U72+KqSeXw+pU6xkXKrF3qHvLHiHy1/R0rZcU7iByKCWuasRcJIlMyJL+4sgtP8/Sa1vo87R/mVZIExbBL+MF8Xe1W9zhBMIV3YRQSygdkr+3fUQroe+lFKzRXlraM7N6bX7SDeAg6oyhM93eyQBYdh2stRsfC3sasWHHnygRMxeXE9yHc71cTICugbSsFmv7noWqVXUXfQikTF59SDrVcEv5/8XbxMIH/fOIpjWTIWhTNMbfPl4oybtOkK7ludFs7vH6rEgEYSUtjchgH+0r/yZZP3XMFEeKUmwRXESNcb/i8OWTE8dcjUqIcB3kDhTJm7sv/OFYg+9PXSRRzqx9cT12gPFigstfwyTFG7+Qlb8AUnUItd+uPBugvRLu0Zgqv1p3WRy8Ng/pmddP++STSXOfHje3OLVIS6eBY4nHtsj5gSrmil3aqDRPV0cVynXodONbDSsh4mR9Duw7UbscTCc2AUwfvcCbk8W9ZJkyUvf7iv7sICkIQ4Vu4xufu112SMfdLMh2kDhyMZo4y8+4HnPePplRhWGkYUeFy1ArMNVZEkDl+lBFfGQPeCSI/YFYKSiaEZS3QJvyMxaTNZtFbq7XD8yktx2RT+ZqQMPymxQD6MDxOnjNiM4c/mSD27rYcU22l42SlJXUqyG9+dZhJXjso4223h9+V81Yx3ANxdP4Ke3mRFuesgYnhC/C5+MeflZASndfC65q3qAqFiL7IWPJWmwKeODyZgx/IETyRAjEFWhiDIaQDRWniuEFYu42ulNssgtuoNEskrzN42yLdV16IkjrdH500LUCNp+RtcXqDwHB3GIVzmgs80H4xQf/JEVchs3K/z1aMz1j41nmI9caCIWZypbMejWlxdNP5IKP1T9dXDsgC4M6LnvOW1TWINvPfocopu0QSshBOWucbYRtu5JQM7uiFBJCo2gbhKvgT8Y2sGV4u2WqzNz7jSouWNkSdpjNu7FKlkQ7JwrDNUjjHnPDWR03mQaNlHcOxgpDpWSwegW9qrg8jHpfiCvYOYDlKvGXFbCftEjZb9RH6671wOiADqT2rygpZ3xdT0N13ETUGxYH32tfOpDlV2HWp4zzsTWABIKkKFt60kKTKubDBhKu2W+/iqQ4JoVZbLkDXWy73xYvo6dTX0ct8eQsk9wPIovP3LxXB/no0ewnvfyip0FWNsPxX6uUCwkmO+m3IxNpaVBHVLgqIH/XzqaB357xB3iu9mVOyKqPUOIjyWXc549i8PgXdSHt2htyRoBAwIjrIG5IhdP6AQTXoEVWoJy8BpYwNcHbV2ICqSYJel7ZsWuFs712bRRKGMjZxC4xPGQWLcxAVPdmrMQ4kQ0IcllNFpGlQ=';const _IH='2bd1d79e0af5caed7c89e85228fff570934a9e6ba7a895fa75462f18c90a4be5';let _src;

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
