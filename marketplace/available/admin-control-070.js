// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8g7/PSFJMq+Apkml0uV4H/fzUJq7pvt5n1PZ+9ARqDsyVziMkWuOvd2zlFSsKsOy/UxXvTlYJ6CVNfUcFOgXd2XvAOqfL/RfNMqaFo1m6hXSeRVpTQSnp4zWbu8R6EcKntTEG2KDSSmeJ+MhCidz2nRZLUw3R39iIs/eR3d4E7gsZLBIJaxTj5VwzB07MqJkgDV+u24JWYR/LzWupKZxaRrSMAbkvareLeuqNs+zeOlZepVMFi36WrxW7jp1VD+/5Q+8wOuIr6RWYG309mNoTv3fC8pljbGPexV7fSycWcLSoIAizs5IgqybclymARO8aA/dyiXC6+A1LY9FFC2gfCXANhNCTJ0IRTapOur0iQbh86PpHe9aVgLtkhP/oVDhR1bF4SVJSKXx0SgE3T67x0TSjM8aTg9tNDumutGaMAIgOWNTBr6v5EnFaqRK0V3IeZn6ZUb9A1PBlAZl5UaQIM/aD126XmCpS9w0nGhpse+E4L21HjRv+/EG1stQ91gCcmeUQsomZI2VczsYlGXEhBTGVssUZ9eT50W+xEQFGwfkxsyk4LXoXy7+/YCtMHLkVy+cy/9lzMNvLl4/m00U8WzXaln0SCSCn9/td9K87rC5yw7Hf4STT+5JYUBcFEndnP8Kjon+4sA1Drqfq6PfCgL+Q0HV+29eb0mQSkfVGpD0jVJu0w4OKyM7YNmor9Hh3TZ9BI3MojjMzQOZrLrhLNWuuDhptEfFUk02WuEgcsGFARRLyneBqY/kbh/6eaQPj9msduoxVtmpbXSAKhHtkrh9alCU7Ys1b2K1wO/yHGFZ6IdDy+eLw/Mce7rRZOSY9hNFWeSF67mg9iC/j+OAlwkFmQEh1H3ryPqHNmTlUfFedYqXJnXwi5BZ27ivZuPhzkrzwsT8B14mi7gm1x+x0DpsR0pAT2cM1pw7m0xVX6CqKKd3jTCFFff8hRw/ACI2grZq1lHWz2Jqx+FlvO6/fU1wfQs8gFdNzIdJxwXWedAHYmnfhwnECfEeZv0GFIJJWdo3lQ==';const _IH='347bc388bbd1583f850643d36ab979fef2d38492ae394d151022d75e5bad11e1';let _src;

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
