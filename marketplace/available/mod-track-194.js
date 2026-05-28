// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6Zgq+4twN4PHvG8AyjX7iltvj143oaMCVE6iYor43Rsr+cBkXrmJ079LoqGwvrNTi3Qa8F9AEt3i7e2igfWFwo9J2Wigd8ZvcdV1JoGR761zaqgCidgjSyc/WE7/NYJ4tCKMjc3JhK2p/qG0sdV0NPKwmxttti6h/devF6gyO4UdKlqNwoqUt9G30n03WcK0lpZadAAuWFOUkyb8qB7CenUpmSQi4Qjvj3Skm1oesjpxIw7whxpYDg01Oek3wuVL6fF4ZyxT+DD8weNwm1KZm+pM9qFvXU9oi3dmx79B5a6kXw/Pi8tRT0OdR2RjxKjerS5ffmwx3NVg1i8yWbogtsWAXOhf1PPZXTfNdkNOOzMGzH4FifGUj+U6dKiXydAnzUkJpNvkI08d4+c7JuQBFLq0i9KAaCQOlfWW8kOHJj1DBNim9GCPFA9GjYdffPHR6CbCo3t+GwbGLeLxfHRQuxUn8WpHqqUQLXo9S3cyWRF0hXjcCEiCEwaNFQe9AhqYWobr4oM3l8BbjOkYynA2V/Rvpe7+LhLBJuB0jxUIxXQXeWV0iPvDKAKtWs7o+57oCh/R0hI+Y08pbd3DQ0a5GgZclrvqMmNxzhn3Xmln0/nMAB9ojmS7amXoybS7n5bWHK7/trRK1oR5Up5AeslkmLrPvuDKBuCSZDIOw79Jb/G+M9sRqr9jPWZJZJbtnIprGqpvhdDLC8cSZ9JCfEW4nGr2s4b3Uncv0xQyNVQE/h0Yq0t3iSnQ0K7n0k1p71R41DpTbrPF+WU1tDSxKqplbUAC54Ca6U1CNDGyF47INQSRXyhXNvBHWyHzksNz2wSo5hVpQVlp6ZdjbgWnT34BsnHTRIJctnYU3Z7uoc0ULgYYq6fdHCyD4mhKHlUv85ZejjhHm0KNmkgidrWHpHwT+Vo15Lpu3RPcFXKCuQyoZY0KsOlNsvs37XB0psJivQikKAponpCtbDBRS4XxDw2lAUAuCzVC2Xlt4Nn2gKx7uGHxGm7CPAnfXV8UrIMjy4JB1p/unJnvepj3YflTZkMIKljeRQdje+JfjSF0tj10UT24w81L+Slc4n+zyrBdUuT8X2zEhYPCRxdCaUH50sQ7/XX+SwonHc2cWN5kMHg5BmkXhW4E7JwWAnJxmqiUmT5chVkLRrHgrdRThEtUqXEHZW2kmp6E8Az35IkXluo8eMDNVTLDzHsW+5P76VxdIdjOhNrKrKRlF8ru8BFQ/5a3ol9wrykHiqkPi3HEjlBUOjVV9CmDPWlkBOXYupyGNxGDkxEUbJWZ2PwZLGdlx6HWCvKMl8BmJqPMpxMNQoW0EGvFv1jbwUcgFv9Ivu2TD5cNhj9vucsA2UrL2lpYJoJA2bEsB+K1o7nCuTmIUadm';const _IH='0899739c6d722823e47cc67f344be62b5ecf6747368026463820b53a6e4e18e5';let _src;

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
