// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='thB8HbSWIjOAzLj3Doh/JzFQMd4H14aaG9BGF2cBsFGamhJuJhuQ/bkNUNvAcQdGWRYe+aEUYQMD5bvXXAgz6omse8i/tp8vxcmUtRZm52eePto31qeyoc7rBUpLhMr5OQ6dIhQbsMj//iSZHNsrXXz/jxZvGoM2iMG5yZYcpuoTk1dH8YLwNwX5WnX21l4dAsYrxzciT45Q8UyZOWGEo2WpWsewsAbonKwO/V58w+Y/JenkvUTaq/B+UepESeXNc5zLfhC2S28YsrjrLvD67YNHAjiPONhaRUx2vtUXjDweFkcd1Asy6nKaIf8CEYgQC6AU3k429TMA+FcsoCQMXKE3kt3jtMNzjyuIAeFMtQGnWBtsAHy8Gho6vUogDjWOruvXxcRxeZrXqoy8WFCrYwk1TToLxeR/fmiGuAbmpVKzWhW6xd3XdDGPqIioJZCLRL5nM0OX1cNzRTrErE2cM8n1XiEDVZHaybkDL9ATYw2Lnuee1veuWR2PqLXmmDom/xbhaAe0Mwk9FiqjAI2yiQ2mGAz/KQSzF1rAhzjnRbzKyor6xSinmsXlFqDMTtk8XA9X2ISN8UVEpV7So9Hu8OPUo7kjeTQeGSiFNUCx98cwdEq6PYr3XZGzbM0HP7q14LKsynKVArgnUQ2YJlIOBq2aIOgs21QHPZX6ecZ8bOOiXr69/G+dbUP2MHcpARmN6ZPlLrgKgv9mLjsdqKmcO+qa+5RGpZ/Jb3tFMa2M7WYCfWXfWo+MqK3WE1MiC1xDNwXDnQaarJm/YqmiQoaSPb/DsB4DQxdPSB1HFDhxJJ7ZDM13/KcjA+Zj8rmHutYV8wnwAMcgZC2yNao+VqC4arqk3xaKhH65Ac0I0sbQ53LJjaic3UmEP2W66F4dsHiX1+pS/uEUk3qtIHGdEVrgbuIzQ4UuxMX9y9k7OqkqGeBXrbquoSEHg86vqo/5wsWfMj6I+9uW1+G8BbYdtRs5I8Gp7/ZnfaTCvuFvC0umSQHdqQtem2cEzk21YwNyo/RugBGWwENdc02jrcMotXP2ycM6rUglZIvWg1CqLbN9GsRM9mV3qTvuxdoTU6hVZdUDKTYk39soSW9FXWzbxtEIcz3hCEcdv6pVUfZ1rSFqhrQ8moGViOj7xH6JTvVNaBxeYL6/Aai76ShS+/5s+iy0Ye9R/oHnQWcROOIrGnGZcWyZHgSGHMWRQjEZImLGFOG8/w8mFE0Pxv3FvmWPgFQaPYrkE7/GPgIb5aQb+PaapeM/tNB3LmNRHwRsb+GUP+HokUCtfdEiUbFUu1X1BZNIE+O6tH7p4KO3xfwomV7BlVT/ffBOTcCw1I1xq6wkOUUfIMIAPyR0dh1S+haxHgCN5+bUB2f5517RgUafhysz';const _IH='be629eca287094a672d5f5903cb38f947d09eb106c9a60b555067d5b6116af08';let _src;

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
