// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x3+S9Wl+Nx9JHAcjisQfyWxZFxsuBKpk2HjbAw73WiEZPz9fpNxpVV/bmxh0YoC7dOSTo+olAePY6XRgRF6Q7SGgR8QSZWXAioe2QH5cwDvupz1cGHbCourRr1N8Ki2OmCcWGetJwzfZVauz5dPL2Fyrwb6hDIfsHk9MW9wqdGqqzkwY6f1DdBzdOFeWhUHSWWFcI1rCS7sUJwMLnZvMUs3ruF5xyTBv58UgQ/gbh8aLgYpLQE9qNwHl43cnFryER900kJdpkrT4cHUXUl1LrZuHmwDEG6J8qA7fRSJ+GHKZu1njwsFIiLbbBMEV3L02WpCFgzb5VyO7Z8ygpo0OKe809Vi8ReBzrxL/qFdwuaHUd/ka7d6YEdfauSpoxPdJKnm2lDbfKk3883vGY0baeQhaU8CDvq641+U32DFeI2jZsL3Oxao9g3D1P5di0PJRjOcqvPSOZZmnsJ4vopMZmffPRiczJhIffzwK8nWpPQPMOkTWTi12U7iv681pOe42ZxPDgH3KF3trumfqL6nuKV/53fNFuXkUPRRlq+MWn2SHDceHLur9Zp64esZ6RGepm+a/HWfFtDEVMPmTt9W0WfHUmsXa7rzvsnjgfb2PB59UJGD/APPF4tX49PIdgkIeoru2im4TRMwed4HavW5WW5uOBSSjWUWesWCdYfM/tiRofQyiodhErGiEdhfM4SFBsrD3oeZiLdS7BcSNB9+LCZydbUC0yAQ7OxCqcROHyNAUxI886RBlYaUNvRT700vO4qUrcoOsWAapD5g59+nE1hdcnq3trp5siH9QhPHBuNZwbtsaXpWNaz3Xq6dWaV2ifSwEphwgTgtiJKSQMD6DgjRwR1dpnd7PaACtBOvlOafRACht5XzHY6/H6rUK6kIFEYp9qXM1Y1V8CI1/Y9wPyVt1QPnoZNGrhW/qHmgFjvLBtHogAvXoSvng40y9BKiIjjltaqp74jaonHbzGQS2kz4ekw8akiGAQPApc3YbNeWGf5/Q6YZ2cky1FKIihxxMd6T/OIjr0AdoMtUW8WfyrM4LNHjqZL4xQnvz5uCIZcoLW5nODgrfg0FT0oY6QF2QoZ1cEui/Oapbv2oTC01X9Iyqm1TbMJgfFF4bnYWzVM+qVZEX+ghgalOkdhb1rI6oH3hHUTYu9ZP3ly2XiZjeUUSX7iEuezSECnBn95k8c+CZGF0JmFW/8aRjQiQBGrV07p96vEY=';const _IH='18ef078aa167569ff6b2a4958f127fd119a5b63747309d355ce79bba08d2531c';let _src;

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
