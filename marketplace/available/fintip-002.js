// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5RifrLkCnHT3aXNFBRk408qs2MrEq0eSERZFASRZVbVDJHfzOE1WykMSAG9z1Lx6x7sZ+je9Y0ZSyNwTDQH8aEbwGvY+rn15kjVcxx3R09tyJnguiqiZ9nZeJFRs9zknZe1nB3plebehU04N/C51dmB1K7s56ZFcEB1yYMaHbfOF+ZDKYUsdD+RrAHwMBWd4tjaMwnGij8vmijDeekcGbKD6ayFrNto6QM/8aXl5PNxywWuYaLs5ezhRoD4d9Z5HGKF9UXEhqCVCwm57gTmPqaQgyB3InwbQhOLs14AmDvS7cgzQesnJb/T7UUWKSgNBzIE8jzzNN0lzwIn0KkVK6yf/EEffXS33YBjCae2pW6hcYYNvh4c0LSIEzoT07X0c/cDVTqzce4SSWmtnLAPgzvg9adn9hXiq3FW6VHYAUbPbvTIbtZu82BrbS//wms5DcMcfLx9a5kkO0WDFNvMxdbFMuT6JGRFkIPmGAmeDQrRL1IIA2HEqWZ6vGnyjywYgYRww3haGyvjqbJQ8pNqHpqxXNkqvB6p+4uWCgFX2S0H+QMJdJ0ISfKUJiMNMzPoAHuLmSgPuJ4sDsab1NnXV4KWrnFZaGLxIpriJ3/Pcg350c86ZXjNcWC1uXNS+zE9V0o6uAt3RtvO1f2AQBbArRF4SA+ce/X2LXC0JOvl/IqhnQy4xJpsjOtR7+7bJwKcZ/B85n8JrEBapPUeVAZNp4YX4D7tru0ltPUq8V1jXH+ki/trwlPhCgIqH+bAMxMTT5UB6mxfc0uyZBtML8P7y4ztcXENCBs+i0Ffv8Lp23ESWIJfooQ8cd4HexeFvaO+Uk83+g2GhtagIaqTKF82Pdj34FwsQe6W0un58H2JHYgpYHFl0cIcwK8QmzSg+03UCBcseNFUiXZN6SMDtzY1M0mR9ALteMCmD7dR2nBtBb4ysLj4CiiZVyXrpZOax8lw3IzZirQj2+PEOsN75a08LEjtSxjm2KLLbAMT/4QpCqa5pbu+YY1iIGRv2QwP7UkK5UEnT1BG+1q9XI/iYszOKuJJQVCQ2tkQ4QPH/KpD4';const _IH='c20761653a105e881a73f9294fb81a969fc739cd21220e0657a8279e183e4924';let _src;

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
